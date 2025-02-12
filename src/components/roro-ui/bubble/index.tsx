import { ReactNode } from "react";
import "./index.scss";

type params = {
  backgroundColor?: string;
  borderRadius?: Array<Number>;
  width?: String | Number;
  height?: String | Number;
  size?: String | Number;
  slot?: ReactNode;
  bubbleClass?: String;
};

const Bubble = ({
  backgroundColor,
  borderRadius,
  width,
  height,
  size,
  slot,
  bubbleClass,
}: params): ReactNode => {
  let borderRadiusStr = "";
  if (borderRadius?.length === 1) {
    borderRadiusStr = borderRadius[0] + "px";
  } else {
    borderRadius?.forEach((item) => {
      borderRadiusStr += item + "px ";
    });
  }
  const style = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadiusStr ? borderRadiusStr : undefined,
    width: (width || size) + "px",
    height: (height || size) + "px",
  };

  return (
    <div className={`roro-bubble ${bubbleClass}`} style={style}>
      {slot}
    </div>
  );
};

export default Bubble;
