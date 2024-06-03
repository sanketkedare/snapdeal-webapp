import React from "react";
import Categories from "./Categories";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import Advertisement from "../Advertisement/Advertisement";
import LocationComponent from "../TrendingProducts/LocationComponent";
import OptionsSlider from "../Slider/OptionsSlider";
import RecentProducts from "./RecentProducts";
import Features from "./Features";
import { Outlet, useLocation } from "react-router-dom";

const FrontPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="lg:w-[90%] m-auto lg:flex gap-2 mt-20 rounded-sm shadow-sm">
        <Categories />
        {pathname === "/" ? (
          <div className="bg-[#ffff] shadow-sm lg:w-[85%] p-3 rounded-lg">
            <div className="lg:flex lg:h-[50%] justify-between lg:my-auto my-10">
              <div className="lg:w-3/4 lg:mb-0 mb-20">
                <OptionsSlider />
              </div>
              <LocationComponent />
            </div>

            <RecentProducts />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <TrendingProducts />
      <Advertisement />
      <Features />
    </>
  );
};

export default FrontPage;
