// NavButtons Component
// Contains Cart and Authentication buttons

import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Authentication from "../Authentication/Authentication";
import { Link } from "react-router-dom";
import { trimName } from "../../Utils/trimName";
import NavDropdown from "./NavDropdown";
import { useSelector } from "react-redux";

const NavButtons = () => {
  const currentUser = useSelector((state) => state.user);
  const isAuthenticated = currentUser.isAuthenticated;
  const cartItemCount = useSelector((state) => state.cart.length);
  const [showAuth, setShowAuth] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    setBlink(true);
    const timeout = setTimeout(() => setBlink(false), 1000);
    return () => clearTimeout(timeout);
  }, [cartItemCount]);

  return (
    <div className="lg:flex lg:gap-8 text-[#ffffff] h-full relative items-center">
      {showAuth && <Authentication setShowAuth={setShowAuth} /> }
      <Link to={isAuthenticated ? "/cart" : "/login"}>
        <button
          className={`text-[10px] m-auto lg:text-sm flex justify-center items-center gap-2 font-semibold
            ${blink ? "bg-green-400 lg:text-black" : "bg-inherit lg:text-white"}
            hover:bg-gray-100 hover:text-black py-1 lg:p-2 lg:px-4 px-2 rounded-xl shadow-xl`}
        >
          Cart
          <AiOutlineShoppingCart className="text-[10px] font-bold lg:text-lg hover:text-black" />
        </button>
      </Link>

      {/* Authentication */}
      <button
        className="flex justify-center items-center gap-2 font-semibold lg:px-2 pt-1 lg:py-2 hover:bg-black h-full relative rounded-t-xl capitalize lg:text-sm lg:w-[200px] w-[100px]"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <h1 className="lg:text-sm overflow-hidden text-[10px]">
          {isAuthenticated ? trimName(currentUser.user.email) : "Sign in"}
        </h1>
        <CgProfile className="text-lg lg:text-[30px] bg-gray-500 p-1 rounded-full"/>
        {showDropdown && (
          <NavDropdown setShowAuth={setShowAuth} isAuthenticated={isAuthenticated} />
        )}
      </button>
    </div>
  );
};

export default NavButtons;
