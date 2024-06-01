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
      <div className="lg:w-[90%] m-auto flex gap-2 mt-20 rounded-sm shadow-sm">
        <Categories />
        {pathname === "/" ? (
          <div className="bg-[#ffff] shadow-sm w-[85%] p-3 rounded-lg">
            <div className="flex h-[50%] justify-between">
              <div className="w-3/4">
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
