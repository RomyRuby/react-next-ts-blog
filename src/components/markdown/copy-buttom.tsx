import { useState } from "react";
import Icon from "../Icon";
import { message } from "antd";
import "./index.scss";

const CopyButton = ({ id }: { id: string }) => {
  const [copied, setCopited] = useState(false);

  const onCopy = async () => {
    try {
      setCopited(true);
      const text = document.getElementById(id)!.innerText;
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setCopited(false);
      }, 1000);
      message.success("copy success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={onCopy} className="copy-button">
      <Icon name="copy" />
    </button>
  );
};

export default CopyButton;
