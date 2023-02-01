import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import {GiWeightLiftingUp} from 'react-icons/gi'
import { MdOutlineFoodBank } from 'react-icons/md'
import { BiDumbbell } from 'react-icons/bi'
import { FaRunning } from 'react-icons/fa'
import { GiMuscleUp } from 'react-icons/gi'
import {GiHealthPotion} from 'react-icons/gi'
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

      <section className="max-w-[1240px] mt-10 mx-auto flex flex-col md:flex-row justify-center items-center">
      
      </section>
    </div>
  );
};

export default Services;
