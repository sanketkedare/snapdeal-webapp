import React from "react";
import { data } from "../../Utils/categoriesData";

const Categories = () => {
  return (
    <div className="w-[15%] bg-[#ffff] h-full p-3 shadow-lg relative">
      <h1 className="text-sm">Top Categories</h1>
      <div className="my-2 p-2">
        {data &&
          data.map((item) => (
            <div key={item.name} className="py-3 capitalize text-sm flex gap-2">
              <img src={item.img} className="w-5 rounded-full" />
              <h1>{item.name}</h1>
            </div>
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
