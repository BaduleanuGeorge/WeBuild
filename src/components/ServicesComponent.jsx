import React, { useState } from "react";

const ServicesComponent = ({ title, description, imageSrc }) => {
  return (
    <div className="m-2 relative cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={imageSrc}
          alt="card image"
          className="object-cover max-h-[600px] hover:scale-[1.15] duration-300"
        />
        <div className="absolute bottom-0 left-0 w-full h-[60px] md:h-[80px] flex flex-col justify-center pl-3 bg-black bg-opacity-80 text-white">
          <h2 className="text-md text-[#fb8500] md:text-xl">{title}</h2>
          <h3 className="text-sm md:text-lg">{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
