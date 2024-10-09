"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import LightSwitch from "../LightSwitch";
import "./index.scss";

const Navbar = () => {
  const [backgroundActive, setBackgroundActive] = useState(false);
  const [isLightOn, setIsLightOn] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("lightOn") === "0"
        ? false
        : true
      : true
  );

  useEffect(() => {
    const scrollComputed = (e: Event) => {
      if ((e.target as HTMLElement).scrollTop > 120) {
        setBackgroundActive(true);
      } else {
        setBackgroundActive(false);
      }
    };

    document.body.addEventListener("scroll", scrollComputed);

    return () => document.body.removeEventListener("scroll", scrollComputed);
  }, []);

  useEffect(() => {
    if (isLightOn) {
      if (typeof window !== "undefined") {
        localStorage.setItem("lightOn", "1");
      }
      document.body.classList.remove("dark");
    } else {
      if (typeof window !== "undefined") {
        localStorage.setItem("lightOn", "0");
      }
      document.body.classList.add("dark");
    }
  }, [isLightOn]);

  return (
    <div
      className={`layout-navbar-wrap ${
        backgroundActive ? "layout-navbar-wrap__active" : ""
      }`}
    >
      <div className="layout-navbar">
        <div className="layout-navbar-avatar">
          <Link className="layout-navbar-avatar-icon" href="/"></Link>
          <Link className="layout-navbar-avatar-title" href="/">
            <span>Romy </span>Space
          </Link>
        </div>
        <div className="layout-navbar-nav">
          <Link className="layout-navbar-nav-item" href="/articles">
            文章列表
          </Link>
        </div>
        <div className="layout-navbar-light">
          <LightSwitch
            value={isLightOn}
            onChange={(value: boolean) => setIsLightOn(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
