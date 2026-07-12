import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "../widgets/TopNav";
import { Navbar } from "../widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luca Lombardi",
    template: "%s | Luca Lombardi",
  },
  description:
    "Discover curated pieces that embody heritage, craftsmanship, and quiet sophistication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Providers>
        <body className="min-h-full flex flex-col">
          <TopNav />
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
