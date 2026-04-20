import React from 'react'
import BirbankLogo from '../assets/birbank-logo.svg'
import { NavLink, Link } from 'react-router-dom'
const SecondaryNavbar = () => {
  return (
    <>
      <div className="flex  w-full items-center justify-center py-[20px]">
        <div className="flex  w-[75%] items-center justify-between">
          <Link to="/">
            <img src={BirbankLogo} className='w-[120px]  object-cover' />
          </Link>
          <div className="flex gap-5 items-center justify-center">
            <NavLink to="/cards/all" className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'}>Kartlar</NavLink>
            <NavLink className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'}>Kreditlər</NavLink>
            <NavLink className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'}>Əmanətlər</NavLink>
            <NavLink className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'}>İstiqraz</NavLink>
            <NavLink className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'}>Pul köçürmələri</NavLink>
            <NavLink className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'}>Partnyorlar</NavLink>
            <NavLink className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'}>Kampaniyalar</NavLink>
            <NavLink to='/news' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'}>Xəbərlər</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondaryNavbar
