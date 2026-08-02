import { Link } from 'react-router-dom'
import blogData from '../APIDatas/blogData.json'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';
import '../input.css'
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
        <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
          <div className="flex flex-col w-full">
            <h2 className='text-[24px] font-bold text-[#25282b] my-4'>Bloq</h2>
            <div className="flex items-center  gap-2 my-3">
<Link className='text-[14px] p-3.75 text-[#6D7478]' to="/">Ana Səhifə   »</Link>              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Bloq</Link>
            </div>
          </div>
          <div  className="flex flex-col  justify-between h-full w-full overflow-hidden rounded-[10px] sm:flex-col md:flex-row">
            <div className="flex flex-col justify-between w-full p-6 sm:p-6  sm:w-full md:w-1/2 lg:w-1/2  md:p-12.5 lg:py-12 lg:px-18 bg-[#ec3342] gap-20 ">
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
            <div className="flex items-center justify-center h-full w-full sm:w-full md:w-1/2 lg:w-1/2 ">
              {<img src={blogData.pageProps.pageProps.data.attributes.bannerSlider[currentIndex].imageUrl} className='w-full self-center h-full object-cover' />}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full my-15 ">
            <div className="inline-flex items-center w-full  h-fit mb-15 bg-[#F3F3F5] rounded-xl whitespace-nowrap  hide-scrollbar overflow-x-auto md:justify-center md:w-fit md:overflow-x-hidden">
              <span onClick={() => setCurrentFilter("Hamısı")} className={`inline-flex w-fit rounded-xl px-6 py-3  ${currentFilter != "Hamısı" ? " bg-[#F3F3F5] text-[#9796AC]" : " text-white bg-[#ec3342]"} cursor-pointer`}>Hamısı</span>

              {
                blogData.pageProps.pageProps.data.attributes.bannerSlider.map((data, id) => (
                  <span onClick={() => setCurrentFilter(data.title)} key={id} className={`inline-flex w-fit rounded-lg px-6 py-3  ${currentFilter === data.title ? " text-white bg-[#ec3342]" : " bg-[#F3F3F5] text-[#9796AC]"} bg-[#F3F3F5] text-[#9796AC] cursor-pointer`}>{data.title}</span>
                )
                )
              }
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-7 w-full">
              {blogData.pageProps.pageProps.blogs.filter((data) => currentFilter === "Hamısı" ? data : data.category.name === currentFilter)
                .map((data, id) => (
                  <div key={id} className="flex flex-col gap-4 w-full h-full overflow-hidden transition duration-300 hover:-translate-y-1  cursor-pointer ">
                    <img src={data.imageUrl} className='rounded-2xl object-cover w-full h-45' />
                    <span className='rounded-xl inline-flex w-25  bg-[#ec3342] text-white font-medium text-[14px] items-center justify-center'>{data.category.name}</span>
                    <p className='text-[#25282b] font-semibold text-[18px] sm:text-[18px] sm:leading-5 md:text-[24px] lg:text-[24px] md:leading-7'>{data.title}</p>
                  </div>

                ))
              }

            </div>

          </div>
          <div className="flex flex-col items-center justify-between w-full rounded-2xl bg-[#25282B] mb-15 relative sm:flex-col md:flex-col lg:flex-row">
            <div className="flex flex-col gap-6 p-10 w-full sm:w-full lg:w-1/2">
              <h2 className='text-white font-semibold text-[20px] sm:text-[24px] md:text-[32px]'>Star kart</h2>
              <p className='  font-normal text-white text-[14px]  sm:text-[16px]'>Üstünlüklərlə dolu bu yeni kartla ürəyinizcə xərcləyin, əlavə heç nə ödəməyin.</p>
              <Link className='inline-flex items-center justify-center w-60 bg-white rounded-lg gap-2 py-4'>
                <span className='text-[16px] font-medium'>Daha ətraflı</span>
                <IoIosArrowForward />
              </Link>
            </div>
            <img src={blogData.pageProps.pageProps.data.attributes.adBanner.imageUrl} className='pt-10 pr-10  object-cover self-end bottom-0 right-4 w-65  sm:self-end sm:w-65 sm:h-55 md:w-65 lg:absolute lg:w-95 lg:h-83 lg:self-center' />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogsContent
