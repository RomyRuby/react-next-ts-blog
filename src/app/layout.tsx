// import type { Metadata } from "next";
import React from "react";
import "./globalReset.scss";
import "./globals.scss";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer/index";
import "./tailwind.css";
import Cookies from "js-cookie";
import { cookies } from "next/headers";
import request from "@/utils/request";
import { getUserInfo } from "@/api/user";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setToken = async () => {
    const token = cookies().get("token")?.value || "";
    request.defaults.headers.common["Authorization"] = token;
    const res = await getUserInfo();
    console.log(res);
  };

  await setToken();

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
