import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Secretum | Detektivní služby",
  description:
    "Diskrétní detektivní služby pro soukromé osoby i firmy. Sledování osob, prověřování nevěry, diskrétní šetření a zajišťování důkazních materiálů.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white lg:h-full lg:overflow-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
