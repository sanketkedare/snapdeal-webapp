import React from "react";
import { data } from "../../Utils/categoriesData";
import SingleCategory, { Advertisement } from "./SingleCategory";

/**
 *
 * Categories Component
 * Contains multiple Categories
 * QR Code Component to download Mobile application
 */

const Categories = () => {
  return (
    <div className="lg:w-[15%] bg-[#ffff] p-3 shadow-xl relative lg:h-[110vh] rounded-xl pt-5">
      <h1 className="text-sm font-bold">Top Categories</h1>
      <div className="my-2 p-2 lg:grid flex lg:items-center gap-2 justify-between overflow-x-auto">
        {data &&
          data.map((item) => <SingleCategory item={item} key={item.id} />)}
      </div>
      <Advertisement />
    </div>
  );
};

export default Categories;
