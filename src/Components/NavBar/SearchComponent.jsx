/**
 * Search Component
 * Contains input and search button
 */
import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchComponent = () => {
  return (
    <div className="px-3 w-1/2 lg:w-[70%] flex rounded-3xl ">
        <input type='text' className='border p-2 lg:pl-10 lg:text-sm text-black rounded-l-xl text-[8px] decoration-slice' placeholder='Search products & brands'/>
        <button className='bg-black text-white flex gap-1 items-center px-2 lg:px-5 justify-center lg:text-sm text-[8px] rounded-r-xl'><IoSearch/>Search</button>
    </div>
  )
}

export default SearchComponent
