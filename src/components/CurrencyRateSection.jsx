import React from 'react'
import { Link } from 'react-router-dom'
import newsData from '../NewsData/newsData.json'
import currencyRateBg from '../assets/CurrencyRates/currencyBg.svg'
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const CurrecyRateSection = () => {
  const faqData = [
    {
      "id": 1,
      "question": "Valyuta məzənnəsini haradan və necə öyrənə bilərəm?",
      "answer": "Valyuta məzənnəsini kapital bankın rəsmi saytından, birbank mobil tətbiqdən gündəlik öyrənə bilərsən. Ən aktual valyuta məzənnəsi adətən gün ərzində bir neçə dəfə yenilənir, buna görə əməliyyat etməzdən əvvəl mütləq son göstəricilərə baxmalısan."
    },
    {
      "id": 2,
      "question": "Bu günə olan valyuta məzənnəsini necə öyrənə bilərəm?",
      "answer": "Gündəlik olaraq yenilənən valyuta məzənnəsini Birbank-ın vebsaytı və mobil tətbiqi vasitəsilə öyrənə bilərsən."
    },
    {
      "id": 3,
      "question": "Valyuta kalkulyatoru necə işləyir?",
      "answer": "Valyuta kalkulyatoru seçdiyin məbləği cari məzənnəyə uyğun olaraq avtomatik hesablayır. Sadəcə məbləği və valyutanı seçərək dərhal nəticəni əldə edə bilərsən."
    },
    {
      "id": 4,
      "question": "Birbank-da valyuta mübadiləsi necə aparılır?",
      "answer": "Birbank tətbiqi və ya filiallar vasitəsilə valyuta mübadiləsi edə bilərsən. Tətbiq üzərindən əməliyyatlar daha sürətli və rahat şəkildə həyata keçirilir."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    }
    else {
      setActiveIndex(index)
    }
  }
  return (
    <>
      <div className="flex  items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col justify-center w-[75%] gap-7">
          <div className="flex flex-col justify-center  gap-7">
            <h2 className='text-[24px] text-[#25282b] font-[700] self-start'>{newsData.pageProps.messages.home.exchangeRate.exchangeRates}</h2>
            <div className="flex gap-2 items-center">
              <Link to='/' className='text-[14px] text-[#6d7478] font-[400] p-[15px]'>Ana Səhifə</Link>
              <Link to='/currency-rates' className='text-[14px] text-[#25282b] font-[400] py-[15px]'>Valyuta Məzənnəsi</Link>
            </div>
            <div className="flex items-center justify-between w-full relative rounded-[10px] bg-[linear-gradient(98.65deg,_rgb(236,50,66)_0%,_rgb(153,0,0)_100%)]">
              <div className="flex flex-col gap-3 px-[72px] py-[96px] w-[60%]">
                <h2 className='text-[32px] text-white font-[600]'>Valyuta məzənnəsi</h2>
                <p className='text-[16px] text-white font-[400]'>Azərbaycan Respublikasının Mərkəzi Bankı tərəfindən müəyyən edilən rəsmi gündəlik məzənnələr əsasında təqdim olunan ən son valyuta məzənnələri ilə tanış ola bilərsiniz. Daha ətraflı məlumat əldə etmək və sərfəli valyuta mübadiləsi imkanlarından yararlanmaq üçün sizə ən yaxın filialımıza müraciət etməyiniz tövsiyə olunur.</p>
              </div>
              <img src={currencyRateBg} className='absolute bottom-0 right-[40px] w-[400px] h-[300px] object-contain ' />
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full mt-[48px] mb-[32px] w-full items-center justify-center">
            <h2 className='text-left self-start text-[30px] text-[#222222] font-[600]'>Tez-tez verilən suallar</h2>
            <div className="flex flex-col  w-[80%]">
              {
                faqData.map((item, index) => {
                  return (
                    <div className="flex flex-col   border-b-[#E9EAEC]">
                      <div key={index} onClick={() => toggleFaq(index)} className=" flex  px-[12px] py-[16px] items-center justify-between border-b-1 border-b-[#E9EAEC] cursor-pointer">
                        <p className='text-[16px] text-[#222222]  font-[400]'>{item.question}</p>
                        <IoIosArrowDown className={`text-[16px]  text-[#222222] transform ${activeIndex === index ? "rotate-180" : ""}`} />
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[300px]" : "max-h-0"
                          }`}
                      >
                        <p className='w-full pt-[4px] px-[24px] pb-[24px] text-[16px] font-[300] text-[#222222] bg-[#F3F3F5]'>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrecyRateSection
