import React from "react";
import { useSelector } from "react-redux";

const ShortListSummary = ({nextHandeler}) => {
  const data = useSelector((state) => state.short);
  return (
    <div>
      {data.length > 0 ? (
        <div>
            ShortListed Items
          {data.map((item) => (
            <div className="my-1 text-sm px-2 flex items-center border rounded-xl gap-3 h-10 overflow-hidden shadow-xl">
                <img alt={item.title} src={item.image} className="w-1/12"/>
                <h1 className="w-11/12 text-nowrap">{item.title}</h1>
            </div>
          ))}
        </div>
      ) : (
        "No ShortList"
      )}
      <button
          className="w-full bg-gray-400 text-gray-100 shadow-sm py-1 text-[13px] my-5"
          onClick={nextHandeler}
        >
          NEXT
      </button>
    </div>
  );
};

export default ShortListSummary;
