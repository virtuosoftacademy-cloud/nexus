import { FaqWithImageProps } from "@/app/types/types"
import { FaqWithImage } from "@/components/ui/accordionwithimage"



function Principles() {
    const ImageSrc = "/assets/about"
    const PrincipleItems: FaqWithImageProps = {
        titleStart: "",
        titleHighlight: "",
        subtitle: "",
        data: [
            {
                value: "clarity-before-complexity",
                trigger: "Clarity Before Complexity",
                content:
                "Financial systems should simplify commercial understanding — not obscure it.",
                image:
                    `${ImageSrc}/clarity.png`,
                alt: "Modern residential property exterior",
            },
            {
                value: "governance-before-expansion",
                trigger: "Governance Before Expansion",
                content:
                "Operational growth must be supported by internal control maturity.",
                image:
                    `${ImageSrc}/expansion.png`,
                alt: "Tax and legal documents on a desk",
            },
            {
                value: "defensibility-before-optimisation",
                trigger: "Defensibility Before Optimisation",
                content:
                "Tax positions and accounting judgements must withstand scrutiny.",
                image:
                    `${ImageSrc}/tax.png`,
                alt: "tax",
            },
            {
                value: "proportionate-intervention",
                trigger: "Proportionate Intervention",
                content:
                "Complex restructuring is rarely the first answer.",
                image:
                    `${ImageSrc}/complex.png`,
                alt: "Complex restructuring",
            },
            {
                value: "long-term-financial-integrity",
                trigger: "Long-Term Financial Integrity",
                content:
                "We prioritise sustainable frameworks over short-term efficiency gains.",
                image:
                    `${ImageSrc}/cashflow.png`,
                alt: "Long-Term Financial Integrity",
            },
        ],
    }
    return (
        <div className="mx-auto max-w-6xl px-4 pt-10">
            <h2 className="px-4 text-primary font-bold text-2xl md:text-[1.75rem] -mb-12">Our work is grounded in five principles:</h2>
            <FaqWithImage data={PrincipleItems.data} />
        </div>
    )
}

export default Principles