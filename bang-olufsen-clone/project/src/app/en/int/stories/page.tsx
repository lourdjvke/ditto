import HeroSection from "./sections/hero-section";
import LivingDesignCraftsmanshipSection from "./sections/living-design-craftsmanship-section";
import GlobalBrandAmbassadorSection from "./sections/global-brand-ambassador-section";
import ExploreAllStoriesSection from "./sections/explore-all-stories-section";
import LivingPremiumHeadphonesSection from "./sections/living-premium-headphones-section";
import CtaSection from "./sections/cta-section";

export default function Page() {
  return (
    <>
      <div className="block" data-cid="n1" id="cookie-information-template-wrapper" />
      <main className="block relative pt-[6.3125rem] flex-1 bg-background max-lg:pt-15" data-cid="n42" id="main-layout">
        <div className="block" data-cid="n43">
          <div className="block" data-cid="n44">
            <HeroSection />
            <LivingDesignCraftsmanshipSection />
            <GlobalBrandAmbassadorSection />
            <ExploreAllStoriesSection />
            <div className="block max-w-378 mb-25 px-9 mx-auto max-md:mb-12.5 max-lg:px-4 md:max-lg:mb-16.5" data-cid="n146">
              <div className="border-b border-solid border-b-clr-1 block relative" data-cid="n147" />
            </div>
            <LivingPremiumHeadphonesSection />
            <CtaSection />
          </div>
        </div>
      </main>
    </>
  );
}
