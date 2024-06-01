import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import Rating from "../FrontPage/RatingComponent";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/cartSlice";
import { IoIosCart } from "react-icons/io";
import { removeFromShort } from "../../Redux/shortListSlice";

const ShortListCard = ({ item }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.curr);
  const [addedToCart, setAddedToCart] = useState(false);

  const cartHandeler = (e) => {
    e.preventDefault();
    if (addedToCart === false) {
      dispatch(addToCart(product));
      setAddedToCart(true);
    } else {
      dispatch(removeFromCart(product));
      setAddedToCart(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl w-full my-10 h-[400px] flex gap-3 relative">
      <FaHeart className="absolute top-6 right-6 text-red-500 text-3xl cursor-pointer" onClick={()=>dispatch(removeFromShort(item))}/>
      <div className="w-1/5 p-5 rounded-xl shadow-2xl flex items-center">
        <img alt={item.title} src={item.image} />
      </div>
      <div className="w-4/5 p-2">
        <h1 className="font-bold text-3xl my-2">{item.title}</h1>
        <p className="w-[80%] my-2 text-gray-600 font-semibold">
          {item.description}
        </p>
        <p className="font-serif italic my-3 font-thin">
          Category : {item.category}
        </p>
        <button className="font-bold bg-black text-white p-3 m-3 my-5 px-6 text-center rounded-xl">
          ₹ {item.price * 100}
        </button>
        <div className="flex">
          <Rating rating={item.rating.rate} />

          {/* Cart Option */}
          <button
            className={`flex justify-center items-center py-2 gap-2 rounded-lg ${
              addedToCart ? "bg-green-600 text-black" : "bg-red-600 text-white"
            } m-auto w-[50%] my-2 `}
            onClick={(e) => cartHandeler(e)}
          >
            <IoIosCart className="text-xl" />
            {addedToCart ? "Remove From Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortListCard;
