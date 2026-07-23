"use client";
import { useState } from "react";

const slides = [
  {
    img: "/assets/cloned/images/f6be9140776b.webp",
    label: "Adaptive Charging",
    caption: "Intelligent charging that adapts to your battery health for longer earbud life.",
  },
  {
    img: "/assets/cloned/images/1334ba689618.webp",
    label: "Charging & Lights",
    caption: "Charging indicator lights show the status at a glance — on both the case and earbuds.",
  },
  {
    img: "/assets/cloned/images/8a21ac3e29ce.webp",
    label: "Wireless Charging",
    caption: "The case supports Qi wireless charging — just place it on any compatible pad.",
  },
];

export default function AdaptiveChargingCarousel() {
  const [idx, setIdx] = useState(0);

  return (
    <div className="block relative aspect-square overflow-hidden">
      {/* Image */}
      <div className="w-full h-full absolute top-0 inset-x-0">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.img}
            alt={s.label}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      {/* Prev/Next */}
      <button
        onClick={() => setIdx(i => Math.max(0, i - 1))}
        aria-label="Previous"
        className={`absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow transition-opacity ${idx === 0 ? "opacity-30 pointer-events-none" : "opacity-80 hover:opacity-100"}`}
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M9 1L1 8l8 7" stroke="#191817" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={() => setIdx(i => Math.min(slides.length - 1, i + 1))}
        aria-label="Next"
        className={`absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow transition-opacity ${idx === slides.length - 1 ? "opacity-30 pointer-events-none" : "opacity-80 hover:opacity-100"}`}
      >
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M1 1l8 7-8 7" stroke="#191817" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Dots + label */}
      <div className="absolute bottom-4 inset-x-0 flex flex-col items-center gap-2">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={s.label}
              className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/50"}`}
            />
          ))}
        </div>
        <p className="text-white text-xs tracking-widest uppercase opacity-80">{slides[idx].label}</p>
      </div>
    </div>
  );
}
