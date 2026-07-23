"use client";
import { useState } from "react";
import Illustration from "./svgs/svg-illustration";
import Icon from "./svgs/svg-icon";

/* ─── Config options ─────────────────────────────────────────────── */
const COLORS = [
  { label: "White",      value: "white",   hex: "#f5f5f5", text: "#171717" },
  { label: "Jet Black",  value: "black",   hex: "#171717", text: "#f5f5f5" },
  { label: "Navy",       value: "navy",    hex: "#1e3a5f", text: "#f5f5f5" },
  { label: "Crimson",    value: "crimson", hex: "#b91c1c", text: "#f5f5f5" },
  { label: "Sage",       value: "sage",    hex: "#6b8f71", text: "#f5f5f5" },
  { label: "Sand",       value: "sand",    hex: "#d4b483", text: "#171717" },
];

const MATERIALS = [
  { label: "100% Cotton",     value: "cotton",   desc: "Soft, breathable everyday wear" },
  { label: "French Terry",    value: "terry",    desc: "Loopback knit, brushed interior" },
  { label: "Heavyweight Fleece", value: "fleece", desc: "480gsm, structured & warm" },
  { label: "Recycled Poly",   value: "recycled", desc: "Eco-friendly performance blend" },
];

const FITS = [
  { label: "Regular",    value: "regular",   desc: "Classic straight silhouette" },
  { label: "Oversized",  value: "oversized", desc: "Dropped shoulder, relaxed body" },
  { label: "Slim",       value: "slim",      desc: "Tailored, close-to-body cut" },
  { label: "Cropped",    value: "cropped",   desc: "Above the hip, modern look" },
];

const PRINTS = [
  { label: "Blank",      value: "blank"   },
  { label: "Centre Logo", value: "logo"   },
  { label: "All-over",   value: "allover" },
  { label: "Left Chest", value: "chest"   },
];

/* ─── T-shirt SVG ────────────────────────────────────────────────── */
function TShirtSVG({
  color, text, print, fit,
}: { color: string; text: string; print: string; fit: string }) {
  const isOversized = fit === "oversized";
  const isCropped   = fit === "cropped";
  const isSlim      = fit === "slim";

  /* body shape tweaks per fit */
  const bodyW  = isSlim ? 160 : isOversized ? 210 : 185;
  const bodyH  = isCropped ? 170 : isOversized ? 230 : 210;
  const bodyX  = (300 - bodyW) / 2;
  const shoulderDrop = isOversized ? 18 : 8;
  const neckW  = isSlim ? 52 : 64;

  /* sleeve shape */
  const sleeveAngle = isOversized ? 38 : 22;
  const sleeveLen   = isOversized ? 95 : 75;

  /* left sleeve path */
  const lsx = bodyX;
  const lsy = 72 + shoulderDrop;
  const lsAngleRad = (sleeveAngle * Math.PI) / 180;
  const lsex = lsx - sleeveLen * Math.cos(lsAngleRad);
  const lsey = lsy + sleeveLen * Math.sin(lsAngleRad);
  const lsBottomX = lsex + 30 * Math.sin(lsAngleRad);
  const lsBottomY = lsey - 30 * Math.cos(lsAngleRad);
  const lsBodyBottomX = lsx + 30;
  const lsBodyBottomY = lsy + 22;

  /* right sleeve (mirror) */
  const rsx = bodyX + bodyW;
  const rsy = lsy;
  const rsex = rsx + sleeveLen * Math.cos(lsAngleRad);
  const rsey = rsy + sleeveLen * Math.sin(lsAngleRad);
  const rsBottomX = rsex - 30 * Math.sin(lsAngleRad);
  const rsBottomY = rsey - 30 * Math.cos(lsAngleRad);
  const rsBodyBottomX = rsx - 30;
  const rsBodyBottomY = rsy + 22;

  /* neck */
  const nx = 150 - neckW / 2;
  const neckPath = `M ${nx} 72 Q 150 ${72 + 28} ${nx + neckW} 72`;

  /* body rect bottom */
  const bodyBottom = 72 + shoulderDrop + bodyH;

  /* print decoration */
  const showLogo    = print === "logo"    || print === "chest";
  const showAllover = print === "allover";
  const logoX       = print === "chest" ? bodyX + 28 : 150;
  const logoY       = 72 + shoulderDrop + 60;
  const logoAlign   = print === "chest" ? "left" : "middle";

  return (
    <svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[340px] drop-shadow-xl">
      {/* ── left sleeve ── */}
      <polygon
        points={`${lsx},${lsy} ${lsex},${lsey} ${lsBottomX},${lsBottomY} ${lsBodyBottomX},${lsBodyBottomY}`}
        fill={color}
        stroke="#0003"
        strokeWidth="1.2"
      />
      {/* ── right sleeve ── */}
      <polygon
        points={`${rsx},${rsy} ${rsex},${rsey} ${rsBottomX},${rsBottomY} ${rsBodyBottomX},${rsBodyBottomY}`}
        fill={color}
        stroke="#0003"
        strokeWidth="1.2"
      />
      {/* ── body ── */}
      <rect
        x={bodyX} y={72 + shoulderDrop}
        width={bodyW} height={bodyH}
        rx="6" fill={color}
        stroke="#0003" strokeWidth="1.2"
      />
      {/* ── neck cutout ── */}
      <path d={neckPath} fill="#fff" stroke="#0003" strokeWidth="1.2" />
      {/* ── sleeve seam lines ── */}
      <line x1={lsBodyBottomX} y1={lsBodyBottomY} x2={lsx} y2={lsy + 22} stroke="#0002" strokeWidth="1" />
      <line x1={rsBodyBottomX} y1={rsBodyBottomY} x2={rsx} y2={rsy + 22} stroke="#0002" strokeWidth="1" />
      {/* ── hem & shoulder stitch lines ── */}
      <line x1={bodyX + 6} y1={bodyBottom - 4} x2={bodyX + bodyW - 6} y2={bodyBottom - 4} stroke="#0002" strokeWidth="0.8" strokeDasharray="3 3" />

      {/* ── all-over pattern ── */}
      {showAllover && (
        <g opacity="0.18">
          {[0,1,2,3,4,5].map(row =>
            [0,1,2,3].map(col => (
              <circle key={`${row}-${col}`}
                cx={bodyX + 24 + col * 36}
                cy={72 + shoulderDrop + 32 + row * 32}
                r="7" fill={text}
              />
            ))
          )}
        </g>
      )}

      {/* ── logo / chest print ── */}
      {showLogo && (
        <text
          x={logoX} y={logoY}
          textAnchor={logoAlign}
          fontSize={print === "chest" ? 9 : 13}
          fontWeight="700"
          letterSpacing="2"
          fill={text}
          opacity="0.75"
          fontFamily="ui-sans-serif,system-ui,sans-serif"
        >
          STUDIO
        </text>
      )}

      {/* ── size label ── */}
      <text x="150" y="355" textAnchor="middle" fontSize="10" fill="#999"
        fontFamily="ui-sans-serif,system-ui,sans-serif">
        {fit.toUpperCase()} FIT
      </text>
    </svg>
  );
}

/* ─── Accordion section ─────────────────────────────────────────── */
function Section({
  title, selected, children,
}: { title: string; selected: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white border border-neutral-200 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-neutral-50 transition-colors"
      >
        <div>
          <p className="text-sm font-semibold text-neutral-900">{title}</p>
          <p className="text-xs text-neutral-500 mt-0.5">{selected}</p>
        </div>
        <span className={`text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      {open && <div className="px-5 pb-4 border-t border-neutral-100">{children}</div>}
    </div>
  );
}

/* ─── Swatch button ──────────────────────────────────────────────── */
function Swatch({ color, active, onClick }: { color: typeof COLORS[0]; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={color.label}
      className={`w-8 h-8 rounded-full border-2 transition-all ${active ? "border-neutral-900 scale-110 shadow-md" : "border-transparent hover:scale-105"}`}
      style={{ backgroundColor: color.hex }}
    />
  );
}

/* ─── Option pill ────────────────────────────────────────────────── */
function Pill({ label, desc, active, onClick }: { label: string; desc?: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all mt-2 ${
        active
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-neutral-200 hover:border-neutral-400 text-neutral-800"
      }`}
    >
      <span className="font-medium">{label}</span>
      {desc && <span className={`block text-xs mt-0.5 ${active ? "text-neutral-300" : "text-neutral-400"}`}>{desc}</span>}
    </button>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function Page() {
  const [color,    setColor]    = useState(COLORS[0]);
  const [material, setMaterial] = useState(MATERIALS[0]);
  const [fit,      setFit]      = useState(FITS[0]);
  const [print,    setPrint]    = useState(PRINTS[0]);

  const price = (() => {
    let base = 38;
    if (material.value === "fleece")   base += 14;
    if (material.value === "recycled") base += 9;
    if (material.value === "terry")    base += 6;
    if (fit.value      === "oversized")base += 5;
    if (print.value    === "allover")  base += 22;
    if (print.value    === "logo")     base += 8;
    if (print.value    === "chest")    base += 6;
    return base;
  })();

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">

      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-neutral-200">
        <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">T-Shirt Demo</span>
        <a href="/" className="flex items-center gap-1.5">
          <Illustration cid="n11" />
          <span className="text-sm font-semibold">Studio</span>
        </a>
        <button className="border border-neutral-300 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-neutral-50 transition-colors">
          <Icon cid="n16" />
          Share
        </button>
      </nav>

      {/* ── Main layout: stacked on mobile, side-by-side on md+ ── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row gap-6 md:gap-8 md:items-start">

        {/* ── Preview panel ── */}
        <div className="w-full md:w-1/2 md:sticky md:top-6 flex flex-col items-center gap-4">
          <div className="w-full bg-white rounded-3xl border border-neutral-200 p-8 flex items-center justify-center min-h-[300px] sm:min-h-[360px]">
            <TShirtSVG
              color={color.hex}
              text={color.text}
              print={print.value}
              fit={fit.value}
            />
          </div>

          {/* Color swatches beneath preview */}
          <div className="flex flex-wrap gap-2.5 justify-center">
            {COLORS.map(c => (
              <Swatch key={c.value} color={c} active={color.value === c.value} onClick={() => setColor(c)} />
            ))}
          </div>
          <p className="text-xs text-neutral-500">{color.label}</p>
        </div>

        {/* ── Config panel ── */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">

          <Section title="Colour" selected={color.label}>
            <div className="flex flex-wrap gap-3 pt-3">
              {COLORS.map(c => (
                <button
                  key={c.value}
                  onClick={() => setColor(c)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm transition-all ${
                    color.value === c.value
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full border border-neutral-300 shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.label}
                </button>
              ))}
            </div>
          </Section>

          <Section title="Material" selected={material.label}>
            <div className="pt-1">
              {MATERIALS.map(m => (
                <Pill key={m.value} label={m.label} desc={m.desc} active={material.value === m.value} onClick={() => setMaterial(m)} />
              ))}
            </div>
          </Section>

          <Section title="Fit" selected={`${fit.label} — ${fit.desc}`}>
            <div className="pt-1">
              {FITS.map(f => (
                <Pill key={f.value} label={f.label} desc={f.desc} active={fit.value === f.value} onClick={() => setFit(f)} />
              ))}
            </div>
          </Section>

          <Section title="Print" selected={print.label}>
            <div className="grid grid-cols-2 gap-2 pt-3">
              {PRINTS.map(p => (
                <button
                  key={p.value}
                  onClick={() => setPrint(p)}
                  className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    print.value === p.value
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 hover:border-neutral-400 text-neutral-800"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </Section>

          {/* ── CTA ── */}
          <div className="mt-1 bg-white rounded-2xl border border-neutral-200 px-5 py-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xl font-semibold">${price}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{material.label} · {fit.label} · {print.label}</p>
            </div>
            <button className="bg-neutral-900 text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-neutral-700 transition-colors whitespace-nowrap">
              Add to Cart
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
