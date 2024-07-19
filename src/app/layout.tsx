import type { Metadata } from "next";
import React from "react";
import "./globalReset.scss";
import "./globals.scss";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer/index";
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
        <div className="page">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
