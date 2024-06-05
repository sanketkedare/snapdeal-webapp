import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { opetionsArray } from "../../Utils/options";

/**
 * Option Slider Component
 * With a 3 second delay between images
 * ability to chnage accordingly with clearing previous timeouts
 */

const OptionsSlider = () => {
  const [counter, setCounter] = useState(1);
  const intervalRef = useRef(null);

  const nextHandeler = () => {
    setCounter(prevCounter => (prevCounter === 7 ? 1 : prevCounter + 1));
  };

  const previousHandeler = () => {
    setCounter(prevCounter => (prevCounter === 1 ? 7 : prevCounter - 1));
  };

  useEffect(() => {
    changeSlide();
    return () => clearInterval(intervalRef.current);
  }, [counter]);

  const changeSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCounter(prevCounter => (prevCounter === 7 ? 1 : prevCounter + 1));
    }, 3000);
  };

  const handleButtonClick = (id) => {
    clearInterval(intervalRef.current);
    setCounter(id);
  };

  return (
    <div className="h-full relative">
      <div className="relative h-full">
        <IoIosArrowBack
          className="text-[35px] p-2 z-10 rounded-full bg-white bg-opacity-50 absolute left-3 lg:top-28 top-14 cursor-pointer font-bold"
          onClick={previousHandeler}
        />
        <IoIosArrowForward
          className="text-[35px] p-2 z-10 rounded-full bg-white bg-opacity-50 absolute right-3 lg:top-28 top-14 cursor-pointer font-bold"
          onClick={nextHandeler}
        />
        <div className="flex h-[150px] overflow-hidden">
          <img
            alt=""
            src={opetionsArray.find((i) => i.id === counter).img}
            className="lg:absolute m-auto"
          />
        </div>
      </div>
      <div className="no-scrollbar absolute lg:bottom-10 -bottom-16 lg:my-0 my-3 py-2 lg:h-[70px] border w-full z-10 bg-white flex gap-2 justify-between px-1 overflow-x-auto">
        {opetionsArray.map((i) => (
          <button
            onClick={() => handleButtonClick(i.id)}
            className={`p-1 text-nowrap shadow-sm uppercase w-[150px] text-[10px] lg:text-sm px-2 ${counter === i.id ? "bg-gray-200" : ""}`}
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
