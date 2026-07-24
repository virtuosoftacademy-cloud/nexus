// ============================================================================
// File: components/upload/ImageUploadField.tsx
// Purpose: Single-image form field used by PostForm and CaseStudyForm.
//          Two ways to set the image, both feeding ONE hidden input so the
//          server actions keep reading the same field name unchanged:
//            1) Upload a file -> client-validated (lib/r2-client), POSTed
//               to /api/upload, stored URL captured
//            2) Paste a URL/path directly (R2 URL or local /images/... path)
//          Shows a live preview, upload progress state, and inline errors.
// Type: Client Component ("use client")
// ============================================================================
"use client";

import { useRef, useState } from "react";
import { validateImageForSlot, type ImageKind } from "@/lib/r2";

const inputClass =
    "mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm " +
    "text-neutral-900 shadow-sm focus:border-neutral-900 focus:outline-none " +
    "focus:ring-1 focus:ring-neutral-900";

export function ImageUploadField({
    name,
    kind,
    label,
    defaultValue = "",
    error,
}: {
    name: string;            // form field name the server action reads
    kind: ImageKind;         // "post" | "case-study" -> R2 folder + validation
    label: string;
    defaultValue?: string | null;
    error?: string;          // server-side field error, if any
}) {
    const [url, setUrl] = useState(defaultValue ?? "");
    const [uploading, setUploading] = useState(false);
    const [localError, setLocalError] = useState<string | null>(null);
    const [warnings, setWarnings] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    async function handleFile(file: File | undefined | null) {
        if (!file) return;
        setLocalError(null);
        setWarnings([]);

        // Client-side validation (type, size, dimensions for the slot)
        const validation = await validateImageForSlot(file, kind);
        if (!validation.isValid) {
            setLocalError(validation.errors.join(" "));
            return;
        }
        if (validation.warnings.length) setWarnings(validation.warnings);

        setUploading(true);
        try {
            const body = new FormData();
            body.append("file", file);
            body.append("kind", kind);

            const res = await fetch("/api/upload", { method: "POST", body });
            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.error || "Upload failed");
            }
            setUrl(data.url);
        } catch (err) {
            setLocalError(err instanceof Error ? err.message : "Upload failed");
        } finally {
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    }

    return (
        <div>
            <span className="block text-sm font-medium text-neutral-800">{label}</span>

            {/* The value the server action actually receives */}
            <input type="hidden" name={name} value={url} />

            {/* Preview */}
            {url ? (
                <div className="mt-2 flex items-start gap-3">
                    {/* Plain img: admin preview of arbitrary URLs/paths */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={url}
                        alt="Selected image preview"
                        className="h-24 w-40 rounded-md border border-neutral-200 object-cover"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.opacity = "0.3";
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => setUrl("")}
                        className="rounded-md px-2.5 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                        Remove
                    </button>
                </div>
            ) : (
                <p className="mt-2 text-xs text-neutral-500">No image selected.</p>
            )}

            {/* Upload */}
            <div className="mt-3 flex flex-wrap items-center gap-3">
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/avif"
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files?.[0])}
                />
                <button
                    type="button"
                    disabled={uploading}
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium
                               text-neutral-700 hover:bg-neutral-100 disabled:opacity-60"
                >
                    {uploading ? "Uploading…" : url ? "Replace image" : "Upload image"}
                </button>
                <span className="text-xs text-neutral-400">JPEG, PNG, WebP or AVIF · max 10MB</span>
            </div>

            {/* Manual URL/path entry — keeps the paste-a-URL and local-path workflows */}
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="…or paste an image URL / local path like /images/posts/cover.jpg"
                className={inputClass}
            />

            {warnings.map((w) => (
                <p key={w} className="mt-1 text-xs text-amber-600">{w}</p>
            ))}
            {(localError || error) && (
                <p className="mt-1 text-sm text-red-600">{localError || error}</p>
            )}
        </div>
    );
}