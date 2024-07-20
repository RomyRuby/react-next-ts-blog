import { useMemo } from "react";
import "./index.scss";

type AnimationSpanListParams = {
  str: string;
  boldStr: string;
  strClassName: string;
  boldActive?: boolean;
};

const AnimationSpanList = (params: AnimationSpanListParams) => {
  const { str, boldStr, strClassName, boldActive } = params;

  const StrArr = () =>
    str.split("").map((element: string, index: number) => {
      return (
        <span
          className={strClassName}
          key={strClassName + element + index}
          style={{
            display: "inline-block",
            animation: `puase-hidden ${
              index * 30 + 200
            }ms linear, enter-from-bottom 0.4s linear ${index * 30 + 200}ms`,
          }}
        >
          {element}
        </span>
      );
    });
  const BoldStrArr = () =>
    boldStr.split("").map((element: string, index: number) => {
      return (
        <span
          className={strClassName + "__bold"}
          key={strClassName + "__bold" + element}
          style={{
            display: "inline-block",
            animation: `puase-hidden ${
              (index + str.length) * 30 + 200
            }ms linear, enter-from-bottom 0.4s linear ${
              (index + str.length) * 30 + 200
            }ms`,
          }}
        >
          {element}
        </span>
      );
    });

  return (
    <div className="animation-span-list">
      <div className="animation-span-list-item">
        <StrArr />
      </div>
      <div
        className={`animation-span-list-item ${
          boldActive ? "animation-span-list-item__bold" : ""
        }`}
      >
        <BoldStrArr />
      </div>
    </div>
  );
};

export default AnimationSpanList;
