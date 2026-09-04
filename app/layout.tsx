import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evangeline-mmayie.vercel.app"),
  title: "Evangeline Mmayie | Software Engineer",
  description: "Engineering high-performance web, mobile, and AI products.",
  openGraph: {
    title: "Evangeline Mmayie | Software Engineer",
    description: "Engineering high-performance web, mobile, and AI products.",
    url: "https://evangeline-mmayie.vercel.app",
    siteName: "Evangeline Mmayie",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Evangeline Mmayie — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evangeline Mmayie | Software Engineer",
    description: "Engineering high-performance web, mobile, and AI products.",
    images: ["/opengraph-image.jpg"],
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
        className={`${cormorantGaramond.variable} ${ibmPlexMono.variable} antialiased overflow-x-hidden`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
