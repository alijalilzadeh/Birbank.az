import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-#fff border-b-2 border-b-[#ebebf1]">
        <div className="flex flex-row justify-between gap-4 w-[75%]">
          <div className="flex items-center gap-[24px] justify-center">
            <NavLink className={'text-[#9496AC] text-[16px] font-medium p-[12px]  border-b-2 border-b-[#EC3342]'}>Fiziki</NavLink>
            <NavLink className={'text-[#9496AC] text-[16px]  font-medium p-[12px] border-b-2  border-transparent hover:border-[#EC3342] '}>Biznes</NavLink>
            <NavLink className={'text-[#9496AC] text-[16px]  font-medium p-[12px] border-b-2  border-transparent hover:border-[#EC3342]'}>Invest</NavLink>
            <NavLink className={'text-[#9496AC] text-[16px]  font-medium p-[12px] border-b-2  border-transparent hover:border-[#EC3342] '}>Private</NavLink>
          </div>
          <div className="flex items-center align-center gap-6">
            <span className='text-[#9496AC] text-[12px]'>'Birbank' brendi 'Kapital Bank' ASC-nin əmtəə nişanıdır.</span>
            <div className="flex gap-1 items-center justify-center bg-[#FF0039] rounded-[6px] py-[3px] px-[5px] cursor-pointer ">
                <FaLocationDot className='text-[16px] text-white'/>
                <span className='text-[14px] text-white font-normal'>Xidmət şəbəkəsi</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className='text-[#9496AC] text-base cursor-pointer'>EN</span>
              <span className='text-[#9496AC] text-base cursor-pointer'>RU</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
