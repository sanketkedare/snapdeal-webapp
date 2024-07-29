import React from "react";
import { setPath } from "../../Redux/categorySlice";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SingleCategory = ({ item }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <Link
      to={`/products/${item.path}`}
      key={item.name}
      className={` lg:py-3 shadow-md lg:w-auto w-[100px] capitalize text-sm lg:flex gap-2  items-center lg:my-2 rounded-xl hover:bg-gray-200 p-1 ${
        new RegExp(`(^|/)${item.path}(/|$)`).test(pathname) && "bg-green-300"
      } `}
      onClick={() => dispatch(setPath(item.name.toLowerCase()))}
    >
      <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
        <img alt={item.title} src={item.img} />
      </div>
      <h1 className="text-wrap lg:my-0 my-2">{item.name}</h1>
    </Link>
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
          Enjoy Convinient Order tracking
        </p>
        <p className="capitalize text-[10px] ">Scan to Download app</p>
      </div>
    </div>
  );
};
