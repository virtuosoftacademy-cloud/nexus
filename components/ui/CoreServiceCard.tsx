"use client";

// components/core-services/CoreServiceCard.tsx

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CoreService } from "@/app/_constant";

interface CoreServiceCardProps {
    service: CoreService;
}

export default function CoreServiceCard({ service }: CoreServiceCardProps) {
    const { icon, title, description, href } = service;

    return (
        <div className="bg-background flex flex-col justify-between p-8 h-full">

            {/* Top: icon + title + description */}
            <div className="flex flex-col">

                {/* Icon */}
                <div className="w-12 h-8 flex items-center justify-center text-primary">
                    <Image
                        src={icon}
                        alt={title}
                        width={30}
                        height={30}
                        className="w-12"
                    />
                </div>

                <div className="pt-6">

                    {/* Title */}
                    <h4 className="text-xl font-semibold text-primary leading-snug">
                        {title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed font-serif">
                        {description}
                    </p>
                </div>

            </div>

            {/* Explore More — always pinned to bottom right */}
            <div className="flex justify-end">
                <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:opacity-70 transition-opacity"
                >
                    Explore More
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                </Link>
            </div>
        </div>
    );
}