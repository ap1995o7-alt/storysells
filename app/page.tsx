import { StickyNav } from "@/components/sections/sticky-nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Revelation } from "@/components/sections/revelation";
import { Mechanism } from "@/components/sections/mechanism";
import { ProductPreviews } from "@/components/sections/product-previews";
import { HoverBrandLogo } from "@/components/ui/hover-brand-logo";
import { PagePreviews } from "@/components/sections/page-previews";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { Founder } from "@/components/sections/founder";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { MotionFooter } from "@/components/ui/motion-footer";
import { StickyBottomBar } from "@/components/sections/sticky-bottom-bar";

export default function Home() {
  return (
    <>
      <StickyNav />

      <main>
        <Hero />
        <Problem />
        <Revelation />
        <Mechanism />
        <ProductPreviews />
        <HoverBrandLogo />
        <PagePreviews />
        <WhoItsFor />
        <Founder />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>

      <MotionFooter />
      <StickyBottomBar />
    </>
  );
}
