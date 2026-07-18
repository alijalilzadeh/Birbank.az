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
          <Link to='/kreditler' className="row-span-3 rounded-xl pl-10 pt-6 pb-6 bg-[#FDF0F1] w-full relative" reloadDocument>
            <div className="flex  items-center justify-between ">
              <div className="flex flex-col w-[50%] gap-10">
                <div className="flex flex-col w-full gap-1">
                  <h2 className='text-left text-[42px] text-[#25282b] font-normal'>Onlayn kredit</h2>
                  <p className='text-[14px] text-[#25282b] font-normal'>Krediti banka gəlmədən və növbə gözləmədən əldə et</p>
                </div>
                <Link to='/kreditler' className='flex items-center  py-3 rounded-[10px] gap-1' reloadDocument>
                  <span to='/kreditler' className='text-[16px] text-[#EC3342] font-semibold' >Sifariş et</span>
                  <GoArrowRight className='text-[24px]  text-[#EC3342] ' />
                </Link>
              </div>
              <img src={OnlineCreditImg} className='w-65 h-64.5 absolute bottom-0 right-0' />
            </div>
          </Link>
          <Link className="row-span-3 col-start-1 row-start-4 rounded-xl pl-10 pt-6 pb-6 bg-[#F3F3F5] w-full relative">
            <div className="flex  items-center justify-between ">
              <div className="flex flex-col w-[50%] gap-10">
                <div className="flex flex-col w-full gap-1">
                  <h2 className='text-left text-[42px] text-[#25282b] font-normal'>Depozit</h2>
                  <p className='text-[14px] text-[#25282b] font-normal'>İstər filialda, istərsə də onlayn depozit yerləşdir, qazancını çoxalt</p>
                </div>
                <Link className='flex items-center  py-3 rounded-[10px] gap-1'>
                  <span className='text-[16px] text-[#EC3342] font-semibold'>Sifariş et</span>
                  <GoArrowRight className='text-[24px]  text-[#EC3342] ' />
                </Link>
              </div>
              <img src={DepozitImg} className='w-65.5 absolute bottom-0 right-0' />
            </div>
          </Link>
          <div className="row-span-6 col-start-2 row-start-1 rounded-xl pl-10 pt-6 pb-6 pr-0 bg-[url('https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/birbank_kampaniyalar_ee36563933.webp')] bg-cover bg-center relative w-full">
            <div className="flex flex-col justify-between w-[50%] gap-10">
              <div className="flex flex-col w-full gap-1">
                <h2 className='text-left text-[42px] text-white font-normal'>Kampaniyalar</h2>
                <p className='text-[14px] text-white font-normal'>Sərfəli təklif və endirimlərimizi vaxt itirmədən dəyərləndir</p>
              </div>
              <Link className='bg-white absolute bottom-6 flex py-2.5 px-3.75 rounded-lg gap-1'>
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
