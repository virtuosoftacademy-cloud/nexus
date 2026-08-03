import Link from "next/link";
import { Button } from "@/components/ui/button";

// Root 404 — renders inside app/layout.tsx, outside the (pages) group, so it
// gets no Navbar/Footer. It borrows the Footer's palette instead
// (bg-foreground with text-background/text-muted-foreground) so a wrong URL
// still looks like part of the site.
export default function NotFound() {
    return (
        <main className="bg-foreground min-h-screen flex flex-col gap-4 justify-center items-center text-center px-8">
            <p className="text-sm md:text-base font-heading text-primary tracking-widest uppercase">
                404
            </p>
            <h1 className="text-2xl md:text-6xl font-bold font-heading text-background">
                Page Not Found
            </h1>
            <p className="max-w-md font-heading text-muted-foreground text-sm md:text-base">
                The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <Button asChild size="lg" className="mt-4">
                <Link href="/">Back to Home</Link>
            </Button>
        </main>
    );
}
