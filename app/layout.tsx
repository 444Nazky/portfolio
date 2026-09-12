import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nazky — Developer Portfolio",
  description:
    "Narutama Nazril Khairrazky — Linux-Enthusiast Backend Developer focused on offensive security and infrastructure hardening.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}