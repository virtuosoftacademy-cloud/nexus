
import { ApproachImage, ApproachRowData } from "@/app/types/types";
import Image from "next/image";

export type ApproachProps = {
    /** Rows to render; component renders null when missing/empty */
    rows?: ApproachRowData[]
}

function ApproachText({
    row,
    className,
}: {
    row: ApproachRowData;
    className: string;
}) {
    return (
        <div className={className}>
            <h4 className="text-3xl md:text-4xl font-semibold mb-4">
                {row.titleStart} <span className="text-primary">{row.titleHighlight}</span>
            </h4>
            <h3 className="text-base md:text-lg font-semibold leading-relaxed mb-2">
                {row.intro}
            </h3>

            <ul className="text-base md:text-lg pl-4 list-image-[url(/assets/icon/arrowright.svg)] leading-relaxed mb-4">
                {row.items.map((item) => (
                    <li key={item}>
                        <h3>{item}</h3>
                    </li>
                ))}
            </ul>

            <h3 className="text-base md:text-lg">{row.closing}</h3>
        </div>
    );
}

function ApproachImageBlock({
    image,
    className,
}: {
    image: ApproachImage;
    className: string;
}) {
    return (
        <div className={className}>
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 duration-500 transition"
                loading="lazy"
            />
        </div>
    );
}


function ApproachRow({ row }: { row: ApproachRowData }) {
    if (row.imagePosition === "right") {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-0 text-foreground">
                <ApproachText
                    row={row}
                    className="flex flex-col md:pr-28 pt-8 pb-12"
                />
                <ApproachImageBlock
                    image={row.image}
                    className="relative w-full aspect-4/3 lg:aspect-auto lg:min-h-100 overflow-hidden"
                />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-0">
            <ApproachImageBlock
                image={row.image}
                className="relative w-full aspect-4/3 lg:aspect-auto lg:min-h-100 overflow-hidden order-1 lg:order-0"
            />
            <ApproachText
                row={row}
                className="flex flex-col justify-center order-0 lg:order-0 md:px-10 pt-10 pb-10"
            />
        </div>
    );
}

export default function Approach({ rows }: ApproachProps) {
    if (!rows?.length) return null;

    return (
        <section className="bg-accent py-4 sm:py-16 lg:py-20">
            <div className="mx-auto px-6 xl:px-18">
                {rows.map((row) => (
                    <ApproachRow key={row.id} row={row} />
                ))}
            </div>
        </section>
    );
}