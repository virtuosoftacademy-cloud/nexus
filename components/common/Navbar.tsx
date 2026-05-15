'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import { usePathname } from "next/navigation";

const consultingServicesItems = [
  {
    title: "Payroll", href: "#", subPages: [
      { label: "Payroll Bureau Service", href: "#" },
      { label: "Compliance Service", href: "#" }
    ]
  },
  {
    title: "Finance Function", href: "#", subPages: [
      { label: "Business Accounting", href: "#" },
      { label: "Financial Consultancy", href: "#" },
      { label: "Individual Accounting", href: "#" }
    ]
  },
  { title: "Fractional CFO", href: "#", subPages: [] },
  { title: "Digital Accounting", href: "#", subPages: [] },
  { title: "Tax", href: "#", subPages: [] },
  { title: "Property Accounting", href: "#", subPages: [] },
  { title: "Industries", href: "#", subPages: [] },
  { title: "View all Payroll Services", href: "#", subPages: [], isViewAll: true },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none px-4 py-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-800 focus:bg-emerald-50 focus:text-emerald-800 group",
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          <ChevronRight className="h-3.5 w-3.5 mt-0.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          <div>
            <div className="text-sm font-semibold text-gray-800 leading-tight mb-0.5">{title}</div>
          </div>
        </div>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

const serviceItems: ServiceItem[] = [
  { title: "UK Accounting & Tax", description: "Full-spectrum compliance, self-assessment, and year-end accounts for UK businesses.", href: "#" },
  { title: "UAE Accounting & Tax", description: "Corporate tax readiness, VAT filing, and free-zone compliance across the GCC.", href: "#" },
  { title: "Property Accounting & Tax", description: "SDLT planning, SPV structuring, rental portfolios, and HMO compliance.", href: "#" },
  { title: "Construction Accounting", description: "CIS obligations, VAT on construction, and subcontractor management.", href: "#" },
  { title: "Advisory Services", description: "CFO-level advisory, governance, and strategic business intelligence.", href: "#" },
  { title: "Technology & Solutions", description: "Digital transformation, platform integration, and process automation.", href: "#" },
  { title: "Tax Authority Support", description: "HMRC and FTA correspondence, investigations, and dispute resolution.", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [NavHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMobile, setOpenSubMobile] = useState<number | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);


  // true when navbar background is white
  const isLight = scrolled || servicesOpen;

  const navBg = isLight
    ? "bg-white shadow-sm text-foreground"
    : "bg-transparent shadow-none";
  const pathname = usePathname()
  let color;
  if (pathname === "/contact") {
    color = "text-foreground"
  }
  return (
    <nav
      className={cn(
        "z-50 w-full mx-auto py-8 text-accent border-b border-muted-foreground/40",
        navBg,
        color
      )}
    >
      <div className="flex items-center justify-between px-6 lg:px-4 xl:px-0 -my-2 max-w-360 mx-auto">

        {/* Logo — white version on transparent bg, green/dark version on white bg */}
        <Link href="/">
          {color?
            <Image
              src={"/assets/logo.svg"}
              alt="Nexus Logo"
              width={160}
              height={48}
              className={cn(
                "transition-all duration-300 h-auto",
                scrolled ? "h-7 lg:h-8" : ""
              )}
              priority
            />
            :
            <Image
              src={isLight ? "/assets/logo.svg" : "/assets/logo-white.svg"}
              alt="Nexus Logo"
              width={160}
              height={48}
              className={cn(
                "transition-all duration-300 h-auto",
                scrolled ? "h-7 lg:h-8" : ""
              )}
              priority
            />
            
          }

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:text-primary")}
                  href="#"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavigationMenuTrigger className="hover:text-primary">
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-70 py-4">
                    <ul className="grid grid-cols-1 text-sm md:text-base">
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
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:text-primary")}
                  href="/landing"
                >
                  Property Pro
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:text-primary")}
                  href="#"
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:text-primary")}
                  href="#"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop right side */}
        <div className="items-center gap-4 hidden md:flex">
          <div className="flex gap-2 text-sm text-primary">
            English
            <span className="text-accent">| Arabic</span>
          </div>
          <Button size="lg" className="text-sm md:text-base font-normal p-6">
            <Link href={"/contact"}>
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 px-4 bg-foreground text-accent overflow-hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col py-8 px-8 gap-6 text-xl font-medium">

            <Link href="#" className="transition-colors hover:text-primary" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <div>
              <div
                className="font-semibold flex items-center justify-between cursor-pointer transition-colors hover:text-primary"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <Link href="/services" onClick={(e) => { e.stopPropagation(); setMobileOpen(false); }}>
                  Consulting Services
                </Link>
                <span className={cn("text-2xl leading-none transition-transform duration-300", mobileServicesOpen && "rotate-180")}>
                  <ChevronUp />
                </span>
              </div>

              <div
                className={cn(
                  "grid transition-all duration-400 ease-out",
                  mobileServicesOpen ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-5 pl-4 border-l border-white/30 pt-3 pb-2">
                    {consultingServicesItems.map((service, index) => (
                      <div key={service.title} className="space-y-3">
                        <div
                          className="flex items-center justify-between cursor-pointer text-lg transition-colors hover:text-primary"
                          onClick={() => setOpenSubMobile(openSubMobile === index ? null : index)}
                        >
                          <Link href={service.href || "/services"} className="transition-colors">
                            {service.title}
                          </Link>
                          {service.subPages?.length > 0 && (
                            <span className={cn("text-xl transition-transform duration-300", openSubMobile === index && "rotate-180")}>
                              <ChevronUp />
                            </span>
                          )}
                        </div>

                        {service.subPages && (
                          <div
                            className={cn(
                              "grid transition-all duration-300 ease-out",
                              openSubMobile === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}
                          >
                            <div className="overflow-hidden">
                              <div className="flex flex-col gap-3 pl-6 border-l border-white/20 pt-2 pb-1">
                                {service.subPages.map((sub, i) => (
                                  <Link
                                    key={i}
                                    href={sub.href}
                                    className="text-base text-accent hover:decoration-primary hover:underline underline-offset-4 capitalize transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="#" className="transition-colors hover:text-primary" onClick={() => setMobileOpen(false)}>
              Property Management
            </Link>
            <Link href="#" className="transition-colors hover:text-primary" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link href="#" className="transition-colors hover:text-primary" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>

            <div className="flex gap-2 text-sm pt-4">
              English
              <span className="text-primary">| Arabic</span>
            </div>

            <Button className="py-6 text-lg font-normal">
              <Link href="#">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}