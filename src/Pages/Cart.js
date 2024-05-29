import React from 'react'
import CartComponent from '../Components/Cart/CartComponent'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'

const Cart = () => {
  return (
    <div>
        <NavBar/>
      <CartComponent/>
      <Footer/>
    </div>
  )
}

export default Cart
