"use client";
import { use, useEffect, useState } from "react";
import Icon from "../Icon";
import "./index.scss";

const LightSwitch = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: Function;
}) => {
  const [isLightOn, setIsLightOn] = useState(true);

  useEffect(() => {
    setIsLightOn(value);
  }, [value]);

  return (
    <>
      <div
        className={`light-switch ${!isLightOn ? "light-switch__dark" : ""}`}
        onClick={() => {
          onChange(!isLightOn);
        }}
      >
        <div className="light-switch-check">
          {!isLightOn && <Icon name="moon" size={12} />}
          {isLightOn && <Icon name="sun" size={12} />}
        </div>
      </div>
    </>
  );
};

export default LightSwitch;
