import React from 'react'
import BirbankStar from '../assets/Cards/birbank-star-multiple.webp'
import CashCredit from '../assets/Cards/nagd-pul-krediti.webp'
import Istiqraz from '../assets/Cards/istiqraz.webp'
import Depozit from '../assets/Cards/depozit.webp'
import Birbankcashback from '../assets/Cards/birbankcashback.webp'
import { Link } from 'react-router-dom'
import newsData from '../APIDatas/newsData.json'
import { useState } from 'react'
import { HiArrowRight } from "react-icons/hi2";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const DesignedLinks = () => {
  const campaigns = newsData.pageProps.initialState.home.campaigns.slice(0, 9);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? campaigns.length - 1 : prev - 1));

  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === campaigns.length - 1 ? 0 : prev + 1));

  };
  return (
    <>
      <div className="flex items-center justify-center w-full   selection:bg-[#B3D4FC] ">
        <div className="flex flex-col items-center  p-4 gap-0 w-[95%] sm:w-[75%] sm:gap-0 sm:p-6  md:w-[95%] lg:w-[75%] bg-[rgb(243,243,245)] rounded-xl lg:gap-6">
          <div className="overflow-hidden w-full h-fit relative">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)`, }}>
              {campaigns.map((item, index) => (
                <div key={index} className="min-w-full h-fit flex flex-col items-start md:flex-row md:items-center lg:flex-row  lg:justify-between relative gap-6  lg:px-6">
                  <SlArrowLeft onClick={prevSlide} className="absolute left-0 top-1/2  -translate-y-1/2   z-10   bg-white   text-[34px]  p-2 rounded-lg text-[#D4D6DB] cursor-pointer" />

                  <div className="flex flex-col justify-between w-full md:w-[60%] md:pl-15.5 md:pt-18 lg:w-[40%] gap-6">
                    <h2 className="text-[32px] md:text-[48px] font-medium sm:font-medium md:font-bold text-[#25282b] leading-tight">
                      {item.title}
                    </h2>

                    <p className="text-[#80858a] text-[18px] leading-5">
                      {item.content}
                    </p>

                    <div className="flex flex-col sm:flex-col  lg:flex-row gap-4">
                      <Link className="rounded-xl flex items-center  justify-center px-7 py-3 bg-white text-[#ec3342] gap-2 sm:w-auto">
                        <span>
                          {item.firstLink?.text}
                        </span>

                        <HiArrowRight className="text-[#ec3342]" />
                      </Link>

                      {item.secondLink && (
                        <Link className="rounded-xl flex items-center justify-center px-7 py-3 bg-white text-[#ec3342] gap-2 sm:w-auto">
                          <span>
                            {item.secondLink.text}
                          </span>

                          <HiArrowRight className="text-[#ec3342]" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <img src={item.photo?.data?.attributes?.formats?.small?.url} className=" object-cover w-117 sm:w-111.5 md:w-92 lg:w-120 h-auto"/>

                  <SlArrowRight onClick={nextSlide} className=" absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[34px] p-2 rounded-lg text-[#D4D6DB] cursor-pointer"/>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-6  gap-6  w-full  items-center  ">
            <Link className="col-span-6 row-span-3 md:col-span-6 lg:col-span-3 bg-white rounded-[10px] w-full h-45 transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer">
              <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-6 py-4 w-[65%]  md:w-[50%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Birbank Star kartı</h2>
                  <span className='text-[#80858A]  pb-3.5 text-[12px] md:text-[14px]'>Üstünlüklərlə dolu bu kartla ürəyincə xərclə, məbləği ay sonu geri qaytardıqda əlavə heç nə ödəmə</span>
                </div>
                <img src={BirbankStar} className=' object-cover absolute right-0 bottom-0 w-42.5 sm:w-54  md:w-57' />
              </div>
            </Link>
            <Link to='/kredit-sifarisi' className="lg:col-span-3 lg:row-span-3 lg:col-start-4 col-span-6 row-span-3 md:col-span-6 md:row-span-3 bg-white rounded-[10px] w-full sm:w-full md:w-full lg:w-full h-45 transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer" reloadDocument>
              <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-6 py-4 w-[65%]  md:w-[50%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Nağd pul krediti</h2>
                  <span className='text-[#80858A]  pb-3.5 text-[12px] md:text-[14px]'>50 000 AZN-dək krediti sərfəli şərtlərlə, asanlıqla və çox qısa zamanda əldə et</span>
                </div>
                <img src={CashCredit} className=' object-cover absolute right-0 bottom-0 w-42.5 sm:w-54  md:w-57' />
              </div>
            </Link>
            <Link to='/istiqraz' className="lg:col-span-2 lg:row-span-2 lg:row-start-4 col-span-6 row-span-3 md:col-span-6 md:row-span-3  bg-white rounded-[10px] w-full h-45 transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer" reloadDocument>
              <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-6 py-4 w-[65%]  md:w-[60%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Istiqraz</h2>
                  <span className='text-[#80858A]  pb-3.5 text-[12px] md:text-[14px]'>Yüksək gəlirli və etibarlı, istiqrazlarımıza yatırım etməklə daha çox gəlir qazana bilərsən.</span>
                </div>
                <img src={Istiqraz} className=' object-cover absolute right-0 bottom-0 w-42.5 sm:w-54  md:w-57' />
              </div>
            </Link>
            <Link className="lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-4 col-span-6 row-span-3 md:col-span-6 md:row-span-3  bg-white rounded-[10px] w-full h-45 transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer" reloadDocument>
              <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-6 py-4 w-[65%]  md:w-[60%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Depozit</h2>
                  <span className='text-[#80858A]  pb-3.5 text-[12px] md:text-[14px]'>Birbank tətbiqi ilə depozit yatır, gəlirini yüksək faizlə artır.</span>
                </div>
                <img src={Depozit} className=' object-cover absolute right-0 bottom-0 w-42.5 sm:w-54  md:w-57' />
              </div>
            </Link>
            <Link className="lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-4 col-span-6 row-span-3 md:col-span-6 md:row-span-3 bg-white rounded-[10px] w-full h-45 transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer" reloadDocument>
              <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-6 py-4 w-[65%]  md:w-[60%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Birbank Cashback kartı</h2>
                  <span className='text-[#80858A]  pb-3.5 text-[12px] md:text-[14px]'>Bu kart sənə bol-bol bonus, ödənişlərinə rahatlıq gətirəcək.</span>
                </div>
                <img src={Birbankcashback} className=' object-cover absolute right-0 bottom-0 w-42.5 sm:w-54  md:w-57' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignedLinks
