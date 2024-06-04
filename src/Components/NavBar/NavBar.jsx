// Navbar Component
// Responsive layout according to all sreen sizes
// Contains Logo, Search Component and Navbar Buttons

import React from "react";
import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import SearchComponent from "./SearchComponent";

const NavBar = () => {
  return (
    <div className="bg-[#e40046] text-[#ffffff] top-0 py-3 fixed z-50 w-full ">
      {/* Main NavBar */}
      <div className="flex justify-between items-center lg:w-[90%] m-auto">
        {/* WebSite Logo */}
        <NavLogo />
          {/* Search Component */}
          <SearchComponent />

          {/* Cart and Auth Buttons */}
          <NavButtons />
      </div>
    </div>
  );
};

export default NavBar;
