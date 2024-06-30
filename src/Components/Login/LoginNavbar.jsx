import React from "react";
import NavLogo from "../NavBar/NavLogo";

const LoginNavbar = () => {
  return (
    <div className="bg-[#e40046] text-[#ffffff] top-0 py-3 fixed z-50 w-full ">
      <div className="flex justify-between items-center lg:w-[90%] m-auto">
        <NavLogo />
        <h1 className="font-bold my-3">You are not logged in..!</h1>
      </div>
    </div>
  );
};

export default LoginNavbar;
