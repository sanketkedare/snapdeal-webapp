import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const NavCartButton = () => {
    const cartItemCount = useSelector((state) => state.cart.length);

    const [blink, setBlink] = useState(false);

    useEffect(() => {
      setBlink(true);
      const timeout = setTimeout(() => setBlink(false), 1000);
      return () => clearTimeout(timeout);
    }, [cartItemCount]);

  return (
    <motion.button
      className={`text-[10px] m-auto lg:text-sm flex justify-center items-center gap-2 font-semibold
        ${blink ? "bg-green-400 lg:text-black" : "bg-inherit lg:text-white"}
        py-1 lg:p-2 lg:px-4 px-2 rounded-xl shadow-xl`}
      whileHover={{ scale: 1.05, backgroundColor: "white", color:'black' }} // light gray color on hover
      transition={{ type: "spring", stiffness: 300 }}
    >
      Cart
      <AiOutlineShoppingCart className="text-[10px] font-bold lg:text-lg" />
    </motion.button>
  );
};

export default NavCartButton;
