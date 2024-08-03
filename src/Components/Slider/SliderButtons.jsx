import React from "react";
import { motion } from "framer-motion";

const SliderButtons = ({ item, index, handleButtonClick, counter }) => {
  const buttonVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };
  return (
    <motion.button
      onClick={() => handleButtonClick(item.id)}
      className={`p-1 text-nowrap shadow-sm uppercase w-[150px] text-[10px] lg:text-sm px-2 rounded-xl font-semibold hover:bg-[#4A0404] hover:text-white ${
        counter === item.id ? "bg-black text-white" : ""
      }`}
      key={item.id}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      whileHover={{ scale: 1.1}}
    >
      {item.des}
    </motion.button>
  );
};

export default SliderButtons;
