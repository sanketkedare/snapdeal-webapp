import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../Components/Categories/ItemCard";
import { Outlet, useLocation } from "react-router-dom";

const Categories = () => {
  const {pathname} = useLocation();
  const [data, setData] = useState(null);
  const path = pathname.slice(pathname.lastIndexOf("/")+1);

  const storeData = useSelector((state) => state.product);
  const categoryData = () => storeData.filter((item) => item.category[0] === path[0]);

  useEffect(() => {
    setData(categoryData());
  }, [path, storeData]);

  return (
    <div className="w-full">
      <Outlet />
      <h1 className="my-2 font-bold p-3 text-sky-950">{path.toUpperCase()}</h1>
      <div className="flex flex-wrap w-full my-4 bg-gray-100 py-5">
        {data
          ? data.map((item) => <ItemCard key={item.id} item={item} />)
          : "Loading"}
      </div>
    </div>
  );
};

export default Categories;
