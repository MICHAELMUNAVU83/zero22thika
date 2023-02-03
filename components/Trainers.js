import React from "react";
import { AiOutlineDash } from "react-icons/ai";
import Image from "next/image";
import trainer1 from "../public/trainer1.jpg";
import trainer3 from "../public/trainer3.jpg";
import trainer4 from "../public/trainer4.jpg";
const Trainers = () => {
  return (
    <div className=" h-full">
      <section className="flex flex-col justify-start ml-10 pt-10 ">
        <h1 className="flex text-4xl  flex-row">
          {" "}
          <AiOutlineDash className="text-4xl text-red-600 mx-2 " /> Our Team
          Members
        </h1>
        <h1 className=" font-bold text-4xl">MEET OUR MOST</h1>
        <h1 className=" font-bold text-4xl">EXPERIENCED TRAINERS</h1>
      </section>
      <section className="flex justify-around mb-10 mt-10 flex-col items-center max-w-[1240px] mx-auto md:flex-row">
        <div className="md:w-80 h-80 md:h-96 hover:bg-red-600  duration-300 ease-in-out relative mb-10 w-72 md:m-0">
          <Image
            className="absolute w-80 h-80 inset-0 bg-cover bg-center z-0 shadow-xl shadow-red-600 "
            src={trainer4}
          />
          <div className="opacity-0 hover:opacity-100 duration-300 ease-in-out absolute inset-0 z-10 flex justify-center items-end my-4 text-2xl text-white font-semibold">
            Dwayne
          </div>
        </div>
        <div className="md:w-80 h-80 md:h-96 hover:bg-red-600  duration-300 ease-in-out relative mb-10 w-72 md:m-0">
          <Image
            className="absolute w-80 h-80 inset-0 bg-cover bg-center z-0 shadow-xl shadow-red-600 "
            src={trainer4}
          />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute ease-in-out inset-0 z-10 flex justify-center items-end my-4 text-2xl text-white font-semibold">
            Dwayne
          </div>
        </div>
        <div className="md:w-80 h-80 md:h-96 hover:bg-red-600  duration-300 ease-in-out relative mb-10 w-72 md:m-0">
          <Image
            className="absolute w-80 h-80 inset-0 bg-cover bg-center z-0 shadow-xl shadow-red-600 "
            src={trainer4}
          />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute ease-in-out inset-0 z-10 flex justify-center items-end my-4 text-2xl text-white font-semibold">
            Dwayne
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
