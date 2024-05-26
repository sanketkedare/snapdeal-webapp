import React, { useState } from "react";
import AuthPolicies from "./AuthPolicies";
import AuthCard from "./AuthCard";

const Authentication = ({ setShowAuth }) => {

  return (
    <div className="flex justify-center items-center h-screen w-screen z-20 bg-opacity-50 bg-gray-800 fixed top-0 left-0">
      <div className="text-black relative">
        <AuthPolicies />
        <AuthCard  setShowAuth={setShowAuth}/>
      </div>
    </div>
  );
};

export default Authentication;
