"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CtaData } from "../../constant";

interface CtaProps {
  data: CtaData;
}

export default function Cta({ data }: CtaProps) {
  if (!data) return null;

  const { heading, href, image,width,arrowPosition } = data;
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-360 mx-auto px-6">
    <section
      className="relative overflow-hidden min-h-[420px] flex items-center my-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image — scales in on hover */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary mask-r-from-30% pointer-events-none" />

      {/* Content */}
      <div className="relative mx-auto max-w-[212.5rem] px-6 sm:px-12 py-14 w-full">
        <Link
          href={href}
          className={`inline-flex items-center gap-4 text-white text-xl md:text-[2rem] leading-snug ${width}`}
        >
          <h4>{heading}</h4>

          {/* Arrow slides right on hover */}
          <motion.span
            className={`inline-flex items-center shrink-0 absolute ${arrowPosition}`}
            animate={{ x: hovered ? 8 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/assets/arrowright.svg"
              alt=""
              width={20}
              height={20}
              className="size-5"
            />
          </motion.span>
        </Link>
      </div>
    </section>
    </div>

  );
}