import React from "react";
import { Link } from "react-router-dom";

const SignInAdd = ({ nextHandeler }) => {
  return (
    <div className="bg-white w-[90%] h-full rounded-sm shadow-sm  flex-col  m-auto justify-center">
      <img alt="snapdeal" src="/snapdeal.png"  className="m-auto pt-3"/>
      <p className="text-[12px] text-center mt-5 my-3 text-gray-500 w-[50%] m-auto">
        Login to your Snapdeal account
      </p>
      <button className="w-2/3 bg-black text-white shadow-sm py-1 text-[13px] rounded-sm my-4  ml-14 lg:ml-10">
        LOG IN
      </button>

      <div className="flex justify-evenly w-full bottom-1 left-0 items-center">
        <div className="flex gap-2">
          <h1 className="text-[12px] text-gray-800">New user ?</h1>
          <Link  className="text-[12px] text-sky-700 font-semibold">
            Register
          </Link>
        </div>
        <button
          className="w-1/3 bg-gray-400 text-gray-100 shadow-sm py-1 text-[13px]"
          onClick={nextHandeler}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default SignInAdd;
