import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import ServiceItem from "./ServiceItem";
const Services = () => {
  return (
    <div className="service-img bg-cover bg-center bg-fixed h-[700px] w-full">
      <section className="flex flex-col justify-start ml-10 pt-10">
        <h1 className="flex text-4xl text-white flex-row">
          {" "}
          <AiOutlineLine className="text-4xl mx-2 text-white" /> Our Services
        </h1>
        <h1 className="text-white font-bold text-4xl">
          PUSH YOUR LIMITS FORWARD
        </h1>
        <h1 className="text-white font-bold text-4xl">WE OFFER TO YOU</h1>
      </section>

        <section>
              
      </section>
    </div>
  );
};

export default Services;
