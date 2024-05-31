import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const CartComponent = () => {
  const state = useSelector((state)=>state.cart)
  console.log(state)
  return (
    <div className="flex justify-center items-center h-screen">
      Cart Componment
    </div>
  )
}

export default CartComponent
