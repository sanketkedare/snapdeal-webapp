/*eslint-disable*/

import React, { useState } from "react";
import { useSelector } from "react-redux";
import SignInAdd from "./SignInAdd";
import ShortListSummary from "./ShortListSummary";
import { motion } from "framer-motion";

// Location Component

const LocationComponent = () => {
  const isLoggedin = useSelector((state) => state.user.isAuthenticated);

  const [showLocation, setShowLocation] = useState(true);
  const [pincode, setPincode] = useState("");
  const [value, setValue] = useState(null);

  const locationTracker = async () => {
    try {
      const API = `${process.env.REACT_APP_LOCATION}/${pincode}`;
      const res = await fetch(API);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return []; // Return an empty array or handle the error as needed
    }
  };
  
  const searchLocation = async () => {
    if (pincode.trim() === "" || isNaN(pincode) || Number(pincode) <= 0) {
      return;
    }
  
    if (value === null) {
      const data = await locationTracker();
      if (data.length > 0) {
        setValue(data[0].taluk);
      } else {
        setValue("No data found");
      }
    } else {
      setValue(null); // Optionally reset the value
    }
  };

  const nextHandeler = () => setShowLocation(!showLocation);

  return (
    <motion.div
      className="p-2 h-[350px] lg:w-1/4 border ml-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showLocation ? (
        <motion.div
          className="bg-white w-[90%] h-full rounded-sm p-2 shadow-sm flex-col m-auto justify-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img alt="location" src="/Location.png" className="m-auto" />
          <p className="text-[12px] text-center text-gray-500">
            Your Delivery Pincode
          </p>
          <p className="text-[12px] text-center mt-5 my-3 text-gray-500">
            Enter your pincode to check availability and faster delivery options
          </p>

          {value === null ? (
            <input
              onChange={(e) => setPincode(e.target.value)}
              type="text"
              placeholder="Enter pincode"
              className="m-auto w-[100%] my-2 p-2 border text-sm"
            />
          ) : (
            <div
              className="m-auto w-[100%] my-2 p-2 border text-sm"
              onClick={() => setValue(null)}
            >
              Location : {value}
            </div>
          )}
          <div className="flex gap-2 w-full bottom-1 left-0">
            <motion.button
              className="w-2/3 bg-black text-white shadow-sm py-1 text-[13px] rounded-sm"
              onClick={searchLocation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {value === null ? "SUBMIT" : "CHANGE PINCODE"}
            </motion.button>
            <motion.button
              className="w-1/3 bg-gray-400 text-gray-100 shadow-sm py-1 text-[13px]"
              onClick={nextHandeler}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              NEXT
            </motion.button>
          </div>
        </motion.div>
      ) : isLoggedin ? (
        <ShortListSummary nextHandeler={nextHandeler} />
      ) : (
        <SignInAdd nextHandeler={nextHandeler} />
      )}
    </motion.div>
  );
};

export default LocationComponent;
