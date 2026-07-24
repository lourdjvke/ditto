import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import Navbar from "../../../../sections/navbar";
export const metadata = {
  "metadataBase": new URL("http://localhost:3000"),
  "title": "John Legend x Bang & Olufsen | Brand Ambassador",
  "description": "Discover how John Legend joins Bang & Olufsen as global brand ambassador.",
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
