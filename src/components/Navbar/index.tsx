"use client";
import { useEffect, useState } from "react";
import { Modal, message } from "antd";
import Link from "next/link";
import Icon from "@/components/Icon/index";
import LightSwitch from "../LightSwitch";
import "./index.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const [backgroudnActive, setBackgroundActive] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isLightOn, setIsLightOn] = useState(
    localStorage.getItem("lightOn") === "0" ? false : true
  );

  useEffect(() => {
    const scollComputed = (e: Event) => {
      if ((e.target as HTMLElement).scrollTop > 120) {
        setBackgroundActive(true);
      } else {
        setBackgroundActive(false);
      }
    };

    document.body.addEventListener("scroll", scollComputed);

    return () => document.body.removeEventListener("scroll", scollComputed);
  }, []);

  useEffect(() => {
    if (isLightOn) {
      localStorage.setItem("lightOn", "1");
      document.body.classList.remove("dark");
    } else {
      localStorage.setItem("lightOn", "0");
      document.body.classList.add("dark");
    }
  }, [isLightOn]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      message.success("copy success");
    } catch (err) {
      message.error("copy error");
    }
  };

  const PersonalIntro = () => {
    return (
      <>
        <div className="personal-intro">
          <div className="personal-intro-text">
            <p>hello, 我是Romy Zhang。一名前端开发。</p>
            <p>我非常热爱前端技术，欢迎找我聊天～</p>
            <p>
              以下是我最近在做的一些项目，还有我的联系方式，希望遇见新的工作伙伴～
            </p>
          </div>

          <div className="personal-intro-imgs">
            <img src="/static/img/intro/1.png" />
            <img src="/static/img/intro/2.png" />
            <img src="/static/img/intro/3.png" />
            <img src="/static/img/intro/4.png" />
            <img src="/static/img/intro/5.png" />
            <img src="/static/img/intro/6.png" />
          </div>

          <div className="personal-intro-text-contact">
            <div className="text-box">
              <div className="text-box-icon">
                <Icon name="phone" size={18} />
              </div>
              <span>15023110793</span>
              <div
                className="text-box-copy"
                onClick={() => handleCopy("15023110793")}
              >
                <Icon name="copy" size={16} />
              </div>
            </div>
            <div className="text-box">
              <div className="text-box-icon">
                <Icon name="email2" size={15} />
              </div>
              <span>846261434@qq.com</span>
              <div
                className="text-box-copy"
                onClick={() => handleCopy("846261434@qq.com")}
              >
                <Icon name="copy" size={16} />
              </div>
            </div>
            <div className="text-box">
              <div className="text-box-icon">
                <Icon name="weChat2" size={18} />
              </div>
              <span>romyruby</span>
              <div
                className="text-box-copy"
                onClick={() => handleCopy("romyruby")}
              >
                <Icon name="copy" size={16} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleSetCard = (status: boolean) => {
    setIsCardOpen(status);
  };

  return (
    <div
      className={`layout-navbar-wrap ${
        backgroudnActive ? "layout-navbar-wrap__active" : ""
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

      <Modal
        wrapClassName="personal-modal-wrap"
        className="personal-modal"
        open={isCardOpen}
        onCancel={() => handleSetCard(false)}
        centered
        footer={null}
        styles={{ mask: { background: "#ffffffe6" } }}
      >
        <div className="personal-modal-avatar"></div>
        <div className="personal-modal-name">Romy Zhang</div>
        <PersonalIntro />
      </Modal>
    </div>
  );
};

export default Navbar;
