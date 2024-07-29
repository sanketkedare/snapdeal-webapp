/*eslint-disable*/

import React, { useEffect, useState } from "react";
import RecentProductCart from "../FrontPage/RecentProductCart";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../Redux/productSlice";
import Loader from "../FrontPage/Loader";

/***
 * Trending Products Component
 * Fetch Data from API and show in the UI
 */

const TrendingProducts = () => {
  const data = useSelector((state)=>state.product);
  
  return (
    <div className="h-[60vh] lg:w-[90%] m-auto ">
      <h1 className="font-semibold my-10 p-50 text-sm pl-4">
        TRENDING PRODUCTS
      </h1>
      <div className="no-scrollbar h-[80%] p-4 py-5 bg-white rounded-lg shadow-sm flex flex-row-reverse gap-2 overflow-x-auto ">
        {data !== null ? (
          data.map((item) => <RecentProductCart key={item.id} item={item} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default TrendingProducts;
