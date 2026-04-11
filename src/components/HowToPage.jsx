import React from 'react'
import { Link } from 'react-router-dom'
import data from '../NewsData/newsData.json'
const HowToPage = () => {
  return (
    <>
      <div className="flex w-full justify-center selection:bg-[#B3D4FC]">
        <div className="flex flex-col items-center justify-center gap-2 w-[75%]">

          <h2>Necə etməli</h2>

          <div className="flex items-center justify-center gap-3">
            <Link
              className='text-[14px] text-[#7B7478] flex gap-1 items-center justify-center'
              to="/"
            >
              Ana Səhifə
            </Link>

            <span className='text-[14px] text-[#22282b]'>
              {data.pageProps.messages.howTo.breadcrumbsData}
            </span>
          </div>

        </div>
      </div>
    </>
  )
}

export default HowToPage
