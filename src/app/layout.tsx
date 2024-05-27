import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

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
        <div className="layout-header">
          <div className="layout-header-img"></div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
