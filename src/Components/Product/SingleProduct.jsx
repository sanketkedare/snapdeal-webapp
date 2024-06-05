import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../FrontPage/RatingComponent";
import { IoIosCart } from "react-icons/io";
import { addToCart, removeFromCart } from "../../Redux/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.curr);
  const [addedToCart, setAddedToCart] = useState(false);

  console.log(product);

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
    <div className="lg:w-[90%]  m-auto bg-white my-3 p-9 lg:flex gap-2  justify-between overflow-y-scroll hover:shadow-2xl rounded-xl ">
      <div className="lg:w-1/2 lg:p-14 p-2 rounded-2xl shadow-lg overflow-hidden relative flex justify-center items-center hover:shadow-2xl">
        <img
          alt={product.title}
          src={product.image}
          className="h-full p-4 my-4"
        />

        
        
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-[30px] font-bold my-4 text-center">
          {product.title}
        </h1>
        <p className="my-5 lg:text-xl text-gray-600 ">{product.description}</p>
        <div className="border p-4 flex justify-center items-center gap-5">
          <Rating rating={product.rating.rate} />
          <p>({product.rating.count})</p>
        </div>
        <p className="text-sky-600 mt-3">Category : {product.category}</p>
        <button className="font-semibold border rounded-xl p-3 px-10 my-5 bg-gray-800 text-white">
          ₹ {product.price * 100}
        </button>
        
        <button
        className={`flex justify-center items-center py-2 gap-2 rounded-lg ${
          addedToCart ? "bg-green-600 text-black" : "bg-red-600 text-white"
        } m-auto w-full my-2 `}
        onClick={(e)=>cartHandeler(e)}
      >
        <IoIosCart className="text-xl" />
        {addedToCart ? "Remove From Cart" : "Add To Cart"}
      </button>
      </div>
    </div>
  );
};

export default SingleProduct;
