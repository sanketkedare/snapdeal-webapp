import React from "react";
import CartComponent from "../Components/Cart/CartComponent";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import TrendingProducts from "../Components/TrendingProducts/TrendingProducts";

const Cart = () => {
  return (
    <div>
      <NavBar />
      <CartComponent />
      <TrendingProducts/>

      <Footer />
    </div>
  );
};

export default Cart;
