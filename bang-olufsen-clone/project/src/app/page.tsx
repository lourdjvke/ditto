import DropdownMenu from "./ditto/DropdownMenu";
import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import PowerfulMultiroomSpeakerSection from "./sections/powerful-multiroom-speaker-section";
import WirelessSpeakerDesignedSection from "./sections/wireless-speaker-designed-section";
import LightWeightPortableSection from "./sections/light-weight-portable-section";
import HouseOfBangSection from "./sections/house-of-bang-section";
import Footer from "./sections/footer";
import Icon2 from "./svgs/svg-icon2";
import Icon3 from "./svgs/svg-icon3";
import ListRow2, { type ListRow2Data } from "./components/list-row2";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import MediaCard, { type MediaCardData } from "./components/media-card";
import ListRow3, { type ListRow3Data } from "./components/list-row3";
import FeatureCard, { type FeatureCardData } from "./components/feature-card";
import TextLink, { type TextLinkData } from "./components/text-link";
import MediaTile2, { type MediaTile2Data } from "./components/media-tile2";
import Tile, { type TileData } from "./components/tile";
import MediaTile3, { type MediaTile3Data } from "./components/media-tile3";
import { ListRow2_cids, MediaTile_cids, MediaCard_cids, ListRow3_cids, FeatureCard_cids, TextLink_cids, MediaTile2_cids, Tile_cids, MediaTile3_cids } from "./_cids";
import { ListRow2_styles, MediaCard_styles, FeatureCard_styles, TextLink_styles, MediaTile2_styles, Tile_styles, MediaTile3_styles } from "./_styles";

const ListRow2_data: ListRow2Data[] = [
    { ariahidden: "false", ariaLabel: "go to slide  1Beo Grace in Honey Tone", label: "1" },
    { ariahidden: "false", ariaLabel: "go to slide  2Beo Grace in Honey Tone", label: "2" },
    { ariahidden: "false", ariaLabel: "go to slide  3Beo Grace in Honey Tone", label: "3" },
    { ariahidden: "false", ariaLabel: "go to slide  4Beo Grace in Honey Tone", label: "4" },
    { ariahidden: "true", ariaLabel: "go to slide  5Beo Grace in Honey Tone", label: "5" },
    { ariahidden: "true", ariaLabel: "go to slide  6Beo Grace in Honey Tone", label: "6" },
    { ariahidden: "true", ariaLabel: "go to slide  7Beo Grace in Honey Tone", label: "7" },
    { ariahidden: "true", ariaLabel: "go to slide  8Beo Grace in Honey Tone", label: "8" },
    { ariahidden: "true", ariaLabel: "go to slide  9Beo Grace in Honey Tone", label: "9" }
];
const MediaTile_data: MediaTileData[] = [
    { alt: "30 days free trial icon", imgSrc: "/assets/cloned/svg/ef0537838652.svg", label: "30 days free trial icon", href: "/en/int/faq/returns", label2: "30-day free trial" },
    { alt: "Warranty icon", imgSrc: "/assets/cloned/svg/269e6512d4e2.svg", label: "Warranty icon", href: "/en/int/legal/limited-warranty", label2: "3 years warranty" },
    { alt: "Customer Service", imgSrc: "/assets/cloned/svg/604cf759f8e0.svg", label: "Customer Service", href: "https://support.bang-olufsen.com/hc/en-us/articles/360042167451-contact", label2: "24/7 Customer Care" }
];
const MediaCard_data: MediaCardData[] = [
    { alt: "A hand holding one of Beo Grace earphone piece with a beautiful sunset background behind", imgSrc: "/assets/cloned/images/d3c3900027f5.webp", srcSet: "/assets/cloned/images/a43e2d583c31.webp 640w, /assets/cloned/images/3e6741fac54d.webp 750w, /assets/cloned/images/33dbf6290e99.webp 828w, /assets/cloned/images/e7858d3860b6.webp 1080w, /assets/cloned/images/f4471e4040fb.webp 1200w, /assets/cloned/images/593aeb94cf76.webp 1920w, /assets/cloned/images/a4844b18fd13.webp 2048w, /assets/cloned/images/d3c3900027f5.webp 3840w", title: "Active Noise Cancellation and transparency", description: "Hear only what matters", ariaLabel: "Active Noise Cancellation and transparency (Open in tab overlay)" },
    { alt: "Side face of a man wearing Beo Grace Aluminium color, sitting outside near the ocean gazing somewhere ", imgSrc: "/assets/cloned/images/c16699c5e70f.webp", srcSet: "/assets/cloned/images/8ba0a46db86a.webp 640w, /assets/cloned/images/4a13056c6736.webp 750w, /assets/cloned/images/39bc5989d841.webp 828w, /assets/cloned/images/34dbcf889825.webp 1080w, /assets/cloned/images/c8794c3842af.webp 1200w, /assets/cloned/images/b059e8212608.webp 1920w, /assets/cloned/images/8a5ae63f89cc.webp 2048w, /assets/cloned/images/c16699c5e70f.webp 3840w", title: "Wind reduction and call quality", description: "Mastering the elements", ariaLabel: "Wind Reduction and Call Quality (Open in tab overlay)" },
    { alt: "Beo Grace plugged in an ear and a woman touching the skin in front of her ear", imgSrc: "/assets/cloned/images/2a01630139c8.webp", srcSet: "/assets/cloned/images/d50150d00e43.webp 640w, /assets/cloned/images/81773aab9977.webp 750w, /assets/cloned/images/193fdc8edc96.webp 828w, /assets/cloned/images/9fef65d3a7e7.webp 1080w, /assets/cloned/images/56d11a312392.webp 1200w, /assets/cloned/images/420140567ec3.webp 1920w, /assets/cloned/images/d26860de3d88.webp 2048w, /assets/cloned/images/2a01630139c8.webp 3840w", title: "The magic touch", description: "NearTap™ and Force control", ariaLabel: "NearTap™ and Force Control (Open in tab overlay)" }
];
const ListRow3_data: ListRow3Data[] = [
    { description: "Charging case with wireless charging receiver " },
    { description: "Earbuds: Left and Right " },
    { description: "USB-C/USB-C cable for charging, 0.5 m " },
    { description: "USB-C/3,5mm plug for Dongle mode, 0.5m " },
    { description: "Silicone tips, 4 sizes " },
    { description: "Quick start guide Welcome Card" }
];
const FeatureCard_data: FeatureCardData[] = [
    { ariacontrols: "593cae05-f08d-44ad-959d-ebe1e32ed823", id: "3b8d6ce7-5f9d-4058-9751-19df8c2b1dff", title: "Sound" },
    { ariacontrols: "c84dd167-be5a-4f0e-b4b8-91586475d39c", id: "1a9d73ea-7ad7-41b6-beee-7baadaf172d6", title: "Design" },
    { ariacontrols: "6588035e-a71c-4967-adb5-1e62e5123965", id: "fef37721-7c86-4423-a5b1-d0556040075a", title: "Battery" },
    { ariacontrols: "37b094bb-e424-4183-bc5e-961bac5f0e2f", id: "804870df-ec19-4b3a-bb1e-8b49482e21b7", title: "Connectivity" }
];
const TextLink_data: TextLinkData[] = [
    { download: "//assets.ctfassets.net/8cd2csgvqd3m/4tuNh0F1uVhp72J3aVM3J8/34d0530be84c5b801cc706d4322ebfa7/Product_Sheet_Beo_Grace_EN_05_December_V3_2025_Web.pdf", href: "https://assets.ctfassets.net/8cd2csgvqd3m/4tuNh0F1uVhp72J3aVM3J8/34d0530be84c5b801cc706d4322ebfa7/Product_Sheet_Beo_Grace_EN_05_December_V3_2025_Web.pdf", description: "Product Sheet" },
    { download: "//downloads.ctfassets.net/8cd2csgvqd3m/1WW5tKPsfcMWXVyq4D1NXg/d6b048dad6a00dac2dd7f68698bad0ed/Userguide_Beo_Grace_Combined_March_2026_Web.pdf", href: "https://downloads.ctfassets.net/8cd2csgvqd3m/1WW5tKPsfcMWXVyq4D1NXg/d6b048dad6a00dac2dd7f68698bad0ed/Userguide_Beo_Grace_Combined_March_2026_Web.pdf", description: "User Guide" },
    { download: "//assets.ctfassets.net/8cd2csgvqd3m/752Ie4IaVCSN1GoETt5NTJ/9ddf31a3a07d597b35cde892b0ea4685/Beo_Grace_QSG_60x108__2025_16_10_Web.pdf", href: "https://assets.ctfassets.net/8cd2csgvqd3m/752Ie4IaVCSN1GoETt5NTJ/9ddf31a3a07d597b35cde892b0ea4685/Beo_Grace_QSG_60x108__2025_16_10_Web.pdf", description: "Quick Start Guide" },
    { download: "//assets.ctfassets.net/8cd2csgvqd3m/6bIngbIfP5KS9525pzyhd2/5ed74789a72017c49627f16208d56633/Beo_Grace_Important_Information_60x108_2025_16_10_Web.pdf", href: "https://assets.ctfassets.net/8cd2csgvqd3m/6bIngbIfP5KS9525pzyhd2/5ed74789a72017c49627f16208d56633/Beo_Grace_Important_Information_60x108_2025_16_10_Web.pdf", description: "Important Information" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { ariaLabel: "Beo Grace in Honey Tone", href: "/en/int/earphones/beograce", alt: "Beo Grace in Honey Tone", imgSrc: "/assets/cloned/images/c1f4f6dea5b0.png", srcSet: "/assets/cloned/images/2b7f7a309675.png 1x, /assets/cloned/images/c1f4f6dea5b0.png 2x", ariaLabel2: "Beo Grace", href2: "/en/int/earphones/beograce", label: "Beo Grace" },
    { ariaLabel: "Beoplay Eleven in Natural Aluminium with case and earbuds next to each other", href: "/en/int/earphones/beoplay-eleven", alt: "Beoplay Eleven in Natural Aluminium with case and earbuds next to each other", imgSrc: "/assets/cloned/images/984b61ff2093.png", srcSet: "/assets/cloned/images/13d01223d190.png 1x, /assets/cloned/images/984b61ff2093.png 2x", ariaLabel2: "Beoplay Eleven", href2: "/en/int/earphones/beoplay-eleven", label: "Beoplay Eleven" },
    { ariaLabel: "Brown and silver h100 headphones", href: "/en/int/headphones/beoplay-h100", alt: "Brown and silver h100 headphones", imgSrc: "/assets/cloned/images/5b0c4889fab4.webp", srcSet: "/assets/cloned/images/608e6479d7b2.webp 1x, /assets/cloned/images/5b0c4889fab4.webp 2x", ariaLabel2: "Beoplay H100", href2: "/en/int/headphones/beoplay-h100", label: "Beoplay H100" }
];
const Tile_data: TileData[] = [
    { text: "Noise Isolation", description: "Full Adaptive ANC\nEarSense™\nTrueTransparency™ with 5 levels in the App\nDolby Spatial Audio", description2: "Active Noise Cancellation\nTransparency Mode", description3: "Adaptive Active Noise Cancellation\n(Total: 10 microphones 2 dedicated Mics for ANC/Transparency function Wind Guard)\nTrue Transparency™" },
    { text: "Microphones", description: "6 x MEMS, omni-directional (beam directional for speech)\nWind Guard", description2: "6 x MEMS, omni-directional (beam directional for speech)\nWind Guard", description3: "Total: 10\n4 Digital MEMS Voice Mic\n4 MEMS Feed Forward Mic\n2 Analogue Feedback Mic for ANC/Transparency function\nWind Guard" },
    { text: "Battery Life", description: "Up to 4.5 hours with ANC (Earphones only)\nUp to 17 hours with ANC (Including charging case)", description2: "Up to 6 hours with ANC (Earphones only)\nUp to 20 hours with ANC (Including charging case)\nUp to 8 hours without ANC (Earphones only)\nUp to 28 hours total without ANC (Including charging case)", description3: "32 hours with Active Noise Cancellation\n30 hours with Spatial Audio and Headtracking" },
    { text: "Bluetooth", description: "Bluetooth 5.3", description2: "Bluetooth 5.2", description3: "Bluetooth 5.3" },
    { text: "Dust and Waterproof Rating", description: "IP57 (Earphones)\nIP54 (Charging case)", description2: "IP57 (Earphones only)", description3: "IP53" }
];
const MediaTile3_data: MediaTile3Data[] = [
    { href: "/en/int/speakers/beosound-a1", alt: "Beosound A1 3rd Gen in Granite", imgSrc: "/assets/cloned/images/bf7f487483d6.png", alt2: "Beosound A1 warm granite on a wooden table", imgSrc2: "/assets/cloned/images/efd3f3970dbb.webp", label: "Beosound A1 3rd Gen", label2: "$399", description: "7 Colours" },
    { href: "/en/int/headphones/beoplay-h100?variant=beoplay-h100-hourglass-sand", alt: "Product picture of the Beoplay H100 Hourglass Sand variation", imgSrc: "/assets/cloned/images/ce3bf1ae8c8d.png", alt2: "Person wearing gold Beoplay H100 headphones relaxing on purple couch with blanket in cozy room with candles and holiday decor.", imgSrc2: "/assets/cloned/images/d90a3e49a487.jpg", label: "Beoplay H100", label2: "$2,200", description: "5 Colours" },
    { href: "/en/int/earphones/beoplay-eleven?variant=beoplay-eleven-natural-aluminium", alt: "Beoplay Eleven in Natural Aluminium with case and earbuds next to each other", imgSrc: "/assets/cloned/images/de3eb7022cad.png", alt2: "Beoplay Eleven shown in an open charging case", imgSrc2: "/assets/cloned/images/5d40789413cf.png", label: "Beoplay Eleven", label2: "$599", description: "3 Colours" }
];

export default function Page() {
  return (
    <>
      <div className="block" data-cid="n1" id="cookie-information-template-wrapper" />
      <div className="h-full block" data-cid="n2" id="__next">
        <div className="h-full block" data-cid="n3">
          <div className="h-full block" data-cid="n4">
            <nav className="block" data-cid="n5" data-component="nav">
              <div className="block" data-cid="n6" role="banner" />
              <div className="h-0 block opacity-0 max-w-378" data-cid="n7">
                <span className="w-px h-px block absolute overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n8">
                  Navigation and Content
                </span>
                <ul className="flex pl-10 [list-style-type:disc] list-outside max-md:flex-col" data-cid="n9">
                  <li className="h-6.5 list-item [list-style-type:none]" data-cid="n10">
                    <a className="inline text-border leading-6.5 tracking-[0.2px] cursor-pointer focus:underline" data-cid="n11" data-component="link" href="#main-layout">
                      Skip to main content
                    </a>
                  </li>
                  <li className="h-6.5 list-item [list-style-type:none]" data-cid="n12">
                    <a className="inline text-border leading-6.5 tracking-[0.2px] cursor-pointer focus:underline" data-cid="n13" data-component="link" href="#main-footer">
                      Skip to main footer
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <header className="h-0 block fixed top-0 inset-x-0 z-91 2xl:relative 2xl:bottom-0" data-cid="n14" aria-hidden="false">
              <Navbar />
            </header>
            <main className="block relative pt-[6.3125rem] flex-1 bg-background max-lg:pt-15 2xl:pt-0" data-cid="n42" id="main-layout">
              <div className="block" data-cid="n43">
                <div className="block 2xl:h-270 2xl:flex 2xl:flex-col 2xl:justify-center" data-cid="n44">
                  <HeroSection />
                  <PowerfulMultiroomSpeakerSection />
                  <WirelessSpeakerDesignedSection />
                  <LightWeightPortableSection />
                  <HouseOfBangSection />
                </div>
                <div className="hidden" data-cid="n231">
                  <div className="hidden 2xl:block 2xl:relative 2xl:pt-4 2xl:pb-6 2xl:bg-clr-0" data-cid="n232" id="overview">
                    <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:px-9" data-cid="n233">
                      <div className="hidden 2xl:h-[58.6875rem] 2xl:flex 2xl:relative 2xl:-mx-4 2xl:flex-wrap" data-cid="n234">
                        <div className="hidden 2xl:w-[858.7px] 2xl:h-[58.6875rem] 2xl:flex 2xl:relative 2xl:max-w-[58.3333%] 2xl:pb-20 2xl:flex-col 2xl:justify-center 2xl:shrink-0 2xl:basis-[58.3333%] 2xl:text-right 2xl:bg-clr-0 2xl:[animation-name:jTBhup] 2xl:[animation-duration:1.2s] 2xl:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] 2xl:[animation-delay:0.2s] 2xl:[animation-fill-mode:forwards]" data-cid="n235">
                          <div className="hidden 2xl:block" data-cid="n236">
                            <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n237" />
                            <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n238" />
                            <div className="hidden 2xl:block" data-cid="n239">
                              <div className="hidden 2xl:block 2xl:relative 2xl:flex-wrap" data-cid="n240">
                                <div className="hidden 2xl:block 2xl:max-w-378" data-cid="n241">
                                  <div className="hidden 2xl:block 2xl:relative" data-cid="n242">
                                    <div className="hidden 2xl:block 2xl:relative" data-cid="n243" dir="ltr">
                                      <button className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:right-28 2xl:bottom-8 2xl:z-1 2xl:mb-[0.3125rem] 2xl:-ml-20 2xl:py-px 2xl:px-1.5 2xl:rounded-[50%] 2xl:text-center 2xl:indent-[-9999px] 2xl:[background-position:50%_50%] 2xl:bg-no-repeat 2xl:cursor-default" data-cid="n244" aria-label="Previous slide" type="button">
                                        <span className="hidden 2xl:inline" data-cid="n245">
                                          Previous
                                        </span>
                                        <Icon2 cid={"n246"} />
                                      </button>
                                      <div className="hidden 2xl:block 2xl:relative 2xl:overflow-hidden" data-cid="n247">
                                        <div className="hidden 2xl:w-[1020.0625rem] 2xl:block 2xl:relative 2xl:mr-[-15462.3px] 2xl:transform-[matrix(1,0,0,1,-859,0)] before:content-[''] before:table before:w-0 before:h-0 max-lg:before:hidden after:content-[''] after:table after:w-0 after:h-0 max-lg:after:hidden" data-cid="n248">
                                          <div className="hidden 2xl:w-[53.6875rem] 2xl:h-[53.6875rem] 2xl:min-h-px 2xl:block 2xl:float-left" data-cid="n249">
                                            <div className="hidden 2xl:block 2xl:overflow-hidden" data-cid="n250">
                                              <div className="hidden 2xl:w-[53.5625rem] 2xl:block 2xl:relative 2xl:mx-px 2xl:pt-[53.6875rem]" data-cid="n251">
                                                <div className="hidden 2xl:w-[53.5625rem] 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:justify-center 2xl:items-center" data-cid="n252" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="hidden 2xl:w-[53.6875rem] 2xl:h-[53.6875rem] 2xl:min-h-px 2xl:block 2xl:float-left" data-cid="n253" aria-current="true">
                                            <div className="hidden 2xl:block 2xl:overflow-hidden" data-cid="n254">
                                              <div className="hidden 2xl:w-[53.5625rem] 2xl:block 2xl:relative 2xl:mx-px 2xl:pt-[53.6875rem]" data-cid="n255">
                                                <div className="hidden 2xl:w-[53.5625rem] 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:justify-center 2xl:items-center" data-cid="n256">
                                                  <button className="hidden 2xl:block 2xl:py-px 2xl:px-1.5 2xl:text-center 2xl:cursor-pointer" data-cid="n257" type="button">
                                                    <div className="hidden 2xl:block 2xl:relative" data-cid="n258">
                                                      <div className="hidden 2xl:block" data-cid="n259">
                                                        <picture className="hidden 2xl:inline" data-cid="n260">
                                                          <img className="hidden 2xl:w-full 2xl:h-[52.8125rem] 2xl:block 2xl:relative 2xl:max-w-full 2xl:overflow-clip 2xl:object-cover 2xl:[font-family:'object-fit:_cover;_object-position:_center;']" data-cid="n262" alt="Beo Grace in Honey Tone" sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src="/assets/cloned/images/bcd5b86c671e.png" />
                                                        </picture>
                                                      </div>
                                                    </div>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="hidden 2xl:w-[53.6875rem] 2xl:h-[53.6875rem] 2xl:min-h-px 2xl:block 2xl:float-left" data-cid="n263">
                                            <div className="hidden 2xl:block 2xl:overflow-hidden" data-cid="n264">
                                              <div className="hidden 2xl:w-[53.5625rem] 2xl:block 2xl:relative 2xl:mx-px 2xl:pt-[53.6875rem]" data-cid="n265">
                                                <div className="hidden 2xl:w-[53.5625rem] 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:justify-center 2xl:items-center" data-cid="n266">
                                                  <button className="hidden 2xl:block 2xl:py-px 2xl:px-1.5 2xl:text-center 2xl:cursor-pointer" data-cid="n267" type="button" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <button className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:right-30 2xl:bottom-8 2xl:z-999 2xl:-mr-20 2xl:mb-[0.3125rem] 2xl:py-px 2xl:px-1.5 2xl:rounded-[50%] 2xl:text-center 2xl:indent-[-9999px] 2xl:[background-position:50%_50%] 2xl:bg-no-repeat 2xl:cursor-default" data-cid="n268" aria-label="Next slide" type="button">
                                        <span className="hidden 2xl:inline" data-cid="n269">
                                          Next
                                        </span>
                                        <Icon3 cid={"n270"} />
                                      </button>
                                      <ul className="hidden 2xl:w-45 2xl:h-10 2xl:flex 2xl:absolute 2xl:bottom-8 2xl:left-8 2xl:max-w-45 2xl:pt-2.5 2xl:overflow-x-auto 2xl:overflow-y-hidden 2xl:text-center 2xl:[list-style-type:disc] 2xl:list-outside 2xl:transform-[matrix(1,0,0,1,-12,0)]" data-cid="n271">
                                        {ListRow2_data.map((d, i) => <ListRow2 key={i} d={d} cids={ListRow2_cids[i]} styles={ListRow2_styles[i]} />)}
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n290" />
                                  <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n291" />
                                  <div className="hidden 2xl:block" data-cid="n292">
                                    <div className="hidden 2xl:block" data-cid="n293">
                                      <button className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:top-12.5 2xl:right-[2.6rem] 2xl:rounded-[100%] 2xl:text-center 2xl:bg-background 2xl:cursor-pointer" data-cid="n294" type="button">
                                        <span className="hidden" data-cid="n295">
                                          Zoom in
                                        </span>
                                        <em className="hidden 2xl:w-4 2xl:h-4 2xl:block 2xl:relative 2xl:m-3 2xl:italic" data-cid="n296">
                                          <Icon4 cid={"n297"} />
                                          <Icon5 cid={"n298"} />
                                        </em>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n299" />
                                </div>
                              </div>
                              <div className="hidden 2xl:block" data-cid="n300" />
                            </div>
                            <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n301" />
                          </div>
                        </div>
                        <div className="hidden 2xl:h-[58.6875rem] 2xl:flex 2xl:relative 2xl:max-w-[24.0625rem] 2xl:ml-29 2xl:pt-10 2xl:px-4 2xl:flex-col 2xl:justify-center 2xl:items-stretch 2xl:flex-1" data-cid="n302">
                          <h3 className="hidden 2xl:w-[22.0625rem] 2xl:h-6.5 2xl:flex 2xl:flex-col 2xl:shrink-0 2xl:order-[1] 2xl:text-border 2xl:text-5xl 2xl:leading-16 2xl:tracking-[-0.5px] 2xl:[animation-name:cxjtGy] 2xl:[animation-duration:1.2s] 2xl:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] 2xl:[animation-delay:0.5s] 2xl:[animation-fill-mode:forwards]" data-cid="n303">
                            <span className="hidden 2xl:block 2xl:mb-2 2xl:text-[0.625rem] 2xl:leading-4.5 2xl:tracking-[2px] 2xl:uppercase" data-cid="n304">
                              Beo Grace
                            </span>
                            <span className="hidden 2xl:w-px 2xl:h-px 2xl:block 2xl:absolute 2xl:min-w-0 2xl:overflow-hidden" data-cid="n305">
                              {" "}
                            </span>
                          </h3>
                          <h2 className="hidden 2xl:w-[22.0625rem] 2xl:h-11 2xl:flex 2xl:flex-col 2xl:shrink-0 2xl:order-[1] 2xl:text-border 2xl:text-5xl 2xl:leading-16 2xl:tracking-[-0.5px] 2xl:[animation-name:cxjtGy] 2xl:[animation-duration:1.2s] 2xl:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] 2xl:[animation-delay:0.5s] 2xl:[animation-fill-mode:forwards]" data-cid="n306">
                            <span className="hidden 2xl:block 2xl:mb-2 2xl:text-2xl 2xl:leading-9 2xl:tracking-[normal]" data-cid="n307">
                              Advanced ANC earbuds
                            </span>
                          </h2>
                          <div className="hidden 2xl:w-[22.0625rem] 2xl:h-[8.5625rem] 2xl:flex 2xl:my-4 2xl:flex-col 2xl:flex-wrap 2xl:justify-between 2xl:items-start 2xl:order-[3] 2xl:[animation-name:cxjtGy] 2xl:[animation-duration:1.2s] 2xl:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] 2xl:[animation-delay:0.7s] 2xl:[animation-fill-mode:forwards]" data-cid="n308">
                            <div className="hidden 2xl:w-full 2xl:h-[6.3125rem] 2xl:block 2xl:grow" data-cid="n309">
                              <div className="hidden 2xl:block" data-cid="n310">
                                <div className="hidden 2xl:h-[4.3125rem] 2xl:border-t 2xl:border-solid 2xl:border-t-surface 2xl:border-b 2xl:border-b-surface 2xl:flex 2xl:relative 2xl:mb-8 2xl:py-[1.3125rem] 2xl:justify-between" data-cid="n311">
                                  <div className="hidden 2xl:w-0 2xl:h-[1.5625rem] 2xl:block 2xl:relative" data-cid="n312">
                                    <ul className="hidden 2xl:w-0 2xl:h-5 2xl:block 2xl:[list-style-type:none] 2xl:list-outside" data-cid="n313">
                                      <li className="hidden 2xl:w-30 2xl:h-[3.0625rem] 2xl:list-item 2xl:absolute 2xl:min-w-30" data-cid="n314" aria-hidden="false">
                                        <p className="hidden 2xl:block 2xl:mb-6 2xl:pt-[0.3125rem] 2xl:text-muted-foreground 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap" data-cid="n315">
                                          Honey Tone
                                        </p>
                                      </li>
                                      <li className="hidden" data-cid="n316" aria-hidden="true">
                                        <p className="hidden 2xl:block 2xl:mb-6 2xl:pt-[0.3125rem] 2xl:text-muted-foreground 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap" data-cid="n317">
                                          Natural Aluminium
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="hidden 2xl:h-[1.5625rem] 2xl:block 2xl:max-w-[14.0625rem] 2xl:self-center" data-cid="n318">
                                    <span className="hidden" data-cid="n319">
                                      Select a colour
                                    </span>
                                    <ul className="hidden 2xl:h-[1.5625rem] 2xl:flex 2xl:flex-wrap 2xl:justify-end 2xl:gap-2 2xl:[list-style-type:none] 2xl:list-outside" data-cid="n320">
                                      <li className="hidden 2xl:block" data-cid="n321" id="beograce-honey-tone-li">
                                        <div className="hidden 2xl:block 2xl:align-bottom" data-cid="n322">
                                          <div className="hidden 2xl:border 2xl:border-solid 2xl:border-border 2xl:block 2xl:rounded-[50%] 2xl:bg-background 2xl:cursor-pointer" data-cid="n323" aria-checked="true" aria-label="beograce-honey-tone" aria-labelledby="undefined - 0_swatch_atm_PDP_pDescription_swatchToggle-2-beograce-honey-tone" role="radio">
                                            <em className="hidden 2xl:w-[1.0625rem] 2xl:h-[1.0625rem] 2xl:block 2xl:relative 2xl:m-[0.1875rem] 2xl:rounded-[50%] 2xl:italic 2xl:bg-clr-4 2xl:[background-size:21px_21px] 2xl:[background-position:50%_50%]" data-cid="n324">
                                              <span className="hidden" data-cid="n325" id="undefined - 0_swatch_atm_PDP_pDescription_swatchToggle-2-beograce-honey-tone">
                                                Honey Tone
                                              </span>
                                            </em>
                                          </div>
                                          {" "}
                                        </div>
                                      </li>
                                      <li className="hidden 2xl:h-[1.5625rem] 2xl:block" data-cid="n326" id="beograce-natural-aluminium-li">
                                        <div className="hidden 2xl:block 2xl:align-bottom" data-cid="n327">
                                          <div className="hidden 2xl:border 2xl:border-solid 2xl:border-clr-5 2xl:block 2xl:rounded-[50%] 2xl:bg-background 2xl:cursor-pointer" data-cid="n328" aria-checked="false" aria-label="beograce-natural-aluminium" aria-labelledby="undefined - 1_swatch_atm_PDP_pDescription_swatchToggle-1-beograce-natural-aluminium" role="radio">
                                            <em className="hidden 2xl:w-[1.0625rem] 2xl:h-[1.0625rem] 2xl:block 2xl:relative 2xl:m-[0.1875rem] 2xl:rounded-[50%] 2xl:italic 2xl:bg-clr-6 2xl:[background-size:21px_21px] 2xl:[background-position:50%_50%]" data-cid="n329">
                                              <span className="hidden" data-cid="n330" id="undefined - 1_swatch_atm_PDP_pDescription_swatchToggle-1-beograce-natural-aluminium">
                                                Natural Aluminium
                                              </span>
                                            </em>
                                          </div>
                                          {" "}
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="hidden 2xl:w-[4.4375rem] 2xl:flex 2xl:shrink-0" data-cid="n331">
                              <div className="hidden 2xl:block" data-cid="n332">
                                <p className="hidden 2xl:block 2xl:text-muted-foreground 2xl:leading-6.5 2xl:tracking-[0.4px] 2xl:whitespace-pre-wrap" data-cid="n333">
                                  <span className="hidden 2xl:inline 2xl:text-border 2xl:text-2xl 2xl:leading-9 2xl:tracking-[normal]" data-cid="n334">
                                    $1,500
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="hidden 2xl:w-[18.125rem] 2xl:h-27 2xl:flex 2xl:mb-8 2xl:flex-col 2xl:self-start 2xl:order-[4] 2xl:text-right 2xl:[direction:rtl] 2xl:[animation-name:cxjtGy] 2xl:[animation-duration:1.2s] 2xl:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] 2xl:[animation-delay:0.8s] 2xl:[animation-fill-mode:forwards]" data-cid="n335">
                            <a className="hidden 2xl:w-[18.125rem] 2xl:h-11 2xl:min-h-10 2xl:border-2 2xl:border-solid 2xl:border-border 2xl:flex 2xl:relative 2xl:min-w-35 2xl:mb-2.5 2xl:py-2 2xl:px-8 2xl:rounded-[40px] 2xl:flex-row-reverse 2xl:justify-center 2xl:items-center 2xl:grow 2xl:text-border 2xl:font-medium 2xl:leading-6 2xl:tracking-[0.1px] 2xl:text-center 2xl:cursor-pointer" data-cid="n336" aria-label="Experience in store" href="https://stores.bang-olufsen.com/en/search?country=US" target="_self">
                              Experience in store
                            </a>
                            <button className="hidden 2xl:w-[18.125rem] 2xl:h-11 2xl:min-h-10 2xl:border-2 2xl:border-solid 2xl:border-border 2xl:flex 2xl:relative 2xl:min-w-35 2xl:mb-2.5 2xl:py-2 2xl:px-8 2xl:rounded-[40px] 2xl:flex-row-reverse 2xl:justify-center 2xl:items-center 2xl:grow 2xl:text-border 2xl:font-medium 2xl:leading-6 2xl:tracking-[0.1px] 2xl:text-center 2xl:cursor-pointer" data-cid="n337" aria-label="Choose country to shop online" type="button">
                              <span className="hidden 2xl:block 2xl:whitespace-nowrap" data-cid="n338">
                                Choose country to shop online
                              </span>
                              <span className="hidden" data-cid="n339">
                                secondary
                              </span>
                            </button>
                          </div>
                          <article className="hidden 2xl:w-[22.0625rem] 2xl:h-29 2xl:block 2xl:shrink-0 2xl:order-[2] 2xl:[animation-name:cxjtGy] 2xl:[animation-duration:1.2s] 2xl:[animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] 2xl:[animation-delay:0.6s] 2xl:[animation-fill-mode:forwards]" data-cid="n340" aria-label="Advanced ANC earbuds">
                            <p className="hidden 2xl:block 2xl:mb-4 2xl:text-border 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap" data-cid="n341">
                              True wireless earbuds with advanced noise cancellation and a hand polished, lightweight design. Immerse in your music distraction-free, with Beo Grace. Intuitively control playback or calls with a simple gesture. Enjoy clear call quality, optimised battery life, and all-day comfort.
                            </p>
                            <div className="hidden 2xl:block" data-cid="n342">
                              <div className="hidden 2xl:block" data-cid="n343" />
                              <div className="hidden 2xl:flex" data-cid="n344" />
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="hidden 2xl:h-[5.4375rem] 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n345">
                        <div className="hidden 2xl:w-368 2xl:h-[5.4375rem] 2xl:border-t 2xl:border-solid 2xl:border-t-foreground 2xl:block 2xl:max-w-full 2xl:px-4 2xl:shrink-0 2xl:basis-full" data-cid="n346">
                          <div className="hidden 2xl:block 2xl:py-[1.5625rem]" data-cid="n347">
                            <ul className="hidden 2xl:h-9 2xl:flex 2xl:justify-around 2xl:items-center 2xl:text-sm 2xl:leading-[1rem] 2xl:[list-style-type:none] 2xl:list-outside" data-cid="n348">
                              {MediaTile_data.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} />)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden 2xl:block" data-cid="n361">
                    <nav className="hidden" data-cid="n362">
                      <div className="hidden 2xl:h-18 2xl:flex 2xl:max-w-378 2xl:mx-51 2xl:px-9 2xl:justify-between 2xl:items-center 2xl:[list-style-type:none] 2xl:list-outside 2xl:bg-background" data-cid="n363">
                        <li className="hidden 2xl:flex 2xl:relative 2xl:items-center 2xl:gap-4" data-cid="n364">
                          <span className="hidden 2xl:flex 2xl:relative 2xl:items-center 2xl:gap-4 2xl:text-border 2xl:font-medium 2xl:leading-6 2xl:tracking-[2px] 2xl:uppercase" data-cid="n365">
                            Beo Grace
                          </span>
                        </li>
                        <div className="hidden 2xl:flex 2xl:justify-between 2xl:items-center 2xl:gap-5" data-cid="n366">
                          <li className="hidden 2xl:list-item 2xl:mr-5" data-cid="n367">
                            <div className="hidden 2xl:block" data-cid="n368">
                              <a className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:cursor-pointer" data-cid="n369" aria-current="false" href="/en/int/earphones/beograce#inspiration">
                                <span className="hidden 2xl:inline 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]" data-cid="n370">
                                  Features
                                </span>
                              </a>
                            </div>
                          </li>
                          <li className="hidden 2xl:list-item 2xl:mr-5" data-cid="n371">
                            <div className="hidden 2xl:block" data-cid="n372">
                              <a className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:cursor-pointer" data-cid="n373" aria-current="true" href="/en/int/earphones/beograce#technicalSpecifications">
                                <span className="hidden 2xl:border-b 2xl:border-solid 2xl:border-b-border 2xl:inline 2xl:bottom-1 2xl:pb-0.5 2xl:text-border 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]" data-cid="n374">
                                  Tech Specs
                                </span>
                              </a>
                            </div>
                          </li>
                          <a className="hidden 2xl:w-[4.4rem] 2xl:border 2xl:border-solid 2xl:border-clr-2 2xl:block 2xl:relative 2xl:min-w-14 2xl:py-2 2xl:px-5 2xl:rounded-[40px] 2xl:text-color-001 2xl:text-xs 2xl:font-medium 2xl:leading-4.5 2xl:tracking-[0.1px] 2xl:bg-border 2xl:cursor-pointer" data-cid="n375" aria-label="Shop" href="#overview" target="_self">
                            Shop
                          </a>
                        </div>
                      </div>
                    </nav>
                    <div className="hidden 2xl:h-[19128.3px] 2xl:block" data-cid="n376" aria-hidden="false">
                      <div className="hidden 2xl:block 2xl:text-border 2xl:bg-background" data-cid="n377" id="inspiration">
                        <div className="hidden 2xl:h-[981.4125rem] 2xl:block" data-cid="n378">
                          <div className="hidden 2xl:block 2xl:relative" data-cid="n379">
                            <div className="hidden 2xl:h-264 2xl:block 2xl:relative" data-cid="n380">
                              <div className="hidden 2xl:h-full 2xl:block 2xl:relative" data-cid="n381" aria-label="Rich Media Video" role="group">
                                <div className="hidden 2xl:h-full 2xl:flex 2xl:relative 2xl:flex-1" data-cid="n382">
                                  <div className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:min-w-0" data-cid="n383">
                                    <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n384" />
                                    <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n385" />
                                    <div className="hidden 2xl:block" data-cid="n386">
                                      <div className="hidden 2xl:block" data-cid="n387">
                                        <video className="hidden 2xl:w-480 2xl:h-264 2xl:block 2xl:absolute 2xl:overflow-clip 2xl:object-cover" data-cid="n388" autoPlay loop playsInline preload="auto">
                                          <source className="hidden" data-cid="n389" src="/assets/cloned/videos/270fe397655a.mp4" type="video/mp4" />
                                        </video>
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n390" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n391">
                              <div className="hidden 2xl:h-full 2xl:block 2xl:relative 2xl:max-w-425 2xl:mx-27.5" data-cid="n392">
                                <div className="hidden 2xl:w-150 2xl:h-72 2xl:block 2xl:absolute 2xl:z-1 2xl:max-w-150 2xl:py-20 2xl:px-21.5 2xl:shrink-0 2xl:basis-[41.6667%] 2xl:text-left" data-cid="n393">
                                  <p className="hidden 2xl:block 2xl:mb-6 2xl:text-background 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n394">
                                    Beo Grace lights the way for next-level sound. Formed from natural aluminium. Hand polished to a shine. A testament to 100 years of know-how. A sculptural symbol for the century ahead.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden 2xl:block 2xl:bg-background" data-cid="n395">
                            <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:py-15 2xl:px-9" data-cid="n396">
                              <div className="hidden 2xl:block 2xl:bg-background" data-cid="n397">
                                <div className="hidden 2xl:h-176 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n398">
                                  <div className="hidden 2xl:w-184 2xl:block 2xl:max-w-[50%] 2xl:px-4 2xl:shrink-0 2xl:basis-1/2" data-cid="n399">
                                    <div className="hidden 2xl:flex 2xl:items-center" data-cid="n400">
                                      <div className="hidden 2xl:w-full 2xl:block" data-cid="n401">
                                        <div className="hidden 2xl:block" data-cid="n402">
                                          <a className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:cursor-pointer" data-cid="n403" href="/en/int/story/spatial-audio">
                                            <div className="hidden 2xl:block 2xl:overflow-hidden" data-cid="n404">
                                              <div className="hidden 2xl:block" data-cid="n405">
                                                <div className="hidden 2xl:block 2xl:relative 2xl:aspect-square" data-cid="n406" role="presentation">
                                                  <span className="hidden 2xl:w-176 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n407">
                                                    <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n408" alt="One of Beo Grace earphone placed on a sea shell" sizes="100vw" src="/assets/cloned/images/a90013b4e81c.webp" srcSet="/assets/cloned/images/b73d196dede3.webp 640w, /assets/cloned/images/4b8803684256.webp 750w, /assets/cloned/images/16187b13fd51.webp 828w, /assets/cloned/images/adbe66ad18a1.webp 1080w, /assets/cloned/images/cc0e5df7cddf.webp 1200w, /assets/cloned/images/6e0558bbff04.webp 1920w, /assets/cloned/images/213fe907c8cd.webp 2048w, /assets/cloned/images/a90013b4e81c.webp 3840w" />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:h-176 2xl:block 2xl:max-w-[50%] 2xl:px-4 2xl:shrink-0 2xl:basis-1/2" data-cid="n409">
                                    <div className="hidden 2xl:h-full 2xl:flex 2xl:-mx-4 2xl:py-15 2xl:flex-wrap" data-cid="n410">
                                      <div className="hidden 2xl:h-146 2xl:flex 2xl:max-w-[66.6667%] 2xl:ml-[122.7px] 2xl:px-4 2xl:flex-col 2xl:justify-center 2xl:shrink-0 2xl:basis-2/3" data-cid="n411">
                                        <div className="hidden 2xl:h-[16.5625rem] 2xl:block" data-cid="n412">
                                          <h3 className="hidden 2xl:block 2xl:mb-8 2xl:text-2xl 2xl:leading-9" data-cid="n413">
                                            Boundless sound
                                          </h3>
                                          <div className="hidden 2xl:block 2xl:leading-6.5 2xl:tracking-[0.2px]" data-cid="n414">
                                            <p className="hidden 2xl:block 2xl:whitespace-pre-wrap" data-cid="n415">
                                              Beo Grace is designed around an entirely new acoustic architecture, perfected by our engineers to deliver sound with remarkable fidelity. At the heart is a 12 mm titanium driver, producing deeper bass with detailed highs.
                                            </p>
                                            <p className="hidden 2xl:block 2xl:mt-[0.9375rem] 2xl:whitespace-pre-wrap" data-cid="n416">
                                              Optimised for Dolby Atmos, Beo Grace isn’t just listening to music. It draws you in to the sound, until you hear it and feel it, in all its vibrancy and depth.
                                            </p>
                                          </div>
                                        </div>
                                        <div className="hidden 2xl:w-[19.0625rem] 2xl:h-22 2xl:flex 2xl:flex-col" data-cid="n417">
                                          <div className="hidden 2xl:h-22 2xl:block" data-cid="n418">
                                            <div className="hidden 2xl:block" data-cid="n419">
                                              <a className="hidden 2xl:w-[19.0625rem] 2xl:h-10 2xl:border-2 2xl:border-solid 2xl:border-border 2xl:flex 2xl:relative 2xl:min-w-35 2xl:mt-12 2xl:py-2 2xl:px-8 2xl:rounded-[40px] 2xl:justify-center 2xl:flex-1 2xl:overflow-hidden 2xl:font-medium 2xl:leading-5 2xl:tracking-[0.1px] 2xl:text-center 2xl:cursor-pointer 2xl:whitespace-nowrap" data-cid="n420" aria-label="Learn more about Spatial audio" href="/en/int/story/spatial-audio" target="_self">
                                                Learn more about Spatial audio
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden 2xl:block 2xl:relative" data-cid="n421">
                            <div className="hidden 2xl:h-480 2xl:block 2xl:relative" data-cid="n422">
                              <span className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n423">
                                <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n424" alt="A couple lying down together on the grass wearing Beo Grace earbuds and enjoying their time" sizes="100vw" src="/assets/cloned/images/f37d445d27f0.png" srcSet="/assets/cloned/images/eb43153e9fbd.png 640w, /assets/cloned/images/090635ce1701.png 750w, /assets/cloned/images/e969d11c648c.png 828w, /assets/cloned/images/cbc4b6274a26.png 1080w, /assets/cloned/images/3d0b3c7dbe0c.png 1200w, /assets/cloned/images/37547b7946ea.png 1920w, /assets/cloned/images/9ce7a455fe46.png 2048w, /assets/cloned/images/f37d445d27f0.png 3840w" />
                              </span>
                            </div>
                            <div className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n425">
                              <div className="hidden 2xl:h-full 2xl:block 2xl:relative 2xl:max-w-425 2xl:mx-27.5" data-cid="n426">
                                <div className="hidden 2xl:w-150 2xl:h-40 2xl:block 2xl:absolute 2xl:bottom-0 2xl:z-1 2xl:max-w-150 2xl:py-20 2xl:px-21.5 2xl:shrink-0 2xl:basis-[41.6667%] 2xl:text-left" data-cid="n427" />
                              </div>
                            </div>
                          </div>
                          <div className="hidden 2xl:block 2xl:text-center 2xl:bg-background" data-cid="n428">
                            <div className="hidden 2xl:h-110 2xl:flex 2xl:max-w-378 2xl:mx-51 2xl:py-21 2xl:px-22 2xl:flex-col 2xl:items-center" data-cid="n429">
                              <h2 className="hidden 2xl:block 2xl:pt-4 2xl:text-5xl 2xl:leading-16 2xl:tracking-[-0.5px]" data-cid="n430">
                                Beo Grace tailors sound and silence in real time to give you a personalised listening experience. Where focus flows, and distraction fades into the horizon.
                              </h2>
                            </div>
                          </div>
                          {MediaCard_data.map((d, i) => <MediaCard key={i} d={d} cids={MediaCard_cids[i]} styles={MediaCard_styles[i]} />)}
                          <div className="hidden 2xl:w-480 2xl:h-27 2xl:block 2xl:relative 2xl:bg-background" data-cid="n470" />
                          <div className="hidden 2xl:block 2xl:bg-background" data-cid="n471">
                            <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:py-15 2xl:px-9" data-cid="n472">
                              <div className="hidden 2xl:h-[132.9875rem] 2xl:flex 2xl:relative" data-cid="n473">
                                <div className="hidden 2xl:w-[51.0375rem] 2xl:h-[132.9875rem] 2xl:flex 2xl:mr-8 2xl:flex-col" data-cid="n474">
                                  <h2 className="hidden 2xl:block 2xl:mb-4 2xl:text-4xl 2xl:leading-13.5 2xl:tracking-[-0.5px]" data-cid="n475">
                                    The art of aluminium
                                  </h2>
                                  <div className="hidden 2xl:w-[465.5px] 2xl:h-[50.6125rem] 2xl:block 2xl:relative" data-cid="n476">
                                    <div className="hidden 2xl:block 2xl:mb-14" data-cid="n477">
                                      <div className="hidden 2xl:block 2xl:relative 2xl:mb-4 2xl:aspect-[4/5]" data-cid="n478">
                                        <span className="hidden 2xl:w-[465.5px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n479">
                                          <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n480" alt="Pair of Beo Grace on the grass showing the aluminium bar of the earphones" sizes="100vw" src="/assets/cloned/images/e530261a5391.webp" srcSet="/assets/cloned/images/4800d7fae21a.webp 640w, /assets/cloned/images/5b592add3c20.webp 750w, /assets/cloned/images/8061a96e2c81.webp 828w, /assets/cloned/images/a740d2aa9d21.webp 1080w, /assets/cloned/images/5fcb88846883.webp 1200w, /assets/cloned/images/7d36505ea222.webp 1920w, /assets/cloned/images/c3ebbf04173e.webp 2048w, /assets/cloned/images/e530261a5391.webp 3840w" />
                                        </span>
                                      </div>
                                      <p className="hidden 2xl:block 2xl:font-bold 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n481">
                                        Beauty in every detail
                                      </p>
                                      <p className="hidden 2xl:block 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n482">
                                        Where acoustic precision meets extraordinary form. As sculptural as jewellery, engineered for high performance. Crafted from raw aluminium and finished in a high-shine mirror hand polished, every surface catches the light – a reflection of our obsession with finding beauty in the details.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:h-[78rem] 2xl:block 2xl:relative" data-cid="n483">
                                    <div className="hidden 2xl:block" data-cid="n484">
                                      <div className="hidden 2xl:block 2xl:relative 2xl:mb-4 2xl:aspect-[7/9]" data-cid="n485">
                                        <span className="hidden 2xl:w-[51.0375rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n486">
                                          <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n487" alt="Beo Grace Charging case opened, showing the earphones inside on the grass" sizes="100vw" src="/assets/cloned/images/700163ef6659.webp" srcSet="/assets/cloned/images/93a031f060ae.webp 640w, /assets/cloned/images/8eb8309f8ef4.webp 750w, /assets/cloned/images/02b3f8c45c2f.webp 828w, /assets/cloned/images/8b8430bbf903.webp 1080w, /assets/cloned/images/afd1619b2953.webp 1200w, /assets/cloned/images/b030996e6f74.webp 1920w, /assets/cloned/images/1cf6fec0f512.webp 2048w, /assets/cloned/images/700163ef6659.webp 3840w" />
                                        </span>
                                      </div>
                                      <p className="hidden 2xl:block 2xl:font-bold 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n488">
                                        Encased in innovation
                                      </p>
                                      <p className="hidden 2xl:w-[465.5px] 2xl:block 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n489">
                                        Precision-crafted from aluminium with a pearl-blasted matte finish, the front edges of the lid diamond cut and hand polished. The result? A case that feels as contemporary as the earbuds it protects. Cool to the touch. Made to be held. A continuation of our commitment to work exclusively with rich, honest materials.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="hidden 2xl:w-[36.9625rem] 2xl:h-[132.9875rem] 2xl:block" data-cid="n490">
                                  <div className="hidden 2xl:h-full 2xl:block 2xl:relative" data-cid="n491">
                                    <div className="hidden 2xl:block 2xl:max-w-full 2xl:px-4 2xl:shrink-0" data-cid="n492">
                                      <div className="hidden 2xl:block 2xl:relative 2xl:mb-4 2xl:aspect-[5/7]" data-cid="n493">
                                        <span className="hidden 2xl:w-[34.9625rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n494">
                                          <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n495" alt="Beo Grace earphone on a big flower leaf showing how light it is" sizes="100vw" src="/assets/cloned/images/8267429698bd.webp" srcSet="/assets/cloned/images/1fa65b484c68.webp 640w, /assets/cloned/images/6bd5285af992.webp 750w, /assets/cloned/images/fc6d75954bc0.webp 828w, /assets/cloned/images/3ff7df35e890.webp 1080w, /assets/cloned/images/fc36a7e58da6.webp 1200w, /assets/cloned/images/1e49ac6d97cb.webp 1920w, /assets/cloned/images/071ef3c3f679.webp 2048w, /assets/cloned/images/8267429698bd.webp 3840w" />
                                        </span>
                                      </div>
                                      <p className="hidden 2xl:block 2xl:font-bold 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n496">
                                        Form that fits you
                                      </p>
                                      <p className="hidden 2xl:w-[447.5px] 2xl:block 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n497">
                                        Sculpted for exceptional ergonomics, perfected through years of research. Beo Grace features a 15% smaller design and new oval eartips in four sizes, for a tailored fit. Listen anytime, anywhere, without ever having to compromise on comfort.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden 2xl:block 2xl:bg-background" data-cid="n498">
                            <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:py-15 2xl:px-9" data-cid="n499">
                              <div className="hidden 2xl:block 2xl:bg-background" data-cid="n500">
                                <div className="hidden 2xl:h-176 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n501">
                                  <div className="hidden 2xl:w-184 2xl:block 2xl:max-w-[50%] 2xl:px-4 2xl:shrink-0 2xl:basis-1/2" data-cid="n502">
                                    <div className="hidden 2xl:flex 2xl:items-center" data-cid="n503">
                                      <div className="hidden 2xl:w-full 2xl:block" data-cid="n504">
                                        <div className="hidden 2xl:block" data-cid="n505">
                                          <a className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:cursor-pointer" data-cid="n506" target="_tabbedOverlay">
                                            <div className="hidden 2xl:block 2xl:overflow-hidden" data-cid="n507">
                                              <div className="hidden 2xl:block" data-cid="n508">
                                                <div className="hidden 2xl:block 2xl:relative 2xl:aspect-square" data-cid="n509" role="presentation">
                                                  <span className="hidden 2xl:w-176 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n510">
                                                    <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n511" alt="Image of Beo Grace honey tone case with red background" sizes="100vw" src="/assets/cloned/images/c4a16e721ff5.webp" srcSet="/assets/cloned/images/9a0c7e15a7c3.webp 640w, /assets/cloned/images/9c1b23ac07a4.webp 750w, /assets/cloned/images/814c9b5e1c3c.webp 828w, /assets/cloned/images/3142acfd3e2d.webp 1080w, /assets/cloned/images/3dbfcf547bae.webp 1200w, /assets/cloned/images/99045be8ead0.webp 1920w, /assets/cloned/images/06343f34f71f.webp 2048w, /assets/cloned/images/c4a16e721ff5.webp 3840w" />
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:h-176 2xl:block 2xl:max-w-[50%] 2xl:px-4 2xl:shrink-0 2xl:basis-1/2" data-cid="n512">
                                    <div className="hidden 2xl:h-full 2xl:flex 2xl:-mx-4 2xl:py-15 2xl:flex-wrap" data-cid="n513">
                                      <div className="hidden 2xl:h-146 2xl:flex 2xl:max-w-[66.6667%] 2xl:ml-[122.7px] 2xl:px-4 2xl:flex-col 2xl:justify-center 2xl:shrink-0 2xl:basis-2/3" data-cid="n514">
                                        <div className="hidden 2xl:h-41.5 2xl:block" data-cid="n515">
                                          <h3 className="hidden 2xl:block 2xl:mb-8 2xl:text-foreground 2xl:text-2xl 2xl:leading-9" data-cid="n516">
                                            Built to take you further​
                                          </h3>
                                          <span className="hidden 2xl:inline" data-cid="n517">
                                            <p className="hidden 2xl:block 2xl:mb-5 2xl:text-foreground 2xl:leading-6.5 2xl:tracking-[0.4px] 2xl:whitespace-pre-wrap" data-cid="n518">
                                              Beo Grace is built around a carefully designed battery management system engineered to last up to 2000 cycles.* That’s 4x more than the industry standard.
                                            </p>
                                          </span>
                                        </div>
                                        <div className="hidden 2xl:w-[19.925rem] 2xl:h-19.5 2xl:flex 2xl:flex-col" data-cid="n519">
                                          <div className="hidden 2xl:h-19.5 2xl:block" data-cid="n520">
                                            <div className="hidden 2xl:block" data-cid="n521">
                                              <button className="hidden 2xl:h-7.5 2xl:border-2 2xl:border-solid 2xl:border-clr-2 2xl:flex 2xl:relative 2xl:mt-12 2xl:justify-center 2xl:items-center 2xl:flex-1 2xl:gap-3 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:text-center 2xl:cursor-pointer before:content-[''] before:block before:absolute before:top-[24.5px] before:right-0 before:bottom-0 before:left-[2.3125rem] before:w-[17.3625rem] before:h-[1.5px] before:bg-border before:transform-[matrix(0,1.74533e-05,0,1,0,0)] before:origin-[0px_0.75px] max-lg:before:hidden after:content-[''] after:block after:absolute after:top-[24.5px] after:right-0 after:bottom-0 after:left-[2.3125rem] after:w-[17.3625rem] after:h-[1.5px] after:bg-border after:transform-[matrix(0,1.74533e-05,0,1,0,0)] after:origin-[277.812px_0.75px] max-lg:after:hidden" data-cid="n522" aria-label="Learn more about Adaptive Charging (Open in tab overlay)" type="button">
                                                <span className="hidden 2xl:w-6 2xl:h-6 2xl:block 2xl:relative" data-cid="n523" />
                                                Learn more about Adaptive Charging
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden 2xl:block" data-cid="n524">
                            <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:py-15 2xl:px-9" data-cid="n525">
                              <h2 className="hidden 2xl:block 2xl:mb-8 2xl:py-2 2xl:text-4xl 2xl:leading-13.5 2xl:tracking-[-0.5px] 2xl:text-center" data-cid="n526" />
                              <div className="hidden 2xl:h-172 2xl:flex 2xl:-mx-4 2xl:px-4 2xl:flex-wrap 2xl:gap-y-8" data-cid="n527">
                                <div className="hidden 2xl:w-180 2xl:block 2xl:max-w-[50%] 2xl:px-4 2xl:shrink-0 2xl:basis-1/2 2xl:order-[2]" data-cid="n528">
                                  <div className="hidden 2xl:block 2xl:relative 2xl:aspect-square" data-cid="n529">
                                    <div className="hidden 2xl:w-172 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n530">
                                      <span className="hidden 2xl:w-172 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n531">
                                        <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n532" alt="Beo Grace aluminium charging case with the wire getting about to be attached" sizes="100vw" src="/assets/cloned/images/f6be9140776b.webp" srcSet="/assets/cloned/images/77b328694cd8.webp 640w, /assets/cloned/images/8a21ac3e29ce.webp 750w, /assets/cloned/images/1631f71c2e2e.webp 828w, /assets/cloned/images/fa773898af1b.webp 1080w, /assets/cloned/images/dfc82a093ccb.webp 1200w, /assets/cloned/images/1334ba689618.webp 1920w, /assets/cloned/images/c0e327fd4342.webp 2048w, /assets/cloned/images/f6be9140776b.webp 3840w" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="hidden 2xl:h-172 2xl:flex 2xl:max-w-[50%] 2xl:py-15 2xl:flex-col 2xl:shrink-0 2xl:basis-1/2 2xl:order-[-1]" data-cid="n533">
                                  <div className="hidden 2xl:h-[32.6875rem] 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n534">
                                    <div className="hidden 2xl:w-[501.3px] 2xl:h-[32.6875rem] 2xl:flex 2xl:max-w-[66.6667%] 2xl:ml-[125.3px] 2xl:px-4 2xl:flex-col 2xl:justify-center 2xl:shrink-0 2xl:basis-2/3" data-cid="n535">
                                      <div className="hidden 2xl:h-6.5 2xl:block 2xl:mb-8" data-cid="n536">
                                        <div className="hidden 2xl:block 2xl:relative" data-cid="n537">
                                          <div className="hidden 2xl:h-6.5 2xl:flex 2xl:relative 2xl:overflow-auto 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:[list-style-type:disc] 2xl:list-outside" data-cid="n538" role="tablist">
                                            <li className="hidden 2xl:w-42.5 2xl:h-6.5 2xl:flex 2xl:mr-6 2xl:py-[0.1875rem] 2xl:shrink-0 2xl:gap-0.5 2xl:[list-style-type:none]" data-cid="n539" aria-label="Stream from your case" aria-selected="true" id="tab-Stream from your case" role="tab">
                                              <button className="hidden 2xl:block 2xl:text-[0.625rem] 2xl:leading-4.5 2xl:tracking-[2px] 2xl:text-center 2xl:uppercase 2xl:cursor-pointer" data-cid="n540" type="button">
                                                Stream from your case
                                              </button>
                                            </li>
                                            <li className="hidden 2xl:w-38.5 2xl:h-6.5 2xl:flex 2xl:py-[0.1875rem] 2xl:shrink-0 2xl:gap-0.5 2xl:[list-style-type:none]" data-cid="n541" aria-label="Charging and lights" aria-selected="false" id="tab-Charging and lights" role="tab">
                                              <button className="hidden 2xl:block 2xl:text-[0.625rem] 2xl:leading-4.5 2xl:tracking-[2px] 2xl:text-center 2xl:uppercase 2xl:cursor-pointer" data-cid="n542" type="button">
                                                Charging and lights
                                              </button>
                                            </li>
                                            <div className="hidden 2xl:w-42.5 2xl:h-[1.5px] 2xl:block 2xl:absolute 2xl:bottom-0 2xl:bg-foreground" data-cid="n543" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="hidden 2xl:h-[15.9375rem] 2xl:block" data-cid="n544">
                                        <h3 className="hidden 2xl:block 2xl:mb-8 2xl:text-2xl 2xl:leading-9" data-cid="n545">
                                          Stream from your case
                                        </h3>
                                        <div className="hidden 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:block 2xl:mb-8 2xl:pb-6" data-cid="n546">
                                          <span className="hidden 2xl:inline" data-cid="n547">
                                            <p className="hidden 2xl:block 2xl:leading-6.5 2xl:tracking-[0.4px] 2xl:whitespace-pre-wrap" data-cid="n548">
                                              Turn your case into a wireless audio transmitter. Just plug it into any device with USB-C or line-in, and it instantly streams low-latency sound to your earbuds. Perfect for in-flight entertainment, catching up on shows from your laptop, or diving into your favorite game console.
                                            </p>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="hidden 2xl:h-52.5 2xl:block" data-cid="n549">
                                        <p className="hidden 2xl:block 2xl:pb-1.5 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap" data-cid="n550">
                                          Connectivity
                                        </p>
                                        <span className="hidden 2xl:inline" data-cid="n551">
                                          <p className="hidden 2xl:h-15 2xl:block 2xl:mb-8 2xl:text-muted-foreground 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap" data-cid="n552">
                                            <b className="hidden 2xl:inline 2xl:font-bold" data-cid="n553">
                                              {"Case USB-Audio\n"}
                                            </b>
                                            {"LC3+, LE Audio Hi-Res, streaming up to 96kHz, 16/24 bit via case USB-C connection\nFrequency range: 10-40,000Hz"}
                                          </p>
                                          <p className="hidden 2xl:h-15 2xl:block 2xl:mt-[0.9375rem] 2xl:mb-8 2xl:text-muted-foreground 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap" data-cid="n554">
                                            <b className="hidden 2xl:inline 2xl:font-bold" data-cid="n555">
                                              Case Line-in
                                            </b>
                                            {"\nLC3, LE Audio, streaming up to 48kHz, 24bit via case 3,5mm jack connection\nFrequency range: 10-20,000Hz"}
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden 2xl:w-480 2xl:h-27 2xl:block 2xl:relative 2xl:bg-background" data-cid="n556" />
                          <div className="hidden 2xl:block 2xl:py-15" data-cid="n557">
                            <div className="hidden 2xl:block" data-cid="n558">
                              <div className="hidden 2xl:block 2xl:bg-clr-0" data-cid="n559">
                                <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:py-15 2xl:px-9" data-cid="n560">
                                  <div className="hidden 2xl:h-[29.425rem] 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n561">
                                    <div className="hidden 2xl:w-[858.7px] 2xl:flex 2xl:max-w-[58.3333%] 2xl:px-4 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:basis-[58.3333%]" data-cid="n562">
                                      <div className="hidden 2xl:block" data-cid="n563">
                                        <div className="hidden 2xl:block" data-cid="n564">
                                          <a className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:cursor-pointer" data-cid="n565" aria-label="Red pouch for beograce" href="/en/int/accessories/beograce-pouch?variant=beograce-leather-pouch-cranberry-red?variant=beograce-leather-pouch-cranberry-red">
                                            <div className="hidden 2xl:block 2xl:relative 2xl:overflow-hidden 2xl:text-center" data-cid="n566">
                                              <div className="hidden 2xl:block" data-cid="n567">
                                                <picture className="hidden 2xl:inline" data-cid="n568">
                                                  <img className="hidden 2xl:w-[51.6875rem] 2xl:h-[29.0625rem] 2xl:block 2xl:relative 2xl:max-w-full 2xl:overflow-clip" data-cid="n570" alt="Red pouch for beograce" sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px" src="/assets/cloned/images/0812de0dd4f7.webp" />
                                                </picture>
                                              </div>
                                            </div>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:h-[25.675rem] 2xl:flex 2xl:max-w-[25%] 2xl:mt-15 2xl:ml-[122.7px] 2xl:px-4 2xl:flex-col 2xl:items-center 2xl:shrink-0 2xl:basis-1/4 2xl:text-center" data-cid="n571">
                                      <h2 className="hidden 2xl:block 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:uppercase" data-cid="n572">
                                        Beo Grace Leather Case
                                      </h2>
                                      <div className="hidden 2xl:h-[5.5875rem] 2xl:block 2xl:mb-4.5 2xl:order-[1]" data-cid="n573">
                                        <div className="hidden 2xl:block" data-cid="n574">
                                          <div className="hidden 2xl:block" data-cid="n575">
                                            <div className="hidden 2xl:block" data-cid="n576">
                                              <span className="hidden" data-cid="n577">
                                                Select a colour
                                              </span>
                                              <ul className="hidden 2xl:h-[1.9rem] 2xl:block 2xl:max-w-75 2xl:mt-[0.3125rem] 2xl:[list-style-type:none] 2xl:list-outside" data-cid="n578">
                                                <li className="hidden 2xl:h-[1.5625rem] 2xl:inline-block 2xl:mt-0.5 2xl:mr-5" data-cid="n579" id="1-li">
                                                  <div className="hidden 2xl:block 2xl:align-bottom" data-cid="n580">
                                                    <div className="hidden 2xl:border 2xl:border-solid 2xl:border-border 2xl:block 2xl:rounded-[50%] 2xl:bg-background 2xl:cursor-pointer" data-cid="n581" aria-checked="true" aria-label="1" aria-labelledby="undefined - 0_swatch_atm_ProductCrossSellUpSellWrapper_colorSwatch-3-1" role="radio">
                                                      <em className="hidden 2xl:w-[1.0625rem] 2xl:h-[1.0625rem] 2xl:block 2xl:relative 2xl:m-[0.1875rem] 2xl:rounded-[50%] 2xl:italic 2xl:bg-clr-7 2xl:[background-size:21px_21px] 2xl:[background-position:50%_50%]" data-cid="n582">
                                                        <span className="hidden" data-cid="n583" id="undefined - 0_swatch_atm_ProductCrossSellUpSellWrapper_colorSwatch-3-1">
                                                          Cranberry Red
                                                        </span>
                                                      </em>
                                                    </div>
                                                    {" "}
                                                  </div>
                                                </li>
                                                <li className="hidden 2xl:h-[1.5625rem] 2xl:inline-block 2xl:mt-0.5 2xl:mr-5" data-cid="n584" id="2-li">
                                                  <div className="hidden 2xl:block 2xl:align-bottom" data-cid="n585">
                                                    <div className="hidden 2xl:border 2xl:border-solid 2xl:border-clr-5 2xl:block 2xl:rounded-[50%] 2xl:bg-background 2xl:cursor-pointer" data-cid="n586" aria-checked="false" aria-label="2" aria-labelledby="undefined - 1_swatch_atm_ProductCrossSellUpSellWrapper_colorSwatch-4-2" role="radio">
                                                      <em className="hidden 2xl:w-[1.0625rem] 2xl:h-[1.0625rem] 2xl:block 2xl:relative 2xl:m-[0.1875rem] 2xl:rounded-[50%] 2xl:italic 2xl:bg-clr-8 2xl:[background-size:21px_21px] 2xl:[background-position:50%_50%]" data-cid="n587">
                                                        <span className="hidden" data-cid="n588" id="undefined - 1_swatch_atm_ProductCrossSellUpSellWrapper_colorSwatch-4-2">
                                                          Seashell Grey
                                                        </span>
                                                      </em>
                                                    </div>
                                                    {" "}
                                                  </div>
                                                </li>
                                                <li className="hidden 2xl:h-[1.5625rem] 2xl:inline-block" data-cid="n589" id="3-li">
                                                  <div className="hidden 2xl:block 2xl:align-bottom" data-cid="n590">
                                                    <div className="hidden 2xl:border 2xl:border-solid 2xl:border-clr-5 2xl:block 2xl:rounded-[50%] 2xl:bg-background 2xl:cursor-pointer" data-cid="n591" aria-checked="false" aria-label="3" aria-labelledby="undefined - 2_swatch_atm_ProductCrossSellUpSellWrapper_colorSwatch-2-3" role="radio">
                                                      <em className="hidden 2xl:w-[1.0625rem] 2xl:h-[1.0625rem] 2xl:block 2xl:relative 2xl:m-[0.1875rem] 2xl:rounded-[50%] 2xl:italic 2xl:bg-clr-9 2xl:[background-size:21px_21px] 2xl:[background-position:50%_50%]" data-cid="n592">
                                                        <span className="hidden" data-cid="n593" id="undefined - 2_swatch_atm_ProductCrossSellUpSellWrapper_colorSwatch-2-3">
                                                          Infinite black
                                                        </span>
                                                      </em>
                                                    </div>
                                                    {" "}
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <p className="hidden 2xl:block 2xl:mt-4.5 2xl:order-[1] 2xl:text-muted-foreground 2xl:text-2xl 2xl:leading-9 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n594">
                                          Cranberry Red
                                        </p>
                                      </div>
                                      <p className="hidden 2xl:block 2xl:order-[1] 2xl:text-muted-foreground 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n595">
                                        {"Introducing our exquisite leather earbuds pouch, crafted in Italy. Soft to the touch, it offers a natural fit, ensuring your earbuds are always ready to accompany you. Equipped with a convenient strap, this pouch is designed to be by your side, always. "}
                                      </p>
                                      <div className="hidden 2xl:block 2xl:mt-[0.9375rem] 2xl:order-[1] 2xl:text-2xl 2xl:leading-9" data-cid="n596">
                                        <span className="hidden 2xl:inline" data-cid="n597">
                                          $400
                                        </span>
                                      </div>
                                      <div className="hidden 2xl:h-[2.9625rem] 2xl:block 2xl:mt-[1.5625rem] 2xl:order-[1]" data-cid="n598">
                                        <div className="hidden 2xl:h-[2.9625rem] 2xl:block" data-cid="n599">
                                          <a className="hidden 2xl:w-[172.3px] 2xl:h-11 2xl:border-2 2xl:border-solid 2xl:border-border 2xl:inline-block 2xl:relative 2xl:min-w-35 2xl:py-2 2xl:px-8 2xl:rounded-[40px] 2xl:overflow-hidden 2xl:font-medium 2xl:leading-6 2xl:tracking-[0.1px] 2xl:cursor-pointer 2xl:whitespace-nowrap" data-cid="n600" aria-label="ProductCrossSellUpSell : Discover more" href="/en/int/accessories/beograce-pouch?variant=beograce-leather-pouch-cranberry-red" target="_self">
                                            Discover more
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden 2xl:block 2xl:bg-background" data-cid="n601">
                            <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:py-15 2xl:px-9" data-cid="n602">
                              <ul className="hidden 2xl:grid 2xl:gap-7.5 2xl:grid-cols-[92.5px_92.5px_92.5px_92.5px_92.5px_92.5px_92.5px_92.5px_92.5px_92.5px_92.5px_92.5px] 2xl:grid-rows-[337.5px_337.5px_337.5px_337.5px] 2xl:[grid-auto-flow:dense] 2xl:[list-style-type:none] 2xl:list-outside" data-cid="n603">
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_6] 2xl:row-end-[span_2]" data-cid="n604">
                                  <div className="hidden 2xl:block 2xl:relative" data-cid="n605">
                                    <div className="hidden 2xl:block 2xl:relative 2xl:aspect-square" data-cid="n606">
                                      <span className="hidden 2xl:w-[44.0625rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n607">
                                        <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n608" alt="A pair of Beo Grace on flowers" sizes="100vw" src="/assets/cloned/images/134574a49ca4.webp" srcSet="/assets/cloned/images/6cef70a192aa.webp 640w, /assets/cloned/images/06b54eafdc9e.webp 750w, /assets/cloned/images/9d0977c08e61.webp 828w, /assets/cloned/images/d48b08061339.webp 1080w, /assets/cloned/images/6ac4a3fd2cca.webp 1200w, /assets/cloned/images/80868d69f117.webp 1920w, /assets/cloned/images/d2a248bac686.webp 2048w, /assets/cloned/images/134574a49ca4.webp 3840w" />
                                      </span>
                                    </div>
                                    <div className="hidden 2xl:w-[44.0625rem] 2xl:h-[44.0625rem] 2xl:flex 2xl:absolute 2xl:top-[352.5px] 2xl:left-[352.5px] 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:transform-[matrix(1,0,0,1,-352.5,-352.5)]" data-cid="n609" />
                                  </div>
                                </li>
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_3] 2xl:row-end-[span_1]" data-cid="n610">
                                  <div className="hidden 2xl:h-full 2xl:block" data-cid="n611" />
                                </li>
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_3] 2xl:row-end-[span_1]" data-cid="n612">
                                  <div className="hidden 2xl:block 2xl:relative" data-cid="n613">
                                    <div className="hidden 2xl:block 2xl:relative" data-cid="n614">
                                      <div className="hidden 2xl:block 2xl:relative" data-cid="n615">
                                        <div className="hidden 2xl:block" data-cid="n616">
                                          <picture className="hidden 2xl:inline" data-cid="n617">
                                            <img className="hidden 2xl:w-84.5 2xl:h-84.5 2xl:block 2xl:relative 2xl:max-w-full 2xl:overflow-clip" data-cid="n619" alt="Left side of Beo Grace in a seashell" sizes="(min-width: 1024px) 480px, (min-width: 768px) 340px, 375px" src="/assets/cloned/images/1e7fee7238d5.webp" />
                                          </picture>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-[337.5px] 2xl:h-[337.5px] 2xl:flex 2xl:absolute 2xl:top-[10.55rem] 2xl:left-[10.55rem] 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:transform-[matrix(1,0,0,1,-168.75,-168.75)]" data-cid="n620" />
                                  </div>
                                </li>
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_3] 2xl:row-end-[span_1]" data-cid="n621">
                                  <div className="hidden 2xl:block 2xl:relative" data-cid="n622">
                                    <div className="hidden 2xl:block 2xl:relative" data-cid="n623">
                                      <div className="hidden 2xl:block 2xl:relative" data-cid="n624">
                                        <div className="hidden 2xl:block" data-cid="n625">
                                          <picture className="hidden 2xl:inline" data-cid="n626">
                                            <img className="hidden 2xl:w-84.5 2xl:h-84.5 2xl:block 2xl:relative 2xl:max-w-full 2xl:overflow-clip" data-cid="n628" alt="Grace in ear" sizes="(min-width: 1024px) 480px, (min-width: 768px) 340px, 375px" src="/assets/cloned/images/665709e5e75b.webp" />
                                          </picture>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-[337.5px] 2xl:h-[337.5px] 2xl:flex 2xl:absolute 2xl:top-[10.55rem] 2xl:left-[10.55rem] 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:transform-[matrix(1,0,0,1,-168.75,-168.75)]" data-cid="n629" />
                                  </div>
                                </li>
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_3] 2xl:row-end-[span_1]" data-cid="n630">
                                  <div className="hidden 2xl:h-full 2xl:block" data-cid="n631" />
                                </li>
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_3] 2xl:row-end-[span_1]" data-cid="n632">
                                  <div className="hidden 2xl:h-full 2xl:block" data-cid="n633" />
                                </li>
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_3] 2xl:row-end-[span_1]" data-cid="n634">
                                  <div className="hidden 2xl:block 2xl:relative" data-cid="n635">
                                    <div className="hidden 2xl:block 2xl:relative" data-cid="n636">
                                      <div className="hidden 2xl:block 2xl:relative" data-cid="n637">
                                        <div className="hidden 2xl:block" data-cid="n638">
                                          <picture className="hidden 2xl:inline" data-cid="n639">
                                            <img className="hidden 2xl:w-84.5 2xl:h-84.5 2xl:block 2xl:relative 2xl:max-w-full 2xl:overflow-clip" data-cid="n641" alt="1 Grace and 1 Flower" sizes="(min-width: 1024px) 480px, (min-width: 768px) 340px, 375px" src="/assets/cloned/images/d8672fb3f9ce.webp" />
                                          </picture>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-[337.5px] 2xl:h-[337.5px] 2xl:flex 2xl:absolute 2xl:top-[10.55rem] 2xl:left-[10.55rem] 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:transform-[matrix(1,0,0,1,-168.75,-168.75)]" data-cid="n642" />
                                  </div>
                                </li>
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_6] 2xl:row-end-[span_2]" data-cid="n643">
                                  <div className="hidden 2xl:block 2xl:relative" data-cid="n644">
                                    <div className="hidden 2xl:block 2xl:relative 2xl:aspect-square" data-cid="n645">
                                      <span className="hidden 2xl:w-[44.0625rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n646">
                                        <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n647" alt="Pair of Beo Grace honey tone and case with blue background" sizes="100vw" src="/assets/cloned/images/8b4f9e7c7072.webp" srcSet="/assets/cloned/images/4545b8cbce96.webp 640w, /assets/cloned/images/33f4b8a5cfc2.webp 750w, /assets/cloned/images/bb733838ce17.webp 828w, /assets/cloned/images/87136eb4bbe8.webp 1080w, /assets/cloned/images/6c3e3d99fb89.webp 1200w, /assets/cloned/images/08e483c6d606.webp 1920w, /assets/cloned/images/a14e325db0cc.webp 2048w, /assets/cloned/images/8b4f9e7c7072.webp 3840w" />
                                      </span>
                                    </div>
                                    <div className="hidden 2xl:w-[44.0625rem] 2xl:h-[44.0625rem] 2xl:flex 2xl:absolute 2xl:top-[352.5px] 2xl:left-[352.5px] 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:transform-[matrix(1,0,0,1,-352.5,-352.5)]" data-cid="n648" />
                                  </div>
                                </li>
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_3] 2xl:row-end-[span_1]" data-cid="n649">
                                  <div className="hidden 2xl:block 2xl:relative" data-cid="n650">
                                    <div className="hidden 2xl:block 2xl:relative" data-cid="n651">
                                      <div className="hidden 2xl:block 2xl:relative" data-cid="n652">
                                        <div className="hidden 2xl:block" data-cid="n653">
                                          <picture className="hidden 2xl:inline" data-cid="n654">
                                            <img className="hidden 2xl:w-84.5 2xl:h-84.5 2xl:block 2xl:relative 2xl:max-w-full 2xl:overflow-clip" data-cid="n656" alt="Image of Beo Grace honey tone case with red background" sizes="(min-width: 1024px) 480px, (min-width: 768px) 340px, 375px" src="/assets/cloned/images/6abe92fa7fd4.webp" />
                                          </picture>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-[337.5px] 2xl:h-[337.5px] 2xl:flex 2xl:absolute 2xl:top-[10.55rem] 2xl:left-[10.55rem] 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:transform-[matrix(1,0,0,1,-168.75,-168.75)]" data-cid="n657" />
                                  </div>
                                </li>
                                <li className="hidden 2xl:list-item 2xl:col-end-[span_3] 2xl:row-end-[span_1]" data-cid="n658">
                                  <div className="hidden 2xl:block 2xl:relative" data-cid="n659">
                                    <div className="hidden 2xl:block 2xl:relative" data-cid="n660">
                                      <div className="hidden 2xl:block 2xl:relative" data-cid="n661">
                                        <div className="hidden 2xl:block" data-cid="n662">
                                          <picture className="hidden 2xl:inline" data-cid="n663">
                                            <img className="hidden 2xl:w-84.5 2xl:h-84.5 2xl:block 2xl:relative 2xl:max-w-full 2xl:overflow-clip" data-cid="n665" alt="2 Buds on top of eachother" sizes="(min-width: 1024px) 480px, (min-width: 768px) 340px, 375px" src="/assets/cloned/images/83134c749aba.webp" />
                                          </picture>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-[337.5px] 2xl:h-[337.5px] 2xl:flex 2xl:absolute 2xl:top-[10.55rem] 2xl:left-[10.55rem] 2xl:z-1 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:transform-[matrix(1,0,0,1,-168.75,-168.75)]" data-cid="n666" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="hidden 2xl:block 2xl:bg-background" data-cid="n667">
                            <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:py-15 2xl:px-9" data-cid="n668">
                              <div className="hidden 2xl:block 2xl:bg-background" data-cid="n669">
                                <div className="hidden 2xl:h-176 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n670">
                                  <div className="hidden 2xl:w-184 2xl:block 2xl:max-w-[50%] 2xl:px-4 2xl:shrink-0 2xl:basis-1/2" data-cid="n671">
                                    <div className="hidden 2xl:flex 2xl:items-center" data-cid="n672">
                                      <div className="hidden 2xl:w-full 2xl:block 2xl:overflow-hidden" data-cid="n673">
                                        <div className="hidden 2xl:block" data-cid="n674">
                                          <div className="hidden 2xl:block 2xl:relative 2xl:aspect-square" data-cid="n675" role="presentation">
                                            <span className="hidden 2xl:w-176 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden" data-cid="n676">
                                              <img className="hidden 2xl:w-full 2xl:h-full 2xl:min-h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-full 2xl:max-w-full 2xl:max-h-full 2xl:overflow-clip 2xl:object-cover" data-cid="n677" alt="Featuring one of Beo Grace app screen on the phone" sizes="100vw" src="/assets/cloned/images/41a2ce6dfa38.webp" srcSet="/assets/cloned/images/e5212aaa2fd3.webp 640w, /assets/cloned/images/a2218f93259a.webp 750w, /assets/cloned/images/28f452075aa5.webp 828w, /assets/cloned/images/3cd6cf9f06c9.webp 1080w, /assets/cloned/images/831abd3bf9f7.webp 1200w, /assets/cloned/images/1ac307d062cf.webp 1920w, /assets/cloned/images/b0043e0392f8.webp 2048w, /assets/cloned/images/41a2ce6dfa38.webp 3840w" />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:h-176 2xl:block 2xl:max-w-[50%] 2xl:px-4 2xl:shrink-0 2xl:basis-1/2" data-cid="n678">
                                    <div className="hidden 2xl:h-full 2xl:flex 2xl:-mx-4 2xl:py-15 2xl:flex-wrap" data-cid="n679">
                                      <div className="hidden 2xl:w-[490.7px] 2xl:h-146 2xl:flex 2xl:max-w-[66.6667%] 2xl:ml-[122.7px] 2xl:px-4 2xl:flex-col 2xl:justify-center 2xl:shrink-0 2xl:basis-2/3" data-cid="n680">
                                        <div className="hidden 2xl:h-43 2xl:block" data-cid="n681">
                                          <div className="hidden 2xl:block" data-cid="n682">
                                            <h2 className="hidden 2xl:block 2xl:mb-8 2xl:text-2xl 2xl:leading-9" data-cid="n683">
                                              {"Connect with the Bang & Olufsen App"}
                                            </h2>
                                            <div className="hidden 2xl:block 2xl:leading-6.5 2xl:tracking-[0.2px]" data-cid="n684">
                                              <p className="hidden 2xl:block 2xl:whitespace-pre-wrap" data-cid="n685">
                                                {"Unleash the full potential of Beo Grace with the Bang & Olufsen app. Fine-tune your listening experience, personalise the interface, stay up to date with the latest features and much more."}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden 2xl:block 2xl:relative" data-cid="n686">
                            <div className="hidden 2xl:h-264 2xl:block 2xl:relative" data-cid="n687">
                              <div className="hidden 2xl:h-full 2xl:block 2xl:relative" data-cid="n688" aria-label="Rich Media Video" role="group">
                                <div className="hidden 2xl:h-full 2xl:flex 2xl:relative 2xl:flex-1" data-cid="n689">
                                  <div className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:min-w-0" data-cid="n690">
                                    <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n691" />
                                    <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n692" />
                                    <div className="hidden 2xl:block" data-cid="n693">
                                      <div className="hidden 2xl:block" data-cid="n694">
                                        <video className="hidden 2xl:w-480 2xl:h-264 2xl:block 2xl:absolute 2xl:overflow-clip 2xl:object-cover" data-cid="n695" autoPlay loop playsInline preload="auto">
                                          <source className="hidden" data-cid="n696" src="/assets/cloned/videos/81110e2f25f0.mp4" type="video/mp4" />
                                        </video>
                                      </div>
                                    </div>
                                    <div className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden" data-cid="n697" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="hidden 2xl:w-480 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0" data-cid="n698">
                              <div className="hidden 2xl:h-full 2xl:block 2xl:relative 2xl:max-w-425 2xl:mx-27.5" data-cid="n699">
                                <div className="hidden 2xl:w-150 2xl:h-59 2xl:block 2xl:absolute 2xl:left-212.5 2xl:z-1 2xl:max-w-150 2xl:py-20 2xl:px-21.5 2xl:shrink-0 2xl:basis-[41.6667%] 2xl:text-center 2xl:transform-[matrix(1,0,0,1,-300,0)]" data-cid="n700">
                                  <p className="hidden 2xl:block 2xl:mb-6 2xl:text-background 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n701">
                                    {"Elevate your audio experience and showcase your style with earbuds that are as unique as you are. "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden 2xl:block 2xl:bg-clr-0" data-cid="n702" id="technicalSpecifications">
                        <div className="hidden 2xl:block 2xl:text-border 2xl:bg-clr-0" data-cid="n703">
                          <div className="hidden 2xl:block" data-cid="n704">
                            <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:py-15 2xl:px-9" data-cid="n705">
                              <div className="hidden 2xl:h-[996.3px] 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n706">
                                <div className="hidden 2xl:w-[1226.7px] 2xl:h-[996.3px] 2xl:block 2xl:max-w-[83.3333%] 2xl:ml-[122.7px] 2xl:px-4 2xl:shrink-0 2xl:basis-5/6" data-cid="n707">
                                  <div className="hidden 2xl:block 2xl:relative 2xl:z-1" data-cid="n708">
                                    <div className="hidden 2xl:h-[581.3px] 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n709">
                                      <div className="hidden 2xl:w-[613.3px] 2xl:block 2xl:max-w-[50%] 2xl:px-4 2xl:shrink-0 2xl:basis-1/2 2xl:text-center" data-cid="n710">
                                        <div className="hidden 2xl:block 2xl:relative 2xl:bg-clr-0" data-cid="n711">
                                          <div className="hidden 2xl:block" data-cid="n712">
                                            <picture className="hidden 2xl:inline" data-cid="n713">
                                              <img className="hidden 2xl:w-[36.3125rem] 2xl:h-[36.3125rem] 2xl:block 2xl:relative 2xl:max-w-full 2xl:overflow-clip" data-cid="n715" alt="front of Beo Grace packaging box" sizes="(min-width: 1024px) 720px, (min-width: 768px) 512px, 375px" src="/assets/cloned/images/a976ed7bddbb.png" />
                                            </picture>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="hidden 2xl:w-[613.3px] 2xl:h-[581.3px] 2xl:block 2xl:max-w-[50%] 2xl:px-4 2xl:shrink-0 2xl:basis-1/2" data-cid="n716">
                                        <div className="hidden 2xl:block" data-cid="n717">
                                          <h3 className="hidden 2xl:block 2xl:mb-5 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:uppercase" data-cid="n718">
                                            Included in the box
                                          </h3>
                                          <p className="hidden 2xl:block 2xl:text-muted-foreground 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n719" />
                                          <span className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:leading-6.5 2xl:tracking-[0.2px]" data-cid="n720">
                                            <ul className="hidden 2xl:block 2xl:my-4 2xl:pl-10 2xl:[list-style-type:disc] 2xl:list-outside" data-cid="n721">
                                              {ListRow3_data.map((d, i) => <ListRow3 key={i} d={d} cids={ListRow3_cids[i]} />)}
                                            </ul>
                                            <p className="hidden 2xl:block 2xl:mt-[0.9375rem] 2xl:tracking-[0.4px] 2xl:whitespace-pre-wrap" data-cid="n734" />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="hidden 2xl:block 2xl:mt-15" data-cid="n735">
                                    {FeatureCard_data.map((d, i) => <FeatureCard key={i} d={d} cids={FeatureCard_cids[i]} styles={FeatureCard_styles[i]} />)}
                                  </div>
                                  <div className="hidden 2xl:h-23.5 2xl:flex 2xl:pt-[1.5625rem]" data-cid="n756">
                                    {TextLink_data.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} styles={TextLink_styles[i]} />)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden 2xl:block" data-cid="n781" id="comparisonSection">
                        <div className="hidden 2xl:block" data-cid="n782">
                          <div className="hidden 2xl:block 2xl:max-w-378 2xl:mx-51 2xl:py-20 2xl:px-[5.5625rem]" data-cid="n783">
                            <div className="hidden 2xl:h-[66.8125rem] 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n784">
                              <div className="hidden 2xl:w-341.5 2xl:h-[66.8125rem] 2xl:block 2xl:max-w-full 2xl:px-4 2xl:shrink-0 2xl:basis-full" data-cid="n785">
                                <div className="hidden 2xl:h-[61.5625rem] 2xl:flex 2xl:relative 2xl:flex-col" data-cid="n786">
                                  <table className="hidden 2xl:h-[60.3125rem] 2xl:table 2xl:relative 2xl:mt-5" data-cid="n787">
                                    <thead className="hidden 2xl:h-58.5 2xl:table-header-group 2xl:align-middle" data-cid="n788">
                                      <tr className="hidden 2xl:h-58.5 2xl:table-row 2xl:relative 2xl:align-middle" data-cid="n789">
                                        <th className="hidden 2xl:table-cell 2xl:py-5 2xl:px-2.5 2xl:align-middle 2xl:font-bold 2xl:text-center" data-cid="n790" aria-hidden="true" />
                                        {MediaTile2_data.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids[i]} styles={MediaTile2_styles[i]} />)}
                                      </tr>
                                    </thead>
                                    <tbody className="hidden 2xl:h-[45.6875rem] 2xl:table-row-group 2xl:align-middle" data-cid="n827">
                                      <tr className="hidden 2xl:table-row 2xl:relative 2xl:align-middle" data-cid="n828">
                                        <th className="hidden 2xl:w-[333.5px] 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:min-w-35 2xl:mb-5 2xl:py-5 2xl:px-2.5 2xl:align-middle 2xl:text-border 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:text-left 2xl:uppercase" data-cid="n829">
                                          Price
                                        </th>
                                        <td className="hidden 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:py-8 2xl:align-middle 2xl:text-center" data-cid="n830">
                                          <span className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]" data-cid="n831">
                                            <span className="hidden 2xl:inline" data-cid="n832">
                                              $1,500
                                            </span>
                                          </span>
                                        </td>
                                        <td className="hidden 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:py-8 2xl:align-middle 2xl:text-center" data-cid="n833">
                                          <span className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]" data-cid="n834">
                                            <span className="hidden 2xl:inline" data-cid="n835">
                                              $599
                                            </span>
                                          </span>
                                        </td>
                                        <td className="hidden 2xl:border-b 2xl:border-solid 2xl:border-b-surface 2xl:table-cell 2xl:py-8 2xl:align-middle 2xl:text-center" data-cid="n836">
                                          <span className="hidden 2xl:inline 2xl:text-muted-foreground 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]" data-cid="n837">
                                            <span className="hidden 2xl:inline" data-cid="n838">
                                              {"From "}
                                            </span>
                                            <span className="hidden 2xl:inline" data-cid="n839">
                                              $2,200
                                            </span>
                                          </span>
                                        </td>
                                      </tr>
                                      {Tile_data.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                                    </tbody>
                                  </table>
                                </div>
                                <div className="hidden 2xl:block" data-cid="n895">
                                  <div className="hidden 2xl:block 2xl:max-w-378" data-cid="n896">
                                    <div className="hidden 2xl:h-21 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n897">
                                      <div className="hidden 2xl:w-341.5 2xl:h-21 2xl:block 2xl:max-w-full 2xl:px-4 2xl:shrink-0 2xl:basis-full" data-cid="n898">
                                        <div className="hidden 2xl:h-11 2xl:flex 2xl:mt-10 2xl:justify-end 2xl:uppercase" data-cid="n899">
                                          <div className="hidden 2xl:h-11 2xl:block 2xl:ml-5" data-cid="n900">
                                            <a className="hidden 2xl:w-[17.275rem] 2xl:h-11 2xl:border-2 2xl:border-solid 2xl:border-border 2xl:flex 2xl:relative 2xl:min-w-35 2xl:py-2 2xl:px-8 2xl:rounded-[40px] 2xl:flex-1 2xl:overflow-hidden 2xl:text-border 2xl:font-medium 2xl:leading-6 2xl:tracking-[0.1px] 2xl:text-center 2xl:normal-case 2xl:cursor-pointer 2xl:whitespace-nowrap" data-cid="n901" aria-label="Compare other headphones" href="/en/int/compare?slug=headphones" target="_self">
                                              Compare other headphones
                                            </a>
                                          </div>
                                          <div className="hidden 2xl:h-11 2xl:block 2xl:ml-5" data-cid="n902">
                                            <a className="hidden 2xl:h-11 2xl:border-2 2xl:border-solid 2xl:border-clr-2 2xl:flex 2xl:relative 2xl:py-2 2xl:px-8 2xl:rounded-[40px] 2xl:flex-1 2xl:text-color-001 2xl:font-medium 2xl:leading-6 2xl:tracking-[0.1px] 2xl:text-center 2xl:normal-case 2xl:bg-border 2xl:cursor-pointer 2xl:whitespace-nowrap" data-cid="n903" aria-label="Show full comparison" href={"/en/int/comparison/products?slug=headphones&p1=beograce&p2=beoplay-eleven&p3=beoplay-h100"} target="_self">
                                              Show full comparison
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden 2xl:block" data-cid="n904" id="recommendedProducts">
                        <div className="hidden 2xl:block 2xl:max-w-378 2xl:mt-7.5 2xl:mb-15 2xl:mx-51 2xl:px-9" data-cid="n905">
                          <h2 className="hidden 2xl:h-13.5 2xl:block 2xl:mb-5 2xl:text-border 2xl:text-4xl 2xl:leading-13.5 2xl:tracking-[-0.5px] 2xl:text-center" data-cid="n906">
                            <span className="hidden 2xl:inline" data-cid="n907">
                              What else you might discover?
                            </span>
                          </h2>
                          <ul className="hidden 2xl:h-124 2xl:flex 2xl:mt-[2.1875rem] 2xl:-mx-4 2xl:flex-wrap 2xl:justify-center 2xl:gap-4 2xl:grid-cols-[repeat(12,_1fr)] 2xl:[grid-auto-flow:dense] 2xl:[list-style-type:none] 2xl:list-outside" data-cid="n908">
                            {MediaTile3_data.map((d, i) => <MediaTile3 key={i} d={d} cids={MediaTile3_cids[i]} styles={MediaTile3_styles[i]} />)}
                          </ul>
                        </div>
                      </div>
                      <div className="hidden 2xl:block" data-cid="n1017">
                        <div className="hidden 2xl:block 2xl:py-15 2xl:text-center 2xl:bg-color-001" data-cid="n1018">
                          <div className="hidden 2xl:block 2xl:max-w-225 2xl:mx-127.5 2xl:px-4" data-cid="n1019">
                            <div className="hidden 2xl:h-[17.8375rem] 2xl:flex 2xl:-mx-4 2xl:flex-wrap" data-cid="n1020">
                              <div className="hidden 2xl:h-[17.8375rem] 2xl:block 2xl:max-w-[66.6667%] 2xl:ml-[9.375rem] 2xl:px-4 2xl:shrink-0 2xl:basis-2/3" data-cid="n1021">
                                <img className="hidden 2xl:w-22.5 2xl:h-22.5 2xl:inline 2xl:max-w-full 2xl:mb-5 2xl:overflow-clip" data-cid="n1022" alt={"B&O 100 years emblem"} src="/assets/cloned/svg/a292f75d2cb3.svg" />
                                <h2 className="hidden 2xl:block 2xl:mb-5 2xl:text-border 2xl:text-sm 2xl:leading-6 2xl:tracking-[1.7px] 2xl:uppercase" data-cid="n1023">
                                  {"Join the House of Bang & Olufsen"}
                                </h2>
                                <p className="hidden 2xl:block 2xl:text-muted-foreground 2xl:leading-6.5 2xl:tracking-[0.2px] 2xl:whitespace-pre-wrap" data-cid="n1024">
                                  Be the first to enjoy new and limited products, exclusive events, special offers and much more.
                                </p>
                                <form className="hidden 2xl:block 2xl:max-w-102.5 2xl:mx-[4.9375rem] 2xl:pt-8" data-cid="n1025" name="text">
                                  <fieldset className="hidden 2xl:block 2xl:min-w-[min-content] 2xl:mx-0.5" data-cid="n1026">
                                    <legend className="hidden 2xl:w-[1.6875rem] 2xl:h-[1.15rem] 2xl:table 2xl:absolute 2xl:max-w-full 2xl:overflow-hidden 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:[clip-path:inset(50%)]" data-cid="n1027">
                                      text
                                    </legend>
                                    <div className="hidden 2xl:block" data-cid="n1028">
                                      <button className="hidden 2xl:w-[158.1px] 2xl:border-2 2xl:border-solid 2xl:border-border 2xl:inline-block 2xl:relative 2xl:min-w-35 2xl:py-2 2xl:px-8 2xl:rounded-[40px] 2xl:overflow-hidden 2xl:text-border 2xl:font-medium 2xl:leading-6 2xl:tracking-[0.1px] 2xl:cursor-pointer" data-cid="n1029" aria-label="Sign up now" type="button">
                                        <span className="hidden 2xl:inline" data-cid="n1030">
                                          Sign up now
                                        </span>
                                        <span className="hidden" data-cid="n1031">
                                          secondary
                                        </span>
                                      </button>
                                    </div>
                                  </fieldset>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
      {" "}
      <DropdownMenu menus={[{"trigger":"n1078","hoverOpen":false,"gap":0,"align":"left","html":"<div style=\"position:absolute;margin:0;display:block;box-sizing:border-box;width:600px;height:760px;min-width:auto;max-width:100%;min-height:auto;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;background-color:rgb(255, 255, 255);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:18.4px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:hidden auto\">\n                     <div style=\"display:block;position:static;box-sizing:border-box;width:600px;height:1054.41px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(246, 246, 246);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:flex-end;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                       <div style=\"display:block;position:static;box-sizing:border-box;width:600px;height:250.406px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:40px;padding-right:40px;padding-bottom:40px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                         \n                         <div style=\"display:block;position:static;box-sizing:border-box;width:520px;height:170.406px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                           <p style=\"display:block;position:static;box-sizing:border-box;width:520px;height:32.4062px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:20px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:27px;font-weight:500;font-style:normal;line-height:32.4px;letter-spacing:-0.5px;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">This website uses cookies</p>\n                           <div style=\"display:block;position:static;box-sizing:border-box;width:520px;height:118px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:16.5px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:pre-line;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                             Click to agree and allow us to improve and personalize your experience on our website. You can change your mind at any time.\n                             <a style=\"display:inline;position:static;box-sizing:border-box;width:auto;height:auto;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(35, 73, 35);border-right-color:rgb(35, 73, 35);border-bottom-color:rgb(35, 73, 35);border-left-color:rgb(35, 73, 35);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(35, 73, 35);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:underline;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" href=\"javascript:TogglePage(this, 'coiPage-3');\">\n                               About cookies\n                             </a>\n                             <a style=\"display:block;position:static;box-sizing:border-box;width:520px;height:18px;min-width:0px;max-width:none;min-height:0px;margin-top:16px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(35, 73, 35);border-right-color:rgb(35, 73, 35);border-bottom-color:rgb(35, 73, 35);border-left-color:rgb(35, 73, 35);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(35, 73, 35);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:underline;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" href=\"https://business.safety.google/privacy/\" aria-label=\"Google privacy policy\">\n                               Google privacy policy\n                             </a>\n                           </div>\n                         </div>\n                       </div>\n                       <div style=\"display:block;position:relative;box-sizing:border-box;width:600px;height:653px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\" aria-label=\"Cookie policy\">\n                         <div style=\"display:flex;position:static;box-sizing:border-box;width:600px;height:48px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:20px;margin-left:0px;padding-top:20px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                           \n                           <button style=\"display:block;position:static;box-sizing:border-box;width:71px;height:18px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:underline;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Decline all\">Decline all</button>\n                         </div>\n                         <div style=\"display:flex;position:static;box-sizing:border-box;width:600px;height:95px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:35px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                           <div style=\"display:flex;position:relative;box-sizing:border-box;width:520px;height:95px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:145px;height:28px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                               <button style=\"display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\">\n                                 <div style=\"display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\"></div>\n                                 <p style=\"display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Required\">Required</p>\n                               </button>\n                             </div>\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:375px;height:90px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">Required cookies help make a website navigable by activating basic functions such as page navigation and access to secure website areas. Without these cookies, the website would not be able to work properly.</div>\n                           </div>\n                           \n                         </div>\n                         <div style=\"display:flex;position:static;box-sizing:border-box;width:600px;height:78px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:35px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                           <div style=\"display:flex;position:relative;box-sizing:border-box;width:520px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:145px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                               <button style=\"display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\">\n                                 <div style=\"display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\"></div>\n                                 <p style=\"display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Functional\">Functional</p>\n                               </button>\n                               <div style=\"display:block;position:static;box-sizing:border-box;width:145px;height:50px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:10px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                                 <label style=\"display:flex;position:relative;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column-reverse;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\">\n                                   <input style=\"display:block;position:absolute;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:0;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\">\n                                   <span style=\"display:block;position:relative;box-sizing:content-box;width:65px;height:40px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;background-color:rgb(44, 98, 44);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\"></span>\n                                 </label>\n                               </div>\n                             </div>\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:375px;height:72px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">Functional cookies make it possible to save information that changes the way the website appears or acts. For instance your preferred language or region.</div>\n                           </div>\n                           \n                         </div>\n                         <div style=\"display:flex;position:static;box-sizing:border-box;width:600px;height:78px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:35px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                           <div style=\"display:flex;position:relative;box-sizing:border-box;width:520px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:145px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                               <button style=\"display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\">\n                                 <div style=\"display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\"></div>\n                                 <p style=\"display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Statistical\">Statistical</p>\n                               </button>\n                               <div style=\"display:block;position:static;box-sizing:border-box;width:145px;height:50px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:10px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                                 <label style=\"display:flex;position:relative;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column-reverse;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\">\n                                   <input style=\"display:block;position:absolute;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:0;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\">\n                                   <span style=\"display:block;position:relative;box-sizing:content-box;width:65px;height:40px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;background-color:rgb(44, 98, 44);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\"></span>\n                                 </label>\n                               </div>\n                             </div>\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:375px;height:54px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">Statistical cookies help the website owner understand how visitors interact with the website by collecting and reporting information.</div>\n                           </div>\n                           \n                         </div>\n                         <div style=\"display:flex;position:static;box-sizing:border-box;width:600px;height:95px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:35px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                           <div style=\"display:flex;position:relative;box-sizing:border-box;width:520px;height:95px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:145px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                               <button style=\"display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\">\n                                 <div style=\"display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\"></div>\n                                 <p style=\"display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Marketing\">Marketing</p>\n                               </button>\n                               <div style=\"display:block;position:static;box-sizing:border-box;width:145px;height:50px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:10px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                                 <label style=\"display:flex;position:relative;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column-reverse;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible\">\n                                   <input style=\"display:block;position:absolute;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:0;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\">\n                                   <span style=\"display:block;position:relative;box-sizing:content-box;width:65px;height:40px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;background-color:rgb(44, 98, 44);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\"></span>\n                                 </label>\n                               </div>\n                             </div>\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:375px;height:90px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and interesting to the individual user and thus more valuable for publishers and third-party advertisers.</div>\n                           </div>\n                           \n                         </div>\n                         <div style=\"display:flex;position:static;box-sizing:border-box;width:600px;height:99px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:40px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                           <div style=\"display:flex;position:relative;box-sizing:border-box;width:520px;height:59px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:145px;height:28px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                               <button style=\"display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\">\n                                 <div style=\"display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\"></div>\n                                 <p style=\"display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Unclassified\">Unclassified</p>\n                               </button>\n                             </div>\n                             <div style=\"display:block;position:static;box-sizing:border-box;width:375px;height:54px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">We are in the process of classifying unclassified cookies together with the providers of the individual cookies.</div>\n                           </div>\n                           \n                         </div>\n                       </div>\n                       <div style=\"display:block;position:sticky;box-sizing:border-box;width:600px;height:151px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:10px;padding-left:0px;border-top-width:1px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(221, 221, 221);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\" aria-label=\"menu\">\n                         <div style=\"display:flex;position:static;box-sizing:border-box;width:600px;height:98px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(246, 246, 246);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">\n                           <button style=\"display:flex;position:static;box-sizing:border-box;width:156px;height:48px;min-width:auto;max-width:30%;min-height:auto;margin-top:5px;margin-right:5px;margin-bottom:5px;margin-left:0px;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(136, 136, 136);border-right-color:rgb(136, 136, 136);border-bottom-color:rgb(136, 136, 136);border-left-color:rgb(136, 136, 136);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:rgb(246, 246, 246);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:13px;font-weight:700;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:uppercase;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Decline all\">Decline all</button>\n                           <button style=\"display:flex;position:static;box-sizing:border-box;width:156px;height:48px;min-width:auto;max-width:30%;min-height:auto;margin-top:5px;margin-right:5px;margin-bottom:5px;margin-left:5px;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(136, 136, 136);border-right-color:rgb(136, 136, 136);border-bottom-color:rgb(136, 136, 136);border-left-color:rgb(136, 136, 136);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:rgb(246, 246, 246);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:13px;font-weight:700;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:uppercase;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Save settings\">Save settings</button>\n                           <button style=\"display:flex;position:static;box-sizing:border-box;width:156px;height:48px;min-width:auto;max-width:30%;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:5px;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(136, 136, 136);border-right-color:rgb(136, 136, 136);border-bottom-color:rgb(136, 136, 136);border-left-color:rgb(136, 136, 136);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:rgb(246, 246, 246);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:13px;font-weight:700;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:uppercase;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" aria-label=\"Accept all\">Accept all</button>\n                         </div>\n                         <div style=\"display:flex;position:static;box-sizing:border-box;width:520px;height:22px;min-width:0px;max-width:100%;min-height:0px;margin-top:10px;margin-right:40px;margin-bottom:10px;margin-left:40px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:flex-end;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"><span style=\"display:block;position:static;box-sizing:border-box;width:0px;height:0px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\"></span>\n                           <span style=\"display:block;position:static;box-sizing:border-box;width:76px;height:22px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(68, 68, 68);border-right-color:rgb(68, 68, 68);border-bottom-color:rgb(68, 68, 68);border-left-color:rgb(68, 68, 68);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(68, 68, 68);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:10.5px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible\">powered by: <a style=\"display:block;position:static;box-sizing:border-box;width:76px;height:10px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(35, 73, 35);border-right-color:rgb(35, 73, 35);border-bottom-color:rgb(35, 73, 35);border-left-color:rgb(35, 73, 35);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(35, 73, 35);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:8.4px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;text-transform:none;text-decoration-line:underline;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible\" href=\"https://cookieinformation.com/\">Cookie Information</a></span>\n                         </div>\n                       </div>\n                     </div>\n                     \n                   </div>"}]} />
    </>
  );
}
