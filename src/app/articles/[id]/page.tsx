"use client";
import { useEffect, useState } from "react";
import { getArticle } from "@/api/article";
import { Article } from "@/types/article";
import Markdown from "@/components/Markdown";
import "./page.scss";
type params = {
  id: string;
};

const Page = ({ params }: { params: params }) => {
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    async function fetchData() {
      const res = await getArticle(params.id);
      setArticle(res.data);
    }
    fetchData();
  }, [params.id]);

  return (
    <>
      <Markdown content={article?.content!} />
    </>
  );
};

export default Page;
