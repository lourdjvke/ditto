"use client";
import { useState } from "react";
import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  ariacontrols: string;
  id: string;
  description: string;
};
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  const [open, setOpen] = useState(false);
  return (
    <div data-cid={cids[0]} className="hidden max-lg:block w-full border-b border-[rgb(229,229,229)]">
      <button
        data-cid={cids[2]}
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
        aria-controls={d.ariacontrols}
        aria-expanded={open}
        id={d.id}
        type="button"
        onClick={() => setOpen(o => !o)}
      >
        <p data-cid={cids[3]} className={cn("text-[rgb(252,250,238)] text-sm leading-6 tracking-[0.2px]", styles.className3)}>
          {d.description}
        </p>
        <svg
          className={`w-4 h-4 shrink-0 text-[rgb(252,250,238)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 16 16" fill="none"
        >
          <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div
        data-cid={cids[4]}
        id={d.ariacontrols}
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-4" : "max-h-0"}`}
      >
        <div className={cn("", styles.className)} />
      </div>
    </div>
  );
}
