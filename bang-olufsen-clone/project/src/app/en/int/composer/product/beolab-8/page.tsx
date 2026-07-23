"use client";

import { useState } from "react";
import Tile, { type TileData } from "./components/tile";
import { Tile_cids, Tile2_cids } from "./_cids";
import { Tile_styles, Tile2_styles } from "./_styles";

/* ─── Data ─────────────────────────────────────────────────── */

const Tile_data: TileData[] = [
  { ariaLabel: "Click to choose the aluminium base for your product", text: "Aluminium base" },
  { ariaLabel: "Click to choose the cover for your product", text: "Cover" },
  { ariaLabel: "Click to choose the position for your product", text: "Position" },
];

const COLORS = [
  "Black Anthracite",
  "Gold Tone",
  "Bronze Tone",
  "Brass Tone",
  "Chestnut Brown",
  "Bitter Orange",
  "Zesty Orange",
  "Radiant Red",
  "Lime Green",
  "Pineapple Yellow",
  "Olive Green",
  "Navy Blue",
  "Racing Green",
  "Beach Glass",
  "Bondi Blue",
  "Dawn Purple",
  "Peach Pink",
  "Raspberry Red",
  "Honey Tone",
  "Piano Black",
];

type TabId = "aluminium-base" | "cover" | "position";

/* ─── Hoodie SVG (inline — replaces 3-D canvas) ───────────── */
function HoodieSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 290.094 290.094"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
    >
      <path d="M287.804,168.95L216.34,69.576c-4.957-6.894-12.929-10.98-21.42-10.98h-12.011V42.042c0-6.721-5.449-12.17-12.17-12.17
h-18.191v80.345c0,4.143-3.357,7.5-7.5,7.5c-4.143,0-7.5-3.357-7.5-7.5V29.872h-18.192c-6.721,0-12.17,5.449-12.17,12.17v16.554
H95.175c-8.491,0-16.463,4.086-21.42,10.98L2.29,168.95c-3.708,5.157-2.827,12.298,2.023,16.399l13.14,11.109
c4.83,4.083,11.983,3.787,16.458-0.683l33.156-33.113c-6.086,8.516-9.519,18.159-9.519,28.376
c0,13.684,6.161,26.967,16.604,38.02c-2.824,2.229-4.642,5.674-4.642,9.551v9.441c0,6.721,5.449,12.17,12.17,12.17h126.735
c6.721,0,12.17-5.449,12.17-12.17v-9.441c0-3.877-1.819-7.322-4.642-9.551c10.443-11.053,16.604-24.336,16.604-38.02
c0-10.217-3.433-19.861-9.519-28.376l33.155,33.113c4.475,4.469,11.628,4.766,16.458,0.683l13.14-11.109
C290.632,181.248,291.513,174.107,287.804,168.95z" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>("aluminium-base");
  const [activeColor, setActiveColor] = useState("Black Anthracite");
  const [rotation, setRotation] = useState(false);
  const [zoom, setZoom] = useState(false);

  return (
    <>
      {/* Cookie wrapper (keeps parity with original DOM) */}
      <div className="box-content block" id="cookie-information-template-wrapper" />

      <div className="box-content block" id="__next">
        <div className="box-content block">

          {/* ── Outer viewport container ── */}
          <div
            className="box-content h-200 flex justify-center items-center overflow-hidden max-md:h-203 md:max-lg:h-256 2xl:h-270"
          >
            <div
              className="box-content w-auto h-200 block relative overflow-hidden max-md:h-203 md:max-lg:h-256 2xl:h-270"
              title="Composer"
            >
              {/* ── Background: grid-striped surface ── */}
              <div
                className="box-content h-full block text-[0.9375rem] leading-[1.0625rem] bg-clr-0 [background-size:95.8333%_800px] [background-position:0%_2.08333%] max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:[background-size:100%_812px] max-md:[background-position:0%_50%] md:max-lg:text-[0.8125rem] md:max-lg:leading-4 md:max-lg:[background-size:95.8333%_1024px] 2xl:leading-4.5 2xl:[background-size:95.8333%_1080px]"
                data-cid="n6"
              >
                <div className="box-content h-full block" id="f1-root">

                  {/* Toast overlay */}
                  <div className="box-content h-191 block absolute top-4 inset-x-4 z-[9999] pointer-events-none max-md:h-194 md:max-lg:h-247 2xl:h-261" id="f1-_rht_toaster" />

                  {/* ── Main flex column ── */}
                  <div className="box-content h-full flex relative max-h-full flex-col overflow-hidden [font-family:BeoSupreme] leading-4.5 max-md:leading-3 md:max-lg:leading-[inherit] 2xl:leading-5">

                    {/* ════ HEADER ════════════════════════════════════════════ */}
                    <div
                      className="h-[6.8125rem] flex absolute inset-x-0 z-[3] min-w-0 py-6.5 pr-[2.4375rem] pl-11 justify-between items-center max-md:h-[5.5625rem] max-md:p-4 max-md:bg-clr-0 md:max-lg:h-26 md:max-lg:pt-[1.4375rem] md:max-lg:pb-6 md:max-lg:px-4"
                      data-cid="n10"
                    >
                      {/* Back button */}
                      <div
                        className="box-content flex py-2 justify-center items-center gap-2.5 text-border text-xs leading-5 tracking-[0.1px] text-center [font-feature-settings:'clig'_0,_'liga'_0] cursor-pointer"
                        aria-label="Click to go one step back"
                      >
                        <img
                          className="box-content w-10.5 h-[2.5625rem] block overflow-clip"
                          alt="Icon chevron left"
                          src="/assets/cloned/svg/d1b3c79d33fb.svg"
                        />
                        <span className="box-content block max-md:hidden">Back</span>
                      </div>

                      {/* Logo — absolute-centered */}
                      <div className="box-content w-10.5 h-[3.9375rem] block absolute top-[clamp(44.5px,_50%,_calc(100%_-_44.5px))] left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] min-w-0 transform-[matrix(1,0,0,1,-21,-31.5)] cursor-pointer max-md:w-8.5 max-md:h-9 max-md:transform-[matrix(1,0,0,1,-17,-18)] 2xl:h-16 2xl:transform-[matrix(1,0,0,1,-21,-32)]">
                        <img
                          className="box-content w-10.5 h-15 inline overflow-clip max-md:w-8.5 max-md:h-[3.0625rem]"
                          alt="B&O logo"
                          src="/assets/cloned/svg/9583fd7af875.svg"
                        />
                      </div>

                      {/* Account icon */}
                      <div className="box-content flex relative justify-center items-center gap-2">
                        <span className="box-content flex flex-col justify-center items-center text-center [font-feature-settings:'clig'_0,_'liga'_0]">
                          <img
                            className="box-content w-8 h-8 block overflow-clip cursor-pointer"
                            alt="My account icon"
                            src="/assets/cloned/svg/57a22b6d3b62.svg"
                          />
                          <span className="box-content w-20 h-[0.9375rem] block absolute top-[1.8125rem] -left-4 opacity-0 min-w-0 text-border text-xs leading-[0.9375rem]">
                            My account
                          </span>
                        </span>
                      </div>
                    </div>
                    {/* ════ END HEADER ════════════════════════════════════════ */}

                    {/* ════ DESKTOP BOTTOM BAR (absolute) ═══════════════════ */}
                    <div className="box-content h-0 block" data-cid="n20">

                      {/* ── Desktop Left Sidebar: tabs ── */}
                      <div
                        className="h-[208.5px] flex absolute top-[clamp(400px,_50%,_calc(100%_-_400px))] right-[67.775rem] left-0 z-[3] mb-3.5 pl-[2.45rem] flex-col self-center transform-[matrix(1,0,0,1,0,-104.273)] max-lg:hidden 2xl:h-[15.3625rem] 2xl:right-[101.6625rem] 2xl:mb-[1.2rem] 2xl:pl-[3.675rem] 2xl:transform-[matrix(1,0,0,1,0,-122.906)]"
                        data-cid="n21"
                      >
                        {Tile_data.map((d, i) => (
                          <button
                            key={i}
                            className="appearance-none bg-transparent border-0 p-0 text-left cursor-pointer"
                            onClick={() => setActiveTab(
                              i === 0 ? "aluminium-base" : i === 1 ? "cover" : "position"
                            )}
                            aria-label={d.ariaLabel}
                          >
                            <Tile
                              d={d}
                              cids={Tile_cids[i]}
                              styles={{
                                ...Tile_styles[i],
                                className: [
                                  Tile_styles[i].className,
                                  activeTab === (i === 0 ? "aluminium-base" : i === 1 ? "cover" : "position")
                                    ? "!text-border underline decoration-1 underline-offset-[6px]"
                                    : "!text-muted-foreground",
                                ].join(" "),
                              }}
                            />
                          </button>
                        ))}
                      </div>

                      {/* ── Desktop Right Sidebar: color list ── */}
                      <div
                        className="box-content h-137.5 flex absolute top-25 right-0 left-[68.675rem] z-[2] min-w-40 max-h-150 pr-[1.325rem] flex-col justify-center items-end self-center overflow-hidden max-lg:hidden 2xl:h-150 2xl:top-60 2xl:left-[1669.3px] 2xl:pr-[2.55rem]"
                        data-cid="n31"
                      >
                        <div className="h-[29.9375rem] flex relative z-[1] mb-[0.9375rem] flex-col justify-start items-end grow overflow-hidden max-lg:hidden 2xl:h-[33.0625rem]">
                          <div className="box-content h-full flex flex-col gap-6 overflow-x-auto overflow-y-hidden max-lg:hidden">
                            <div className="box-content h-full flex min-w-0 flex-col gap-6 max-lg:hidden">
                              <div className="box-content h-full block relative overflow-hidden max-lg:hidden">
                                <div className="box-content block max-lg:hidden">
                                  {/* Custom scrollbar track */}
                                  <div className="w-1 h-[29.9375rem] block absolute top-0 left-[8.7rem] z-[99999] opacity-0 py-1.5 rounded-xl bg-clr-1 pointer-events-none max-lg:hidden">
                                    <div className="box-content w-1 h-[12.6875rem] block absolute top-0 pointer-events-none max-lg:hidden">
                                      <div className="box-content h-[12.6875rem] block rounded-xl bg-border [background-clip:padding-box] pointer-events-none max-lg:hidden" />
                                    </div>
                                  </div>
                                </div>

                                {/* Scrollable color list */}
                                <div
                                  className="box-content h-full block -mr-5 overflow-x-hidden overflow-y-scroll max-lg:hidden"
                                  style={{
                                    maskImage:
                                      "linear-gradient(var(--clr-2) 1%, var(--foreground) 10%, var(--foreground) 90%, var(--clr-2) 99%)",
                                  }}
                                  data-cid="n40"
                                >
                                  <div className="box-content h-full flex mr-5 flex-col gap-6 max-lg:hidden">
                                    {/* Invisible spacer top */}
                                    <div className="box-content h-2.5 block invisible pr-4 text-color-001 text-xs leading-5 tracking-[0.1px] text-right capitalize [font-feature-settings:'clig'_0,_'liga'_0] cursor-pointer max-lg:hidden 2xl:leading-[inherit]">
                                      empty
                                    </div>

                                    {/* Natural / Signature — first static item */}
                                    <div
                                      className="box-content block pr-4 text-border text-xs leading-5 tracking-[0.1px] text-right capitalize [font-feature-settings:'clig'_0,_'liga'_0] cursor-pointer max-lg:hidden 2xl:leading-[inherit]"
                                    >
                                      <div className="box-content block overflow-hidden max-lg:hidden">
                                        <div className="box-content flex flex-col max-lg:hidden">
                                          <span className="box-content block text-base leading-6.5 tracking-[0.2px] max-lg:hidden">
                                            Natural
                                          </span>
                                        </div>
                                      </div>
                                      <div className="box-content inline-block overflow-hidden max-lg:hidden">
                                        <div className="box-content flex flex-col max-lg:hidden">
                                          <span className="box-content block max-lg:hidden">Signature</span>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Dynamic color options */}
                                    {COLORS.map((color, i) => (
                                      <button
                                        key={color}
                                        onClick={() => setActiveColor(color)}
                                        className={[
                                          "box-content block pr-4 text-xs leading-5 tracking-[0.1px] text-right capitalize",
                                          "[font-feature-settings:'clig'_0,_'liga'_0] cursor-pointer max-lg:hidden 2xl:leading-[inherit]",
                                          "appearance-none bg-transparent border-0 p-0",
                                          activeColor === color
                                            ? "text-border"
                                            : "text-color-001",
                                          Tile2_styles[i]?.className ?? "",
                                        ].join(" ")}
                                        data-cid={Tile2_cids[i]?.[0]}
                                      >
                                        <div
                                          className={[
                                            "box-content block overflow-hidden max-lg:hidden",
                                            Tile2_styles[i]?.className2 ?? "",
                                          ].join(" ")}
                                          data-cid={Tile2_cids[i]?.[1]}
                                        >
                                          <div
                                            className={[
                                              "box-content flex flex-col max-lg:hidden",
                                              Tile2_styles[i]?.className3 ?? "",
                                            ].join(" ")}
                                            data-cid={Tile2_cids[i]?.[2]}
                                          >
                                            <span
                                              className={[
                                                "box-content block text-base leading-6.5 tracking-[0.2px] max-lg:hidden",
                                                Tile2_styles[i]?.className4 ?? "",
                                              ].join(" ")}
                                              data-cid={Tile2_cids[i]?.[3]}
                                            >
                                              {color}
                                            </span>
                                          </div>
                                        </div>
                                      </button>
                                    ))}

                                    {/* Invisible spacer bottom */}
                                    <div className="box-content h-2.5 block invisible pr-4 text-color-001 text-xs leading-5 tracking-[0.1px] text-right capitalize [font-feature-settings:'clig'_0,_'liga'_0] cursor-pointer max-lg:hidden 2xl:leading-[inherit]">
                                      empty
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ── Desktop Bottom-left: Rotation + Zoom toggles ── */}
                      <div className="box-content w-[12.4375rem] h-5 flex absolute min-w-0 self-end gap-8 text-xs leading-[0.9375rem] max-lg:hidden"
                        style={{ bottom: "1.875rem", left: "2.45rem" }}
                        data-cid="n140"
                      >
                        {/* Rotation toggle */}
                        <div
                          className="box-content flex items-center gap-2 overflow-hidden cursor-pointer max-lg:hidden"
                          onClick={() => setRotation((r) => !r)}
                          aria-label="Start and stop the rotation of the 3D model displayed in the center of the screen."
                        >
                          <span className="box-content block max-lg:hidden">
                            <div
                              className="box-content w-[2.3125rem] h-5 flex relative rounded-[10px] justify-start items-center max-lg:hidden"
                              style={{
                                backgroundImage: `url("/assets/cloned/svg/${rotation ? "d6b085571821" : "8a600d5b250b"}.svg")`,
                              }}
                            >
                              <img
                                className={`box-content w-3.5 h-3.5 block rounded-[10px] overflow-clip bg-background max-lg:hidden transition-all duration-200 ${rotation ? "ml-4.5" : "ml-[3.5px]"}`}
                                alt="circle"
                                src="/assets/cloned/svg/17fe7cd7197d.svg"
                              />
                            </div>
                          </span>
                          <span className="box-content block max-lg:hidden">Rotation</span>
                        </div>

                        {/* Zoom toggle */}
                        <div
                          className="box-content flex items-center gap-2 overflow-hidden cursor-pointer max-lg:hidden"
                          onClick={() => setZoom((z) => !z)}
                          aria-label="Toggle to zoom in and out on the 3D model displayed in the center of the screen."
                        >
                          <span className="box-content block max-lg:hidden">
                            <div
                              className="box-content w-[2.3125rem] h-5 flex relative rounded-[10px] justify-start items-center max-lg:hidden"
                              style={{
                                backgroundImage: `url("/assets/cloned/svg/${zoom ? "d6b085571821" : "8a600d5b250b"}.svg")`,
                              }}
                            >
                              <img
                                className={`box-content w-3.5 h-3.5 block rounded-[10px] overflow-clip bg-background max-lg:hidden transition-all duration-200 ${zoom ? "ml-4.5" : "ml-[3.5px]"}`}
                                alt="circle"
                                src="/assets/cloned/svg/17fe7cd7197d.svg"
                              />
                            </div>
                          </span>
                          <span className="box-content block max-lg:hidden">Zoom</span>
                        </div>
                      </div>

                      {/* ── Desktop Bottom-right: price + Done ── */}
                      <div
                        className="box-content w-[11.0625rem] h-[82.5px] flex absolute right-[2.45rem] bottom-0 min-w-0 flex-col justify-center gap-[7.5px] max-lg:hidden 2xl:h-[5.1875rem] 2xl:right-[3.675rem] 2xl:gap-2"
                        data-cid="n151"
                      >
                        <div className="box-content flex justify-between items-center gap-2 text-xs leading-[0.9375rem] cursor-pointer max-lg:hidden">
                          <div className="box-content block overflow-hidden max-lg:hidden">
                            <div className="box-content inline-block whitespace-nowrap max-lg:hidden">
                              Est. total 9,000 EUR / set
                            </div>
                          </div>
                          <div className="box-content block overflow-hidden max-lg:hidden">
                            <img
                              className="box-content w-8 h-8 inline-block overflow-clip max-lg:hidden"
                              alt="Info icon"
                              src="/assets/cloned/svg/bad29eb0cf06.svg"
                            />
                          </div>
                        </div>
                        <div className="box-content flex justify-end max-lg:hidden">
                          <div
                            className="box-content border-2 border-solid border-border flex py-2 px-8 rounded-[40px] justify-center items-center self-center text-background text-base font-medium leading-5 tracking-[0.1px] text-center whitespace-nowrap text-nowrap [font-feature-settings:'clig'_0,_'liga'_0] bg-border cursor-pointer max-lg:hidden 2xl:[font-size:inherit] 2xl:leading-[inherit]"
                            aria-label="Press the button to continue with composing the product"
                          >
                            Done
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ════ END DESKTOP BOTTOM BAR ════════════════════════ */}

                    {/* ════ MOBILE LAYOUT (hidden on desktop) ════════════ */}
                    <div className="hidden max-lg:flex max-lg:flex-col max-lg:h-full max-lg:absolute max-lg:top-0 max-lg:inset-x-0 max-lg:z-[10] max-lg:min-w-0 max-lg:bg-clr-0">

                      {/* Mobile horizontal tab bar */}
                      <div
                        className="hidden max-lg:flex max-lg:absolute max-lg:top-[5.5625rem] max-lg:inset-x-0 max-lg:z-[5] max-lg:overflow-x-auto max-lg:px-4 max-lg:gap-0 max-md:top-[5.5625rem] md:max-lg:top-26"
                        style={{ scrollbarWidth: "none" }}
                      >
                        {Tile_data.map((d, i) => {
                          const tabId: TabId = i === 0 ? "aluminium-base" : i === 1 ? "cover" : "position";
                          const isActive = activeTab === tabId;
                          return (
                            <button
                              key={i}
                              onClick={() => setActiveTab(tabId)}
                              className={[
                                "hidden max-lg:flex max-lg:items-end max-lg:flex-shrink-0",
                                "max-lg:px-4 max-lg:pb-3 max-lg:pt-1",
                                "max-lg:text-xs max-lg:tracking-[2px] max-lg:uppercase max-lg:whitespace-nowrap",
                                "max-lg:appearance-none max-lg:bg-transparent max-lg:border-0 max-lg:border-b-2 max-lg:border-solid max-lg:cursor-pointer",
                                "max-lg:[font-family:BeoSupreme]",
                                isActive
                                  ? "max-lg:border-border max-lg:text-border"
                                  : "max-lg:border-transparent max-lg:text-muted-foreground",
                              ].join(" ")}
                            >
                              {d.text}
                            </button>
                          );
                        })}
                      </div>

                      {/* Mobile split: hoodie left, colors right */}
                      <div className="hidden max-lg:flex max-lg:h-full max-lg:relative max-lg:z-0 max-lg:overflow-hidden">

                        {/* Hoodie product area (left ~60%) */}
                        <div className="hidden max-lg:flex max-lg:flex-1 max-lg:items-center max-lg:justify-center max-lg:pt-[9rem] max-lg:pb-[5rem] max-md:pt-[7.5rem] max-md:pb-[4.5rem]">
                          <HoodieSvg className="hidden max-lg:block max-lg:w-auto max-lg:max-h-full max-lg:text-border opacity-90 max-lg:max-w-[85%]" />
                        </div>

                        {/* Color list (right, ~40%) */}
                        <div
                          className="hidden max-lg:flex max-lg:w-[45%] max-md:w-[44%] max-lg:flex-col max-lg:items-end max-lg:justify-center max-lg:overflow-y-auto max-lg:pt-[9rem] max-lg:pb-[5rem] max-md:pt-[7.5rem] max-md:pb-[4.5rem] max-lg:pr-4"
                          style={{ scrollbarWidth: "none" }}
                        >
                          {/* Natural / Signature header item */}
                          <div className="hidden max-lg:block max-lg:text-right max-lg:mb-3 max-lg:cursor-pointer">
                            <span className="hidden max-lg:block max-lg:text-[0.625rem] max-lg:leading-5 max-lg:tracking-[0.1px] max-lg:text-muted-foreground max-lg:capitalize md:max-lg:text-xs">
                              Natural
                            </span>
                            <span className="hidden max-lg:block max-lg:text-base max-lg:leading-6.5 max-lg:tracking-[0.2px] max-lg:text-border max-lg:capitalize md:max-lg:text-base">
                              Signature
                            </span>
                          </div>

                          {/* Color options */}
                          {COLORS.map((color) => {
                            const isActive = activeColor === color;
                            return (
                              <button
                                key={color}
                                onClick={() => setActiveColor(color)}
                                className={[
                                  "hidden max-lg:block max-lg:text-right max-lg:py-[3px]",
                                  "max-lg:text-base max-lg:leading-6.5 max-lg:tracking-[0.2px] max-lg:capitalize",
                                  "max-lg:appearance-none max-lg:bg-transparent max-lg:border-0 max-lg:cursor-pointer max-lg:w-full",
                                  "[font-feature-settings:'clig'_0,_'liga'_0]",
                                  isActive ? "max-lg:text-border" : "max-lg:text-muted-foreground",
                                  "md:max-lg:text-xs md:max-lg:leading-5",
                                ].join(" ")}
                              >
                                {color}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Mobile bottom bar */}
                      <div className="hidden max-lg:flex max-lg:absolute max-lg:bottom-0 max-lg:inset-x-0 max-lg:z-[5] max-lg:h-[4.5rem] max-lg:items-center max-lg:justify-between max-lg:px-4 max-lg:bg-clr-0 max-lg:border-t max-lg:border-t-[rgba(25,24,23,0.12)]">
                        {/* More options */}
                        <button className="hidden max-lg:flex max-lg:items-center max-lg:appearance-none max-lg:bg-transparent max-lg:border-0 max-lg:cursor-pointer max-lg:text-border max-lg:text-sm max-lg:font-medium max-lg:leading-5 max-lg:tracking-[0.1px] [font-feature-settings:'clig'_0,_'liga'_0]">
                          More options
                        </button>

                        {/* Price + Done */}
                        <div className="hidden max-lg:flex max-lg:items-center max-lg:gap-3">
                          <div className="hidden max-lg:flex max-lg:items-center max-lg:gap-1 max-lg:text-xs max-lg:leading-[0.9375rem] max-lg:cursor-pointer">
                            <span>Est. total 9,000 EUR / set</span>
                            <img
                              className="w-4 h-4 inline-block overflow-clip"
                              alt="Info icon"
                              src="/assets/cloned/svg/bad29eb0cf06.svg"
                            />
                          </div>
                          <button
                            className="hidden max-lg:flex max-lg:border-2 max-lg:border-solid max-lg:border-border max-lg:py-2 max-lg:px-7 max-lg:rounded-[40px] max-lg:justify-center max-lg:items-center max-lg:text-background max-lg:text-base max-lg:font-medium max-lg:leading-5 max-lg:tracking-[0.1px] max-lg:text-center max-lg:whitespace-nowrap max-lg:bg-border max-lg:cursor-pointer max-lg:appearance-none"
                            aria-label="Press the button to continue with composing the product"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* ════ END MOBILE LAYOUT ═════════════════════════════ */}

                    {/* ════ HOODIE (replaces 3-D canvas) — desktop only ══ */}
                    <div
                      className="box-content h-full flex absolute top-0 inset-x-0 z-[1] min-w-0 items-center justify-center max-lg:hidden"
                      id="f1-container3d"
                      data-cid="n163"
                    >
                      <HoodieSvg
                        className="block text-border select-none pointer-events-none"
                        aria-label="BeoLab 8 product visualisation"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
