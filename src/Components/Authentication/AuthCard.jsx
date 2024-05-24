import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const AuthCard = ({ setShowAuth }) => {
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState(0);
  const [otpOn, setOptOn] = useState(false);

  const inputHandeler = (e) => {
    otpOn ? setOtp(e.target.value) : setValue(e.target.value);
  };
  const submitHandeler = () => {
    otpOn ? setShowAuth(false) : setOptOn(true);
    setValue("");
  };

  return (
    <div className=" bg-white border  absolute rounded-xl shadow-md z-30 w-[400px] h-[500px]  -bottom-56 -right-72 px-8 flex justify-center items-center">
      <div>
        <IoCloseSharp
          className="absolute right-2 top-2 bg-white p-1 text-[30px] rounded-full shadow-lg"
          onClick={() => setShowAuth(false)}
        />

        <p className="text-xl text-center my-3 font-bold">
          Login/Sign Up On Snapdeal
        </p>
        <p className="text-center w-[70%] m-auto my-4 text-[15px] text-gray-500">
          Please provide your Mobile Number or Email to Login/ Sign Up on
          Snapdeal
        </p>

        <input
          type="text"
          placeholder={otpOn ? `Enter OTP` : `Mobile Number/Email`}
          className="w-full my-4 p-2 py-4"
          onChange={inputHandeler}
          value={value}
        />

        <button
          className="p-2 py-4 w-full m-auto text-center bg-red-600 text-white uppercase font-semibold"
          onClick={submitHandeler}
        >
          {otpOn ? "Submit otp " : "Continue"}
        </button>

        <div className="w-full">
          <p className="text-sm text-gray-400 text-center my-4">
            or Login Using
          </p>
          <button className="shadow-2xl w-full text-center border border-black p-2 my-2 relative">
            <FcGoogle className="absolute text-xl" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
