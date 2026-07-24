"use client";
import { useState } from "react";

type AccordionItem = { label: string; href: string; external?: boolean };

function Section({ title, links, open, onToggle }: {
  title: string; links: AccordionItem[]; open: boolean; onToggle: () => void;
}) {
  return (
    <div className="w-full border-t border-[rgba(252,250,238,0.25)]">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
        onClick={onToggle}
      >
        <span className="flex items-center gap-1.5 text-[rgb(252,250,238)] text-sm leading-6 tracking-[0.2px]">
          {title}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${open ? "rotate-90" : ""}`}>
            <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="pb-4 space-y-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.external ? "_blank" : "_parent"}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-[rgb(252,250,238)] text-xs leading-5 tracking-[0.1px] opacity-80 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const SECTIONS = [
  { title: "Customer Care", links: [
    { label: "Shipping and Delivery", href: "/en/int/faq/shipping-and-delivery" },
    { label: "Returns", href: "/en/int/faq/returns" },
    { label: "Product Support", href: "https://support.bang-olufsen.com/hc/en-us", external: true },
    { label: "Contact us", href: "https://support.bang-olufsen.com/hc/en-us/articles/360042167451", external: true },
    { label: "FAQ", href: "/en/int/faq" },
    { label: "Find store", href: "https://stores.bang-olufsen.com/en/search", external: true },
  ]},
  { title: "Our Company", links: [
    { label: "About us", href: "/en/int/story/about-bang-and-olufsen" },
    { label: "Responsibility", href: "/en/int/story/responsibility" },
    { label: "Investors", href: "https://investor.bang-olufsen.com/", external: true },
    { label: "Careers", href: "/en/int/story/careers" },
    { label: "Press", href: "https://bang-olufsen.presscloud.com/digitalshowroom/#/gallery", external: true },
    { label: "Become a sales partner", href: "/en/int/story/become-a-retailer" },
  ]},
  { title: "Social Links", links: [
    { label: "Instagram", href: "https://www.instagram.com/bangolufsen/", external: true },
    { label: "Facebook", href: "https://www.facebook.com/bangolufsen", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/bangolufsen/", external: true },
    { label: "X / Twitter", href: "https://twitter.com/BangOlufsen", external: true },
    { label: "YouTube", href: "https://www.youtube.com/user/bangolufsen", external: true },
    { label: "TikTok", href: "https://www.tiktok.com/@bangolufsen", external: true },
    { label: "Pinterest", href: "https://www.pinterest.dk/bangolufsen/", external: true },
  ]},
  { title: "Download Our App", links: [
    { label: "Discover Bang & Olufsen app", href: "/en/int/story/apps" },
  ]},
];

export default function MobileFooterAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="w-full">
      {SECTIONS.map((s, i) => (
        <Section
          key={s.title}
          title={s.title}
          links={s.links}
          open={activeIndex === i}
          onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
