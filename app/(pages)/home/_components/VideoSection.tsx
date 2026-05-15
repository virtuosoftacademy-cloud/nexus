"use client";

import { useState } from "react";
import { Paperclip, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoSection() {
    const [playing, setPlaying] = useState(false);

    return (
        <section className="relative w-full overflow-hidden md:min-h-160">

            {/* ── Background image / video ── */}
            {playing ? (
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                />
            ) : (
                <img
                    src="assets/bg-video.png"
                    alt="Why Structure Always Comes Before Scale"
                    className="absolute inset-0 w-full h-full object-center"
                />
            )}

            {/* ── Dark overlay ── */}
            {!playing && (
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            )}

            {/* ── Content ── */}
            {!playing && (
                <div className="relative h-full md:ml-5 mt-10 min-h-130 flex md:flex-row flex-col items-center px-10 py-10">
                    <div>


                        {/* Top: floating pill */}
                        <div className="flex items-start">
                            <div className="flex items-center gap-3 bg-muted-foreground/80 backdrop-blur-sm rounded-2xl px-4 py-4 max-w-sm shadow-sm">
                                {/* Paperclip icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-foreground mb-4 shrink-0 transform -rotate-135 -scale-y-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.75}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 9.828A4 4 0 1012.343 4.17L5.757 10.757a6 6 0 108.486 8.486L20.5 13"
                                    />
                                </svg>
                                <h4 className="font-serif text-sm md:text-xl text-foreground/80 leading-snug flex-1">
                                    Growth doesn&apos;t fix broken reporting. It exposes it
                                </h4>
                                {/* Send button */}
                                <button
                                    className="ml-1 bg-muted-foreground/90 shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-muted/50 -mt-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                </button>
                            </div>
                        </div>



                        {/* Bottom: eyebrow + heading + CTA */}
                        <div className="flex flex-col gap-4 py-6">
                            <p className="text-sm md:text-lg text-accent font-medium">
                                Nexus Advisory &amp; Services
                            </p>

                            <h4 className="text-4xl md:text-6xl font-medium text-white leading-tight max-w-lg">
                                Why Structure Always Comes Before Scale
                            </h4>

                            <div>
                                <Button
                                    variant="outline"
                                    className="border-white text-white md:text-base bg-transparent hover:bg-primary hover:text-accent hover:border-primary font-medium text-sm px-6 py-6"
                                >
                                    How We Work With Clients
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Middle: play button */}
                    <div className="mx-40">
                        <button
                            onClick={() => setPlaying(true)}
                            className="w-17 h-16 rounded-full bg-white/85 hover:bg-white transition-colors flex items-center justify-center shadow-md"
                            aria-label="Play video"
                        >
                            <Play
                                className="h-6 w-6 ml-1 text-primary"
                                fill="currentColor"
                            />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}