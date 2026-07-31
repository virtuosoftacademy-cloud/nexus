import { Separator } from "@/components/ui/separator"
import { Fragment } from "react/jsx-runtime"

type IntersectionProps = {
    /** Item rows — one array per divider row; renders null when missing/empty */
    rows?: string[][]
}

const intersectionUk: IntersectionProps = {
    rows: [
        [
            "Technical accounting discipline",
            "Tax defensibility",
            "Financial control design",
        ],
        [
            "Commercial interpretation",
            "Cross border alignment",
        ],
    ],
}

function Different() {

    return (
        <section className="py-8">
            <div className="flex items-center justify-center gap-4 pb-12">
                <div className="w-90 h-0.5 bg-primary/5 hidden md:block" />
                <div>
                    <h4 className="text-2xl md:text-4xl font-semibold text-center px-6">
                        We operate at the{" "}
                        <span className="text-primary">
                            intersection
                        </span>{" "}
                        of:
                    </h4>
                </div>
                <div className="w-90 h-0.5 bg-primary/5 hidden md:block" />
            </div>

            <div className="bg-muted py-10 md:py-14">
                {intersectionUk.rows?.map((row, rowIndex) => (
                    <Fragment key={rowIndex}>
                        {/* Divider between rows — indented like the design */}
                        {rowIndex > 0 && (
                            <div className="mx-auto max-w-6xl px-8 py-8 md:py-10">
                                <Separator className="bg-primary/20" />
                            </div>
                        )}

                        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-0">
                            {row.map((item, itemIndex) => (
                                <Fragment key={item}>
                                    {/* Vertical divider between items (md+) —
                                        sibling of the item blocks, not nested */}
                                    {itemIndex > 0 && (
                                        <Separator
                                            orientation="vertical"
                                            className="hidden md:block h-24 bg-primary/20"
                                        />
                                    )}
                                    <p className="flex-1 text-center font-heading text-lg text-foreground/80 md:text-2xl">
                                        {item}
                                    </p>
                                </Fragment>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>

            <div className="font-heading text-lg md:text-[1.75rem] max-w-6xl mx-auto pt-14 px-8">
                <div className="space-y-3 md:space-y-6 text-foreground/80">
                    <h3 className="text-primary text-2xl">
                        <strong>Our Advisory Perspective</strong>
                    </h3>
                    <p>
                        We do not position ourselves as a volume driven practice.
                    </p>
                    <p>
                        We operate as a boutique advisory firm, working with organisations that:
                    </p>
                    <ul className="list-decimal list-inside">
                        <li>
                            Submission of structured enquiry

                        </li>
                        <li>
                            Preliminary review within 1-2 working days

                        </li>
                        <li>
                            Introductory discussion to assess scope

                        </li>
                        <li>
                            Defined proposal outlining deliverables and engagement parameters

                        </li>

                    </ul>
                    <p>Financial reporting is not merely a statutory requirement. It is a governance instrument. When structured correctly, it supports confident decision making. When neglected, it becomes an administrative burden that obscures risk.</p>
                </div>
            </div>

        </section>
    )
}

export default Different