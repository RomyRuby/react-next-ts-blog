"use client";

import icons from "@/components/Icon/iconSvg";
import { ReactNode } from "react";
import "./index.scss";

type params = {
  name: string;
  size?: String | Number;
  width?: String | Number;
  height?: String | Number;
};

const Icon = ({ name, size, width, height }: params): ReactNode => {
  const IconFont = icons[name];

  const style = {
    width: (width || size) + "px",
    height: (height || size) + "px",
  };

  return (
    <div
      className="common-icon"
      style={style}
      dangerouslySetInnerHTML={{ __html: IconFont }}
    ></div>
  );
};

export default Icon;
