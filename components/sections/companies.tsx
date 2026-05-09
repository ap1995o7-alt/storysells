import { LogoCloud3 } from "@/components/ui/logo-cloud-3";

const COMPANIES = [
  "Microsoft",
  "Amazon",
  "Google",
  "Nike",
  "IBM",
  "Notion",
] as const;

/**
 * Section 4 — Companies hiring storytellers.
 * Headline + DM Serif Display kicker + InfiniteSlider of brand wordmarks.
 *
 * Wordmarks instead of logo SVGs: stable, no external hosts, no licensing
 * risk. Rendered in Poppins Bold to read as monochrome typographic logos.
 */
export function Companies() {
  const logos = COMPANIES.map((name) => (
    <span
      key={name}
      className="font-[family-name:var(--font-poppins)] font-bold uppercase text-foreground/80 transition-colors hover:text-foreground"
      style={{
        fontSize: "clamp(20px, 2.4vw, 28px)",
        letterSpacing: "-0.02em",
        lineHeight: 1,
      }}
      aria-label={name}
    >
      {name}
    </span>
  ));

  return (
    <section
      aria-label="Companies hiring storytellers"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 md:px-6 md:py-[120px]">
        <h2
          className="mx-auto max-w-[900px] text-center font-[family-name:var(--font-poppins)] font-bold text-foreground"
          style={{
            fontSize: "clamp(28px, 4.2vw, 48px)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          At work, storytelling gets you promoted. Everywhere else, it
          gets you remembered.
        </h2>

        <p
          className="mt-6 text-center italic text-muted-foreground md:mt-8"
          style={{
            fontFamily: "var(--font-dm-serif-display), Georgia, serif",
            fontSize: "clamp(18px, 2vw, 24px)",
          }}
        >
          The oldest human skill. The newest job title.
        </p>

        <div className="mt-16 md:mt-20">
          <LogoCloud3 logos={logos} gap={56} speed={70} speedOnHover={25} />
        </div>

        <p className="mx-auto mt-10 max-w-[700px] text-center text-[14px] leading-[1.6] text-muted-foreground md:mt-12">
          &ldquo;Storyteller&rdquo; job postings on LinkedIn doubled in
          2025. Vanta listed up to $274K for a Head of Storytelling.
          USAA hired four storytellers in under a year. The skill nobody
          taught you in college is suddenly the most valuable one — at
          work, and everywhere else.
        </p>
      </div>
    </section>
  );
}
