import React from 'react'
import newsData from '../APIDatas/newsData.json'
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
const HomeNews = () => {
  return (
    <>

      <div className="flex items-center justify-center w-full my-15  selection:bg-[#B3D4FC]">
        <div className="flex flex-col p-4 gap-5   w-full sm:w-[75%] sm:p-0 sm:gap-5  md:w-[95%] md:gap-5 lg:w-[75%] lg:gap-10">
          <div className="flex items-center justify-between">
            <h2 className='text-[30px] text-[#25282b] font-semibold'>Xəbərlər</h2>
            <Link to="news" className='flex items-center  py-3 rounded-[10px] gap-1' reloadDocument>
              <span className='text-[14px] text-[#EC3342] font-normal'>Bütün xəbərlər</span>
              <GoArrowRight className='text-[14px]  text-[#EC3342] ' />
            </Link>
          </div>

          <div className="grid grid-cols-6 items-center justify-center w-full h-full gap-4">
            {newsData?.pageProps?.initialState?.news?.newsData?.slice(0, 3).map((item) => (
              <Link key={item.id} className="relative  col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 gap-3 border-b w-full h-full border-[#F3F3F5] rounded-[10px]  ">
                <img
                  src={item.attributes.imageUrl}
                  alt=""
                  className="w-full rounded-t-[10px]"
                />
                <div className="flex flex-col gap-4 justify-between p-3">
                  <h3 className="mt-3 text-[16px] font-semibold text-[#25282b]">
                    {item.attributes.title}
                  </h3>
                  <p className=' bottom-2 text-[14px] font-medium text-[#80858a]'>
                    {new Date(item.attributes.publishedAt).toISOString().split("T")[0]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default HomeNews;