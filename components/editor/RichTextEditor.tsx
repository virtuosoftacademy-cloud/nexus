"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useRef, useState } from "react";
import { toEditorHtml } from "@/lib/rich-text";
import { isRenderableImageSrc } from "@/lib/blog-actions/blog-image";

type Props = {
    name: string;            // form field name the server action reads
    label: string;
    defaultValue?: string | null;
    error?: string;
    help?: string;
};

const btn =
    "rounded px-2 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-200 " +
    "disabled:opacity-40 disabled:hover:bg-transparent";
const btnActive = "bg-neutral-900 text-white hover:bg-neutral-800";

function ToolbarButton({
    editor,
    onClick,
    isActive,
    label,
    title,
}: {
    editor: Editor;
    onClick: () => void;
    isActive?: boolean;
    label: string;
    title: string;
}) {
    return (
        <button
            type="button"          // never submits the surrounding form
            title={title}
            aria-pressed={Boolean(isActive)}
            // Without this the button takes focus on mousedown and the editor
            // loses its selection, so the command lands on a collapsed cursor
            // and appears to do nothing.
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
                onClick();
                editor.chain().focus().run();
            }}
            className={`${btn} ${isActive ? btnActive : ""}`}
        >
            {label}
        </button>
    );
}

export function RichTextEditor({ name, label, defaultValue, error, help }: Props) {
    // The value the server action actually receives. Kept in state and mirrored
    // into a hidden input, the same trick ImageUploadField uses.
    const [html, setHtml] = useState(() => toEditorHtml(defaultValue));
    const [uploading, setUploading] = useState(false);
    const [imageError, setImageError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const editor = useEditor({
        extensions: [
            // StarterKit already bundles Link; Image is the one addition.
            StarterKit,
            Image.configure({
                inline: false,
                // Base64 blobs would be inlined into the post body and bloat the
                // row; every image goes to R2 and is referenced by URL.
                allowBase64: false,
            }),
        ],
        content: toEditorHtml(defaultValue),
        // Required under the App Router: rendering the editor during SSR
        // produces markup the client immediately replaces, which React
        // reports as a hydration mismatch.
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class:
                    "min-h-64 w-full px-3 py-2 text-sm text-neutral-900 focus:outline-none " +
                    // The editor renders real HTML, so the block elements need
                    // their own spacing — there is no typography plugin here.
                    "[&_p]:mb-3 [&_h1]:mb-3 [&_h1]:text-2xl [&_h1]:font-semibold " +
                    "[&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold " +
                    "[&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold " +
                    "[&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 " +
                    "[&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:pl-6 " +
                    "[&_blockquote]:mb-3 [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-300 [&_blockquote]:pl-4 [&_blockquote]:italic " +
                    "[&_pre]:mb-3 [&_pre]:rounded [&_pre]:bg-neutral-900 [&_pre]:p-3 [&_pre]:text-xs [&_pre]:text-neutral-100 " +
                    "[&_hr]:my-4 [&_hr]:border-neutral-300 " +
                    "[&_img]:my-3 [&_img]:max-w-full [&_img]:rounded " +
                    "[&_a]:text-blue-700 [&_a]:underline",
            },
        },
        onUpdate: ({ editor }) => {
            // Normalise "empty" to "" so the server's required check behaves —
            // an untouched editor serialises as "<p></p>", which is truthy.
            setHtml(editor.isEmpty ? "" : editor.getHTML());
        },
    });

    /** Toggle a link on the selection. Empty input removes it. */
    function promptForLink() {
        if (!editor) return;
        const existing = (editor.getAttributes("link").href as string) ?? "";
        const url = window.prompt(
            "Link URL — leave blank to remove.\nUse /contact for a page on this site.",
            existing
        );
        if (url === null) return; // cancelled

        const trimmed = url.trim();
        if (!trimmed) {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
        }
        // The sanitiser drops javascript: on render, but rejecting it here
        // means the admin sees why instead of the link silently vanishing.
        if (!/^(https?:\/\/|mailto:|\/)/i.test(trimmed)) {
            window.alert(
                "Links must start with http://, https://, mailto: or / for a page on this site."
            );
            return;
        }
        const chain = editor.chain().focus();

        if (!editor.state.selection.empty) {
            // Text is selected: turn it into the link.
            chain.setLink({ href: trimmed }).run();
        } else if (editor.isActive("link")) {
            // Cursor inside an existing link: retarget the whole link.
            chain.extendMarkRange("link").setLink({ href: trimmed }).run();
        } else {
            // Nothing selected: setLink alone would only arm a stored mark and
            // appear to do nothing, so insert the URL as the link text.
            chain
                .insertContent({
                    type: "text",
                    text: trimmed,
                    marks: [{ type: "link", attrs: { href: trimmed } }],
                })
                .run();
        }
    }

    /** Upload to R2 through the same endpoint the cover-image field uses. */
    async function handleImageFile(file: File | undefined | null) {
        if (!file || !editor) return;
        setImageError(null);
        setUploading(true);
        try {
            const body = new FormData();
            body.append("file", file);
            body.append("kind", "post");

            const res = await fetch("/api/upload", { method: "POST", body });
            const data = await res.json();
            if (!res.ok || !data.success) throw new Error(data.error || "Upload failed");

            editor.chain().focus().setImage({ src: data.url, alt: file.name }).run();
        } catch (err) {
            setImageError(err instanceof Error ? err.message : "Upload failed");
        } finally {
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    }

    /** Insert an image already hosted somewhere (or a /public path). */
    function promptForImageUrl() {
        if (!editor) return;
        const url = window.prompt("Image URL or path, e.g. /assets/cover.png");
        if (!url) return;
        const trimmed = url.trim();
        if (!isRenderableImageSrc(trimmed)) {
            window.alert(
                "Image must be a path starting with / or a full http(s) URL."
            );
            return;
        }
        editor.chain().focus().setImage({ src: trimmed }).run();
    }

    return (
        <div>
            <span className="block text-sm font-medium text-neutral-800">{label}</span>
            {help && <p className="mt-0.5 text-xs text-neutral-500">{help}</p>}

            <input type="hidden" name={name} value={html} />

            <div
                className={`mt-1 rounded-md border bg-white shadow-sm focus-within:ring-1 ${error
                    ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-500"
                    : "border-neutral-300 focus-within:border-neutral-900 focus-within:ring-neutral-900"
                    }`}
            >
                {editor && (
                    <div className="flex flex-wrap items-center gap-0.5 border-b border-neutral-200 px-2 py-1.5">
                        <ToolbarButton
                            editor={editor} label="B" title="Bold"
                            isActive={editor.isActive("bold")}
                            onClick={() => editor.chain().focus().toggleBold().run()}
                        />
                        <ToolbarButton
                            editor={editor} label="I" title="Italic"
                            isActive={editor.isActive("italic")}
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                        />
                        <ToolbarButton
                            editor={editor} label="S" title="Strikethrough"
                            isActive={editor.isActive("strike")}
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                        />

                        <span className="mx-1 h-4 w-px bg-neutral-200" />

                        {([2, 3] as const).map((level) => (
                            <ToolbarButton
                                key={level}
                                editor={editor} label={`H${level}`} title={`Heading ${level}`}
                                isActive={editor.isActive("heading", { level })}
                                onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
                            />
                        ))}
                        <ToolbarButton
                            editor={editor} label="¶" title="Paragraph"
                            isActive={editor.isActive("paragraph")}
                            onClick={() => editor.chain().focus().setParagraph().run()}
                        />

                        <span className="mx-1 h-4 w-px bg-neutral-200" />

                        <ToolbarButton
                            editor={editor} label="• List" title="Bullet list"
                            isActive={editor.isActive("bulletList")}
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                        />
                        <ToolbarButton
                            editor={editor} label="1. List" title="Numbered list"
                            isActive={editor.isActive("orderedList")}
                            onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        />
                        <ToolbarButton
                            editor={editor} label="❝" title="Quote"
                            isActive={editor.isActive("blockquote")}
                            onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        />
                        <ToolbarButton
                            editor={editor} label="—" title="Divider"
                            onClick={() => editor.chain().focus().setHorizontalRule().run()}
                        />

                        <span className="mx-1 h-4 w-px bg-neutral-200" />

                        <ToolbarButton
                            editor={editor} label="🔗" title="Link"
                            isActive={editor.isActive("link")}
                            onClick={promptForLink}
                        />
                        <button
                            type="button"
                            title="Upload an image"
                            disabled={uploading}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => fileInputRef.current?.click()}
                            className={btn}
                        >
                            {uploading ? "Uploading…" : "🖼 Upload"}
                        </button>
                        <button
                            type="button"
                            title="Insert an image by URL"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={promptForImageUrl}
                            className={btn}
                        >
                            🖼 URL
                        </button>
                        {/* Kept out of the toolbar flow so the button styling
                            stays consistent; clicking the button opens it. */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpeg,image/png,image/webp,image/avif"
                            className="hidden"
                            onChange={(e) => handleImageFile(e.target.files?.[0])}
                        />

                        <span className="mx-1 h-4 w-px bg-neutral-200" />

                        <ToolbarButton
                            editor={editor} label="↺" title="Undo"
                            onClick={() => editor.chain().focus().undo().run()}
                        />
                        <ToolbarButton
                            editor={editor} label="↻" title="Redo"
                            onClick={() => editor.chain().focus().redo().run()}
                        />
                    </div>
                )}

                <EditorContent editor={editor} />
            </div>

            {imageError && <p className="mt-1 text-sm text-red-600">{imageError}</p>}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
