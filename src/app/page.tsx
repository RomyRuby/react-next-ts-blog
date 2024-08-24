"use client";
import Icon from "@/components/Icon/index";
import AnimationSpanList from "@/components/AnimationSpanList";
import Chat from "@/components/Chat";
import { Button, Popover, Modal } from "antd";
import { useEffect, useMemo, useState, Fragment, useRef } from "react";
import { articles } from "@/api/article";
import { photos } from "@/api/album";
import { Article } from "@/types/article";
import Link from "next/link";
import moment from "moment";
import "moment/locale/zh-cn";
import "./page.scss";

// 设置使用中文
moment.locale("zh-cn");

const Home = () => {
  const [articleVisible, setArticleVisible] = useState(false);
  const [albumVisible, setAlbumVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [MainIntroduceLeftFlag] = useState(1);
  const [articleList, setArticleList] = useState([]);
  const [albumList, setAlbumList] = useState([]);
  const [endVisible, setEndVisible] = useState(false);

  const mainArticleRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    fetchArticles();
    // fetchPhotos();

    // 添加滚动监听
    const scollComputed = (e: Event) => {
      if ((e.target as HTMLElement).scrollTop > 90) {
        setArticleVisible(true);
      }
      if (
        mainArticleRef.current?.clientHeight &&
        (e.target as HTMLElement).scrollTop >
          mainArticleRef.current?.clientHeight + 230
      ) {
        setEndVisible(true);
      }
    };
    document.body.addEventListener("scroll", scollComputed);

    // 销毁滚动监听
    return () => document.body.removeEventListener("scroll", scollComputed);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchArticles = async () => {
    try {
      const res = await articles();
      setArticleList(res.data.list);
    } catch (error) {
      throw Error();
    }
  };

  // const fetchPhotos = async () => {
  //   try {
  //     const res = await photos();
  //     // console.log(res);
  //     setAlbumList(res.data.list);
  //   } catch (error) {
  //     throw Error();
  //   }
  // };

  // 自我介绍和外链组件
  const MainIntroduceLeft = useMemo(
    () => (
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
            <a
              className="main-introduce-left-links-item github"
              href="https://github.com/RomyRuby"
              target="_blank"
            >
              <Icon name="github" size={21} />
            </a>

            <div className="main-introduce-left-links-item email">
              <Icon name="email" size={21} />
            </div>

            <div className="main-introduce-left-links-item wechat">
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
    ),
    [MainIntroduceLeftFlag]
  );

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
            <div className="main-article-content">
              <div className="main-article-title">最近更新的笔记</div>
              <div className="main-article-list">{List}</div>
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
                </div>
              </div>
              <div className="main-article-more">
                <Icon name="circleRight" />
                <span>还有更多</span>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }, [articleVisible]);

  // 相册组件
  const MainAlbum = useMemo(() => {
    const List = albumList.map(
      (item: { _id: string; imageAddress: string }) => {
        return (
          <>
            <Fragment key={item._id}>
              <img src={item.imageAddress} />
            </Fragment>
          </>
        );
      }
    );

    return (
      <>
        {albumVisible && (
          <div className="main-album">
            <div className="main-album-title">世间只是一些影影绰绰的温柔</div>
            <div className="main-album-list">{List}</div>
          </div>
        )}
      </>
    );
  }, [albumVisible]);

  const MainEnd = useMemo(() => {
    return (
      <>
        {endVisible && (
          <div className="main-end">
            <div className="main-end-guide">可以绕行，狐疑，留在原地</div>
            <div className="main-end-greeting"></div>
            <div className="main-end-nav"></div>
            <div className="main-end-operate"></div>
          </div>
        )}
      </>
    );
  }, [endVisible]);

  return (
    <>
      <div className="main">
        <div className="main-home">
          <div className="main-introduce">
            {/* 左边介绍和按钮 */}
            {MainIntroduceLeft}
            {/* 右边的大头像 */}
            <div className="main-introduce-right">
              <Popover
                content={
                  <div className="main-introduce-right-img-popover">
                    Hi, AI Romy Here. Click To Chat<span> ▶ </span>
                  </div>
                }
                placement="top"
                align={{ offset: [0, -30] }}
              >
                <div
                  className="main-introduce-right-img"
                  onClick={showModal}
                ></div>
                <div className="img-border-1"></div>
                <div className="img-border-2"></div>
              </Popover>
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
        {/* 文章 */}
        {MainArticles}
        {/* 相册 */}
        {/* {MainAlbum} */}
      </div>
      {/* AI Chat Modal */}
      <Modal
        className="chat-modal"
        title="Romy AI"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <Chat />
      </Modal>
    </>
  );
};

export default Home;
