import React from 'react'
import BirbankStar from '../assets/Cards/birbank-star.webp'
import CashCredit from '../assets/Cards/nagd-pul-krediti.webp'
import Istiqraz from '../assets/Cards/istiqraz.webp'
import Depozit from '../assets/Cards/depozit.webp'
import Birbankcashback from '../assets/Cards/birbankcashback.webp'
const DesignedLinks = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full ">
        <div className="flex items-center justify-center w-[75%] bg-[#f3f3f5] rounded-[12px] p-[24px]">
          <div className="grid grid-cols-6  gap-6  w-full items-center ">
            <div className="col-span-3 row-span-3 bg-white rounded-[10px] w-full h-[180px] transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer">
              <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-[24px] py-[16px] w-[50%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Birbank Star kartı</h2>
                  <span className='text-[#80858A] text-[14px] pb-[14px]'>Üstünlüklərlə dolu bu kartla ürəyincə xərclə, məbləği ay sonu geri qaytardıqda əlavə heç nə ödəmə</span>
                </div>
                <img src={BirbankStar} className='w-[228px] object-cover absolute right-0 bottom-0'/>
              </div>
            </div>
            <div className="col-span-3 row-span-3 col-start-4 bg-white rounded-[10px] w-full h-[180px] transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer">
              <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-[24px] py-[16px] w-[50%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Nağd pul krediti</h2>
                  <span className='text-[#80858A] text-[14px] pb-[14px]'>50 000 AZN-dək krediti sərfəli şərtlərlə, asanlıqla və çox qısa zamanda əldə et</span>
                </div>
                <img src={CashCredit} className='w-[228px] object-contain absolute right-0 bottom-0'/>
              </div>
            </div>
            <div className="col-span-2 row-span-2 row-start-4  bg-white rounded-[10px] w-full h-[180px] transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer">
              <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-[24px] py-[16px] w-[60%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Istiqraz</h2>
                  <span className='text-[#80858A] text-[14px] pb-[14px]'>Yüksək gəlirli və etibarlı, istiqrazlarımıza yatırım etməklə daha çox gəlir qazana bilərsən.</span>
                </div>
                <img src={Istiqraz} className='w-[150px] object-contain absolute right-0 bottom-0'/>
              </div>
              </div>
            <div className="col-span-2 row-span-2 col-start-3 row-start-4  bg-white rounded-[10px] w-full h-[180px] transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer">
              <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-[24px] py-[16px] w-[60%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Depozit</h2>
                  <span className='text-[#80858A] text-[14px] pb-[14px]'>Birbank tətbiqi ilə depozit yatır, gəlirini yüksək faizlə artır.</span>
                </div>
                <img src={Depozit} className='w-[150px] object-contain absolute right-0 bottom-0 '/>
              </div>
            </div>
            <div className="col-span-2 row-span-2 col-start-5 row-start-4  bg-white rounded-[10px] w-full h-[180px] transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)] cursor-pointer">
               <div className="flex  items-center justify-between w-full h-full relative">
                <div className="flex flex-col justify-between gap-1 px-[24px] py-[16px] w-[60%]">
                  <h2 className='text-[#25282B] text-[20px] font-[580]'>Birbank Cashback kartı</h2>
                  <span className='text-[#80858A] text-[14px] pb-[14px]'>Bu kart sənə bol-bol bonus, ödənişlərinə rahatlıq gətirəcək.</span>
                </div>
                <img src={Birbankcashback} className='w-[150px] object-contain absolute right-0 bottom-0 '/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignedLinks
