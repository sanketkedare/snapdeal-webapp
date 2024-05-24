import React from "react";

const FeatureCart = ({ feature }) => {
  return (
    <div className="border-x-2 w-full flex justify-center items-center">
      <div>
        <div className="w-[150px] h-[150px] m-auto">
          <img alt="" src={feature.img} />
        </div>
        <p className="uppercase text-[20px] font-semibold text-center">{feature.title}</p>
        <p className="w-[80%] text-center m-auto text-gray-700">{feature.des}</p>
      </div>
    </div>
  );
};

export default FeatureCart;
