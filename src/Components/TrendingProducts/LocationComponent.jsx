/*eslint-disable*/

import React, { useState } from "react";
import { useSelector } from "react-redux";
import SignInAdd from "./SignInAdd";
import ShortListSummary from "./ShortListSummary";

// Location Component

const LocationComponent = () => {
  const isLoggedin = useSelector((state) => state.user.isAuthenticated);

  const [showLocation, setShowLocation] = useState(true);
  const [pincode, setPincode] = useState("");
  const [value, setValue] = useState(null);

  const locationTracker = async () => {
    const API = process.env.REACT_APP_LOCATION + `/${pincode}`;
    const res = await fetch(API);
    const JSON = await res.json();
    return JSON;
  };

  const serchLocation = async () => {
    if (value === null) {
      const data = await locationTracker();
      setValue(data[0].taluk);
    } else {
      setValue(null);
    }
  };

  const nextHandeler = () => setShowLocation(!showLocation);

  return (
    <div className="p-2 h-[350px] lg:w-1/4 border ml-2">
      {showLocation ? (
        <div className="bg-white w-[90%] h-full rounded-sm p-2 shadow-sm  flex-col m-auto justify-center">
          <img alt="location" src="/Location.png" className="m-auto" />
          <p className="text-[12px] text-center text-gray-500">
            Your Delevery Pincode
          </p>
          <p className="text-[12px] text-center mt-5 my-3 text-gray-500">
            Enter your pincode to check availability and faster delivery options
          </p>

          {value === null ? (
            <input
              onChange={(e) => setPincode(e.target.value)}
              type="text"
              placeholder="Enter pincode"
              className="m-auto  w-[100%] my-2  p-2 border text-sm"
            />
          ) : (
            <div
              className="m-auto w-[100%] my-2  p-2 border text-sm"
              onClick={() => setValue(null)}
            >
              Location : {value}
            </div>
          )}
          <div className="flex gap-2 w-full  bottom-1 left-0">
            <button
              className="w-2/3 bg-black text-white shadow-sm py-1 text-[13px] rounded-sm"
              onClick={serchLocation}
            >
              {value === null ? "SUBMIT" : "CHANGE PINCODE"}
            </button>
            <button
              className="w-1/3 bg-gray-400 text-gray-100 shadow-sm py-1 text-[13px]"
              onClick={nextHandeler}
            >
              NEXT
            </button>
          </div>
        </div>
      ) : isLoggedin ? (
        <ShortListSummary nextHandeler={nextHandeler} />
      ) : (
        <SignInAdd nextHandeler={nextHandeler} />
      )}
    </div>
  );
};

export default LocationComponent;
