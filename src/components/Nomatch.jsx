import React from 'react'
import '../index.css'
import NoMatchImg from '../assets/noMatch.avif'
import { NavLink } from 'react-router-dom'
import errorImg from '../assets/404.svg'
const Nomatch = () => {
  return (
    <>
    <div className="flex items-center justify-center w-full my-[30px]">
      <div className="flex items-center justify-center flex-col gap-4 w-[80%] ">
        <img src={NoMatchImg} />
        <img src={errorImg} />
        <span className='text-[24px] text-[#A0A4A8] font-normal'>Səhifə tapılmadı</span>
        <NavLink to="/" className={'text-[18px] font-normal text-white bg-[#ec3342] rounded-[10px] p-[12px] transition duration-150 hover:bg-[#BC0C19]'}>Ana səhifəyə qayıt</NavLink>
      </div>
    </div>
    </>
  )
}

export default Nomatch;
