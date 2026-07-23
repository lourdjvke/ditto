import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import Navbar from "../../../../sections/navbar";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "About Bang & Olufsen - Iconic quality since 1925",
  "description": "We have created iconic audio and home entertainment products since 1925.",
};
export const viewport = { width: "device-width", initialScale: 1 };
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
