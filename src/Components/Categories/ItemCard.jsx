/* eslint-disable */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IoIosCart } from "react-icons/io";
import Rating from "../FrontPage/RatingComponent";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { addToShort } from "../../Redux/shortListSlice";
import { addToCart, removeFromCart } from "../../Redux/cartSlice";
import { Link, Navigate } from "react-router-dom";
import { getPath } from "../../Utils/getPath";

/**
 * Item Component
 * Used to render components according to data using map
 */

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const Authenticated = useSelector((state) => state.user.isAuthenticated);

  const [showHeart, setShowHeart] = useState(false);
  const [selected, setSelected] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  // Handler for shortlisting favorite products
  const selectedHandler = (e) => {
    e.preventDefault();
    setSelected(!selected);
    dispatch(addToShort(item));
  };

  // Cart handler for adding or removing item from cart
  const cartHandler = (e) => {
    e.preventDefault();
    if (Authenticated) {
      if (!addedToCart) {
        dispatch(addToCart(item));
      } else {
        dispatch(removeFromCart(item));
      }
      setAddedToCart(!addedToCart);
    } else {
      setRedirectToLogin(true);
    }
  };



  useEffect(() => {
    const isItemInCart = cartItems.some((i) => i.id === item.id);
    setAddedToCart(isItemInCart);
  }, [cartItems]);

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <Link
      to={getPath(item)}
      className="lg:w-[250px] w-[170px] lg:h-[500px] h-[350px] bg-white shadow-sm hover:shadow-2xl text-black rounded-2xl p-2 mb-3 m-auto relative"
      onMouseEnter={() => setShowHeart(true)}
      onMouseLeave={() => setShowHeart(false)}
    >
      {showHeart &&
        (selected ? (
          <FaHeart
            className="absolute right-3 top-3 font-thin text-red-500"
            onClick={selectedHandler}
          />
        ) : (
          <FaRegHeart
            className="absolute right-3 top-3 font-thin text-gray-800"
            onClick={selectedHandler}
          />
        ))}
      <div className="w-full h-3/5 p-4 rounded-md overflow-x-hidden">
        <img alt={item.title} src={item.image} className="h-full w-full" />
      </div>
      <button
        className={`flex justify-center items-center py-2 gap-2 rounded-lg text-[10px] lg:text-sm ${
          addedToCart ? "bg-green-600 text-black" : "bg-red-600 text-white"
        } m-auto w-full my-2`}
        onClick={cartHandler}
      >
        <IoIosCart className="text-[10px] lg:text-sm" />
        {addedToCart ? "Remove From Cart" : "Add To Cart"}
      </button>
      <p className="text-[10px] lg:text-sm text-gray-500">
        {item.title.slice(0, 40)}
      </p>
      <div className="w-full absolute lg:bottom-16 bottom-10">
        <Rating rating={item.rating.rate} />
      </div>
      <p className="p-2 text-sm rounded-b-2xl border text-center hover:bg-gray-900 bg-gray-300 hover:text-white font-bold absolute bottom-0 w-full left-0">
        ₹ {item.price * 100} /-
      </p>
    </Link>
  );
};

export default ItemCard;
