"use client";
import { useState, useEffect, useCallback } from "react";

// 8 captured slides for Beo Grace Natural Aluminium (matching the existing carousel)
const SLIDES = [
  { src: "/assets/cloned/images/46e4fd451331.png", alt: "Beo Grace Natural Aluminium" },
  { src: "/assets/cloned/images/cbf2bb49024b.png", alt: "Beo Grace – front view" },
  { src: "/assets/cloned/images/2a01630139c8.webp", alt: "Beo Grace in ear" },
  { src: "/assets/cloned/images/c16699c5e70f.webp", alt: "Beo Grace lifestyle – ocean" },
  { src: "/assets/cloned/images/d3c3900027f5.webp", alt: "Beo Grace – sunset" },
  { src: "/assets/cloned/images/f37d445d27f0.png", alt: "Beo Grace – couple" },
  { src: "/assets/cloned/images/134574a49ca4.webp", alt: "Beo Grace on flowers" },
  { src: "/assets/cloned/images/1e7fee7238d5.webp", alt: "Beo Grace in seashell" },
];

// Color variants — these drive both the swatch UI and the hero carousel's active color label
const COLORS = [
  { name: "Natural Aluminium", cssVar: "--clr-2" },
  { name: "Honey Tone", cssVar: "--clr-1" },
];

/** 
 * Positioned as an absolute overlay on the hero section.
 * Intercepts the existing zoom button (data-cid="n262") and renders a fullscreen modal.
 * Also makes the color swatches visually interactive.
 */
export default function BeoGraceFullscreenCarousel() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [colorIdx, setColorIdx] = useState(1); // Natural Aluminium active by default

  const prev = useCallback(() => setIdx(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIdx(i => Math.min(SLIDES.length - 1, i + 1)), []);

  // Intercept the static zoom button (data-cid="n262") in HeroSection
  useEffect(() => {
    const zoomBtn = document.querySelector('[data-cid="n262"]') as HTMLButtonElement | null;
    if (!zoomBtn) return;
    const handler = (e: Event) => { e.stopPropagation(); setOpen(true); };
    zoomBtn.addEventListener("click", handler);
    // Make it look clickable
    zoomBtn.style.cursor = "pointer";
    return () => zoomBtn.removeEventListener("click", handler);
  }, []);

  // Intercept color swatch clicks in HeroSection (n302 = Honey Tone, n307 = Natural Aluminium)
  useEffect(() => {
    const swatchMap: Array<[string, number]> = [
      ['[data-cid="n302"]', 0],  // Honey Tone
      ['[data-cid="n307"]', 1],  // Natural Aluminium
    ];
    const cleanups: Array<() => void> = [];
    swatchMap.forEach(([sel, ci]) => {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (!el) return;
      el.style.cursor = "pointer";
      const handler = () => {
        setColorIdx(ci);
        // Update aria-checked visuals
        swatchMap.forEach(([s, _]) => {
          const sw = document.querySelector(s) as HTMLElement | null;
          if (sw) sw.setAttribute("aria-checked", "false");
        });
        el.setAttribute("aria-checked", "true");
        // Update color name display
        const labels = document.querySelectorAll('[data-cid="n293"], [data-cid="n295"]');
        labels.forEach((l, li) => {
          (l as HTMLElement).style.opacity = li === ci ? "1" : "0";
        });
      };
      el.addEventListener("click", handler);
      cleanups.push(() => el.removeEventListener("click", handler));
    });
    return () => cleanups.forEach(fn => fn());
  }, []);

  // Keyboard nav
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] bg-black flex flex-col" role="dialog" aria-label="Product gallery fullscreen">
      {/* Close */}
      <button
        onClick={() => setOpen(false)}
        aria-label="Close fullscreen"
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M0 15.839L15.839 0M0 0L15.839 15.839" stroke="white" strokeWidth="1.5"/>
        </svg>
      </button>

      {/* Slide */}
      <div className="flex-1 relative overflow-hidden">
        {SLIDES.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous"
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-opacity ${idx === 0 ? "opacity-20 pointer-events-none" : ""}`}
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M9 1L1 8l8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next"
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-opacity ${idx === SLIDES.length - 1 ? "opacity-20 pointer-events-none" : ""}`}
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M1 1l8 7-8 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Bottom bar: dots + color picker */}
      <div className="flex flex-col items-center gap-3 py-5 bg-black/60">
        {/* Slide dots */}
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>

        {/* Color swatches */}
        <div className="flex items-center gap-3">
          <span className="text-white/60 text-xs tracking-widest uppercase">Colour</span>
          {COLORS.map((c, i) => (
            <button
              key={i}
              onClick={() => setColorIdx(i)}
              aria-label={c.name}
              title={c.name}
              style={{ backgroundColor: `var(${c.cssVar}, #aaa)` }}
              className={`w-5 h-5 rounded-full border-2 transition-all ${i === colorIdx ? "border-white scale-110" : "border-white/30 hover:border-white/60"}`}
            />
          ))}
          <span className="text-white/80 text-xs">{COLORS[colorIdx].name}</span>
        </div>
      </div>
    </div>
  );
}
