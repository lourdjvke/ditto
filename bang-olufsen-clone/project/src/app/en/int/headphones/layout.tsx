import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "Wireless headphones - Beautiful design, great sound | B&O",
  "description": "Explore Bang & Olufsen’s wireless designer headphones, made with natural materials, and delivering great sound as well as comfort.",
  "keywords": [
    "headphones",
    "earphones",
    "over-ear headphones",
    "on-ear headphones",
    "in-ear headphones"
  ],
  "alternates": {
    "canonical": "/en/int/headphones",
    "languages": {
      "en-ca": "https://www.bang-olufsen.com/en/ca/headphones",
      "fr-ca": "https://www.bang-olufsen.com/fr/ca/casques",
      "es-mx": "https://www.bang-olufsen.com/es/mx/auriculares",
      "en-us": "https://www.bang-olufsen.com/en/us/headphones",
      "es-us": "https://www.bang-olufsen.com/es/us/auriculares",
      "en-au": "https://www.bang-olufsen.com/en/au/headphones",
      "zh-cn-cn": "https://www.bang-olufsen.com/zh-cn/cn/toudaishierji",
      "en-cn": "https://www.bang-olufsen.com/en/cn/headphones",
      "en-hk": "https://www.bang-olufsen.com/en/hk/headphones",
      "zh-cn-hk": "https://www.bang-olufsen.com/zh-cn/hk/toudaishierji",
      "zh-tw-hk": "https://www.bang-olufsen.com/zh-tw/hk/headphones",
      "ja-jp": "https://www.bang-olufsen.com/ja/jp/headphones",
      "en-jp": "https://www.bang-olufsen.com/en/jp/headphones",
      "en-mo": "https://www.bang-olufsen.com/en/mo/headphones",
      "zh-cn-mo": "https://www.bang-olufsen.com/zh-cn/mo/toudaishierji",
      "zh-tw-mo": "https://www.bang-olufsen.com/zh-tw/mo/headphones",
      "en-sg": "https://www.bang-olufsen.com/en/sg/headphones",
      "ko-kr": "https://www.bang-olufsen.com/ko/kr/headphones",
      "en-kr": "https://www.bang-olufsen.com/en/kr/headphones",
      "en-ae": "https://www.bang-olufsen.com/en/ae/headphones",
      "fr-be": "https://www.bang-olufsen.com/fr/be/casques",
      "en-be": "https://www.bang-olufsen.com/en/be/headphones",
      "en-bg": "https://www.bang-olufsen.com/en/bg/headphones",
      "en-hr": "https://www.bang-olufsen.com/en/hr/headphones",
      "en-cy": "https://www.bang-olufsen.com/en/cy/headphones",
      "en-cz": "https://www.bang-olufsen.com/en/cz/headphones",
      "da-dk": "https://www.bang-olufsen.com/da/dk/hovedtelefoner",
      "en-dk": "https://www.bang-olufsen.com/en/dk/headphones",
      "de-de": "https://www.bang-olufsen.com/de/de/kopfhoerer",
      "en-de": "https://www.bang-olufsen.com/en/de/headphones",
      "es-es": "https://www.bang-olufsen.com/es/es/auriculares",
      "en-es": "https://www.bang-olufsen.com/en/es/headphones",
      "en-ee": "https://www.bang-olufsen.com/en/ee/headphones",
      "en-fi": "https://www.bang-olufsen.com/en/fi/headphones",
      "fr-fr": "https://www.bang-olufsen.com/fr/fr/casques",
      "en-fr": "https://www.bang-olufsen.com/en/fr/headphones",
      "en-gr": "https://www.bang-olufsen.com/en/gr/headphones",
      "en-hu": "https://www.bang-olufsen.com/en/hu/headphones",
      "en-ie": "https://www.bang-olufsen.com/en/ie/headphones",
      "it-it": "https://www.bang-olufsen.com/it/it/cuffie",
      "en-it": "https://www.bang-olufsen.com/en/it/headphones",
      "en-lv": "https://www.bang-olufsen.com/en/lv/headphones",
      "en-lt": "https://www.bang-olufsen.com/en/lt/headphones",
      "fr-lu": "https://www.bang-olufsen.com/fr/lu/casques",
      "de-lu": "https://www.bang-olufsen.com/de/lu/kopfhoerer",
      "en-lu": "https://www.bang-olufsen.com/en/lu/headphones",
      "en-mt": "https://www.bang-olufsen.com/en/mt/headphones",
      "en-no": "https://www.bang-olufsen.com/en/no/headphones",
      "da-no": "https://www.bang-olufsen.com/da/no/hovedtelefoner",
      "de-at": "https://www.bang-olufsen.com/de/at/kopfhoerer",
      "en-at": "https://www.bang-olufsen.com/en/at/headphones",
      "en-pl": "https://www.bang-olufsen.com/en/pl/headphones",
      "de-pl": "https://www.bang-olufsen.com/de/pl/kopfhoerer",
      "en-pt": "https://www.bang-olufsen.com/en/pt/headphones",
      "es-pt": "https://www.bang-olufsen.com/es/pt/auriculares",
      "en-ro": "https://www.bang-olufsen.com/en/ro/headphones",
      "en-sk": "https://www.bang-olufsen.com/en/sk/headphones",
      "en-si": "https://www.bang-olufsen.com/en/si/headphones",
      "en-se": "https://www.bang-olufsen.com/en/se/headphones",
      "da-se": "https://www.bang-olufsen.com/da/se/hovedtelefoner",
      "de-ch": "https://www.bang-olufsen.com/de/ch/kopfhoerer",
      "fr-ch": "https://www.bang-olufsen.com/fr/ch/casques",
      "it-ch": "https://www.bang-olufsen.com/it/ch/cuffie",
      "en-ch": "https://www.bang-olufsen.com/en/ch/headphones",
      "en-nl": "https://www.bang-olufsen.com/en/nl/headphones",
      "de-nl": "https://www.bang-olufsen.com/de/nl/kopfhoerer",
      "en-gb": "https://www.bang-olufsen.com/en/gb/headphones",
      "x-default": "https://www.bang-olufsen.com/en/int/headphones",
      "fr-int": "https://www.bang-olufsen.com/fr/int/casques",
      "es-int": "https://www.bang-olufsen.com/es/int/auriculares",
      "it-int": "https://www.bang-olufsen.com/it/int/cuffie",
      "de-int": "https://www.bang-olufsen.com/de/int/kopfhoerer",
      "da-int": "https://www.bang-olufsen.com/da/int/hovedtelefoner",
      "ja-int": "https://www.bang-olufsen.com/ja/int/headphones",
      "ko-int": "https://www.bang-olufsen.com/ko/int/headphones",
      "zh-cn-int": "https://www.bang-olufsen.com/zh-cn/int/toudaishierji",
      "zh-tw-int": "https://www.bang-olufsen.com/zh-tw/int/headphones"
    }
  },
  "openGraph": {
    "title": "Wireless headphones - Beautiful design, great sound | B&O",
    "description": "Explore Bang & Olufsen’s wireless designer headphones, made with natural materials, and delivering great sound as well as comfort.",
    "url": "/en/int/headphones",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/qhTnI9llCgiq2OYoWGuui/48cb271678abcb9c37b73159e93c1527/headphones-heroimage.jpg",
      "//images.ctfassets.net/8cd2csgvqd3m/qhTnI9llCgiq2OYoWGuui/48cb271678abcb9c37b73159e93c1527/headphones-heroimage.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Wireless headphones - Beautiful design, great sound | B&O",
    "description": "Explore Bang & Olufsen’s wireless designer headphones, made with natural materials, and delivering great sound as well as comfort.",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/qhTnI9llCgiq2OYoWGuui/48cb271678abcb9c37b73159e93c1527/headphones-heroimage.jpg",
      "//images.ctfassets.net/8cd2csgvqd3m/qhTnI9llCgiq2OYoWGuui/48cb271678abcb9c37b73159e93c1527/headphones-heroimage.jpg"
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
