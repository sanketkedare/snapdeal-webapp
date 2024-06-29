/*eslint-disable*/
/**
 * Home Page
 * Contains the Navbar, Front Page and Footer Component.
 * All components are created in Saperate folder in Components directory.
 */

import React, { useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import FrontPage from "../Components/FrontPage/FrontPage";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { addToShort } from "../Redux/shortListSlice";
import { fetchSelected } from "../Utils/fetchSelected";

const Home = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const shortData = useSelector((state) => state.short);
  const currentUser = useSelector((state) => state.user);
  const CART_API = process.env.REACT_APP_CART;
  const SHORT_API = process.env.REACT_APP_SHORT;

  const updateStore = (cart, short) => {
    dispatch(addToCart(...cart));
    dispatch(addToShort(...short));
  };

  const getFromDB = async () => {
    const userEmail = currentUser.user.email;
    const queryParams = new URLSearchParams({ userEmail });
    const cartResponse = await fetchSelected(CART_API, queryParams);
    const shortResponse = await fetchSelected(SHORT_API, queryParams);

    if (cartResponse.ok && shortResponse.ok) {
      const jsonResponse_cart = await cartResponse.json();
      const jsonResponse_short = await shortResponse.json();
      updateStore(jsonResponse_cart, jsonResponse_short);
    } else {
      console.error("Failed to fetch cart/short from DB:", response.statusText);
    }
  };

  const updateDB_Cart = async (data) => {
    // POST
    const body = { userEmail: currentUser.user.email, cart: data };
    await fetch(CART_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

  const updateDB_Short = async (data) => 
  {
    const body = { userEmail: currentUser.user.email, short: data };
    await fetch(SHORT_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

  }

  useEffect(() => {
    currentUser.isAuthenticated && updateDB_Cart(cartData);
  }, [cartData]);
  useEffect(()=>{
    currentUser.isAuthenticated && updateDB_Short(shortData);
  },[shortData])
  useEffect(() => {
    currentUser.isAuthenticated && getFromDB();
  }, [currentUser]);

  return (
    <div className="bg-[#f0eeee]  overflow-hidden ">
      <NavBar />
      <FrontPage />
      <Footer />
    </div>
  );
};

export default Home;
