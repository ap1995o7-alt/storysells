import { LogoCloud3 } from "@/components/ui/logo-cloud-3";

/**
 * Section 4 — Companies hiring storytellers.
 *
 * Logos sourced from simpleicons.org's CDN, requesting each glyph in
 * white (FFFFFF). Pure SVG, single-color, no licensing risk for
 * editorial / informational use.
 *
 * Rendered with a plain <img> tag (not next/image) so the SVG is
 * served directly without optimization round-trips.
 */
const LOGOS: { src: string; alt: string }[] = [
  { src: "https://cdn.simpleicons.org/microsoft/FFFFFF", alt: "Microsoft" },
  { src: "https://cdn.simpleicons.org/amazon/FFFFFF", alt: "Amazon" },
  { src: "https://cdn.simpleicons.org/google/FFFFFF", alt: "Google" },
  { src: "https://cdn.simpleicons.org/nike/FFFFFF", alt: "Nike" },
  { src: "https://cdn.simpleicons.org/ibm/FFFFFF", alt: "IBM" },
  { src: "https://cdn.simpleicons.org/notion/FFFFFF", alt: "Notion" },
];

export function Companies() {
  const logos = LOGOS.map((logo) => (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      key={logo.src}
      src={logo.src}
      alt={logo.alt}
      className="h-6 w-auto opacity-90 transition-opacity hover:opacity-100 md:h-8"
      loading="lazy"
      decoding="async"
    />
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
          className="mt-4 text-center font-[family-name:var(--font-dm-sans)] text-foreground"
          style={{
            fontWeight: 500,
            fontSize: "clamp(16px, 2vw, 20px)",
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
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
