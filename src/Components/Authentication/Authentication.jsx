import React from "react";
import AuthPolicies from "./AuthPolicies";
import AuthCard from "./AuthCard";
import { motion, useAnimation } from 'framer-motion';

const Authentication = ({ setShowAuth }) => {
  // Animation control for children
  const controls = useAnimation();

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } } // delay to appear after main
  };

  // Trigger animation when component mounts
  React.useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div 
      className="flex justify-center items-center h-screen w-screen z-20 bg-opacity-50 bg-gray-800 fixed top-0 left-0"
      variants={containerVariants}
      animate={controls}
    >
      <motion.div 
        className="text-black relative"
        variants={childVariants}
        initial="hidden"
        animate="visible"
      >
        <AuthPolicies />
        <AuthCard setShowAuth={setShowAuth} />
      </motion.div>
    </motion.div>
  );
};

export default Authentication;
