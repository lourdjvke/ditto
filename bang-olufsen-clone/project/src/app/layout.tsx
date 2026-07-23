import "./globals.css";
import "./ditto.css";
import "./bo-enhancements.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Bang & Olufsen - High-end Headphones, Speakers, and Televisions",
  "description": "Discover Bang & Olufsen – where sound meets design. Shop premium speakers, headphones, and televisions for home and travel.",
  "keywords": [
    "headphones",
    "speakers",
    "televisions"
  ],
  "alternates": {
    "canonical": "/en/int",
    "languages": {
      "en-ca": "https://www.bang-olufsen.com/en/ca",
      "fr-ca": "https://www.bang-olufsen.com/fr/ca",
      "es-mx": "https://www.bang-olufsen.com/es/mx",
      "en-us": "https://www.bang-olufsen.com/en/us",
      "es-us": "https://www.bang-olufsen.com/es/us",
      "en-au": "https://www.bang-olufsen.com/en/au",
      "zh-cn-cn": "https://www.bang-olufsen.com/zh-cn/cn",
      "en-cn": "https://www.bang-olufsen.com/en/cn",
      "en-hk": "https://www.bang-olufsen.com/en/hk",
      "zh-cn-hk": "https://www.bang-olufsen.com/zh-cn/hk",
      "zh-tw-hk": "https://www.bang-olufsen.com/zh-tw/hk",
      "ja-jp": "https://www.bang-olufsen.com/ja/jp",
      "en-jp": "https://www.bang-olufsen.com/en/jp",
      "en-mo": "https://www.bang-olufsen.com/en/mo",
      "zh-cn-mo": "https://www.bang-olufsen.com/zh-cn/mo",
      "zh-tw-mo": "https://www.bang-olufsen.com/zh-tw/mo",
      "en-sg": "https://www.bang-olufsen.com/en/sg",
      "ko-kr": "https://www.bang-olufsen.com/ko/kr",
      "en-kr": "https://www.bang-olufsen.com/en/kr",
      "en-ae": "https://www.bang-olufsen.com/en/ae",
      "fr-be": "https://www.bang-olufsen.com/fr/be",
      "en-be": "https://www.bang-olufsen.com/en/be",
      "en-bg": "https://www.bang-olufsen.com/en/bg",
      "en-hr": "https://www.bang-olufsen.com/en/hr",
      "en-cy": "https://www.bang-olufsen.com/en/cy",
      "en-cz": "https://www.bang-olufsen.com/en/cz",
      "da-dk": "https://www.bang-olufsen.com/da/dk",
      "en-dk": "https://www.bang-olufsen.com/en/dk",
      "de-de": "https://www.bang-olufsen.com/de/de",
      "en-de": "https://www.bang-olufsen.com/en/de",
      "es-es": "https://www.bang-olufsen.com/es/es",
      "en-es": "https://www.bang-olufsen.com/en/es",
      "en-ee": "https://www.bang-olufsen.com/en/ee",
      "en-fi": "https://www.bang-olufsen.com/en/fi",
      "fr-fr": "https://www.bang-olufsen.com/fr/fr",
      "en-fr": "https://www.bang-olufsen.com/en/fr",
      "en-gr": "https://www.bang-olufsen.com/en/gr",
      "en-hu": "https://www.bang-olufsen.com/en/hu",
      "en-ie": "https://www.bang-olufsen.com/en/ie",
      "it-it": "https://www.bang-olufsen.com/it/it",
      "en-it": "https://www.bang-olufsen.com/en/it",
      "en-lv": "https://www.bang-olufsen.com/en/lv",
      "en-lt": "https://www.bang-olufsen.com/en/lt",
      "fr-lu": "https://www.bang-olufsen.com/fr/lu",
      "de-lu": "https://www.bang-olufsen.com/de/lu",
      "en-lu": "https://www.bang-olufsen.com/en/lu",
      "en-mt": "https://www.bang-olufsen.com/en/mt",
      "en-no": "https://www.bang-olufsen.com/en/no",
      "da-no": "https://www.bang-olufsen.com/da/no",
      "de-at": "https://www.bang-olufsen.com/de/at",
      "en-at": "https://www.bang-olufsen.com/en/at",
      "en-pl": "https://www.bang-olufsen.com/en/pl",
      "de-pl": "https://www.bang-olufsen.com/de/pl",
      "en-pt": "https://www.bang-olufsen.com/en/pt",
      "es-pt": "https://www.bang-olufsen.com/es/pt",
      "en-ro": "https://www.bang-olufsen.com/en/ro",
      "en-sk": "https://www.bang-olufsen.com/en/sk",
      "en-si": "https://www.bang-olufsen.com/en/si",
      "en-se": "https://www.bang-olufsen.com/en/se",
      "da-se": "https://www.bang-olufsen.com/da/se",
      "de-ch": "https://www.bang-olufsen.com/de/ch",
      "fr-ch": "https://www.bang-olufsen.com/fr/ch",
      "it-ch": "https://www.bang-olufsen.com/it/ch",
      "en-ch": "https://www.bang-olufsen.com/en/ch",
      "en-nl": "https://www.bang-olufsen.com/en/nl",
      "de-nl": "https://www.bang-olufsen.com/de/nl",
      "en-gb": "https://www.bang-olufsen.com/en/gb",
      "x-default": "https://www.bang-olufsen.com/en/int",
      "fr-int": "https://www.bang-olufsen.com/fr/int",
      "es-int": "https://www.bang-olufsen.com/es/int",
      "it-int": "https://www.bang-olufsen.com/it/int",
      "de-int": "https://www.bang-olufsen.com/de/int",
      "da-int": "https://www.bang-olufsen.com/da/int",
      "ja-int": "https://www.bang-olufsen.com/ja/int",
      "ko-int": "https://www.bang-olufsen.com/ko/int",
      "zh-cn-int": "https://www.bang-olufsen.com/zh-cn/int",
      "zh-tw-int": "https://www.bang-olufsen.com/zh-tw/int"
    }
  },
  "openGraph": {
    "title": "Bang & Olufsen - High-end Headphones, Speakers, and Televisions",
    "description": "Discover Bang & Olufsen – where sound meets design. Shop premium speakers, headphones, and televisions for home and travel.",
    "url": "/en/int",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/49d68V5cfamsZb6GiC0swR/c1c0b6eec065d86a631c2c7d50f97088/t_i_2.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Bang & Olufsen - High-end Headphones, Speakers, and Televisions",
    "description": "Discover Bang & Olufsen – where sound meets design. Shop premium speakers, headphones, and televisions for home and travel.",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/49d68V5cfamsZb6GiC0swR/c1c0b6eec065d86a631c2c7d50f97088/t_i_2.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/svg/3d01b6864dff.svg",
        "type": "image/x-icon"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/a0eab8ec37e5.png"
      }
    ]
  },
  "other": {
    "og:type": "Webpage"
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en-int"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "/\",\"name\":\"Bang & Olufsen\",\"publisher\":{\"@id\":\"", "/#organization\"},\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"", "/search?q={search_term_string}\",\"query-input\":\"required name=search_term_string\"}},{\"legalName\":\"Bang & Olufsen A/S\",\"brand\":{\"@type\":\"Brand\",\"name\":\"Bang & Olufsen\"},\"logo\":\"https://images.ctfassets.net/8cd2csgvqd3m/5KPtvnQ0EniDy6b2JYJqFm/aa487bb292309085837312372d4939e2/primary-logo-black.svg\",\"name\":\"Bang & Olufsen\",\"foundingDate\":\"1925-11-17\",\"url\":\"", "\",\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"customer service\",\"email\":\"support@bang-olufsen.zendesk.com\",\"availableLanguage\":[\"English\",\"German\",\"Spanish\",\"French\",\"Danish\"]},\"address\":{\"@type\":\"PostalAddress\",\"postalCode\":\"DK-7600\",\"streetAddress\":\"Bang & Olufsen Allé 1\",\"addressLocality\":\"Struer\",\"addressCountry\":\"DK\"},\"sameAs\":[\"https://en.wikipedia.org/wiki/Bang_%26_Olufsen\",\"https://www.linkedin.com/company/bangolufsen/\",\"https://www.facebook.com/bangolufsen\",\"https://www.instagram.com/bangolufsen/\",\"https://www.pinterest.com/bangolufsen/\",\"https://www.youtube.com/user/bangolufsen\"],\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"parentOrganization\":{\"@type\":\"Organization\",\"name\":\"Bang & Olufsen\",\"url\":\"", "/\"}},{\"about\":{\"@id\":\"", "/#organization\"},\"description\":\"Discover Bang & Olufsen – where sound meets design. Shop premium speakers, headphones, and televisions for home and travel.\",\"@id\":\"", "/en/CX#webpage\",\"isPartOf\":{\"@id\":\"", "/#website\"},\"name\":\"Bang & Olufsen - High-end Headphones, Speakers, and Televisions\",\"@type\":\"Webpage\",\"url\":\"", "/en/CX\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="h-[359.5625rem] block min-w-80 overflow-x-hidden overflow-y-auto text-foreground [font-family:BeoSupreme,_'Lexend_Deca',_Arial,_Helvetica,_sans-serif] text-base font-normal not-italic leading-[1.125rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] max-md:h-[388.7125rem] md:max-lg:h-[375.7125rem] 2xl:h-[22197.7px] 2xl:overflow-y-scroll" data-cid="n0">
        {children}
      </body>
    </html>
  );
}
