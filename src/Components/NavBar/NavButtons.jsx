import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

const NavButtons = () => {
  return (
    <div className="flex gap-8 text-[#ffffff]">

    {/* Cart */}
    <button className="flex justify-center items-center gap-2 font-semibold">
      Cart <AiOutlineShoppingCart className="text-lg" />
    </button>

    {/* Authentication */}
    <button className="flex justify-center items-center gap-2 font-semibold">
      Sign in<CgProfile className="text-[30px] bg-gray-500 p-1 rounded-full" />
    </button>
  </div>
  )
}

export default NavButtons
