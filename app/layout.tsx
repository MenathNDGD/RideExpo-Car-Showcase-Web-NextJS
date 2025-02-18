import type { Metadata } from "next";
import "./globals.css";

import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "RideExpo",
  description: "Unveil the Beauty of Every Ride",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
