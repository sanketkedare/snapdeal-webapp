import React from "react";
import { setPath } from "../../Redux/categorySlice";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

const SingleCategory = ({ item }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();


  const tapEffect = {
    scale: 0.95,
  };

  return (
    <motion.div
      whileTap={tapEffect}
      className={`lg:py-3 shadow-md lg:w-auto w-[150px] capitalize text-sm lg:flex gap-2 items-center lg:my-2 rounded-xl hover:bg-gray-800 hover:text-white hover:font-semibold p-2 ${
        new RegExp(`(^|/)${item.path}(/|$)`).test(pathname) && "bg-[#b1c840cb] text-[#020202] font-semibold"
      }`}
      onClick={() => dispatch(setPath(item.name.toLowerCase()))}
    >
      <Link
        to={`/products/${item.path}`}
        key={item.name}
        className="flex items-center gap-2 lg:w-[150px] h-[50px]"
      >
        <div className="lg:w-[50px] w-[50px] h-full lg:h-[50px] overflow-hidden rounded-full bg-inherit border">
          <img alt={item.title} src={item.img}  className="w-full h-full object-cover overflow-hidden"/>
        </div>
        <h1 className="text-wrap lg:my-0 my-2 w-[70px] ">{item.name}</h1>
      </Link>
    </motion.div>
  );
};

export default SingleCategory;

export const Advertisement = () => {
  return (
    <div className="lg:absolute bottom-1 left-0 w-full lg:h-[100px] flex justify-center items-center px-2 m-auto">
      <img
        alt="QR"
        src="https://i2.sdlcdn.com/img/snapdeal/barCode_Home1x.png"
      />
      <div className="flex-col gap-1 p-2">
        <p className="capitalize text-[12px] font-semibold">
          Enjoy Convenient Order Tracking
        </p>
        <p className="capitalize text-[10px]">Scan to Download App</p>
      </div>
    </div>
  );
};
