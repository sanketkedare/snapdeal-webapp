import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";

const LoginPage = () => {
  const Authenticated = useSelector((state) => state.user.isAuthenticated);

  if (Authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <motion.div
      className="relative mt-12 px-20 py-10 backdrop-blur-lg h-screen"
      initial={{ opacity: 0, y: -100 }}  // Start position and opacity
      animate={{ opacity: 1, y: 0 }}     // End position and opacity
      exit={{ opacity: 0, y: 100 }}      // Exit position and opacity
      transition={{ duration: 0.2 }}     // Animation duration
    >
      <LoginForm />

      <motion.div
        className="w-1/3 px-5 h-[80vh] bg-transparent bg-opacity-5 rounded-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          y: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            restDelta: 0.001,
          },
          duration: 1.5
        }}
      >
        <img
          alt="login"
          src="/login.png"
          className="rounded-full shadow-lg mt-16 p-3 w-[350px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
