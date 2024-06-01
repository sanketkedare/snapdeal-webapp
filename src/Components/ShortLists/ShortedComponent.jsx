import React from "react";
import { IoHeartCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import ShortListCard from "./ShortListCard";

const ShortedComponent = () => {
  const shortListedProducts = useSelector((state) => state.short);
  return (
    <div className="mt-20 w-[90%] m-auto">
      <h1 className="font-bold text-[30px] flex items-center text-red-950">
        My Feveurite <IoHeartCircle />
      </h1>
      {shortListedProducts.length ? (
        <div className="border h-full">
          {shortListedProducts.map((item) => (
            <ShortListCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <h1 className="font-bold text-[40px] my-10">"No Product Selected. Let's Shop...."</h1>
      )}
    </div>
  );
};

export default ShortedComponent;
