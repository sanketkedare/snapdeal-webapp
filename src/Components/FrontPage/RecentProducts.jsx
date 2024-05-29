import React, { useEffect, useState } from "react";
import RecentProductCart from "./RecentProductCart";

const RecentProducts = () => {

  const [data, setData] = useState(null);


  const getRecentProducts = async () => 
  {
    const response = await fetch(`https://fakestoreapi.com/products?limit=5`);
    const JSON = await response.json();
    setData(JSON);
  };

  useEffect(() => {
    getRecentProducts();
  }, []);


  return (
    <div className="">
      <h1 className="font-semibold my-5 uppercase">Recently Viewed PRODUCTS</h1>
      <div className="relative w-full h-3/4 flex gap-3 mb-2">
        {data &&
          data.map((item) => <RecentProductCart key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default RecentProducts;
