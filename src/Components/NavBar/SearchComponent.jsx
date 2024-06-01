import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchComponent = () => {
  return (
    <div className="px-3 w-[70%] flex rounded-3xl">
        <input type='text' className='border p-2 pl-10 w-[70%] text-black text-sm rounded-l-xl' placeholder='Search products & brands'/>
        <button className='bg-black text-white flex gap-1 items-center px-5 justify-center text-sm rounded-r-xl'><IoSearch/>Search</button>
    </div>
  )
}

export default SearchComponent
