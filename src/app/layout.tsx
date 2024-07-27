"use client";
import type { Metadata } from "next";
import React, { SyntheticEvent, useState } from "react";
import "./globalReset.scss";
import "./globals.scss";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer/index";
import MyContext from "./context";
import "./tailwind.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [scrollTop, setScrollTop] = useState(0);

  // const scollComputed = (e: SyntheticEvent) => {
  //   setScrollTop((e.target as HTMLElement).scrollTop);
  // };

  return (
    <html lang="en">
      <body>
        {/* <div className="page w-full" onScroll={scollComputed}>
          <Navbar scrollTop={scrollTop} />
          <MyContext.Provider value={{ scrollTop }}>
            <div className="page-content">{children}</div>
          </MyContext.Provider>
          <Footer />
        </div> */}
        <div className="page w-full">
          <Navbar />
          <div className="page-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
