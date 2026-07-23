"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const imgFilter = scrolled ? "brightness(0)" : "none";
  const textColor = scrolled ? "text-[rgb(25,24,23)]" : "text-white";
  const lineColor = scrolled ? "bg-[rgb(25,24,23)]" : "bg-white";

  return (
    <>
      {/* Top bar */}
      <div
        className={`fixed top-0 inset-x-0 z-[90] transition-colors duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
        style={!scrolled ? { backgroundImage: "linear-gradient(rgba(25,24,23,0.35) 0%,rgba(25,24,23,0) 100%)" } : {}}
      >
        <div className="h-[5.3125rem] flex relative px-4 items-center lg:h-[7.25rem] lg:px-9">
          {/* Hamburger */}
          <button
            className="flex items-center gap-2 cursor-pointer"
            aria-label="Open menu"
            type="button"
            onClick={() => setNavOpen(true)}
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`w-5 h-[1.5px] block transition-colors duration-300 ${lineColor}`} />
              <span className={`w-5 h-[1.5px] block transition-colors duration-300 ${lineColor}`} />
            </span>
            <span className={`text-xs leading-5 tracking-[0.1px] transition-colors duration-300 ${textColor}`}>Menu</span>
          </button>

          {/* Logo centred */}
          <a
            href="/"
            aria-label="Bang & Olufsen"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <img
              src="/assets/cloned/svg/82d176b7faa2.svg"
              alt="Bang & Olufsen"
              className="h-[0.625rem] w-auto lg:h-[1.0625rem] transition-[filter] duration-300"
              style={{ filter: imgFilter }}
            />
            <img
              src="/assets/cloned/svg/a19aaf71a505.svg"
              alt="Est 1925"
              className="h-4 w-auto mt-1 hidden lg:block transition-[filter] duration-300"
              style={{ filter: imgFilter }}
            />
          </a>

          {/* Right icons */}
          <div className="ml-auto flex items-center gap-2">
            <a href="https://stores.bang-olufsen.com/en/search?country=INT" className="w-8 h-8 hidden lg:flex items-center justify-center">
              <img src="/assets/cloned/svg/cf54b34802e9.svg" alt="Store Locator" className="w-6 h-6 transition-[filter] duration-300" style={{ filter: imgFilter }} />
            </a>
            <button className="w-8 h-8 hidden lg:flex items-center justify-center" aria-label="Account">
              <img src="/assets/cloned/svg/a865def8fb17.svg" alt="Account" className="w-6 h-6 transition-[filter] duration-300" style={{ filter: imgFilter }} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center" aria-label="Cart">
              <img src="/assets/cloned/svg/9155dccf36cd.svg" alt="Cart" className="w-8 h-8 transition-[filter] duration-300" style={{ filter: imgFilter }} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 z-[199] bg-black/40 transition-opacity duration-300 ${navOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setNavOpen(false)}
      />

      {/* Slide-out nav */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-full max-w-[min(100vw,400px)] z-[200] bg-white flex flex-col transition-transform duration-300 ease-in-out ${navOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close */}
        <button
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center"
          onClick={() => setNavOpen(false)}
          aria-label="Close menu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M0 15.839L15.839 0M0 0L15.839 15.839" stroke="black" strokeWidth="1.5"/>
          </svg>
        </button>

        <div className="flex flex-col h-full pt-16 pb-8 px-6 overflow-y-auto">
          {/* Main links */}
          <nav className="flex-1">
              {[
                { label: "Speakers", href: "/en/int/composer/product/beolab-8" },
                { label: "Headphones", href: "/en/int/headphones" },
                { label: "Earphones", href: "/en/int/earphones/beograce" },
                { label: "Stories", href: "/en/int/stories" },
                { label: "About", href: "/en/int/story/about-bang-and-olufsen" },
              ].map((item) => (
                <a key={item.label} href={item.href} onClick={() => setNavOpen(false)}
                  className="block py-4 text-[rgb(25,24,23)] text-xl leading-7 border-b border-[rgb(229,229,229)]">
                  {item.label}
                </a>
              ))}
            <div className="mt-8">
              {[
                { label: "Design your own", href: "/studio/configuration/caps/ada693e3-60f5-41f8-b22e-eef3f6c9c833" },
                { label: "The World of B&O", href: "/en/int/stories" },
              ].map((item) => (
                <a key={item.label} href={item.href} onClick={() => setNavOpen(false)}
                  className="block py-4 text-[rgb(25,24,23)] text-xl leading-7 border-b border-[rgb(229,229,229)]">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-8">
              {["B&O Professional","Partner Audio"].map((l) => (
                <a key={l} href="#" onClick={() => setNavOpen(false)}
                  className="block py-2 text-[rgb(85,85,85)] text-sm">
                  {l}
                </a>
              ))}
            </div>
          </nav>

          {/* Bottom */}
          <div className="border-t border-[rgb(229,229,229)] pt-6 flex flex-col gap-4">
            <a href="https://stores.bang-olufsen.com/en/search?country=INT" className="flex items-center gap-3 text-[rgb(25,24,23)] text-sm">
              <img src="/assets/cloned/svg/cf54b34802e9.svg" className="w-5 h-5" style={{ filter: "brightness(0)" }} alt="" />
              Find Store
            </a>
            <button className="flex items-center gap-3 text-[rgb(25,24,23)] text-sm">
              <img src="/assets/cloned/svg/a865def8fb17.svg" className="w-5 h-5" style={{ filter: "brightness(0)" }} alt="" />
              Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
