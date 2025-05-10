import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JustEverything - AI & Blockchainb Powered Cargo Marketplace",
  description: "Jet is a Mobile Application for Shippers and Carriers for Cargo Transportation. It is Built and Powered with AI Agents and Blockchain for a community based Approach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
