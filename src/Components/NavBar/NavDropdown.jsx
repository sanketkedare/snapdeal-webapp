// NavDropdown Component
// Dropdown menu for user actions

import React, { useEffect } from "react";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaGift, FaRegHeart } from "react-icons/fa";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../Utils/firebase";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/userSlice";
import { useDispatch} from "react-redux";

const NavDropdown = ({ setShowAuth, isAuthenticated }) => {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setShowAuth(false);
      }
    });
    return () => unsubscribe();
  }, [auth, setShowAuth]);

  return (
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
          <Link to={isAuthenticated ? "/mywhishlist" : "/login"}>
            <ul className="flex gap-4 text-sm items-center my-3 text-gray-300">
              <FaRegHeart />
              Shortlists
            </ul>
          </Link>
        </div>
      </div>
      <hr className="w-[90%] m-auto" />
      {isAuthenticated ? (
        <button
          className="p-2 w-[80%] m-auto bg-red-700 text-white px-4 rounded-xl my-4"
          onClick={handleLogout}
        >
          Log Out
        </button>
      ) : (
        <div className="w-[90%] flex items-center justify-center m-auto">
          <div className="py-2 m-auto">
            <p className="text-center text-sm text-gray-500 pt-2">
              If you are a new user
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
  );
};

export default NavDropdown;
