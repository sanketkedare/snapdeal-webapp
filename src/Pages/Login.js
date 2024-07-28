import React from "react";
import { Navigate } from "react-router-dom";
import LoginNavbar from "../Components/Login/LoginNavbar";
import { useSelector } from "react-redux";
import LoginPage from "../Components/Login/LoginPage";

const Login = () => {
  const Authenticated = useSelector((state) => state.user.isAuthenticated);
  if ( Authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gradient-to-b from-white  via-sky-100 to-sky-200">
      <LoginNavbar />
      <LoginPage />
    </div>
  );
};

export default Login;
