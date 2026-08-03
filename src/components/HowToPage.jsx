import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { Helmet } from 'react-helmet-async';
import HowTo1 from '../assets/HowTo/how-to1.jpg'
import HowTo2 from '../assets/HowTo/how-to2.jpg'
import HowTo3 from '../assets/HowTo/how-to3.png'
import HowTo4 from '../assets/HowTo/how-to4.png'
import HowTo5 from '../assets/HowTo/how-to5.png'
import HowTo6 from '../assets/HowTo/how-to6.jpg'
import data from '../ApIDatas/newsData.json'
const HowToPage = () => {
  const [faqStatus, setFaqStatus] = useState(false);
  return (
    <>
      <Helmet>
        <title>Necə etməli | Birbank</title>
        <meta
          name="description"
          content="Ana səhifənin təsviri"
        />
      </Helmet>
      <div className="flex w-full items-center justify-center selection:bg-[#B3D4FC] mb-15">
        <div className="flex flex-col  gap-4 w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
          <h2 className='text-[24px] font-bold text-[#25282b]'>Necə etməli</h2>
          <div className="flex gap-2 mb-12.5">
            <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
            <span className='text-[14px] text-[#22282b] p-3.75 pr-0'>
              {data.pageProps.messages.howTo.breadcrumbsData}
            </span>
          </div>
          <div onClick={() => setFaqStatus(!faqStatus)} className={`flex flex-col gap-4 justify-between border-b-2 border-t-2 border-b-[#E7E8EA] border-t-[#E7E8EA] px-6 py-5 ${faqStatus ? "bg-[#E7E8EA]" : "bg-white"} `}>
            <div className="cursor-pointer flex items-center justify-between w-full">
              <p className={`text-[16px] ${faqStatus ? "text-[#EC3342]" : "text-[#222222]"}  font-bold`}>
                Birbank profilini necə silmək olar?
              </p>
              {
                faqStatus ? <FiMinus className='text-[16px] text-[#EC3342]' />
                  : <FaPlus className='text-[16px] text-[#EC3342]' />
              }
            </div>
            {
              faqStatus &&
              (
                <>
                  <div className="flex flex-col gap-3 px-5.5-[4px] pb-4">
                    <p className='text-[16px] text-[#222222] font-normal leading-[1.1]'>Aşağıda qeyd olunan bir neçə sadə addımla Birbank profilinizi rahatlıqla silə bilərsiniz. Profili Birbank tətbiqi vasitəsilə silmək mümkün olmadıqda 196 Məlumat Mərkəzinə müraciət edə bilərsiniz.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-12 justify-items-center w-full">
                    <div className="flex flex-col gap-4 w-[64%] sm:w-[64%] md:w-[95%] lg:w-full">
                      <img src={HowTo1} className='w-full object-cover flex self-center' />
                      <div className="flex gap-3">
                        <span className='text-[24px] font-bold text-[#BC0C19]'>1</span>
                        <p className='font-bold text-[#222222] text-[16px]'>Tətbiqin əsas səhifəsindən “Daha çox” bölməsinə keçin.</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 w-[64%] sm:w-[64%] md:w-[95%] lg:w-full">
                      <img src={HowTo2} className='w-full object-cover flex self-center' />
                      <div className="flex gap-3">
                        <span className='text-[24px] font-boldtext-[#BC0C19]'>2</span>
                        <p className='font-bold text-[#222222] text-[16px]'>
                          Açılan səhifədə “Tənzimləmələr”i seçin.</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 w-[64%] sm:w-[64%] md:w-[95%] lg:w-full">
                      <img src={HowTo3} className='w-full object-cover flex self-center' />
                      <div className="flex gap-3">
                        <span className='text-[24px] font-bold text-[#BC0C19]'>3</span>
                        <p className='font-bold text-[#222222] text-[16px]'>“Tənziləmələr” səhifəsində “Profili sil” yazısını klikləyin.</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 w-[64%] sm:w-[64%] md:w-[95%] lg:w-full">
                      <img src={HowTo4} className='w-full object-cover flex self-center' />
                      <div className="flex gap-3">
                        <span className='text-[24px] font-bold text-[#BC0C19]'>4</span>
                        <p className='font-bold text-[#222222] text-[16px]'>
                          “Profili sil” düyməsini kliklədikdə təsdiq pəncərəsi açılacaq.</p>
                      </div>

                    </div>
                    <div className="flex flex-col gap-4 w-[64%] sm:w-[64%] md:w-[95%] lg:w-full">
                      <img src={HowTo5} className='w-full object-cover flex self-center' />
                      <div className="flex gap-3">
                        <span className='text-[24px] font-bold text-[#BC0C19]'>5</span>
                        <p className='font-bold text-[#222222] text-[16px]'>Siz silinməni təsdiqlədikdə profiliniz və ona daxil olan məlumatlar Birbank tətbiqindən tamamilə silinəcək.</p>
                      </div>
                    </div>
                    <div className="flex flex-col  w-[64%] sm:w-[64%] md:w-[95%] lg:w-full gap-2">
                      <img src={HowTo6} className='w-full object-cover flex self-center' />
                      <div className="flex gap-3">
                        <span className='text-[24px] font-bold text-[#BC0C19]'>6</span>
                        <p className='font-bold text-[#222222] text-[16px]'>Profiliniz tamamilə silindi. Tətbiqə daxil olmaq üçün yenidən qeydiyyatdan keçməyiniz kifayətdir. Sizi hər zaman Birbank-da görməyə şad olarıq!</p>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default HowToPage
