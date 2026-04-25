import React from 'react'
import IstiqrazAZN from '../assets/Istiqraz/istiqraz_azn.svg'
import IstiqrazUSD from '../assets/Istiqraz/istiqraz_usd.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const IstiqrazPage = () => {
  const [currency, setCurrency] = useState("AZN");
  return (
    <>
      <div className="flex  items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col justify-center w-[75%] gap-7">
          <div className="flex flex-col justify-center  gap-7">
            <div className="flex gap-2 items-center">
              <Link to='/' className='text-[14px] text-[#6d7478] font-[400] p-[15px]'>Ana Səhifə</Link>
              <Link to='/istiqraz' className='text-[14px] text-[#25282b] font-[400] py-[15px]'>İstiqraz</Link>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center self-end">
                <p onClick={() => setCurrency("AZN")} className={`text-[16px] font-[400] px-[16px] py-[4px] ${currency === "AZN" ? " text-white bg-[#EC3342]" : " text-[#9496AC] bg-[#F3F3F5"} rounded-[6px] cursor-pointer`}>AZN</p>
                <p onClick={() => setCurrency("USD")} className={`text-[16px] font-[400] px-[16px] py-[4px] ${currency === "USD" ? " text-white bg-[#EC3342]" : "text-[#9496AC] bg-[#F3F3F5"} rounded-[6px] cursor-pointer`}>USD</p>
              </div>
              <div className="flex items-center justify-between w-full h-full relative rounded-[10px] bg-[linear-gradient(98.65deg,_rgb(236,50,66)_0%,_rgb(153,0,0)_100%)]">
                <div className="flex flex-col gap-3 px-[72px] py-[96px] w-[60%] h-full">
                  <h2 className='text-[32px] text-white font-[600]'>Kapital Bank istiqrazları</h2>
                  <p className='text-[16px] text-white font-[400]'>
                    {
                      currency === "AZN" ? "Yüksək gəlirli və etibarlı, eyni zamanda aşağı riskli istiqrazlarımıza yatırım etməklə daha çox gəlir əldə edə bilərsiniz. İstiqrazların ümumi həcmi 50 milyon AZN olmaqla iki tranş şəklində (hissə-hissə) buraxılacaq."
                        : "Güvənli şəkildə sabit gəlir əldə etmək istəyirsənsə, 25 milyon ABŞ dolları həcmində buraxılacaq yeni istiqrazlarımız sənin üçün ideal seçimdir. İllik 7% gəlirlilik təklif edən istiqrazlarla maliyyə portfelini gücləndirə bilərsən. İndi müraciət et, yüksək gəlir imkanını qaçırma!"
                    }
                  </p>
                  <div className="flex items-center gap-12  w-full">
                    <div className="flex flex-col gap-2">
                      <p className='text-[18px] text-white font-[600]'>
                        {currency === "AZN" ? "50 000 000 AZN" : "25 000 000 USD"}
                      </p>
                      <p className='text-[14px] text-white font-[400]'>Buraxılış məbləği</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className='text-[18px] text-white font-[600]'>
                        {currency === "AZN" ? "11%" : "7%"}
                      </p>
                      <p className='text-[14px] text-white font-[400]'>İllik gəlir</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className='text-[18px] text-white font-[600]'>100                         {currency === "AZN" ? "AZN" : "USD"}
                      </p>
                      <p className='text-[14px] text-white font-[400]'>Bir istiqrazın dəyəri</p>
                    </div>
                  </div>
                </div>
                <img src={`${currency === "AZN" ? IstiqrazAZN : IstiqrazUSD}`} className='absolute bottom-0 right-[40px] w-[400px] h-[300px] object-contain ' />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default IstiqrazPage
