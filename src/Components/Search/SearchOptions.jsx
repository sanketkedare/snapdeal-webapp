import React from "react";

const highlightText = (text, highlight) => {
  if (!highlight.trim()) {
    return text;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={index} className="bg-yellow-300 text-black rounded-sm">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const SearchOptions = ({ item, showProduct, inputValue }) => {
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
      <h1 className="w-[70%] p-2 hover:bg-gray-500">
        {inputValue ? highlightText(item.title, inputValue) :item.title.toUpperCase()}
      </h1>
      <p className="text-center text-white font-bold">
        {inputValue ? highlightText(item.category.toUpperCase(), inputValue) : item.category.toUpperCase()}
      </p>
    </div>
  );
};

export default SearchOptions;
