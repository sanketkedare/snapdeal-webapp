import React from "react";
import { data } from "../../Utils/categoriesData";
import { Link, useLocation } from "react-router-dom";
import { setPath } from "../../Redux/categorySlice";
import { useDispatch } from "react-redux";

const Categories = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch() 
  const trimPath = (path) => path.slice(path.lastIndexOf("/") + 1);

 
  return (
    <div className="w-[15%] bg-[#ffff] p-3 shadow-xl relative h-[110vh] rounded-xl pt-5">
      <h1 className="text-sm font-bold">Top Categories</h1>
      <div className="my-2 p-2">
        {data &&
          data.map((item) => (
            <Link
              to={`/products/${item.path}`}
              key={item.name}
              className={`py-3 capitalize text-sm flex gap-2 items-center my-2 rounded-xl hover:bg-gray-200 p-1 ${
                item.path === trimPath(pathname) && "bg-green-300"
              } `}
              onClick={()=>dispatch(setPath(item.name.toLowerCase()))}
            >
              <img src={item.img} className="w-5 rounded-full" />
              <h1>{item.name}</h1>
            </Link>
          ))}
      </div>
      <div className="absolute bottom-1 left-0 w-full h-[100px] flex justify-center items-center px-2 m-auto">
        <img
          alt="QR"
          src="https://i2.sdlcdn.com/img/snapdeal/barCode_Home1x.png"
        />
        <div className="flex-col gap-1 p-2">
          <p className="capitalize text-[12px] font-semibold">
            Enjoy Convinient Order tracking
          </p>
          <p className="capitalize text-[10px] ">Scan to Download app</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
