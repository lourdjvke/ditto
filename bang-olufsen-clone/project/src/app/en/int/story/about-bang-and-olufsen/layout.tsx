import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import Navbar from "../../../../sections/navbar";

/* Inline style block — guaranteed to override root ditto.css regardless of bundle order */
const overlayKillStyles = `
  [data-cid="n70"]::after, [data-cid="n70"]::before,
  [data-cid="n107"]::after, [data-cid="n107"]::before {
    content: none !important;
    display: none !important;
    background: none !important;
  }
  [data-cid="n83"], [data-cid="n84"], [data-cid="n92"] {
    background-image: none !important;
    background: none !important;
  }
`;

export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "About Bang & Olufsen - Iconic quality since 1925",
  "description": "We have created iconic audio and home entertainment products since 1925.",
};
export const viewport = { width: "device-width", initialScale: 1 };
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: overlayKillStyles }} />
      <Navbar />
      {children}
    </>
  );
}
