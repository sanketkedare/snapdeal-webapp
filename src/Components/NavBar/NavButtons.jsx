// Navbar Buttons
// NavBar Buttons with dynamic dropdown

import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Authentication from "../Authentication/Authentication";
import { Link } from "react-router-dom";
import { trimName } from "../../Utils/trimName";
import NavDropdown from "./NavDropdown";
import { useSelector } from "react-redux";

const NavButtons = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [show, setShow] = useState(false);
  const Authenticated = useSelector((state) => state.user.isAuthenticated);
  const data = useSelector((state) => state.cart);

  const [blink, setBlink] = useState(false);

  const blinkCart = () => {
    setTimeout(() => {
      setBlink(true);
    }, 300);
    setBlink(false);
  };

  useEffect(() => {
    blinkCart();
  }, [data]);

  return (
    <div className="lg:flex lg:gap-8 text-[#ffffff] h-full relative items-center">
      {showAuth && <Authentication setShowAuth={setShowAuth} />}

      <Link to={Authenticated ? "/cart" : "/login"}>
        <button className="text-[10px] m-auto lg:text-sm flex justify-center items-center gap-2 font-semibold lg:bg-inherit bg-white lg:text-white text-black hover:bg-gray-100 hover:text-black py-1 lg:p-2 lg:px-4 px-2 rounded-xl">
          Cart <AiOutlineShoppingCart className={`text-[10px] font-bold lg:text-lg hover:text-black ${!blink ? 'text-green-600': 'text-inherit'}`} />
        </button>
      </Link>

      {/* Authentication */}
      <button
        className="flex justify-center items-center gap-2 font-semibold lg:px-2 pt-1 lg:py-2 hover:bg-black h-full relative rounded-t-xl capitalize lg:text-sm lg:w-[200px] w-[100px]"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <h1 className="lg:text-sm overflow-hidden text-[10px]">
          {userLoggedIn ? trimName(userLoggedIn.email) : "Sign in"}
        </h1>
        <CgProfile className="text-lg lg:text-[30px] bg-gray-500 p-1 rounded-full" />
        {show && (
          <NavDropdown setShowAuth={setShowAuth} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
        )}
      </button>
    </div>
  );
};

export default NavButtons;
