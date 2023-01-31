import React from "react";
import { AiFillDownCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <div className="custom-img bg-cover h-[700px] fixed w-full">
        <div className="flex justify-center flex-col items-center h-full text-white md:text-4xl text-center  font-bold text-2xl">
          <h1>BUILD THE PERFECT BODY AND</h1>
          <h1>THE PERFECT LIFE</h1>

          <AiFillDownCircle className="text-6xl animate-bounce mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Header;
