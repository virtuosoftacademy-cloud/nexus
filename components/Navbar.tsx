import { Button } from "@/components/ui/button";
import { Building2, PoundSterling } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-background/70 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-auto h-20 px-6 md:px-0">
        <Link href="/">
          <Image src="assets/logo.svg" alt="Nexus Logo" width={80} height={20} className="w-30 h-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Consulting Services</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Property Management</Link>
          <Link href="#" className="hover:text-foreground transition-colors">About Us</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Blog</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-sm">
            English
            <span className="text-primary">
              |
              Arabic
            </span>
          </div>
          <Button size="lg" className="text-2xs font-normal">
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;