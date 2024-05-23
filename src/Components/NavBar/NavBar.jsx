import React from "react";
import UpperNavBar from "./UpperNavBar";
import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import SearchComponent from "./SearchComponent";

const NavBar = () => {
  return (
    <div className="bg-[#9f1b1bf4] text-[#ffffff] w-screen">
      <UpperNavBar />

      {/* Main NavBar */}
      <div className="bg-[#e40046] py-2">
        <div className="flex justify-between items-center  p-1 w-[90%] m-auto">
          {/* WebSite Logo */}
          <NavLogo />

          {/* Search Component */}
          <SearchComponent />

          {/* Cart and Auth Buttons */}
          <NavButtons />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
