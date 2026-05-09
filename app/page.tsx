import { StickyNav } from "@/components/sections/sticky-nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Mechanism } from "@/components/sections/mechanism";
import { Companies } from "@/components/sections/companies";
import { PagePreviews } from "@/components/sections/page-previews";
import { Quotes } from "@/components/sections/quotes";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { MotionFooter } from "@/components/ui/motion-footer";
import { FloatingCTA } from "@/components/sections/floating-cta";

export default function Home() {
  return (
    <>
      <StickyNav />

      <main>
        <Hero />
        <Problem />
        <Mechanism />
        <Companies />
        <PagePreviews />
        <Quotes />
        <WhoItsFor />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <MotionFooter />
      <FloatingCTA />
    </>
  );
}
