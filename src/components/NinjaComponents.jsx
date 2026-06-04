import React from 'react'
import newsData from '../NewsData/newsData.json'
import { Link } from 'react-router-dom'
import ninjaCardImg from '../assets/Ninja/ninjaCard.png'
const NinjaComponents = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[75%]">
          <div className="flex flex-col w-full">
            <div className="flex gap-2 my-[12px]">
              <Link className='text-[14px] p-[15px] text-[#6D7478]' to="/">Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-[15px] pl-0' to="/ninja">Ninja təklifi</Link>
            </div>
          </div>
          <div className="flex  justify-between  w-full bg-[linear-gradient(98.65deg,#7D0018_0%,#CA154A_100%)] rounded-[10px]">
            <div className="flex w-[60%] items-center py-[48px] px-[72px]">
              <h2 className='text-[32px] font-[600] text-white'>Ninja təklifi ilə xərcləri hissələrə bölüb, ödəyin!</h2>
            </div>
            <div className="flex items-center justify-center w-[50%] py-[48px] px-[10px] ">
                <img src={ninjaCardImg} className='w-[346px] object-cover flex' />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full my-[40px]">
          <h2>Bilmək lazımdır</h2>
          <div className="flex items-center justify-center w-full bg-[#F9F9FA]" ></div>
        </div>
      </div>
    </>
  )
}

export default NinjaComponents
