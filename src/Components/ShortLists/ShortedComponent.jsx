import React from 'react'
import { useSelector } from 'react-redux'

const ShortedComponent = () => 
{
  const shortListedProducts = useSelector((state)=>state.short)
  console.log("Short Listed ",shortListedProducts)

  return (
    <div className='mt-20 w-[90%] m-auto'>
      Shorted Component
    </div>
  )
}

export default ShortedComponent
