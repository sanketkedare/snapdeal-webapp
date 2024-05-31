import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='w-[90%]'>
      <Outlet/>
    </div>
  )
}

export default Products

