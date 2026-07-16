import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
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
      <div className="flex w-full items-center justify-center selection:bg-[#B3D4FC] mb-[60px]">
        <div className="flex flex-col  gap-4 w-[75%]">
          <h2 className='text-[24px] font-[700] text-[#25282b]'>Necə etməli</h2>
          <div className="flex gap-2 mb-[50px]">
            <Link
              className='text-[14px] text-[#7B7478] flex gap-1 items-center justify-center p-[15px]'
              to="/"
            >
              Ana Səhifə
            </Link>
            <span className='text-[14px] text-[#22282b] p-[15px] pr-0'>
              {data.pageProps.messages.howTo.breadcrumbsData}
            </span>
          </div>
          <div onClick={() => setFaqStatus(!faqStatus)} className={`flex flex-col gap-4 justify-between border-b-2 border-t-2 border-b-[#E7E8EA] border-t-[#E7E8EA] px-[24px] py-[20px] ${faqStatus ? "bg-[#E7E8EA]" : "bg-white"} `}>
            <div className="cursor-pointer flex items-center justify-between w-full">
              <p className={`text-[16px] ${faqStatus ? "text-[#EC3342]" : "text-[#222222]"}  font-[700]`}>
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
                  <div className="flex flex-col gap-3 px-[22px] pt-[4px] pb-[16px]">
                    <p className='text-[16px] text-[#222222] font-normal leading-[1.1]'>Aşağıda qeyd olunan bir neçə sadə addımla Birbank profilinizi rahatlıqla silə bilərsiniz. Profili Birbank tətbiqi vasitəsilə silmək mümkün olmadıqda 196 Məlumat Mərkəzinə müraciət edə bilərsiniz.</p>
                  </div>

                  <div className="grid grid-cols-6  gap-x-8 gap-y-12">
                    <div className="col-span-2 row-span-6 flex flex-col gap-4">
                      <img src={HowTo1} />
                      <div className="flex gap-3 px-[10px]">
                        <span className='text-[24px] font-[700] text-[#BC0C19]'>1</span>
                        <p className='font-[700] text-[#222222] text-[16px]'>Tətbiqin əsas səhifəsindən “Daha çox” bölməsinə keçin.</p>
                      </div>
                    </div>
                    <div className="col-span-2 row-span-6 col-start-3 flex flex-col gap-4">                <img src={HowTo2} />
                      <div className="flex gap-3 px-[10px]">
                        <span className='text-[24px] font-[700] text-[#BC0C19]'>2</span>
                        <p className='font-[700] text-[#222222] text-[16px]'>
                          Açılan səhifədə “Tənzimləmələr”i seçin.</p>
                      </div>
                    </div>
                    <div className="col-span-2 row-span-6 col-start-5 flex flex-col gap-4">
                      <img src={HowTo3} />
                      <div className="flex gap-3 px-[10px]">
                        <span className='text-[24px] font-[700] text-[#BC0C19]'>3</span>
                        <p className='font-[700] text-[#222222] text-[16px]'>“Tənziləmələr” səhifəsində “Profili sil” yazısını klikləyin.</p>
                      </div>
                    </div>
                    <div className="col-span-2 row-span-6 row-start-7 flex flex-col gap-4">
                      <img src={HowTo4} />
                      <div className="flex gap-3 px-[10px]">
                        <span className='text-[24px] font-[700] text-[#BC0C19]'>4</span>
                        <p className='font-[700] text-[#222222] text-[16px]'>
                          “Profili sil” düyməsini kliklədikdə təsdiq pəncərəsi açılacaq.</p>
                      </div>

                    </div>
                    <div className="col-span-2 row-span-6 col-start-3 row-start-7 flex flex-col gap-4">
                      <img src={HowTo5} />
                      <div className="flex gap-3 px-[10px]">
                        <span className='text-[24px] font-[700] text-[#BC0C19]'>5</span>
                        <p className='font-[700] text-[#222222] text-[16px]'>Siz silinməni təsdiqlədikdə profiliniz və ona daxil olan məlumatlar Birbank tətbiqindən tamamilə silinəcək.</p>
                      </div>
                    </div>
                    <div className="col-span-2 row-span-6 col-start-5 row-start-7 flex flex-col gap-2">
                      <img src={HowTo6} />
                      <div className="flex gap-3 px-[10px]">
                        <span className='text-[24px] font-[700] text-[#BC0C19]'>6</span>
                        <p className='font-[700] text-[#222222] text-[16px]'>Profiliniz tamamilə silindi. Tətbiqə daxil olmaq üçün yenidən qeydiyyatdan keçməyiniz kifayətdir. Sizi hər zaman Birbank-da görməyə şad olarıq!</p>
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
