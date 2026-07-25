"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const imgFilter = scrolled ? "brightness(0)" : "none";
  const textColor = scrolled ? "text-[rgb(25,24,23)]" : "text-white";
  const lineColor = scrolled ? "bg-[rgb(25,24,23)]" : "bg-white";

  return (
    <>
      <style>{`
        .nav-transparent:hover {
          background-color: white !important;
          background-image: none !important;
        }
        .nav-transparent:hover img {
          filter: brightness(0) !important;
        }
        .nav-transparent:hover .nav-line {
          background-color: rgb(25,24,23) !important;
        }
        .nav-transparent:hover .nav-menu-text {
          color: rgb(25,24,23) !important;
        }
      `}</style>
      {/* Top bar */}
      <div
        className={`fixed top-0 inset-x-0 z-[100] transition-[background-color] duration-200 ${scrolled ? "bg-white" : "bg-transparent nav-transparent"}`}
        style={!scrolled ? { backgroundImage: "linear-gradient(rgba(25,24,23,0.35) 0%,rgba(25,24,23,0) 100%)" } : {}}
      >
        <div className="h-[5.3125rem] flex relative px-4 items-center lg:h-[7.25rem] lg:px-9">
          {/* Hamburger */}
          <button
            className={`flex items-center gap-2 cursor-pointer relative z-10 group rounded-full px-2 py-2 transition-colors duration-200 ${scrolled ? "hover:bg-slate-100" : "hover:bg-white hover:text-black"}`}
            aria-label="Open menu"
            type="button"
            onClick={() => setNavOpen(true)}
          >
            <span className="flex flex-col gap-[5px]">
              <span className={`w-5 h-[1.5px] block transition-colors duration-200 nav-line ${lineColor} ${!scrolled ? "group-hover:bg-[rgb(25,24,23)]" : ""}`} />
              <span className={`w-5 h-[1.5px] block transition-colors duration-200 nav-line ${lineColor} ${!scrolled ? "group-hover:bg-[rgb(25,24,23)]" : ""}`} />
            </span>
            <span className={`text-xs leading-5 tracking-[0.1px] transition-colors duration-200 nav-menu-text ${textColor}`}>Menu</span>
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
              className="h-[0.625rem] w-auto lg:h-[1.0625rem] transition-[filter] duration-200"
              style={{ filter: imgFilter }}
            />
            <img
              src="/assets/cloned/svg/a19aaf71a505.svg"
              alt="Est 1925"
              className="h-2.5 w-auto mt-1 hidden lg:block transition-[filter,opacity] duration-200"
              style={{ filter: imgFilter, opacity: scrolled ? 0 : 1 }}
            />
          </a>

          {/* Right icons */}
          <div className="ml-auto flex items-center gap-2">
            <a href="https://stores.bang-olufsen.com/en/search?country=INT" className={`w-8 h-8 hidden lg:flex items-center justify-center group rounded-full p-2 transition-colors duration-200 ${scrolled ? "hover:bg-slate-100" : "hover:bg-white hover:text-black"}`}>
              <img src="/assets/cloned/svg/cf54b34802e9.svg" alt="Store Locator" className={`w-6 h-6 transition duration-200 filter ${scrolled ? "brightness-0" : "group-hover:brightness-0"}`} />
            </a>
            <button className={`w-8 h-8 hidden lg:flex items-center justify-center group rounded-full p-2 transition-colors duration-200 ${scrolled ? "hover:bg-slate-100" : "hover:bg-white hover:text-black"}`} aria-label="Account">
              <img src="/assets/cloned/svg/a865def8fb17.svg" alt="Account" className={`w-6 h-6 transition duration-200 filter ${scrolled ? "brightness-0" : "group-hover:brightness-0"}`} />
            </button>
            <button className={`w-8 h-8 flex items-center justify-center group rounded-full p-2 transition-colors duration-200 ${scrolled ? "hover:bg-slate-100" : "hover:bg-white hover:text-black"}`} aria-label="Cart">
              <img src="/assets/cloned/svg/9155dccf36cd.svg" alt="Cart" className={`w-8 h-8 transition duration-200 filter ${scrolled ? "brightness-0" : "group-hover:brightness-0"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 z-[999] bg-black/40 transition-opacity duration-300 ${navOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setNavOpen(false)}
      />

      {/* Slide-out nav */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[min(100vw,240px)] md:w-[min(100vw,217.6px)] z-[1000] bg-white flex flex-col transition-transform duration-300 ease-in-out ${navOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close */}
        <button
          className="absolute top-5 left-5 flex items-center gap-2 text-[rgb(25,24,23)] text-[0.7rem] font-normal md:top-6 md:left-6"
          onClick={() => setNavOpen(false)}
          aria-label="Close menu"
        >
          <span className="inline-flex items-center justify-center w-6 h-6" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M0 15.839L15.839 0M0 0L15.839 15.839" stroke="black" strokeWidth="1.5"/>
            </svg>
          </span>
          <span>Close</span>
        </button>

        <div className="flex flex-col h-full pt-20 pb-8 px-5 overflow-y-auto md:px-10">
          <nav className="flex-1">
              {[
                { label: "Speakers", href: "/en/int/composer/product/beolab-8" },
                { label: "Headphones", href: "/en/int/headphones" },
                { label: "Earphones", href: "/en/int/earphones/beograce" },
                { label: "Stories", href: "/en/int/stories" },
                { label: "About", href: "/en/int/story/about-bang-and-olufsen" },
              ].map((item) => (
                <a key={item.label} href={item.href} onClick={() => setNavOpen(false)}
                  className="block pt-4 pb-0 text-[rgb(25,24,23)] text-[0.8rem] leading-5 border-b border-[rgb(229,229,229)] md:border-b-0 md:leading-6">
                  {item.label}
                </a>
              ))}
            <div className="mt-8">
              {[
                { label: "Design your own", href: "/studio/configure" },
                { label: "The World of B&O", href: "/en/int/stories" },
              ].map((item) => (
                <a key={item.label} href={item.href} onClick={() => setNavOpen(false)}
                  className="block pt-4 pb-0 text-[rgb(25,24,23)] text-[0.8rem] leading-5 border-b border-[rgb(229,229,229)] md:border-b-0 md:leading-6">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-8">
              {["B&O Professional","Partner Audio"].map((l) => (
                <a key={l} href="#" onClick={() => setNavOpen(false)}
                  className="block pt-2 pb-0 text-[rgb(85,85,85)] text-[0.8rem]">
                  {l}
                </a>
              ))}
            </div>
          </nav>

          {/* Bottom */}
          <div className="border-t border-[rgb(229,229,229)] pt-6 flex flex-col gap-4">
            <a href="https://stores.bang-olufsen.com/en/search?country=INT" className="flex items-center gap-3 text-[rgb(25,24,23)] text-[0.8rem]">
              <img src="/assets/cloned/svg/cf54b34802e9.svg" className="w-5 h-5" style={{ filter: "brightness(0)" }} alt="" />
              Find Store
            </a>
            <button className="flex items-center gap-3 text-[rgb(25,24,23)] text-[0.8rem]">
              <img src="/assets/cloned/svg/a865def8fb17.svg" className="w-5 h-5" style={{ filter: "brightness(0)" }} alt="" />
              Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
