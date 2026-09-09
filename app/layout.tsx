import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const SITE_URL = "https://www.gurusdecorgh.com";
const TITLE = "Curtains, Blinds & Window Fashion in Ghana | Guru's Decor Accra";
const DESCRIPTION =
  "Guru's Decor supplies and installs curtains, blinds, rods and tracks across Ghana — homes, offices and restaurants. Ready-made pairs from GH₵250, free measurement, same-day WhatsApp quotes. Est. 2016.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Guru's Decor",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GH",
    images: [
      {
        url: "/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Guru's Decor — curtains and blinds installed across Ghana. Windows that wear couture.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-card.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Intro />
        {children}
      </body>
    </html>
  );
}
