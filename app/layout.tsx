import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { person } from "@/lib/content";
import "./globals.css";

const serif = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const sans = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

const title = "Dhruv Sharma — Law Student | Freelance Legal Research & Litigation Support";
const description =
  "Fifth-year B.A. LL.B. student at Amity University, Noida, available for freelance legal research, drafting and litigation support. Five legal internships including the High Court of Delhi; moot courts; notes on contracts.";

export const metadata: Metadata = {
  metadataBase: new URL(person.site),
  title,
  description,
  openGraph: { title, description, url: "/", siteName: person.name, type: "profile", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#FBFBF9" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
