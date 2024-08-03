import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { opetionsArray } from "../../Utils/options";
import { motion, AnimatePresence } from "framer-motion";
import SliderButtons from "./SliderButtons";

/**
 * Option Slider Component
 * With a 3 second delay between images
 * ability to change accordingly with clearing previous timeouts
 */

const OptionsSlider = () => {
  const [counter, setCounter] = useState(1);
  const intervalRef = useRef(null);
  const directionRef = useRef(1); // 1 for forward, -1 for backward

  const nextHandler = () => {
    directionRef.current = 1;
    setCounter((prevCounter) => (prevCounter === 7 ? 1 : prevCounter + 1));
  };

  const previousHandler = () => {
    directionRef.current = -1;
    setCounter((prevCounter) => (prevCounter === 1 ? 7 : prevCounter - 1));
  };

  useEffect(() => {
    changeSlide();
    return () => clearInterval(intervalRef.current);
  }, [counter]);

  const changeSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => (prevCounter === 7 ? 1 : prevCounter + 1));
    }, 1500);
  };

  const handleButtonClick = (id) => {
    clearInterval(intervalRef.current);
    directionRef.current = id > counter ? 1 : -1;
    setCounter(id);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="h-full relative overflow-hidden">
      <div className="relative h-full">
        <IoIosArrowBack
          className="text-[35px] p-2 z-10 rounded-full bg-white bg-opacity-50 absolute left-3 lg:top-28 top-14 cursor-pointer font-bold"
          onClick={previousHandler}
        />
        <IoIosArrowForward
          className="text-[35px] p-2 z-10 rounded-full bg-white bg-opacity-50 absolute right-3 lg:top-28 top-14 cursor-pointer font-bold"
          onClick={nextHandler}
        />
        <div className="flex h-[150px] overflow-hidden">
          <AnimatePresence initial={false} custom={directionRef.current}>
            <motion.img
              key={counter} // Use key to ensure AnimatePresence detects change
              alt="ad"
              src={opetionsArray.find((i) => i.id === counter).img}
              className="lg:absolute m-auto"
              custom={directionRef.current}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="no-scrollbar absolute lg:bottom-10 -bottom-16 lg:my-0 my-3 py-2 lg:h-[70px] border w-full z-10 bg-white flex gap-2 justify-between px-1 overflow-x-auto lg:overflow-hidden">
        {opetionsArray.map((item, index) => (
          <SliderButtons
            item={item}
            handleButtonClick={handleButtonClick}
            counter={counter}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default OptionsSlider;
