import Image from "next/image";

export function Problem() {
  return (
    <section
      id="problem"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="label-caps mb-8 text-ink-muted">The Invisible Tax</p>
            <h2 className="headline-lg text-ink">
              The best idea in the room is often the one that goes unheard.
            </h2>
            <p className="body-lg mt-8 text-ink-tint">
              It&apos;s not that your idea is flawed. It&apos;s that the
              structure of its delivery lacks the necessary friction to cause
              realization. You are explaining. They need to be convinced.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="relative aspect-[4/3] w-full border border-line bg-surface-low">
              <Image
                src="/hf_20260501_142432_169a146b-b782-4d9b-849d-6f29b463e563_min.webp"
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
