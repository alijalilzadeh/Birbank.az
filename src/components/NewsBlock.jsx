import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import newsData from '../NewsData/newsData.json'

const NewsBlock = () => {

  return (
    <>
      <div className="flex items-center justify-center w-full selection:bg-[#B3D4FC] mb-[96px]">
        <div className="flex flex-col w-[75%]">
          <h2 className='my-[12px] text-[24px] font-[700] text-[#25282b]'>{newsData.pageProps.messages.news.title}</h2>
          <div className="flex gap-2">
            <Link className='text-[14px] p-[15px] text-[#6D7478]' to="/">Ana Səhifə</Link>
            <Link className=' text-[#25282b] text-[14px] p-[15px] pl-0'>{newsData.pageProps.messages.news.breadcrumbsData[0].title}</Link>
          </div>
             <div className="grid grid-cols-6 items-center justify-center w-full h-full gap-4">
            {newsData?.pageProps?.initialState?.news?.newsData?.map((item) => (
              <Link key={item.id} className="relative col-span-2 gap-3 border-b w-full h-full border-[#F3F3F5] rounded-[10px]  p-3">
                <img
                  src={item.attributes.imageUrl}
                  alt=""
                  className="w-full rounded-t-[10px]"
                />
                <div className="flex flex-col gap-4 justify-between p-[24px]">
                  <h3 className="mt-3 text-[16px] font-semibold text-[#25282b]">
                    {item.attributes.title}
                  </h3>
                  <p className='absolute bottom-2 text-[14px] font-medium text-[#80858a]'>
                    {new Date(item.attributes.publishedAt).toISOString().split("T")[0]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsBlock
