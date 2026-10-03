import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GTSERVIZ - Fast, Cheap & Secure VTU",
  description: "Fast, Cheap & Secure Airtime, Data, Cable TV and More! Top up, pay bills, buy data - all in one place.",
  openGraph: {
    title: "GTSERVIZ - Fast, Cheap & Secure VTU",
    description: "Your trusted digital service partner",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#f2f7fb]`}>
        {children}
      </body>
    </html>
  );
}
