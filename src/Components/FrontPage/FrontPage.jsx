/**
 * Front Page Component
 * Contains Multiple range of a Components
 * Categories - Section have multiple options for each category
 * Home Section of a web page at path '/'
 * and changes components dynamically according to path from category
 */

import React from "react";
import Categories from "./Categories";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import Advertisement from "../Advertisement/Advertisement";
import Features from "./Features";
import { Outlet, useLocation } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

const FrontPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="lg:w-[90%] m-auto lg:flex gap-2 mt-20 rounded-sm shadow-sm">
        <Categories />
        {pathname === "/" ? <HeaderComponent /> : <Outlet />}
      </div>
      <TrendingProducts />
      <Advertisement />
      <Features />
    </>
  );
};

export default FrontPage;
