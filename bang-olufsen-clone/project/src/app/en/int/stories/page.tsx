import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import LivingDesignCraftsmanshipSection from "./sections/living-design-craftsmanship-section";
import GlobalBrandAmbassadorSection from "./sections/global-brand-ambassador-section";
import ExploreAllStoriesSection from "./sections/explore-all-stories-section";
import LivingPremiumHeadphonesSection from "./sections/living-premium-headphones-section";
import CtaSection from "./sections/cta-section";
import Footer from "./sections/footer";

export default function Page() {
  return (
    <>
      <div className="block" data-cid="n1" id="cookie-information-template-wrapper" />
      <div className="h-full block" data-cid="n2" id="__next">
        <div className="h-full block" data-cid="n3">
          <div className="h-full block" data-cid="n4">
            <nav className="block" data-cid="n5" data-component="nav">
              <div className="block" data-cid="n6" role="banner" />
              <div className="h-0 block opacity-0 max-w-378" data-cid="n7">
                <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n8">
                  Navigation and Content
                </span>
                <ul className="flex pl-10 [list-style-type:disc] list-outside max-md:flex-col" data-cid="n9">
                  <li className="h-6.5 list-item [list-style-type:none]" data-cid="n10">
                    <a className="inline text-border leading-6.5 tracking-[0.2px] cursor-pointer focus:underline" data-cid="n11" data-component="link" href="#main-layout">
                      Skip to main content
                    </a>
                  </li>
                  <li className="h-6.5 list-item [list-style-type:none]" data-cid="n12">
                    <a className="inline text-border leading-6.5 tracking-[0.2px] cursor-pointer focus:underline" data-cid="n13" data-component="link" href="#main-footer">
                      Skip to main footer
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <header className="h-0 block fixed top-0 inset-x-0 z-91" data-cid="n14" aria-hidden="false">
              <Navbar />
            </header>
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
            <Footer />
          </div>
        </div>
      </div>
      {" "}
    </>
  );
}
