// "use client";
import "./page.scss";
import Image from "next/image";
import Icon from "@/components/icon/Icon";
import { getPosts, getPost } from "@/lib/data";
import * as request from "@/api/user";
import { useEffect } from "react";
import { cookies } from "next/headers";
import axios from "axios";

export const metadata = {
  title: "Romy Zhang",
  description: "Romy Zhang's blog",
};

const getUser = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const value = token ? token : "";
  const res = await request.getUserInfo(value);
};

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="main-home">
          <div className="main-introduce">
            <div className="main-introduce-left">
              <div className="main-introduce-left-greeting">
                Hi, I'm
                <span className="main-introduce-left-greeting__bold">
                  &nbsp;Romy Zhang&nbsp;
                </span>
                👋。
              </div>
              <br />
              <div className="main-introduce-left-empolyment">
                A Front-end Developer &ensp;
                <span className="main-introduce-left-empolyment__bold">
                  &lt;since 2020 /&gt;
                </span>
              </div>
              <br />
              <div className="main-introduce-left-description">
                Welcome to my personal Space 💎
              </div>
              <div className="main-introduce-left-links">
                <div className="main-introduce-left-links-item">github</div>
                <div className="main-introduce-left-links-item">邮箱</div>
                <div>小红书</div>
              </div>
            </div>
            <div className="main-introduce-right">
              <div className="main-introduce-right-img"></div>
              <div className="img-border-1"></div>
              <div className="img-border-2"></div>
            </div>
          </div>
          <div className="main-guide">
            <div className="main-guide-sentence">
              种一棵树最好的时机是十年前，其次是现在
            </div>
            <div className="main-guide-arrow">
              <Icon name="arrowDown" />
            </div>
          </div>
        </div>

        <div className="main-article">
          <div className="main-article-content">
            <div className="main-article-title">最近更新的笔记</div>
            <div className="main-article-list">
              <div className="main-article-item">
                <div className="main-article-item-icon">
                  <div className="main-article-item-icon-circle"></div>
                  <div className="main-article-item-icon-line"></div>
                </div>
                <div className="main-article-item-title">
                  人机交互：页面过渡动画和内容呈现
                </div>
                <div className="main-article-item-date">1 个月前</div>
              </div>
              <div className="main-article-item">
                <div className="main-article-item-icon">
                  <div className="main-article-item-icon-circle"></div>
                  <div className="main-article-item-icon-line"></div>
                </div>
                <div className="main-article-item-title">
                  人机交互：页面过渡动画和内容呈现
                </div>
                <div className="main-article-item-date">1 个月前</div>
              </div>{" "}
              <div className="main-article-item">
                <div className="main-article-item-icon">
                  <div className="main-article-item-icon-circle"></div>
                  <div className="main-article-item-icon-line"></div>
                </div>
                <div className="main-article-item-title">
                  人机交互：页面过渡动画和内容呈现
                </div>
                <div className="main-article-item-date">1 个月前</div>
              </div>{" "}
              <div className="main-article-item">
                <div className="main-article-item-icon">
                  <div className="main-article-item-icon-circle"></div>
                  <div className="main-article-item-icon-line"></div>
                </div>
                <div className="main-article-item-title">
                  人机交互：页面过渡动画和内容呈现
                </div>
                <div className="main-article-item-date">1 个月前</div>
              </div>
            </div>
            <div className="main-article-more">
              <Icon name="circleRight" />
              <span>还有更多</span>
            </div>
          </div>
          <div className="main-article-content">
            <div className="main-article-title">最近更新的日记</div>
            <div className="main-article-list">
              <div className="main-article-item">
                <div className="main-article-item-icon">
                  <div className="main-article-item-icon-circle"></div>
                  <div className="main-article-item-icon-line"></div>
                </div>
                <div className="main-article-item-title">
                  人机交互：页面过渡动画和内容呈现
                </div>
                <div className="main-article-item-date">1 个月前</div>
              </div>
              <div className="main-article-item">
                <div className="main-article-item-icon">
                  <div className="main-article-item-icon-circle"></div>
                  <div className="main-article-item-icon-line"></div>
                </div>
                <div className="main-article-item-title">
                  人机交互：页面过渡动画和内容呈现
                </div>
                <div className="main-article-item-date">1 个月前</div>
              </div>{" "}
              <div className="main-article-item">
                <div className="main-article-item-icon">
                  <div className="main-article-item-icon-circle"></div>
                  <div className="main-article-item-icon-line"></div>
                </div>
                <div className="main-article-item-title">
                  人机交互：页面过渡动画和内容呈现
                </div>
                <div className="main-article-item-date">1 个月前</div>
              </div>{" "}
              <div className="main-article-item">
                <div className="main-article-item-icon">
                  <div className="main-article-item-icon-circle"></div>
                  <div className="main-article-item-icon-line"></div>
                </div>
                <div className="main-article-item-title">
                  人机交互：页面过渡动画和内容呈现
                </div>
                <div className="main-article-item-date">1 个月前</div>
              </div>
            </div>
            <div className="main-article-more">
              <Icon name="circleRight" />
              <span>还有更多</span>
            </div>
          </div>
        </div>

        <div className="main-album">
          <div className="main-album-title">世间只是一些影影绰绰的温柔</div>
          <div className="main-album-list">111</div>
        </div>

        <div className="main-end">
          <div className="main-end-guide">可以绕行，狐疑，留在原地</div>
          <div className="main-end-greeting"></div>
          <div className="main-end-nav"></div>
          <div className="main-end-operate"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
