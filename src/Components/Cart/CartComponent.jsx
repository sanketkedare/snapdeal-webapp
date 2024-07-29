/*eslint-disable*/

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../Categories/ItemCard";
import { FaCartArrowDown } from "react-icons/fa";
import { fetchSelected } from "../../Utils/fetchSelected";
import { addToCart } from "../../Redux/cartSlice";

// Cart Component

const CartComponent = () => 
{
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const CART_API = process.env.REACT_APP_CART;


  console.log(data);

  // Fetch Cart Data
  const getFromDB = async () => {
    const userEmail = user.email;
    const queryParams = new URLSearchParams({ userEmail });
    const cartResponse = await fetchSelected(CART_API, queryParams);
    console.log(cartResponse)

    if (cartResponse.ok) {
      const jsonResponse_cart = await cartResponse.json();
      dispatch(addToCart(jsonResponse_cart));
    } else {
      console.error("Failed to fetch cart from DB:");
    }
  };

  const updateDB_Cart = async (data) => {
    const body = { userEmail: user.email, cart: data };
    await fetch(CART_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

  useEffect(() => {
    if (isAuthenticated) getFromDB();
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) updateDB_Cart(data);
  }, [data]);

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
