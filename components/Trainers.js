import React from "react";
import { AiOutlineDash } from "react-icons/ai";
import Image from "next/image";
import trainer1 from "../public/trainer1.jpg";
import trainer3 from "../public/trainer3.jpg";
import trainer4 from "../public/trainer4.jpg";
const Trainers = () => {
  return (
    <div className=" h-full">
      <section className="flex flex-col justify-start ml-10 pt-10">
        <h1 className="flex text-4xl  flex-row">
          {" "}
          <AiOutlineDash className="text-4xl text-red-600 mx-2 " /> Our Team Members
        </h1>
        <h1 className=" font-bold text-4xl">MEET OUR MOST</h1>
        <h1 className=" font-bold text-4xl">EXPERIENCED TRAINERS</h1>
      </section>
      <section className="flex justify-around flex-col items-center max-w-[1240px] mx-auto md:flex-row">
        <div>
          <Image src={trainer1} alt="trainer1" />
        </div>
        <div>
          <Image src={trainer4} alt="trainer4" />
        </div>
        <div>
          <Image src={trainer3} alt="trainer3" />
        </div>
      </section>
    </div>
  );
};

export default Trainers;
