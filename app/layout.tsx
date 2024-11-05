import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import * as React from "react";
import OgImage from "@/public/images/og.png";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Globex Agri Export",
  description:
    "Exporter of premium agricultural commodities like onions, ginger, peanuts, rice, barley, and more.",
  keywords: [
    "best onion exporter",
    "top ginger exporter",
    "premium peanut exporter",
    "quality rice exporter",
    "barley exporter",
    "agricultural commodities",
    "green millet exporter",
    "yellow maize exporter",
    "chick peas exporter",
    "black pepper exporter",
    "coriander seeds exporter",
    "turmeric exporter",
    "cumin seeds exporter",
    "soyabean exporter",
    "peanut exporter",
    "oil seeds exporter",
    "spices exporter",
    "groundnut exporter",
    "fennel seeds exporter",
    "sorghum exporter",
    "ginger exporter",
    "onion exporter",
  ],
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
