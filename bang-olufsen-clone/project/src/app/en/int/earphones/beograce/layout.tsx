import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import Navbar from "../../../../sections/navbar";
import Footer from "../../../../sections/footer";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "Beo Grace - Wireless Earbuds | B&O",
  "description": "Discover Beo Grace luxury earbuds — premium sound, polished aluminium design, and 100 years of audio excellence.",
};
export const viewport = { width: "device-width", initialScale: 1 };
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
