import type { Metadata } from "next";
import React from "react";
import "./globalReset.scss";
import "./globals.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "tailwindcss/tailwind.css";

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
