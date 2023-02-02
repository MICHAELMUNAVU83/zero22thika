import React from "react";
import programmes from "./ProgramList";

const Programs = () => {
  console.log(programmes);
  return (
    <div>
      <section className=" mt-4 flex justify-around max-w-[1240px] flex-wrap">
        <p className="bg-red-600 p-2 text-1xl text-white m-3 md:m-0">Monday</p>
        <p className="bg-red-600 p-2 text-1xl text-white m-3 md:m-0">Tuesday</p>
        <p className="bg-red-600 p-2 text-1xl text-white m-3 md:m-0">
          Wednesday
        </p>
        <p className="bg-red-600 p-2 text-1xl text-white m-3 md:m-0">
          Thursday
        </p>
        <p className="bg-red-600 p-2 text-1xl text-white m-3 md:m-0">Friday</p>
        <p className="bg-red-600 p-2 text-1xl text-white m-3 md:m-0">
          Saturday
        </p>
      </section>
    </div>
  );
};

export default Programs;
