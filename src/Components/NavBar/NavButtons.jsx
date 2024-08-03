// NavButtons Component
// Contains Cart and Authentication buttons

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import Authentication from "../Authentication/Authentication";
import { Link } from "react-router-dom";
import { trimName } from "../../Utils/trimName";
import NavDropdown from "./NavDropdown";
import { useSelector } from "react-redux";
import NavCartButton from "./NavCartButton";

const NavButtons = () => {
  const currentUser = useSelector((state) => state.user);
  const isAuthenticated = currentUser.isAuthenticated;
  const [showAuth, setShowAuth] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <motion.div
      className="lg:flex lg:gap-8 text-[#ffffff] h-full relative items-center"
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {showAuth && <Authentication setShowAuth={setShowAuth} />}
      <Link to={isAuthenticated ? "/cart" : "/login"}>
        <NavCartButton />
      </Link>

      {/* Authentication */}
      <button
        className="flex justify-center items-center gap-2 font-semibold lg:px-2 pt-1 lg:py-2 hover:bg-black h-full relative rounded-t-xl capitalize lg:text-sm lg:w-[200px] w-[100px]"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <motion.h1
          className="lg:text-sm overflow-hidden text-[8px]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {isAuthenticated ? trimName(currentUser.user.email) : "Sign in"}
        </motion.h1>
        <CgProfile className="text-lg lg:text-[30px] bg-gray-500 p-1 rounded-full" />
        {showDropdown && (
          <NavDropdown
            setShowAuth={setShowAuth}
            isAuthenticated={isAuthenticated}
          />
        )}
      </button>
    </motion.div>
  );
};

export default NavButtons;
