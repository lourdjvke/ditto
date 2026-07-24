"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

/* ─── Slides Data ─────────────────────────────────────────────────── */
const SLIDES = [
  {
    id: "beolab28",
    label: "BEOLAB 28",
    desc: "Hi-fidelity wireless home speakers",
    price: "From 21,200 USD / set",
    to: null,
    svg: (
      <svg viewBox="0 0 100 200" className="h-full drop-shadow-xl">
        {/* Left Speaker */}
        <rect x="25" y="20" width="12" height="110" rx="6" fill="#e5e5e5" stroke="#ccc" strokeWidth="0.5" />
        <path d="M 23 130 L 39 130 L 35 150 L 27 150 Z" fill="#444" />
        {/* Right Speaker */}
        <rect x="63" y="20" width="12" height="110" rx="6" fill="#e5e5e5" stroke="#ccc" strokeWidth="0.5" />
        <path d="M 61 130 L 77 130 L 73 150 L 65 150 Z" fill="#444" />
        {/* Grille dots */}
        {[0,1,2,3,4,5].map(i => (
          <g key={i}>
            <circle cx="31" cy={35 + i * 16} r="1.5" fill="#bbb" />
            <circle cx="69" cy={35 + i * 16} r="1.5" fill="#bbb" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: "beosound-balance",
    label: "BEOSOUND BALANCE",
    desc: "Sculptural home audio system",
    price: "From 3,200 USD / set",
    to: "/studio/configure",
    svg: (
      <svg viewBox="0 0 100 200" className="h-full drop-shadow-xl">
        {/* Main cylinder body */}
        <path d="M 30 50 Q 50 45 70 50 L 68 120 Q 50 125 32 120 Z" fill="#2b2b2b" />
        {/* Grille lines */}
        {[0,1,2,3,4,5,6].map(i => (
          <path key={i}
            d={`M ${31 + i * 0.5} ${55 + i * 9} Q 50 ${51 + i * 9} ${69 - i * 0.5} ${55 + i * 9}`}
            stroke="#444" strokeWidth="0.4" fill="none" opacity="0.7" />
        ))}
        {/* Tweeter top ring */}
        <ellipse cx="50" cy="50" rx="20" ry="5" fill="#3a3a3a" />
        <ellipse cx="50" cy="49" rx="10" ry="2.5" fill="#555" />
        {/* Base wood */}
        <path d="M 32 120 Q 50 125 68 120 L 65 150 Q 50 155 35 150 Z" fill="#c4a47c" />
        {/* Base bottom */}
        <ellipse cx="50" cy="150" rx="16" ry="4" fill="#a8885c" />
      </svg>
    ),
  },
  {
    id: "beolab50",
    label: "BEOLAB 50",
    desc: "High-end active loudspeaker",
    price: "From 46,000 USD / set",
    to: null,
    svg: (
      <svg viewBox="0 0 100 200" className="h-full drop-shadow-xl">
        {/* Main trapezoidal body */}
        <polygon points="35,30 65,30 75,150 25,150" fill="#d4d4d4" stroke="#aaaaaa" strokeWidth="0.5" />
        <line x1="35" y1="30" x2="25" y2="150" stroke="#b0b0b0" strokeWidth="2" />
        <line x1="65" y1="30" x2="75" y2="150" stroke="#b0b0b0" strokeWidth="2" />
        {/* Tweeter disc */}
        <ellipse cx="50" cy="45" rx="10" ry="4" fill="#bbb" stroke="#aaa" strokeWidth="0.5" />
        <ellipse cx="50" cy="44" rx="5" ry="2" fill="#999" />
        {/* Woofer circle */}
        <ellipse cx="50" cy="105" rx="18" ry="7" fill="#c0c0c0" stroke="#aaa" strokeWidth="0.5" />
        <ellipse cx="50" cy="104" rx="9" ry="3.5" fill="#b0b0b0" />
        {/* Base */}
        <polygon points="25,150 75,150 80,165 20,165" fill="#444" />
      </svg>
    ),
  },
];

/* ─── Page ────────────────────────────────────────────────────────── */
export default function CustomPage() {
  const router = useRouter();

  // State machine: 1 = blob landing, 2 = carousel
  const [screen, setScreen] = useState<1 | 2>(1);

  // Blob texture cover toggle
  const [covered, setCovered] = useState(false);

  // Carousel
  const [slide, setSlide] = useState(0);
  const totalSlides = SLIDES.length;

  // Drag / swipe state
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0 });

  // Cover-rect interval while on screen 1
  useEffect(() => {
    if (screen !== 1) return;
    const id = setInterval(() => setCovered(c => !c), 3500);
    return () => clearInterval(id);
  }, [screen]);

  /* ── Slider helpers ── */
  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(totalSlides - 1, index));
    setSlide(clamped);
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
      trackRef.current.style.transform = `translateX(-${clamped * 100}%)`;
    }
  }, [totalSlides]);

  /* ── Touch / Mouse drag ── */
  const onDragStart = useCallback((clientX: number) => {
    dragRef.current = { active: true, startX: clientX };
    if (trackRef.current) trackRef.current.style.transition = "none";
  }, []);

  const onDragMove = useCallback((clientX: number) => {
    if (!dragRef.current.active || !trackRef.current || !sliderRef.current) return;
    const diff = clientX - dragRef.current.startX;
    const pct = (diff / sliderRef.current.clientWidth) * 100;
    trackRef.current.style.transform = `translateX(calc(-${slide * 100}% + ${diff}px))`;
  }, [slide]);

  const onDragEnd = useCallback((clientX: number) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    const movedBy = clientX - dragRef.current.startX;
    if (movedBy < -50 && slide < totalSlides - 1) goTo(slide + 1);
    else if (movedBy > 50 && slide > 0) goTo(slide - 1);
    else goTo(slide);
  }, [slide, totalSlides, goTo]);

  /* "Start composing" action — only slide 2 navigates */
  function handleCompose() {
    const dest = SLIDES[slide].to;
    if (dest) router.push(dest);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        .custom-root {
          font-family: 'Inter', sans-serif;
          background-color: #fafafa;
          background-image: linear-gradient(to right, #f2f2f2 1px, transparent 1px);
          background-size: 16.666% 100%;
          overscroll-behavior: none;
        }

        /* State transition */
        .state-view {
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .state-hidden {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.98);
          position: absolute;
          inset: 0;
        }

        /* Blob morph animation — uses CSS d: path() */
        @keyframes morphBlob {
          0%   { d: path('M 150 50 C 220 50, 260 90, 250 160 C 240 230, 200 260, 140 250 C 80 240, 40 200, 50 130 C 60 60, 80 50, 150 50 Z'); }
          33%  { d: path('M 160 40 C 240 60, 270 120, 240 180 C 210 240, 160 270, 100 240 C 40 210, 50 140, 70 80 C 90 20, 80 20, 160 40 Z'); }
          66%  { d: path('M 140 60 C 210 40, 250 100, 260 170 C 270 240, 180 260, 120 260 C 60 260, 40 180, 40 120 C 40 60, 70 80, 140 60 Z'); }
          100% { d: path('M 150 50 C 220 50, 260 90, 250 160 C 240 230, 200 260, 140 250 C 80 240, 40 200, 50 130 C 60 60, 80 50, 150 50 Z'); }
        }
        .blob-path {
          animation: morphBlob 10s ease-in-out infinite;
        }

        /* Cover-rect liquid slide */
        #cover-rect {
          transition: x 1.2s cubic-bezier(0.65, 0, 0.35, 1);
        }

        /* Slider */
        .slider-track {
          display: flex;
          will-change: transform;
        }
        .slider-slide {
          flex: 0 0 100%;
          width: 100%;
        }

        .no-select {
          user-select: none;
          -webkit-user-select: none;
        }
      `}</style>

      <div className="custom-root min-h-[100dvh] w-screen overflow-y-auto flex flex-col text-[#111] no-select antialiased">

        {/* ── Global Header ── */}
        <header className="flex justify-between items-center px-6 py-5 z-40 relative bg-transparent shrink-0">
          {/* Back button — only visible in state 2 */}
          <button
            onClick={() => { setScreen(1); setSlide(0); goTo(0); }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 focus:outline-none"
            style={{
              opacity: screen === 2 ? 1 : 0,
              pointerEvents: screen === 2 ? "auto" : "none",
              transition: "opacity 0.3s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
            <div className="text-2xl font-light tracking-tighter flex items-center">
              B<span className="text-lg mx-0.5">&amp;</span>O
            </div>
            <div className="text-[9px] tracking-[0.2em] mt-0.5 uppercase font-medium text-gray-500">Est. 1925</div>
          </div>

          {/* User icon */}
          <button className="w-10 h-10 flex items-center justify-center focus:outline-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </header>

        {/* ══════════════════════════════════════
            STATE 1 — Morphing Blob Landing
        ══════════════════════════════════════ */}
        <div
          className={`state-view flex-1 flex flex-col items-center justify-between py-8 px-4 z-10 ${screen === 1 ? "" : "state-hidden"}`}
        >
          {/* Blob Canvas */}
          <div className="flex-1 flex items-center justify-center relative w-full max-w-[340px] md:max-w-[420px]">
            <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-2xl">
              <defs>
                {/* Knit Fabric base pattern */}
                <pattern id="fabricPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#4a1521" />
                  <circle cx="5" cy="5" r="3" fill="#8c2d42" />
                  <circle cx="15" cy="15" r="3" fill="#8c2d42" />
                  <path d="M 0 10 L 10 0 M 10 20 L 20 10" stroke="#60a5fa" strokeWidth="1" />
                </pattern>

                {/* Metallic overlay pattern */}
                <pattern id="metalPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="#a37c3f" />
                  <line x1="0" y1="0" x2="20" y2="20" stroke="#d4af37" strokeWidth="3" />
                  <line x1="0" y1="20" x2="20" y2="0" stroke="#5c4314" strokeWidth="1" />
                </pattern>

                {/* Clip path bound to morphing blob */}
                <clipPath id="blobClip">
                  <path
                    className="blob-path"
                    d="M 150 50 C 220 50, 260 90, 250 160 C 240 230, 200 260, 140 250 C 80 240, 40 200, 50 130 C 60 60, 80 50, 150 50 Z"
                  />
                </clipPath>

                {/* 3D depth shading */}
                <radialGradient id="blob3DShading" cx="35%" cy="35%" r="65%">
                  <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="50%"  stopColor="#000000" stopOpacity="0.0" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.75" />
                </radialGradient>
              </defs>

              {/* Clipped layers */}
              <g clipPath="url(#blobClip)">
                {/* Layer 1 — Knit base */}
                <rect x="0" y="0" width="300" height="300" fill="url(#fabricPattern)" />
                {/* Layer 2 — Metallic cover (slides in/out) */}
                <rect
                  id="cover-rect"
                  x={covered ? "0" : "-300"}
                  y="0"
                  width="300"
                  height="300"
                  fill="url(#metalPattern)"
                />
                {/* Layer 3 — 3D lighting */}
                <rect x="0" y="0" width="300" height="300" fill="url(#blob3DShading)" />
              </g>
            </svg>
          </div>

          {/* Text */}
          <div className="text-center space-y-3 mb-6">
            <h1 className="text-2xl md:text-3xl font-normal tracking-tight">The Composer</h1>
            <p className="text-gray-500 text-xs md:text-sm font-light max-w-[260px] mx-auto leading-relaxed">
              Get ready for a world of creativity and beautiful sound
            </p>
          </div>

          {/* Enter button */}
          <button
            onClick={() => setScreen(2)}
            className="bg-[#181818] text-white px-10 py-3 rounded-full text-xs font-medium tracking-wide hover:bg-black active:scale-95 focus:outline-none shadow-md"
            style={{ transition: "transform 0.1s, background-color 0.2s" }}
          >
            Enter
          </button>
        </div>

        {/* ══════════════════════════════════════
            STATE 2 — Product Carousel
        ══════════════════════════════════════ */}
        <div
          className={`state-view flex-1 flex flex-col justify-between py-6 z-10 ${screen === 2 ? "" : "state-hidden"}`}
        >
          {/* Sub-header */}
          <div className="text-center text-[11px] uppercase tracking-[0.2em] font-medium text-gray-400 mt-2">
            Please select your product
          </div>

          {/* Carousel */}
          <div
            ref={sliderRef}
            className="relative flex-1 flex items-center justify-center my-auto overflow-hidden w-full"
            /* Touch events */
            onTouchStart={e => onDragStart(e.touches[0].clientX)}
            onTouchMove={e => onDragMove(e.touches[0].clientX)}
            onTouchEnd={e => onDragEnd(e.changedTouches[0].clientX)}
            /* Mouse drag events */
            onMouseDown={e => onDragStart(e.pageX)}
            onMouseMove={e => { if (dragRef.current.active) onDragMove(e.pageX); }}
            onMouseUp={e => onDragEnd(e.pageX)}
            onMouseLeave={e => { if (dragRef.current.active) onDragEnd(e.pageX); }}
          >
            {/* Prev arrow */}
            <button
              onClick={() => goTo(slide - 1)}
              className="absolute left-4 z-30 w-8 h-8 rounded-full bg-white/80 shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-white focus:outline-none"
              style={{
                opacity: slide === 0 ? 0 : 1,
                pointerEvents: slide === 0 ? "none" : "auto",
                transition: "opacity 0.25s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Slider track */}
            <div
              ref={trackRef}
              className="slider-track w-full h-full items-center"
              style={{ transform: "translateX(0%)" }}
            >
              {SLIDES.map((s, i) => (
                <div key={s.id} className="slider-slide flex flex-col items-center justify-center h-full px-8">
                  <div className="h-[220px] md:h-[300px] flex items-center justify-center relative">
                    {s.svg}
                  </div>
                  <div className="text-center space-y-1 mt-6">
                    <div className="text-[9px] uppercase tracking-[0.25em] font-semibold text-gray-400">{s.label}</div>
                    <div className="text-xs font-medium text-gray-800">{s.desc}</div>
                    <div className="text-[10px] text-gray-400 font-light pt-1">{s.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={() => goTo(slide + 1)}
              className="absolute right-4 z-30 w-8 h-8 rounded-full bg-white/80 shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-white focus:outline-none"
              style={{
                opacity: slide === totalSlides - 1 ? 0 : 1,
                pointerEvents: slide === totalSlides - 1 ? "none" : "auto",
                transition: "opacity 0.25s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center space-x-2 mb-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="focus:outline-none"
                style={{
                  width: i === slide ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === slide ? "#181818" : "#d1d5db",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            ))}
          </div>

          {/* Footer bar */}
          <div className="flex justify-between items-center px-6 pt-2 pb-2">
            <button className="text-[10px] tracking-wider uppercase font-medium text-gray-400 flex items-center space-x-1 focus:outline-none">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <span>View all</span>
            </button>

            <button
              onClick={handleCompose}
              className="text-xs font-medium tracking-wide focus:outline-none px-6 py-2.5 rounded-full"
              style={{
                background: SLIDES[slide].to ? "#181818" : "#d1d5db",
                color: SLIDES[slide].to ? "#fff" : "#9ca3af",
                transition: "background 0.4s, color 0.4s",
                cursor: SLIDES[slide].to ? "pointer" : "default",
              }}
            >
              {SLIDES[slide].to ? "Start composing →" : "Start composing"}
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
