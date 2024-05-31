import React, { useState } from "react";
import { IoIosCart } from "react-icons/io";
import Rating from "../FrontPage/RatingComponent";
import { useDispatch } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { addToShort } from "../../Redux/shortListSlice";
import { addToCart } from "../../Redux/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const [showHeart, setShowHeart] = useState(false);
  const [selected, setSelected] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const selectedHandeler = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
      dispatch(addToShort(item));
    }
  };

  const cartHandeler = () => {
    dispatch(addToCart(item));
    setAddedToCart(true);
  };

  return (
    <div
      className="w-[250px] h-[500px] bg-white shadow-sm hover:shadow-2xl text-black rounded-2xl  p-2 mb-3 m-auto relative"
      onMouseEnter={() => setShowHeart(true)}
      onMouseLeave={() => setShowHeart(false)}
    >
      {showHeart &&
        (selected ? (
          <FaHeart
            className="absolute right-3 top-3 font-thin text-red-500"
            onClick={selectedHandeler}
          />
        ) : (
          <FaRegHeart
            className="absolute right-3 top-3 font-thin text-gray-800"
            onClick={selectedHandeler}
          />
        ))}
      <div className="w-full h-3/5 p-4 rounded-md overflow-x-hidden">
        <img alt={item.title} src={item.image} className="h-full w-full" />
      </div>
      <button
        className={`flex justify-center items-center py-2 gap-2 rounded-lg ${addedToCart ? 'bg-green-600 text-black': 'bg-red-600 text-white'} m-auto w-full my-2 `}
        onClick={cartHandeler}
      >
        <IoIosCart className="text-xl" />
        {addedToCart ? "Added Sucessfully" : "Add To Cart"}
      </button>
      <p className="text-sm text-gray-500">{item.title.slice(0, 60)}</p>
      <div className="w-full absolute bottom-16">
        <Rating rating={item.rating.rate} />
      </div>

      <p className="p-2 text-lg rounded-b-2xl border text-center hover:bg-gray-900 bg-gray-300 hover:text-white font-bold absolute bottom-0 w-full left-0">
        ₹ {item.price *100} /-
      </p>
    </div>
  );
};

export default ItemCard;
