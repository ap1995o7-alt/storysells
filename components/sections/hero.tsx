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
              <span className="text-ink-tint">
                Same idea. Different outcome.
              </span>
            </h1>

            <p className="body-lg mt-10 max-w-[640px] text-ink-tint">
              This is a 191-page workbook with 76 storytelling frameworks
              from 30 books. You fill it in for your pitch, your post, your
              deck. You walk out with something you can use today. Not next
              quarter. Today.
            </p>

            <div className="mt-12 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-6">
              <BuyButton>Get the Workbook — ₹499</BuyButton>
              <p className="body-md text-ink-tint">
                Instant download
                <span aria-hidden="true" className="brand-slash mx-2">/</span>
                Fillable PDF
                <span aria-hidden="true" className="brand-slash mx-2">/</span>
                Works on laptop, iPad, phone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
