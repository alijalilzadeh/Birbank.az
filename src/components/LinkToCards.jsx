import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ThreeCards from '../assets/Cards/Cards-three-over.webp'
const LinkToCards = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full selection:bg-[#B3D4FC] my-24">
        <div className="flex flex-col items-start justify-between rounded-2xl bg-[#25282B] w-full sm:w-[75%] sm:flex-col sm:items-start md:w-[95%] md:flex-col lg:w-[75%] lg:flex-row lg:items-center relative">
          <div className="flex flex-col gap-6 p-5 sm:p-6 md:p-6 lg:p-10 w-full sm:w-full lg:w-[55%]">
            <h2 className='text-white font-bold text-[20px] sm:text-[24px] lg:text-[32px]'>Birbank kartları ilə xüsusi təklif və imkanlardan yararlan</h2>
            <p className='text-white font-normal text-[16px]'>Visa və MasterCard® beynəlxalq ödəniş sistemlərini dəstəkləyən kartlarla dünyanın istənilən yerində ödənişlər etmək imkanına sahib ol.</p>
            <Link to="/cards/all" className='flex items-center justify-center gap-2 w-[50%] bg-white rounded-[10px] py-3.75' reloadDocument>
              <span className='text-[#25282B] text-[16px] font-[480]'>Daha ətraflı</span>
              <MdOutlineKeyboardArrowRight size={24} />
            </Link>
          </div>
          <img src={ThreeCards} className='w-86.75 object-cover flex items-end justify-end sm:items-end sm:justify-end lg:absolute lg:bottom-0 lg:right-0 pt-10 pr-10' />
        </div>
      </div>
    </>
  )
}

export default LinkToCards
