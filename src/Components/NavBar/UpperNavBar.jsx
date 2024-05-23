import React from 'react'
import { CiMobile3 } from "react-icons/ci";


const UpperNavBar = () => {
  return (
    <>
    {/* Upper NavBar */}
    <div className="flex justify-between items-center  p-1 w-[90%] m-auto">
      <p className="text-[12px] font-semibold">
        Brand Waali Quality, Bazaar Waali Deal!
      </p>

      {/* Direct Links */}
      <div className="flex items-center">
        <button className="text-center text-[12px] font-semibold] mx-2">
          Impact@Snapdeal
        </button>
        <button className="text-center text-[12px] font-semibold] mx-2">
          Help Center
        </button>
        <button className="text-center text-[12px] font-semibold] mx-2">
          Sell On Snapdeal
        </button>
        <button className="text-center text-[12px] font-semibold] mx-2 flex items-center">
          <CiMobile3 /> Download App
        </button>
        <button className="text-center text-[12px] font-semibold] mx-2">
          Donate For Elderly
        </button>
        <button className="text-center text-[12px] font-semibold] mx-2">
          Donate For Elderly
        </button>
      </div>
    </div>
  </>
  )
}

export default UpperNavBar
