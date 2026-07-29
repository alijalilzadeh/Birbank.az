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
        <div className="w-[95%] sm:w-[95%] md:w-[95%] lg:w-[75%] flex flex-col ">
          <div className="flex flex-col items-center  py-10 justify-between gap-12 border-b-2 border-b-[#3B3F43] sm:flex-col sm:items-center md:items-center md:flex-col lg:flex-row lg:items-start">
            <div>
              <Link to="/">
                <img src={BirbankLogo} className="w-65 sm:w-65 lg:w-55" />
              </Link>
            </div>

            <div className="grid grid-cols-2 items-center sm:items-center sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:flex-1 w-full justify-center  ">
              <div className="flex flex-col justify-start items-center lg:items-start gap-3">
                <Link to="/cards/all" className="text-white text-[16px] hover:underline" reloadDocument>Kartlar</Link>
                <Link to='/avtomobil-krediti' className="text-white text-[16px] hover:underline" reloadDocument>Avtomobil krediti</Link>
                <Link className="text-white text-[16px] hover:underline" reloadDocument>Xəbər</Link>
                <Link to='/ninja' className="text-white text-[16px] hover:underline" reloadDocument>Ninja</Link>
                <Link to='/bloqlar' className="text-white text-[16px] hover:underline" reloadDocument>Bloqlar</Link>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start gap-3">
                <Link className="text-white text-[16px] hover:underline">Partnyorlar</Link>
                <Link to='/sigortalar' className="text-white text-[16px] hover:underline" reloadDocument>Sığortalar</Link>
                <Link to='/tariffs' className="text-white text-[16px] hover:underline" reloadDocument>Tariflər</Link>
                <Link to='/how-to' className="text-white text-[16px] hover:underline" reloadDocument>Birbank profilini sil</Link>
                <Link to='https://www.kapitalbank.az/reports' className="text-white text-[16px] hover:underline" reloadDocument>Kapital Bank Hesabatları</Link>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start gap-3">
                <Link to='/campaigns' className="text-white text-[16px] hover:underline" reloadDocument>Kampaniyalar</Link>
                <Link to='/about-us' className="text-white text-[16px] hover:underline" reloadDocument>Haqqımızda</Link>
                <Link to='/faq' className="text-white text-[16px] hover:underline" reloadDocument>FAQ</Link>
                <Link to='/ecosystem' className="text-white text-[16px] hover:underline" reloadDocument>Ekosistem</Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-row sm:flex-row lg:flex-col gap-3">
                <Link
                  href="https://apps.apple.com/us/app/birbank/id1293207342"
                  className="flex items-center gap-3 border border-white rounded-[10px] px-4 py-2"
                >
                  <img src={AppStore} className="w-5" />
                  <div className="flex flex-col">
                    <h2 className="text-white text-[16px] font-bold">App Store</h2>
                    <span className="text-white text-[10px]">mobil tətbiqi yükləyin</span>
                  </div>
                </Link>

                <Link
                  href="https://play.google.com"
                  className="flex items-center gap-3 border border-white rounded-[10px] px-4 py-2"
                >
                  <img src={GooglePlay} className="w-5" />
                  <div className="flex flex-col">
                    <h2 className="text-white text-[16px] font-bold">Google Play</h2>
                    <span className="text-white text-[10px]">mobil tətbiqi yükləyin</span>
                  </div>
                </Link>
              </div>
              <img src={QrCode} className="hidden sm:hidden md:hidden lg:flex w-25" />
            </div>
          </div>
          <div className="flex flex-col-reverse gap-3 items-start sm:gap-3 sm:items-start sm:flex-col-reverse md:flex-col-reverse md:items-start md:gap-4 lg:flex-row lg:items-center lg:justify-between w-full py-4">
            <span className='text-[12px] text-white'>© 2026 «Kapital Bank» ASC. Bütün hüquqlar qorunur.</span>
            <Link className='text-[12px] text-white underline font-normal'>Məxfilik sənədi</Link>
            <div className="flex gap-6 items-center justify-center">
              <p className='flex gap-2 items-center justify-center'>
                <img src={PhoneLogo} className='w-5 object-fit' />
                <span className='text-[24px] text-[#EC3432] font-bold'>196</span>
              </p>
              <img src="https://birbank.az/file/Bot_24b1f82f9f.png" className='w-6 flex object-cover' />
              <Link to="https://www.facebook.com/birbank"><FaFacebook className='text-[24px] text-white' /></Link>
              <Link to="https://www.instagram.com/birbank.az/"><FaInstagram className='text-[24px] text-white' /></Link>
              <Link to="https://www.youtube.com/channel/UC1p5TDF6qfzUm4sPqSYSGUA"> <FaYoutube className='text-[24px] text-white' /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
