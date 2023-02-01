import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { BiDumbbell } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { GiHealthPotion } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
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

      <section className="mt-10 max-w-[1240px] m-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop="true"
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
          }}
        >
          <SwiperSlide>
            <div className="bg-white  shadow-xl p-4 h-80 md:mx-0 mx-4">
              <div className="flex flex-col justify-center items-center">
                <GiWeightLiftingUp className="text-6xl text-gray-500" />
                <h1 className="text-2xl font-bold text-gray-500">
                  Weight Loss
                </h1>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quod.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white  shadow-xl p-4 h-80 md:mx-0 mx-4">
              <div className="flex flex-col justify-center items-center">
                <GiHealthPotion className="text-6xl text-gray-500" />
                <h1 className="text-2xl font-bold text-gray-500">
                  Cardio Vascular Training
                </h1>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quod.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white  shadow-xl p-4 h-80 md:mx-0 mx-4">
              <div className="flex flex-col justify-center items-center">
                <FaRunning className="text-6xl text-gray-500" />
                <h1 className="text-2xl font-bold text-gray-500">
                  Cardio Training
                </h1>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quod.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white  shadow-xl p-4 h-80  md:mx-0 mx-4">
              <div className="flex flex-col justify-center items-center">
                <GiWeightLiftingUp className="text-6xl text-gray-500" />
                <h1 className="text-2xl font-bold text-gray-500">
                  Weight Loss
                </h1>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quod.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white  shadow-xl p-4 h-80  md:mx-0 mx-4">
              <div className="flex flex-col justify-center items-center">
                <MdOutlineFoodBank className="text-6xl text-gray-500" />
                <h1 className="text-2xl font-bold text-gray-500">Nutrition</h1>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quod.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white  shadow-xl p-4 h-80  md:mx-0 mx-4">
              <div className="flex flex-col justify-center items-center">
                <BiDumbbell className="text-6xl text-gray-500" />
                <h1 className="text-2xl font-bold text-gray-500">Strength</h1>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quod.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Services;
