import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaGift } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Authentication from "../Authentication/Authentication";

const NavButtons = () => 
{
  const [showAuth, setShowAuth] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="flex gap-8 text-[#ffffff] h-full">
      {showAuth && <Authentication setShowAuth={setShowAuth}/>}
      {/* Cart */}
      <button className="flex justify-center items-center gap-2 font-semibold">
        Cart <AiOutlineShoppingCart className="text-lg" />
      </button>

      {/* Authentication */}
      <button
        className="flex justify-center items-center gap-2 font-semibold px-4 py-2 hover:bg-black h-full relative rounded-t-xl"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Sign in
        <CgProfile className="text-[30px] bg-gray-500 p-1 rounded-full " />
        {show && (
          <div className="absolute w-[200px] h-[300px] bg-black top-10 rounded-b-xl shadow-md right-0 z-50 text-white">
            <div className="w-[80%] m-auto text-justify h-[50%] flex items-center">
              <div className="">
                <ul  className="flex gap-4 text-sm items-center my-3 text-gray-300"><RiAccountPinCircleLine />Your Account</ul>
                <ul className="flex gap-4 text-sm items-center my-3 text-gray-300"><FaGift/>Your Orders</ul>
                <ul className="flex gap-4 text-sm items-center my-3 text-gray-300"><FaRegHeart/>Shortlists</ul>
              </div>
            </div>
            <hr className="w-[90%] m-auto"/>
            <div className="w-[90%] flex items-center justify-center m-auto">
              <div className="py-2 m-auto">
              <p className="text-center text-sm text-gray-500 pt-2">If You are new user</p>
              <h1 className="text-center text-[15px] font-semibold my-2" onClick={()=>setShowAuth(true)}>Register</h1>
              <button className="p-2 w-full m-auto bg-red-700 px-4 rounded-xl" onClick={()=>setShowAuth(true)}>LOG IN</button>
            </div>
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default NavButtons;
