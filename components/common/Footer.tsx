'use client';

import Image from "next/image";
import Link from "next/link";
import { Field, FieldDescription } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ScrollToSection } from "../scrolltosection";
import { links } from "@/app/_constant";


const Footer = () => {
  return (
    <footer className="bg-foreground relative" id="footer">
      <div className="mx-auto py-12 px-4 sm:px-8 xl:px-18">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 text-center md:text-left px-6 md:px-0">
          <div className="space-y-10">
            <p className="text-base md:text-[1.2rem] text-muted-foreground md:max-w-lg leading-relaxed font-serif">
              Stay ahead in a rapidly changing world. Subscribe to Nexus Insights. Our monthly look at the critical issues facing global businesses.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/">
                <Image src="/assets/logo.svg" alt="Nexus Logo" width={40} height={10} className="w-38 h-auto md:py-2" />
              </Link>
            </div>
            <div className="flex justify-center flex-wrap md:justify-start gap-4">
              {links.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} className="text-base mb-4 text-accent">{link.label}</Link>
                </div>
              ))}
            </div>
          </div>

          <Field>
            {/* <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel> */}
            <div className="flex gap-4">
              <div className="bg-accent/10 p-2 w-2xl">
                <Input id="email" type="email" placeholder="Your email address" className="rounded-none border-0 placeholder:text-sm md:placeholder:text-base placeholder:text-accent/50" />
              </div>
              <Button className="p-6 text-sm md:text-base hover:text-foreground transition hover:bg-secondary">Subscribe</Button>
            </div>
            <FieldDescription className="flex gap-2 pt-2 text-background items-center">
              <Checkbox id="terms" className="bg-background rounded-none text-sm md:text-base" />
              <Label htmlFor="terms" className="font-normal text-xs md:text-base whitespace-pre">* I have read and understand<Link href="/privacy-policy" className="underline underline-offset-4 decoration-primary">Nexus Privacy Notice.</Link>
              </Label>
            </FieldDescription>

            {/* <div className="flex gap-6 mt-6 text-background items-center justify-center md:justify-end">
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
            </div> */}
          </Field>


        </div>

        <div className="flex flex-col gap-4 items-center sm:flex-row lg:justify-between text-sm md:text-base text-background/50 pt-8 px-6 sm:px-0">
          <p>© 2026 Nexus Advisory & Services | All rights reserved.</p>
          {/* <p>Made for modern property managers.</p> */}
          <ScrollToSection sections={[
            { sectionId: "footer", targetId: "nav", variant: "up" },
          ]} />

        </div>

      </div>

    </footer>
  );
};

export default Footer;