import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import BirbankLogo from '../assets/birbank-logo.svg'
import AppStore from '../assets/app_store_red.svg'
import GooglePlay from '../assets/google_play_red.svg'
import QrCode from '../assets/qr-code-simple.png'
import PhoneLogo from '../assets/phone-logo.svg'
const Footer = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-[#25282B] selection:bg-[#B3D4FC]">
        <div className="w-[75%] ">
          <div className="flex items-start  py-[40px] justify-between gap-12 border-b-2 border-b-[#3B3F43]">
            <div>
              <img src={BirbankLogo} className="w-[220px]" />
            </div>

            <div className="grid grid-cols-3 gap-10 flex-1">
              <div className="flex flex-col gap-3">
                <Link className="text-white text-[16px] hover:underline">Kartlar</Link>
                <Link className="text-white text-[16px] hover:underline">Avtomobil krediti</Link>
                <Link className="text-white text-[16px] hover:underline">Xəbər</Link>
                <Link className="text-white text-[16px] hover:underline">Ninja</Link>
                <Link className="text-white text-[16px] hover:underline">Bloqlar</Link>
              </div>

              <div className="flex flex-col gap-3">
                <Link className="text-white text-[16px] hover:underline">Partnyorlar</Link>
                <Link className="text-white text-[16px] hover:underline">Sığortalar</Link>
                <Link className="text-white text-[16px] hover:underline">Tariflər</Link>
                <Link className="text-white text-[16px] hover:underline">Birbank profilini sil</Link>
              </div>

              <div className="flex flex-col gap-3">
                <Link className="text-white text-[16px] hover:underline">Kampaniyalar</Link>
                <Link className="text-white text-[16px] hover:underline">Haqqımızda</Link>
                <Link className="text-white text-[16px] hover:underline">FAQ</Link>
                <Link className="text-white text-[16px] hover:underline">Ekosistem</Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-3">
                <Link
                  href="https://apps.apple.com/us/app/birbank/id1293207342"
                  className="flex items-center gap-3 border border-white rounded-[10px] px-4 py-2"
                >
                  <img src={AppStore} className="w-[20px]" />
                  <div className="flex flex-col">
                    <h2 className="text-white text-[14px] font-bold">App Store</h2>
                    <span className="text-white text-[10px]">mobil tətbiqi yükləyin</span>
                  </div>
                </Link>

                <Link
                  href="https://play.google.com"
                  className="flex items-center gap-3 border border-white rounded-[10px] px-4 py-2"
                >
                  <img src={GooglePlay} className="w-[20px]" />
                  <div className="flex flex-col">
                    <h2 className="text-white text-[14px] font-bold">Google Play</h2>
                    <span className="text-white text-[10px]">mobil tətbiqi yükləyin</span>
                  </div>
                </Link>
              </div>
              <img src={QrCode} className="w-[100px]" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full py-[16px]">
              <span className='text-[12px] text-white'>© 2026 «Kapital Bank» ASC. Bütün hüquqlar qorunur.</span>
              <div className="flex gap-6 items-center justify-center">
                <Link className='text-[12px] text-white underline font-normal'>Məxfilik sənədi</Link>
                <p className='flex gap-2 items-center justify-center'>
                  <img src={PhoneLogo} className='w-[20px] object-fit' />
                  <span className='text-[24px] text-[#EC3432] font-bold'>196</span>
                </p>
                <Link to="https://www.facebook.com/birbank"><FaFacebook className='text-[24px] text-white'/></Link>
                <Link to="https://www.instagram.com/birbank.az/"><FaInstagram className='text-[24px] text-white'/></Link>
                <Link to="https://www.youtube.com/channel/UC1p5TDF6qfzUm4sPqSYSGUA"> <FaYoutube className='text-[24px] text-white'/></Link>
               
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
