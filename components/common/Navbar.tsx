"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronRight, ChevronUp, Menu, X } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const consultingServicesItems = [
  { title: "Payroll", href: "#", subPages: [{ label: "Payroll Bureau Service", href: "#" }, { label: "Compliance Service", href: "#" }] },
  { title: "Finance Function", href: "#", subPages: [{ label: "Business Accounting", href: "#" }, { label: "Financial Consultancy", href: "#" }, { label: "Individual Accounting", href: "#" }] },
  { title: "Fractional CFO", href: "#", subPages: [] },
  { title: "Digital Accounting", href: "#", subPages: [] },
  { title: "Tax", href: "#", subPages: [] },
  { title: "Property Accounting", href: "#", subPages: [] },
  { title: "Industries", href: "#", subPages: [] },
  { title: "View all Payroll Services", href: "#", subPages: [], isViewAll: true },
];

interface ServiceItem { title: string; description: string; href: string }

const serviceItems: ServiceItem[] = [
  { title: "UK Accounting & Tax", description: "Full-spectrum compliance, self-assessment, and year-end accounts for UK businesses.", href: "/services/uk-accounting-and-tax" },
  { title: "Property Accounting & Tax", description: "SDLT planning, SPV structuring, rental portfolios, and HMO compliance.", href: "/services/property-accounting-and-tax" },
  { title: "Construction Accounting", description: "CIS obligations, VAT on construction, and subcontractor management.", href: "/services/construction-accounting" },
  { title: "Advisory Services", description: "CFO-level advisory, governance, and strategic business intelligence.", href: "/services/advisory-services" },
  { title: "Technology & Solutions", description: "Digital transformation, platform integration, and process automation.", href: "/services/technology-and-solutions" },
  { title: "Tax Authority Support", description: "HMRC and FTA correspondence, investigations, and dispute resolution.", href: "/services/tax-authority-support" },
];

// ─── ListItem ─────────────────────────────────────────────────────────────────

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none px-4 py-3 leading-none no-underline outline-none transition-colors hover:text-primary",
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          <ChevronRight className="h-3.5 w-3.5 mt-0.5 text-primary opacity-0 shrink-0" />
          <div className="text-sm font-semibold text-gray-800 leading-tight">{title}</div>
        </div>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

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
  const navBg = isLight || !isTransparentRoute ? "bg-white shadow-sm" : "bg-transparent shadow-none";
  const textColor = isLight || !isTransparentRoute ? "text-foreground" : "text-accent";
  const logoSrc = isLight || !isTransparentRoute ? "/assets/logo.svg" : "/assets/logo-white.svg";

  return (
    <nav
      id="nav"
      className={cn(
        "z-50 w-full py-4 md:py-6 border-b border-muted-foreground/40 transition-all duration-300",
        navBg,
        textColor,
      )}
    >
      <div className="flex items-center justify-between pr-6 md:px-0 max-w-360 mx-auto">

        {/* Logo */}
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Nexus Logo"
            width={160}
            height={48}
            className={cn("transition-all duration-300 h-7 md:h-auto", scrolled && "h-7 lg:h-8")}
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
                <NavigationMenuTrigger className="hover:text-primary">Our Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-70 py-4">
                    <ul className="grid grid-cols-1 text-sm">
                      {serviceItems.map((item) => (
                        <ListItem key={item.title} href={item.href} title={item.title}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-primary")} href="/landing">
                  Property Pro
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:text-primary")} href="/blogs">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>

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
          <Button size="lg" className="text-sm font-normal p-6" asChild>
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
                    {consultingServicesItems.map((service, index) => (
                      <div key={service.title} className="space-y-3">
                        <div
                          className="flex items-center justify-between cursor-pointer text-lg hover:text-primary transition-colors"
                          onClick={() => setOpenSubMobile(openSubMobile === index ? null : index)}
                        >
                          <Link href={service.href}>{service.title}</Link>
                          {service.subPages.length > 0 && (
                            <ChevronUp className={cn("transition-transform duration-300", openSubMobile === index && "rotate-180")} />
                          )}
                        </div>

                        <div className={cn("grid transition-all duration-300 ease-out", openSubMobile === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                          <div className="overflow-hidden">
                            <div className="flex flex-col gap-3 pl-6 border-l border-white/20 pt-2 pb-1">
                              {service.subPages.map((sub, i) => (
                                <Link key={i} href={sub.href} className="text-base text-accent hover:underline underline-offset-4 capitalize transition-colors" onClick={() => setMobileOpen(false)}>
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/landing" className="hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Property Pro</Link>
            <Link href="/about" className="hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/blogs" className="hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>

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