"use client";
import { useState } from "react";

type AccordionItem = { label: string; href: string; external?: boolean };

function Section({ title, links }: { title: string; links: AccordionItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full border-t border-[rgba(252,250,238,0.25)]">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
        onClick={() => setOpen(o => !o)}
      >
        <span className="text-[rgb(252,250,238)] text-sm leading-6 tracking-[0.2px]">{title}</span>
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

export default function MobileFooterAccordion() {
  return (
    <div className="w-full">
      <Section title="Customer Care" links={[
        { label: "Shipping and Delivery", href: "/en/int/faq/shipping-and-delivery" },
        { label: "Returns", href: "/en/int/faq/returns" },
        { label: "Product Support", href: "https://support.bang-olufsen.com/hc/en-us", external: true },
        { label: "Contact us", href: "https://support.bang-olufsen.com/hc/en-us/articles/360042167451", external: true },
        { label: "FAQ", href: "/en/int/faq" },
        { label: "Find store", href: "https://stores.bang-olufsen.com/en/search", external: true },
      ]} />
      <Section title="Our Company" links={[
        { label: "About us", href: "/en/int/story/about-bang-and-olufsen" },
        { label: "Responsibility", href: "/en/int/story/responsibility" },
        { label: "Investors", href: "https://investor.bang-olufsen.com/", external: true },
        { label: "Careers", href: "/en/int/story/careers" },
        { label: "Press", href: "https://bang-olufsen.presscloud.com/digitalshowroom/#/gallery", external: true },
        { label: "Become a sales partner", href: "/en/int/story/become-a-retailer" },
      ]} />
      <Section title="Social Links" links={[
        { label: "Instagram", href: "https://www.instagram.com/bangolufsen/", external: true },
        { label: "Facebook", href: "https://www.facebook.com/bangolufsen", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/bangolufsen/", external: true },
        { label: "X / Twitter", href: "https://twitter.com/BangOlufsen", external: true },
        { label: "YouTube", href: "https://www.youtube.com/user/bangolufsen", external: true },
        { label: "TikTok", href: "https://www.tiktok.com/@bangolufsen", external: true },
        { label: "Pinterest", href: "https://www.pinterest.dk/bangolufsen/", external: true },
      ]} />
      <Section title="Download Our App" links={[
        { label: "Discover Bang & Olufsen app", href: "/en/int/story/apps" },
      ]} />
    </div>
  );
}
