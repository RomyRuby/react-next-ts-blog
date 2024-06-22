"use client";
import React, { useState } from "react";
import Markdown from "@/components/markdown";

const Articles = () => {
  const [content, setContent] = useState("");

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-4 py-4">
      <textarea
        value={content}
        onInput={handleInput}
        rows={8}
        className="block w-full rounded-md border-0 bg-zinc-100 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-700 sm:text-sm sm:leading-6"
      />
      <Markdown content={content} />
    </div>
  );
};

export default Articles;
