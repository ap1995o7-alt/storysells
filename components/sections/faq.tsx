"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What format is the workbook?",
    a: "Fillable PDF. You type directly into the fields. Works on any laptop, iPad, or phone with a PDF reader. No special software.",
  },
  {
    q: "How is it delivered?",
    a: "Instantly. You pay, you land on a download page, you get the file. Also emailed to you as backup.",
  },
  {
    q: "What's the refund policy?",
    a: "7 days. No questions. WhatsApp me and I'll refund to your UPI within 48 hours. Full policy at /refund.",
  },
  {
    q: "Is the payment secure?",
    a: "Razorpay handles everything. PCI-DSS compliant. UPI, cards, net banking — whatever you use.",
  },
  {
    q: "I'm not in marketing. Will this help?",
    a: "If you pitch, present, write, or need to make people care about what you're saying — yes. PMs, salespeople, founders, consultants, freelancers, writers — the frameworks work in any context where you need someone to listen.",
  },
  {
    q: "Is this a course?",
    a: "No. No videos, no calls, no schedule. It's a workbook. You open it, pick a framework, fill it in. One framework takes 15 minutes.",
  },
  {
    q: "Are there GST or hidden charges?",
    a: "₹499 is the final price. No hidden charges. If you need a GST invoice for your company, email me with your GSTIN after purchase.",
  },
  {
    q: "I'm a complete beginner. Will I be lost?",
    a: "No. Start with Section 1, frameworks 01 through 14. They're designed to build on each other. By framework 14, you'll understand your audience better than most people who've been writing for years.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <p className="label-caps mb-12 text-ink-muted">Frequently asked</p>

        <div className="max-w-[840px]">
          <Accordion
            type="single"
            collapsible
            className="border-t border-line"
          >
            {FAQS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-b border-line"
              >
                <AccordionTrigger className="label-caps gap-6 py-6 text-ink hover:no-underline data-[state=open]:bg-surface-low data-[state=open]:px-5 data-[state=open]:text-ink">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="body-md bg-surface-low px-5 pb-6 pt-0 text-ink-tint">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
