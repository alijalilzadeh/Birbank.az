import React from 'react'
import { Link } from 'react-router-dom'
import AppStore from '../assets/app_store_white.svg'
import GooglePlay from '../assets/google_play_white.svg'
import BirbankQR from '../assets/birbank-qr.webp'
import BirbankAppInterface from '../assets/birbank-app-interface.webp'
import BirbankLogoBg from '../assets/birbank-logo-bg.png'
const DownloadApp = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full my-[80px] selection:bg-[#B3D4FC]">
        <div className="flex flex-col items-center justify-center gap-6 w-[75%] relative">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className='text-[#25282B] text-[56px] font-semibold text-center'>Yenilənmiş mobil tətbiqimiz hər zaman xidmətindədir.</h2>
            <span className='text-[#25282B] text-[18px]'>iOS və Android əməliyyat sistemlərində mövcuddur.</span>
          </div>
          <div className="flex items-center justify-between gap-6 my-[15px]">
            <div className="flex flex-col items-center gap-3">
              <Link to="https://apps.apple.com/us/app/birbank/id1293207342" className='bg-[#25282B] flex rounded-[10px] items-center gap-3 justify-center px-[24px] py-[9px] cursor-pointer mb-[8px]'>
                <img src={AppStore} className='object-cover w-[24px]' />
                <div className="flex flex-col selection:bg-[#B3D4FC]">
                  <h2 className='text-[18px] text-white font-bold '>App Store</h2>
                  <span className='text-[12px] text-white'>mobil tətbiqi yükləyin</span>
                </div>
              </Link >
              <Link to="https://apps.apple.com/us/app/birbank/id1293207342" className='bg-[#25282B] flex rounded-[10px] items-center gap-3 justify-center px-[24px] py-[9px] cursor-pointer'>
                <img src={GooglePlay} className='object-cover w-[24px]' />
                <div className="flex flex-col selection:bg-[#B3D4FC]">
                  <h2 className='text-[18px] text-white font-bold'>Google Play</h2>
                  <span className='text-[12px] text-white'>mobil tətbiqi yükləyin</span>
                </div>
              </Link >
            </div>
              <img src={BirbankQR} className='w-[144px]' />
          </div>
          <img src={BirbankAppInterface} className='w-[360px] object-cover' />
          <img src={BirbankLogoBg} className='w-full absolute items-center justify-center top-0 left-0 bottom-0 right-0 -z-1 object-cover' />
        </div>
      </div>
    </>
  )
}

export default DownloadApp
