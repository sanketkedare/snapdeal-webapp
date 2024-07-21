import React, {  useState } from "react";
import Rating from "./RatingComponent";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToShort } from "../../Redux/shortListSlice";
import { Link } from "react-router-dom";
import { getPath } from "../../Utils/getPath";


// Recent Products Cart
// Used to render components by reducing code via map function of JS
// Component Receives data from prop item as object

const RecentProductCart = ({ item}) => {
  const dispatch = useDispatch();                    // used to dispatch data to Redux
  const [showHeart, setShowHeart] = useState(false);
  const [selected, setSelected] = useState(false);
  const Authenticated = useSelector((state) => state.user.isAuthenticated);


  // selectHander is used to short product in myWhishList / fev List 
  const selectedHandeler = (e) => {
    e.preventDefault(); 
    if (selected) {
        setSelected(false);
    } else {
        setSelected(true);
        dispatch(addToShort(item));
    }
};




  return (
    <Link
    to={getPath(item)}
      className="relative w-[500px] border px-3 p-2 rounded-2xl shadow-xl"
      onMouseEnter={() => setShowHeart(true)}
      onMouseLeave={() => setShowHeart(false)}
    >

      {Authenticated && showHeart &&
        (selected ? (
          <FaHeart
            className="absolute right-3 top-3 z-10 font-thin text-red-500"
            onClick={(e)=>selectedHandeler(e)}
          />
        ) : (
          <FaRegHeart
            className="absolute right-3 top-3 font-thin text-gray-800"
            onClick={(e)=>selectedHandeler(e)}
          />
        ))}
      <img alt={item.title} src={item.image} className="h-32 m-auto" />
      <div className="h-[40px] my-3 overflow-hidden">
        <p className="text-[12px] text-center">{item.title}</p>
      </div>
      <Rating rating={item.rating.rate} />
      <h1 className="w-32 m-auto border rounded-xl text-center p-2 my-2 bg-sky-300">
        Rs. {item.price *100}
      </h1>
    </Link>
  );
};

export default RecentProductCart;
