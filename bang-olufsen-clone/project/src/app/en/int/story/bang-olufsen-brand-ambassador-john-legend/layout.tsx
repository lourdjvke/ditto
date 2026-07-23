import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "John Legend x Bang & Olufsen | Brand Ambassador Announcement",
  "description": "Discover how John Legend joins Bang & Olufsen as global brand ambassador, celebrating music, iconic design, Danish craftsmanship, and immersive sound experiences. Explore the collaboration and the products shaping the future of premium audio.",
  "alternates": {
    "canonical": "/en/int/story/bang-olufsen-brand-ambassador-john-legend",
    "languages": {
      "en-ca": "https://www.bang-olufsen.com/en/ca/story/bang-olufsen-brand-ambassador-john-legend",
      "fr-ca": "https://www.bang-olufsen.com/fr/ca/story/bang-olufsen-brand-ambassador-john-legend",
      "es-mx": "https://www.bang-olufsen.com/es/mx/story/bang-olufsen-brand-ambassador-john-legend",
      "en-us": "https://www.bang-olufsen.com/en/us/story/bang-olufsen-brand-ambassador-john-legend",
      "es-us": "https://www.bang-olufsen.com/es/us/story/bang-olufsen-brand-ambassador-john-legend",
      "en-au": "https://www.bang-olufsen.com/en/au/story/bang-olufsen-brand-ambassador-john-legend",
      "zh-cn-cn": "https://www.bang-olufsen.com/zh-cn/cn/story/bang-olufsen-brand-ambassador-john-legend",
      "en-cn": "https://www.bang-olufsen.com/en/cn/story/bang-olufsen-brand-ambassador-john-legend",
      "en-hk": "https://www.bang-olufsen.com/en/hk/story/bang-olufsen-brand-ambassador-john-legend",
      "zh-cn-hk": "https://www.bang-olufsen.com/zh-cn/hk/story/bang-olufsen-brand-ambassador-john-legend",
      "zh-tw-hk": "https://www.bang-olufsen.com/zh-tw/hk/story/bang-olufsen-brand-ambassador-john-legend",
      "ja-jp": "https://www.bang-olufsen.com/ja/jp/story/bang-olufsen-brand-ambassador-john-legend",
      "en-jp": "https://www.bang-olufsen.com/en/jp/story/bang-olufsen-brand-ambassador-john-legend",
      "en-mo": "https://www.bang-olufsen.com/en/mo/story/bang-olufsen-brand-ambassador-john-legend",
      "zh-cn-mo": "https://www.bang-olufsen.com/zh-cn/mo/story/bang-olufsen-brand-ambassador-john-legend",
      "zh-tw-mo": "https://www.bang-olufsen.com/zh-tw/mo/story/bang-olufsen-brand-ambassador-john-legend",
      "en-sg": "https://www.bang-olufsen.com/en/sg/story/bang-olufsen-brand-ambassador-john-legend",
      "ko-kr": "https://www.bang-olufsen.com/ko/kr/story/bang-olufsen-brand-ambassador-john-legend",
      "en-kr": "https://www.bang-olufsen.com/en/kr/story/bang-olufsen-brand-ambassador-john-legend",
      "en-ae": "https://www.bang-olufsen.com/en/ae/story/bang-olufsen-brand-ambassador-john-legend",
      "fr-be": "https://www.bang-olufsen.com/fr/be/story/bang-olufsen-brand-ambassador-john-legend",
      "en-be": "https://www.bang-olufsen.com/en/be/story/bang-olufsen-brand-ambassador-john-legend",
      "en-bg": "https://www.bang-olufsen.com/en/bg/story/bang-olufsen-brand-ambassador-john-legend",
      "en-hr": "https://www.bang-olufsen.com/en/hr/story/bang-olufsen-brand-ambassador-john-legend",
      "en-cy": "https://www.bang-olufsen.com/en/cy/story/bang-olufsen-brand-ambassador-john-legend",
      "en-cz": "https://www.bang-olufsen.com/en/cz/story/bang-olufsen-brand-ambassador-john-legend",
      "da-dk": "https://www.bang-olufsen.com/da/dk/story/bang-olufsen-brand-ambassador-john-legend",
      "en-dk": "https://www.bang-olufsen.com/en/dk/story/bang-olufsen-brand-ambassador-john-legend",
      "de-de": "https://www.bang-olufsen.com/de/de/story/bang-olufsen-brand-ambassador-john-legend",
      "en-de": "https://www.bang-olufsen.com/en/de/story/bang-olufsen-brand-ambassador-john-legend",
      "es-es": "https://www.bang-olufsen.com/es/es/story/bang-olufsen-brand-ambassador-john-legend",
      "en-es": "https://www.bang-olufsen.com/en/es/story/bang-olufsen-brand-ambassador-john-legend",
      "en-ee": "https://www.bang-olufsen.com/en/ee/story/bang-olufsen-brand-ambassador-john-legend",
      "en-fi": "https://www.bang-olufsen.com/en/fi/story/bang-olufsen-brand-ambassador-john-legend",
      "fr-fr": "https://www.bang-olufsen.com/fr/fr/story/bang-olufsen-brand-ambassador-john-legend",
      "en-fr": "https://www.bang-olufsen.com/en/fr/story/bang-olufsen-brand-ambassador-john-legend",
      "en-gr": "https://www.bang-olufsen.com/en/gr/story/bang-olufsen-brand-ambassador-john-legend",
      "en-hu": "https://www.bang-olufsen.com/en/hu/story/bang-olufsen-brand-ambassador-john-legend",
      "en-ie": "https://www.bang-olufsen.com/en/ie/story/bang-olufsen-brand-ambassador-john-legend",
      "it-it": "https://www.bang-olufsen.com/it/it/story/bang-olufsen-brand-ambassador-john-legend",
      "en-it": "https://www.bang-olufsen.com/en/it/story/bang-olufsen-brand-ambassador-john-legend",
      "en-lv": "https://www.bang-olufsen.com/en/lv/story/bang-olufsen-brand-ambassador-john-legend",
      "en-lt": "https://www.bang-olufsen.com/en/lt/story/bang-olufsen-brand-ambassador-john-legend",
      "fr-lu": "https://www.bang-olufsen.com/fr/lu/story/bang-olufsen-brand-ambassador-john-legend",
      "de-lu": "https://www.bang-olufsen.com/de/lu/story/bang-olufsen-brand-ambassador-john-legend",
      "en-lu": "https://www.bang-olufsen.com/en/lu/story/bang-olufsen-brand-ambassador-john-legend",
      "en-mt": "https://www.bang-olufsen.com/en/mt/story/bang-olufsen-brand-ambassador-john-legend",
      "en-no": "https://www.bang-olufsen.com/en/no/story/bang-olufsen-brand-ambassador-john-legend",
      "da-no": "https://www.bang-olufsen.com/da/no/story/bang-olufsen-brand-ambassador-john-legend",
      "de-at": "https://www.bang-olufsen.com/de/at/story/bang-olufsen-brand-ambassador-john-legend",
      "en-at": "https://www.bang-olufsen.com/en/at/story/bang-olufsen-brand-ambassador-john-legend",
      "en-pl": "https://www.bang-olufsen.com/en/pl/story/bang-olufsen-brand-ambassador-john-legend",
      "de-pl": "https://www.bang-olufsen.com/de/pl/story/bang-olufsen-brand-ambassador-john-legend",
      "en-pt": "https://www.bang-olufsen.com/en/pt/story/bang-olufsen-brand-ambassador-john-legend",
      "es-pt": "https://www.bang-olufsen.com/es/pt/story/bang-olufsen-brand-ambassador-john-legend",
      "en-ro": "https://www.bang-olufsen.com/en/ro/story/bang-olufsen-brand-ambassador-john-legend",
      "en-sk": "https://www.bang-olufsen.com/en/sk/story/bang-olufsen-brand-ambassador-john-legend",
      "en-si": "https://www.bang-olufsen.com/en/si/story/bang-olufsen-brand-ambassador-john-legend",
      "en-se": "https://www.bang-olufsen.com/en/se/story/bang-olufsen-brand-ambassador-john-legend",
      "da-se": "https://www.bang-olufsen.com/da/se/story/bang-olufsen-brand-ambassador-john-legend",
      "de-ch": "https://www.bang-olufsen.com/de/ch/story/bang-olufsen-brand-ambassador-john-legend",
      "fr-ch": "https://www.bang-olufsen.com/fr/ch/story/bang-olufsen-brand-ambassador-john-legend",
      "it-ch": "https://www.bang-olufsen.com/it/ch/story/bang-olufsen-brand-ambassador-john-legend",
      "en-ch": "https://www.bang-olufsen.com/en/ch/story/bang-olufsen-brand-ambassador-john-legend",
      "en-nl": "https://www.bang-olufsen.com/en/nl/story/bang-olufsen-brand-ambassador-john-legend",
      "de-nl": "https://www.bang-olufsen.com/de/nl/story/bang-olufsen-brand-ambassador-john-legend",
      "en-gb": "https://www.bang-olufsen.com/en/gb/story/bang-olufsen-brand-ambassador-john-legend",
      "x-default": "https://www.bang-olufsen.com/en/int/story/bang-olufsen-brand-ambassador-john-legend",
      "fr-int": "https://www.bang-olufsen.com/fr/int/story/bang-olufsen-brand-ambassador-john-legend",
      "es-int": "https://www.bang-olufsen.com/es/int/story/bang-olufsen-brand-ambassador-john-legend",
      "it-int": "https://www.bang-olufsen.com/it/int/story/bang-olufsen-brand-ambassador-john-legend",
      "de-int": "https://www.bang-olufsen.com/de/int/story/bang-olufsen-brand-ambassador-john-legend",
      "da-int": "https://www.bang-olufsen.com/da/int/story/bang-olufsen-brand-ambassador-john-legend",
      "ja-int": "https://www.bang-olufsen.com/ja/int/story/bang-olufsen-brand-ambassador-john-legend",
      "ko-int": "https://www.bang-olufsen.com/ko/int/story/bang-olufsen-brand-ambassador-john-legend",
      "zh-cn-int": "https://www.bang-olufsen.com/zh-cn/int/story/bang-olufsen-brand-ambassador-john-legend",
      "zh-tw-int": "https://www.bang-olufsen.com/zh-tw/int/story/bang-olufsen-brand-ambassador-john-legend"
    }
  },
  "openGraph": {
    "title": "John Legend x Bang & Olufsen | Brand Ambassador Announcement",
    "description": "Discover how John Legend joins Bang & Olufsen as global brand ambassador, celebrating music, iconic design, Danish craftsmanship, and immersive sound experiences. Explore the collaboration and the products shaping the future of premium audio.",
    "url": "/en/int/story/bang-olufsen-brand-ambassador-john-legend",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/1GVVVV9DjrIVi9HXCnnBgm/4bcaf034e9514bf4faae6bf0702d75b0/John_Legend-H100_16x9.webp"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "John Legend x Bang & Olufsen | Brand Ambassador Announcement",
    "description": "Discover how John Legend joins Bang & Olufsen as global brand ambassador, celebrating music, iconic design, Danish craftsmanship, and immersive sound experiences. Explore the collaboration and the products shaping the future of premium audio.",
    "images": [
      "//images.ctfassets.net/8cd2csgvqd3m/1GVVVV9DjrIVi9HXCnnBgm/4bcaf034e9514bf4faae6bf0702d75b0/John_Legend-H100_16x9.webp",
      "//images.ctfassets.net/8cd2csgvqd3m/1GVVVV9DjrIVi9HXCnnBgm/4bcaf034e9514bf4faae6bf0702d75b0/John_Legend-H100_16x9.webp"
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
