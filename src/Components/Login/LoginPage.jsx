import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="relative h-full mt-12 px-20 py-10">
      <div className="absolute right-24 h-[90vh] w-1/2 flex items-center justify-center">
        <div className="shadow-xl p-3 px-20 rounded-xl border-x-2 ">

          <div className="">
            <p className="text-gray-900 text-[20px]  italic font-semibold">
              Hey, You are not Log in..!
            </p>
            <p className="font-bold text-[30px]">
              Please Login / Register here..!
            </p>
          </div>

          <div className="my-5 m-auto rounded-xl shadow-md">
            <button className="w-[100px] font-bold text-left p-2 m-2">
              Email Id:
            </button>
            <input className="my-5 p-2 px-3 m-3 rounded-xl w-[50%]" />
            <br />
            <button className="w-[100px] font-bold text-left p-2 m-2 ">
              Password:
            </button>
            <input className="my-5 p-2 px-3 m-3 rounded-xl w-[50%]" />
          </div>

          <div className="rounded-xl shadow-xl py-5">
            <div className="w-full flex justify-around">
              <button className="w-[150px] text-xl font-semibold bg-sky-300 hover:bg-green-400  shadow-lg rounded-xl p-2 m-2 text-center">
                Log In
              </button>
              <button className="w-[150px]  text-xl font-semibold bg-red-500 hover:bg-red-600 hover:text-white  shadow-lg rounded-xl p-2 m-2 text-center">
                Sign In
              </button>
            </div>

            <button className="w-[350px] my-2 flex items-center m-auto gap-3 justify-center text-xl font-semibold  shadow-lg rounded-xl p-2  text-center bg-white hover:shadow-md hover:shadow-green-500">
              <FcGoogle />
              Google
            </button>
          </div>
          
          <Link to={"/"} className="m-auto my-2 w-full bg-green-800">
            <button className="w-full text-xl font-semibold bg-gray-900 text-gray-100 shadow-lg rounded-xl p-2 mt-10 text-center hover:bg-green-500 hover:text-black">
              Go Back
            </button>
          </Link>

        </div>
      </div>

      <div className=" p-3 px-5 h-[90vh] bg-gray-200 bg-opacity-5 rounded-3xl">
        <img src="/login.png" />
      </div>
    </div>
  );
};

export default LoginPage;
