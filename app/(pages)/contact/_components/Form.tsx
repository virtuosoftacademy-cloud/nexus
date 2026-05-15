"use client";

// components/contact/CtaForm.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SERVICES = [
  "UK Accounting & Tax",
  "UAE Accounting & Tax",
  "Property Accounting & Tax",
  "Construction Accounting",
  "Advisory Services",
  "Technology & Solutions",
  "Tax Authority Support",
];

export default function CtaForm() {
  const [email, setEmail]     = useState("");
  const [service, setService] = useState("");

  const handleSubmit = () => {
    // wire up your form handler here
    console.log({ email, service });
  };

  return (
    <section className="py-20 px-6 sm:px-12 border my-20">
      <div className="mx-auto max-w-[212.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ── Left ── */}
          <div className="flex flex-col gap-10">

            {/* Heading */}
            <h4 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Ready to{" "}
              <span className="text-primary">talk?</span>
            </h4>

            {/* Service selector */}
            <div className="flex flex-col gap-3">
              <p className="text-xl md:text-2xl text-foreground">
                I want to talk to your experts in:
              </p>

              <Select onValueChange={setService}>
                <SelectTrigger
                  className="w-full rounded-none border-0 border-b border-foreground/25 bg-transparent text-foreground/35 text-lg md:text-xl py-3 px-0 focus:ring-0 focus:border-primary"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="flex flex-col gap-6">

            {/* Body copy */}
            <p className="text-sm md:text-base text-foreground/60 font-serif leading-relaxed">
              Not every enquiry becomes an engagement — and that&apos;s
              intentional. We review each submission carefully to ensure the
              relationship would be focused, proportionate, and genuinely
              useful. Submit your enquiry and a senior advisor will be in touch
              within 1–2 working days.
            </p>

            {/* Email input */}
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-none bg-transparent border border-foreground/25 text-foreground/60 placeholder:text-foreground/35 focus-visible:ring-0 focus-visible:border-primary py-6 px-4"
            />

            {/* Submit button */}
            <div>
              <Button
                onClick={handleSubmit}
                className="px-10 py-6 font-medium text-sm rounded-none"
              >
                Contact Us
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}