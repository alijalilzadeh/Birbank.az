import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import Footer from './Footer';
const EmanetTeminatliKredit = () => {
  const category = [
    {
      type: 'Şərtlər'
    },
    {
      type: 'Sənədlər'
    },
    {
      type: 'Tələblər'
    }
  ]

  const FAQdata = [
    {
      id: 1,
      question: "Əmanət təminatlı kredit nədir?",
      answer: "Əmanət təminatlı kredit sizə daha aşağı faiz dərəcəli kredit əldə etmək imkanı verir. Kapital Bankda depozitə yerləşdirən müştərilər depozitin maksimum 90% - i qədərində nağd kredit əldə edə bilərlər. Bu kredit növü sizə aşağı faiz, yüksək kredit məbləği və uzunmüddətli ödəniş imkanı verir."
    },

    {
      id: 2,
      question: "Əmanət təminatlı kredit üzrə FİFD nə qədərdir?",
      answer: "Manat valyutası üzrə yerləşdirilən depozitlərdə:Aylıq: FİFD min. 13,2%- max. 26.3% Müddətin sonunda: FİFD min. 13,7% - max. 27,3% Dollar valyutası üzrə yerləşdirilən depozitlərdə:Aylıq: FİFD min. 6.9% - max. 18.9% Müddətin sonunda: FİFD min. 7.2% - max. 19,2%"
    },

    {
      id: 3,
      question: "İllik faiz dərəcəsi",
      answer: "Əmanət ətminatlı kreditlər üçün illik faiz dərəcəsi milli valyuta üzrə qoyulan depozitlər üzrə əmanət faizi + 5%, xarici valyutada olan depozitlər üzrə isə əmanət faizi +4% təşkil edir.​"
    },

    {
      id: 4,
      question: "Əmanət təminatlı krediti almaq üçün hansı sənədlər tələb olunur?",
      answer: "Əmanət təminatlı krediti əldə etmək üçün tək şəxsiyyət vəsiqəsiylə banka yaxınlaşmağınız kifayətdir, hərbiçilərdən isə əlavə olaraq hərbi bilet tələb olunur. Xarici vətəndaş şəxsiyyəti təsdiq edən sənəd gətirməklə kredit üçün müraciəti edə bilərlər."
    },
    {
      id: 5,
      question: "Əmanət təminatlı krediti almaq üçün tələb olunan keyfiyyətlər hansılardır?",
      answer: "Krediti əldə etmək üçün tələb müştərinin 18 yaşdan yuxarı olması və Kapital Bankda 'Kapital' depozitinə malik olmasıdı vacibdir. Kredit əldə etmək üçün iş yeri və qeydiyyat tələbi yoxdur. Kreditə müraciət etmək üçün online sifariş formasını doldurmağınız kifayətdir"
    }
  ]

  const documentAndCondition = [
    {
      type: 'Sənədlər',
      desc: [
        {
          p: 'Şəxsiyyət vəsiqəsi',
        },

        {
          p: 'Hərbçilər üzrə əlavə olaraq hərbçinin şəxsi vəsiqəsi',
        },

        {
          p: 'Xarici vətəndaşlar üzrə şəxsiyyəti təsdiq edən sənəd',
        }
      ]
    },
    {
      type: 'Tələblər',
      desc: [
        {
          p: 'Yaş həddi: min. 18 yaş',
        },

        {
          p: 'Qeydiyyat: tələb yoxdur',
        },

        {
          p: 'İş yeri: tələb yoxdur',
        },
        {
          p: 'Müştərinin Birbank-da əmanətin olması',
        }
      ]
    }
  ]

  const [selectedCategory, setSelectedCategory] = useState('Şərtlər')
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    }
    else {
      setActiveIndex(index)
    }
  }

  const filteredData = documentAndCondition.find(item=> item.type === selectedCategory)
  console.log(filteredData)
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Əmanət təminatlı kredit ilə aşağı faizlə kreditə rahat çatın</title>
        <meta
          name="description"
          content="Ana səhifənin təsviri"
        />
      </Helmet>
      <Navbar />
      <SecondaryNavbar />
      <>
        <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
          <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
            <div className="flex flex-col w-full">
              <div className="flex gap-2 my-3">
                <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə   »</Link>
                <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0 pointer-events-none' reloadDocument>Əmanət təminatlı kredit</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full bg-[linear-gradient(98.65deg,rgb(236,50,66)_0%,rgb(153,0,0)_100%)] rounded-[10px] relative overflow-hidden lg:flex-row">
              <div className="flex flex-col w-full gap-5 px-4 pt-12 lg:py-12 lg:px-18 lg:w-[70%]">
                <h2 className='text-[30px] font-semibold text-white leading-10 lg:text-[32px]'>Əmanət təminatlı kredit</h2>
                <p className='text-[16px] text-white font-normal '>Bankımızda “Kapital depoziti” üzrə depozit yerləşdirmiş müştərilərin istəyinə əsasən əmanət məbləğinin maksimum 90%-i həcmində, ən azı 500 AZN/USD olmaqla nağd kredit ayrıla və ya kartda kredit xətti açıla bilər.</p>
              </div>
              <div className="flex items-center justify-center w-full mt-10  lg:w-[50%] lg:m-0">
                <img src="https://birbank.az/file/upon_request_ffb0a1999b.png" className='w-80 object-cover flex self-end' alt="BirPay" />
              </div>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <div className="flex items-start w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
              <h2 className='text-[24px] font-semibold mt-12 mb-7.5 text-[#333333] leading-10 md:text-[30px]'>Bilmək lazımdır</h2>
            </div>
            <div className="flex flex-col w-full gap-8 items-center justify-center p-4 sm:p-4 md:p-6 mb-10 bg-[#F9F9FA]">
              <div className="inline-flex items-center justify-center w-fit ">
                {
                  category.map((item, id) => (
                    <span onClick={() => setSelectedCategory(item.type)} className={`cursor-pointer py-2 ${selectedCategory === item.type ? "text-white bg-[#25282B] rounded-lg" : "text-[#9496AC]   bg-white"}  inline-flex w-fit text-[14px] px-4 font-normal lg:text-[16px]`}>{item.type}</span>
                  ))
                }
              </div>
              {
                selectedCategory === 'Şərtlər' ? (
                  <>
                    <div className="flex flex-col items-start justify-between gap-1 w-full sm:w-[75%] md:w-full lg:w-[75%] lg:flex-col">
                      <div className="flex flex-col gap-4 w-full items-start justify-center">
                        <div className={`flex flex-col w-full items-start justify-start rounded-sm`}>
                          <h2 className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-semibold text-start'>Minimum kredit məbləği</h2>
                          <span className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-light text-start'>500 AZN/USD</span>
                        </div>

                        <div className={`flex flex-col w-full items-start justify-start rounded-sm`}>
                          <h2 className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-semibold text-start'>Maksimum kredit məbləği</h2>
                          <span className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-light text-start'>Əmanət məbləğinin 90%-i</span>
                        </div>

                        <div className={`flex flex-col w-full items-start justify-start rounded-sm`}>
                          <h2 className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-semibold text-start'>Kredit xəttinin müddəti</h2>
                          <span className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-light text-start'>Əmanət müddətinin bitmə tarixindən 1 ay əvvələ kimi</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 w-full items-start justify-center">
                        <div className={`flex flex-col w-full items-start justify-start rounded-sm`}>
                          <h2 className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-semibold text-start'>Kreditin müddəti</h2>
                          <span className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-light text-start'>Əmanət müddətinin bitmə tarixindən əvvəlki iş gününə kimi</span>
                        </div>

                        <div className={`flex flex-col w-full items-start justify-start rounded-sm`}>
                          <h2 className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-semibold text-start'>İllik faiz dərəcəsi</h2>
                          <span className='w-full text-[#25282b] text-[14px] lg:text-[16px] font-light text-start'>AZN əmanətlər üzrə: +5%; USD əmanətlər üzrə: +4%</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex  items-start justify-start gap-1 w-full sm:w-[75%] md:w-full lg:w-[75%]">
                      <div className="flex flex-col gap-5 w-full items-start justify-start">
                        {
                            filteredData.desc.map((it,id)=> (
                              <p key={id} className='font-light text-[14px] lg:text-[16px] text-[#25282b]'>{it.p}</p>
                            ))
                        }
                      </div>
                    </div>
                  </>
                )
              }
            </div>
            <div className="flex flex-col items-center justify-center gap-1 mb-10 w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
              <h2 className='text-[24px] font-semibold w-full text-[#333333] mb-5 text-start leading-10 md:text-[30px] '>Əmanət təminatlı kredit</h2>
              <div className="flex flex-col w-full items-center justify-center">
                {FAQdata.map((fil, faqIndex) => (
                  <div key={faqIndex} className="w-[85%] md:w-[85%] lg:w-[75%]">

                    <div
                      onClick={() => toggleFaq(faqIndex)}
                      className="flex border-b-2 border-[#E9EAEC] w-full px-3 py-4 justify-between cursor-pointer"
                    >
                      <p className="text-[16px] text-[#222222] font-normal w-[90%] lg:w-full">
                        {fil.question}
                      </p>

                      <IoIosArrowDown
                        className={`text-[16px] text-[#222222] transition duration-300 transform ${activeIndex === faqIndex
                          ? "rotate-180"
                          : ""
                          }`}
                      />
                    </div>

                    <div
                      className={`overflow-hidden w-full flex items-center justify-center transition-all duration-300 ${activeIndex === faqIndex
                        ? "max-h-75"
                        : "max-h-0"
                        }`}
                    >
                      <p className="w-full px-8 py-10 text-[16px] font-light text-[#222222] bg-[#F3F3F5]">
                        {fil.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </div>
  )
}

export default EmanetTeminatliKredit
