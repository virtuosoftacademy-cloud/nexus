'use client';

import Image from "next/image";
import Link from "next/link";
import { Field, FieldDescription } from "./ui/field";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { FacebookIcon } from "./ui/facebook";
import { LinkedinIcon } from "./ui/linkedin";
import { TwitterIcon } from "./ui/twitter";
import { InstagramIcon } from "./ui/instagram";
import { YoutubeIcon } from "./ui/youtube";

const links = {
  "Home": ["Features", "Pricing", "Integrations", "Changelog"],
  "Consulting Services": ["About", "Customers", "Careers", "Contact"],
  "Property Management": ["Tenant Screening", "Lease Tracking", "Rent Collection", "Maintenance Requests"],
  "About Us": ["Our Story", "Team", "Blog", "Press"],
  "Blog": ["Latest Posts", "Categories", "Tags", "Archive"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left px-6 md:px-0">
          <div className="space-y-10">
            <p className="text-lg text-muted-foreground md:max-w-sm leading-relaxed">
              Stay ahead in a rapidly changing world. Subscribe to Nexus Insights, our monthly look at the critical issues facing global businesses.
            </p>
            <div>
              <Link href="#">
                <Image src="assets/logo.svg" alt="Nexus Logo" width={40} height={10} className="w-38 h-auto py-2" />
              </Link>
            </div>
            <div className="flex gap-4">
              {Object.entries(links).map(([title, items]) => (
                <div key={title}>
                  <h4 className="font-semibold text-xs md:text-sm mb-4 text-background">{title}</h4>
                </div>
              ))}
            </div>
          </div>

          <Field>
            {/* <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel> */}
            <div className="flex gap-4">
              <div className="bg-accent-foreground p-2 w-2xl">
                <Input id="email" type="email" placeholder="Your email address" className="rounded-none border-0" />
              </div>
              <Button className="p-6">Contact Us</Button>
            </div>
            <FieldDescription className="flex gap-2 pt-2 text-background items-center">
              <Checkbox id="terms" className="bg-background rounded-none text-sm" />
              <Label htmlFor="terms" className="font-normal">*I have read and understand<Link href="#" className="underline underline-offset-4 decoration-primary">Nexus Privacy Notice.</Link>
              </Label>
            </FieldDescription>

            <div className="flex gap-6 mt-6 text-background items-center justify-center md:justify-end">
              <a href="#" className="hover:text-primary transition-colors">
                <LinkedinIcon />
              </a>
              <a href="#" className="hover:text-primary transition-colors pt-1">
                <YoutubeIcon />
              </a>
              <a href="#" className="hover:text-primary transition-colors pt-1">
                <InstagramIcon />
              </a>
              <a href="#" className="hover:text-primary transition-colors pt-2">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:text-primary transition-colors pt-1">
                <TwitterIcon />
              </a>
            </div>
          </Field>


        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© 2026 Nexus | All rights reserved.</p>
          {/* <p>Made for modern property managers.</p> */}
        </div>
      </div>

    </footer>
    // <footer className="border-t border-border bg-muted/30 ">
    //   <div className="max-w-7xl mx-auto py-16">
    //     <div className="grid md:grid-cols-6 gap-10">
    //       <div className="md:col-span-2 space-y-4">
    //         <Link href="#">
    //           <Image src="assets/logo.svg" alt="Nexus Logo" width={40} height={10} className="w-38 h-auto py-2" />
    //         </Link>
    //         <p className="text-sm text-muted-foreground max-w-2xs leading-relaxed">
    //           The modern property management platform built for growing portfolios.
    //         </p>
    //       </div>

    //       {Object.entries(links).map(([title, items]) => (
    //         <div key={title}>
    //           <h4 className="font-semibold text-sm mb-4">{title}</h4>
    //           <ul className="space-y-3">
    //             {items.map(i => (
    //               <li key={i}>
    //                 <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{i}</a>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>

    //     <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
    //       <p>© 2026 Nexus, Inc. All rights reserved.</p>
    //       <p>Made for modern property managers.</p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;