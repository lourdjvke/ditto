import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "Story Hub | Bang & Olufsen",
  "description": "Featured stories about design, craft, sound, heritage, and people. Learn more about the Danish sound and design brand Bang & Olufsen.",
  "alternates": {
    "canonical": "/en/int/stories",
    "languages": {
      "en-ca": "https://www.bang-olufsen.com/en/ca/stories",
      "fr-ca": "https://www.bang-olufsen.com/fr/ca/stories",
      "es-mx": "https://www.bang-olufsen.com/es/mx/stories",
      "en-us": "https://www.bang-olufsen.com/en/us/stories",
      "es-us": "https://www.bang-olufsen.com/es/us/stories",
      "en-au": "https://www.bang-olufsen.com/en/au/stories",
      "zh-cn-cn": "https://www.bang-olufsen.com/zh-cn/cn/stories",
      "en-cn": "https://www.bang-olufsen.com/en/cn/stories",
      "en-hk": "https://www.bang-olufsen.com/en/hk/stories",
      "zh-cn-hk": "https://www.bang-olufsen.com/zh-cn/hk/stories",
      "zh-tw-hk": "https://www.bang-olufsen.com/zh-tw/hk/stories",
      "ja-jp": "https://www.bang-olufsen.com/ja/jp/stories",
      "en-jp": "https://www.bang-olufsen.com/en/jp/stories",
      "en-mo": "https://www.bang-olufsen.com/en/mo/stories",
      "zh-cn-mo": "https://www.bang-olufsen.com/zh-cn/mo/stories",
      "zh-tw-mo": "https://www.bang-olufsen.com/zh-tw/mo/stories",
      "en-sg": "https://www.bang-olufsen.com/en/sg/stories",
      "ko-kr": "https://www.bang-olufsen.com/ko/kr/stories",
      "en-kr": "https://www.bang-olufsen.com/en/kr/stories",
      "en-ae": "https://www.bang-olufsen.com/en/ae/stories",
      "fr-be": "https://www.bang-olufsen.com/fr/be/stories",
      "en-be": "https://www.bang-olufsen.com/en/be/stories",
      "en-bg": "https://www.bang-olufsen.com/en/bg/stories",
      "en-hr": "https://www.bang-olufsen.com/en/hr/stories",
      "en-cy": "https://www.bang-olufsen.com/en/cy/stories",
      "en-cz": "https://www.bang-olufsen.com/en/cz/stories",
      "da-dk": "https://www.bang-olufsen.com/da/dk/stories",
      "en-dk": "https://www.bang-olufsen.com/en/dk/stories",
      "de-de": "https://www.bang-olufsen.com/de/de/stories",
      "en-de": "https://www.bang-olufsen.com/en/de/stories",
      "es-es": "https://www.bang-olufsen.com/es/es/stories",
      "en-es": "https://www.bang-olufsen.com/en/es/stories",
      "en-ee": "https://www.bang-olufsen.com/en/ee/stories",
      "en-fi": "https://www.bang-olufsen.com/en/fi/stories",
      "fr-fr": "https://www.bang-olufsen.com/fr/fr/stories",
      "en-fr": "https://www.bang-olufsen.com/en/fr/stories",
      "en-gr": "https://www.bang-olufsen.com/en/gr/stories",
      "en-hu": "https://www.bang-olufsen.com/en/hu/stories",
      "en-ie": "https://www.bang-olufsen.com/en/ie/stories",
      "it-it": "https://www.bang-olufsen.com/it/it/stories",
      "en-it": "https://www.bang-olufsen.com/en/it/stories",
      "en-lv": "https://www.bang-olufsen.com/en/lv/stories",
      "en-lt": "https://www.bang-olufsen.com/en/lt/stories",
      "fr-lu": "https://www.bang-olufsen.com/fr/lu/stories",
      "de-lu": "https://www.bang-olufsen.com/de/lu/stories",
      "en-lu": "https://www.bang-olufsen.com/en/lu/stories",
      "en-mt": "https://www.bang-olufsen.com/en/mt/stories",
      "en-no": "https://www.bang-olufsen.com/en/no/stories",
      "da-no": "https://www.bang-olufsen.com/da/no/stories",
      "de-at": "https://www.bang-olufsen.com/de/at/stories",
      "en-at": "https://www.bang-olufsen.com/en/at/stories",
      "en-pl": "https://www.bang-olufsen.com/en/pl/stories",
      "de-pl": "https://www.bang-olufsen.com/de/pl/stories",
      "en-pt": "https://www.bang-olufsen.com/en/pt/stories",
      "es-pt": "https://www.bang-olufsen.com/es/pt/stories",
      "en-ro": "https://www.bang-olufsen.com/en/ro/stories",
      "en-sk": "https://www.bang-olufsen.com/en/sk/stories",
      "en-si": "https://www.bang-olufsen.com/en/si/stories",
      "en-se": "https://www.bang-olufsen.com/en/se/stories",
      "da-se": "https://www.bang-olufsen.com/da/se/stories",
      "de-ch": "https://www.bang-olufsen.com/de/ch/stories",
      "fr-ch": "https://www.bang-olufsen.com/fr/ch/stories",
      "it-ch": "https://www.bang-olufsen.com/it/ch/stories",
      "en-ch": "https://www.bang-olufsen.com/en/ch/stories",
      "en-nl": "https://www.bang-olufsen.com/en/nl/stories",
      "de-nl": "https://www.bang-olufsen.com/de/nl/stories",
      "en-gb": "https://www.bang-olufsen.com/en/gb/stories",
      "x-default": "https://www.bang-olufsen.com/en/int/stories",
      "fr-int": "https://www.bang-olufsen.com/fr/int/stories",
      "es-int": "https://www.bang-olufsen.com/es/int/stories",
      "it-int": "https://www.bang-olufsen.com/it/int/stories",
      "de-int": "https://www.bang-olufsen.com/de/int/stories",
      "da-int": "https://www.bang-olufsen.com/da/int/stories",
      "ja-int": "https://www.bang-olufsen.com/ja/int/stories",
      "ko-int": "https://www.bang-olufsen.com/ko/int/stories",
      "zh-cn-int": "https://www.bang-olufsen.com/zh-cn/int/stories",
      "zh-tw-int": "https://www.bang-olufsen.com/zh-tw/int/stories"
    }
  },
  "openGraph": {
    "title": "Story Hub | Bang & Olufsen",
    "description": "Featured stories about design, craft, sound, heritage, and people. Learn more about the Danish sound and design brand Bang & Olufsen.",
    "url": "/en/int/stories",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/1dLCPcM2YdcCqU8silHZTi/01e3183be088567353e7ec9858a8ebe3/Lifestyle-Sounds-Like-Home-Malene-and-Nikolaj-B_OFa003_06-S1920x1920px.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Story Hub | Bang & Olufsen",
    "description": "Featured stories about design, craft, sound, heritage, and people. Learn more about the Danish sound and design brand Bang & Olufsen.",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/1dLCPcM2YdcCqU8silHZTi/01e3183be088567353e7ec9858a8ebe3/Lifestyle-Sounds-Like-Home-Malene-and-Nikolaj-B_OFa003_06-S1920x1920px.jpg",
      "//images.ctfassets.net/8cd2csgvqd3m/1dLCPcM2YdcCqU8silHZTi/01e3183be088567353e7ec9858a8ebe3/Lifestyle-Sounds-Like-Home-Malene-and-Nikolaj-B_OFa003_06-S1920x1920px.jpg"
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
