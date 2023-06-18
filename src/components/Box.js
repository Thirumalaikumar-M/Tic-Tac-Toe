import React from "react";
import "./Box.css";

export const Box = ({ value, onClick }) => {
  const style = value === "X" ? "box x" : "box o";

  return (
    <div>
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
