import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Compose your own Beolab 8 speakers | Bang & Olufsen Atelier",
  description: "Personalise compact Beolab 8 speakers with the Digital Composer.",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
