import Link from "next/link";
import Icon from "@/components/Icon/index";
import { Scroll } from "@/types/global";
import "./index.scss";

type NavbarParams = {} & Scroll;

const Navbar = ({ scrollTop }: NavbarParams) => {
  return (
    <div
      className={`layout-navbar-wrap ${
        Number(scrollTop) > 165 ? "layout-navbar-wrap__active" : ""
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
