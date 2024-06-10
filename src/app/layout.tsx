import type { Metadata } from "next";
import React from "react";
import "./globals.scss";
import "./globalReset.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Romy Zhang",
  description: "Romy Zhang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
