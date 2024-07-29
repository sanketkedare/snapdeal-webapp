import React from "react";
import OptionsSlider from "../Slider/OptionsSlider";
import LocationComponent from "../TrendingProducts/LocationComponent";
import RecentProducts from "./RecentProducts";

// Header 

const HeaderComponent = () => {
  return (
    <div className="bg-[#ffff] shadow-sm lg:w-[85%] p-3 rounded-lg">
      <div className="lg:flex lg:h-[50%] justify-between lg:my-auto my-10">
        <div className="lg:w-3/4 lg:mb-0 mb-20">
          <OptionsSlider />
        </div>
        <LocationComponent />
      </div>

      <RecentProducts />
    </div>
  );
};

export default HeaderComponent;
