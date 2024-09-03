"use client";
import React, { useState, Fragment, useEffect } from "react";
import { Article } from "@/types/article";
import { articles } from "@/api/article";
import Link from "next/link";
import moment from "moment";
import Icon from "@/components/Icon";
import "./page.scss";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await articles();
      setArticleList(res.data.list);
    } catch (error) {
      throw Error();
    }
  };

  const List = articleList.map((item: Article) => {
    return (
      <Fragment key={item._id}>
        <Link className="article-list-item" href={"/articles/" + item._id}>
          <span className="article-list-item-title">{item.title}</span>

          <div className="article-list-item-date">
            <Icon name="time" />
            <span>{moment(item.updated).format("YYYY年MM月DD日 ")}</span>
          </div>
        </Link>
      </Fragment>
    );
  });
  return (
    <>
      <div className="article-list-page">
        <div className="article-list">{List}</div>
      </div>
    </>
  );
};

export default Articles;
