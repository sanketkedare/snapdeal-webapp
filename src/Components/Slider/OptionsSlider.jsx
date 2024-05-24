import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { opetionsArray } from "../../Utils/options";

const OptionsSlider = () => {
  const [counter, setCounter] = useState(1);

  const nextHandeler = () => {
    counter === 7 ? setCounter(1) : setCounter(counter + 1);
  };
  const previousHandeler = () => {
    counter === 1 ? setCounter(7) : setCounter(counter - 1);
  };
  return (
    <div className="h-full border relative ">
      <div className="relative bg-gray-900 h-full">
        <IoIosArrowBack
          className="text-[35px] p-2 z-10 rounded-full bg-white absolute left-3 top-28 cursor-pointer font-bold"
          onClick={previousHandeler}
        />
        <IoIosArrowForward
          className="text-[35px] p-2 z-10 rounded-full bg-white absolute right-3 top-28 cursor-pointer font-bold"
          onClick={nextHandeler}
        />
        <div className="flex">
          <img
            alt=""
            src={opetionsArray.find((i) => i.id === counter).img}
            className="absolute"
          />
        </div>
      </div>
      <div className="absolute bottom-0 h-[70px] border w-full z-10 bg-white flex gap-2 justify-between px-1">
        {opetionsArray.map((i) => (
          <button
            onClick={()=>setCounter(i.id)}
            className={`px-2 ${counter === i.id ? "bg-gray-200" : ""}`}
            key={i.id}
          >
            {i.des}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionsSlider;
