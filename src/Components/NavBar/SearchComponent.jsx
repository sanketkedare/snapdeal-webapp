/**
 * Search Component
 * Contains input and search button
 */
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import SearchBox from '../Search/SearchBox';

const SearchComponent = () => 
{
  const [boxOpen, setBoxOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="px-3 w-1/2 lg:w-[70%] flex rounded-3xl relative" >
        <input type='text' className='border p-2 lg:pl-10 lg:text-sm text-black rounded-l-xl text-[8px] decoration-slice' placeholder='Search products & brands'
        onMouseEnter={()=>setBoxOpen(true)} onChange={(e)=>setInputValue(e.target.value)}/>
        <button className='bg-black text-white flex gap-1 items-center px-2 lg:px-5 justify-center lg:text-sm text-[8px] rounded-r-xl'><IoSearch/>Search</button>
        {boxOpen && <SearchBox setBoxOpen={setBoxOpen} inputValue={inputValue}/>}
    </div>
  )
}

export default SearchComponent
