"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What format is the workbook in?",
    a: "It's a fillable PDF. You can type directly into every field on any laptop, tablet, or phone using a free PDF reader (Adobe Acrobat, Preview on Mac, or any browser). 191 pages, optimized to load fast even on patchy connections.",
  },
  {
    q: "How is it delivered?",
    a: "Instantly. Once you complete payment, you'll be redirected to a download page and a link will hit your inbox within seconds. No 'we'll get back to you' — it's automated.",
  },
  {
    q: "What's the refund policy?",
    a: "All sales are final. Story Sells is a digital product, so once it's accessible to you, it's non-refundable. Limited exceptions apply for duplicate payments, verified delivery failures on our side, or where required by applicable law. To raise an exception, email storythatsellsforyou@gmail.com with your Razorpay payment ID. Full policy at /refund.",
  },
  {
    q: "Is the payment secure?",
    a: "Yes. Payments are processed through Razorpay — the same platform powering Swiggy, Cred, and most Indian D2C brands. We never see or store your card or UPI details.",
  },
  {
    q: "I'm not a 'marketer' — will this still help me?",
    a: "Yes, if your job involves explaining things to other humans. PMs, founders, consultants, designers, salespeople, and anyone who writes for work have all used it. The frameworks are content-agnostic — they work whether you're pitching a product, a feature, or a raise.",
  },
  {
    q: "Is this a course?",
    a: "No. There are no live calls, no community Slack, no schedule. It's a self-serve workbook you fill in at your own pace. The bonus video walkthrough explains the system, but the workbook itself is the product.",
  },
  {
    q: "Are there any GST or hidden charges?",
    a: "No. ₹499 is the final price. GST is included. No subscription, no auto-renew, no upsell wall.",
  },
  {
    q: "I'm a complete beginner. Will I be lost?",
    a: "No. Each framework starts with a one-line definition, a worked example, and then asks you to apply it to your own work. Start with Section 1 and the system unfolds page by page.",
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
