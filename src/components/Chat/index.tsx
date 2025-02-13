"use client";
import { qwenChat } from "@/api/chat";
import React, { useState, Fragment, useEffect, useRef } from "react";
import { Button, Input } from "antd";
import "./index.scss";
import randomRange from "@/utils/randomRange";
import Icon from "../Icon";
import ReactMarkdown from "react-markdown";
import Markdown from "@/components/Markdown";

import FlowOut from "./components/FlowOut";

type Chat = {
  id: string;
  role: string;
  content: string;
  rendered?: boolean;
};
const { TextArea } = Input;
const Chat = () => {
  const [input, setInput] = useState("");
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [inputting, setInputting] = useState(false);
  const chatListRef = useRef<null | HTMLDivElement>(null);
  const chatItemsRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    function handleCompositionStart() {
      setInputting(true);
    }
    function handleCompositionEnd() {
      setInputting(false);
    }
    document.addEventListener("compositionstart", handleCompositionStart);
    document.addEventListener("compositionend", handleCompositionEnd);

    return () => {
      document.removeEventListener("compositionstart", handleCompositionStart);
      document.removeEventListener("compositionend", handleCompositionEnd);
    };
  }, []);

  useEffect(() => {
    if (chatList.length === 0) {
      const chat = createAiMessage(
        "Hi, 我是***AI Romy***，一名前端开发工程师。\n\n\n我在网页应用的设计和实现方面有着深厚的热情，喜欢通过代码将创意变为现实。我的目标是打造既美观又实用的产品，为用户提供最佳的体验。\n\n如果你对前端技术感兴趣，或者只是想聊聊最新的开发趋势，欢迎随时找我聊天！"
      );
      const newChatList = chatList.concat([chat]);
      setChatList(newChatList);
    }
  }, [chatList]);

  useEffect(() => {
    if (input === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [input]);

  const handleInputMessage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);
  };
  const handleSendMessage = async () => {
    if (disabled) return;
    const id = randomRange(10, 10);
    const message = input;
    let newChatList = chatList.concat([
      createUserMessage(input, "user-" + id),
      createAiMessage("", "ai-" + id),
    ]);
    setChatList(newChatList);
    setInput("");
    setTimeout(() => {
      scrollToBottom();
    }, 500);
    try {
      const res = await qwenChat({ message });
      newChatList = newChatList.map((item) => {
        if (item.id === "ai-" + id) {
          return { ...item, content: res.data.content };
        }
        return item;
      });
      setChatList(newChatList);
    } catch (error: any) {
      throw Error(error);
    }
  };

  const createUserMessage = (content: string, id: string) => {
    return {
      id,
      role: "user",
      content,
      rendered: true,
    };
  };

  const createAiMessage = (
    content: string,
    id: string = randomRange(10, 10)
  ) => {
    return {
      id,
      role: "ai",
      content,
      rendered: false,
    };
  };

  const scrollToBottom = () => {
    chatListRef.current!.scrollTo({
      behavior: "smooth",
      top:
        chatItemsRef.current!.clientHeight - chatListRef.current!.clientHeight,
    });
  };

  const handleFLowingEnd = (chat: Chat) => {
    const newChatList = chatList.map((item) => {
      if (item.id === chat.id) {
        return { ...item, rendered: true };
      }
      return item;
    });
    setChatList(newChatList);
  };

  const chatMessageList = chatList?.map((chat) => {
    return (
      <Fragment key={chat.id}>
        {chat.role === "user" && (
          <div className="chat-item user-bubble">
            <div className="user-bubble-content">{chat.content}</div>
          </div>
        )}
        {chat.role === "ai" && (
          <div
            className={`chat-item ai-bubble ${
              !chat.rendered ? "ai-bubble__delay" : ""
            }`}
          >
            <div className="ai-bubble-avatar"></div>
            <div className="ai-bubble-content">
              {!chat.rendered && (
                <FlowOut
                  content={chat.content}
                  onFlowing={() => {
                    scrollToBottom();
                  }}
                  onFlowed={() => {
                    handleFLowingEnd(chat);
                  }}
                />
              )}
              {chat.rendered && <Markdown content={chat.content} />}
            </div>
          </div>
        )}
      </Fragment>
    );
  });

  const handleEnterEvent = (e: React.KeyboardEvent) => {
    if (inputting) return;
    if (
      e.code === "Enter" &&
      !e.ctrlKey &&
      !e.metaKey &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault();
      handleSendMessage();
    }
    if (
      e.code === "Enter" &&
      (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey)
    ) {
      e.preventDefault();
      setInput(input + "\n");
    }
  };

  return (
    <>
      <div className="chat">
        <div className="chat-list" ref={chatListRef}>
          <div ref={chatItemsRef}>{chatMessageList}</div>
        </div>
        <div className="chat-box">
          <div className="chat-box-input">
            <TextArea
              value={input}
              onKeyDown={(e) => handleEnterEvent(e)}
              onChange={handleInputMessage}
              autoSize={{ minRows: 1, maxRows: 10 }}
            />
          </div>
          <Button
            className={`chat-box-send ${
              disabled ? "chat-box-send__disabled" : ""
            }`}
            onClick={handleSendMessage}
          >
            <Icon name="send" size={22} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Chat;
