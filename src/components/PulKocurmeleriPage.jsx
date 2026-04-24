import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import newsData from '../NewsData/newsData.json'
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
      <div className="flex  items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col justify-center w-[75%] gap-7">
          <div className="flex flex-col justify-center  gap-7">
            <div className="flex gap-2 items-center">
              <Link to='/' className='text-[14px] text-[#6d7478] font-[400] p-[15px]'>Ana Səhifə</Link>
              <Link to='/currency-rates' className='text-[14px] text-[#25282b] font-[400] py-[15px]'>Pul köçürmələri</Link>
            </div>
            <div className="flex items-center justify-between w-full relative rounded-[10px] bg-[linear-gradient(98.65deg,_rgb(236,50,66)_0%,_rgb(153,0,0)_100%)]">
              <div className="flex flex-col gap-3 px-[72px] py-[96px] w-[60%]">
                <h2 className='text-[32px] text-white font-[600]'>Pul köçürmələri</h2>
                <p className='text-[16px] text-white font-[400]'>Kapital Bankın təklif etdiyi pul köçürmə xidməti ilə ölkədaxili və beynəlxalq pul köçürmələri et. Dünyanın istənilən ölkəsinə qısa müddətdə pul göndər.</p>
              </div>
              <img src={MoneyTransfersBg} className='absolute bottom-0 right-[40px] w-[400px] h-[300px] object-contain ' />
            </div>


            <div className="grid grid-cols-6 gap-6">
              <div className="group flex items-center justify-between col-span-3 row-span-3 overflow-hidden relative w-full h-[240px] rounded-[10px] bg-[#F9F9FA]">
                <div className="flex flex-col  justify-between h-full w-[50%] px-[24px] pt-[24px] pb-[34px]">
                  <div className="flex flex-col gap-4">
                    <h2 className='text-[24px] font-[500] text-[#222222]'>Zolotaya Korona</h2>
                    <p className='text-[14px] font-[300] text-[#222222]'>Ən qısa zamanda vəsaiti lazımı ünvana çatdırmaq üçün "Zolotaya Korona" var</p>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <Link className='cursor-pointer text-[16px] font-[400] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]'>
                      Daha ətraflı
                    </Link>
                    <GoArrowRight className='cursor-pointer text-[16px] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]' />
                  </div>
                </div>
                <img src={ZolotayaKorona} className='w-auto object-contain  absolute bottom-0 right-0 pointer-events-none' />
              </div>
              <div className="col-span-3 row-span-3 col-start-4 overflow-hidden relative w-full h-[240px] rounded-[10px] bg-[#F9F9FA]">
                <div className="flex flex-col  justify-between h-full w-[50%] px-[24px] pt-[24px] pb-[34px]">
                  <div className="flex flex-col gap-4">
                    <h2 className='text-[24px] font-[500] text-[#222222]'>Xəzri</h2>
                    <p className='text-[14px] font-[300] text-[#222222]'>Sürətli pul köçürmə sistemi</p>
                  </div>
                  <div className="flex gap-1 items-center group">
                    <Link className='text-[16px] font-[400] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]'>
                      Daha ətraflı
                    </Link>
                    <GoArrowRight className='text-[16px] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]' />
                  </div>
                </div>
                <img src={Xezri} className='w-auto object-contain  absolute bottom-0 right-0 pointer-events-none' />
              </div>
              <div className="col-span-3 row-span-3 row-start-4 overflow-hidden relative w-full h-[240px] rounded-[10px] bg-[#F9F9FA]">
                <div className="flex flex-col  justify-between h-full w-[50%] px-[24px] pt-[24px] pb-[34px]">
                  <div className="flex flex-col gap-4">
                    <h2 className='text-[24px] font-[500] text-[#222222]'>Western Union</h2>
                    <p className='text-[14px] font-[300] text-[#222222]'>Western Union sistemi dünyada ən iri pul köçürmə sistemi olaraq, bu sahədə liderdir.</p>
                  </div>
                  <div className="flex gap-1 items-center group">
                    <Link className='text-[16px] font-[400] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]'>
                      Daha ətraflı
                    </Link>
                    <GoArrowRight className='text-[16px] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]' />
                  </div>
                </div>
                <img src={WesternUnion} className='w-auto object-contain  absolute bottom-0 right-0 pointer-events-none' />
              </div>
              <div className="col-span-3 row-span-3 col-start-4 row-start-4 overflow-hidden relative w-full h-[240px] rounded-[10px] bg-[#F9F9FA]">
                <div className="flex flex-col  justify-between h-full w-[50%] px-[24px] pt-[24px] pb-[34px]">
                  <div className="flex flex-col gap-4">
                    <h2 className='text-[24px] font-[500] text-[#222222]'>Birbankla istənilən karta pul köçürün!</h2>
                    <p className='text-[14px] font-[300] text-[#222222]'>Artıq Birbankla telefonunuzdan istənilən bank kartına asanlıqla pul göndərə bilərsiniz.</p>
                  </div>
                  <div className="flex gap-1 items-center group">
                    <Link className='text-[16px] font-[400] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]'>
                      Daha ətraflı
                    </Link>
                    <GoArrowRight className='text-[16px] text-[#ec3342] transition duration-100 group-hover:text-[#B5202E]' />
                  </div>
                </div>
                <img src={Birbank} className='w-auto object-contain  absolute bottom-0 right-0 pointer-events-none' />
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
                          <p className='w-full pt-[4px] px-[24px] pb-[24px] text-[16px] font-[300] leading-[1.2] text-[#222222] bg-[#F3F3F5]'>
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
