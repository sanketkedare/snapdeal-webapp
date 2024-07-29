import React, { useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import FrontPage from "../Components/FrontPage/FrontPage";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { addToShort } from "../Redux/shortListSlice";
import useProduct from "../Hooks/useProduct";
import useFetchSelected from "../Hooks/useFetchSelected";
import useUpdateDB from "../Hooks/useUpdateDB";
import { setProducts } from "../Redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const shortData = useSelector((state) => state.short);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const { fetchSelected } = useFetchSelected();
  const { updateDB_Cart, updateDB_Short } = useUpdateDB();

  const products = useProduct();

  const updateStore = (cart, short) => {
    dispatch(addToCart(...cart));
    dispatch(addToShort(...short));
  };

  const getFromDB = async () => {
    try {
      const userEmail = user.email;
      const cartResponse = await fetchSelected(process.env.REACT_APP_CART, userEmail);
      const shortResponse = await fetchSelected(process.env.REACT_APP_SHORT, userEmail);

      if (cartResponse.ok && shortResponse.ok) {
        const jsonResponse_cart = await cartResponse.json();
        const jsonResponse_short = await shortResponse.json();
        updateStore(jsonResponse_cart, jsonResponse_short);
      } else {
        console.error("Failed to fetch cart/short from DB:");
      }
    } catch (error) {
      console.log("Error fetching from DB:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      updateDB_Cart(cartData, user.email);
    }
  }, [cartData, isAuthenticated, updateDB_Cart, user.email]);

  useEffect(() => {
    if (isAuthenticated) {
      updateDB_Short(shortData, user.email);
    }
  }, [shortData, isAuthenticated, updateDB_Short, user.email]);

  useEffect(() => {
    if (isAuthenticated) {
      getFromDB();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  return (
    <div className="bg-[#f0eeee] overflow-hidden">
      <NavBar />
      <FrontPage />
      <Footer />
    </div>
  );
};

export default Home;
