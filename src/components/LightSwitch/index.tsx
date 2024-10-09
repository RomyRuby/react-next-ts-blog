"use client";
import { useEffect } from "react";
import Icon from "../Icon";
import "./index.scss";

const LightSwitch = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: Function;
}) => {
  return (
    <>
      <div
        className={`light-switch ${!value ? "light-switch__dark" : ""}`}
        onClick={() => {
          onChange(!value);
        }}
      >
        <div className="light-switch-check">
          {!value && <Icon name="moon" size={12} />}
          {value && <Icon name="sun" size={12} />}
        </div>
      </div>
    </>
  );
};

export default LightSwitch;
