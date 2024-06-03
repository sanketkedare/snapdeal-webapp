import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => (
  <Link to="/">
    <img
      title="Snapdeal"
      className="mr-6 w-[132px] h-[28px] px-1"
      alt="logo"
      src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
    />
  </Link>
);

export default NavLogo;
