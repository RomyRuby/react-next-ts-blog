import { useCallback, useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
import Markdown from "@/components/Markdown";
import "./index.scss";
type Chat = {
  id: string;
  role: string;
  content: string;
};
const FlowOut = ({
  content,
  onFlowing,
  onFlowed,
}: {
  content: string;
  onFlowing: Function;
  onFlowed: Function;
}) => {
  const [contentArray, setContentArray] = useState<string[]>([]);
  const [transformedContent, setTransformedContent] = useState("");

  useEffect(() => {
    setContentArray(content.split(""));
  }, [content]);

  // 流式输出;
  const flowOutput = useCallback(() => {
    let currentCursor = 0;
    let content = "";

    loopAppendText();

    function loopAppendText() {
      const nextChar = () => {
        const currentWord = contentArray[currentCursor];
        content += currentWord;
        setTransformedContent(content);
        currentCursor += 1;
        onFlowing();
        loopAppendText();
      };
      setTimeout(() => {
        const isAppendFinished = currentCursor >= contentArray.length;
        if (!isAppendFinished) {
          nextChar();
        } else {
          onFlowed();
        }
      }, 40);
    }
  }, [contentArray, onFlowing, onFlowed]);

  useEffect(() => {
    if (contentArray.length != 0) {
      flowOutput();
    }
  }, [contentArray, flowOutput]);

  const Loading = () => {
    return (
      <div className="bubble-loading" v-if="info.loading">
        <div className="bubble-loading-point colorChange1"></div>
        <div className="bubble-loading-point colorChange2"></div>
        <div className="bubble-loading-point colorChange3"></div>
      </div>
    );
  };

  if (transformedContent === "") {
    return <Loading />;
  }
  return (
    <>
      <Markdown content={transformedContent} />
    </>
  );
};

export default FlowOut;
