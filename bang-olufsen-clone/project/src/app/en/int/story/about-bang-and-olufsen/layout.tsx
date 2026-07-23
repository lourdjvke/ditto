import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "About Bang & Olufsen - Iconic quality since 1925",
  "description": "We have created iconic audio and home entertainment products since 1925. Our 'why': to change how we all hear, see and feel the world.",
  "alternates": {
    "canonical": "/en/int/story/about-bang-and-olufsen",
    "languages": {
      "en-ca": "https://www.bang-olufsen.com/en/ca/story/about-bang-and-olufsen",
      "fr-ca": "https://www.bang-olufsen.com/fr/ca/story/about-bang-and-olufsen",
      "es-mx": "https://www.bang-olufsen.com/es/mx/story/about-bang-and-olufsen",
      "en-us": "https://www.bang-olufsen.com/en/us/story/about-bang-and-olufsen",
      "es-us": "https://www.bang-olufsen.com/es/us/story/about-bang-and-olufsen",
      "en-au": "https://www.bang-olufsen.com/en/au/story/about-bang-and-olufsen",
      "zh-cn-cn": "https://www.bang-olufsen.com/zh-cn/cn/story/about-bang-and-olufsen",
      "en-cn": "https://www.bang-olufsen.com/en/cn/story/about-bang-and-olufsen",
      "en-hk": "https://www.bang-olufsen.com/en/hk/story/about-bang-and-olufsen",
      "zh-cn-hk": "https://www.bang-olufsen.com/zh-cn/hk/story/about-bang-and-olufsen",
      "zh-tw-hk": "https://www.bang-olufsen.com/zh-tw/hk/story/about-bang-and-olufsen",
      "ja-jp": "https://www.bang-olufsen.com/ja/jp/story/about-bang-and-olufsen",
      "en-jp": "https://www.bang-olufsen.com/en/jp/story/about-bang-and-olufsen",
      "en-mo": "https://www.bang-olufsen.com/en/mo/story/about-bang-and-olufsen",
      "zh-cn-mo": "https://www.bang-olufsen.com/zh-cn/mo/story/about-bang-and-olufsen",
      "zh-tw-mo": "https://www.bang-olufsen.com/zh-tw/mo/story/about-bang-and-olufsen",
      "en-sg": "https://www.bang-olufsen.com/en/sg/story/about-bang-and-olufsen",
      "ko-kr": "https://www.bang-olufsen.com/ko/kr/story/about-bang-and-olufsen",
      "en-kr": "https://www.bang-olufsen.com/en/kr/story/about-bang-and-olufsen",
      "en-ae": "https://www.bang-olufsen.com/en/ae/story/about-bang-and-olufsen",
      "fr-be": "https://www.bang-olufsen.com/fr/be/story/about-bang-and-olufsen",
      "en-be": "https://www.bang-olufsen.com/en/be/story/about-bang-and-olufsen",
      "en-bg": "https://www.bang-olufsen.com/en/bg/story/about-bang-and-olufsen",
      "en-hr": "https://www.bang-olufsen.com/en/hr/story/about-bang-and-olufsen",
      "en-cy": "https://www.bang-olufsen.com/en/cy/story/about-bang-and-olufsen",
      "en-cz": "https://www.bang-olufsen.com/en/cz/story/about-bang-and-olufsen",
      "da-dk": "https://www.bang-olufsen.com/da/dk/story/about-bang-and-olufsen",
      "en-dk": "https://www.bang-olufsen.com/en/dk/story/about-bang-and-olufsen",
      "de-de": "https://www.bang-olufsen.com/de/de/story/about-bang-and-olufsen",
      "en-de": "https://www.bang-olufsen.com/en/de/story/about-bang-and-olufsen",
      "es-es": "https://www.bang-olufsen.com/es/es/story/about-bang-and-olufsen",
      "en-es": "https://www.bang-olufsen.com/en/es/story/about-bang-and-olufsen",
      "en-ee": "https://www.bang-olufsen.com/en/ee/story/about-bang-and-olufsen",
      "en-fi": "https://www.bang-olufsen.com/en/fi/story/about-bang-and-olufsen",
      "fr-fr": "https://www.bang-olufsen.com/fr/fr/story/about-bang-and-olufsen",
      "en-fr": "https://www.bang-olufsen.com/en/fr/story/about-bang-and-olufsen",
      "en-gr": "https://www.bang-olufsen.com/en/gr/story/about-bang-and-olufsen",
      "en-hu": "https://www.bang-olufsen.com/en/hu/story/about-bang-and-olufsen",
      "en-ie": "https://www.bang-olufsen.com/en/ie/story/about-bang-and-olufsen",
      "it-it": "https://www.bang-olufsen.com/it/it/story/about-bang-and-olufsen",
      "en-it": "https://www.bang-olufsen.com/en/it/story/about-bang-and-olufsen",
      "en-lv": "https://www.bang-olufsen.com/en/lv/story/about-bang-and-olufsen",
      "en-lt": "https://www.bang-olufsen.com/en/lt/story/about-bang-and-olufsen",
      "fr-lu": "https://www.bang-olufsen.com/fr/lu/story/about-bang-and-olufsen",
      "de-lu": "https://www.bang-olufsen.com/de/lu/story/about-bang-and-olufsen",
      "en-lu": "https://www.bang-olufsen.com/en/lu/story/about-bang-and-olufsen",
      "en-mt": "https://www.bang-olufsen.com/en/mt/story/about-bang-and-olufsen",
      "en-no": "https://www.bang-olufsen.com/en/no/story/about-bang-and-olufsen",
      "da-no": "https://www.bang-olufsen.com/da/no/story/about-bang-and-olufsen",
      "de-at": "https://www.bang-olufsen.com/de/at/story/about-bang-and-olufsen",
      "en-at": "https://www.bang-olufsen.com/en/at/story/about-bang-and-olufsen",
      "en-pl": "https://www.bang-olufsen.com/en/pl/story/about-bang-and-olufsen",
      "de-pl": "https://www.bang-olufsen.com/de/pl/story/about-bang-and-olufsen",
      "en-pt": "https://www.bang-olufsen.com/en/pt/story/about-bang-and-olufsen",
      "es-pt": "https://www.bang-olufsen.com/es/pt/story/about-bang-and-olufsen",
      "en-ro": "https://www.bang-olufsen.com/en/ro/story/about-bang-and-olufsen",
      "en-sk": "https://www.bang-olufsen.com/en/sk/story/about-bang-and-olufsen",
      "en-si": "https://www.bang-olufsen.com/en/si/story/about-bang-and-olufsen",
      "en-se": "https://www.bang-olufsen.com/en/se/story/about-bang-and-olufsen",
      "da-se": "https://www.bang-olufsen.com/da/se/story/about-bang-and-olufsen",
      "de-ch": "https://www.bang-olufsen.com/de/ch/story/about-bang-and-olufsen",
      "fr-ch": "https://www.bang-olufsen.com/fr/ch/story/about-bang-and-olufsen",
      "it-ch": "https://www.bang-olufsen.com/it/ch/story/about-bang-and-olufsen",
      "en-ch": "https://www.bang-olufsen.com/en/ch/story/about-bang-and-olufsen",
      "en-nl": "https://www.bang-olufsen.com/en/nl/story/about-bang-and-olufsen",
      "de-nl": "https://www.bang-olufsen.com/de/nl/story/about-bang-and-olufsen",
      "en-gb": "https://www.bang-olufsen.com/en/gb/story/about-bang-and-olufsen",
      "x-default": "https://www.bang-olufsen.com/en/int/story/about-bang-and-olufsen",
      "fr-int": "https://www.bang-olufsen.com/fr/int/story/about-bang-and-olufsen",
      "es-int": "https://www.bang-olufsen.com/es/int/story/about-bang-and-olufsen",
      "it-int": "https://www.bang-olufsen.com/it/int/story/about-bang-and-olufsen",
      "de-int": "https://www.bang-olufsen.com/de/int/story/about-bang-and-olufsen",
      "da-int": "https://www.bang-olufsen.com/da/int/story/about-bang-and-olufsen",
      "ja-int": "https://www.bang-olufsen.com/ja/int/story/about-bang-and-olufsen",
      "ko-int": "https://www.bang-olufsen.com/ko/int/story/about-bang-and-olufsen",
      "zh-cn-int": "https://www.bang-olufsen.com/zh-cn/int/story/about-bang-and-olufsen",
      "zh-tw-int": "https://www.bang-olufsen.com/zh-tw/int/story/about-bang-and-olufsen"
    }
  },
  "openGraph": {
    "title": "About Bang & Olufsen - Iconic quality since 1925",
    "description": "We have created iconic audio and home entertainment products since 1925. Our 'why': to change how we all hear, see and feel the world.",
    "url": "/en/int/story/about-bang-and-olufsen",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/6AIFGjIf76pkrMF2C0p6yu/34fc8b97e2b6cd2510fcafed84c0b511/soundelevated_beolab90_lifestyle_202510_00_16x9.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "About Bang & Olufsen - Iconic quality since 1925",
    "description": "We have created iconic audio and home entertainment products since 1925. Our 'why': to change how we all hear, see and feel the world.",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/6AIFGjIf76pkrMF2C0p6yu/34fc8b97e2b6cd2510fcafed84c0b511/soundelevated_beolab90_lifestyle_202510_00_16x9.webp",
      "//images.ctfassets.net/8cd2csgvqd3m/6AIFGjIf76pkrMF2C0p6yu/34fc8b97e2b6cd2510fcafed84c0b511/soundelevated_beolab90_lifestyle_202510_00_16x9.webp"
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


export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
