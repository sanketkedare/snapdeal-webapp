/*eslint-disable*/

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../FrontPage/RatingComponent";
import { IoIosCart } from "react-icons/io";
import { addToCart, removeFromCart } from "../../Redux/cartSlice";
import { Navigate, useLocation } from "react-router-dom";
import SingleProductLoader from "./SingleProductLoader";

const SingleProduct = () => {
  const { pathname } = useLocation();
  const productID = pathname.slice(pathname.lastIndexOf('/') + 1);

  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const Authenticated = useSelector((state) => state.user.isAuthenticated);

  const [addedToCart, setAddedToCart] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const cartHandler = (e) => {
    e.preventDefault();
    if (Authenticated) {
      if (!addedToCart) {
        dispatch(addToCart(product));
        setAddedToCart(true);
      } else {
        dispatch(removeFromCart(product));
        setAddedToCart(false);
      }
    } else {
      setRedirectToLogin(true);
    }
  };

  const getCurrentProduct = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PRODUCT_API}/${productID}`);
      const json = await response.json();
      setProduct(json);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  useEffect(() => {
    getCurrentProduct();
  }, [pathname]);

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="lg:w-[90%] m-auto bg-white my-3 p-9 lg:flex gap-2 justify-between overflow-y-scroll hover:shadow-2xl rounded-xl">
      {product ? (
        <>
          <div className="lg:w-1/2 lg:p-14 p-2 rounded-2xl shadow-lg overflow-hidden relative flex justify-center items-center hover:shadow-2xl">
            <img alt={product.title} src={product.image} className="h-full p-4 my-4" />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-[30px] font-bold my-4 text-center">{product.title}</h1>
            <p className="my-5 lg:text-xl text-gray-600">{product.description}</p>
            <div className="border p-4 flex justify-center items-center gap-5">
              <Rating rating={product.rating.rate} />
              <p>({product.rating.count})</p>
            </div>
            <p className="text-sky-600 mt-3">Category: {product.category}</p>
            <button className="font-semibold border rounded-xl p-3 px-10 my-5 bg-gray-800 text-white">
              ₹ {product.price * 100}
            </button>
            <button
              className={`flex justify-center items-center py-2 gap-2 rounded-lg ${
                addedToCart ? "bg-green-600 text-black" : "bg-red-600 text-white"
              } m-auto w-full my-2`}
              onClick={cartHandler}
            >
              <IoIosCart className="text-xl" />
              {addedToCart ? "Remove From Cart" : "Add To Cart"}
            </button>
          </div>
        </>
      ) : (
        <SingleProductLoader/>
      )}
    </div>
  );
};

export default SingleProduct;
