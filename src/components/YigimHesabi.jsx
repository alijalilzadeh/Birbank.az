import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import { Link } from 'react-router-dom'
const YigimHesabi = () => {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <>
        <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
          <div className="flex flex-col w-[75%]">
            <div className="flex flex-col w-full">
              <h2 className='text-[24px] font-bold text-[#25282b] '>Ekosistem</h2>

              <div className="flex gap-2 my-3">
                <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/">Ana Səhifə</Link>
                <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Investorlar</Link>
              </div>
            </div>
            <div className="flex justify-between w-full bg-linear-to-r from-[#EC3242] to-[#EC3242] rounded-[10px] relative overflow-hidden">
              <div className="flex flex-col w-[70%] gap-6 py-12 px-18">
                <h2 className='text-[32px] font-semibold text-white leading-10'>Pulunu Birbank-la yığ, istəyəndə götür və faiz gəlirlərini itirmə!</h2>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>0 AZN/USD-dan</span>
                    <p className='text-[14px] font-normal text-white'>Minimum məbləğ</p>
                  </div>

                   <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>Sərbəst</span>
                    <p className='text-[14px] font-normal text-white'>Müddət</p>
                  </div>

                   <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>AZN - 7%, USD - 2.5%</span>
                    <p className='text-[14px] font-normal text-white'>Faiz dərəcəsi(illik)</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[50%] py-12 px-2.5 ">
                <img src="https://birbank.az/file/thumbnail_saving_account_banner_img_9ecbe94e68_97fdca7d6f.webp" className='w-60 object-cover flex ' alt="BirPay" />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default YigimHesabi
