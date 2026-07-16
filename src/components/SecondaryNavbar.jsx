import React from 'react'
import BirbankLogo from '../assets/birbank-logo.svg'
import { NavLink, Link } from 'react-router-dom'
const SecondaryNavbar = () => {
  return (
    <>
      <div className="flex  w-full items-center justify-center py-5">
        <div className="flex  w-[75%] items-center justify-between">
          <Link to="/" reloadDocument>
            <img src={BirbankLogo} className='w-30   object-cover' />
          </Link>
          <div className="flex gap-5 items-center justify-center">
            <NavLink to="/cards/all" className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Kartlar</NavLink>
            <NavLink to='/kreditler' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Kreditlər</NavLink>
            <NavLink className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Əmanətlər</NavLink>
            <NavLink to='/istiqraz' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>İstiqraz</NavLink>
            <NavLink to='/pul-kocurmeleri' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Pul köçürmələri</NavLink>
            <NavLink className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Partnyorlar</NavLink>
            <NavLink className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Kampaniyalar</NavLink>
            <NavLink to='/news' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Xəbərlər</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondaryNavbar
