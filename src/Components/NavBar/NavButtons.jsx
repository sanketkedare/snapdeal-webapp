// Navbar Buttons
// NavBar Buttons with dynamic dropdown


import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaGift, FaRegHeart } from "react-icons/fa"; // Corrected import
import Authentication from "../Authentication/Authentication";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../Utils/firebase";
import { trimName } from "../../Utils/trimName";
import { useDispatch } from "react-redux";
import { login, logout } from "../../Redux/userSlice";

const NavButtons = () => {
  const dispatch = useDispatch()
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [show, setShow] = useState(false);
  const auth = getAuth(app);

  const loggout = () => signOut(auth)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user))
        setUserLoggedIn(user);
      } else {
        dispatch(logout());
        setUserLoggedIn(null);
      }
    });
  }, []);

  return (
    <div className="lg:flex lg:gap-8 text-[#ffffff] h-full relative items-center">
      {showAuth && <Authentication setShowAuth={setShowAuth} />}

      <Link to={"/cart"}>
        <button className="text-[10px] m-auto lg:text-sm flex justify-center items-center gap-2 font-semibold lg:bg-inherit bg-white lg:text-white text-black  hover:bg-gray-100 hover:text-black py-1 lg:p-2 lg:px-4 px-2 rounded-xl">
          Cart <AiOutlineShoppingCart className="text-[10px] lg:text-lg hover:text-black" />
        </button>
      </Link>

      {/* Authentication */}
      <button
        className="flex justify-center items-center gap-2 font-semibold lg:px-2 pt-1 lg:py-2 hover:bg-black h-full relative rounded-t-xl capitalize lg:text-sm lg:w-[200px] w-[100px]"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <h1 className="lg:text-sm  overflow-hidden text-[10px]">{userLoggedIn ? trimName(userLoggedIn.email): "Sign in"}</h1>
        <CgProfile className="text-lg lg:text-[30px] bg-gray-500 p-1 rounded-full" />
        {show && (
          <div className="z-50 absolute w-[200px] bg-black top-10 rounded-b-xl shadow-md right-0 py-4 text-white">
            <div className="w-[80%] m-auto text-justify h-[50%] flex items-center">
              <div>
                <ul className="flex gap-4 text-sm items-center my-3 text-gray-300">
                  <RiAccountPinCircleLine />
                  Your Account
                </ul>
                <ul className="flex gap-4 text-sm items-center my-3 text-gray-300">
                  <FaGift />
                  Your Orders
                </ul>
                <Link to={"/mywhishlist"}>
                  <ul className="flex gap-4 text-sm items-center my-3 text-gray-300">
                    <FaRegHeart />
                    Shortlists
                  </ul>
                </Link>
              </div>
            </div>
            <hr className="w-[90%] m-auto" />
            {userLoggedIn ? (
              <button className="p-2 w-[80%] m-auto bg-red-700 text-white px-4 rounded-xl my-4" onClick={loggout}>
                Log Out
              </button>
            ) : (
              <div className="w-[90%] flex items-center justify-center m-auto">
                <div className="py-2 m-auto">
                  <p className="text-center text-sm text-gray-500 pt-2">
                    If You are new user
                  </p>
                  <h1
                    className="text-center text-[15px] font-semibold my-2"
                    onClick={() => setShowAuth(true)}
                  >
                    Register
                  </h1>
                  <button
                    className="p-2 w-full m-auto bg-red-700 px-4 rounded-xl"
                    onClick={() => setShowAuth(true)}
                  >
                    LOG IN
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </button>
    </div>
  );
};

export default NavButtons;
