"use client";
import { useMemo, useState } from "react";

const PRODUCT_VARIANTS = {
  natural: {
    label: "Natural Aluminium",
    swatchClass: "bg-[#d8d8d8]",
    images: [
      "/assets/cloned/images/46e4fd451331.png",
      "/assets/cloned/images/cbf2bb49024b.png",
      "/assets/cloned/images/46e4fd451331.png",
      "/assets/cloned/images/cbf2bb49024b.png",
      "/assets/cloned/images/46e4fd451331.png",
    ],
  },
  honey: {
    label: "Grace Honey Tone",
    swatchClass: "bg-[#cd9e85]",
    images: [
      "/assets/cloned/images/5f2e71314a0d.png",
      "/assets/cloned/images/9843fb30298d.png",
      "/assets/cloned/images/5f2e71314a0d.png",
      "/assets/cloned/images/9843fb30298d.png",
      "/assets/cloned/images/5f2e71314a0d.png",
    ],
  },
} as const;

type VariantKey = keyof typeof PRODUCT_VARIANTS;

export default function BeoGraceHeroCarouselSection() {
  const [currentVariant, setCurrentVariant] = useState<VariantKey>("natural");
  const [currentSlide, setCurrentSlide] = useState(0);

  const variant = PRODUCT_VARIANTS[currentVariant];
  const slideCount = variant.images.length;

  const dots = useMemo(() => Array.from({ length: slideCount }, (_, index) => index), [slideCount]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);

  const selectVariant = (variantKey: VariantKey) => {
    setCurrentVariant(variantKey);
    setCurrentSlide(0);
  };

  return (
    <div className="block w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24 py-12 flex flex-col lg:flex-row min-h-[70vh] bg-[#fcfcfc] text-[#000]" data-cid="beograce-hero-carousel">
      <section className="lg:w-7/12 relative flex flex-col h-[70vh] lg:h-auto">
        <button
          type="button"
          aria-label="Expand gallery"
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>

        <div className="flex-grow overflow-hidden rounded-[1.25rem] bg-white shadow-sm">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {variant.images.map((src, index) => (
              <div key={index} className="min-w-full flex items-center justify-center p-8">
                <img
                  src={src}
                  alt={`${variant.label} image ${index + 1}`}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-3" aria-label="Gallery pagination">
            {dots.map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-2 h-2 bg-black" : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={prevSlide}
              disabled={slideCount === 0}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow disabled:opacity-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              disabled={slideCount === 0}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow disabled:opacity-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="w-24 hidden lg:block" />
        </div>
      </section>

      <section className="lg:w-5/12 flex flex-col justify-center lg:pl-16 xl:pl-24 pt-12 lg:pt-0">
        <div className="max-w-md">
          <p className="text-xs tracking-[0.2em] text-[#5a5a5a] uppercase mb-4 font-medium">Beo Grace</p>
          <h1 className="text-[2.5rem] leading-tight font-normal mb-6 tracking-tight text-[#0f172a]">Advanced ANC earbuds</h1>

          <p className="text-[0.95rem] leading-relaxed text-[#374151] mb-10 font-light pr-4">
            True wireless earbuds with advanced noise cancellation and a hand polished, lightweight design. Immerse in your music distraction-free, with Beo Grace. Intuitively control playback or calls with a simple gesture. Enjoy clear call quality, optimised battery life, and all-day comfort.
          </p>

          <hr className="border-gray-200 mb-6" />

          <div className="flex items-center justify-between mb-8">
            <span className="text-sm text-[#6b7280] font-medium">{variant.label}</span>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => selectVariant("honey")}
                aria-label="Grace Honey Tone"
                className={`w-7 h-7 rounded-full border p-[2px] focus:outline-none focus:ring-1 focus:ring-black ${
                  currentVariant === "honey" ? "border-black" : "border-[#d1d5db]"
                }`}
              >
                <span className={`block w-full h-full rounded-full ${PRODUCT_VARIANTS.honey.swatchClass}`} />
              </button>
              <button
                type="button"
                onClick={() => selectVariant("natural")}
                aria-label="Natural Aluminium"
                className={`w-7 h-7 rounded-full border p-[2px] focus:outline-none focus:ring-1 focus:ring-black ${
                  currentVariant === "natural" ? "border-black" : "border-[#d1d5db]"
                }`}
              >
                <span className={`block w-full h-full rounded-full ${PRODUCT_VARIANTS.natural.swatchClass}`} />
              </button>
            </div>
          </div>

          <hr className="border-gray-200 mb-10" />

          <div className="mb-8">
            <span className="text-[2rem] font-normal tracking-tight">$1,500</span>
          </div>

          <button className="w-[220px] h-14 border-2 border-black rounded-full text-[15px] font-medium hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center">
            Experience in store
          </button>
        </div>
      </section>
    </div>
  );
}
