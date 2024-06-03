import React from "react";
// import UpperNavBar from "./UpperNavBar";
import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";
import SearchComponent from "./SearchComponent";

const NavBar = () => {
  return (
    <div className="bg-[#e40046] text-[#ffffff] top-0 py-3 fixed z-50 w-full ">
      {/* <UpperNavBar /> */}

      {/* Main NavBar */}
      <div className="">
        <div className="flex justify-between items-center lg:w-[90%] m-auto">
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
