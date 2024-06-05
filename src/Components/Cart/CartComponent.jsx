import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../Categories/ItemCard";
import { FaCartArrowDown } from "react-icons/fa";

const CartComponent = () => {
  const data = useSelector((state) => state.cart);
  console.log(data);
  return (
    <div className="w-[90%] mt-24  m-auto">
      <button className="font-bold lg:text-xl my-5 flex items-center gap-2 border shadow-lg rounded-xl  p-3 px-5 hover:bg-black hover:text-white">
        My Cart <FaCartArrowDown />
      </button>
      <div className="flex flex-wrap w-full items-center mb-10">
        {data.length > 0 ? (
          data.map((item) => <ItemCard item={item} key={item.id} />)
        ) : (
          <div className="flex m-auto  lg:w-[90%] flex-wrap my-4 w-screen">
            <p className="lg:text-[50px]">"No data available. Shop now....</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
