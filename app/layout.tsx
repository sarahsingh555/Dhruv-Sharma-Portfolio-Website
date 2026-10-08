import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { person } from "@/lib/content";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
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

export const viewport: Viewport = { themeColor: "#F4F1EA" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
