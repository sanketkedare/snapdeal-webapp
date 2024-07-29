import { useEffect, useState } from "react";

const useProduct = async () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(process.env.REACT_APP_PRODUCT_API);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return products;
};

export default useProduct;
