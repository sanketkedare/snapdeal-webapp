/**
 * Navbar Logo Component
 * Exports dynamic image in navbar section
 */

import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => (
  <Link to="/" className="lg:mr-6 lg:w-[132px] lg:h-[28px] px-2">
    <img
      title="Snapdeal"
      alt="logo"
      src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
    />
  </Link>
);

export default NavLogo;
