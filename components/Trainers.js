import React from "react";
import { CgGym } from "react-icons/cg";
import Image from "next/image";
import trainer3 from "../public/trainer3.jpg";
import trainer4 from "../public/trainer4.jpg";
import trainer2 from "../public/gymbro.jpg";
const Trainers = () => {
  return (
    <div id="trainers" className=" h-full">
      <section className="flex flex-col justify-start ml-10 pt-10 ">
        <h1 className="flex text-4xl text-red-600 font-semibold  flex-row">
          {" "}
          <CgGym className="text-4xl text-red-600 mx-2 " /> Our Team 
        </h1>
        <h1 className=" font-bold  text-4xl">MEET OUR MOST</h1>
        <h1 className=" font-bold  text-4xl">
          EXPERIENCED TRAINERS
        </h1>
      </section>
      <section className="flex justify-around mb-10 mt-10 flex-col items-center max-w-[1240px] mx-auto md:flex-row">
        <div className="shadow-xl shadow-red-500 flex flex-col my-4 hover:scale-105 transform transition duration-500">
          <Image src={trainer2} alt="trainer1" className="w-80 h-80 md:h-96" />
          <p className="p-2 bg-red-600 text-center text-white">
            John Doe
          </p>
        </div>
        <div className="shadow-xl shadow-red-500 flex flex-col my-4 hover:scale-105 transform transition duration-500">
          <Image src={trainer4} alt="trainer4" className="w-80 h-80 md:h-96" />
          <p className="p-2 bg-red-600 text-center text-white">
           John Doe
          </p>
        </div>
        <div className="shadow-xl shadow-red-500 flex flex-col my-4 hover:scale-105 transform transition duration-500">
          <Image src={trainer3} alt="trainer3" className="w-80 h-80 md:h-96" />
          <p className="p-2 bg-red-600 text-center text-white">
           John Doe
          </p>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
