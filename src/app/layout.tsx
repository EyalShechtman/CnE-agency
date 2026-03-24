import type { Metadata } from "next";
import { Jacques_Francois } from "next/font/google";
import "./globals.css";

const jacquesFrancois = Jacques_Francois({
  weight: "400",
  variable: "--font-jacques",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CnE — Websites, Marketing, CRMs & Voice Agents",
  description:
    "CnE is an agency that builds websites, runs marketing, and sets up CRMs and voice agents for clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jacquesFrancois.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-jacques">{children}</body>
    </html>
  );
}
