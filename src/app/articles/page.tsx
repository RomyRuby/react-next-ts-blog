"use client";
import React, { useState } from "react";
import Markdown from "@/components/Markdown";

const Articles = () => {
  const [content, setContent] = useState("");

  return (
    <div className="mx-auto max-w-2xl space-y-4 py-4">
      <Markdown content={content} />
    </div>
  );
};

export default Articles;
