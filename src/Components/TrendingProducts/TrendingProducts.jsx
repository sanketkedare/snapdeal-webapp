import React, { useEffect, useState } from "react";
import RecentProductCart from "../FrontPage/RecentProductCart";

const TrendingProducts = () => {
  const [data, setData] = useState(null);

  const getRecentProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products?sort=desc`);
    const JSON = await response.json();
    setData(JSON);
  };

  useEffect(() => {
    getRecentProducts();
  }, []);

  return (
    <div className="h-[60vh] w-[90%] m-auto ">
      <h1 className="font-semibold my-10 p-50">TRENDING PRODUCTS</h1>
      <div className="h-[80%] bg-white rounded-lg shadow-sm flex overflow-hidden">
        {
          data && data.map((item)=><RecentProductCart key={item.id} item={item}/>)
        }
      </div>
    </div>
  );
};

export default TrendingProducts;
