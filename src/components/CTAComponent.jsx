import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function CTAComponent() {
  return (
    <div className="w-full h-[350px] md:h-[400px] bg-[url('../src/assets/CTABG.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg-black/50">
        <div className="max-w-7xl mx-auto py-14">
          <div className="flex flex-col items-center">
            <h2 className="h3-preset-light">Get in touch</h2>
            <h1 className="text-3xl md:text-5xl text-white text-center pt-4 max-w-[800px] font-bold">
              We are ready to bring our inovative ideas to your projects today!
            </h1>
          </div>
          <div className="flex justify-center pt-10">
            <Link to="/contact">
              <Button text="Contact us" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
