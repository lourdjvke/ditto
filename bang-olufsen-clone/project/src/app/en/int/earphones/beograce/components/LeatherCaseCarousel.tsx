"use client";
import { useState } from "react";

const colors = [
  {
    name: "Cranberry Red",
    img: "/assets/cloned/images/0812de0dd4f7.webp",
    swatch: "#8B2635",
    href: "/en/int/accessories/beograce-pouch?variant=beograce-leather-pouch-cranberry-red",
  },
  {
    name: "Natural",
    img: "/assets/cloned/images/08e483c6d606.webp",
    swatch: "#C4A882",
    href: "/en/int/accessories/beograce-pouch?variant=beograce-leather-pouch-natural",
  },
  {
    name: "Infinite Black",
    img: "/assets/cloned/images/000948df24db.webp",
    swatch: "#1A1A1A",
    href: "/en/int/accessories/beograce-pouch?variant=beograce-leather-pouch-infinite-black",
  },
];

export default function LeatherCaseCarousel() {
  const [idx, setIdx] = useState(0);
  const active = colors[idx];

  return (
    <div className="block bg-surface-2">
      <div className="block max-w-378 py-15 px-9 mx-auto max-lg:py-7.5 max-lg:px-4">
        <div className="flex -mx-4 flex-wrap max-md:-mx-1.5 md:max-lg:-mx-3">
          {/* Image side */}
          <div className="w-[723.3px] flex max-w-[58.3333%] px-4 justify-center items-center shrink-0 basis-[58.3333%] max-md:w-[22.1875rem] max-lg:max-w-full max-md:px-1.5 max-lg:basis-full md:max-lg:w-190 md:max-lg:px-3 2xl:w-[858.7px]">
            <div className="block w-full relative overflow-hidden text-center">
              {colors.map((c, i) => (
                <img
                  key={i}
                  src={c.img}
                  alt={c.name + " pouch for Beo Grace"}
                  className={`w-full block relative max-w-full overflow-clip transition-opacity duration-500 ${i === idx ? "opacity-100 relative" : "opacity-0 absolute inset-0"}`}
                  style={i !== idx ? { height: "100%" } : {}}
                />
              ))}
            </div>
          </div>

          {/* Info side */}
          <div className="h-[27.3rem] flex max-w-[25%] mt-15 ml-[103.3px] px-4 flex-col items-center shrink-0 basis-1/4 text-center max-md:h-auto max-lg:max-w-full max-lg:mt-7.5 max-md:px-1.5 max-lg:basis-full max-lg:ml-0 md:max-lg:h-[20.05rem] md:max-lg:px-3 2xl:h-[25.675rem] 2xl:ml-[122.7px]">
            <h2 className="block text-sm leading-6 tracking-[1.7px] uppercase max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px]">
              Beo Grace Leather Case
            </h2>

            {/* Color swatches */}
            <div className="flex gap-3 mt-5 mb-4 justify-center">
              {colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={c.name}
                  aria-checked={i === idx}
                  role="radio"
                  className={`w-[1.375rem] h-[1.375rem] rounded-full border-2 transition-all duration-200 ${i === idx ? "border-[rgb(25,24,23)] scale-110" : "border-transparent hover:border-[rgb(150,150,150)]"}`}
                  style={{ backgroundColor: c.swatch }}
                />
              ))}
            </div>

            <p className="block mt-4 text-muted-foreground text-2xl leading-9 tracking-[0.2px] whitespace-pre-wrap max-md:text-lg max-md:leading-7 max-lg:order-[initial] md:max-lg:text-xl md:max-lg:leading-8">
              {active.name}
            </p>

            <p className="block order-[1] mt-3 text-muted-foreground leading-6.5 tracking-[0.2px] whitespace-pre-wrap max-lg:order-[initial]">
              {"Introducing our exquisite leather earbuds pouch, crafted in Italy. Soft to the touch, it offers a natural fit, ensuring your earbuds are always ready to accompany you. "}
            </p>

            <div className="block mt-[0.9375rem] order-[1] text-2xl leading-9 max-md:text-lg max-md:leading-7 max-lg:order-[initial] md:max-lg:text-[1.375rem] md:max-lg:leading-8">
              $400
            </div>

            <div className="h-[2.9625rem] block mt-[1.5625rem] order-[1] max-lg:order-[initial]">
              <a
                href={active.href}
                className="w-[172.3px] h-11 border-2 border-solid border-border inline-block relative min-w-35 py-2 px-8 rounded-[40px] overflow-hidden font-medium leading-6 tracking-[0.1px] cursor-pointer whitespace-nowrap hover:bg-[rgb(229,229,229)] hover:text-[rgb(25,24,23)]"
                target="_self"
              >
                Discover more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
