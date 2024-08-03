/*eslint-disable*/

import React, { useEffect} from "react";
import RecentProductCart from "../FrontPage/RecentProductCart";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../Redux/productSlice";
import Loader from "../FrontPage/Loader";
import {motion} from 'framer-motion'

/***
 * Trending Products Component
 * Fetch Data from API and show in the UI
 */

const TrendingProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  
  const updateStore = async () => {
    const response = await fetch(process.env.REACT_APP_PRODUCT_API);
    const data = await response.json();
    dispatch(setProducts(data));
  };
  useEffect(() => {
    updateStore();
  }, []);

  return (
    <div className="h-[60vh] lg:w-[90%] m-auto ">
      <h1 className="font-semibold my-10 p-50 text-sm pl-4">
        TRENDING PRODUCTS
      </h1>
      <motion.div className="no-scrollbar h-[80%] p-4 py-5 bg-white rounded-lg shadow-sm flex flex-row-reverse gap-2 overflow-x-auto "
       initial={{ opacity: 0, x: -100 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5, ease: "easeOut" }}
       >
        {data ? (
          data.map((item) => <RecentProductCart key={item.id} item={item} />)
        ) : (
          <Loader />
        )}
      </motion.div>
    </div>
  );
};

export default TrendingProducts;
