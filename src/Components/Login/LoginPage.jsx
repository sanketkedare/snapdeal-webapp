import React from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const Authenticated = useSelector((state) => state.user.isAuthenticated);

  if (Authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="relative mt-12 px-20 py-10 backdrop-blur-lg h-screen">
      <LoginForm />

      <div className=" w-1/3 px-5 h-[80vh] bg-gray-200 bg-opacity-5 rounded-3xl -rotate-12">
        <img
          alt="login"
          src="/login.png"
          className="rounded-l-full shadow-lg mt-16 p-3 w-[350px]"
        />
      </div>
    </div>
  );
};

export default LoginPage;
