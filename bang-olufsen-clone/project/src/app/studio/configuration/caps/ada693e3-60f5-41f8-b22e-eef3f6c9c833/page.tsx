"use client";
import { useState } from "react";
import Illustration from "./svgs/svg-illustration";
import Icon from "./svgs/svg-icon";

/* ─── Config options ─────────────────────────────────────────────── */
const COLORS = [
  { label: "White",     value: "white",   hex: "#f5f5f5", text: "#171717" },
  { label: "Jet Black", value: "black",   hex: "#1a1a1a", text: "#f5f5f5" },
  { label: "Navy",      value: "navy",    hex: "#1e3a5f", text: "#f5f5f5" },
  { label: "Crimson",   value: "crimson", hex: "#b91c1c", text: "#f5f5f5" },
  { label: "Sage",      value: "sage",    hex: "#6b8f71", text: "#f5f5f5" },
  { label: "Sand",      value: "sand",    hex: "#d4b483", text: "#171717" },
];

const MATERIALS = [
  {
    label: "100% Cotton",
    value: "cotton",
    desc: "Soft, breathable everyday wear",
    texture: null,          // clean fill
    opacity: 1,
    grain: 0,
  },
  {
    label: "French Terry",
    value: "terry",
    desc: "Loopback knit, brushed interior",
    texture: "lines",       // horizontal stitch lines
    opacity: 0.97,
    grain: 0.06,
  },
  {
    label: "Heavyweight Fleece",
    value: "fleece",
    desc: "480gsm, structured & warm",
    texture: "dots",        // dense dot grain
    opacity: 0.95,
    grain: 0.12,
  },
  {
    label: "Recycled Poly",
    value: "recycled",
    desc: "Eco-friendly performance blend",
    texture: "grid",        // subtle grid weave
    opacity: 0.98,
    grain: 0.08,
  },
];

const FITS = [
  { label: "Regular",   value: "regular",   desc: "Classic straight silhouette" },
  { label: "Oversized", value: "oversized", desc: "Dropped shoulder, relaxed body" },
  { label: "Slim",      value: "slim",      desc: "Tailored, close-to-body cut" },
  { label: "Cropped",   value: "cropped",   desc: "Above the hip, modern look" },
];

const PRINTS = [
  { label: "Blank",       value: "blank"   },
  { label: "Centre Logo", value: "logo"    },
  { label: "All-over",    value: "allover" },
  { label: "Left Chest",  value: "chest"   },
];

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
  color: string;
  textColor: string;
  material: typeof MATERIALS[0];
  print: string;
}) {
  const id = `tex-${material.value}`;

  return (
    <svg
      viewBox="0 0 290.094 290.094"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[300px] drop-shadow-lg"
    >
      <defs>
        {/* terry — horizontal stitch lines */}
        {material.texture === "lines" && (
          <pattern id={id} patternUnits="userSpaceOnUse" width="8" height="5">
            <line x1="0" y1="2.5" x2="8" y2="2.5" stroke={textColor} strokeWidth="0.6" strokeOpacity="0.15" />
          </pattern>
        )}
        {/* fleece — dense dot grain */}
        {material.texture === "dots" && (
          <pattern id={id} patternUnits="userSpaceOnUse" width="6" height="6">
            <circle cx="3" cy="3" r="0.8" fill={textColor} fillOpacity="0.18" />
          </pattern>
        )}
        {/* recycled poly — grid weave */}
        {material.texture === "grid" && (
          <pattern id={id} patternUnits="userSpaceOnUse" width="8" height="8">
            <line x1="0" y1="0" x2="8" y2="0" stroke={textColor} strokeWidth="0.5" strokeOpacity="0.12" />
            <line x1="0" y1="0" x2="0" y2="8" stroke={textColor} strokeWidth="0.5" strokeOpacity="0.12" />
          </pattern>
        )}
        <clipPath id="hoodie-clip">
          <path d={HOODIE_PATH} />
        </clipPath>
      </defs>

      {/* base fill */}
      <path d={HOODIE_PATH} fill={color} stroke="#0004" strokeWidth="1" />

      {/* texture overlay clipped to hoodie shape */}
      {material.texture && (
        <rect
          x="0" y="0" width="290.094" height="290.094"
          fill={`url(#${id})`}
          clipPath="url(#hoodie-clip)"
        />
      )}

      {/* all-over print */}
      {print === "allover" && (
        <g clipPath="url(#hoodie-clip)" opacity="0.2">
          {[0,1,2,3,4,5,6].map(row =>
            [0,1,2,3,4].map(col => (
              <circle key={`${row}-${col}`}
                cx={30 + col * 48} cy={60 + row * 36}
                r="9" fill={textColor}
              />
            ))
          )}
        </g>
      )}

      {/* centre logo */}
      {(print === "logo") && (
        <text x="145" y="175" textAnchor="middle"
          fontSize="16" fontWeight="800" letterSpacing="3"
          fill={textColor} opacity="0.6"
          fontFamily="ui-sans-serif,system-ui,sans-serif">
          STUDIO
        </text>
      )}

      {/* chest print */}
      {print === "chest" && (
        <text x="105" y="150" textAnchor="middle"
          fontSize="9" fontWeight="700" letterSpacing="2"
          fill={textColor} opacity="0.6"
          fontFamily="ui-sans-serif,system-ui,sans-serif">
          STUDIO
        </text>
      )}
    </svg>
  );
}

/* ─── Accordion ──────────────────────────────────────────────────── */
function Section({ title, selected, children }: { title: string; selected: string; children: React.ReactNode }) {
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
        <span className={`text-neutral-400 text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && <div className="px-5 pb-4 border-t border-neutral-100">{children}</div>}
    </div>
  );
}

function Pill({ label, desc, active, onClick }: { label: string; desc?: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all mt-2 ${
        active ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:border-neutral-400 text-neutral-800"
      }`}>
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
    let base = 48;
    if (material.value === "fleece")   base += 14;
    if (material.value === "recycled") base += 9;
    if (material.value === "terry")    base += 6;
    if (fit.value === "oversized")     base += 5;
    if (print.value === "allover")     base += 22;
    if (print.value === "logo")        base += 8;
    if (print.value === "chest")       base += 6;
    return base;
  })();

  return (
    <div className="bg-[#f5f5f5] flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-neutral-200 shrink-0">
        <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">Hoodie Demo</span>
        <a href="/" className="flex items-center gap-1.5">
          <Illustration cid="n11" />
          <span className="text-sm font-semibold">Studio</span>
        </a>
        <button className="border border-neutral-300 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-neutral-50 transition-colors">
          <Icon cid="n16" />
          Share
        </button>
      </nav>

      {/* Main */}
      <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-6 flex flex-col md:flex-row gap-6 md:gap-8 md:items-start pb-10">

        {/* Preview */}
        <div className="w-full md:w-1/2 md:sticky md:top-6 flex flex-col items-center gap-3">
          <div className="w-full bg-white rounded-3xl border border-neutral-200 p-8 flex items-center justify-center">
            <HoodieSVG
              color={color.hex}
              textColor={color.text}
              material={material}
              print={print.value}
            />
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {COLORS.map(c => (
              <button key={c.value} onClick={() => setColor(c)} title={c.label}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  color.value === c.value ? "border-neutral-900 scale-110 shadow-md" : "border-transparent hover:scale-105"
                }`}
                style={{ backgroundColor: c.hex }} />
            ))}
          </div>
          <p className="text-xs text-neutral-500">{color.label}</p>

          {/* Material badge on preview */}
          <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-1.5 text-xs text-neutral-600">
            <span className={`w-2 h-2 rounded-full ${
              material.value === "cotton"   ? "bg-neutral-300" :
              material.value === "terry"    ? "bg-amber-300"   :
              material.value === "fleece"   ? "bg-blue-300"    : "bg-green-300"
            }`} />
            {material.label}
          </div>
        </div>

        {/* Config */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <Section title="Colour" selected={color.label}>
            <div className="flex flex-wrap gap-2 pt-3">
              {COLORS.map(c => (
                <button key={c.value} onClick={() => setColor(c)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm transition-all ${
                    color.value === c.value
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}>
                  <span className="w-3.5 h-3.5 rounded-full border border-neutral-300 shrink-0" style={{ backgroundColor: c.hex }} />
                  {c.label}
                </button>
              ))}
            </div>
          </Section>

          <Section title="Material" selected={material.label}>
            <div className="pt-1">
              {MATERIALS.map(m => (
                <Pill key={m.value} label={m.label} desc={m.desc}
                  active={material.value === m.value} onClick={() => setMaterial(m)} />
              ))}
            </div>
          </Section>

          <Section title="Fit" selected={`${fit.label} — ${fit.desc}`}>
            <div className="pt-1">
              {FITS.map(f => (
                <Pill key={f.value} label={f.label} desc={f.desc}
                  active={fit.value === f.value} onClick={() => setFit(f)} />
              ))}
            </div>
          </Section>

          <Section title="Print" selected={print.label}>
            <div className="grid grid-cols-2 gap-2 pt-3">
              {PRINTS.map(p => (
                <button key={p.value} onClick={() => setPrint(p)}
                  className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    print.value === p.value
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 hover:border-neutral-400 text-neutral-800"
                  }`}>
                  {p.label}
                </button>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <div className="bg-white rounded-2xl border border-neutral-200 px-5 py-4 flex items-center justify-between gap-4">
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
