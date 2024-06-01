import React from "react";
import ShortedComponent from "../Components/ShortLists/ShortedComponent";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import TrendingProducts from "../Components/TrendingProducts/TrendingProducts";

const ShortLists = () => 
{
  return (
    <div>
      <NavBar />
      <ShortedComponent />
      <TrendingProducts/>
      <Footer/>
    </div>
  );
};

export default ShortLists;
