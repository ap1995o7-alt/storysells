import Image from "next/image";

export function ProductPreviews() {
  return (
    <section
      aria-label="Product previews"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="relative aspect-[4/3] w-full border border-line bg-surface-low md:aspect-[3/4]">
            <Image
              src="/hf_20260501_142100_07c16c07-1fe7-4df3-ae18-fc71bcafd679.png"
              alt="Story Sells workbook lying flat — dramatic editorial shot"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="editorial-image object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] w-full border border-line bg-surface-low md:aspect-[3/4]">
            <Image
              src="/hf_20260501_142432_169a146b-b782-4d9b-849d-6f29b463e563_min.webp"
              alt="Story Sells workbook open — interior pages with fillable frameworks"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="editorial-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
