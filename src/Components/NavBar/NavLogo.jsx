import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => (
  <Link to="/">
    <img
      title="Snapdeal"
      class="notIeLogoHeader aspectRatioEqual sdHomepage cur-pointer mr-6"
      height="28"
      width="132"
      alt="logo"
      src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
    />
  </Link>
);

export default NavLogo;
