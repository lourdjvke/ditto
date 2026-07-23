import { ctaSectionContent } from "../content";
/** Cta section. */
export default function CtaSection({ content = ctaSectionContent } = {}) {
  return (
    <div className="block bg-background md:max-lg:mt-12.5" data-cid="n384">
      <div className="block max-w-378 py-15 px-9 mx-auto max-md:h-211 max-md:py-13.5 max-lg:px-4 md:max-lg:py-7.5" data-cid="n385">
        <div className="block bg-background max-md:-m-4 max-md:p-4" data-cid="n386">
          <div className="flex -mx-4 flex-wrap max-md:-mx-1.5 md:max-lg:-mx-3" data-cid="n387">
            <div className="w-155 block max-w-[50%] px-4 shrink-0 basis-1/2 max-md:w-[22.1875rem] max-md:max-w-full max-md:px-1.5 max-md:basis-full md:max-lg:w-95 md:max-lg:px-3 2xl:w-184" data-cid="n388">
              <div className="h-full flex items-center" data-cid="n389">
                <div className="w-full h-full block" data-cid="n390">
                  <div className="block" data-cid="n391">
                    <a className="inline text-muted-foreground cursor-pointer hover:border-border hover:text-border hover:outline-border hover:[text-decoration-color:var(--border)]" data-cid="n392" data-component="link" href="/en/int/story/spatial-audio">
                      <div className="block overflow-hidden" data-cid="n393">
                        <div className="block" data-cid="n394">
                          <div className="block relative aspect-square" data-cid="n395" role="presentation">
                            <span className="h-full block absolute top-0 inset-x-0 overflow-hidden" data-cid="n396">
                              <img className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip object-cover" data-cid="n397" data-component="image" alt="One of Beo Grace earphone placed on a sea shell" sizes="100vw" src="/assets/cloned/images/a90013b4e81c.webp" srcSet="/assets/cloned/images/b73d196dede3.webp 640w, /assets/cloned/images/4b8803684256.webp 750w, /assets/cloned/images/16187b13fd51.webp 828w, /assets/cloned/images/adbe66ad18a1.webp 1080w, /assets/cloned/images/cc0e5df7cddf.webp 1200w, /assets/cloned/images/6e0558bbff04.webp 1920w, /assets/cloned/images/213fe907c8cd.webp 2048w, /assets/cloned/images/a90013b4e81c.webp 3840w" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="block max-w-[50%] px-4 shrink-0 basis-1/2 max-md:max-w-full max-md:px-1.5 max-md:basis-full md:max-lg:px-3" data-cid="n398">
              <div className="h-full flex -mx-4 py-15 flex-wrap max-md:-mx-1.5 max-md:py-0 md:max-lg:-mx-3" data-cid="n399">
                <div className="h-117 flex max-w-[66.6667%] ml-[103.3px] px-4 flex-col justify-center shrink-0 basis-2/3 max-md:h-[24.5625rem] max-md:max-w-full max-md:px-1.5 max-md:basis-full max-md:ml-0 md:max-lg:h-[33.6875rem] md:max-lg:ml-[63.3px] md:max-lg:px-3 2xl:h-146 2xl:ml-[122.7px]" data-cid="n400">
                  <div className="block max-md:mt-8" data-cid="n401">
                    <h3 className="block mb-8 text-2xl leading-9 max-md:mb-4 max-md:text-lg max-md:leading-7 md:max-lg:text-[1.375rem] md:max-lg:leading-8" data-cid="n402" data-component="heading">
                      {content.title}
                    </h3>
                    <div className="block leading-6.5 tracking-[0.2px]" data-cid="n403">
                      <p className="block whitespace-pre-wrap" data-cid="n404">
                        Beo Grace is designed around an entirely new acoustic architecture, perfected by our engineers to deliver sound with remarkable fidelity. At the heart is a 12 mm titanium driver, producing deeper bass with detailed highs.
                      </p>
                      <p className="block mt-[0.9375rem] whitespace-pre-wrap" data-cid="n405">
                        Optimised for Dolby Atmos, Beo Grace isn’t just listening to music. It draws you in to the sound, until you hear it and feel it, in all its vibrancy and depth.
                      </p>
                    </div>
                  </div>
                  <div className="w-4/5 flex flex-col max-md:w-[89%] md:max-lg:w-full 2xl:w-2/3" data-cid="n406">
                    <div className="block" data-cid="n407">
                      <div className="block" data-cid="n408">
                        <a className="h-10 border-2 border-solid border-border flex relative min-w-35 mt-10 py-2 px-8 rounded-[40px] justify-center flex-1 overflow-hidden font-medium leading-5 tracking-[0.1px] text-center cursor-pointer max-md:mt-7 md:max-lg:h-16 md:max-lg:min-w-[fit-content] md:max-lg:mt-8 md:max-lg:p-2.5 2xl:mt-12 hover:bg-clr-8 hover:border-clr-9 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)] focus:bg-border focus:border-clr-0 focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" data-cid="n409" data-component="button" aria-label={content.actions[0].ariaLabel ?? content.actions[0].label} href={content.actions[0].href} target="_self">
                          {content.actions[0].label}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
