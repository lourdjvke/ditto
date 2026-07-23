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
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
