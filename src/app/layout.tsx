// import type { Metadata } from "next";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer/index";
import "./tailwind.css";
import "./globalReset.scss";
import "./globals.scss";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page w-full">
          <Navbar />
          <div className="page-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
