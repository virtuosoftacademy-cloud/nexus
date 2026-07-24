'use client'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactCtaProps } from "@/app/types/types"

export function ContactCta({
    titleStart,
    titleHighlight,
    intro,
    listIntro,
    discussionPoints,
    closing,
    buttonLabel,
    buttonHref,
    image,
}: ContactCtaProps) {
    // Guard: nothing to render without the discussion list
    if (!discussionPoints?.length) return null

    return (
        <section className="bg-primary py-16 md:py-20 flex items-center justify-center">
            <div className="grid gap-0 px-4 md:grid-cols-2 pb-10 md:ml-14">
                <div className="flex flex-col relative z-10">
                    <Card className="rounded-none border-0 shadow-none z-10">
                        <CardContent className="p-4 md:pr-40 md:pl-10 md:py-2 text-accent-foreground/70">
                            {/* Heading: highlight span in primary */}
                            <h4 className="text-3xl font-bold md:text-4xl text-foreground">
                                {titleStart} <span className="text-primary">{titleHighlight}</span>
                            </h4>

                            <p className="mt-4 max-w-lg font-serif text-sm leading-relaxed md:text-lg">
                                {intro}
                            </p>

                            <p className="mt-5 font-serif text-sm md:text-lg">
                                {listIntro}
                            </p>

                            {/* Arrow list: each row on a light bar */}
                            <ul className="mt-4 space-y-1">
                                {discussionPoints.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-center gap-1 px-4 py-2 md:py-0 font-serif text-sm md:text-lg text-foreground bg-primary/5 md:w-xl"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="text-4xl shrink-0 text-primary"
                                        >
                                            &#9656;
                                        </span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 font-serif text-sm md:text-lg">
                                {closing}
                            </p>
                        </CardContent>
                    </Card>

                    <Button
                        asChild
                        size="lg"
                        variant={"secondary"}
                        className="mt-8 w-fit rounded-none bg-secondary text-base px-8 py-6 font-semibold text-foreground hover:bg-accent"
                    >
                        <Link href={buttonHref ?? "/contact"}>{buttonLabel}</Link>
                    </Button>
                </div>

                <div className="hidden md:block relative mt-8 h-32 w-full z-0 md:-ml-14 md:mt-0 md:h-auto md:self-stretch md:pb-0">
                    <div className="relative h-12 w-full md:absolute md:inset-0 md:-bottom-0 md:h-[calc(90%+2rem)] aspect-2/3 md:aspect-auto xl:min-h-100 overflow-hidden">
                        {image && (
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 1220px) 100vw, 75vw"
                                className="object-cover hover:scale-110 duration-500 transition"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}