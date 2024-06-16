import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../Components/Categories/ItemCard";
import { Outlet } from "react-router-dom";

const Categories = () => {
  const [data, setData] = useState(null);
  const path = useSelector((state) => state.path);
  const storeData = useSelector((state) => state.product)

  const categoryData = useMemo(() => {
    return storeData.filter((item) => item.category === path);
  }, [path, storeData]);

  useEffect(() => {
    setData(categoryData);
  }, [categoryData]);


  return (
    <div className="w-full">
      <Outlet/>
      <h1 className="my-2 font-bold p-3 text-sky-950">
        {path.toUpperCase()}
      </h1>
      <div className="flex flex-wrap w-full my-4 bg-gray-100 py-5">
        {data && data.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Categories;
