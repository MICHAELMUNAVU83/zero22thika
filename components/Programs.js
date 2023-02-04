import React, { useState } from "react";
import programmes from "./ProgramList";
import {CgGym} from "react-icons/cg"
import programpic from "../public/programpic.jpg";

const Programs = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  return (
    <div className="program-img bg-cover bg-center bg-fixed h-[600px] md:h-[500px] w-full">
      <div className="bg-black/75 h-full">
        <section className="flex flex-col justify-start ml-10 pt-10">
          <h1 className="flex text-4xl  text-red-600 font-extrabold flex-row">
            {" "}
            <CgGym  className="text-4xl mx-2  text-red-600" /> Our
            Programs
          </h1>
          <h1 className="  text-white font-bold text-4xl">
            PUSH YOUR LIMITS FORWARD
          </h1>
          <h1 className="  text-white font-bold text-4xl">WE OFFER TO YOU</h1>
        </section>

        <section className=" mt-4 flex justify-center  flex-wrap md:gap-6">
          <p
            onClick={(e) => {
              setSelectedDay(e.target.innerText);
            }}
            className="bg-red-600 p-2 text-1xl text-white m-3 md:m-0  cursor-pointer"
          >
            Monday
          </p>
          <p
            onClick={(e) => {
              setSelectedDay(e.target.innerText);
            }}
            className="bg-red-600 p-2 text-1xl text-white m-3 md:m-0  cursor-pointer"
          >
            Tuesday
          </p>
          <p
            onClick={(e) => {
              setSelectedDay(e.target.innerText);
            }}
            className="bg-red-600 p-2 text-1xl text-white m-3 md:m-0 cursor-pointer"
          >
            Wednesday
          </p>
          <p
            onClick={(e) => {
              setSelectedDay(e.target.innerText);
            }}
            className="bg-red-600   px-6 py-2 text-1xl text-white m-3 md:m-0  cursor-pointer"
          >
            Thursday
          </p>
          <p
            onClick={(e) => {
              setSelectedDay(e.target.innerText);
            }}
            className=" bg-red-600 text-1xl px-6 py-2 text-white m-3 md:m-0  cursor-pointer"
          >
            Friday
          </p>
        </section>

        {programmes.programmes.map(
          (program) =>
            program.day === selectedDay && (
              <div className="flex justify-center transition-all duration-500 ease-in-out">
                <div className="flex flex-col justify-center items-center border-4 border-red-500 md:w-96 w-80 p-4 m-4 rounded-md">
                  <div className="p-4  w-72 md:w-80 text-center bg-gray-200 rounded-2xl">
                    <p>
                      Day :<span className="font-bold">{program.day}</span>
                    </p>
                    <p>
                      Class :
                      <span className="font-bold">{program.exercise}</span>
                    </p>
                    <p>
                      Time :<span className="font-bold">{program.time}</span>
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Programs;
