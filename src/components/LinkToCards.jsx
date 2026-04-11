import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ThreeCards from '../assets/Cards/Cards-three-over.webp'
const LinkToCards = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full selection:bg-[#B3D4FC] my-[96px]">
        <div className="flex items-center justify-between rounded-[16px] bg-[#25282B] w-[75%] relative">
          <div className="flex flex-col gap-6 p-[40px] w-[55%]">
            <h2 className='text-white font-bold text-[32px]'>Birbank kartları ilə xüsusi təklif və imkanlardan yararlan</h2>
            <p className='text-white font-normal text-[16px]'>Visa və MasterCard® beynəlxalq ödəniş sistemlərini dəstəkləyən kartlarla dünyanın istənilən yerində ödənişlər etmək imkanına sahib ol.</p>
            <Link to="/cards/all" className='flex items-center justify-center gap-2 w-[50%] bg-white rounded-[10px] py-[15px]'>
              <span className='text-[#25282B] text-[16px] font-[480]'>Daha ətraflı</span>
              <MdOutlineKeyboardArrowRight size={24} />
            </Link>
          </div>
          <img src={ThreeCards} className='w-[347px] object-contain absolute bottom-0 right-0 pt-[40px] pr-[40px]' />
        </div>
      </div>
    </>
  )
}

export default LinkToCards
