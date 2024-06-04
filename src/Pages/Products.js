import React from 'react'
import { Outlet } from 'react-router-dom'


// Products Component
// Used to Dynamically rendering the components by path '/products/'

const Products = () => {
  return (
    <div className='lg:w-[90%]'>
      <Outlet/>
    </div>
  )
}

export default Products

