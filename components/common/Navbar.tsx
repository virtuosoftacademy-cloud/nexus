
"use client";

// ---------------------------------------------------------------------------
// Section: Imports
// ---------------------------------------------------------------------------
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    ListItem,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronUp, Menu, X } from "lucide-react";
import { serviceItems } from "@/app/_constant";

// ─── Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    // ── Track dropdown open via onValueChange — fires when any item opens/closes ──
    const [servicesOpen, setServicesOpen] = useState(false);

    // ── Correction 1: scroll listener (scrolled was never set before) ──
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll(); // sync initial state (page may restore mid-scroll)
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ── Correction 2: close menus on route change (stale-open menu fix) ──
    useEffect(() => {
        setMobileOpen(false);
        setMobileServicesOpen(false);
    }, [pathname]);
    // ── Close the mobile panel on page scroll ──
    useEffect(() => {
        if (!mobileOpen) return;

        const closeOnScroll = () => {
            setMobileOpen(false);
            setMobileServicesOpen(false);
        };

        window.addEventListener("scroll", closeOnScroll, { passive: true });
        return () => window.removeEventListener("scroll", closeOnScroll);
    }, [mobileOpen]);
    const isTransparentRoute =
        pathname === "/" || pathname.startsWith("/services/") || pathname.startsWith("/case-studies");

    const isLight = servicesOpen || mobileOpen;
    const showLight = !isTransparentRoute;

    const navBg = showLight ? "bg-white shadow-sm" : "bg-transparent shadow-none";
    const textColor = showLight ? "text-foreground" : "text-accent";
    const logoSrc = showLight ? "/assets/logo.svg" : "/assets/logo-white.svg";

    return (
        <nav
            id="nav"
            className={cn(
                "absolute top-0 z-50 w-full py-4 md:py-6 border-b border-muted-foreground/40 transition-all duration-300",
                navBg,
                textColor,
            )}
        >
            <div className="flex items-center justify-between px-6 sm:px-8 xl:px-14">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src={logoSrc}
                        alt="Nexus Logo"
                        width={160}
                        height={48}
                        className="transition-all duration-300 h-8 md:h-12 -mr-8 md:mr-0"
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavigationMenu
                        onValueChange={(val) => setServicesOpen(val !== "")}
                        className="pr-10"
                    >
                        <NavigationMenuList className="gap-1">
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={cn(navigationMenuTriggerStyle(), "hover:text-primary")}
                                    href="/"
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem value="services">
                                <NavigationMenuLink href={"/services"}>
                                    <NavigationMenuTrigger className="bg-transparent! hover:text-primary">Services</NavigationMenuTrigger>
                                </NavigationMenuLink>
                                <NavigationMenuContent>
                                    <div className="min-w-[70rem] py-4 px-7">
                                        <h4 className="text-sm text-muted-foreground leading-snug pb-4">Services</h4>
                                        <ul className="grid grid-cols-2 xl:grid-cols-3 text-sm">
                                            {serviceItems.map((item) => (
                                                <ListItem key={item.title} icon={item.icon} title={item.title} href={item.href}>
                                                    {item.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                        <div className="pt-4 pb-2">
                                            <hr className="text-muted-foreground" />
                                            <h4 className="text-sm text-muted-foreground leading-snug pt-4">Structured financial advisory, accounting, governance and systems oversight across the UK and UAE.</h4>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={cn(navigationMenuTriggerStyle(), "hover:text-primary")}
                                    href="/blogs"
                                >
                                    Insights
                                </NavigationMenuLink>
                            </NavigationMenuItem>


                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={cn(navigationMenuTriggerStyle(), "hover:text-primary")}
                                    href="/case-studies"
                                >
                                    Case Studies
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={cn(navigationMenuTriggerStyle(), "hover:text-primary")}
                                    href="/about"
                                >
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
                <div className="hidden md:flex items-center gap-4">
                    <Button size="lg" className="text-base font-normal py-6 px-10" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    className="md:hidden"
                    onClick={() => setMobileOpen((open) => !open)}
                >
                    {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </div>

            {/* Mobile panel */}
            {/* Mobile panel */}
            {mobileOpen && (
                <div className="md:hidden bg-white text-foreground border-t border-muted-foreground/20 px-8 py-6 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain mt-4">
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link href="/" className="block font-medium">
                                Home
                            </Link>
                        </li>

                        {/* Collapsible Services group */}
                        <li>
                            <button
                                type="button"
                                aria-expanded={mobileServicesOpen}
                                className="flex w-full items-center justify-between py-2 font-medium"
                                onClick={() => setMobileServicesOpen((open) => !open)}
                            >
                                <Link href={"/services"}>
                                Services
                                </Link>
                                <ChevronUp
                                    className={cn(
                                        "size-4 transition-transform duration-300",
                                        !mobileServicesOpen && "rotate-180",
                                    )}
                                />
                            </button>
                            {mobileServicesOpen && (
                                <ul className="pl-4 pb-2 flex flex-col gap-1 max-h-64 overflow-y-auto overscroll-contain">
                                    {serviceItems.map((item) => (
                                        <li key={item.href}>
                                            <Link href={item.href} className="block py-1.5 text-sm">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>


                        <li>
                            <Link href="/blogs" className="block py-2 font-medium">
                                Insights
                            </Link>
                        </li>

                        <li>
                            <Link href="/case-studies" className="block py-2 font-medium">
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 font-medium">
                                About
                            </Link>
                        </li>
                        <li>
                            <Button size="lg" className="text-base font-normal py-6 px-10" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}