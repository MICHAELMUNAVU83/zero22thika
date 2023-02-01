import React from "react";

const Pricing = () => {
  return (
    <div className="bg-black h-full pb-20 md:h-[100vh]">
      <h1 className="text-white text-5xl text-center pt-20 font-bold">
        Pricing
      </h1>
      <div className="flex justify-around flex-col items-center max-w-[1240px] mx-auto mt-10 md:flex-row">
        <div className="bg-white h-96 w-80 mt-10 md:mt-0">
          <h1 className="text-black text-5xl text-center pt-20 font-bold">
            Basic
          </h1>
          <h1 className="text-black text-5xl text-center pt-20 font-bold">
            $10
          </h1>
        </div>

        <div className="bg-white h-96 w-80 mt-10 md:mt-0">
          <h1 className="text-black text-5xl text-center pt-20 font-bold">
            Basic
          </h1>
          <h1 className="text-black text-5xl text-center pt-20 font-bold">
            $10
          </h1>
        </div>

        <div className="bg-white h-96 w-80 mt-10 md:mt-0">
          <h1 className="text-black text-5xl text-center pt-20 font-bold">
            Basic
          </h1>
          <h1 className="text-black text-5xl text-center pt-20 font-bold">
            $10
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
