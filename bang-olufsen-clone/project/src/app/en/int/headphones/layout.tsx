import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import Navbar from "../../../sections/navbar";
import Footer from "../../../sections/footer";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "Headphones | Bang & Olufsen",
  "description": "Discover Bang & Olufsen premium headphones.",
};
export const viewport = { width: "device-width", initialScale: 1 };
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Force the global navbar to always appear in its scrolled (white/black) state on this page */}
      <style>{`
        .fixed.inset-x-0 {
          background-color: white !important;
          background-image: none !important;
          box-shadow: 0 1px 3px rgba(0,0,0,0.10) !important;
        }
        .fixed.inset-x-0 img {
          filter: brightness(0) !important;
        }
        .fixed.inset-x-0 .text-white {
          color: rgb(25, 24, 23) !important;
        }
        .fixed.inset-x-0 .bg-white {
          background-color: rgb(25, 24, 23) !important;
        }
      `}</style>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
