/* eslint-disable */

/**
 * Home Page
 * Contains the Navbar, Front Page, and Footer Components.
 * All components are created in separate folders in the Components directory.
 */

import React, { useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import FrontPage from "../Components/FrontPage/FrontPage";
import { useDispatch, useSelector } from "react-redux";
import { addToShort } from "../Redux/shortListSlice";
import { fetchSelected } from "../Utils/fetchSelected";

const Home = () => {
  const dispatch = useDispatch();
  const shortData = useSelector((state) => state.short);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const SHORT_API = process.env.REACT_APP_SHORT;

  const updateStore = (short) => {
    dispatch(addToShort(...short));
  };

  const getFromDB = async () => {
    const userEmail = user.email;
    const queryParams = new URLSearchParams({ userEmail });
    const shortResponse = await fetchSelected(SHORT_API, queryParams);

    if (shortResponse.ok) {
      const jsonResponse_short = await shortResponse.json();
      updateStore(jsonResponse_short);
    } else {
      console.error("Failed to fetch short from DB:");
    }
  };



  const updateDB_Short = async (data) => {
    const body = { userEmail: user.email, short: data };
    await fetch(SHORT_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

  useEffect(() => {
    if (isAuthenticated) updateDB_Short(shortData);
  }, [shortData]);

  useEffect(() => {
    if (isAuthenticated) getFromDB();
  }, [isAuthenticated]);


  return (
    <div className="bg-[#f0eeee] overflow-hidden">
      <NavBar />
      <FrontPage />
      <Footer />
    </div>
  );
};

export default Home;