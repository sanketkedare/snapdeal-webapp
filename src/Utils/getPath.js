export const getPath = (item) => {
  let path = "/products/";
  if (item.category === "women's clothing") {
    path += `womenwear/${item.id}`;
  } else if (item.category === "men's clothing") {
    path += `menwear/${item.id}`;
  } else {
    path += `${item.category}/${item.id}`;
  }
  return path;
};
