

"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { ServicesCarouselProps } from "@/app/types/types"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowList } from "@/components/ui/ArrowList"


function CaseButton({
    label = "Learn more",
    title,
    intro,
    itemsTitle,
    items,
    icon,
    iconAlt
}: {
    label?: string
    title?: string
    intro?: string
    itemsTitle?: string
    items?: string[]
    icon?: string
    iconAlt?: string
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ternary" className="mt-2">{label}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <IconChip src={icon || ""} alt={iconAlt || ""} />
                    <DialogTitle className="text-xl font-sans! -mt-5">{title ?? label}</DialogTitle>
                    {intro && (
                        <DialogDescription className="font-serif text-sm md:text-base text-foreground/70">
                            {intro}
                        </DialogDescription>
                    )}
                </DialogHeader>
                <h4 className="text-primary font-semibold text-lg -mb-3">{itemsTitle}</h4>
                <ArrowList textclassName="text-base" items={items} />

            </DialogContent>
        </Dialog>
    )
}

function IconChip({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="mb-6 inline-flex size-14 items-center justify-center bg-accent">
            <Image src={src} alt={alt} width={56} height={56} className="size-14" />
        </div>
    )
}

// ---------------------------------------------------------------------------
// Section: Component — ServicesCarousel
// ---------------------------------------------------------------------------
export function ServicesCarousel({
    titleStart,
    titleHighlight,
    subtitle,
    slides,
}: ServicesCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        // Sync current index on init and every slide selection
        setCurrent(api.selectedScrollSnap())
        api.on("select", () => setCurrent(api.selectedScrollSnap()))
    }, [api])

    // Guard: tolerates undefined OR empty slides from a stale config entry
    if (!slides?.length) return null

    return (
        <section className="relative overflow-hidden py-14 md:py-20 bg-cover bg-primary bg-[url(/assets/services/bg-services-section.svg)]">
            {/* ---------------------------------------------------------------
                Section heading
            ---------------------------------------------------------------- */}
            <div className="pb-10 text-center px-8">
                <h4 className="text-2xl font-semibold text-primary-foreground md:text-4xl">
                    {titleStart}{" "}
                    <span className="text-secondary">{titleHighlight}</span>
                </h4>
                <p className="mt-3 font-serif text-primary-foreground/80">
                    {subtitle}
                </p>
            </div>

            {/* ---------------------------------------------------------------
                Carousel: one CarouselItem per service, each holding the
                two-card layout. Arrows are repositioned to the panel edges.
            ---------------------------------------------------------------- */}
            <Carousel setApi={setApi} className="mx-auto w-full max-w-7xl px-4 md:px-16">
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full xl:h-[42em]">
                                {/* --- Left card: service description --- */}
                                <Card className="rounded-none border-0 shadow-none">
                                    <CardContent className="p-8 md:p-10">
                                        <IconChip src={slide.icon} alt={slide.iconAlt} />

                                        <h4 className="text-lg font-semibold leading-snug md:text-xl whitespace-pre-line">
                                            {slide.titleLine1}
                                            {" "}
                                            {slide.titleLine2}
                                        </h4>

                                        {slide.intro && (
                                            <p className="mt-4 font-serif text-base md:text-lg">
                                                {slide.intro}
                                            </p>
                                        )}

                                        {slide.optionalHeading && (
                                            <p className="mt-5 font-semibold text-primary text-base md:text-lg">
                                                {slide.optionalHeading}
                                            </p>
                                        )}
                                        <ArrowList items={slide.optionallistItems} />

                                        <p className="mt-5 font-semibold text-primary text-base md:text-lg">
                                            {slide.listHeading}
                                        </p>
                                        <ArrowList items={slide.listItems} />

                                        {slide.outro && (
                                            <p className="mt-5 font-serif text-base md:text-lg">
                                                {slide.outro}
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* --- Right card: case illustration --- */}
                                <Card className="rounded-none border-0 shadow-none">
                                    <CardContent className="p-8 md:p-10">
                                        <IconChip src={slide.caseIcon} alt={slide.caseIconAlt} />

                                        <h4 className="text-lg font-semibold leading-snug md:text-xl">
                                            {slide.caseTitle}
                                        </h4>

                                        {slide.caseIntro && (
                                            <p className="mt-4 font-serif text-sm md:text-lg whitespace-pre-line">
                                                {slide.caseIntro}
                                            </p>
                                        )}

                                        <div className="mt-4">
                                            <ArrowList items={slide.caseProblems} />
                                        </div>

                                        {slide.caseSolutionHeading && (
                                            <p className="font-semibold text-primary text-sm md:text-lg">
                                                {slide.caseSolutionHeading}
                                            </p>
                                        )}
                                        <div>
                                            <ArrowList items={slide.caseSolutions} />
                                        </div>

                                        {slide.optionalParagraph && (
                                            <p className="mt-5 mb-3 font-serif text-sm md:text-lg">
                                                {slide.optionalParagraph}
                                            </p>
                                        )}
                                        {slide.caseResultTitle && (
                                            <p className="mb-1 font-semibold text-primary text-sm md:text-lg">
                                                {slide.caseResultTitle}
                                            </p>
                                        )}
                                        {slide.caseResult && (
                                            <p className="font-serif text-sm md:text-lg whitespace-pre-line">
                                                {slide.caseResult}
                                            </p>
                                        )}

                                        {slide.caseButton && (
                                            <CaseButton
                                                label={slide.caseButton}
                                                title={slide.caseDialogTitle}
                                                intro={slide.caseDialogIntro}
                                                itemsTitle={slide.caseDialogItemsTitle}
                                                items={slide.caseDialogItems}
                                                icon={slide.caseDialogIcon}
                                                iconAlt={slide.caseDialogIconAlt}
                                            />
                                        )}

                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Edge arrows: square, translucent white on the teal panel */}
                <CarouselPrevious className="hidden md:block left-0 size-10 rounded-none border-white/90 bg-transparent text-white hover:text-foreground hover:bg-secondary md:-left-12 hover:border-0" />
                <CarouselNext className="hidden md:block right-0 size-10 rounded-none bg-transparent hover:text-foreground border-white/90 text-white md:-right-12 hover:bg-secondary hover:border-0" />
            </Carousel>

            {/* ---------------------------------------------------------------
                Square dot indicators: white squares, secondary for the
                active slide; clicking a dot scrolls the carousel there.
            ---------------------------------------------------------------- */}
            <div className="mt-8 flex justify-center gap-3">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={current === index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            "size-2.5 rounded-none transition-colors duration-300",
                            current === index ? "bg-secondary" : "bg-white/80 hover:bg-white"
                        )}
                    />
                ))}
            </div>
        </section>
    )
}