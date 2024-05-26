import React from 'react'
import Rating from './RatingComponent'

const RecentProductCart = ({item}) => {
  return (
    <div className='w-[500px] border px-3 p-2'>
      <img src={item.image} className='h-32 m-auto'/>
      <div className='h-[40px] my-3 overflow-hidden'>
      <p className='text-[12px] text-center'>{item.title}</p>
      </div>
      <Rating rating={item.rating.rate}/>
      <h1 className='w-32 m-auto border rounded-xl text-center p-2 my-2'>Rs. {item.price}</h1>
    </div>
  )
}

export default RecentProductCart
