import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLogo = () => {
  return (
    <Link to="/" className="lg:mr-6 lg:w-[132px] lg:h-[28px] px-2">
      <motion.img
        title="Snapdeal"
        alt="logo"
        src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </Link>
  );
};

export default NavLogo;
