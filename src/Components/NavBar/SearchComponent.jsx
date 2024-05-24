import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchComponent = () => {
  return (
    <div className="w-[70%] flex">
        <input type='text' className='border p-2 pl-10 w-[70%] text-black text-sm' placeholder='Search products & brands'/>
        <button className='bg-black text-white flex gap-1 items-center px-5 justify-center text-sm'><IoSearch/>Search</button>
    </div>
  )
}

export default SearchComponent
