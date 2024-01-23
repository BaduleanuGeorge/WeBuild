import React from "react";

export default function Button(props) {
  return (
    <div>
      {/* Universal button*/}
      <button className="h-[50px] w-[150px] bg-[#f85e00] rounded-sm hover:bg-[#ff7a27] duration-300">
        {props.text}
      </button>
    </div>
  );
}
