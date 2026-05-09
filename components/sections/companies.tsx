import { LogoCloud3 } from "@/components/ui/logo-cloud-3";
import {
  MicrosoftMark,
  AmazonMark,
  GoogleMark,
  NikeMark,
  IbmMark,
  NotionMark,
} from "@/components/ui/brand-svgs";

/**
 * Section 4 — Companies hiring storytellers.
 *
 * Uses inline SVG brand marks (defined in components/ui/brand-svgs.tsx).
 * No external CDN, no broken-image risk, no licensing exposure.
 */
export function Companies() {
  const className = "text-foreground/85 transition-colors hover:text-foreground";
  const height = 28;

  const logos = [
    <MicrosoftMark key="microsoft" height={height} className={className} />,
    <AmazonMark key="amazon" height={height} className={className} />,
    <GoogleMark key="google" height={height} className={className} />,
    <NikeMark key="nike" height={height} className={className} />,
    <IbmMark key="ibm" height={height} className={className} />,
    <NotionMark key="notion" height={height} className={className} />,
  ];

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
