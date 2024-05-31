import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../Components/Categories/ItemCard";

const Categories = () => {
  const [data, setData] = useState(null);
  const path = useSelector((state) => state.path);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${path}`)
      .then((res) => res.json())
      .then((Json) => setData(Json))
      .catch((err) => console.log(err));
  }, [path]);
  return (
    <div className="w-full h-full ">
      {console.log(data)}
      <h1 className="my-2 font-bold p-3 text-sky-950">
        {path.toUpperCase()}
      </h1>
      <div className="flex flex-wrap w-full my-4">
        {data && data.map((item) => <ItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Categories;
