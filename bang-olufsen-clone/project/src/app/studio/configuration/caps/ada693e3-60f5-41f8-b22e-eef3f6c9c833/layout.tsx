import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "Assembly® Studio - Classic Dad Cap",
  "robots": "noindex, nofollow",
  "openGraph": {
    "title": "Assembly® Studio",
    "images": [
      "https://studio.rovoassembly.com/og-image.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Assembly® Studio",
    "images": [
      "https://studio.rovoassembly.com/og-image.png"
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`body { height: auto !important; min-height: unset !important; }`}</style>
      {children}
    </>
  );
}
