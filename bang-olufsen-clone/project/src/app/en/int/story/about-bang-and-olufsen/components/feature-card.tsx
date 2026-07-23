"use client";
import { useState } from "react";
import type { FeatureCardStyles } from "../_styles";
import { cn } from "@/lib/utils";

export type FeatureCardData = {
  ariacontrols: string;
  id: string;
  title: string;
  ariacontrols2: string;
  id2: string;
  title2: string;
};

const answers: Record<string, string> = {
  "Where is Bang & Olufsen from?": "Bang & Olufsen is from Struer, a small town in Western Denmark, where it was founded in 1925.",
  "When was Bang & Olufsen founded?": "Bang & Olufsen was founded on 17 November 1925 by Peter Bang and Svend Olufsen.",
  "Is Bang & Olufsen a luxury brand? ": "Yes. Bang & Olufsen is a premium Danish luxury audio brand known for its iconic design and exceptional sound quality.",
  "What is Bang & Olufsen known for?": "Bang & Olufsen is known for high-end speakers, headphones, televisions, and the seamless fusion of craftsmanship, design, and acoustic excellence.",
  "Are Bang & Olufsen products worth it?": "For those who value superior sound, lasting build quality, and timeless design, Bang & Olufsen products represent a worthwhile long-term investment.",
  "What makes Bang & Olufsen sound special?": "A century of acoustic research, proprietary driver technology, and meticulous tuning by world-class engineers make every B&O product sound truly distinct.",
  "Who owns Bang & Olufsen?": "Bang & Olufsen A/S is a publicly listed company on Nasdaq Copenhagen, with a diverse shareholder base."
};

export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  const [open, setOpen] = useState(false);
  const answer = answers[d.title2] ?? answers[d.title] ?? "";

  return (
    <div data-cid={cids[0]} className={cn("border-t border-solid border-t-surface block", styles.className)} itemProp="mainEntity">
      <button
        data-cid={cids[4]}
        className={cn("w-full flex py-5 text-left cursor-pointer items-center", styles.className2)}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        type="button"
      >
        <h3 data-cid={cids[5]} className="block flex-1 text-border text-sm leading-6 tracking-[1.7px] uppercase max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px]" itemProp="name">
          {d.title2}
        </h3>
        <span className={`w-5 h-5 border border-border rounded-full bg-border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M4.5 1v7M1 4.5h7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="pb-5 text-sm leading-6 text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}
