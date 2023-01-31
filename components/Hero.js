import React from "react";
import { AiFillDownCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <div className=" bg-cover custom-img bg-fixed h-[700px]  w-full">
        <div className="flex justify-center flex-col items-center h-full text-white  md:text-4xl text-center  font-bold text-2xl">
          <h1>BUILD THE PERFECT BODY AND</h1>
          <h1>THE PERFECT LIFE</h1>

          <AiFillDownCircle className="text-6xl animate-bounce mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
