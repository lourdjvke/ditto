import JohnLegendNewsletterSection from "../../../../sections/john-legend-newsletter-section";
import DittoMotion from "./ditto/DittoMotion";
import DropdownMenu from "./ditto/DropdownMenu";
import Icon from "./svgs/svg-icon";
import Icon2 from "./svgs/svg-icon2";
import Tile, { type TileData } from "./components/tile";
import ListRow, { type ListRowData } from "./components/list-row";
import ListRow2, { type ListRow2Data } from "./components/list-row2";
import Tile2, { type Tile2Data } from "./components/tile2";
import Icon3 from "./svgs/svg-icon3";
import ListRow3, { type ListRow3Data } from "./components/list-row3";
import {
  Tile_cids,
  ListRow_cids,
  ListRow2_cids,
  Tile2_cids,
  ListRow3_cids,
} from "./_cids";
import {
  Tile_styles,
  ListRow_styles,
  ListRow2_styles,
  Tile2_styles,
} from "./_styles";

const Tile_data: TileData[] = [
  {
    htmlFor: "newsletter-dateOfBirth_day",
    text: "Day",
    ariadescribedby: "input-newsletter-dateOfBirth_day",
    id: "newsletter-dateOfBirth_day",
    value: "DD",
  },
  {
    htmlFor: "newsletter-dateOfBirth_month",
    text: "Month",
    ariadescribedby: "input-newsletter-dateOfBirth_month",
    id: "newsletter-dateOfBirth_month",
    value: "MM",
  },
  {
    htmlFor: "newsletter-dateOfBirth_year",
    text: "Year",
    ariadescribedby: "input-newsletter-dateOfBirth_year",
    id: "newsletter-dateOfBirth_year",
    value: "YYYY",
  },
];
const ListRow_data: ListRowData[] = [
  {
    ariaLabel: "read about shipping and delivery conditions",
    href: "/en/int/faq/shipping-and-delivery",
    target: "_parent",
    label: "Shipping and Delivery ",
  },
  {
    ariaLabel: "Read about our returns conditions",
    href: "/en/int/faq/returns",
    target: "_parent",
    label: "Returns",
  },
  {
    ariaLabel:
      "Service and Support. The link will open a new window with the support website",
    href: "https://support.bang-olufsen.com/hc/en-us",
    target: "_parent",
    label: "Product Support",
  },
  {
    ariaLabel: "Contact us - Footer link",
    href: "https://support.bang-olufsen.com/hc/en-us/articles/360042167451",
    target: "_parent",
    label: "Contact us",
  },
  { href: "/en/int/faq", target: "_parent", label: "FAQ" },
  {
    href: "https://stores.bang-olufsen.com/en/search",
    target: "_self",
    label: "Find store",
  },
];
const ListRow2_data: ListRow2Data[] = [
  {
    href: "/en/int/story/about-bang-and-olufsen",
    target: "_parent",
    label: "About us",
  },
  {
    href: "/en/int/story/responsibility",
    target: "_parent",
    ariaLabel: "Read more about our responsibility topics",
    label: "Responsibility",
  },
  { href: "https://investor.bang-olufsen.com/", label: "Investors" },
  { href: "/en/int/story/careers", label: "Careers" },
  {
    href: "https://bang-olufsen.presscloud.com/digitalshowroom/#/gallery",
    target: "_parent",
    ariaLabel: "Press link",
    label: "Press",
  },
  { href: "/en/int/story/custom-integration", label: "Custom integration" },
  { href: "/en/int/story/become-a-retailer", label: "Become a sales partner" },
  { href: "/en/int/story/factory-tour", label: "Factory tour" },
];
const Tile2_data: Tile2Data[] = [
  {
    ariacontrols: "customercare_0_wrapper",
    id: "customercare_0_accordionBtn",
    description: "Customer Care",
  },
  {
    ariacontrols: "ourcompany_1_wrapper",
    id: "ourcompany_1_accordionBtn",
    description: "Our Company",
  },
  {
    ariacontrols: "socialshare_2_wrapper",
    id: "socialshare_2_accordionBtn",
    description: "Social Links",
  },
  {
    ariacontrols: "downloadapp_3_wrapper",
    id: "downloadapp_3_accordionBtn",
    description: "Download Our App",
  },
];
const ListRow3_data: ListRow3Data[] = [
  { href: "/en/int/speakers", label: "Speakers" },
  { href: "/en/int/headphones", label: "Headphones" },
  { href: "/en/int/soundbars", label: "Soundbars" },
  { href: "/en/int/televisions", label: "Televisions" },
  { href: "/en/int/accessories", label: "Accessories" },
];

export default function Page() {
  return (
    <>
      <div
        className="block"
        data-cid="n1"
        id="cookie-information-template-wrapper"
      />
      <div className="h-full block" data-cid="n2" id="__next">
        <div className="h-full block" data-cid="n3">
          <div className="h-full block" data-cid="n4">
            <main
              className="block relative flex-1 bg-background"
              data-cid="n42"
              id="main-layout"
            >
              <div className="block" data-cid="n43">
                <div className="block" data-cid="n44">
                  <div
                    className="h-[76.2875rem] block bg-background max-md:h-[70.7375rem] md:max-lg:h-207 2xl:h-[97.1625rem]"
                    data-cid="n45"
                    id="story-header"
                  >
                    <div
                      className="block max-w-378 pt-[141.1px] pb-30 px-9 mx-auto max-lg:pt-34.5 max-lg:pb-8 max-lg:px-4"
                      data-cid="n46"
                    >
                      <div
                        className="flex flex-col items-center max-lg:[align-items:initial]"
                        data-cid="n47"
                      >
                        <h2
                          className="block mb-2 text-color-001 text-sm leading-6 tracking-[1.7px] text-center uppercase max-lg:text-xs max-lg:leading-5 max-md:tracking-[1.5px] max-lg:text-left"
                          data-cid="n48"
                          data-component="heading"
                        >
                          New Global Brand Ambassador
                        </h2>
                        <h1
                          className="block mb-4 text-color-001 text-5xl leading-16 tracking-[-0.5px] text-center max-md:text-[2rem] max-md:leading-10.5 max-lg:text-left md:max-lg:text-4xl md:max-lg:leading-12"
                          data-cid="n49"
                          data-component="heading"
                        >
                          A landmark partnership with EGOT-winning artist John
                          Legend
                        </h1>
                        <div
                          className="block leading-6.5 tracking-[0.2px] text-center max-lg:text-left"
                          data-cid="n50"
                        >
                          <div className="block" data-cid="n51">
                            <p
                              className="block text-color-001 whitespace-pre-wrap"
                              data-cid="n52"
                            >
                              {
                                "We are thrilled to announce a two-year partnership with multi-platinum musician, producer, activist, and Emmy, Grammy, Oscar, and Tony (EGOT)-winning artist John Legend, who joins us as Global Brand Ambassador, embodying Bang & Olufsen's Beautiful Sound philosophy. "
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="block relative mx-9 aspect-video transform-[matrix(1.1,0,0,1.1,0,0)] origin-[604px_339.75px] max-lg:mx-4 max-md:aspect-[9/16] max-md:origin-[171.5px_304.883px] md:max-lg:transform-[matrix(1.05,0,0,1.05,0,0)] md:max-lg:origin-[368px_207px] 2xl:origin-[924px_519.75px]"
                      data-cid="n53"
                    >
                      <span
                        className="h-full block absolute top-0 inset-x-0 overflow-hidden"
                        data-cid="n54"
                      >
                        <img
                          className="w-302 h-170 min-h-full block absolute min-w-full max-w-full max-h-full overflow-clip object-cover transform-[matrix(1.1,0,0,1.1,0,0)] origin-[604px_339.75px] max-md:w-[21.4375rem] max-md:h-152.5 max-md:origin-[171.5px_304.883px] md:max-lg:w-184 md:max-lg:h-103.5 md:max-lg:transform-[matrix(1.05,0,0,1.05,0,0)] md:max-lg:origin-[368px_207px] 2xl:w-462 2xl:h-260 2xl:origin-[924px_519.75px]"
                          data-cid="n55"
                          data-component="image"
                          alt={
                            "John Legend depicted wearing Bang & Olufsen Beoplay H100 over-ear headphones in the Hourglass Sand colorway, photographed against a green background in a relaxed, music-listening pose."
                          }
                          sizes="100vw"
                          src="/assets/cloned/images/3dc149b28438.webp"
                          srcSet="/assets/cloned/images/5453c5f9cf69.webp 640w, /assets/cloned/images/5e2cfb86def2.webp 750w, /assets/cloned/images/934f8b589d14.webp 828w, /assets/cloned/images/ea68cc38afef.webp 1080w, /assets/cloned/images/0be10f388460.webp 1200w, /assets/cloned/images/4a36d37eb640.webp 1920w, /assets/cloned/images/31287fc7f1d0.webp 2048w, /assets/cloned/images/3dc149b28438.webp 3840w"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="block" data-cid="n56">
                    <div
                      className="block text-center bg-background"
                      data-cid="n57"
                    >
                      <div
                        className="flex max-w-378 py-21 px-22 flex-col items-center mx-auto max-md:py-15 max-lg:px-9 md:max-lg:py-17"
                        data-cid="n58"
                      >
                        <h2
                          className="block pt-4 text-color-001 text-5xl leading-16 tracking-[-0.5px] max-md:pt-2 max-md:text-2xl max-md:leading-8 md:max-lg:text-4xl md:max-lg:leading-12"
                          data-cid="n59"
                          data-component="heading"
                        >
                          Connecting people across cultures and generations
                        </h2>
                        <span
                          className="block mt-4 text-color-001 leading-6.5 tracking-[0.2px] max-md:mt-2"
                          data-cid="n60"
                        >
                          <p
                            className="block whitespace-pre-wrap"
                            data-cid="n61"
                          >
                            This partnership is rooted in craft, emotional
                            expression and a shared understanding of how sound
                            connects people across cultures and generations.
                            John Legend has built a career defined by restraint,
                            detail, and emotional truth, creating music that
                            carries weight not through scale, but through
                            intention. His work has become part of a global
                            cultural fabric, resonating across audiences through
                            its timelessness and clarity of expression.
                          </p>
                        </span>
                      </div>
                    </div>
                    <div className="block relative" data-cid="n62">
                      <div
                        className="h-176 block relative max-md:h-203 md:max-lg:h-256 2xl:h-264"
                        data-cid="n63"
                      >
                        <span
                          className="h-full block absolute top-0 inset-x-0 overflow-hidden"
                          data-cid="n64"
                        >
                          <img
                            className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip object-cover"
                            data-cid="n65"
                            data-component="image"
                            alt="John Legend wearing a cream knit polo shirt and Beograce gazes thoughtfully to the side against a muted green background."
                            sizes="100vw"
                            src="/assets/cloned/images/97f18aa523a7.webp"
                            srcSet="/assets/cloned/images/8397388c5eab.webp 640w, /assets/cloned/images/b6859ae2cf00.webp 750w, /assets/cloned/images/000948df24db.webp 828w, /assets/cloned/images/e7f272bafedd.webp 1080w, /assets/cloned/images/4b3d380b313d.webp 1200w, /assets/cloned/images/baeebd9c800e.webp 1920w, /assets/cloned/images/98a7d413a565.webp 2048w, /assets/cloned/images/97f18aa523a7.webp 3840w"
                          />
                        </span>
                      </div>
                      <div
                        className="h-full block absolute top-0 inset-x-0"
                        data-cid="n66"
                      >
                        <div
                          className="h-full block relative max-w-425 mx-auto"
                          data-cid="n67"
                        >
                          <div
                            className="h-40 block absolute right-170 bottom-0 left-0 z-1 max-w-150 py-20 px-21.5 shrink-0 basis-[41.6667%] text-left max-md:h-24 max-md:right-0 max-md:max-w-full max-md:py-12 max-md:px-8 max-md:basis-full md:max-lg:right-64 md:max-lg:max-w-[66.6667%] md:max-lg:basis-2/3 2xl:right-275"
                            data-cid="n68"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="block text-center bg-background"
                      data-cid="n69"
                    >
                      <div
                        className="flex max-w-378 py-21 px-22 flex-col items-center mx-auto max-md:py-15 max-lg:px-9 md:max-lg:py-17"
                        data-cid="n70"
                      >
                        <h2
                          className="block pt-4 text-color-001 text-5xl leading-16 tracking-[-0.5px] max-md:pt-2 max-md:text-2xl max-md:leading-8 md:max-lg:text-4xl md:max-lg:leading-12"
                          data-cid="n71"
                          data-component="heading"
                        >
                          Timeless precision embodied
                        </h2>
                        <span
                          className="block mt-4 text-color-001 leading-6.5 tracking-[0.2px] max-md:mt-2"
                          data-cid="n72"
                        >
                          <p
                            className="block whitespace-pre-wrap"
                            data-cid="n73"
                          >
                            In John Legend, we have found an artist whose
                            approach mirrors its own design philosophy: timeless
                            and precise yet deeply human, and globally resonant
                            without pretension. It is a shared understanding
                            that the most lasting cultural impact comes from
                            work that is made with care, and experienced with
                            attention
                          </p>
                        </span>
                      </div>
                    </div>
                    <div
                      className="block text-right bg-background"
                      data-cid="n74"
                    >
                      <div
                        className="flex max-w-378 py-21 px-22 flex-col items-end mx-auto max-md:py-15 max-lg:px-9 md:max-lg:py-17"
                        data-cid="n75"
                      >
                        <span
                          className="block mt-4 text-primary leading-6.5 tracking-[0.2px] max-md:mt-2"
                          data-cid="n76"
                        >
                          <h4
                            className="block mb-5 text-color-001 text-2xl leading-9 tracking-[normal] max-md:text-lg max-md:leading-7 md:max-lg:text-[1.375rem] md:max-lg:leading-8"
                            data-cid="n77"
                            data-component="heading"
                          >
                            {
                              "“Bang & Olufsen has been one of my favorite audio brands for years. As a longtime owner of their products, I've always been drawn to the way they combine beautiful sound with timeless design. Their products are crafted with incredible attention to detail, and I've spent time in their listening rooms over the years experiencing music in a way that feels true to how it was intended to be heard.”"
                            }
                          </h4>
                          <p
                            className="block whitespace-pre-wrap"
                            data-cid="n78"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="block relative" data-cid="n79">
                      <div
                        className="h-176 block relative max-md:h-203 md:max-lg:h-256 2xl:h-264"
                        data-cid="n80"
                      >
                        <span
                          className="h-full block absolute top-0 inset-x-0 overflow-hidden"
                          data-cid="n81"
                        >
                          <img
                            className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full overflow-clip object-cover"
                            data-cid="n82"
                            data-component="image"
                            alt="Image of shelf inside vinyl room"
                            sizes="100vw"
                            src="/assets/cloned/images/b66f547b3a88.webp"
                            srcSet="/assets/cloned/images/82b33e05ebc9.webp 640w, /assets/cloned/images/c3b446a7521b.webp 750w, /assets/cloned/images/dc7dbe132df5.webp 828w, /assets/cloned/images/1838113daa09.webp 1080w, /assets/cloned/images/8cf2b295dfe3.webp 1200w, /assets/cloned/images/a642fae07209.webp 1920w, /assets/cloned/images/7683bc87b03d.webp 2048w, /assets/cloned/images/b66f547b3a88.webp 3840w"
                          />
                        </span>
                      </div>
                      <div
                        className="h-full block absolute top-0 inset-x-0"
                        data-cid="n83"
                      >
                        <div
                          className="h-full block relative max-w-425 mx-auto"
                          data-cid="n84"
                        >
                          <div
                            className="h-40 block absolute right-170 bottom-0 left-0 z-1 max-w-150 py-20 px-21.5 shrink-0 basis-[41.6667%] text-left max-md:h-24 max-md:right-0 max-md:max-w-full max-md:py-12 max-md:px-8 max-md:basis-full md:max-lg:right-64 md:max-lg:max-w-[66.6667%] md:max-lg:basis-2/3 2xl:right-275"
                            data-cid="n85"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="block text-left bg-background"
                      data-cid="n86"
                    >
                      <div
                        className="flex max-w-378 py-21 px-22 flex-col items-start mx-auto max-md:py-15 max-lg:px-9 md:max-lg:py-17"
                        data-cid="n87"
                      >
                        <span
                          className="block mt-4 text-primary leading-6.5 tracking-[0.2px] max-md:mt-2"
                          data-cid="n88"
                        >
                          <h4
                            className="block mb-5 text-color-001 text-2xl leading-9 tracking-[normal] max-md:text-lg max-md:leading-7 md:max-lg:text-[1.375rem] md:max-lg:leading-8"
                            data-cid="n89"
                            data-component="heading"
                          >
                            {
                              "“I love that Bang & Olufsen approaches both sound and design with the same level of care and craftsmanship, creating products that are as beautiful to live with as they are to listen to. I'm thrilled to be partnering with the brand because we share a passion for creativity, quality, and creating experiences that connect with people on an emotional level.”"
                            }
                          </h4>
                          <p
                            className="block whitespace-pre-wrap"
                            data-cid="n90"
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      className="block text-center bg-background"
                      data-cid="n91"
                    >
                      <div className="flex max-w-378 py-21 px-22 flex-col items-center mx-auto max-md:py-15 max-lg:px-9 md:max-lg:py-17">
                        <h2
                          className="block pt-4 text-color-001 text-5xl leading-16 tracking-[-0.5px] max-md:pt-2 max-md:text-2xl max-md:leading-8 md:max-lg:text-4xl md:max-lg:leading-12"
                          data-cid="n93"
                          data-component="heading"
                        >
                          Something to look forward to...
                        </h2>
                        <span
                          className="block mt-4 text-color-001 leading-6.5 tracking-[0.2px] max-md:mt-2"
                          data-cid="n94"
                        >
                          <p
                            className="block whitespace-pre-wrap"
                            data-cid="n95"
                          >
                            {
                              "Over the next two years, Bang & Olufsen and John Legend will showcase our shared vision through curated performances, cultural moments, and storytelling, with each activation reflecting the idea that beautiful sound is born from true craftsmanship. Further details on upcoming experiences and activations will be announced in the coming months."
                            }
                          </p>
                        </span>
                      </div>
                    </div>
                    <div
                      className="block text-center bg-background"
                      data-cid="n96"
                    >
                      <div
                        className="flex max-w-378 pt-12 pb-30 px-22 flex-col items-center mx-auto max-md:pt-6 max-md:pb-24 max-lg:px-9 md:max-lg:pt-8 md:max-lg:pb-26"
                        data-cid="n97"
                      >
                        <h2
                          className="block pt-4 text-color-001 text-5xl leading-16 tracking-[-0.5px] max-md:pt-2 max-md:text-2xl max-md:leading-8 md:max-lg:text-4xl md:max-lg:leading-12"
                          data-cid="n98"
                          data-component="heading"
                        >
                          John Legend’s picks
                        </h2>
                      </div>
                    </div>
                    <div
                      className="block max-w-378 mt-7.5 mb-15 px-9 mx-auto max-lg:mb-[4.6875rem] max-lg:px-4"
                      data-cid="n99"
                    >
                      <ul
                        className="flex mt-[2.1875rem] -mx-4 flex-wrap justify-center gap-4 grid-cols-[repeat(12,_1fr)] [grid-auto-flow:dense] [list-style-type:none] list-outside max-md:mt-7.5 max-md:-mx-1.5 md:max-lg:mt-5 md:max-lg:-mx-3"
                        data-cid="n100"
                      >
                        <li
                          className="w-73.5 list-item max-w-[95%] max-h-[28.8rem] shrink-0 basis-[calc(25%_-_16px)] bg-surface [animation-name:gDibJC] [animation-duration:0.5s] [animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] [animation-fill-mode:forwards] max-md:w-[337.3px] max-md:min-h-[262.5px] max-md:basis-full max-lg:max-h-none md:max-lg:w-[300.7px] md:max-lg:basis-[calc(41.6667%_-_16px)] 2xl:opacity-0"
                          data-cid="n101"
                        >
                          <div
                            className="h-full flex relative pb-4 flex-col justify-center bg-surface"
                            data-cid="n102"
                          >
                            <article
                              className="h-full flex relative flex-col overflow-hidden text-center"
                              data-cid="n103"
                            >
                              <div className="h-full block" data-cid="n104">
                                <a
                                  className="h-full flex relative flex-col justify-between overflow-hidden text-muted-foreground cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]"
                                  data-cid="n105"
                                  data-component="link"
                                  href="/en/int/headphones/beoplay-h100"
                                >
                                  <div
                                    className="flex relative flex-col justify-between overflow-hidden"
                                    data-cid="n106"
                                  >
                                    <div
                                      className="block overflow-hidden object-cover"
                                      data-cid="n107"
                                    >
                                      <div
                                        className="block relative group"
                                        data-cid="n108"
                                      >
                                        <div
                                          className="block relative pt-[63.5px] pb-[49.5px] px-8 object-cover bg-surface max-md:py-[2.4375rem] max-md:px-3 md:max-lg:pt-18 md:max-lg:pb-14 md:max-lg:px-[26.5px] hover:opacity-100 focus:opacity-100"
                                          data-cid="n109"
                                        >
                                          <div
                                            className="block"
                                            data-cid="n110"
                                          >
                                            <picture
                                              className="inline"
                                              data-cid="n111"
                                            >
                                              <img
                                                className="w-full h-57 block relative max-w-full px-px overflow-clip object-cover max-md:h-78 md:max-lg:h-61.5 2xl:h-71.5"
                                                data-cid="n113"
                                                data-component="image"
                                                alt="Brown and silver h100 headphones"
                                                sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px"
                                                src="/assets/cloned/images/e222730e0fef.webp"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div
                                          className="w-73.5 h-[21.3125rem] block absolute top-0 left-0 z-1 opacity-0 object-cover bg-surface pointer-events-none group-hover:opacity-100"
                                          data-cid="n114"
                                        >
                                          <div
                                            className="h-full block pointer-events-none"
                                            data-cid="n115"
                                          >
                                            <picture
                                              className="inline pointer-events-none"
                                              data-cid="n116"
                                            >
                                              <img
                                                className="w-full h-[21.3125rem] block relative max-w-full px-px overflow-clip object-cover pointer-events-none max-md:h-97.5 md:max-lg:h-93.5 2xl:h-[24.8125rem]"
                                                data-cid="n118"
                                                data-component="image"
                                                alt="Person wearing brown and silver Beoplay H100 Centennial Colleciton headphones in white shirt leaning on blue cushioned furniture against light green wall."
                                                sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px"
                                                src="/assets/cloned/images/a88aeb43636f.webp"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div
                                          className="block"
                                          data-cid="n119"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="flex pt-4 px-4 flex-col justify-end items-start self-stretch max-lg:justify-center"
                                    data-cid="n120"
                                  >
                                    <div
                                      className="block text-color-001 text-left"
                                      data-cid="n121"
                                    >
                                      <span
                                        className="inline text-xs leading-5 tracking-[0.1px]"
                                        data-cid="n122"
                                      >
                                        Beoplay H100
                                      </span>
                                    </div>
                                    <div
                                      className="w-full flex relative justify-between"
                                      data-cid="n123"
                                    >
                                      <div
                                        className="w-full flex relative flex-col justify-start items-start text-color-001 text-left max-lg:[text-align:inherit]"
                                        data-cid="n124"
                                      >
                                        <div
                                          className="block max-md:flex max-md:items-center"
                                          data-cid="n125"
                                        >
                                          <div
                                            className="block max-md:flex max-md:flex-wrap max-md:items-center"
                                            data-cid="n126"
                                          >
                                            <span
                                              className="inline max-md:block"
                                              data-cid="n127"
                                            >
                                              <span
                                                className="inline text-xs leading-5 tracking-[0.1px]"
                                                data-cid="n128"
                                              >
                                                $2,300
                                              </span>{" "}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="w-full flex relative z-3 max-h-[1.5625rem] px-4 justify-between items-center self-start bg-surface"
                                    data-cid="n129"
                                  >
                                    <p
                                      className="flex text-color-001 text-xs leading-5 tracking-[0.1px] whitespace-pre-wrap"
                                      data-cid="n130"
                                    >
                                      <span className="block" data-cid="n131">
                                        5 Colours
                                      </span>
                                    </p>
                                    <div
                                      className="block max-w-[1.5625rem] max-h-[1.5625rem] text-foreground cursor-default"
                                      data-cid="n132"
                                      data-component="button"
                                      type="button"
                                    >
                                      <span
                                        className="inline-block relative max-w-full overflow-hidden"
                                        data-cid="n133"
                                      >
                                        <span
                                          className="block max-w-full"
                                          data-cid="n134"
                                        >
                                          <img
                                            className="w-[1.5625rem] h-[1.5625rem] block max-w-full overflow-clip"
                                            data-cid="n135"
                                            data-component="image"
                                            alt=""
                                            aria-hidden="true"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                          />
                                        </span>
                                        <img
                                          className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full rounded-[50%] justify-center items-center overflow-clip cursor-pointer"
                                          data-cid="n136"
                                          data-component="avatar"
                                          alt="plus-open-variants-icon"
                                          src="/assets/cloned/svg/b333d902dbee.svg"
                                          srcSet="/assets/cloned/svg/b333d902dbee.svg 1x, /assets/cloned/svg/b333d902dbee.svg 2x"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </article>
                          </div>
                        </li>
                        <li
                          className="w-73.5 list-item max-w-[95%] max-h-[28.8rem] shrink-0 basis-[calc(25%_-_16px)] bg-surface [animation-name:gDibJC] [animation-duration:0.55s] [animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] [animation-delay:0.01s] [animation-fill-mode:forwards] max-md:w-[337.3px] max-md:min-h-[262.5px] max-md:basis-full max-lg:max-h-none md:max-lg:w-[300.7px] md:max-lg:basis-[calc(41.6667%_-_16px)] 2xl:opacity-0"
                          data-cid="n137"
                        >
                          <div
                            className="h-full flex relative pb-4 flex-col justify-center bg-surface"
                            data-cid="n138"
                          >
                            <article
                              className="h-full flex relative flex-col overflow-hidden text-center"
                              data-cid="n139"
                            >
                              <div className="h-full block" data-cid="n140">
                                <a
                                  className="h-full flex relative flex-col justify-between overflow-hidden text-muted-foreground cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]"
                                  data-cid="n141"
                                  data-component="link"
                                  href="/en/int/speakers/beosound-a9"
                                >
                                  <div
                                    className="flex relative flex-col justify-between overflow-hidden"
                                    data-cid="n142"
                                  >
                                    <div
                                      className="block overflow-hidden object-cover"
                                      data-cid="n143"
                                    >
                                      <div
                                        className="block relative group"
                                        data-cid="n144"
                                      >
                                        <div
                                          className="block relative pt-[63.5px] pb-[49.5px] px-8 object-cover bg-surface max-md:py-[2.4375rem] max-md:px-3 md:max-lg:pt-18 md:max-lg:pb-14 md:max-lg:px-[26.5px] hover:opacity-100 focus:opacity-100"
                                          data-cid="n145"
                                        >
                                          <div
                                            className="block"
                                            data-cid="n146"
                                          >
                                            <picture
                                              className="inline"
                                              data-cid="n147"
                                            >
                                              <img
                                                className="w-full h-57 block relative max-w-full px-px overflow-clip object-cover max-md:h-78 md:max-lg:h-61.5 2xl:h-71.5"
                                                data-cid="n149"
                                                data-component="image"
                                                alt="Beosound A9 in Gold Tone"
                                                sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px"
                                                src="/assets/cloned/images/71f8a65f7a72.png"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div
                                          className="w-73.5 h-[21.3125rem] block absolute top-0 left-0 z-1 opacity-0 object-cover bg-surface pointer-events-none group-hover:opacity-100"
                                          data-cid="n150"
                                        >
                                          <div
                                            className="h-full block pointer-events-none"
                                            data-cid="n151"
                                          >
                                            <picture
                                              className="inline pointer-events-none"
                                              data-cid="n152"
                                            >
                                              <img
                                                className="w-full h-[21.3125rem] block relative max-w-full px-px overflow-clip object-cover pointer-events-none max-md:h-97.5 md:max-lg:h-93.5 2xl:h-[24.8125rem]"
                                                data-cid="n154"
                                                data-component="image"
                                                alt="Beosound A9 Gold Tone"
                                                sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px"
                                                src="/assets/cloned/images/d53ae0b73aea.jpg"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div
                                          className="block"
                                          data-cid="n155"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="flex pt-4 px-4 flex-col justify-end items-start self-stretch max-lg:justify-center"
                                    data-cid="n156"
                                  >
                                    <div
                                      className="block text-color-001 text-left"
                                      data-cid="n157"
                                    >
                                      <span
                                        className="inline text-xs leading-5 tracking-[0.1px]"
                                        data-cid="n158"
                                      >
                                        Beosound A9
                                      </span>
                                    </div>
                                    <div
                                      className="w-full flex relative justify-between"
                                      data-cid="n159"
                                    >
                                      <div
                                        className="w-full flex relative flex-col justify-start items-start text-color-001 text-left max-lg:[text-align:inherit]"
                                        data-cid="n160"
                                      >
                                        <div
                                          className="block max-md:flex max-md:items-center"
                                          data-cid="n161"
                                        >
                                          <div
                                            className="block max-md:flex max-md:flex-wrap max-md:items-center"
                                            data-cid="n162"
                                          >
                                            <span
                                              className="inline max-md:block"
                                              data-cid="n163"
                                            >
                                              <span
                                                className="inline text-xs leading-5 tracking-[0.1px]"
                                                data-cid="n164"
                                              >
                                                $4,650
                                              </span>{" "}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="w-full flex relative z-3 max-h-[1.5625rem] px-4 justify-between items-center self-start bg-surface"
                                    data-cid="n165"
                                  >
                                    <p
                                      className="flex text-color-001 text-xs leading-5 tracking-[0.1px] whitespace-pre-wrap"
                                      data-cid="n166"
                                    >
                                      <span className="block" data-cid="n167">
                                        4 Colours
                                      </span>
                                    </p>
                                    <div
                                      className="block max-w-[1.5625rem] max-h-[1.5625rem] text-foreground cursor-default"
                                      data-cid="n168"
                                      data-component="button"
                                      type="button"
                                    >
                                      <span
                                        className="inline-block relative max-w-full overflow-hidden"
                                        data-cid="n169"
                                      >
                                        <span
                                          className="block max-w-full"
                                          data-cid="n170"
                                        >
                                          <img
                                            className="w-[1.5625rem] h-[1.5625rem] block max-w-full overflow-clip"
                                            data-cid="n171"
                                            data-component="image"
                                            alt=""
                                            aria-hidden="true"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                          />
                                        </span>
                                        <img
                                          className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full rounded-[50%] justify-center items-center overflow-clip cursor-pointer"
                                          data-cid="n172"
                                          data-component="avatar"
                                          alt="plus-open-variants-icon"
                                          src="/assets/cloned/svg/b333d902dbee.svg"
                                          srcSet="/assets/cloned/svg/b333d902dbee.svg 1x, /assets/cloned/svg/b333d902dbee.svg 2x"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </article>
                          </div>
                        </li>
                        <li
                          className="w-73.5 list-item max-w-[95%] max-h-[28.8rem] shrink-0 basis-[calc(25%_-_16px)] bg-surface [animation-name:gDibJC] [animation-duration:0.6s] [animation-timing-function:cubic-bezier(0.165,_0.84,_0.44,_1)] [animation-delay:0.02s] [animation-fill-mode:forwards] max-md:w-[337.3px] max-md:min-h-[262.5px] max-md:basis-full max-md:[animation-duration:0.55s] max-md:[animation-delay:0.01s] max-lg:max-h-none md:max-lg:w-[300.7px] md:max-lg:basis-[calc(41.6667%_-_16px)] 2xl:opacity-0"
                          data-cid="n173"
                        >
                          <div
                            className="h-full flex relative pb-4 flex-col justify-center bg-surface"
                            data-cid="n174"
                          >
                            <article
                              className="h-full flex relative flex-col overflow-hidden text-center"
                              data-cid="n175"
                            >
                              <div className="h-full block" data-cid="n176">
                                <a
                                  className="h-full flex relative flex-col justify-between overflow-hidden text-muted-foreground cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]"
                                  data-cid="n177"
                                  data-component="link"
                                  href="/en/int/earphones/beograce"
                                >
                                  <div
                                    className="flex relative flex-col justify-between overflow-hidden"
                                    data-cid="n178"
                                  >
                                    <div
                                      className="block overflow-hidden object-cover"
                                      data-cid="n179"
                                    >
                                      <div
                                        className="block relative group"
                                        data-cid="n180"
                                      >
                                        <div
                                          className="block relative pt-[63.5px] pb-[49.5px] px-8 object-cover bg-surface max-md:py-[2.4375rem] max-md:px-3 md:max-lg:pt-18 md:max-lg:pb-14 md:max-lg:px-[26.5px] hover:opacity-100 focus:opacity-100"
                                          data-cid="n181"
                                        >
                                          <div
                                            className="block"
                                            data-cid="n182"
                                          >
                                            <picture
                                              className="inline"
                                              data-cid="n183"
                                            >
                                              <img
                                                className="w-full h-57 block relative max-w-full px-px overflow-clip object-cover max-md:h-78 md:max-lg:h-61.5 2xl:h-71.5"
                                                data-cid="n185"
                                                data-component="image"
                                                alt="Beo Grace in Honey Tone"
                                                sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px"
                                                src="/assets/cloned/images/bcd5b86c671e.png"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div
                                          className="w-73.5 h-[21.3125rem] block absolute top-0 left-0 z-1 opacity-0 object-cover bg-surface pointer-events-none group-hover:opacity-100"
                                          data-cid="n186"
                                        >
                                          <div
                                            className="h-full block pointer-events-none"
                                            data-cid="n187"
                                          >
                                            <picture
                                              className="inline pointer-events-none"
                                              data-cid="n188"
                                            >
                                              <img
                                                className="w-full h-[21.3125rem] block relative max-w-full px-px overflow-clip object-cover pointer-events-none max-md:h-97.5 md:max-lg:h-93.5 2xl:h-[24.8125rem]"
                                                data-cid="n190"
                                                data-component="image"
                                                alt="Grace in ear"
                                                sizes="(min-width: 1024px) 1440px, (min-width: 768px) 1024px, 375px"
                                                src="/assets/cloned/images/2ca21d411bf8.webp"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                        <div className="block" data-cid="n191">
                                          <div
                                            className="w-[1.8125rem] h-4 block absolute bottom-0 left-4 z-0 text-primary [font-family:BeoLogue,_BeoSupreme,_'Lexend_Deca',_Arial,_Helvetica,_sans-serif]"
                                            data-cid="n192"
                                          >
                                            <div
                                              className="flex flex-col"
                                              data-cid="n193"
                                            >
                                              <span
                                                className="block rounded-xs self-start text-xs font-medium leading-4 text-left"
                                                data-cid="n194"
                                              >
                                                New
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="flex pt-4 px-4 flex-col justify-end items-start self-stretch max-lg:justify-center"
                                    data-cid="n195"
                                  >
                                    <div
                                      className="block text-color-001 text-left"
                                      data-cid="n196"
                                    >
                                      <span
                                        className="inline text-xs leading-5 tracking-[0.1px]"
                                        data-cid="n197"
                                      >
                                        Beo Grace
                                      </span>
                                    </div>
                                    <div
                                      className="w-full flex relative justify-between"
                                      data-cid="n198"
                                    >
                                      <div
                                        className="w-full flex relative flex-col justify-start items-start text-color-001 text-left max-lg:[text-align:inherit]"
                                        data-cid="n199"
                                      >
                                        <div
                                          className="block max-md:flex max-md:items-center"
                                          data-cid="n200"
                                        >
                                          <div
                                            className="block max-md:flex max-md:flex-wrap max-md:items-center"
                                            data-cid="n201"
                                          >
                                            <span
                                              className="inline max-md:block"
                                              data-cid="n202"
                                            >
                                              <span
                                                className="inline text-xs leading-5 tracking-[0.1px]"
                                                data-cid="n203"
                                              >
                                                $1,500
                                              </span>{" "}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="w-full flex relative z-3 max-h-[1.5625rem] px-4 justify-between items-center self-start bg-surface"
                                    data-cid="n204"
                                  >
                                    <p
                                      className="flex text-color-001 text-xs leading-5 tracking-[0.1px] whitespace-pre-wrap"
                                      data-cid="n205"
                                    >
                                      <span className="block" data-cid="n206">
                                        2 Colours
                                      </span>
                                    </p>
                                    <div
                                      className="block max-w-[1.5625rem] max-h-[1.5625rem] text-foreground cursor-default"
                                      data-cid="n207"
                                      data-component="button"
                                      type="button"
                                    >
                                      <span
                                        className="inline-block relative max-w-full overflow-hidden"
                                        data-cid="n208"
                                      >
                                        <span
                                          className="block max-w-full"
                                          data-cid="n209"
                                        >
                                          <img
                                            className="w-[1.5625rem] h-[1.5625rem] block max-w-full overflow-clip"
                                            data-cid="n210"
                                            data-component="image"
                                            alt=""
                                            aria-hidden="true"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                          />
                                        </span>
                                        <img
                                          className="w-full h-full min-h-full block absolute top-0 left-0 min-w-full max-w-full max-h-full rounded-[50%] justify-center items-center overflow-clip cursor-pointer"
                                          data-cid="n211"
                                          data-component="avatar"
                                          alt="plus-open-variants-icon"
                                          src="/assets/cloned/svg/b333d902dbee.svg"
                                          srcSet="/assets/cloned/svg/b333d902dbee.svg 1x, /assets/cloned/svg/b333d902dbee.svg 2x"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </article>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <JohnLegendNewsletterSection />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="hidden" data-cid="n474">
          <div
            className="hidden 2xl:block"
            data-cid="n475"
            aria-modal="true"
            role="dialog"
          >
            <div
              className="hidden 2xl:w-70 2xl:h-full 2xl:block 2xl:fixed 2xl:top-0 2xl:min-w-70 2xl:bg-background"
              data-cid="n476"
            >
              <div
                className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden"
                data-cid="n477"
              />
              <div
                className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden"
                data-cid="n478"
              />
              <div className="hidden 2xl:block" data-cid="n479">
                <div className="hidden 2xl:block" data-cid="n480">
                  <div
                    className="hidden 2xl:flex 2xl:relative 2xl:pt-10.5 2xl:px-10 2xl:items-center"
                    data-cid="n481"
                  >
                    <button
                      className="hidden 2xl:w-[57.5px] 2xl:h-4.5 2xl:flex 2xl:relative 2xl:rounded-[1px] 2xl:items-center 2xl:text-center 2xl:cursor-pointer"
                      data-cid="n482"
                      aria-haspopup="dialog"
                      aria-label="Close"
                      type="button"
                    >
                      <Icon3 cid={"n483"} />
                      <p
                        className="hidden 2xl:block 2xl:text-color-001 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-pre-wrap"
                        data-cid="n484"
                      >
                        Close
                      </p>
                    </button>
                  </div>
                  <div
                    className="hidden 2xl:block 2xl:pt-10 2xl:pb-8"
                    data-cid="n485"
                  >
                    <div
                      className="hidden 2xl:h-203 2xl:flex 2xl:px-10 2xl:flex-col 2xl:justify-between 2xl:overflow-x-hidden 2xl:overflow-y-auto"
                      data-cid="n486"
                    >
                      <div
                        className="hidden 2xl:h-100.5 2xl:block"
                        data-cid="n487"
                      >
                        <ul
                          className="hidden 2xl:block 2xl:mb-14 2xl:[list-style-type:none] 2xl:list-outside"
                          data-cid="n488"
                        >
                          {ListRow3_data.map((d, i) => (
                            <ListRow3 key={i} d={d} cids={ListRow3_cids[i]} />
                          ))}
                        </ul>
                        <ul
                          className="hidden 2xl:block 2xl:mb-14 2xl:[list-style-type:none] 2xl:list-outside"
                          data-cid="n499"
                        >
                          <li
                            className="hidden 2xl:h-7.5 2xl:flex 2xl:mb-4 2xl:items-center 2xl:overflow-hidden 2xl:leading-6.5 2xl:tracking-[0.2px]"
                            data-cid="n500"
                          >
                            <a
                              className="hidden 2xl:block 2xl:relative 2xl:pb-1 2xl:text-color-001 2xl:[background-size:0%_2px] 2xl:[background-position:0%_100%] 2xl:bg-no-repeat 2xl:cursor-pointer"
                              data-cid="n501"
                              href="/en/int/composer"
                              target="_parent"
                            >
                              Design your own
                            </a>
                          </li>
                          <li
                            className="hidden 2xl:h-7.5 2xl:flex 2xl:mb-4 2xl:items-center 2xl:overflow-hidden 2xl:leading-6.5 2xl:tracking-[0.2px]"
                            data-cid="n502"
                          >
                            <a
                              className="hidden 2xl:block 2xl:relative 2xl:pb-1 2xl:text-color-001 2xl:[background-size:0%_2px] 2xl:[background-position:0%_100%] 2xl:bg-no-repeat 2xl:cursor-pointer"
                              data-cid="n503"
                              href="/en/int/stories"
                            >
                              {"The World of B&O"}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="hidden 2xl:h-22 2xl:block"
                        data-cid="n504"
                      >
                        <ul
                          className="hidden 2xl:block 2xl:mb-6 2xl:[list-style-type:none] 2xl:list-outside"
                          data-cid="n505"
                        >
                          <li
                            className="hidden 2xl:h-6 2xl:flex 2xl:mb-4 2xl:items-center 2xl:overflow-hidden 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]"
                            data-cid="n506"
                          >
                            <a
                              className="hidden 2xl:block 2xl:relative 2xl:pb-1 2xl:text-color-001 2xl:[background-size:0%_2px] 2xl:[background-position:0%_100%] 2xl:bg-no-repeat 2xl:cursor-pointer"
                              data-cid="n507"
                              href="/en/for-professionals/corporate/brand-audio-visual"
                              target="_parent"
                            >
                              {"B&O Professional"}
                            </a>
                          </li>
                          <li
                            className="hidden 2xl:h-6 2xl:flex 2xl:mb-4 2xl:items-center 2xl:overflow-hidden 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]"
                            data-cid="n508"
                          >
                            <a
                              className="hidden 2xl:block 2xl:relative 2xl:pb-1 2xl:text-color-001 2xl:[background-size:0%_2px] 2xl:[background-position:0%_100%] 2xl:bg-no-repeat 2xl:cursor-pointer"
                              data-cid="n509"
                              href="/en/int/partners/corporate/partner-audio"
                              target="_parent"
                            >
                              Partner Audio
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <hr
                      className="hidden 2xl:box-content 2xl:w-70 2xl:h-0 2xl:border-r 2xl:border-solid 2xl:border-r-border 2xl:border-b 2xl:border-b-border 2xl:border-l 2xl:border-l-border 2xl:block 2xl:min-w-70 2xl:mr-3.5 2xl:mb-6 2xl:-ml-4 2xl:text-clr-0"
                      data-cid="n510"
                    />
                    <div
                      className="hidden 2xl:block 2xl:z-2 2xl:pb-8 2xl:px-10"
                      data-cid="n511"
                    >
                      <div className="hidden 2xl:flex 2xl:mb-2" data-cid="n512">
                        <a
                          className="hidden 2xl:flex 2xl:text-muted-foreground 2xl:cursor-pointer"
                          data-cid="n513"
                          aria-label="Store Locator"
                          href="https://stores.bang-olufsen.com/en/search?country=INT"
                        >
                          <div
                            className="hidden 2xl:flex 2xl:items-center"
                            data-cid="n514"
                          >
                            <img
                              className="hidden 2xl:w-8 2xl:h-8 2xl:block 2xl:max-w-full 2xl:mr-2 2xl:overflow-clip"
                              data-cid="n515"
                              alt="Store Locator"
                              aria-hidden="true"
                              src="/assets/cloned/svg/7e8af1a78bb6.svg"
                              title="Store Locator"
                            />
                            <div
                              className="hidden 2xl:flex 2xl:relative 2xl:text-color-001"
                              data-cid="n516"
                            >
                              <span
                                className="hidden 2xl:block 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px] 2xl:whitespace-nowrap"
                                data-cid="n517"
                              >
                                {" Find Store "}
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="hidden 2xl:block" data-cid="n518">
                        <button
                          className="hidden 2xl:w-[85.7px] 2xl:h-8 2xl:flex 2xl:min-w-8 2xl:justify-center 2xl:text-center 2xl:cursor-pointer"
                          data-cid="n519"
                          aria-label="Account"
                          role="link"
                          type="button"
                        >
                          <div
                            className="hidden 2xl:flex 2xl:items-center"
                            data-cid="n520"
                          >
                            <img
                              className="hidden 2xl:w-8 2xl:h-8 2xl:block 2xl:max-w-full 2xl:mr-2 2xl:overflow-clip"
                              data-cid="n521"
                              alt="Login/Create account"
                              src="/assets/cloned/svg/96d563c45e44.svg"
                            />
                            <div
                              className="hidden 2xl:flex 2xl:relative 2xl:text-color-001"
                              data-cid="n522"
                            >
                              <span
                                className="hidden 2xl:block 2xl:text-xs 2xl:leading-5 2xl:tracking-[0.1px]"
                                data-cid="n523"
                              >
                                {" Account "}
                              </span>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden 2xl:w-px 2xl:h-0 2xl:block 2xl:fixed 2xl:top-px 2xl:left-px 2xl:overflow-hidden"
                data-cid="n524"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <DittoMotion
        spec={{
          waapi: [],
          rotators: [],
          reveals: [
            {
              cid: "n111",
              opacity: "0",
              transform: "none",
              transition: "opacity 0.4s ease-in-out",
            },
            {
              cid: "n113",
              opacity: "0",
              transform: "none",
              transition: "opacity 0.3s ease-in-out",
            },
            {
              cid: "n144",
              opacity: "0",
              transform: "none",
              transition: "opacity 0.4s ease-in-out",
            },
            {
              cid: "n146",
              opacity: "0",
              transform: "none",
              transition: "opacity 0.3s ease-in-out",
            },
            {
              cid: "n147",
              opacity: "0",
              transform: "none",
              transition: "opacity 0.4s ease-in-out",
            },
            {
              cid: "n177",
              opacity: "0",
              transform: "none",
              transition: "opacity 0.4s ease-in-out",
            },
            {
              cid: "n179",
              opacity: "0",
              transform: "none",
              transition: "opacity 0.3s ease-in-out",
            },
            {
              cid: "n180",
              opacity: "0",
              transform: "none",
              transition: "opacity 0.4s ease-in-out",
            },
            {
              cid: "n210",
              opacity: "0",
              transform: "none",
              transition: "opacity 0.4s ease-in-out",
            },
          ],
          marquees: [],
        }}
      />
      <DropdownMenu
        menus={[
          {
            trigger: "n337",
            hoverOpen: false,
            gap: 0,
            align: "left",
            html: '<div style="position:absolute;margin:0;display:block;box-sizing:border-box;width:600px;height:760px;min-width:auto;max-width:100%;min-height:auto;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;background-color:rgb(255, 255, 255);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;font-style:normal;line-height:18.4px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:hidden auto">\n                     <div style="display:block;position:static;box-sizing:border-box;width:600px;height:1054.41px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(246, 246, 246);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:flex-end;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                       <div style="display:block;position:static;box-sizing:border-box;width:600px;height:250.406px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:40px;padding-right:40px;padding-bottom:40px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                         \n                         <div style="display:block;position:static;box-sizing:border-box;width:520px;height:170.406px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                           <p style="display:block;position:static;box-sizing:border-box;width:520px;height:32.4062px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:20px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:27px;font-weight:500;font-style:normal;line-height:32.4px;letter-spacing:-0.5px;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">This website uses cookies</p>\n                           <div style="display:block;position:static;box-sizing:border-box;width:520px;height:118px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:16.5px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:pre-line;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                             Click to agree and allow us to improve and personalize your experience on our website. You can change your mind at any time.\n                             <a style="display:inline;position:static;box-sizing:border-box;width:auto;height:auto;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(35, 73, 35);border-right-color:rgb(35, 73, 35);border-bottom-color:rgb(35, 73, 35);border-left-color:rgb(35, 73, 35);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(35, 73, 35);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:underline;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" href="javascript:TogglePage(this, \'coiPage-3\');">\n                               About cookies\n                             </a>\n                             <a style="display:block;position:static;box-sizing:border-box;width:520px;height:18px;min-width:0px;max-width:none;min-height:0px;margin-top:16px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(35, 73, 35);border-right-color:rgb(35, 73, 35);border-bottom-color:rgb(35, 73, 35);border-left-color:rgb(35, 73, 35);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(35, 73, 35);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:underline;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" href="https://business.safety.google/privacy/" aria-label="Google privacy policy">\n                               Google privacy policy\n                             </a>\n                           </div>\n                         </div>\n                       </div>\n                       <div style="display:block;position:relative;box-sizing:border-box;width:600px;height:653px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible" aria-label="Cookie policy">\n                         <div style="display:flex;position:static;box-sizing:border-box;width:600px;height:48px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:20px;margin-left:0px;padding-top:20px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                           \n                           <button style="display:block;position:static;box-sizing:border-box;width:71px;height:18px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:underline;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" aria-label="Decline all">Decline all</button>\n                         </div>\n                         <div style="display:flex;position:static;box-sizing:border-box;width:600px;height:95px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:35px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                           <div style="display:flex;position:relative;box-sizing:border-box;width:520px;height:95px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                             <div style="display:block;position:static;box-sizing:border-box;width:145px;height:28px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                               <button style="display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible">\n                                 <div style="display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible"></div>\n                                 <p style="display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" aria-label="Required">Required</p>\n                               </button>\n                             </div>\n                             <div style="display:block;position:static;box-sizing:border-box;width:375px;height:90px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">Required cookies help make a website navigable by activating basic functions such as page navigation and access to secure website areas. Without these cookies, the website would not be able to work properly.</div>\n                           </div>\n                           \n                         </div>\n                         <div style="display:flex;position:static;box-sizing:border-box;width:600px;height:78px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:35px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                           <div style="display:flex;position:relative;box-sizing:border-box;width:520px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                             <div style="display:block;position:static;box-sizing:border-box;width:145px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                               <button style="display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible">\n                                 <div style="display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible"></div>\n                                 <p style="display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" aria-label="Functional">Functional</p>\n                               </button>\n                               <div style="display:block;position:static;box-sizing:border-box;width:145px;height:50px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:10px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                                 <label style="display:flex;position:relative;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column-reverse;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible">\n                                   <input style="display:block;position:absolute;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:0;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible">\n                                   <span style="display:block;position:relative;box-sizing:content-box;width:65px;height:40px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;background-color:rgb(44, 98, 44);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible"></span>\n                                 </label>\n                               </div>\n                             </div>\n                             <div style="display:block;position:static;box-sizing:border-box;width:375px;height:72px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">Functional cookies make it possible to save information that changes the way the website appears or acts. For instance your preferred language or region.</div>\n                           </div>\n                           \n                         </div>\n                         <div style="display:flex;position:static;box-sizing:border-box;width:600px;height:78px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:35px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                           <div style="display:flex;position:relative;box-sizing:border-box;width:520px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                             <div style="display:block;position:static;box-sizing:border-box;width:145px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                               <button style="display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible">\n                                 <div style="display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible"></div>\n                                 <p style="display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" aria-label="Statistical">Statistical</p>\n                               </button>\n                               <div style="display:block;position:static;box-sizing:border-box;width:145px;height:50px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:10px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                                 <label style="display:flex;position:relative;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column-reverse;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible">\n                                   <input style="display:block;position:absolute;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:0;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible">\n                                   <span style="display:block;position:relative;box-sizing:content-box;width:65px;height:40px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;background-color:rgb(44, 98, 44);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible"></span>\n                                 </label>\n                               </div>\n                             </div>\n                             <div style="display:block;position:static;box-sizing:border-box;width:375px;height:54px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">Statistical cookies help the website owner understand how visitors interact with the website by collecting and reporting information.</div>\n                           </div>\n                           \n                         </div>\n                         <div style="display:flex;position:static;box-sizing:border-box;width:600px;height:95px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:35px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:0px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                           <div style="display:flex;position:relative;box-sizing:border-box;width:520px;height:95px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                             <div style="display:block;position:static;box-sizing:border-box;width:145px;height:78px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                               <button style="display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible">\n                                 <div style="display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible"></div>\n                                 <p style="display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" aria-label="Marketing">Marketing</p>\n                               </button>\n                               <div style="display:block;position:static;box-sizing:border-box;width:145px;height:50px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:10px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                                 <label style="display:flex;position:relative;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column-reverse;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:default;overflow:visible">\n                                   <input style="display:block;position:absolute;box-sizing:border-box;width:145px;height:40px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(0, 0, 0);border-right-color:rgb(0, 0, 0);border-bottom-color:rgb(0, 0, 0);border-left-color:rgb(0, 0, 0);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0);box-shadow:none;opacity:0;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible">\n                                   <span style="display:block;position:relative;box-sizing:content-box;width:65px;height:40px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-right-radius:100px;border-bottom-left-radius:100px;background-color:rgb(44, 98, 44);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:500;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible"></span>\n                                 </label>\n                               </div>\n                             </div>\n                             <div style="display:block;position:static;box-sizing:border-box;width:375px;height:90px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and interesting to the individual user and thus more valuable for publishers and third-party advertisers.</div>\n                           </div>\n                           \n                         </div>\n                         <div style="display:flex;position:static;box-sizing:border-box;width:600px;height:99px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:40px;padding-bottom:40px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                           <div style="display:flex;position:relative;box-sizing:border-box;width:520px;height:59px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:wrap;justify-content:normal;align-items:flex-start;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                             <div style="display:block;position:static;box-sizing:border-box;width:145px;height:28px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                               <button style="display:flex;position:static;box-sizing:border-box;width:148px;height:28px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:-3px;padding-top:0px;padding-right:15px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:baseline;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible">\n                                 <div style="display:block;position:relative;box-sizing:border-box;width:10px;height:10px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:10px;margin-bottom:0px;margin-left:3px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-width:0px;border-right-width:3px;border-bottom-width:3px;border-left-width:0px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible"></div>\n                                 <p style="display:block;position:static;box-sizing:border-box;width:110px;height:18px;min-width:110px;max-width:110px;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(25, 24, 23);border-right-color:rgb(25, 24, 23);border-bottom-color:rgb(25, 24, 23);border-left-color:rgb(25, 24, 23);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(25, 24, 23);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:-0.5px;text-align:left;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" aria-label="Unclassified">Unclassified</p>\n                               </button>\n                             </div>\n                             <div style="display:block;position:static;box-sizing:border-box;width:375px;height:54px;min-width:auto;max-width:none;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:20px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">We are in the process of classifying unclassified cookies together with the providers of the individual cookies.</div>\n                           </div>\n                           \n                         </div>\n                       </div>\n                       <div style="display:block;position:sticky;box-sizing:border-box;width:600px;height:151px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:10px;padding-left:0px;border-top-width:1px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:solid;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(221, 221, 221);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(255, 255, 255);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible" aria-label="menu">\n                         <div style="display:flex;position:static;box-sizing:border-box;width:600px;height:98px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgb(246, 246, 246);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">\n                           <button style="display:flex;position:static;box-sizing:border-box;width:156px;height:48px;min-width:auto;max-width:30%;min-height:auto;margin-top:5px;margin-right:5px;margin-bottom:5px;margin-left:0px;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(136, 136, 136);border-right-color:rgb(136, 136, 136);border-bottom-color:rgb(136, 136, 136);border-left-color:rgb(136, 136, 136);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:rgb(246, 246, 246);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:13px;font-weight:700;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:uppercase;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" aria-label="Decline all">Decline all</button>\n                           <button style="display:flex;position:static;box-sizing:border-box;width:156px;height:48px;min-width:auto;max-width:30%;min-height:auto;margin-top:5px;margin-right:5px;margin-bottom:5px;margin-left:5px;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(136, 136, 136);border-right-color:rgb(136, 136, 136);border-bottom-color:rgb(136, 136, 136);border-left-color:rgb(136, 136, 136);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:rgb(246, 246, 246);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:13px;font-weight:700;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:uppercase;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" aria-label="Save settings">Save settings</button>\n                           <button style="display:flex;position:static;box-sizing:border-box;width:156px;height:48px;min-width:auto;max-width:30%;min-height:auto;margin-top:5px;margin-right:0px;margin-bottom:5px;margin-left:5px;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-color:rgb(136, 136, 136);border-right-color:rgb(136, 136, 136);border-bottom-color:rgb(136, 136, 136);border-left-color:rgb(136, 136, 136);border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;background-color:rgb(246, 246, 246);color:rgb(0, 0, 0);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:13px;font-weight:700;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;text-transform:uppercase;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" aria-label="Accept all">Accept all</button>\n                         </div>\n                         <div style="display:flex;position:static;box-sizing:border-box;width:520px;height:22px;min-width:0px;max-width:100%;min-height:0px;margin-top:10px;margin-right:40px;margin-bottom:10px;margin-left:40px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:flex-end;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible"><span style="display:block;position:static;box-sizing:border-box;width:0px;height:0px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(34, 34, 34);border-right-color:rgb(34, 34, 34);border-bottom-color:rgb(34, 34, 34);border-left-color:rgb(34, 34, 34);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(34, 34, 34);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:15px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible"></span>\n                           <span style="display:block;position:static;box-sizing:border-box;width:76px;height:22px;min-width:auto;max-width:none;min-height:auto;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(68, 68, 68);border-right-color:rgb(68, 68, 68);border-bottom-color:rgb(68, 68, 68);border-left-color:rgb(68, 68, 68);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(68, 68, 68);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:10.5px;font-weight:400;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:visible">powered by: <a style="display:block;position:static;box-sizing:border-box;width:76px;height:10px;min-width:0px;max-width:none;min-height:0px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(35, 73, 35);border-right-color:rgb(35, 73, 35);border-bottom-color:rgb(35, 73, 35);border-left-color:rgb(35, 73, 35);border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;background-color:rgba(0, 0, 0, 0);color:rgb(35, 73, 35);box-shadow:none;opacity:1;font-family:BeoSupreme, &quot;Lexend Deca&quot;, Arial, Helvetica, sans-serif;font-size:8.4px;font-weight:600;font-style:normal;line-height:normal;letter-spacing:normal;text-align:right;text-transform:none;text-decoration-line:underline;white-space:normal;flex-direction:row;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:pointer;overflow:visible" href="https://cookieinformation.com/">Cookie Information</a></span>\n                         </div>\n                       </div>\n                     </div>\n                     \n                   </div>',
          },
        ]}
      />
    </>
  );
}
