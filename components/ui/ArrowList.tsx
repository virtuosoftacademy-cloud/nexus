import { cn } from "@/lib/utils"

type ArrowListProps = {
    items?: string[]
    textclassName?: string
    markerclassName?: string
    itemsClassName?: string
}

export function ArrowList({ items, textclassName, markerclassName, itemsClassName }: ArrowListProps) {
    if (!items?.length) return null

    return (
        <ul>
            {items.map((item) => (
                <li key={item} className={cn("flex gap-1 font-heading text-base md:text-lg text-foreground/70", itemsClassName)}>
                    {/* Amber play-style arrow marker, matching the design */}
                    <span aria-hidden="true" className={cn("-mt-1.5 text-secondary text-3xl -ml-1", markerclassName)}>
                        &#9656;
                    </span>
                    <span className={textclassName}>{item}</span>
                </li>
            ))}
        </ul>
    )
}