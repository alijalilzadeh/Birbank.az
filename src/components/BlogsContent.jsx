import { Link } from 'react-router-dom'
import blogData from '../APIDatas/blogData.json'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';
const BlogsContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFilter, setCurrentFilter] = useState("Hamısı");
  console.log(currentFilter)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 4 : prev - 1));

  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 4 ? 0 : prev + 1));

  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[75%]">
          <div className="flex flex-col w-full">
            <h2 className='text-[24px] font-bold text-[#25282b] my-4'>Bloq</h2>
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75ext-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Bloqlar</Link>
            </div>
          </div>
          <div  className="flex  justify-between  w-full overflow-hidden rounded-[10px] ">
            <div className="flex flex-col justify-between w-[60%]  py-12 px-18 bg-[#ec3342] gap-20 ">
              <div className="flex flex-col gap-2">
                <span className='rounded-xl bg-black text-[14px] inline-flex w-25 font-medium text-white items-center justify-center'>{blogData.pageProps.pageProps.data.attributes.bannerSlider[currentIndex].title}</span>
                <h2 className='text-[32px] font-semibold text-white'>{blogData.pageProps.pageProps.data.attributes.bannerSlider[currentIndex].title}</h2>
              </div>
              <div className="flex gap-1">
                <span onClick={prevSlide} className='rounded-md p-1.5  bg-white items-center justify-center transition duration-300 hover:bg-[#F8EDED] cursor-pointer'>
                  <IoIosArrowBack className='text-[16px] text-red-600' />
                </span>
                <span onClick={nextSlide} className='rounded-md p-1.5  bg-white items-center justify-center transition duration-300 hover:bg-[#F8EDED] cursor-pointer'>
                  <IoIosArrowForward className='text-[16px] text-red-600' />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center w-[50%] ">
              {<img src={blogData.pageProps.pageProps.data.attributes.bannerSlider[currentIndex].imageUrl} className='w-full h-full object-contain' />}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full my-15 ">
            <div className="inline-flex items-center justify-center w-fit mb-15 bg-[#F3F3F5] rounded-xl">
              <div onClick={() => setCurrentFilter("Hamısı")} className={`inline-flex w-fit rounded-xl px-6 py-4.5 ${currentFilter != "Hamısı" ? " bg-[#F3F3F5] text-[#9796AC]" : " text-white bg-[#ec3342]"} cursor-pointer`}>Hamısı</div>

              {
                blogData.pageProps.pageProps.data.attributes.bannerSlider.map((data, id) => (
                  <div onClick={() => setCurrentFilter(data.title)} key={id} className={`inline-flex w-fit rounded-lg px-6 py-4.5 ${currentFilter === data.title ? " text-white bg-[#ec3342]" : " bg-[#F3F3F5] text-[#9796AC]"} bg-[#F3F3F5] text-[#9796AC] cursor-pointer`}>{data.title}</div>
                )
                )
              }
            </div>

            <div className="grid grid-cols-9 items-center justify-center gap-7 w-full">
              {blogData.pageProps.pageProps.blogs.filter((data) => currentFilter === "Hamısı" ? data : data.category.name === currentFilter)
                .map((data, id) => (
                  <div key={id} className="col-span-3 row-span-2 flex flex-col gap-4 w-full h-full overflow-hidden transition duration-300 hover:-translate-y-1  cursor-pointer ">
                    <img src={data.imageUrl} className='rounded-2xl object-cover w-full h-45' />
                    <span className='rounded-xl inline-flex w-25  bg-[#ec3342] text-white font-medium text-[14px] items-center justify-center'>{data.category.name}</span>
                    <p className='text-[#25282b] font-semibold text-[24px] leading-7'>{data.title}</p>
                  </div>

                ))
              }

            </div>

          </div>
          <div className="flex items-center justify-between w-full rounded-2xl bg-[#25282B] mb-15 relative">
            <div className="flex flex-col gap-8 p-10 w-[50%]">
              <h2 className='text-white font-semibold text-[32px]'>Star kart</h2>
              <p className='text-[16px] font-normal text-white'>Üstünlüklərlə dolu bu yeni kartla ürəyinizcə xərcləyin, əlavə heç nə ödəməyin.</p>
              <Link className='inline-flex items-center justify-center w-60 bg-white rounded-lg gap-2 py-4'>
                <span className='text-[16px] font-medium'>Daha ətraflı</span>
                <IoIosArrowForward />
              </Link>
            </div>
            <img src={blogData.pageProps.pageProps.data.attributes.adBanner.imageUrl} className='absolute  object-cover bottom-0 right-4 ' />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogsContent
