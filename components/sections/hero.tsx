import { BuyButton } from "@/components/site/buy-button";
import { ShimmerText } from "@/components/ui/shimmer-text";
import { Macbook, IPad, IPhone } from "@/components/ui/device-mockups";

/**
 * Hero — simple, no cinematic, no pinned scroll.
 * Two-column on desktop. Stacked on mobile (text first, mockup below).
 *
 * Right column is an Apple-style device family showing the workbook
 * across MacBook + iPad + iPhone.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:min-h-[100vh] md:pt-32"
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center px-5 pb-24 md:min-h-[calc(100vh-6rem)] md:px-12 md:pb-40">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-12">
          {/* Left — text */}
          <div className="md:col-span-6">
            <p
              className="font-[family-name:var(--font-jetbrains-mono)] text-[12px] font-medium uppercase"
              style={{
                color: "var(--accent)",
                letterSpacing: "0.1em",
              }}
            >
              The Storytelling Workbook
            </p>

            <h1
              className="mt-6 font-[family-name:var(--font-poppins)] font-bold text-foreground"
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block">Smart got you hired.</span>
              <span className="mt-1 block">
                <ShimmerText duration={2.5} delay={1.0} as="span">
                  Storytelling gets you promoted.
                </ShimmerText>
              </span>
            </h1>

            <p className="mt-8 max-w-[600px] text-[16px] leading-[1.6] text-muted-foreground md:text-[18px]">
              The fastest-growing job title on LinkedIn isn&apos;t AI
              Engineer. It&apos;s Storyteller. Postings doubled in 2025 —
              Microsoft, Google, Notion, Amazon all hiring. In 2004,
              Bezos banned PowerPoint at Amazon and replaced it with
              stories. The skill nobody taught you in college is now the
              highest-paid one on the market.
            </p>

            <p className="mt-6 font-bold text-[16px] text-foreground">
              76 frameworks. 30 books. One ₹499 workbook.
            </p>

            <div className="mt-8">
              <BuyButton
                variant="primary"
                size="md"
                scroll
                className="w-full md:w-[280px]"
              >
                Get the Workbook — ₹499
              </BuyButton>
              <p className="mt-3 text-[13px] text-muted-foreground">
                Instant download · Fillable PDF · Works on laptop, iPad, phone
              </p>
            </div>
          </div>

          {/* Right — Apple device family */}
          <div className="md:col-span-6">
            <DeviceBundle />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Apple-marketing-style multi-device composition:
 * MacBook centered, with iPad overlapping bottom-left
 * and iPhone overlapping bottom-right.
 */
function DeviceBundle() {
  return (
    <div className="relative mx-auto w-full max-w-[600px] pb-12 md:max-w-none md:pb-16">
      {/* MacBook — back / main */}
      <Macbook className="mx-auto w-[88%]">
        <MacbookContent />
      </Macbook>

      {/* iPad — overlapping bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[26%] md:w-[28%]"
        style={{ transform: "rotate(-3deg)" }}
      >
        <IPad>
          <IPadContent />
        </IPad>
      </div>

      {/* iPhone — overlapping bottom-right */}
      <div
        className="absolute bottom-2 right-[2%] w-[14%] md:w-[15%]"
        style={{ transform: "rotate(3deg)" }}
      >
        <IPhone>
          <IPhoneContent />
        </IPhone>
      </div>
    </div>
  );
}

/* ============================================================
   Worksheet content — three densities for three device sizes.
   ============================================================ */

const ACCENT_BG = "rgba(226, 75, 74, 0.08)";

/** MacBook — full worksheet */
function MacbookContent() {
  return (
    <div className="flex h-full w-full flex-col p-3 md:p-5">
      <p
        className="font-[family-name:var(--font-jetbrains-mono)] font-medium uppercase tracking-wider"
        style={{
          color: "#8a8680",
          letterSpacing: "0.08em",
          fontSize: "clamp(7px, 0.85vw, 11px)",
        }}
      >
        Framework 12 / 76 — The 3 Levels of Conflict
      </p>

      <div className="mt-2 h-px w-full bg-[#e0d9cd]" />

      <div className="mt-3 flex flex-col gap-2 md:gap-3">
        <FieldRow
          label="Inner conflict"
          placeholder="What does the character want internally?"
        />
        <FieldRow
          label="Personal conflict"
          placeholder="What does the character want from someone else?"
        />
        <FieldRow
          label="External conflict"
          placeholder="What stands in the way of all of it?"
        />
      </div>

      <div
        className="mt-auto rounded-md p-2 md:p-3"
        style={{
          border: "1.5px solid var(--accent)",
          backgroundColor: ACCENT_BG,
        }}
      >
        <p
          className="font-[family-name:var(--font-poppins)] font-bold uppercase tracking-wider"
          style={{
            color: "var(--accent)",
            letterSpacing: "0.08em",
            fontSize: "clamp(7px, 0.7vw, 10px)",
          }}
        >
          Your Output
        </p>
        <p
          className="mt-1 italic"
          style={{
            fontFamily: "var(--font-dm-serif-display), Georgia, serif",
            color: "#1a1918",
            fontSize: "clamp(8px, 0.95vw, 13px)",
            lineHeight: 1.3,
          }}
        >
          Map all three. Even if you only use one at a time.
        </p>
      </div>
    </div>
  );
}

/** iPad — medium density (header + 2 fields + output) */
function IPadContent() {
  return (
    <div className="flex h-full w-full flex-col p-2">
      <p
        className="font-[family-name:var(--font-jetbrains-mono)] font-medium uppercase"
        style={{
          color: "#8a8680",
          letterSpacing: "0.06em",
          fontSize: "5px",
          lineHeight: 1.1,
        }}
      >
        Framework 12 / 76
      </p>
      <p
        className="mt-1 font-[family-name:var(--font-poppins)] font-bold"
        style={{
          color: "#1a1918",
          fontSize: "7px",
          lineHeight: 1.1,
        }}
      >
        The 3 Levels of Conflict
      </p>

      <div className="mt-2 h-px w-full bg-[#e0d9cd]" />

      <div className="mt-2 flex flex-col gap-1.5">
        <MiniField label="Inner" />
        <MiniField label="Personal" />
        <MiniField label="External" />
      </div>

      <div
        className="mt-auto rounded p-1.5"
        style={{
          border: "1px solid var(--accent)",
          backgroundColor: ACCENT_BG,
        }}
      >
        <p
          className="font-[family-name:var(--font-poppins)] font-bold uppercase"
          style={{
            color: "var(--accent)",
            letterSpacing: "0.05em",
            fontSize: "5px",
          }}
        >
          Your Output
        </p>
        <p
          className="mt-0.5 italic"
          style={{
            fontFamily: "var(--font-dm-serif-display), Georgia, serif",
            color: "#1a1918",
            fontSize: "6px",
            lineHeight: 1.2,
          }}
        >
          Map all three.
        </p>
      </div>
    </div>
  );
}

/** iPhone — minimal (header + output) */
function IPhoneContent() {
  return (
    <div className="flex h-full w-full flex-col p-1.5 pt-3">
      <p
        className="font-[family-name:var(--font-jetbrains-mono)] font-medium uppercase"
        style={{
          color: "#8a8680",
          letterSpacing: "0.05em",
          fontSize: "3.5px",
          lineHeight: 1.1,
        }}
      >
        Framework 12
      </p>
      <p
        className="mt-0.5 font-[family-name:var(--font-poppins)] font-bold"
        style={{
          color: "#1a1918",
          fontSize: "5px",
          lineHeight: 1.1,
        }}
      >
        The 3 Levels of Conflict
      </p>

      <div className="mt-1 h-px w-full bg-[#e0d9cd]" />

      <div className="mt-1 flex flex-col gap-0.5">
        <MicroField />
        <MicroField />
        <MicroField />
      </div>

      <div
        className="mt-auto rounded p-1"
        style={{
          border: "0.75px solid var(--accent)",
          backgroundColor: ACCENT_BG,
        }}
      >
        <p
          className="font-[family-name:var(--font-poppins)] font-bold uppercase"
          style={{
            color: "var(--accent)",
            letterSpacing: "0.04em",
            fontSize: "3.5px",
          }}
        >
          Your Output
        </p>
        <p
          className="mt-0.5 italic"
          style={{
            fontFamily: "var(--font-dm-serif-display), Georgia, serif",
            color: "#1a1918",
            fontSize: "4px",
            lineHeight: 1.2,
          }}
        >
          Map all three.
        </p>
      </div>
    </div>
  );
}

/* Field helpers */

function FieldRow({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        className="block font-[family-name:var(--font-poppins)] font-bold uppercase tracking-wider"
        style={{
          color: "#1a1918",
          letterSpacing: "0.07em",
          fontSize: "clamp(6px, 0.65vw, 10px)",
        }}
      >
        {label}
      </label>
      <div
        className="mt-0.5 rounded border bg-white px-1.5 py-1 italic md:px-2 md:py-1.5"
        style={{
          borderColor: "#e0d9cd",
          color: "#a09a91",
          fontSize: "clamp(7px, 0.8vw, 11px)",
        }}
      >
        {placeholder}
      </div>
    </div>
  );
}

function MiniField({ label }: { label: string }) {
  return (
    <div>
      <p
        className="font-[family-name:var(--font-poppins)] font-bold uppercase"
        style={{
          color: "#1a1918",
          letterSpacing: "0.05em",
          fontSize: "5px",
        }}
      >
        {label}
      </p>
      <div
        className="mt-0.5 rounded-sm border bg-white"
        style={{
          borderColor: "#e0d9cd",
          height: "9px",
        }}
      />
    </div>
  );
}

function MicroField() {
  return (
    <div
      className="rounded-sm border bg-white"
      style={{
        borderColor: "#e0d9cd",
        height: "5px",
      }}
    />
  );
}
