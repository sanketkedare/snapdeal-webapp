/*eslint-disable*/

import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPath } from "../../Redux/categorySlice";
import { getPath } from "../../Utils/getPath";

const SearchBox = ({ setBoxOpen, inputValue }) => 
{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeBox = () => setBoxOpen(false);
  const data = useSelector((state) => state.product);
  const [result, setResult] = useState(null);


  const showProduct = (item) => {
    dispatch(setPath(item.category));
    closeBox()
    navigate(getPath(item));
  }

  return (
    <div className="absolute z-10 bg-gray-900 bg-opacity-95 w-full mt-10 h-[400px] rounded-3xl p-5 overflow-y-auto" onMouseLeave={closeBox}>
      <ImCross
        className="absolute right-5 bg-white text-black p-1 rounded-full hover:bg-gray-900 hover:text-white"
        onClick={closeBox}
      />
      {inputValue === ""
        ? data &&
          data.map((item) => (
            <div key={item.id} className="flex gap-2 my-2 p-2 items-center hover:bg-gray-500 rounded-xl cursor-pointer" onClick={() => showProduct(item)}>
              <img alt='loading' className="w-14 h-14 object-contain p-3 bg-white rounded-full" src={item.image} />
              <h1 className="w-[70%] p-2 hover:bg-gray-500">{item.title}</h1>
              <p className="text-center text-white font-bold">{item.category.toUpperCase()}</p>
            </div>
          ))
        : result}
    </div>
  );
};

export default SearchBox;
