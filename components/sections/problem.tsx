import Image from "next/image";

export function Problem() {
  return (
    <section id="problem" className="border-t border-line">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="label-caps mb-8 text-ink-muted">The Invisible Tax</p>

            <h2 className="headline-lg text-ink">You&apos;ve had this moment.</h2>

            <div className="body-lg mt-8 space-y-6 text-ink-tint">
              <p>
                You&apos;re in a meeting. You&apos;ve done the work. Your
                research is solid. You open your mouth.
              </p>
              <p className="text-ink">And the room just… doesn&apos;t move.</p>
              <p>
                Then someone else says roughly the same thing. Maybe worse.
                But they say it differently. The room nods. The decision
                moves. You sit there wondering what the hell just happened.
              </p>
              <p>
                That&apos;s not a confidence problem. It&apos;s not a
                charisma problem. It&apos;s a structure problem. And it has
                a fix.
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="relative aspect-[4/3] w-full border border-line bg-surface-low">
              <Image
                src="/hf_20260501_142432_a169a33d-3bc6-4b68-81a1-4abfb8c62a27.png"
                alt="Story Sells workbook on a desk"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="editorial-image object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
