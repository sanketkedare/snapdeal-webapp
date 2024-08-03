import React from "react";
import { data } from "../../Utils/categoriesData";
import SingleCategory, { Advertisement } from "./SingleCategory";
import { motion } from 'framer-motion';

/**
 *
 * Categories Component
 * Contains multiple Categories
 * QR Code Component to download Mobile application
 */

const Categories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  return (
    <motion.div 
      className="lg:w-[15%] bg-[#ffff] p-3 shadow-xl relative lg:h-[110vh] rounded-xl pt-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-sm font-bold">Top Categories</h1>
      <motion.div 
        className="my-2 p-2 lg:grid flex lg:items-center gap-2 justify-between overflow-x-auto"
        variants={containerVariants}
      >
        {data &&
          data.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              whileHover={hoverEffect}
            >
              <SingleCategory item={item} />
            </motion.div>
          ))}
      </motion.div>
      <Advertisement />
    </motion.div>
  );
};

export default Categories;
