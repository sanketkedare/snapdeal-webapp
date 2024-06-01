import React, {  useState } from "react";
import Rating from "./RatingComponent";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToShort } from "../../Redux/shortListSlice";
import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../Redux/currentProductSlice";

const RecentProductCart = ({ item}) => {
  const dispatch = useDispatch();
  const [showHeart, setShowHeart] = useState(false);
  const [selected, setSelected] = useState(false);

  const selectedHandeler = (e) => {
    e.preventDefault(); 
    if (selected) {
        setSelected(false);
    } else {
        setSelected(true);
        dispatch(addToShort(item));
    }
};

const addToCurrentProduct = () => dispatch(setCurrentProduct(item));



  return (
    <Link
    to={`/products/${item.category}/${item.id}`}
      className="relative w-[500px] border px-3 p-2 rounded-2xl shadow-xl"
      onMouseEnter={() => setShowHeart(true)}
      onMouseLeave={() => setShowHeart(false)}
      onClick={addToCurrentProduct}
    >

      {showHeart &&
        (selected ? (
          <FaHeart
            className="absolute right-3 top-3 font-thin text-red-500"
            onClick={(e)=>selectedHandeler(e)}
          />
        ) : (
          <FaRegHeart
            className="absolute right-3 top-3 font-thin text-gray-800"
            onClick={(e)=>selectedHandeler(e)}
          />
        ))}
      <img src={item.image} className="h-32 m-auto" />
      <div className="h-[40px] my-3 overflow-hidden">
        <p className="text-[12px] text-center">{item.title}</p>
      </div>
      <Rating rating={item.rating.rate} />
      <h1 className="w-32 m-auto border rounded-xl text-center p-2 my-2 bg-sky-300">
        Rs. {item.price *100}
      </h1>
    </Link>
  );
};

export default RecentProductCart;
