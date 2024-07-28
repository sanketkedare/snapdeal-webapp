// Navbar Component
// Responsive layout for all screen sizes
// Contains Logo, Search Component, and Navbar Buttons

import React, { useEffect } from "react";
import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import SearchComponent from "./SearchComponent";
import app from "../../Utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../../Redux/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });
    return () => unsubscribe();
  }, [auth, dispatch]);

  return (
    <div className="bg-[#e40046] text-[#ffffff] top-0 py-3 fixed z-50 w-full">
      <div className="flex justify-between items-center lg:w-[90%] m-auto">
        <NavLogo />
        <SearchComponent />
        <NavButtons />
      </div>
    </div>
  );
};

export default NavBar;
