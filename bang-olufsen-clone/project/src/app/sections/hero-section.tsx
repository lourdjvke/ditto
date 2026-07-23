"use client";
import { useRef, useState } from "react";

/** Hero section — the page's lead block. */
export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function togglePause() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }

  return (
    <div className="w-full h-[36.1875rem] flex flex-col justify-center max-md:w-full max-md:h-auto md:max-lg:h-[47.45rem] 2xl:w-full 2xl:h-270 2xl:min-h-162.5 2xl:relative 2xl:overflow-hidden" data-cid="n45">
      <div className="w-full h-170 flex relative z-1 -mt-[6.3125rem] flex-col justify-center overflow-hidden max-md:h-auto max-md:pb-0 max-md:px-0 max-md:z-[initial] max-md:mt-0 md:max-lg:h-[51.2rem] md:max-lg:-mt-15 2xl:h-270 2xl:min-h-162.5 2xl:block 2xl:bg-border 2xl:z-[initial] 2xl:mt-0 2xl:[flex-direction:initial] 2xl:[justify-content:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial]" data-cid="n46">
        <div className="h-170 block relative bg-clr-0 max-md:h-auto max-md:bg-[initial] max-md:px-4 max-md:pt-4 max-md:pb-4 md:max-lg:h-[51.2rem] 2xl:h-auto 2xl:static 2xl:inset-auto 2xl:bg-[initial]" data-cid="n47">

          {/* 2xl desktop figure */}
          <figure className="hidden 2xl:w-480 2xl:h-270 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:[animation-name:background-animation] 2xl:[animation-duration:2s] 2xl:[animation-timing-function:cubic-bezier(0.33,_0,_0.67,_1)]" data-cid="n48">
            <div className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n49">
              <span className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n50">
                <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n51" alt="Two people standing next to each other while wearing Beo Grace" sizes="100vw" src="/assets/cloned/images/16312b982981.webp" srcSet="/assets/cloned/images/9c5d55fd80f7.webp 640w, /assets/cloned/images/a2afffae3f35.webp 750w, /assets/cloned/images/0a0a236116ea.webp 828w, /assets/cloned/images/041b38e27943.webp 1080w, /assets/cloned/images/531f12dcd7d6.webp 1200w, /assets/cloned/images/3c73ddfc107d.webp 1920w, /assets/cloned/images/44f8318596ce.webp 2048w, /assets/cloned/images/16312b982981.webp 3840w" />
              </span>
            </div>
          </figure>

          {/* Mobile/tablet video block */}
          <div className="block 2xl:hidden max-md:rounded-2xl overflow-hidden relative" style={{ aspectRatio: "9/16" }} data-cid="n56">
            {/* Video */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover block"
              data-cid="n66"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/assets/cloned/videos/4971aa4ab923.mov" type="video/mp4" />
            </video>

            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 55%)" }} />

            {/* Pause/Play button */}
            <button
              className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer z-10"
              style={{ backgroundColor: "rgba(25,24,23,0.4)" }}
              onClick={togglePause}
              aria-label={playing ? "Pause" : "Play"}
              type="button"
            >
              {playing ? (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                  <rect x="0" y="0" width="3" height="12" rx="1"/>
                  <rect x="7" y="0" width="3" height="12" rx="1"/>
                </svg>
              ) : (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                  <polygon points="0,0 10,6 0,12"/>
                </svg>
              )}
            </button>

            {/* Text overlay */}
            <div className="absolute bottom-0 inset-x-0 z-[2] text-center pb-8 px-4" data-cid="n69">
              <h1 className="text-white text-lg leading-7 mb-1" data-cid="n73">Beo Grace</h1>
              <p className="text-white text-xs leading-5 tracking-[0.1px] mt-2" data-cid="n76">Wireless sound. Connected to the moment.</p>
              <div className="mt-5">
                <a
                  className="bo-pill-btn border-2 border-solid border-white inline-block relative min-w-35 py-2 px-8 rounded-[40px] text-white font-medium leading-6 tracking-[0.1px] whitespace-nowrap"
                  href="/en/int/earphones/beograce"
                  aria-label="Learn more about Beo Grace Earbuds"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Desktop 2xl content */}
          <div className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:z-2" data-cid="n82">
            <div className="hidden 2xl:w-480 2xl:h-25 2xl:block 2xl:absolute" data-cid="n83" />
            <div className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:-z-1" data-cid="n84">
              <div className="hidden 2xl:w-480 2xl:h-52 2xl:flex 2xl:absolute 2xl:top-54 2xl:mb-[2.9375rem] 2xl:pr-16 2xl:pl-6 2xl:flex-col 2xl:justify-end" data-cid="n85">
                <div className="hidden 2xl:block" data-cid="n86">
                  <div className="hidden 2xl:block 2xl:max-w-[41.6667%] 2xl:px-4 2xl:shrink-0 2xl:basis-[41.6667%]" data-cid="n87">
                    <h1 className="hidden 2xl:w-[731.3px] 2xl:block 2xl:mb-10 2xl:text-background 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:uppercase" data-cid="n88">Beo Grace</h1>
                  </div>
                </div>
                <div className="hidden 2xl:h-36 2xl:block" data-cid="n89">
                  <div className="hidden 2xl:block 2xl:max-w-[41.6667%] 2xl:px-4 2xl:shrink-0 2xl:basis-[41.6667%]" data-cid="n90">
                    <h2 className="hidden 2xl:w-[731.3px] 2xl:block 2xl:text-background 2xl:text-[4rem] 2xl:leading-18 2xl:tracking-[-0.5px]" data-cid="n91">A future icon. Crafted for the century ahead.</h2>
                  </div>
                </div>
              </div>
              <div className="hidden 2xl:w-480 2xl:h-20 2xl:min-h-20 2xl:block 2xl:absolute 2xl:bottom-0 2xl:opacity-50" data-cid="n92" />
              <div className="hidden 2xl:w-453.5 2xl:h-25 2xl:block 2xl:absolute 2xl:bottom-0 2xl:mx-[3.3125rem] 2xl:content-center" data-cid="n93">
                <div className="hidden 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n94">
                  <div className="hidden 2xl:w-453.5 2xl:h-0.5 2xl:border 2xl:border-solid 2xl:border-surface 2xl:block 2xl:opacity-20" data-cid="n95" />
                </div>
                <div className="hidden 2xl:h-20 2xl:flex 2xl:justify-between 2xl:items-center" data-cid="n96">
                  <div className="hidden 2xl:w-[634.9px] 2xl:h-[1.525rem] 2xl:block" data-cid="n97" aria-hidden="true">
                    <div className="hidden 2xl:w-[634.9px] 2xl:h-[1.3125rem] 2xl:inline-block 2xl:relative 2xl:overflow-hidden 2xl:text-background 2xl:text-sm 2xl:leading-[1.3125rem] 2xl:tracking-[1.7px] 2xl:text-left 2xl:uppercase" data-cid="n98" aria-hidden="true">
                      <span className="hidden 2xl:w-[634.9px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n99">SCROLL TO DISCOVER</span>
                    </div>
                  </div>
                  <div className="hidden 2xl:w-[14.6rem] 2xl:h-6 2xl:block 2xl:pl-[11.3375rem] 2xl:text-background 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:uppercase" data-cid="n101">
                    <span className="hidden 2xl:inline" data-cid="n102">$1,500</span>
                  </div>
                  <div className="hidden 2xl:w-[6.5875rem] 2xl:h-11 2xl:block" data-cid="n103">
                    <div className="hidden 2xl:block" data-cid="n104">
                      <a className="hidden 2xl:border-2 2xl:border-solid 2xl:border-clr-2 2xl:inline-block 2xl:relative 2xl:py-2 2xl:px-8 2xl:rounded-[40px] 2xl:text-border 2xl:font-medium 2xl:leading-6 2xl:tracking-[0.1px] 2xl:text-center 2xl:bg-background 2xl:cursor-pointer" data-cid="n105" aria-label="Shop the product" href="#overview" target="_section">Shop</a>
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
