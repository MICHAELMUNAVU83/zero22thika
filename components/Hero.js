import React from "react";
import { AiFillDownCircle } from "react-icons/ai";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div className=" bg-cover custom-img bg-fixed h-[700px] w-full">
        <div className="bg-black/75 h-full">
          <div className="flex justify-center flex-col items-center inset-0 z-10 h-full text-white  md:text-5xl text-center  font-bold text-2xl">
            <h1 className="font-lato font-bold">BUILD THE PERFECT BODY AND</h1>
            <h1 className="font-lato font-bold text-red-600">
              THE PERFECT LIFE
            </h1>
            <Link href="/#about">
              <AiFillDownCircle className="text-6xl animate-bounce mt-10" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
