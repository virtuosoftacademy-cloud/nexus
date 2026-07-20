
"use client";

// ---------------------------------------------------------------------------
// Section: Imports
// ---------------------------------------------------------------------------
import { Phase } from "@/app/(pages)/services/_components/constant";
import { motion } from "framer-motion";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Section: Types
// ---------------------------------------------------------------------------
interface PhaseCardProps {
    phase: Phase;
}

// ---------------------------------------------------------------------------
// Section: Shared easing — image scale and description reveal use the same
// curve so the two motions read as one gesture.
// ---------------------------------------------------------------------------
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// ---------------------------------------------------------------------------
// Section: Component — PhaseCard
// ---------------------------------------------------------------------------
export default function PhaseCard({ phase }: PhaseCardProps) {
    const { title, description, image, width } = phase;
    const [hovered, setHovered] = useState(false);

    return (
        <div
            tabIndex={0}
            className="relative overflow-hidden flex flex-col justify-between cursor-pointer text-left w-full h-full md:min-h-85 md:max-w-76.25"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
        >
            {/* ── Background image — scales in on hover/focus, out on leave ── */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                animate={{ scale: hovered ? 1.07 : 1 }}
                transition={{ duration: 0.55, ease: EASE }}
            />

            {/* ── Dark gradient overlay — always present for legibility ── */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/75 pointer-events-none" />

            {/* ── Content ── */}
            <div className="relative flex flex-col justify-between h-full p-6">

                {/* Title — top */}
                <h4 className="text-white font-medium text-lg md:text-xl leading-snug">
                    {title}
                </h4>

                {description && (
                    <motion.p
                        className={`text-white text-sm md:text-lg mt-auto pt-4 font-serif ${width}`}
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </div>
    );
}