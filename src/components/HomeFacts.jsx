import React from "react";

export default function HomeFacts(props) {
  return (
    <div className="w-[200px]">
      <div className="flex flex-col items-center">
        <h2 className="md:h3-preset-light text-white">{props.title}</h2>
        <h3 className="md:h4-preset-light text-[#fb8500]">{props.desc}</h3>
      </div>
    </div>
  );
}
