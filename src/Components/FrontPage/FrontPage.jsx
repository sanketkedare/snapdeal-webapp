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
      <Outlet />
      {pathname === "/" && (
        <div className="w-[90%] h-[110vh]  m-auto mt-2 flex gap-2">
          <Categories />
          <div className="bg-[#ffff] shadow-sm w-[85%] p-3">
            <div className="flex h-[50%]  justify-between">
              <div className="w-3/4">
                <OptionsSlider />
              </div>
              <LocationComponent />
            </div>

            <RecentProducts />
          </div>
        </div>
      )}
      <TrendingProducts />
      <Advertisement />
      <Features />
    </>
  );
};

export default FrontPage;
