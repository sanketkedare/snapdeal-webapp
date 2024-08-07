import React, { useEffect, useState } from "react";
import RecentProductCart from "./RecentProductCart";
import Loader from "./Loader";
import { motion } from "framer-motion";

const RecentProducts = () => {
  const [data, setData] = useState(null);

  const dataFromMyDB = async () => {
    const response = await fetch(process.env.REACT_APP_PRODUCT_API);
    const JSON = await response.json();
    setData(JSON.slice(0, 5));
  };

  useEffect(() => {
    dataFromMyDB();
  }, []);

  return (
    <div className="">
      <h1 className="font-semibold my-5 uppercase text-sm">
        Recently Viewed PRODUCTS
      </h1>
      <motion.div
        className="relative w-full h-3/4 flex gap-3 mb-2 overflow-x-auto  py-4 p-2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {data !== null ? (
          data.map((item) => <RecentProductCart key={item.id} item={item} />)
        ) : (
          <Loader />
        )}
      </motion.div>
    </div>
  );
};

export default RecentProducts;
