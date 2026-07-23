// Semantic page content extracted from recognized recipe sections.

export type LogosItem = {
  alt: string;
  imgSrc: string;
  label: string;
  href: string;
  label2: string;
};
export const logos: LogosItem[] = [
    { alt: "30 days free trial icon", imgSrc: "/assets/cloned/svg/ef0537838652.svg", label: "30 days free trial icon", href: "/en/int/faq/returns", label2: "30-day free trial" },
    { alt: "Warranty icon", imgSrc: "/assets/cloned/svg/269e6512d4e2.svg", label: "Warranty icon", href: "/en/int/legal/limited-warranty", label2: "3 years warranty" },
    { alt: "Customer Service", imgSrc: "/assets/cloned/svg/604cf759f8e0.svg", label: "Customer Service", href: "https://support.bang-olufsen.com/hc/en-us/articles/360042167451-contact", label2: "24/7 Customer Care" }
];

export type MediaCardDataItem = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
  ariaLabel: string;
};
export const mediaCardData: MediaCardDataItem[] = [
    { alt: "A hand holding one of Beo Grace earphone piece with a beautiful sunset background behind", imgSrc: "/assets/cloned/images/d3c3900027f5.webp", srcSet: "/assets/cloned/images/a43e2d583c31.webp 640w, /assets/cloned/images/3e6741fac54d.webp 750w, /assets/cloned/images/33dbf6290e99.webp 828w, /assets/cloned/images/e7858d3860b6.webp 1080w, /assets/cloned/images/f4471e4040fb.webp 1200w, /assets/cloned/images/593aeb94cf76.webp 1920w, /assets/cloned/images/a4844b18fd13.webp 2048w, /assets/cloned/images/d3c3900027f5.webp 3840w", title: "Active Noise Cancellation and transparency", description: "Hear only what matters", ariaLabel: "Active Noise Cancellation and transparency (Open in tab overlay)" },
    { alt: "Side face of a man wearing Beo Grace Aluminium color, sitting outside near the ocean gazing somewhere", imgSrc: "/assets/cloned/images/c16699c5e70f.webp", srcSet: "/assets/cloned/images/8ba0a46db86a.webp 640w, /assets/cloned/images/4a13056c6736.webp 750w, /assets/cloned/images/39bc5989d841.webp 828w, /assets/cloned/images/34dbcf889825.webp 1080w, /assets/cloned/images/c8794c3842af.webp 1200w, /assets/cloned/images/b059e8212608.webp 1920w, /assets/cloned/images/8a5ae63f89cc.webp 2048w, /assets/cloned/images/c16699c5e70f.webp 3840w", title: "Wind reduction and call quality", description: "Mastering the elements", ariaLabel: "Wind Reduction and Call Quality (Open in tab overlay)" },
    { alt: "Beo Grace plugged in an ear and a woman touching the skin in front of her ear", imgSrc: "/assets/cloned/images/2a01630139c8.webp", srcSet: "/assets/cloned/images/d50150d00e43.webp 640w, /assets/cloned/images/81773aab9977.webp 750w, /assets/cloned/images/193fdc8edc96.webp 828w, /assets/cloned/images/9fef65d3a7e7.webp 1080w, /assets/cloned/images/56d11a312392.webp 1200w, /assets/cloned/images/420140567ec3.webp 1920w, /assets/cloned/images/d26860de3d88.webp 2048w, /assets/cloned/images/2a01630139c8.webp 3840w", title: "The magic touch", description: "NearTap™ and Force control", ariaLabel: "NearTap™ and Force Control (Open in tab overlay)" }
];

export type ListRow2DataItem = {
  description: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { description: "Charging case with wireless charging receiver" },
    { description: "Earbuds: Left and Right" },
    { description: "USB-C/USB-C cable for charging, 0.5 m" },
    { description: "USB-C/3,5mm plug for Dongle mode, 0.5m" },
    { description: "Silicone tips, 4 sizes" },
    { description: "Quick start guide Welcome Card" }
];

export type ProductsItem = {
  ariaLabel: string;
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  ariaLabel2: string;
  href2: string;
  title: string;
};
export const products: ProductsItem[] = [
    { ariaLabel: "Beo Grace in Honey Tone", href: "/en/int/earphones/beograce", alt: "Beo Grace in Honey Tone", imgSrc: "/assets/cloned/images/c1f4f6dea5b0.png", srcSet: "/assets/cloned/images/2b7f7a309675.png 1x, /assets/cloned/images/c1f4f6dea5b0.png 2x", ariaLabel2: "Beo Grace", href2: "/en/int/earphones/beograce", title: "Beo Grace" },
    { ariaLabel: "Beoplay Eleven in Natural Aluminium with case and earbuds next to each other", href: "/en/int/earphones/beoplay-eleven", alt: "Beoplay Eleven in Natural Aluminium with case and earbuds next to each other", imgSrc: "/assets/cloned/images/984b61ff2093.png", srcSet: "/assets/cloned/images/13d01223d190.png 1x, /assets/cloned/images/984b61ff2093.png 2x", ariaLabel2: "Beoplay Eleven", href2: "/en/int/earphones/beoplay-eleven", title: "Beoplay Eleven" },
    { ariaLabel: "Brown and silver h100 headphones", href: "/en/int/headphones/beoplay-h100", alt: "Brown and silver h100 headphones", imgSrc: "/assets/cloned/images/5b0c4889fab4.webp", srcSet: "/assets/cloned/images/608e6479d7b2.webp 1x, /assets/cloned/images/5b0c4889fab4.webp 2x", ariaLabel2: "Beoplay H100", href2: "/en/int/headphones/beoplay-h100", title: "Beoplay H100" }
];

export type TileDataItem = {
  description: string;
};
export const tileData: TileDataItem[] = [
    { description: "Full Adaptive ANC EarSense™ TrueTransparency™ with 5 levels in the App Dolby Spatial Audio" },
    { description: "Active Noise Cancellation Transparency Mode" },
    { description: "Adaptive Active Noise Cancellation (Total: 10 microphones 2 dedicated Mics for ANC/Transparency function Wind Guard) True Transparency™" }
];

export type Tile2DataItem = {
  description: string;
};
export const tile2Data: Tile2DataItem[] = [
    { description: "Full Adaptive ANC EarSense™ TrueTransparency™ with 5 levels in the App Dolby Spatial Audio" },
    { description: "Active Noise Cancellation Transparency Mode" },
    { description: "Adaptive Active Noise Cancellation (Total: 10 microphones 2 dedicated Mics for ANC/Transparency function Wind Guard) True Transparency™" }
];

export type Tile3DataItem = {
  description: string;
};
export const tile3Data: Tile3DataItem[] = [
    { description: "Up to 4.5 hours with ANC (Earphones only) Up to 17 hours with ANC (Including charging case)" },
    { description: "Up to 6 hours with ANC (Earphones only) Up to 20 hours with ANC (Including charging case) Up to 8 hours without ANC (Earphones only) Up to 28 hours total without ANC (Including charging case)" },
    { description: "32 hours with Active Noise Cancellation 30 hours with Spatial Audio and Headtracking" }
];

export type Tile4DataItem = {
  description: string;
};
export const tile4Data: Tile4DataItem[] = [
    { description: "6 x MEMS, omni-directional (beam directional for speech) Wind Guard" },
    { description: "6 x MEMS, omni-directional (beam directional for speech) Wind Guard" },
    { description: "Total: 10 4 Digital MEMS Voice Mic 4 MEMS Feed Forward Mic 2 Analogue Feedback Mic for ANC/Transparency function Wind Guard" }
];

export type Tile5DataItem = {
  description: string;
};
export const tile5Data: Tile5DataItem[] = [
    { description: "IP57 (Earphones) IP54 (Charging case)" },
    { description: "IP57 (Earphones only)" },
    { description: "IP53" }
];

export type Tile6DataItem = {
  description: string;
};
export const tile6Data: Tile6DataItem[] = [
    { description: "Up to 4.5 hours with ANC (Earphones only) Up to 17 hours with ANC (Including charging case)" },
    { description: "Up to 6 hours with ANC (Earphones only) Up to 20 hours with ANC (Including charging case) Up to 8 hours without ANC (Earphones only) Up to 28 hours total without ANC (Including charging case)" },
    { description: "32 hours with Active Noise Cancellation 30 hours with Spatial Audio and Headtracking" }
];

export type Tile7DataItem = {
  description: string;
};
export const tile7Data: Tile7DataItem[] = [
    { description: "Bluetooth 5.3" },
    { description: "Bluetooth 5.2" },
    { description: "Bluetooth 5.3" }
];

export type Tile8DataItem = {
  description: string;
};
export const tile8Data: Tile8DataItem[] = [
    { description: "IP57 (Earphones) IP54 (Charging case)" },
    { description: "IP57 (Earphones only)" },
    { description: "IP53" }
];

export type ListRow3DataItem = {
  ariaLabel?: string;
  href: string;
  target: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { ariaLabel: "read about shipping and delivery conditions", href: "/en/int/faq/shipping-and-delivery", target: "_parent", label: "Shipping and Delivery" },
    { ariaLabel: "Read about our returns conditions", href: "/en/int/faq/returns", target: "_parent", label: "Returns" },
    { ariaLabel: "Service and Support. The link will open a new window with the support website", href: "https://support.bang-olufsen.com/hc/en-us", target: "_parent", label: "Product Support" },
    { ariaLabel: "Contact us - Footer link", href: "https://support.bang-olufsen.com/hc/en-us/articles/360042167451", target: "_parent", label: "Contact us" },
    { href: "/en/int/faq", target: "_parent", label: "FAQ" },
    { href: "https://stores.bang-olufsen.com/en/search", target: "_self", label: "Find store" }
];

export type ListRow4DataItem = {
  href: string;
  target?: string;
  label: string;
  ariaLabel?: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/en/int/story/about-bang-and-olufsen", target: "_parent", label: "About us" },
    { href: "/en/int/story/responsibility", target: "_parent", ariaLabel: "Read more about our responsibility topics", label: "Responsibility" },
    { href: "https://investor.bang-olufsen.com/", label: "Investors" },
    { href: "/en/int/story/careers", label: "Careers" },
    { href: "https://bang-olufsen.presscloud.com/digitalshowroom/#/gallery", target: "_parent", ariaLabel: "Press link", label: "Press" },
    { href: "/en/int/story/custom-integration", label: "Custom integration" },
    { href: "/en/int/story/become-a-retailer", label: "Become a sales partner" },
    { href: "/en/int/story/factory-tour", label: "Factory tour" }
];

export type CtaSectionContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSectionContent = {
  title?: string;
  actions: CtaSectionContentAction[];
};
export const ctaSectionContent: CtaSectionContent = {
  "title": "Boundless sound",
  "actions": [
    {
      "label": "Learn more about Spatial audio",
      "href": "/en/int/story/spatial-audio"
    }
  ]
};

export type CtaSection2ContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSection2Content = {
  title?: string;
  actions: CtaSection2ContentAction[];
};
export const ctaSection2Content: CtaSection2Content = {
  "title": "Built to take you further​",
  "actions": []
};

