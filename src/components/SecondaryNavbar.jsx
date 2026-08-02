import React from 'react'
import BirbankLogo from '../assets/birbank-logo.svg'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import creditBanner from '../assets/Credit/creditBanner.png'
import depozitDropdownBanner from '../assets/Credit/depozitDropdownBanner.png'
import { HiMiniArrowLongRight } from "react-icons/hi2";

const SecondaryNavbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [linkStatus, setLinkStatus] = useState(false)
  const [dropdown, setDropdown] = useState('Kreditler')
  const isScrolled = scrollY > 100;
  return (
    <>
      <div className={`flex flex-col  w-full items-center justify-center pb-8   ${isScrolled
        ? "fixed top-0 left-0 border-b-2 border-b-[#ebebf1]"
        : "relative mt-17.5"
        } ${linkStatus && ""} bg-white z-10  pt-8`}>
        <div className="flex  w-[75%] items-center justify-between">
          <Link to="/" reloadDocument>
            <img src={BirbankLogo} className='w-30   object-cover' />
          </Link>
          <div  className="flex gap-5 items-center justify-center">
            <NavLink to="/cards/all" className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Kartlar</NavLink>
            <NavLink onMouseEnter={() => { setLinkStatus(true); setDropdown('Kreditler') }}  to='/kreditler' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Kreditlər</NavLink>
            <NavLink onMouseEnter={() =>{ setLinkStatus(true); setDropdown('Emanetler')}} className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Əmanətlər</NavLink>
            <NavLink to='/istiqraz' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>İstiqraz</NavLink>
            <NavLink to='/pul-kocurmeleri' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Pul köçürmələri</NavLink>
            <NavLink to='/partners' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Partnyorlar</NavLink>
            <NavLink to='/campaigns' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Kampaniyalar</NavLink>
            <NavLink to='/news' className={'text-[14px] border-b-2 border-transparent hover:border-[#EC3342] text-[#9496AC] font-normal'} reloadDocument>Xəbərlər</NavLink>
          </div>
        </div>

        {
          linkStatus && (
            <div onMouseEnter={() => setLinkStatus(true)} onMouseLeave={() => setLinkStatus(false)} className={`flex items-center border-t border-t-[#ebebf1] justify-center w-full z-40  absolute top-full  bg-white  ${linkStatus ? "flex" : "hidden"}`}>
              <div className={` flex justify-between w-[75%] items-center `}>
                <div className="inline-flex flex-col  text-start  gap-3 w-fit pb-10">
                  {dropdown === 'Kreditler' ? (
                    <>
                      <Link to='/kredit-sifarisi' className='text-[14px] text-[#9496ac] font-medium' reloadDocument>Nağd pul krediti</Link>
                      <Link className='text-[14px] text-[#9496ac] font-medium' reloadDocument>Əmanət təminatlı kredit</Link>
                      <Link to='/avans' className='text-[14px] text-[#9496ac] font-medium' reloadDocument>Avans</Link>
                    </>
                  ) : (
                    <>
                      <Link className='text-[14px] text-[#9496ac] font-medium'>Depozit</Link>
                      <Link to='/yigim-hesabi' className='text-[14px] text-[#9496ac] font-medium' reloadDocument>Yığım hesabı</Link>
                      <Link  className='text-[14px] text-[#9496ac] font-medium' reloadDocument>Müddətsiz depozit</Link>
                      <Link to='/depozit-seyfleri' className='text-[14px] text-[#9496ac] font-medium' reloadDocument>Depozit seyfləri</Link>
                    </>
                  )
                  }
                </div>
                <div className="flex items-center justify-start pl-6 py-4 max-w-[50%] bg-[#F3F3F5]">
                  {  
                    dropdown === 'Kreditler' ? (

                    <>
                      <div className="flex flex-col gap-3 w-1/4 mr-10">
                        <h2 className='text-[24px] text-[#25282b] font-medium'>Nağd pul krediti</h2>
                        <p className='text-[16px] text-[#25282b] font-medium'>50000 AZN dək Nağd pul krediti</p>
                        <Link to='/kredit-sifarisi' className='inline-flex items-center w-fit bg-[#ec3342] rounded-lg px-3 py-1 gap-2' reloadDocument>
                          <span className='text-[14px] text-white  font-medium'>Sifariş et</span>
                          <HiMiniArrowLongRight className='text-white' />
                        </Link>
                      </div>
                      <img src={creditBanner} className='object-cover items-center justify-center w-62.5' />
                    </>
                    ) : (
                       <>
                      <div className="flex flex-col gap-3 w-1/2 mr-10">
                        <h2 className='text-[24px] text-[#25282b] font-medium'>Depozit</h2>
                        <p className='text-[16px] text-[#25282b] font-medium'>Yüksək faizlər əldə etməklə yanaşı, siz müqavilənin bitmə tarixinə 1 ay (30 təqvim günü) qalanadək depozit məbləğini artıra bilərsiniz.</p>
                        <Link to='/kredit-sifarisi' className='inline-flex items-center w-fit bg-[#ec3342] rounded-lg px-3 py-1 gap-2' reloadDocument>
                          <span className='text-[14px] text-white  font-medium'>Sifariş et</span>
                          <HiMiniArrowLongRight className='text-white' />
                        </Link>
                      </div>
                      <img src={depozitDropdownBanner} className='object-cover items-center justify-center w-62.5' />
                    </>
                    )


                  }
                </div>
              </div>
            </div>
          )
        }

      </div>
    </>
  )
}

export default SecondaryNavbar
