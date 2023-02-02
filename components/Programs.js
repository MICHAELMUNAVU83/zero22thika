import React from "react";
import programmes from "./ProgramList";

const Programs = () => {
  console.log(programmes);
  return (
    <div>
      <section className=" mt-4 md:flex justify-around text-center container md:px-32 grid grid-cols-3 gap-12  px-3 ">
        <p className="bg-red-600 p-2 text-1xl text-white">Monday</p>
        <p className="bg-red-600 p-2 text-1xl text-white">Tuesday</p>
        <p className="bg-red-600 p-2 text-1xl text-white">Wednesday</p>
        <p className="bg-red-600 p-2 text-1xl text-white">Thursday</p>
        <p className="bg-red-600 p-2 text-1xl text-white">Friday</p>
        <p className="bg-red-600 p-2 text-1xl text-white">Saturday</p>
      </section>
    </div>
  );
};

export default Programs;
