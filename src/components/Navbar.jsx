import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full bg-#fff border-b-2 border-b-[#ebebf1]">
        <div className="flex flex-row justify-between gap-4 w-[75%]">
          <div className="flex items-center gap-[24px] justify-center">
            <NavLink className={'text-[#9496AC] text-[16px] font-medium p-[12px]  border-b-2 border-b-[#EC3342]'}>Fiziki</NavLink>
            <NavLink to='https://birbank.business/' className={'text-[#9496AC] text-[16px]  font-medium p-[12px] border-b-2  border-transparent hover:border-[#EC3342] '} reloadDocument>Biznes</NavLink>
            <NavLink to='https://birbankinvest.az/' className={'text-[#9496AC] text-[16px]  font-medium p-[12px] border-b-2  border-transparent hover:border-[#EC3342]'} reloadDocument>Invest</NavLink>
            <NavLink to='https://private.birbank.az/' className={'text-[#9496AC] text-[16px]  font-medium p-[12px] border-b-2  border-transparent hover:border-[#EC3342] '} reloadDocument>Private</NavLink>
          </div>
          <div className="flex items-center align-center gap-6">
            <span className='text-[#9496AC] text-[12px]'>'Birbank' brendi 'Kapital Bank' ASC-nin əmtəə nişanıdır.</span>
            <Link to='https://birbank.az/xidmet-sebekesi'  className="flex gap-1 items-center justify-center bg-[#FF0039] rounded-[6px] py-[3px] px-[5px] cursor-pointer" reload document>
                <FaLocationDot className='text-[16px] text-white'/>
                <span className='text-[14px] text-white font-normal'>Xidmət şəbəkəsi</span>
            </Link>
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
