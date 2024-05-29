import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaGift, FaRegHeart } from "react-icons/fa"; // Corrected import
import Authentication from "../Authentication/Authentication";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../Utils/firebase";

const NavButtons = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [show, setShow] = useState(false);
  const auth = getAuth(app);

  const loggout = () => signOut(auth)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedIn(user);
        console.log("You are now logged in");
      } else {
        setUserLoggedIn(null);
        console.log("You are logged out");
      }
    });
  }, []);

  return (
    <div className="flex gap-8 text-[#ffffff] h-full relative items-center">
      {showAuth && <Authentication setShowAuth={setShowAuth} />}

      <Link to={"/cart"}>
        <button className="flex justify-center items-center gap-2 font-semibold hover:bg-gray-100 hover:text-black p-2 px-4 rounded-xl">
          Cart <AiOutlineShoppingCart className="text-lg hover:text-black" />
        </button>
      </Link>

      {/* Authentication */}
      <button
        className="flex justify-center items-center gap-2 font-semibold px-4 py-2 hover:bg-black h-full relative rounded-t-xl"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {userLoggedIn ? userLoggedIn.email : "Sign in"}
        <CgProfile className="text-[30px] bg-gray-500 p-1 rounded-full" />
        {show && (
          <div className="z-50 absolute w-[200px] h-[300px] bg-black top-10 rounded-b-xl shadow-md right-0 text-white">
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
              <button className="p-2 w-full m-auto bg-red-700 text-white px-4 rounded-xl my-4" onClick={loggout}>
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
