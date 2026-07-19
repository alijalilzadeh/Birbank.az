import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PartnerData from '../APIDatas/partnersData.json'
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const PartnersContent = () => {
  const partners = PartnerData.pageProps.initialState.partners.partnersData
  const filteredPartnerData = PartnerData.pageProps.initialState.partners.filters
  const partnersCategories = PartnerData.pageProps.initialState.partners.filters.categories
  const partnersİnstallments = PartnerData.pageProps.initialState.partners.filters.installments
  const partnersBNPL = PartnerData.pageProps.initialState.partners.filters.bnpl_options
  const partnersCashbackes = PartnerData.pageProps.initialState.partners.filters.cashbackes


  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[80%] h-full gap-6">
          <div className="flex flex-col w-full h-full">
            <h2 className='text-[24px] font-bold text-[#25282b] '>Partnyorlar</h2>
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Partnyorlar</Link>
            </div>
          </div>
          <div className="flex items-start gap-5  w-full mb-20">
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
            <div className="flex flex-col items-start gap-4 w-[60%] h-fit relative ">
              <div className="flex items-start justify-between w-full gap-4">
                <div className="flex flex-1  p-4 rounded-[10px] border border-[#d4d6db] gap-4 cursor-default">
                  <CiSearch className="text-[24px]" />
                  <input
                    type="text"
                    placeholder="Axtar"
                    className="w-full outline-none "
                  />
                </div>

                <div className="flex flex-col gap-3  w-[30%]">
                  <div onClick={() => setSelected(!selected)} className="flex items-center justify-between p-4 border border-[#e1e5e9] rounded-lg  text-[#333333] text-[14px] font-normal cursor-pointer hover:border-[#d4d6db] ">
                    <option selected>Çeşidlə</option>
                    <MdOutlineKeyboardArrowDown size={22} className='text-[#666666]' />
                  </div>
                  {
                    selected && (
                      <div className="inline-flex flex-col  border border-[#e1e5e9] rounded-lg text-[#333333] text-[14px] font-normal cursor-pointer  w-full transition duration-250  hover:shadow-[0_4px_12px_0_rgba(19,22,60,0.06)] ">
                        {
                          filteredPartnerData.sorts.map((item, id) => (
                            <option className='px-4 py-3 transition duration-250 text-[#333333] text-[14px] font-normal'>{item.label}</option>
                          ))
                        }
                      </div>
                    )
                  }
                </div>
              </div>
              <p className='text-[#222222] font-normal text-[14px]'>{PartnerData.pageProps.initialState.partners.pagination.total} {PartnerData.pageProps.messages.partners.partnerFound}</p>

              <div className="grid grid-cols-9  gap-4 w-full my-5">
                {
                  partners.map((item, id) => (
                    <div key={id} className="flex flex-col col-span-3 row-span-2   p-6 border border-[#e1e5e9] rounded-xl">
                      <div className="flex items-center justify-between w-full">
                        <div key={id} className="flex flex-col gap-4">
                          <img src={item.attributes?.image?.data?.attributes?.url} className='w-15 h-15 object-cover' />
                          <h2 className='text-[18px] font-medium text-[#25282b]'>{item.attributes.name}</h2>
                        </div>
                      </div>
                    </div>
                  ))
                }


              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartnersContent
