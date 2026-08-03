'use client'

import { FaqItem } from "@/app/_constant";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

interface faqCardProps{
    faq:FaqItem
}
export default function FaqCard({ faq }:faqCardProps) {
    const {id, answer, question, value } = faq;
    return (
        <>
            <AccordionItem value={value}>
                <AccordionTrigger className="md:text-xl!">
                    <h3>
                        {question}
                    </h3>
                </AccordionTrigger>
                <AccordionContent className="md:text-xl!">
                    {answer}
                </AccordionContent>
            </AccordionItem>
        </>
    )
}