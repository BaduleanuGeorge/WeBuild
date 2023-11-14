import React from "react";

export default function HomeFacts(props) {
  return (
    <div className="w-[200px]">
      <div className="flex flex-col items-center">
        <h2 className="h3-preset-light">{props.title}</h2>
        <h3 className="h4-preset-light">{props.desc}</h3>
      </div>
    </div>
  );
}
