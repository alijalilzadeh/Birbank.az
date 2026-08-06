import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { Helmet } from 'react-helmet-async';
import newsData from '../APIDatas/newsData.json'
import currencyRateBg from '../assets/CurrencyRates/currencyBg.svg'
import MoneyTransfersBg from '../assets/Pul-Kocurmeleri/money_transfers-bg.svg'
import ZolotayaKorona from '../assets/Pul-Kocurmeleri/zolotoya_korona.svg'
import Xezri from '../assets/Pul-Kocurmeleri/xezri.svg'
import WesternUnion from '../assets/Pul-Kocurmeleri/western-union.svg'
import Birbank from '../assets/Pul-Kocurmeleri/birbank.svg'
const PulKocurmeleriPage = () => {
  const faqData = [
    {
      "id": 1,
      "question": "Birbank vasitəsilə pul köçürmə prosesi necə işləyir?",
      "answer": "Birbank mobil tətbiqi və ya bank filiallarında müvafiq sistemi (Zolotaya Korona, Xəzri və s.) seçib, alıcı məlumatlarını daxil edərək ödənişi tamamlayırsınız. Köçürmə orta hesabla 5 dəqiqə ərzində həyata keçirilir. Ətraflı şərtlər tətbiqin müvafiq bölməsində qeyd olunub."
    },
    {
      "id": 2,
      "question": "Onlayn pul göndərmə təhlükəsizdirmi?",
      "answer": "Bütün əməliyyatlar müasir şifrələmə və istifadəçi identifikasiyası standartları ilə qorunur. Kart detalları sistemdə saxlanılmır. Potensial risklərə qarşı əlavə təhlükəsizlik xüsusiyyətlərini (məsələn, 3D Secure) tətbiqdə aktivləşdirə bilərsiniz."
    },
    {
      "id": 3,
      "question": "Hansı ölkələrə pul köçürmək mümkündür?",
      "answer": "Zolotaya Korona ilə Rusiya, Türkiyə, MDB ölkələri və Avropa-Asiya regionuna; Western Union ilə dünya üzrə 200-dən çox ölkəyə pul göndərmək olar. Xəzri sistemi isə yalnız Azərbaycan daxilində fəaliyyət göstərir. Tam siyahı tətbiqdəki sistem səhifələrində mövcuddur."
    },
    {
      "id": 4,
      "question": "Komissiya nə qədərdir və necə hesablanır?",
      "answer": "Komissiya seçilən sistemə, məbləğə və valyutaya görə dəyişir (məsələn, 'Xəzri' sistemində 0,8%). Dəqiq rəqəmlər tətbiqdə real vaxt rejimində hesablanır və ödəniş təsdiqlənməzdən əvvəl ekranda göstərilir."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null)

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
      <Helmet>
        <title>Xaricdən pul köçürmək üçün rahat və sürətli üsullar təklif olunur</title>
        <meta
          name="description"
          content="Ana səhifənin təsviri"
        />
      </Helmet>
      <div className="flex  items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col justify-center w-[95%] sm:w-[65%] md:w-[95%] lg:w-[75%] gap-7">
          <div className="flex flex-col justify-center  gap-7">
            <div className="flex gap-2 items-center">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
              <Link to='/pul-kocurmeleri' className='text-[14px] text-[#25282b] font-normal py-3.75'>Pul köçürmələri</Link>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6 sm:flex-col md:flex-col md:gap-6 lg:flex-row lg:gap-0 items-center justify-between w-full relative rounded-[10px] bg-[linear-gradient(98.65deg,rgb(236,50,66)_0%,rgb(153,0,0)_100%)]">
              <div className="flex flex-col gap-3 pt-12  pl-4 sm:pt-12 sm:pl-4 lg:px-18 lg:py-24 w-full sm:w-full md:w-full lg:w-[60%]">
                <h2 className='text-[32px] text-white font-semibold'>Pul köçürmələri</h2>
                <p className='text-[16px] text-white font-normal'>Kapital Bankın təklif etdiyi pul köçürmə xidməti ilə ölkədaxili və beynəlxalq pul köçürmələri et. Dünyanın istənilən ölkəsinə qısa müddətdə pul göndər.</p>
              </div>
              <img src={MoneyTransfersBg} className='lg:absolute bottom-0 right-10 w-94 h-75 sm:w-70 sm:h-75 lg:w-103 lg:h-75 object-contain ' />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="group flex items-center justify-between overflow-hidden relative w-full h-60 rounded-[10px] bg-[#F9F9FA]">
                <div className="flex flex-col  justify-between h-full w-[65%] sm:w-[65%] lg:w-[50%] px-6 pt-6 pb-8.5">
                  <div className="flex flex-col gap-4">
                    <h2 className='text-[24px] font-medium text-[#222222]'>Zolotaya Korona</h2>
                    <p className='text-[14px] font-light text-[#222222]'>Ən qısa zamanda vəsaiti lazımı ünvana çatdırmaq üçün "Zolotaya Korona" var</p>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <Link className='cursor-pointer text-[16px] font-normal text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]'>
                      Daha ətraflı
                    </Link>
                    <GoArrowRight className='cursor-pointer text-[16px] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]' />
                  </div>
                </div>
                <img src={ZolotayaKorona} className='w-auto object-contain  absolute bottom-0 right-0 pointer-events-none' />
              </div>
              <div className=" overflow-hidden relative w-full h-60 rounded-[10px] bg-[#F9F9FA]">
                <div className="flex flex-col  justify-between h-full w-[65%] sm:w-[65%] lg:w-[50%] px-6 pt-6 pb-8.5">
                  <div className="flex flex-col gap-4">
                    <h2 className='text-[24px] font-medium text-[#222222]'>Xəzri</h2>
                    <p className='text-[14px] font-light text-[#222222]'>Sürətli pul köçürmə sistemi</p>
                  </div>
                  <div className="flex gap-1 items-center group">
                    <Link className='text-[16px] font-normal text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]'>
                      Daha ətraflı
                    </Link>
                    <GoArrowRight className='text-[16px] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]' />
                  </div>
                </div>
                <img src={Xezri} className='w-auto object-contain  absolute bottom-0 right-0 pointer-events-none' />
              </div>
              <div className=" overflow-hidden relative w-full h-60 rounded-[10px] bg-[#F9F9FA]">
                <div className="flex flex-col  justify-between h-full w-[65%] sm:w-[65%] lg:w-[50%] px-6 pt-6 pb-8.5">
                  <div className="flex flex-col gap-4">
                    <h2 className='text-[24px] font-medium text-[#222222]'>Western Union</h2>
                    <p className='text-[14px] font-light text-[#222222]'>Western Union sistemi dünyada ən iri pul köçürmə sistemi olaraq, bu sahədə liderdir.</p>
                  </div>
                  <div className="flex gap-1 items-center group">
                    <Link className='text-[16px] font-normal text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]'>
                      Daha ətraflı
                    </Link>
                    <GoArrowRight className='text-[16px] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]' />
                  </div>
                </div>
                <img src={WesternUnion} className='w-auto object-contain  absolute bottom-0 right-0 pointer-events-none' />
              </div>
              <div className=" overflow-hidden relative w-full h-60 rounded-[10px] bg-[#F9F9FA]">
                <div className="flex flex-col  justify-between h-full w-[65%] sm:w-[65%] lg:w-[50%] px-6 pt-6 pb-8.5">
                  <div className="flex flex-col gap-4">
                    <h2 className='text-[24px] font-medium text-[#222222]'>Birbankla istənilən karta pul köçürün!</h2>
                    <p className='text-[14px] font-light text-[#222222]'>Artıq Birbankla telefonunuzdan istənilən bank kartına asanlıqla pul göndərə bilərsiniz.</p>
                  </div>
                  <div className="flex gap-1 items-center group">
                    <Link className='text-[16px] font-normal text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]'>
                      Daha ətraflı
                    </Link>
                    <GoArrowRight className='text-[16px] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]' />
                  </div>
                </div>
                <img src={Birbank} className='w-auto object-contain  absolute bottom-0 right-0 pointer-events-none' />
              </div>
            </div>

            <div className="flex flex-col gap-8 w-full mt-12 mb-8 items-center justify-center">
              <h2 className='text-left self-start text-[30px] text-[#222222] font-semibold'>Tez-tez verilən suallar</h2>
              <div className="flex flex-col   w-full sm:w-full  md:w-[80%]">
                {
                  faqData.map((item, index) => {
                    return (
                      <div className="flex flex-col   border-b-[#E9EAEC]">
                        <div key={index} onClick={() => toggleFaq(index)} className=" flex  px-3 py-4 items-center justify-between border-b border-b-[#E9EAEC] cursor-pointer">
                          <p className='text-[16px] text-[#222222]  font-normal'>{item.question}</p>
                          <IoIosArrowDown className={`text-[16px]  text-[#222222] transform ${activeIndex === index ? "rotate-180" : ""}`} />
                        </div>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-75" : "max-h-0"
                            }`}
                        >
                          <p className='w-full pt-1 px-6 pb-6 text-[16px] font-light leading-[1.2] text-[#222222] bg-[#F3F3F5]'>
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
      </div>
    </>
  )
}

export default PulKocurmeleriPage
