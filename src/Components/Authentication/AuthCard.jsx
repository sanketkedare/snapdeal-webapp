import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { logInWithEmailAndPassword, signUpwithEmailPassWord, signUpWithGoogle } from "./firebaseAuth";

const AuthCard = ({ setShowAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandeler = async () => {
    const res = await signUpwithEmailPassWord(email, password);
    console.log("response",res);
    setShowAuth(false)
  };

  const signInHandeler = async() => {
    const res = await logInWithEmailAndPassword(email, password);
    console.log("response",res);
    setShowAuth(false)
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
          Please provide your Email to Login/ Sign Up on Snapdeal
        </p>

        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full my-4 p-2 py-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 py-4"
          required
        />

        <div className="flex items-center justify-between gap-2">
          <button
            className="rounded-xl p-2 py-2 w-1/2 m-auto text-center bg-red-600 text-white uppercase font-semibold"
            onClick={signUpHandeler}
          >
            Sign Up
          </button>

          <button
            className="rounded-xl p-2 py-2 w-1/2 m-auto text-center bg-sky-600 text-white uppercase font-semibold"
            onClick={signInHandeler}
          >
            Log in
          </button>
        </div>

        <div className="w-full">
          <p className="text-sm text-gray-400 text-center my-4">
            or Login Using
          </p>
          <button className="shadow-2xl w-full text-center border border-black p-2 my-2 relative"
                  onClick={signUpWithGoogle}>
            <FcGoogle className="absolute text-xl" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
