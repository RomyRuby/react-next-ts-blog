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

  // useEffect(() => {
  //   if (chatList.length === 0) {
  //     const chat = createAiMessage(
  //       "你好！我是Romy Zhang，一名前端开发程序员。很高兴在虚拟世界与你相遇！如果你有关于前端开发的问题或者需要一些建议，无论是关于HTML、CSS、JavaScript还是React、Vue等框架，我都会尽力帮助你。无论是新手入门还是解决具体的技术难题，都可以来聊聊哦。 如果你对某个特定的前端技术或项目有疑问，不妨详细描述一下，我们可以一起探讨解决方案。无论是网站布局、交互设计，还是性能优化、跨浏览器兼容性问题，我都乐于分享我的经验和见解。让我们一起在这个充满创造性和挑战的领域里成长吧！"
  //     );
  //     const newChatList = chatList.concat([chat]);
  //     setChatList(newChatList);
  //   }
  // }, [chatList]);

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
      // const res = {
      //   data: {
      //     content:
      //       "你好！我是Romy Zhang，一名前端开发程序员。很高兴在虚拟世界与你相遇！如果你有关于前端开发的问题或者需要一些建议，无论是关于HTML、CSS、JavaScript还是React、Vue等框架，我都会尽力帮助你。无论是新手入门还是解决具体的技术难题，都可以来聊聊哦。 如果你对某个特定的前端技术或项目有疑问，不妨详细描述一下，我们可以一起探讨解决方案。无论是网站布局、交互设计，还是性能优化、跨浏览器兼容性问题，我都乐于分享我的经验和见解。让我们一起在这个充满创造性和挑战的领域里成长吧！",
      //   },
      // };
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
