// Semantic page content extracted from recognized recipe sections.

export type ListRowDataItem = {
  ariaLabel?: string;
  href: string;
  target: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { ariaLabel: "read about shipping and delivery conditions", href: "/en/int/faq/shipping-and-delivery", target: "_parent", label: "Shipping and Delivery" },
    { ariaLabel: "Read about our returns conditions", href: "/en/int/faq/returns", target: "_parent", label: "Returns" },
    { ariaLabel: "Service and Support. The link will open a new window with the support website", href: "https://support.bang-olufsen.com/hc/en-us", target: "_parent", label: "Product Support" },
    { ariaLabel: "Contact us - Footer link", href: "https://support.bang-olufsen.com/hc/en-us/articles/360042167451", target: "_parent", label: "Contact us" },
    { href: "/en/int/faq", target: "_parent", label: "FAQ" },
    { href: "https://stores.bang-olufsen.com/en/search", target: "_self", label: "Find store" }
];

export type ListRow2DataItem = {
  href: string;
  target?: string;
  label: string;
  ariaLabel?: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "/en/int/story/about-bang-and-olufsen", target: "_parent", label: "About us" },
    { href: "/en/int/story/responsibility", target: "_parent", ariaLabel: "Read more about our responsibility topics", label: "Responsibility" },
    { href: "https://investor.bang-olufsen.com/", label: "Investors" },
    { href: "/en/int/story/careers", label: "Careers" },
    { href: "https://bang-olufsen.presscloud.com/digitalshowroom/#/gallery", target: "_parent", ariaLabel: "Press link", label: "Press" },
    { href: "/en/int/story/custom-integration", label: "Custom integration" },
    { href: "/en/int/story/become-a-retailer", label: "Become a sales partner" },
    { href: "/en/int/story/factory-tour", label: "Factory tour" }
];

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { href: "/en/int/speakers", label: "Speakers" },
    { href: "/en/int/headphones", label: "Headphones" },
    { href: "/en/int/soundbars", label: "Soundbars" },
    { href: "/en/int/televisions", label: "Televisions" },
    { href: "/en/int/accessories", label: "Accessories" }
];

