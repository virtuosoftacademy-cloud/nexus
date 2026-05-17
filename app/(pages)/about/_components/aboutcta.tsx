"use client";

// components/contact/ContactCta.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Aboutcta() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="relative overflow-hidden min-h-[420px] flex items-center my-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image — scales in on hover */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/aboutcta.png')" }}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Content */}
      <div className="relative mx-auto max-w-[212.5rem] px-6 sm:px-12 py-14 w-full">
        <Link
          href="#"
          className="inline-flex items-center gap-3 text-white text-xl md:text-[2rem] leading-snug max-w-2xl"
        >
          <h4>
            Every structured engagement begins with a single conversation. Start
            yours today
          </h4>
          {/* Arrow moves right on section hover */}
          <motion.span
            className="absolute bottom-14 left-[137] md:bottom-16 md:left-[625]"
            animate={{ x: hovered ? 8 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <ArrowRight className="h-6 w-6 flex-shrink-0" /> */}
            <Image src={"assets/arrowright.svg"} alt="" width={20} height={20} className="size-5" />
          </motion.span>
        </Link>
      </div>
    </section>
  );
}