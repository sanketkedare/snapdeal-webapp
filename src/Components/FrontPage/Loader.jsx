import React from "react";

const LoaderItem = () => (
  <div className="relative w-[200px] h-[280px] border px-3 p-2 rounded-2xl shadow-xl flex items-center">
    <img
      className="bg-contain m-auto"
      src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif"
      alt="Loading..."
    />
  </div>
);

const Loader = () => {
  const loaderItems = Array(6).fill(null);

  return (
    <div className="flex noscrollbar gap-10">
      {loaderItems.map((_, index) => (
        <LoaderItem key={index} />
      ))}
    </div>
  );
};

export default Loader;
