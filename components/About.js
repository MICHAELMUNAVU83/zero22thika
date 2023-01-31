import React from "react";
import Image from "next/image";
import aboutimage from "../public/about.jpg";
import { MdOutlineLinearScale } from "react-icons/md";

const About = () => {
  return (
    <div >
      <div className="py-10">
        <section className="flex justify-around align-center  flex-col md:flex-row">
          {/* Right side */}
          <div className="md:shadow-2xl md:shadow-red-500 flex justify-center items-center ">
            <Image src={aboutimage} alt="aboutimage" className=" w-96 mx-2 px-2 md:mx-0 my-3 md:rounded-lg md:p-0 md:my-0 rounded-2xl" />
          </div>
          {/* Left side  */}
                  <div className="ml-10 ">
            <h1 className="text-4xl font-bold text-red-600 flex">
              <MdOutlineLinearScale className="text-4xl text-red-600" /> ABOUT
              US
            </h1>
            <h2 className="text-2xl font-bold text-break my-3">
              <p>SAFE BODY BUILDING </p>
              <p>SAFE BODY BUILDING </p>
              <p>SAFE BODY BUILDING </p>
            </h2>

            <p className="text-lg text-gray-500 w-80 my-3">
              Brook presents your services with flexible, convenient and cdpose
              layouts. You can select your favorite layouts & elements for cular
              ts with unlimited ustomization possibilities. Pixel-perfect
              replication of the designers is intended.
            </p>
            <p className="text-sm text-gray-500 w-80 my-3">
              Brook presents your services with flexible, convefnient and chient
              anipurpose layouts. You can select your favorite layouts.
            </p>

            <button className="bg-red-600 text-white px-6 py-4 my-3 ">
              Read More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
