import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom'
import OnlineCreditImg from '../assets/Credit/online-credit.webp'
import DepozitImg from '../assets/Credit/depozit.webp'
const Credits = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="grid grid-cols-2 grid-rows-6 gap-6 w-[75%]">
          <div className="row-span-3 rounded-[12px] pl-[40px] pt-[24px] pb-[24px] pr-0 bg-[#FDF0F1] w-full relative">
            <div className="flex  items-center justify-between ">
              <div className="flex flex-col w-[50%] gap-10">
                <div className="flex flex-col w-full gap-1">
                  <h2 className='text-left text-[42px] text-[#25282b] font-normal'>Onlayn kredit</h2>
                  <p className='text-[14px] text-[#25282b] font-normal'>Krediti banka gəlmədən və növbə gözləmədən əldə et</p>
                </div>
                <Link className='flex items-center  py-[12px] rounded-[10px] gap-1'>
                  <span className='text-[16px] text-[#EC3342] font-semibold'>Sifariş et</span>
                  <GoArrowRight className='text-[24px]  text-[#EC3342] ' />
                </Link>
              </div>
              <img src={OnlineCreditImg} className='w-[260px] h-[258px] absolute bottom-0 right-0' />
            </div>
          </div>
          <div className="row-span-3 col-start-1 row-start-4 rounded-[12px] pl-[40px] pt-[24px] pb-[24px] pr-0 bg-[#F3F3F5] w-full relative">
            <div className="flex  items-center justify-between ">
              <div className="flex flex-col w-[50%] gap-10">
                <div className="flex flex-col w-full gap-1">
                  <h2 className='text-left text-[42px] text-[#25282b] font-normal'>Depozit</h2>
                  <p className='text-[14px] text-[#25282b] font-normal'>İstər filialda, istərsə də onlayn depozit yerləşdir, qazancını çoxalt</p>
                </div>
                <Link className='flex items-center  py-[12px] rounded-[10px] gap-1'>
                  <span className='text-[16px] text-[#EC3342] font-semibold'>Sifariş et</span>
                  <GoArrowRight className='text-[24px]  text-[#EC3342] ' />
                </Link>
              </div>
              <img src={DepozitImg} className='w-[260px] h-[258px] absolute bottom-0 right-0' />
            </div>
          </div>
          <div className="row-span-6 col-start-2 row-start-1 rounded-[12px] pl-[40px] pt-[24px] pb-[24px] pr-0 bg-[url('https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/birbank_kampaniyalar_ee36563933.webp')] bg-cover bg-center relative w-full">
            <div className="flex flex-col justify-between w-[50%] gap-10">
              <div className="flex flex-col w-full gap-1">
                <h2 className='text-left text-[42px] text-white font-normal'>Kampaniyalar</h2>
                <p className='text-[14px] text-white font-normal'>Sərfəli təklif və endirimlərimizi vaxt itirmədən dəyərləndir</p>
              </div>
              <Link className='bg-white absolute bottom-[24px] flex py-[10px] px-[15px] rounded-[8px] gap-1'>
                <span className='text-[16px] text-[#EC3342] font-semibold'>Daha ətraflı</span>
                <GoArrowRight className='text-[24px]  text-[#EC3342] ' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Credits
