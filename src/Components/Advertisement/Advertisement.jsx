import React from "react";
import Download from "./Download";

// Adervertiesment Component

const Advertisement = () => {
  return (
    <div className="lg:h-[80vh] w-[90%] m-auto bg-white mt-10 lg:flex relative">
      <img
        alt="leaf"
        src="https://i2.sdlcdn.com/img/leaves1x.png"
        className="absolute lg:top-0 right-0 lg:w-auto w-10 bottom-36"
      />

      <img
        alt="snapdeal app"
        src="https://i2.sdlcdn.com/img/appScreenshot@1x.png"
      />
      <div className="flex justify-center items-center m-auto">
        <div>
          <p className=" text-[20px] lg:text-[50px] w-[70%] font-bold my-5">Download Snapdeal App Now</p>
          <p className="lg:text-xl text-gray-600 my-4">
            Fast Simple & Delightfull.
            <br />
            All it takes is 30 seconds to Download
          </p>
          <Download/>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
