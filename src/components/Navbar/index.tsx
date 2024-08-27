"use client";
import Link from "next/link";
import Icon from "@/components/Icon/index";
import "./index.scss";
import { useEffect, useState } from "react";
import { Modal, message } from "antd";

const Navbar = () => {
  const [backgroudnActive, setBackgroundActive] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

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
            <span className="layout-navbar-nav-item-text"> AI</span>
          </div>
        </div>
        <div className="layout-navbar-user">
          <div
            className="layout-navbar-user-avatar"
            onClick={() => handleSetCard(true)}
          >
            <Icon name="user" />
          </div>
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
