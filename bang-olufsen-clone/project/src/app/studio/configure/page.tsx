"use client";
import { useState, useRef } from "react";

/* ─── Data ───────────────────────────────────────────────────────── */
const MATERIALS = [
  { id: "cotton",   label: "100% Cotton",        desc: "Soft, breathable everyday wear",      texture: null,    grain: 0    },
  { id: "terry",    label: "French Terry",        desc: "Loopback knit, brushed interior",     texture: "lines", grain: 0.06 },
  { id: "fleece",   label: "Heavyweight Fleece",  desc: "480gsm, structured & warm",           texture: "dots",  grain: 0.12 },
  { id: "recycled", label: "Recycled Poly",       desc: "Eco-friendly performance blend",      texture: "grid",  grain: 0.08 },
];

const COLORS = [
  { id: "natural",   label: "Natural",          hex: "#e8e8e8", text: "#171717" },
  { id: "black",     label: "Black Anthracite",  hex: "#2c2c2c", text: "#f5f5f5" },
  { id: "gold",      label: "Gold Tone",         hex: "#d4af37", text: "#171717" },
  { id: "bronze",    label: "Bronze Tone",       hex: "#cd7f32", text: "#f5f5f5" },
  { id: "chestnut",  label: "Chestnut Brown",    hex: "#5c4033", text: "#f5f5f5" },
  { id: "bitter",    label: "Bitter Orange",     hex: "#d95030", text: "#f5f5f5" },
  { id: "zesty",     label: "Zesty Orange",      hex: "#ff9900", text: "#171717" },
  { id: "radiant",   label: "Radiant Red",       hex: "#cc0000", text: "#f5f5f5" },
  { id: "lime",      label: "Lime Green",        hex: "#32cd32", text: "#171717" },
  { id: "navy",      label: "Navy Blue",         hex: "#000080", text: "#f5f5f5" },
];

const FITS = [
  { id: "regular",   label: "Regular",   desc: "Classic straight silhouette"    },
  { id: "oversized", label: "Oversized", desc: "Dropped shoulder, relaxed body" },
  { id: "slim",      label: "Slim",      desc: "Tailored, close-to-body cut"    },
  { id: "cropped",   label: "Cropped",   desc: "Above the hip, modern look"     },
];

const PRINTS = [
  { id: "blank",   label: "Blank"        },
  { id: "logo",    label: "Centre Logo"  },
  { id: "allover", label: "All-over"     },
  { id: "chest",   label: "Left Chest"   },
];

const CATEGORIES = ["MATERIAL", "COLOR", "FIT", "PRINT"] as const;
type Cat = typeof CATEGORIES[number];

const OPTIONS: Record<Cat, { id: string; label: string; desc?: string }[]> = {
  MATERIAL: MATERIALS.map(m => ({ id: m.id, label: m.label, desc: m.desc })),
  COLOR:    COLORS.map(c    => ({ id: c.id, label: c.label })),
  FIT:      FITS.map(f      => ({ id: f.id, label: f.label, desc: f.desc })),
  PRINT:    PRINTS.map(p    => ({ id: p.id, label: p.label })),
};

/* ─── Hoodie SVG ─────────────────────────────────────────────────── */
const HOODIE_PATH =
  "M287.804,168.95L216.34,69.576c-4.957-6.894-12.929-10.98-21.42-10.98h-12.011V42.042c0-6.721-5.449-12.17-12.17-12.17" +
  "h-18.191v80.345c0,4.143-3.357,7.5-7.5,7.5c-4.143,0-7.5-3.357-7.5-7.5V29.872h-18.192c-6.721,0-12.17,5.449-12.17,12.17v16.554" +
  "H95.175c-8.491,0-16.463,4.086-21.42,10.98L2.29,168.95c-3.708,5.157-2.827,12.298,2.023,16.399l13.14,11.109" +
  "c4.83,4.083,11.983,3.787,16.458-0.683l33.156-33.113c-6.086,8.516-9.519,18.159-9.519,28.376c0,13.684,6.161,26.967,16.604,38.02" +
  "c-2.824,2.229-4.642,5.674-4.642,9.551v9.441c0,6.721,5.449,12.17,12.17,12.17h126.735c6.721,0,12.17-5.449,12.17-12.17v-9.441" +
  "c0-3.877-1.819-7.322-4.642-9.551c10.443-11.053,16.604-24.336,16.604-38.02c0-10.217-3.433-19.861-9.519-28.376l33.155,33.113" +
  "c4.475,4.469,11.628,4.766,16.458,0.683l13.14-11.109C290.632,181.248,291.513,174.107,287.804,168.95z";

function HoodieSVG({
  color, textColor, material, print,
}: {
  color: string; textColor: string;
  material: typeof MATERIALS[0]; print: string;
}) {
  const id = `tex-${material.id}`;
  return (
    <svg viewBox="0 0 290.094 290.094" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[300px] drop-shadow-2xl" style={{ transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
      <defs>
        {material.texture === "lines" && (
          <pattern id={id} patternUnits="userSpaceOnUse" width="8" height="5">
            <line x1="0" y1="2.5" x2="8" y2="2.5" stroke={textColor} strokeWidth="0.6" strokeOpacity="0.15" />
          </pattern>
        )}
        {material.texture === "dots" && (
          <pattern id={id} patternUnits="userSpaceOnUse" width="6" height="6">
            <circle cx="3" cy="3" r="0.8" fill={textColor} fillOpacity="0.18" />
          </pattern>
        )}
        {material.texture === "grid" && (
          <pattern id={id} patternUnits="userSpaceOnUse" width="8" height="8">
            <line x1="0" y1="0" x2="8" y2="0" stroke={textColor} strokeWidth="0.5" strokeOpacity="0.12" />
            <line x1="0" y1="0" x2="0" y2="8" stroke={textColor} strokeWidth="0.5" strokeOpacity="0.12" />
          </pattern>
        )}
        <clipPath id="hoodie-clip"><path d={HOODIE_PATH} /></clipPath>
      </defs>

      <path d={HOODIE_PATH} fill={color} stroke="rgba(0,0,0,0.25)" strokeWidth="1" />

      {material.texture && (
        <rect x="0" y="0" width="290.094" height="290.094"
          fill={`url(#${id})`} clipPath="url(#hoodie-clip)" />
      )}

      {print === "allover" && (
        <g clipPath="url(#hoodie-clip)" opacity="0.2">
          {[0,1,2,3,4,5,6].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={30 + col * 48} cy={60 + row * 36} r="9" fill={textColor} />
          )))}
        </g>
      )}
      {print === "logo" && (
        <text x="145" y="175" textAnchor="middle" fontSize="16" fontWeight="800"
          letterSpacing="3" fill={textColor} opacity="0.6"
          fontFamily="ui-sans-serif,system-ui,sans-serif">STUDIO</text>
      )}
      {print === "chest" && (
        <text x="105" y="150" textAnchor="middle" fontSize="9" fontWeight="700"
          letterSpacing="2" fill={textColor} opacity="0.6"
          fontFamily="ui-sans-serif,system-ui,sans-serif">STUDIO</text>
      )}
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function ConfigurePage() {
  const [activeCategory, setActiveCategory] = useState<Cat>("COLOR");
  const [selections, setSelections] = useState({
    MATERIAL: MATERIALS[0],
    COLOR:    COLORS[0],
    FIT:      FITS[0],
    PRINT:    PRINTS[0],
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  function select(cat: Cat, id: string) {
    if (cat === "MATERIAL") setSelections(s => ({ ...s, MATERIAL: MATERIALS.find(x => x.id === id)! }));
    if (cat === "COLOR")    setSelections(s => ({ ...s, COLOR:    COLORS.find(x    => x.id === id)! }));
    if (cat === "FIT")      setSelections(s => ({ ...s, FIT:      FITS.find(x      => x.id === id)! }));
    if (cat === "PRINT")    setSelections(s => ({ ...s, PRINT:    PRINTS.find(x    => x.id === id)! }));
  }

  function activeId(cat: Cat) {
    if (cat === "MATERIAL") return selections.MATERIAL.id;
    if (cat === "COLOR")    return selections.COLOR.id;
    if (cat === "FIT")      return selections.FIT.id;
    return selections.PRINT.id;
  }

  const price = (() => {
    let base = 48;
    if (selections.MATERIAL.id === "fleece")   base += 14;
    if (selections.MATERIAL.id === "recycled") base += 9;
    if (selections.MATERIAL.id === "terry")    base += 6;
    if (selections.FIT.id === "oversized")     base += 5;
    if (selections.PRINT.id === "allover")     base += 22;
    if (selections.PRINT.id === "logo")        base += 8;
    if (selections.PRINT.id === "chest")       base += 6;
    return base;
  })();

  return (
    <>
      <style>{`
        body {
          overscroll-behavior: none;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .scroll-mask {
          -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent);
          mask-image: linear-gradient(to bottom, black 85%, transparent);
        }
        .option-active-indicator {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 100%;
          background-color: black;
        }
        .edit-pin {
          animation: epulse 2s infinite;
        }
        @keyframes epulse {
          0%   { box-shadow: 0 0 0 0 rgba(0,0,0,0.1); }
          70%  { box-shadow: 0 0 0 10px rgba(0,0,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
        }
      `}</style>

      <div
        className="h-screen w-screen overflow-hidden flex flex-col antialiased text-[#111]"
        style={{
          fontFamily: "'Inter', sans-serif",
          backgroundColor: "#fafafa",
          backgroundImage: "linear-gradient(to right, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "25vw 100%",
        }}
      >
        {/* Header */}
        <header className="flex justify-between items-center px-4 md:px-6 py-4 z-30 relative bg-transparent shrink-0">
          <a href="/studio/configuration/caps/ada693e3-60f5-41f8-b22e-eef3f6c9c833"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 focus:outline-none">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </a>

          <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
            <div className="text-2xl md:text-3xl font-light tracking-tighter flex items-center">
              B<span className="text-lg md:text-xl mx-0.5">&amp;</span>O
            </div>
            <div className="text-[8px] md:text-[10px] tracking-widest mt-0.5 uppercase font-medium">Est. 1925</div>
          </div>

          <button className="w-10 h-10 flex items-center justify-center focus:outline-none">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </header>

        {/* Main */}
        <main className="flex-1 flex flex-row relative z-10 overflow-hidden w-full">

          {/* Left: Visualizer */}
          <div className="w-[55%] md:w-3/5 h-full flex flex-col justify-center relative pl-2 md:pl-8 lg:pl-16">

            {/* Floating labels (desktop) */}
            <div className="hidden lg:flex flex-col absolute left-8 top-1/2 -translate-y-1/2 space-y-10 text-[10px] tracking-widest uppercase font-medium text-gray-400">
              {CATEGORIES.map(cat => (
                <span key={cat}
                  className={`cursor-pointer transition-colors ${activeCategory === cat ? "text-black" : "hover:text-gray-600"}`}
                  onClick={() => { setActiveCategory(cat); scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  {cat}
                </span>
              ))}
            </div>

            {/* Hoodie preview */}
            <div className="relative w-full max-w-[280px] md:max-w-[360px] aspect-square flex items-center justify-center mx-auto">
              <HoodieSVG
                color={selections.COLOR.hex}
                textColor={selections.COLOR.text}
                material={selections.MATERIAL}
                print={selections.PRINT.id}
              />

              {/* Edit pins */}
              <div className="absolute top-[20%] left-[8%] bg-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shadow-lg edit-pin cursor-pointer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <div className="absolute bottom-[20%] right-[12%] bg-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shadow-lg edit-pin cursor-pointer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="w-[45%] md:w-2/5 md:max-w-[400px] h-full flex flex-col relative z-20 pt-4 md:pt-12 ml-auto">

            {/* Category tabs */}
            <div className="flex justify-end space-x-3 md:space-x-6 pr-4 md:pr-8 mb-6 shrink-0 flex-nowrap whitespace-nowrap overflow-x-visible">
              {CATEGORIES.map(cat => {
                const isActive = cat === activeCategory;
                return (
                  <button key={cat}
                    onClick={() => { setActiveCategory(cat); scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`uppercase tracking-[0.15em] text-[10px] md:text-xs font-medium pb-2 relative focus:outline-none transition-colors ${isActive ? "text-black" : "text-gray-400"}`}>
                    {cat}
                    {isActive && <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black" />}
                  </button>
                );
              })}
            </div>

            {/* Scrollable options */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto hide-scrollbar scroll-mask">
              <ul className="flex flex-col space-y-6 md:space-y-8 text-right pr-4 md:pr-8 relative w-full text-[15px] md:text-[18px] font-light pt-2 pb-24">
                {OPTIONS[activeCategory].map(opt => {
                  const isActive = opt.id === activeId(activeCategory);
                  return (
                    <li key={opt.id}
                      onClick={() => select(activeCategory, opt.id)}
                      className="relative cursor-pointer group pr-4 md:pr-6">
                      <span className={`transition-colors duration-300 block pr-2 ${isActive ? "font-medium text-[#111]" : "text-[#999] group-hover:text-black"}`}>
                        {opt.label}
                      </span>
                      {activeCategory === "COLOR" && isActive && (
                        <div className="text-[9px] md:text-[10px] tracking-wider uppercase mt-1 text-gray-500 pr-2">Signature</div>
                      )}
                      {opt.desc && isActive && activeCategory !== "COLOR" && (
                        <div className="text-[9px] md:text-[10px] tracking-wider mt-1 text-gray-400 pr-2">{opt.desc}</div>
                      )}
                      {isActive && <div className="option-active-indicator" />}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white/90 backdrop-blur-md border-t border-gray-100 px-4 md:px-6 py-4 flex justify-between items-center z-30 shrink-0">
          {/* Desktop toggles */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-500">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-4 bg-black rounded-full flex items-center px-1 transition-colors">
                <div className="w-3 h-3 bg-white rounded-full transform translate-x-3" />
              </div>
              <span>Rotation</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-4 bg-gray-200 rounded-full flex items-center px-1 transition-colors">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <span>Zoom</span>
            </div>
          </div>

          {/* Mobile: More options */}
          <div className="md:hidden text-xs font-medium text-gray-800 flex items-center space-x-2 cursor-pointer">
            <div className="grid grid-cols-2 gap-0.5 opacity-60">
              <div className="w-1 h-1 bg-black rounded-sm" /><div className="w-1 h-1 bg-black rounded-sm" />
              <div className="w-1 h-1 bg-black rounded-sm" /><div className="w-1 h-1 bg-black rounded-sm" />
            </div>
            <span>More options</span>
          </div>

          <div className="flex items-center space-x-3 md:space-x-6 ml-auto">
            <div className="flex items-center space-x-1.5 md:space-x-2 text-[10px] md:text-sm font-medium">
              <span>Est. total ${price} USD</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 md:w-[18px] md:h-[18px]">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <button className="bg-[#1a1a1a] text-white px-5 py-2.5 md:px-8 md:py-3 rounded-full font-medium text-xs md:text-sm hover:bg-black transition-colors focus:outline-none whitespace-nowrap">
              Done
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
