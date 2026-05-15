
'use client'
import { Accordion } from '@/components/ui/accordion';
import FaqCard from '@/components/ui/FaqCard';
import { FaqItem } from '@/app/_constant';

interface faqProps{
  items?: FaqItem[]
}

export default function Faq({items = []}:faqProps) {

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-12 text-foreground pt-10 py-20">
      <h4 className="text-2xl md:text-[42px] text-center mb-10 font-medium">
        Frequently Asked <span className="text-primary">Questions</span>
      </h4>

      <Accordion
        type="single"
        collapsible
      >
        {Array.isArray(items) && items.length > 0 ? (
          items.map((faq, index) => (
            <FaqCard
              key={faq.value || index}
              faq={faq}
            />
          ))
        ) : (
          <p className="text-center text-muted-foreground py-8">
            No questions available at the moment.
          </p>
        )}
      </Accordion>
    </div>
  );
}