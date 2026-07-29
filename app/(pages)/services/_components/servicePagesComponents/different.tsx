'use client'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { DifferenceProps } from "../constant";

function DifferenceComponent({ titleStart, closing, items, subtitle, titleHighlight }: DifferenceProps) {
    return (
        <section className="py-14 md:py-20 px-4 flex justify-center flex-col items-center">

            <div className="pb-6 text-center">
                <h4 className="text-3xl font-semibold text-foreground md:text-4xl">
                    {titleStart} {" "}
                    <span className="text-primary">{titleHighlight}</span>
                </h4>
                <h3 className="mt-3 font-serif text-foreground font-semibold text-lg">
                    {subtitle}
                </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
                {items?.map((item) =>
                    <Card key={item.id} className="group rounded-none border-2 border-primary w-full max-w-[32em] h-20 px-18 py-10 bg-primary/5 hover:bg-primary transition-all duration-400 text-center flex justify-center">
                        <CardTitle className="font-serif text-primary text-base md:text-lg group-hover:text-accent whitespace-break-spaces">
                            {item.text}
                        </CardTitle>
                    </Card>
                )
                }
            </div>
            <p className="text-center mt-6 font-serif text-foreground">
                {closing}
            </p>
        </section>
    )
}

export default DifferenceComponent;