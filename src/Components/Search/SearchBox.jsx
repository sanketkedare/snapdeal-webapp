/*eslint-disable*/

import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPath } from "../../Redux/categorySlice";
import { getPath } from "../../Utils/getPath";
import SearchOptions from "./SearchOptions";

const SearchBox = ({ setBoxOpen, inputValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.product);

  const [result, setResult] = useState([]);

  // Close the search box
  const closeBox = () => setBoxOpen(false);

  // Show selected product details
  const showProduct = (item) => {
    dispatch(setPath(item.category));
    closeBox();
    navigate(getPath(item));
  };

  // Filter products based on input value
  const searchHandler = () => {
    if (inputValue.trim() === "") {
      setResult([]);
      return;
    }
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase()) || item.category.toLowerCase().includes(inputValue.toLowerCase())
    );
    setResult(filteredData);
  };

  useEffect(() => {
    searchHandler();
  }, [inputValue, data]); // Added `data` as a dependency

  return (
    <div
      className="absolute z-10 bg-gray-900 bg-opacity-95 w-full mt-10 h-[400px] rounded-3xl p-5 overflow-y-auto"
      onMouseLeave={closeBox}
    >
      <ImCross
        className="absolute right-5 bg-white text-black p-1 rounded-full hover:bg-gray-900 hover:text-white"
        onClick={closeBox}
      />
      {inputValue === ""
        ? data.map((item) => (
            <SearchOptions
              item={item}
              key={item.id}
              showProduct={showProduct}
            />
          ))
        : result.map((item) => (
            <SearchOptions
              item={item}
              key={item.id}
              inputValue={inputValue}
              showProduct={showProduct}
            />
          ))}
    </div>
  );
};

export default SearchBox;
