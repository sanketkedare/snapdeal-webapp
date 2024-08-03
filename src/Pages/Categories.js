/*eslint-disable*/

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../Components/Categories/ItemCard";
import { Outlet, useLocation } from "react-router-dom";
import SingleProductLoader from "../Components/Product/SingleProductLoader";

// Categories Page

const Categories = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState(null);
  const path = pathname.slice(pathname.lastIndexOf("/") + 1);

  const storeData = useSelector((state) => state.product);
  const categoryData = () =>
    storeData.filter((item) => item.category[0] === path[0]);

  useEffect(() => {
    setData(categoryData());
  }, [path, storeData]);

  return (
    <div className="w-full">
      <Outlet />
      <div
        className="flex flex-wrap w-full my-4 py-5"

      >
        {data ? (
          data.map((item) => <ItemCard item={item} key={item.id} />)
        ) : (
          <SingleProductLoader />
        )}
      </div>
    </div>
  );
};

export default Categories;
