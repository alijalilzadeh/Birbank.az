import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import { FaLocationDot } from "react-icons/fa6";
import BirbankLogo from '../assets/birbank-logo.svg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdOutlineLogin } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false)
  const [dropdown, setDropdown] = useState('Kreditler')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 100;
  return (
    <>
      <div className={`hidden items-center justify-center w-full bg-white border-b-2  mb-17.5 border-b-[#ebebf1] lg:flex 
        ${!isScrolled
          ? "fixed top-0 left-0"
          : "-translate-y-full opacity-0 pointer-events-none"
        } z-10`}>
        <div className="flex flex-row justify-between gap-4 w-[75%]">
          <div className="flex items-center gap-6 justify-center">
            <NavLink className={'text-[#9496AC] text-[16px] font-medium p-3  border-b-2 border-b-[#EC3342]'}>Fiziki</NavLink>
            <NavLink to='https://birbank.business/' className={'text-[#9496AC] text-[16px]  font-medium p-3 border-b-2  border-transparent hover:border-[#EC3342] '} reloadDocument>Biznes</NavLink>
            <NavLink to='https://birbankinvest.az/' className={'text-[#9496AC] text-[16px]  font-medium p-3 border-b-2  border-transparent hover:border-[#EC3342]'} reloadDocument>Invest</NavLink>
            <NavLink to='https://private.birbank.az/' className={'text-[#9496AC] text-[16px]  font-medium p-3 border-b-2  border-transparent hover:border-[#EC3342] '} reloadDocument>Private</NavLink>
          </div>
          <div className="flex items-center align-center gap-6">
            <span className='text-[#9496AC] text-[12px]'>'Birbank' brendi 'Kapital Bank' ASC-nin əmtəə nişanıdır.</span>
            <Link to='https://birbank.az/xidmet-sebekesi' className="flex gap-1 items-center justify-center bg-[#FF0039] rounded-md py-0.75 px-1.25 cursor-pointer" reload document>
              <FaLocationDot className='text-[16px] text-white' />
              <span className='text-[14px] text-white font-normal'>Xidmət şəbəkəsi</span>
            </Link>
            <div className="flex items-center justify-center gap-2">
              <span className='text-[#9496AC] text-base cursor-pointer'>EN</span>
              <span className='text-[#9496AC] text-base cursor-pointer'>RU</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex flex-col items-center justify-center w-full  bg-white border-b-2 border-b-[#ebebf1] fixed top-0 left-0 z-40 lg:hidden`}>
        <div className="flex items-center justify-between w-[95%] sm:w-[75%] md:w-[95%] p-4">
          <img src={BirbankLogo} className='w-30 object-cover' />
          <div onClick={() => setBtnStatus(!btnStatus)} className={`flex flex-col items-center justify-center gap-1.5 p-1.25  bg-[#ec3342] rounded-sm`}>
            <div className={`flex items-center justify-center w-5.5 border-b-3 border-b-white transition duration-500 transform ${btnStatus ? "rotate-45 translate-y-2" : 'rotate-0 translate-y-0'}`}></div>
            <div className={`flex items-center justify-center w-5.5 border-b-3 border-b-white transition duration-500  ${btnStatus ? "opacity-0" : "opacity-100"}`}></div>
            <div className={`flex items-center justify-center w-5.5 border-b-3 border-b-white transition duration-500 transform ${btnStatus ? "-rotate-45 -translate-y-2" : 'rotate-0 translate-y-0'}`}></div>
          </div>
        </div>
        <div className={`${btnStatus ? "flex" : "hidden  "}  transition duration-500 flex-col gap-1 items-center h-full  max-h-[calc(100vh-72px)]  justify-start overflow-y-auto   w-[95%] sm:w-[75%] md:w-[95%]`}>
          <span className='text-[#9496AC] text-[12px]  self-start'>'Birbank' brendi 'Kapital Bank' ASC-nin əmtəə nişanıdır.</span>
          <div className="flex items-center gap-6 justify-between w-full  mb-5">
            <NavLink className={' text-[#52575c] text-[16px] font-semibold p-3 w-full text-center border-b-2 border-b-[#EC3342]'}>Fiziki</NavLink>
            <NavLink to='https://birbank.business/' className={' text-[#52575c] text-[16px] text-center font-semibold p-3 border-b-2 w-full  border-transparent hover:border-[#EC3342] '} reloadDocument>Biznes</NavLink>
            <NavLink to='https://birbankinvest.az/' className={' text-[#52575c] text-[16px] text-center font-semibold p-3 border-b-2 w-full border-transparent hover:border-[#EC3342]'} reloadDocument>Invest</NavLink>
            <NavLink to='https://private.birbank.az/' className={' text-[#52575c] text-[16px] text-center font-semibold p-3 border-b-2 w-full  border-transparent hover:border-[#EC3342] '} reloadDocument>Private</NavLink>
          </div>

          <div className="flex flex-col items-start border-b-2 border-b-[#ebebf1] pb-4 justify-start gap-6 w-full">
            <NavLink to="/cards/all" className={'text-[18px] border-b-2 border-transparent hover:border-[#EC3342] text-[#52575c] font-semibold'} reloadDocument>Kartlar</NavLink>
            <NavLink onMouseEnter={() => { setLinkStatus(true); setDropdown('Kreditler') }} to='/kreditler' className={'flex justify-between items-center w-full text-[18px] border-b-2 border-transparent hover:border-[#EC3342] text-[#52575c] font-semibold'} reloadDocument>
              <span>Kreditlər</span>
              <MdOutlineKeyboardArrowRight size={20} />
            </NavLink>
            <NavLink onMouseEnter={() => { setLinkStatus(true); setDropdown('Emanetler') }} className={'flex justify-between items-center w-full text-[18px] border-b-2 border-transparent hover:border-[#EC3342] text-[#52575c] font-semibold'} reloadDocument>
              <span>Əmanətlər</span>
              <MdOutlineKeyboardArrowRight size={20} />

            </NavLink>
            <NavLink to='/istiqraz' className={'text-[18px] border-b-2 border-transparent hover:border-[#EC3342] text-[#52575c] font-semibold'} reloadDocument>İstiqraz</NavLink>
            <NavLink to='/pul-kocurmeleri' className={'text-[18px] border-b-2 border-transparent hover:border-[#EC3342] text-[#52575c] font-semibold'} reloadDocument>Pul köçürmələri</NavLink>
            <NavLink to='/partners' className={'text-[18px] border-b-2 border-transparent hover:border-[#EC3342] text-[#52575c] font-semibold'} reloadDocument>Partnyorlar</NavLink>
            <NavLink to='/campaigns' className={'text-[18px] border-b-2 border-transparent hover:border-[#EC3342] text-[#52575c] font-semibold'} reloadDocument>Kampaniyalar</NavLink>
            <NavLink to='/news' className={'text-[18px] border-b-2 border-transparent hover:border-[#EC3342] text-[#52575c] font-semibold'} reloadDocument>Xəbərlər</NavLink>
          </div>

          <div className="flex items-center justify-between w-full my-4">
            <div className="flex items-center justify-center gap-2">
              <span className='text-[#9496AC] text-base cursor-pointer'>EN</span>
              <span className='text-[#9496AC] text-base cursor-pointer'>RU</span>
            </div>

            <Link to='https://birbank.az/xidmet-sebekesi' className="flex gap-1 items-center justify-center bg-[#e7e8ea] rounded-md py-2 px-4 cursor-pointer" reload document>
              <FaLocationDot className='text-[16px] text-[#1f2927]' />
              <span className='text-[14px] text-[#1f2927] font-normal'>Xidmət şəbəkəsi</span>
            </Link>
          </div>

          <Link to='https://apps.apple.com/us/app/birbank/id1293207342' className='rounded-md flex items-center justify-center gap-1 text-white w-full py-3 px-7.5 mb-5 bg-[#ec3342]'>
            <MdOutlineLogin />
            <span className='font-semibold text-[14px]'>Yüklə</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
