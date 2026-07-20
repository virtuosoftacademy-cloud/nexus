
"use client"

import * as React from "react"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { FaqImageItem, FaqWithImageProps } from "@/app/types/types"

// ---------------------------------------------------------------------------
// Section: Sub-component — FaqHeader
// Section heading with highlighted span + serif subtitle.
// ---------------------------------------------------------------------------
function FaqHeader({
    titleStart,
    titleHighlight,
    subtitle,
}: {
    titleStart?: string
    titleHighlight?: string
    subtitle?: string
}) {
    return (
        <div className="pb-8">
            <h4 className="text-2xl md:text-4xl text-center font-semibold mb-4">
                {titleStart} <span className="text-primary">{titleHighlight}</span>
            </h4>
            <p className="font-serif text-center">{subtitle}</p>
        </div>
    )
}

function FaqAccordion({
    items,
    active,
    onActiveChange,
}: {
    items: FaqImageItem[]
    active: string
    onActiveChange: (value: string) => void
}) {
    return (
        <Accordion
            type="single"
            value={active}
            onValueChange={(value) => value && onActiveChange(value)}
            className="w-full bg-primary/5 p-10"
        >
            {items.map((item) => (
                <AccordionItem
                    key={item.value}
                    value={item.value}
                    className={cn(
                        "border-l-3 border-l-transparent transition-colors duration-300",
                        "data-[state=open]:border-l-secondary data-[state=open]:bg-white border-b"
                    )}
                >
                    <AccordionTrigger className="font-sans -my-0.5 font-semibold bg-transparent text-primary">
                        {item.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="text-light w-[18em] max-w-[30em] text-foreground/70 text-xs">{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}


function FaqImageStack({
    items,
    active,
}: {
    items: FaqImageItem[]
    active: string
}) {
    return (
        <div className="relative max-h-full w-full shrink-0 md:self-stretch overflow-hidden bg-accent md:w-1/2">
            {items.map((item) => (
                <Image
                    key={item.value}
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    loading="lazy"
                    className={cn(
                        "object-cover transition-all duration-500 ease-out",
                        active === item.value ? "opacity-100" : "opacity-0"
                    )}
                />
            ))}
        </div>
    )
}

// ---------------------------------------------------------------------------
// Section: Component — FaqWithImage
// Owns the shared active-item state and passes it down to the accordion and
// image stack so both stay in sync. Renders nothing if no items are given
// (prevents a crash when the renderer config omits `data`).
// ---------------------------------------------------------------------------
export function FaqWithImage({
    titleStart,
    titleHighlight,
    subtitle,
    data,
}: FaqWithImageProps) {
    // Controlled single-open state: drives both which item is expanded and
    // which image is visible. Defaults to the first item per the design.
    // Safe initializer: tolerates undefined/empty data on first render.
    const [active, setActive] = React.useState<string>(
        data?.[0]?.value ?? ""
    )

    // Guard: nothing to render without items
    if (!data?.length) return (
        <>
            No Data
        </>
    )

    return (
        <div className="py-8 md:py-14">
            <FaqHeader
                titleStart={titleStart}
                titleHighlight={titleHighlight}
                subtitle={subtitle}
            />
            <section className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-12 md:flex-row md:items-stretch">
                <FaqAccordion items={data} active={active} onActiveChange={setActive} />
                <FaqImageStack items={data} active={active} />
            </section>
        </div>
    )
}