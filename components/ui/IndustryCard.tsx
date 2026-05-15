"use client";

import { Industry } from "@/app/_constant";
import { motion } from "framer-motion";
import { useState } from "react";

interface IndustryCardProps {
    industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
    const { title, description, image, width } = industry;
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden flex flex-col justify-between cursor-pointer"
            style={{ minHeight: "420px" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* ── Background image — scales in on hover, out on leave ── */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                animate={{ scale: hovered ? 1.07 : 1 }}
                transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* ── Dark gradient overlay — always present for legibility ── */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/75 pointer-events-none" />

            {/* ── Content ── */}
            <div className="relative flex flex-col justify-between h-full p-6">

                {/* Title — top */}
                <h4 className="text-white font-medium text-lg md:text-xl leading-snug">
                    {title}
                </h4>

                {/* Description — bottom, fades in stronger on hover */}
                <motion.p
                    className={`text-accent text-sm md:text-lg mt-auto pt-4 font-serif ${width}`}
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
}