
import Link from "next/link";
import type { ReactNode } from "react";
import { auth, signOut } from "@/auth";

export const metadata = {
    title: { template: "%s · Admin", default: "Admin" },
};

const navItems = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/new-post", label: "New post" },
    { href: "/admin/categories", label: "Categories" },
];

export default async function AdminLayout({ children }: { children: ReactNode }) {
   
    const session = await auth();

    return (
        <div className="mx-auto flex min-h-screen w-full max-w-6xl gap-8 px-4 py-8">
            <aside className="hidden w-48 shrink-0 sm:block">
                <p className="px-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    Blog admin
                </p>
                <nav className="mt-3 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-700
                                       hover:bg-neutral-100 hover:text-neutral-900"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-6 space-y-1 border-t border-neutral-200 pt-4">
                    <Link
                        href="/blogs"
                        className="block rounded-md px-3 py-2 text-sm text-neutral-500 hover:text-neutral-900"
                    >
                        ← View site
                    </Link>
                    <div className="px-3 pt-2">
                        <p className="truncate text-xs text-neutral-400">
                            {session?.user?.email}
                        </p>
                        <form
                            action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/signin" });
                            }}
                        >
                            <button
                                type="submit"
                                className="mt-1 text-sm font-medium text-neutral-700 hover:text-neutral-900"
                            >
                                Sign out
                            </button>
                        </form>
                    </div>
                </div>
            </aside>

            <div className="min-w-0 flex-1">{children}</div>
        </div>
    );
}