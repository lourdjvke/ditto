import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "Beo Grace - Wireless Earbuds | B&O",
  "description": "Discover Beo Grace luxury earbuds — premium sound, polished aluminium design, and 100 years of audio excellence.",
  "alternates": {
    "canonical": "/en/int/earphones/beograce",
    "languages": {
      "en-ca": "https://www.bang-olufsen.com/en/ca/earphones/beograce?variant=beograce-natural-aluminium",
      "fr-ca": "https://www.bang-olufsen.com/fr/ca/ecouteurs/beograce?variant=beograce-natural-aluminium",
      "es-mx": "https://www.bang-olufsen.com/es/mx/auriculares-intraaurales/beograce?variant=beograce-natural-aluminium",
      "en-us": "https://www.bang-olufsen.com/en/us/earphones/beograce?variant=beograce-natural-aluminium",
      "es-us": "https://www.bang-olufsen.com/es/us/auriculares-intraaurales/beograce?variant=beograce-natural-aluminium",
      "en-au": "https://www.bang-olufsen.com/en/au/earphones/beograce?variant=beograce-natural-aluminium",
      "zh-cn-cn": "https://www.bang-olufsen.com/zh-cn/cn/ersaishierji/beograce?variant=beograce-natural-aluminium",
      "en-cn": "https://www.bang-olufsen.com/en/cn/earphones/beograce?variant=beograce-natural-aluminium",
      "en-hk": "https://www.bang-olufsen.com/en/hk/earphones/beograce?variant=beograce-natural-aluminium",
      "zh-cn-hk": "https://www.bang-olufsen.com/zh-cn/hk/ersaishierji/beograce?variant=beograce-natural-aluminium",
      "zh-tw-hk": "https://www.bang-olufsen.com/zh-tw/hk/earphones/beograce?variant=beograce-natural-aluminium",
      "ja-jp": "https://www.bang-olufsen.com/ja/jp/earphones/beograce?variant=beograce-natural-aluminium",
      "en-jp": "https://www.bang-olufsen.com/en/jp/earphones/beograce?variant=beograce-natural-aluminium",
      "en-mo": "https://www.bang-olufsen.com/en/mo/earphones/beograce?variant=beograce-natural-aluminium",
      "zh-cn-mo": "https://www.bang-olufsen.com/zh-cn/mo/ersaishierji/beograce?variant=beograce-natural-aluminium",
      "zh-tw-mo": "https://www.bang-olufsen.com/zh-tw/mo/earphones/beograce?variant=beograce-natural-aluminium",
      "en-sg": "https://www.bang-olufsen.com/en/sg/earphones/beograce?variant=beograce-natural-aluminium",
      "ko-kr": "https://www.bang-olufsen.com/ko/kr/earphones/beograce?variant=beograce-natural-aluminium",
      "en-kr": "https://www.bang-olufsen.com/en/kr/earphones/beograce?variant=beograce-natural-aluminium",
      "en-ae": "https://www.bang-olufsen.com/en/ae/earphones/beograce?variant=beograce-natural-aluminium",
      "fr-be": "https://www.bang-olufsen.com/fr/be/ecouteurs/beograce?variant=beograce-natural-aluminium",
      "en-be": "https://www.bang-olufsen.com/en/be/earphones/beograce?variant=beograce-natural-aluminium",
      "en-bg": "https://www.bang-olufsen.com/en/bg/earphones/beograce?variant=beograce-natural-aluminium",
      "en-hr": "https://www.bang-olufsen.com/en/hr/earphones/beograce?variant=beograce-natural-aluminium",
      "en-cy": "https://www.bang-olufsen.com/en/cy/earphones/beograce?variant=beograce-natural-aluminium",
      "en-cz": "https://www.bang-olufsen.com/en/cz/earphones/beograce?variant=beograce-natural-aluminium",
      "da-dk": "https://www.bang-olufsen.com/da/dk/in-ear-hoeretelefoner/beograce?variant=beograce-natural-aluminium",
      "en-dk": "https://www.bang-olufsen.com/en/dk/earphones/beograce?variant=beograce-natural-aluminium",
      "de-de": "https://www.bang-olufsen.com/de/de/in-ear-kopfhoerer/beograce?variant=beograce-natural-aluminium",
      "en-de": "https://www.bang-olufsen.com/en/de/earphones/beograce?variant=beograce-natural-aluminium",
      "es-es": "https://www.bang-olufsen.com/es/es/auriculares-intraaurales/beograce?variant=beograce-natural-aluminium",
      "en-es": "https://www.bang-olufsen.com/en/es/earphones/beograce?variant=beograce-natural-aluminium",
      "en-ee": "https://www.bang-olufsen.com/en/ee/earphones/beograce?variant=beograce-natural-aluminium",
      "en-fi": "https://www.bang-olufsen.com/en/fi/earphones/beograce?variant=beograce-natural-aluminium",
      "fr-fr": "https://www.bang-olufsen.com/fr/fr/ecouteurs/beograce?variant=beograce-natural-aluminium",
      "en-fr": "https://www.bang-olufsen.com/en/fr/earphones/beograce?variant=beograce-natural-aluminium",
      "en-gr": "https://www.bang-olufsen.com/en/gr/earphones/beograce?variant=beograce-natural-aluminium",
      "en-hu": "https://www.bang-olufsen.com/en/hu/earphones/beograce?variant=beograce-natural-aluminium",
      "en-ie": "https://www.bang-olufsen.com/en/ie/earphones/beograce?variant=beograce-natural-aluminium",
      "it-it": "https://www.bang-olufsen.com/it/it/auricolari/beograce?variant=beograce-natural-aluminium",
      "en-it": "https://www.bang-olufsen.com/en/it/earphones/beograce?variant=beograce-natural-aluminium",
      "en-lv": "https://www.bang-olufsen.com/en/lv/earphones/beograce?variant=beograce-natural-aluminium",
      "en-lt": "https://www.bang-olufsen.com/en/lt/earphones/beograce?variant=beograce-natural-aluminium",
      "fr-lu": "https://www.bang-olufsen.com/fr/lu/ecouteurs/beograce?variant=beograce-natural-aluminium",
      "de-lu": "https://www.bang-olufsen.com/de/lu/in-ear-kopfhoerer/beograce?variant=beograce-natural-aluminium",
      "en-lu": "https://www.bang-olufsen.com/en/lu/earphones/beograce?variant=beograce-natural-aluminium",
      "en-mt": "https://www.bang-olufsen.com/en/mt/earphones/beograce?variant=beograce-natural-aluminium",
      "en-no": "https://www.bang-olufsen.com/en/no/earphones/beograce?variant=beograce-natural-aluminium",
      "da-no": "https://www.bang-olufsen.com/da/no/in-ear-hoeretelefoner/beograce?variant=beograce-natural-aluminium",
      "de-at": "https://www.bang-olufsen.com/de/at/in-ear-kopfhoerer/beograce?variant=beograce-natural-aluminium",
      "en-at": "https://www.bang-olufsen.com/en/at/earphones/beograce?variant=beograce-natural-aluminium",
      "en-pl": "https://www.bang-olufsen.com/en/pl/earphones/beograce?variant=beograce-natural-aluminium",
      "de-pl": "https://www.bang-olufsen.com/de/pl/in-ear-kopfhoerer/beograce?variant=beograce-natural-aluminium",
      "en-pt": "https://www.bang-olufsen.com/en/pt/earphones/beograce?variant=beograce-natural-aluminium",
      "es-pt": "https://www.bang-olufsen.com/es/pt/auriculares-intraaurales/beograce?variant=beograce-natural-aluminium",
      "en-ro": "https://www.bang-olufsen.com/en/ro/earphones/beograce?variant=beograce-natural-aluminium",
      "en-sk": "https://www.bang-olufsen.com/en/sk/earphones/beograce?variant=beograce-natural-aluminium",
      "en-si": "https://www.bang-olufsen.com/en/si/earphones/beograce?variant=beograce-natural-aluminium",
      "en-se": "https://www.bang-olufsen.com/en/se/earphones/beograce?variant=beograce-natural-aluminium",
      "da-se": "https://www.bang-olufsen.com/da/se/in-ear-hoeretelefoner/beograce?variant=beograce-natural-aluminium",
      "de-ch": "https://www.bang-olufsen.com/de/ch/in-ear-kopfhoerer/beograce?variant=beograce-natural-aluminium",
      "fr-ch": "https://www.bang-olufsen.com/fr/ch/ecouteurs/beograce?variant=beograce-natural-aluminium",
      "it-ch": "https://www.bang-olufsen.com/it/ch/auricolari/beograce?variant=beograce-natural-aluminium",
      "en-ch": "https://www.bang-olufsen.com/en/ch/earphones/beograce?variant=beograce-natural-aluminium",
      "en-nl": "https://www.bang-olufsen.com/en/nl/earphones/beograce?variant=beograce-natural-aluminium",
      "de-nl": "https://www.bang-olufsen.com/de/nl/in-ear-kopfhoerer/beograce?variant=beograce-natural-aluminium",
      "en-gb": "https://www.bang-olufsen.com/en/gb/earphones/beograce?variant=beograce-natural-aluminium",
      "x-default": "https://www.bang-olufsen.com/en/int/earphones/beograce?variant=beograce-natural-aluminium",
      "fr-int": "https://www.bang-olufsen.com/fr/int/ecouteurs/beograce?variant=beograce-natural-aluminium",
      "es-int": "https://www.bang-olufsen.com/es/int/auriculares-intraaurales/beograce?variant=beograce-natural-aluminium",
      "it-int": "https://www.bang-olufsen.com/it/int/auricolari/beograce?variant=beograce-natural-aluminium",
      "de-int": "https://www.bang-olufsen.com/de/int/in-ear-kopfhoerer/beograce?variant=beograce-natural-aluminium",
      "da-int": "https://www.bang-olufsen.com/da/int/in-ear-hoeretelefoner/beograce?variant=beograce-natural-aluminium",
      "ja-int": "https://www.bang-olufsen.com/ja/int/earphones/beograce?variant=beograce-natural-aluminium",
      "ko-int": "https://www.bang-olufsen.com/ko/int/earphones/beograce?variant=beograce-natural-aluminium",
      "zh-cn-int": "https://www.bang-olufsen.com/zh-cn/int/ersaishierji/beograce?variant=beograce-natural-aluminium",
      "zh-tw-int": "https://www.bang-olufsen.com/zh-tw/int/earphones/beograce?variant=beograce-natural-aluminium"
    }
  },
  "openGraph": {
    "title": "Beo Grace - Wireless Earbuds | B&O",
    "description": "Discover Beo Grace luxury earbuds — premium sound, polished aluminium design, and 100 years of audio excellence.",
    "url": "/en/int/earphones/beograce?variant=beograce-natural-aluminium",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/4Fa8SvB5903A99kUrtTGio/28b5e8b3a27b774ac8e67e9cdf921237/Lifestyle_Beo_Grace_-_5_2000x2000.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Beo Grace - Wireless Earbuds | B&O",
    "description": "Discover Beo Grace luxury earbuds — premium sound, polished aluminium design, and 100 years of audio excellence.",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/4Fa8SvB5903A99kUrtTGio/28b5e8b3a27b774ac8e67e9cdf921237/Lifestyle_Beo_Grace_-_5_2000x2000.jpg",
      "//images.ctfassets.net/8cd2csgvqd3m/4Fa8SvB5903A99kUrtTGio/28b5e8b3a27b774ac8e67e9cdf921237/Lifestyle_Beo_Grace_-_5_2000x2000.jpg"
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
