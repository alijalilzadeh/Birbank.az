import React, { useState } from 'react'
import newsData from '../NewsData/newsData.json'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
const Services = () => {
  const [buyStatus, setBuyStatus] = useState("buy");

  const today = new Date();

  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  

  
  return (
    <>
      <div className="flex items-center justify-center w-full my-[96px] selection:bg-[#B3D4FC]">
        <div className="flex flex-col gap-2 w-[75%]">
          <h2 className='text-[#25282b] font-[600] text-[30px]'>{newsData.pageProps.messages.home.exchangeRate.services}</h2>
          <div className="flex items-center gap-8 justify-between w-full">
            <div className="flex flex-col gap-4 w-[50%] rounded-[12px] bg-[#F9F9FA] p-[24px]">
              <h2 className='text-[24px] text-[#222222] font-[500]'>{newsData.pageProps.messages.home.exchangeRateTable.exchangeRates}</h2>
              <div className="flex items-center">
                <Link onClick={() => setBuyStatus("buy")} className={`rounded-[6px] px-[24px] text-[14px] py-[8px] ${buyStatus === "buy" ? " bg-[#25282B] text-white" : "bg-[#FFFFFF] text-[#9496AC]"} `}>{newsData.pageProps.messages.home.exchangeRateTable.buy}</Link>
                <Link onClick={() => setBuyStatus("sell")} className={`rounded-[6px] px-[24px] text-[14px] py-[8px] ${buyStatus === "sell" ? " bg-[#25282B] text-white" : "bg-[#FFFFFF] text-[#9496AC]"}`}>{newsData.pageProps.messages.home.exchangeRateTable.sell}</Link>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <div className='flex flex-col gap-6'>
                  <h2 className='text-[16px] text-[#222222] font-[600]'>{newsData.pageProps.messages.home.exchangeRateTable.currency}</h2>
                  {
                    newsData?.pageProps?.initialState?.home?.currency
                      ?.slice(1, 5)
                      .map((item, i) => {
                        return (
                          <p className='flex gap-2 items-center justify-center' key={i}>
                            <img
                              src={item.icon.data.attributes.formats.small.url}
                              alt="" className='w-[24px] rounded-[2px]'
                            />
                            <span className='text-[18px] text-[#222222]'>{item.code}</span>
                          </p>
                        );
                      })
                  }
                </div>
                <div className='flex flex-col gap-6'>
                  <h2 className='text-[16px] text-[#222222] font-[600]'>{newsData.pageProps.messages.home.exchangeRateTable.centralBank}</h2>
                </div>

                <div className='flex flex-col items-center justify-center gap-6'>
                  <h2 className='text-[16px] text-[#222222] font-[600]'>{newsData.pageProps.messages.home.exchangeRateTable.cash}</h2>
                  {
                    newsData?.pageProps?.initialState?.home?.currency
                      ?.slice(1, 5)
                      .map((item, i) => {
                        return (
                          <span className='text-[16px] text-[#222222] font-[400]'>{item.buy}</span>
                        );
                      })
                  }
                </div>

                <div className='flex flex-col gap-6'>
                  <h2 className='text-[16px] text-[#222222] font-[600]'>{newsData.pageProps.messages.home.exchangeRateTable.nonCash}</h2>
                   {
                    newsData?.pageProps?.data
                      ?.slice(1, 5)
                      .map((item, i) => {
                        if(item.type === "NON_CASH") return (
                          <span className='text-[16px] text-[#222222] font-[400]'>{item.buy}</span>
                        );
                      })
                  }
                </div>
              </div>
              <div className="flex items-center justify-between my-[6px]">
                <p className='text-[#80858A] text-[14px] font-normal'>Kurslar bu tarixə təyin edilmişdir: {formattedDate}</p>
                <Link to="/currency-rates" className='flex items-center justify-center gap-1'>
                  <span className='text-[#ED3342] text-[14px] font-medium'> Bütün məzənnələr</span>
                  <GoArrowRight className='text-[#ED3342] ' />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-6 gap-4 w-[50%]">
              {newsData?.pageProps?.initialState?.home?.services?.map((item, index) => {
                return (
                  <Link to={item.link.href}
                    key={index}
                    className="w-full overflow-hidden relative col-span-3 row-span-2 flex items-center justify-between w-full bg-[#F3F3F5] rounded-[12px] px-[23px] py-[16px]"
                  >
                    <div className="flex flex-col gap-2 w-[50%]">
                      <h2 className='text-[24px] font-medium text-[#25282b]'>{item.title}</h2>
                      <p className='text-[14px] text-[#25282b]'>{item.description}</p>
                    </div>
                    <img src={item.image.data.attributes.formats.thumbnail.url} className='absolute bottom-0 right-[20px] object-fit w-[240px] transform transition duration-200 hover:scale-[1.05]' />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
