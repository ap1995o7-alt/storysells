"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import { Plus, X } from "lucide-react";
import Link from "next/link";

const FAQS = [
  {
    q: "Will this help me if I'm not in marketing?",
    a: (
      <>
        Yes. The frameworks work for anyone who pitches, presents, or has
        to make people understand something quickly — PMs, founders,
        salespeople, consultants, designers, analysts, freelancers.
        Storytelling isn&apos;t a marketing skill. It&apos;s a
        communication skill.
      </>
    ),
  },
  {
    q: "I'm a complete beginner. Will I be lost?",
    a: (
      <>
        No. Each worksheet has an example filled in, then a blank version
        for you. By the end of framework 5, you&apos;ll know the
        vocabulary.
      </>
    ),
  },
  {
    q: "Is this a course?",
    a: (
      <>
        No. No videos, no calls, no community. It&apos;s a workbook. You
        fill in worksheets, paste the output into your deck. That&apos;s
        it.
      </>
    ),
  },
  {
    q: "Can ChatGPT just do this for me?",
    a: (
      <>
        No. AI generates structures that sound like everyone else&apos;s.
        The workbook teaches you to tell the specific story only you can
        tell, in a structure that holds.
      </>
    ),
  },
  {
    q: "What if I buy it and don't fill anything in?",
    a: (
      <>
        Real risk. Most workbook buyers don&apos;t finish workbooks.
        Start with framework 01 — it takes 15 minutes and produces a
        &ldquo;tell me about yourself&rdquo; answer you can use the next
        day. If you can do one, you can do the rest.
      </>
    ),
  },
  {
    q: "How does it work — format, delivery, refunds?",
    a: (
      <>
        Fillable PDF. Reads on laptop, iPad, or phone. Instant download
        via Razorpay after payment, also emailed for backup. Refunds for
        delivery issues or broken files. Once it&apos;s downloaded,
        it&apos;s yours. Full policy on the{" "}
        <Link
          href="/refund"
          className="underline underline-offset-2 hover:no-underline"
          style={{ color: "var(--accent)" }}
        >
          refund page
        </Link>
        .
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-[720px] px-5 py-20 md:px-6 md:py-[120px]">
        <h2
          className="text-center font-[family-name:var(--font-poppins)] font-bold text-foreground"
          style={{ fontSize: "32px", lineHeight: 1.1 }}
        >
          Frequently asked.
        </h2>

        <AccordionPrimitive.Root
          type="single"
          collapsible
          className="mt-12 flex w-full flex-col"
        >
          {FAQS.map((item, i) => (
            <AccordionPrimitive.Item
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className="group flex flex-1 items-start justify-between gap-6 py-6 text-left outline-none transition-colors hover:text-foreground"
                  aria-label={item.q}
                >
                  <span className="font-[family-name:var(--font-poppins)] text-[18px] font-bold text-foreground">
                    {item.q}
                  </span>
                  <Plus
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-foreground transition-transform group-data-[state=open]:hidden"
                    strokeWidth={2}
                  />
                  <X
                    aria-hidden="true"
                    className="mt-1 hidden h-5 w-5 shrink-0 text-foreground transition-transform group-data-[state=open]:inline"
                    strokeWidth={2}
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden text-[16px] leading-[1.6] text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-6">{item.a}</div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
}
