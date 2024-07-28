import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  logInWithEmailAndPassword,
  signUpwithEmailPassWord,
  signUpWithGoogle,
} from "../Authentication/firebaseAuth";
import { register } from "../../Utils/register";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Authenticated = useSelector((state) => state.user.isAuthenticated);

  const signUpHandler = async () => {
    try {
      await signUpwithEmailPassWord(email, password);
      await register(email, password);
    } catch (err) {
      console.log("error", err);
    }
  };

  const signInHandler = async () => {
    try {
      await logInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("error", error);
    }
  };

  if (Authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="relative mt-12 px-20 py-10 backdrop-blur-lg h-screen">
      <div className="absolute right-24 h-[80vh] w-2/3 flex items-center justify-center py-2">
        <div className="p-3 px-20 rounded-xl w-full">
          <div>
            <p className="text-gray-900 text-md italic font-semibold">
              Hey, You are not logged in..!
            </p>
            <p className="font-bold text-xl">Please Login / Register here..!</p>
          </div>

          <div className="my-5 m-auto rounded-xl shadow-md p-5">
            <div className="flex items-center mb-5">
              <label
                className="font-bold text-left p-2 uppercase w-1/4"
                htmlFor="email"
              >
                Email Id:
              </label>
              <input
                className="p-2 px-3 rounded-xl w-3/4 border border-black"
                type="email"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center">
              <label
                className="font-bold text-left p-2 uppercase w-1/4"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="p-2 px-3 rounded-xl w-3/4 border border-black"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="rounded-xl shadow-xl py-5">
            <div className="w-[80%] m-auto flex justify-around">
              <button
                className="w-1/3 text-xl font-semibold bg-sky-300 hover:bg-green-400 shadow-lg rounded-xl p-2 m-2 text-center"
                onClick={signInHandler}
              >
                Log In
              </button>
              <button
                className="w-1/3 text-xl font-semibold bg-red-500 hover:bg-red-600 hover:text-white shadow-lg rounded-xl p-2 m-2 text-center"
                onClick={signUpHandler}
              >
                Sign Up
              </button>
            </div>

            <button
              onClick={signUpWithGoogle}
              className="w-[80%] my-4 flex items-center m-auto gap-3 justify-center text-xl font-semibold shadow-lg rounded-xl p-2 text-center bg-white hover:shadow-md hover:shadow-green-500"
            >
              <FcGoogle />
              Sign up with Google
            </button>
          </div>

          <Link to="/" className="m-auto my-2 w-full bg-green-800">
            <button className="w-full text-xl font-semibold bg-gray-900 text-gray-100 shadow-lg rounded-xl p-2 mt-10 text-center hover:bg-green-500 hover:text-black">
              Go Back
            </button>
          </Link>
        </div>
      </div>

      <div className=" w-1/3 px-5 h-[80vh] bg-gray-200 bg-opacity-5 rounded-3xl -rotate-12">
        <img alt="login" src="/login.png"  className="rounded-l-full shadow-lg mt-16 p-3 w-[350px]"/>
      </div>
    </div>
  );
};

export default LoginPage;
