import React, { useEffect, useState } from "react";
import RecentProductCart from "../FrontPage/RecentProductCart";

/***
 * Trending Products Component
 * Fetch Data from API and show in the UI
 */

const TrendingProducts = () => {
  const [data, setData] = useState(null);

  const getRecentProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products?sort=desc`);
    const JSON = await response.json();
    setData(JSON);
  };

  // useEffect() Hook used to fetch data only once, using empty dependency array
  useEffect(() => {
    getRecentProducts();
  }, []);

  return (
    <div className="h-[60vh] lg:w-[90%] m-auto ">
      <h1 className="font-semibold my-10 p-50 text-sm pl-4">TRENDING PRODUCTS</h1>
      <div className="h-[80%] p-4 py-5 bg-white rounded-lg shadow-sm flex gap-2 overflow-x-auto">
        {
          data && data.map((item)=><RecentProductCart key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
};

export default TrendingProducts;
