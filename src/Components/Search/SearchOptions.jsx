import React from "react";

const SearchOptions = ({item, showProduct}) => {
  return (
    <div
      className="flex gap-2 my-2 p-2 items-center hover:bg-gray-500 rounded-xl cursor-pointer"
      onClick={() => showProduct(item)}
    >
      <img
        alt="loading"
        className="w-14 h-14 object-contain p-3 bg-white rounded-full"
        src={item.image}
      />
      <h1 className="w-[70%] p-2 hover:bg-gray-500">{item.title}</h1>
      <p className="text-center text-white font-bold">
        {item.category.toUpperCase()}
      </p>
    </div>
  );
};

export default SearchOptions;
