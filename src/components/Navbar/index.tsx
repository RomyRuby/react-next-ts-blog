"use client";
import Link from "next/link";
import Icon from "@/components/Icon/index";
import "./index.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [backgroudnActive, setBackgroundActive] = useState(false);

  useEffect(() => {
    const scollComputed = (e: Event) => {
      if ((e.target as HTMLElement).scrollTop > 160) {
        setBackgroundActive(true);
      } else {
        setBackgroundActive(false);
      }
    };

    document.body.addEventListener("scroll", scollComputed);

    return () => document.body.removeEventListener("scroll", scollComputed);
  }, []);

  return (
    <div
      className={`layout-navbar-wrap ${
        backgroudnActive ? "layout-navbar-wrap__active" : ""
      }`}
    >
      <div className="layout-navbar">
        <div className="layout-navbar-avatar">
          <Link className="layout-navbar-avatar-icon" href="/"></Link>
        </div>
        <div className="layout-navbar-nav">
          <div className="layout-navbar-nav-item">
            <Icon name="home" />
            <Link className="layout-navbar-nav-item-text" href="/">
              首页
            </Link>
          </div>
          <div className="layout-navbar-nav-item">
            <Icon name="article" />
            <Link className="layout-navbar-nav-item-text" href="/articles">
              文稿
            </Link>
          </div>
          <div className="layout-navbar-nav-item">
            <Icon name="diary" />
            <span className="layout-navbar-nav-item-text"> 日记</span>
          </div>
          <div className="layout-navbar-nav-item">
            <Icon name="album" />
            <span className="layout-navbar-nav-item-text"> 相册</span>
          </div>
          <div className="layout-navbar-nav-item">
            <Icon name="time" />
            <span className="layout-navbar-nav-item-text"> 时光</span>
          </div>
        </div>
        <div className="layout-navbar-user">
          <div className="layout-navbar-user-avatar">
            <Icon name="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
