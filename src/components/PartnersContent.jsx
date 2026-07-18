import React from 'react'
import { Link } from 'react-router-dom'
import PartnerData from '../APIDatas/partnersData.json'
const PartnersContent = () => {
  const partnersCategories = PartnerData.pageProps.initialState.partners.filters.categories
  const partnersİnstallments = PartnerData.pageProps.initialState.partners.filters.installments
  const partnersBNPL = PartnerData.pageProps.initialState.partners.filters.bnpl_options
  const partnersCashbackes = PartnerData.pageProps.initialState.partners.filters.cashbackes
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[75%] h-full gap-6">
          <div className="flex flex-col w-full h-full">
            <h2 className='text-[24px] font-bold text-[#25282b] '>Partnyorlar</h2>
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Partnyorlar</Link>
            </div>
          </div>
          <div className="flex items-center  w-full mb-20">
            <div className="flex flex-col gap-6 justify-center  w-[25%]">
              <div className="flex flex-col gap-2 p-6 border border-[#f3f3f5] rounded-xl py-10  shadow-[0_6px_20px_0_rgba(19,22,60,0.06)]">
                <h2 className='font-semibold text-[#222222] text-[24px]'>Kateqoriyalar</h2>
                <div className="flex flex-col max-h-43 overflow-y-auto">
                  {
                    partnersCategories.map((item, id) => (
                      <span className='text-black font-normal text-[14px] py-2.5 border-b border-[#f3f3f5] cursor-pointer'>{item.label}</span>
                    ))
                  }
                </div>
              </div>
              <div className="flex flex-col gap-2 p-6 border border-[#f3f3f5] rounded-xl   shadow-[0_6px_20px_0_rgba(19,22,60,0.06)]">
                <h2 className='font-semibold text-[#222222] text-[24px]'>Üstünlüklər</h2>
                <div className="flex flex-col gap-5 border-b border-[#f3f3f5] py-4 px-2">
                  <div className="flex gap-2 items-center ">
                    <img src="https://birbank.az/file/Frame_2085662747_0868a51412.svg" />
                    <p className='font-normal text-[16px] text-[#222222]'>Taksit sayı, <span className='text-[#6b7280] font-medium text-[16px]'> ay</span></p>
                  </div>
                  <div className="flex items-center  w-full flex-wrap gap-2">
                    <span className='rounded-xl py-px px-2.5 bg-[#F3F3F5] text-[#797F8C] inline-flex w-fit items-center justify-center font-normal text-[14px] cursor-pointer'>Hamısını seç</span>

                    {
                      partnersİnstallments.map((item, id) => (
                        <span className='rounded-xl py-px px-2.5 bg-[#F3F3F5] text-[#797F8C] inline-flex w-10 items-center justify-center font-normal text-[14px] cursor-pointer'>{item.label}</span>
                      ))
                    }
                  </div>
                </div>

                <div className="flex flex-col gap-5 border-b border-[#f3f3f5] py-4 px-2">
                  <div className="flex gap-2 items-center ">
                    <img src="https://birbank.az/file/Frame_2085662748_947972af85.svg" />
                    <p className='font-normal text-[16px] text-[#222222]'>Böl-ödə, <span className='text-[#6b7280] font-medium text-[16px]'> ay</span></p>
                  </div>
                  <div className="flex items-center  w-full flex-wrap gap-2">
                    <span className='rounded-xl py-px px-2.5 bg-[#F3F3F5] text-[#797F8C] inline-flex w-fit items-center justify-center font-normal text-[14px] cursor-pointer'>Hamısını seç</span>

                    {
                      partnersBNPL.map((item, id) => (
                        <span className='rounded-xl py-px px-2.5 bg-[#F3F3F5] text-[#797F8C] inline-flex w-10 items-center justify-center font-normal text-[14px] cursor-pointer'>{item.label}</span>
                      ))
                    }
                  </div>
                </div>

                <div className="flex flex-col gap-5 border-b border-[#f3f3f5] py-4 px-2">
                  <div className="flex gap-2 items-center ">
                    <img src="https://birbank.az/file/Frame_2085662745_9a25432f87.svg" />
                    <p className='font-normal text-[16px] text-[#222222]'>Bonus, <span className='text-[#6b7280] font-medium text-[16px]'>%</span></p>
                  </div>
                  <div className="flex items-center  w-full flex-wrap gap-2">
                    <span className='rounded-xl py-px px-2.5 bg-[#F3F3F5] text-[#797F8C] inline-flex w-fit items-center justify-center font-normal text-[14px] cursor-pointer'>Hamısını seç</span>

                    {
                      partnersCashbackes.map((item, id) => (
                        <span className='rounded-xl py-px px-2.5 bg-[#F3F3F5] text-[#797F8C] inline-flex w-10 items-center justify-center font-normal text-[14px] cursor-pointer'>{item.label}</span>
                      ))
                    }
                  </div>
                </div>
                <span className='flex items-center justify-center px-4 py-3 rounded-xl bg-[#F3F3F5] text-[14px] font-medium text-[#6b7280] cursor-pointer transition duration-200 hover:bg-[#6B7280] hover:text-white mt-4'>Sıfırla</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartnersContent
