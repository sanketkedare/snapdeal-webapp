import React from "react";

const FeatureCart = ({ feature }) => {
  return (
    <div className="border-x-2 w-full flex justify-center lg:items-center">
      <div>
        <div className="lg:w-[150px] lg:h-[150px] h-[100px]  lg:m-auto mb-1 ">
          <img alt="" src={feature.img} className="w-full px-2 m-auto" />
        </div>
        <p className="uppercase lg:text-[20px] text-[12px] font-semibold text-center">{feature.title}</p>
        <p className="w-[80%] lg:text-sm text-[8px] text-center m-auto text-gray-700">{feature.des}</p>
      </div>
    </div>
  );
};

export default FeatureCart;
