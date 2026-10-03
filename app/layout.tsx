import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTSERVIZ - Fast, Cheap & Secure",
  description: "Airtime, Data, Cable TV and More",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
