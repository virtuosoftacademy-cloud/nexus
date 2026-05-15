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
                <AccordionTrigger>
                    <h4>
                        {question}
                    </h4>
                </AccordionTrigger>
                <AccordionContent>
                    {answer}
                </AccordionContent>
            </AccordionItem>
        </>
    )
}