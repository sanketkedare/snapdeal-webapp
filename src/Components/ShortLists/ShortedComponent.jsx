import React from 'react'
import { useSelector } from 'react-redux'

const ShortedComponent = () => 
{
  const shortListedProducts = useSelector((state)=>state.short)
  console.log("Short Listed ",shortListedProducts)

  return (
    <div>
      Shorted Component
    </div>
  )
}

export default ShortedComponent
