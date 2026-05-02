import { BuyButton } from "@/components/site/buy-button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-3.5rem)] items-center md:min-h-[calc(100vh-4rem)]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-10">
            <p className="label-caps mb-6 text-ink-muted">
              The Storytelling Workbook
            </p>

            <h1 className="display-xl text-ink">
              You explain.<br />
              They convince.<br />
              <span className="text-ink-tint">One workbook closes the gap.</span>
            </h1>

            <div className="mt-12 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-6">
              <BuyButton>Get Access — ₹499</BuyButton>
              <p className="body-md text-ink-tint">
                Available instantly in digital format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
