import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import newsData from '../APIDatas/newsData.json'
const NewsBlock = () => {

  return (
    <>
      <Helmet>
        <title>Birbank | Xəbərlər</title>
        <meta
          name="description"
          content="Ana səhifənin təsviri"
        />
      </Helmet>
      <div className="flex items-center justify-center w-full selection:bg-[#B3D4FC] mb-24">
        <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
          <h2 className='my-3 text-[24px] font-bold text-[#25282b]'>{newsData.pageProps.messages.news.title}</h2>
          <div className="flex gap-2">
            <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
            <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0'>{newsData.pageProps.messages.news.breadcrumbsData[0].title}</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center w-full h-full gap-4">
            {newsData?.pageProps?.initialState?.news?.newsData?.map((item) => (
              <Link key={item.id} className="relative gap-3 border-b w-full max-w-90 h-full border-[#F3F3F5] rounded-[10px]  p-3">
                <img
                  src={item.attributes.imageUrl}
                  alt=""
                  className="w-full object-coveritems-center rounded-t-[10px]"
                />
                <div className="flex flex-col gap-4 justify-between p-6">
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
