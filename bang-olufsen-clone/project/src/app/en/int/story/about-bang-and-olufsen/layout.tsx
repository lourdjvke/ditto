import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import Navbar from "../../../../sections/navbar";
import Footer from "../../../../sections/footer";

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
  /* Navbar: always white, no hover effect, no transparent gradient */
  .nav-transparent,
  .nav-transparent:hover {
    background-color: white !important;
    background-image: none !important;
    box-shadow: none !important;
  }
  .nav-transparent img,
  .nav-transparent:hover img {
    filter: brightness(0) !important;
  }
  .nav-transparent .nav-line,
  .nav-transparent:hover .nav-line {
    background-color: rgb(25,24,23) !important;
  }
  .nav-transparent .nav-menu-text,
  .nav-transparent:hover .nav-menu-text {
    color: rgb(25,24,23) !important;
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
      <Footer />
    </>
  );
}
