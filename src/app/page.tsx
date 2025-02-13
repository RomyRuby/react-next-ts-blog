"use client";
import Icon from "@/components/Icon/index";
import AnimationSpanList from "@/components/AnimationSpanList";
import Chat from "@/components/Chat";
import Bubble from "@/components/roro-ui/bubble";
import { Button, Popover, Modal, message, Tooltip, Divider } from "antd";
import { useEffect, useMemo, useState, Fragment, useRef } from "react";
import { useRouter } from "next/navigation";
import { articles } from "@/api/article";
import { Article } from "@/types/article";
import Link from "next/link";
import moment from "moment";
import "moment/locale/zh-cn";
import "./page.scss";
import Signature from "@/components/roro-ui/signature";
import Image from "next/image";
moment.locale("zh-cn");

const Home = () => {
  const [articleVisible, setArticleVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [articleList, setArticleList] = useState([]);
  const [cardType, setCardType] = useState("");
  const mainArticleRef = useRef<null | HTMLDivElement>(null);
  const mainHomeRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    fetchArticles();

    // 添加滚动监听
    const scollComputed = (e: Event) => {
      if ((e.target as HTMLElement).scrollTop > 90) {
        setArticleVisible(true);
      }
    };
    document.body.addEventListener("scroll", scollComputed);

    // 销毁滚动监听
    return () => document.body.removeEventListener("scroll", scollComputed);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSetCard = (status: boolean, type: string = "") => {
    setIsCardOpen(status);
    setCardType(type);
    if (status && type === "email") {
      const mailtoLink = `mailto:846261434@qq.com}`;
      window.location.href = mailtoLink;
    }
  };
  const fetchArticles = async () => {
    try {
      const res = await articles();
      setArticleList(res.data.list);
    } catch (error) {
      throw Error();
    }
  };

  const scrollToArticle = () => {
    setArticleVisible(true);
    setTimeout(() => {
      document.body.scrollTo({
        behavior: "smooth",
        top: mainHomeRef.current?.offsetHeight,
      });
    });
  };

  const handleNavigateTo = (url: string) => {
    router.push(url);
  };

  // 自我介绍和外链组件
  const MainIntroduceLeft = useMemo(() => {
    return (
      <>
        <div className="main-introduce-left">
          <div className="main-introduce-left-greeting">
            <AnimationSpanList
              str="Hi,&nbsp;I'm"
              boldStr="&nbsp;Romy&nbsp;Zhang "
              strClassName="main-introduce-left-greeting"
            />
          </div>
          <br />
          <div className="main-introduce-left-empolyment">
            <AnimationSpanList
              str="A&nbsp;Front-end&nbsp;Developer&ensp;"
              boldStr="&lt;since&nbsp;2020&nbsp;/&gt;"
              strClassName="main-introduce-left-greeting"
              boldActive={true}
            />
          </div>
          <br />
          <div className="main-introduce-left-description">
            Welcome to my personal Space 💎
          </div>
          <div className="main-introduce-left-links">
            <Tooltip placement="bottom" title={"github"} arrow={false}>
              <a
                className="main-introduce-left-links-item github"
                href="https://github.com/RomyRuby"
                target="_blank"
              >
                <Icon name="github" size={21} />
              </a>
            </Tooltip>

            <div
              className="main-introduce-left-links-item email"
              onClick={() => handleSetCard(true, "email")}
            >
              <Icon name="email" size={21} />
            </div>

            <div
              className="main-introduce-left-links-item wechat"
              onClick={() => handleSetCard(true, "wechat")}
            >
              <Icon name="weChat" size={35} />
            </div>

            <Button
              className="main-introduce-left-links-item aichat"
              type="primary"
              onClick={showModal}
            ></Button>
          </div>
        </div>
      </>
    );
  }, []);

  // 文章组件
  const MainArticles = useMemo(() => {
    const List = articleList.map((item: Article) => {
      return (
        <Fragment key={item._id}>
          <div className="main-article-item">
            <div className="main-article-item-icon">
              <div className="main-article-item-icon-circle"></div>
              <div className="main-article-item-icon-line"></div>
            </div>
            <div className="main-article-item-title">
              <Link href={"/articles/" + item._id}>{item.title}</Link>
            </div>

            <div className="main-article-item-date">
              {moment(item.updated).fromNow()}
            </div>
          </div>
        </Fragment>
      );
    });
    return (
      <>
        {articleVisible && (
          <div className="main-article" ref={mainArticleRef}>
            <div className="main-article-title">最近更新的笔记</div>
            <div className="main-article-list">{List}</div>

            <div
              className="main-article-more"
              onClick={() => handleNavigateTo("/articles")}
            >
              <div className="main-article-more-icon">
                <Icon name="circleRight" size={16} />
              </div>
              <span>还有更多</span>
            </div>
          </div>
        )}
      </>
    );
  }, [articleVisible, articleList]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      message.success("copy success");
    } catch (err) {
      message.error("copy error");
    }
  };

  const Email = () => {
    return (
      <div className="email-box">
        <span>846261434@qq.com</span>
        <div
          className="email-box-icon"
          onClick={() => handleCopy("846261434@qq.com")}
        >
          <Icon name="copy" size={16} />
        </div>
      </div>
    );
  };

  const Wechat = () => {
    return <div className="wechat-img"></div>;
  };

  return (
    <>
      <div className="main">
        <div className="main-home" ref={mainHomeRef}>
          <div className="main-introduce">
            {/* 左边介绍和按钮 */}
            {MainIntroduceLeft}
            {/* 右边的大头像 */}
            <div className="main-introduce-right">
              <Bubble
                width={220}
                height={50}
                borderRadius={[28]}
                bubbleClass="main-introduce-right-bubble-1 animate__animated animate__fadeInDown animate__delay-1s"
              />
              <Bubble
                width={120}
                height={30}
                borderRadius={[16]}
                backgroundColor="var(--theme-sub-color)"
                bubbleClass="main-introduce-right-bubble-2 animate__animated animate__fadeInDown animate__delay-1s"
              />

              <Bubble
                width={220}
                height={50}
                borderRadius={[28]}
                backgroundColor="var(--theme-color)"
                bubbleClass="main-introduce-right-bubble-3 animate__animated animate__fadeInDown animate__delay-2s"
                slot={
                  <div className="main-introduce-right-bubble-3-content ">
                    Study Notes<span> ▶ </span>
                  </div>
                }
              />
              <Bubble
                width={120}
                height={25}
                borderRadius={[13]}
                backgroundColor="var(--theme-sub-color)"
                bubbleClass="main-introduce-right-bubble-4 animate__animated animate__fadeInUp animate__delay-1s"
                slot={<span>@Romy Zhang</span>}
              />
              <Bubble
                width={260}
                height={140}
                borderRadius={[25, 2, 25, 25]}
                bubbleClass="main-introduce-right-bubble-5 animate__animated animate__fadeInUp animate__delay-2s"
                slot={
                  <>
                    <p>hello，我是 Romy Zhang</p>
                    <br />
                    <div>
                      这里是我的个人空间，目前我在这里分享一些自己的学习笔记和心得。接下来我会继续开发更多丰富的功能，玩得开心💜
                    </div>
                  </>
                }
              />
              <Bubble
                width={200}
                height={200}
                borderRadius={[25]}
                backgroundColor="var(--theme-sub-color)"
                bubbleClass="main-introduce-right-bubble-6 animate__animated animate__zoomIn animate__delay-1s"
                slot={
                  <div className="main-introduce-right-bubble-6-content">
                    <img src="/static/img/AI.jpg" alt="ai avatar" />
                    <div className="main-introduce-right-bubble-6-content-name">
                      我是 <span>AI Romi</span>,
                    </div>
                    <div className="main-introduce-right-bubble-6-content-description">
                      擅长前端问题，很高兴见到你！
                    </div>

                    <Bubble
                      width={125}
                      height={55}
                      borderRadius={[25]}
                      backgroundColor="var(--theme-color)"
                      slot={
                        <div onClick={showModal}>
                          Start<span> ▶ </span>
                        </div>
                      }
                      bubbleClass="main-introduce-right-bubble-7"
                    />
                  </div>
                }
              />

              <div className="main-introduce-right-img-wrap animate__animated animate__lightSpeedInRight">
                <div className="main-introduce-right-img"></div>
                {/* <div className="img-border-1"></div>
                <div className="img-border-2"></div> */}
              </div>
            </div>
          </div>
          <div className="main-guide" onClick={() => scrollToArticle()}>
            <div className="main-guide-sentence">
              种一棵树最好的时机是十年前，其次是现在
            </div>
            <div className="main-guide-arrow">
              <Icon name="arrowDown" />
            </div>
          </div>
        </div>
        {/* 文章 */}
        {MainArticles}
      </div>
      {/* AI Chat Modal */}
      <Modal
        className="chat-modal"
        title="Romy AI"
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <Chat />
      </Modal>

      {/* Card Modal */}
      <Modal
        wrapClassName="card-modal-wrap"
        className="card-modal"
        open={isCardOpen}
        onCancel={() => handleSetCard(false)}
        centered
        footer={null}
      >
        <div className="card-modal-avatar"></div>
        <div className="card-modal-name">Romy Zhang</div>
        {cardType === "email" && <Email />}
        {cardType === "wechat" && <Wechat />}
      </Modal>
    </>
  );
};

export default Home;
