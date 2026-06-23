"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { ServiceCardInterface } from "./constant";

export function ServiceCard({
    // tag,
    // eyebrow,
    title,
    description,
    image,
    alt,
    href,
}: ServiceCardInterface) {
    const [hovered, setHovered] = useState(false);

    return (
        <article
            tabIndex={0}
            aria-label={`${title} service card`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    window.location.href = href;
                }
            }}
            className={cn(
                "relative h-85 cursor-pointer overflow-hidden bg-black outline-none transition-all",
                "duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                hovered && "shadow-[0_24px_48px_rgba(0,0,0,0.28)]"
            )}
        >
            {/* Image */}
            <img
                src={image}
                alt={alt}
                className={cn(
                    "absolute inset-0 h-full w-full object-cover",
                    "transition-all duration-950 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                    hovered
                        ? "scale-[1.06] brightness-[0.55] saturate-[1.1]"
                        : "scale-100 brightness-[0.72] saturate-90"
                )}
            />

            {/* Gradient overlay */}
            <div
                aria-hidden
                className={cn(
                    "absolute inset-0 bg-linear-to-b from-black/5 via-black/10 to-black/75 transition-all",
                    "transition-opacity duration-400 ease-in-out",
                    hovered && "opacity-90"
                )}
            />

            {/* Tag badge */}
            {/* <div
                aria-hidden
                className={cn(
                    "absolute right-5 top-5",
                    "transition-[opacity,transform] duration-[350ms] ease-in-out delay-100",
                    hovered ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                )}
            >
                <Badge
                    variant="outline"
                    className="border-white/20 bg-white/10 text-[11px] uppercase tracking-widest text-white/85 backdrop-blur-md"
                >
                    {tag}
                </Badge>
            </div> */}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Eyebrow */}
                {/* <p
                    aria-hidden
                    className={cn(
                        "mb-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-white/55",
                        "transition-[opacity,transform] duration-[400ms] ease-in-out delay-[50ms]",
                        hovered ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
                    )}
                >
                    {eyebrow}
                </p> */}

                {/* Title */}
                <h4
                    className={cn(
                        "mb-3 text-2xl font-semibold leading-tight tracking-tight text-white transition-all",
                        "transition-transform duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                        hovered && "-translate-y-0.5"
                    )}
                >
                    {title}
                </h4>
                <div>

                    {/* Description */}
                    <h3
                        className={cn(
                            "-mb-4 overflow-hidden text-lg leading-relaxed text-white/80",
                            hovered && "-translate-y-5 duration-400"
                        )}
                    >
                        {description}
                    </h3>

                    {/* CTA */}
                    <a
                        href={href}
                        className={cn(
                            "group/cta inline-flex transition-all w-fit items-center gap-1.5 overflow-hidden pb-0.5",
                            "text-base font-medium text-white no-underline",
                            "transition-[max-height,opacity,transform,border-color,gap]",
                            "ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-[50ms]",
                            "hover:gap-2.5 hover:border-white/70",
                            hovered
                                ? "max-h-10 translate-y-2 opacity-100 duration-450 delay-[140ms]"
                                : "max-h-0 translate-y-5 opacity-0 duration-400"
                        )}
                    >
                        Explore More
                        <ArrowUpRight
                            size={15}
                            aria-hidden
                            className="transition-transform duration-250 ease-in-out group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>

            {/* Accent line */}
            {/* <div
                aria-hidden
                className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-white",
                    "transition-[width] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                    hovered ? "w-full" : "w-0"
                )}
            /> */}
        </article>
    );
}
