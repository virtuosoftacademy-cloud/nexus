"use client";

import React, { useState } from "react";
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
import { ChevronRight, ChevronUp, Menu, X } from "lucide-react";
import { serviceItems } from "@/app/_constant";

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMobile, setOpenSubMobile] = useState<number | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // ── Track dropdown open via onValueChange — fires when any item opens/closes ──
  const [servicesOpen, setServicesOpen] = useState(false);

  const isTransparentRoute =
    pathname === "/" ||
    pathname === "/landing" ||
    pathname.startsWith("/services");

  const isLight = scrolled || servicesOpen;
  const navBg = !isTransparentRoute ? "bg-white shadow-sm" : "bg-transparent shadow-none";
  const textColor = !isTransparentRoute ? "text-foreground" : "text-accent";
  const logoSrc = !isTransparentRoute ? "/assets/logo.svg" : "/assets/logo-white.svg";

  return (
    <nav
      id="nav"
      className={cn(
        "z-50 w-full py-4 md:py-6 border-b border-muted-foreground/40 transition-all duration-300",
        navBg,
        textColor,
      )}
    >
      <div className="flex items-center justify-between px-8 md:px-14 mx-auto">

        {/* Logo */}
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Nexus Logo"
            width={160}
            height={48}
            className="transition-all duration-300 h-6 md:h-12"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">

          <NavigationMenu onValueChange={(val) => setServicesOpen(val !== "")} className="pr-10">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-primary")} href="/">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem value="services">
                <NavigationMenuTrigger className="bg-transparent! hover:text-primary">Our Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="min-w-[74rem] py-4 px-7">
                    <h4 className="text-sm text-muted-foreground leading-snug pb-4">Our Services</h4>
                    <ul className="grid grid-cols-2 xl:grid-cols-3 gap-6 text-sm">
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
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-primary")} href="/blogs">
                  Industries
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-primary")} href="/blogs">
                  Insights
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-primary")} href="/blogs">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-primary")} href="/about">
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          {/* <div className="flex gap-2 text-sm">
            <span className="text-primary">English</span>
            <span className="text-accent">| Arabic</span>
          </div> */}
          <Button size="lg" className="text-base font-normal py-6 px-10" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen((p) => !p)} aria-label="Toggle menu">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 px-4 bg-foreground text-accent max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col py-8 px-8 gap-6 text-xl font-medium">

            <Link href="/" className="hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <div>
              <div
                className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors"
                onClick={() => setMobileServicesOpen((p) => !p)}
              >
                <Link href="#" onClick={(e) => { e.stopPropagation(); setMobileOpen(false); }}>
                  Our Services
                </Link>
                <ChevronUp className={cn("transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
              </div>

              <div className={cn("grid transition-all duration-300 ease-out", mobileServicesOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0")}>
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-5 pl-4 border-l border-white/30 pt-3 pb-2">
                    {serviceItems.map((item) => (
                      <ListItem key={item.title} title={item.title} icon="#" href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="#" className="hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Industries</Link>
            <Link href="/blogs" className="hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Insights</Link>
            <Link href="/about" className="hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>About Us</Link>

            {/* <div className="flex gap-2 text-sm pt-4">
              <span className="text-primary">English</span>
              <span>| Arabic</span>
            </div> */}

            <Button className="py-6 text-lg font-normal" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}