import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'
const Avans = () => {
  const faqData = [
    {
      "id": 1,
      "question": "Avans kreditinə kimlər müraciət edə bilər?",
      "answer": "Kapital Bank-da əməkhaqqı və ya təqaüd kartı olan seçilmiş müştərilər 400 azn-dək Avans krediti əldə edə bilər."
    },
    {
      "id": 2,
      "question": "Avans krediti götürmək üçün yaş məhdudiyyəti varmı?",
      "answer": "Var, müştərinin yaşı maksimal 80 yaşadək olmalıdır."
    },
    {
      "id": 3,
      "question": "Avans kreditini haradan əldə edə bilərəm?",
      "answer": "Avans məhsulunu Birbank tətbiqi və ya ATM vasitəsilə əldə edə bilərsiniz. (yazılı sənədləşmə tələb olunmadan rəsmiləşdirilir."
    },
    {
      "id": 4,
      "question": "İstifadə və ödəmə müddəti nə qədərdir?",
      "answer": "Avans əldə etdikdən 40 gün ərzində əldə edilmiş məbləği geri ödəməlisiniz. Kartınızda vəsait olduqda məbləğ hesabınızdan birbaşa silinəcəkdir. "
    },
    {
      "id": 5,
      "question": "Maksimal məbləğ nə qədərdir?",
      "answer": "Avans kreditlə müştərilər maksimal  400 AZN kredit götürə bilərlər."
    },
    {
      "id": 6,
      "question": "Avans ilə birlikdə digər kredit də olduqda ilk olaraq hansı kreditin ödənişi silinir?",
      "answer": "Müştərinin eyni anda \"Gündəlik tələbat\" krediti ödənişi və Avans krediti üzrə aktiv borcu olarsa, əməkhaqqı və ya təqaüd kartına mədaxil olunan məbləğ ilk olaraq “Gündəlik tələbat” kreditinin, daha sonra isə Avans krediti üzrə borcun ödənilməsinə yönəldiləcək. Məbləğ Avans krediti üzrə borcun ödənilməsinə kifayət etmədikdə qalıq məbləğ müştəri tərəfindən ödənilməlidir."
    },
    {
      "id": 7,
      "question": "Avans kreditində komissiya necə hesablanır?",
      "answer": "Götürülən avans məbləğinin 7%-i komissiya olaraq nəzərdə tutulur. Avansdan ilk istifadə tarixindən etibarən kart hesabına növbəti əməkhaqqı mədaxili zamanı mədaxil olunan məbləğ ilk olaraq hesablanmış komissiyanın, daha sonra isə əsas kredit borcun ödənişinə yönləndirilir."
    },
    {
      "id": 8,
      "question": "Kredit ödənişi gecikərsə, bu zaman komissiyalar necə hesablanır?",
      "answer": "Avans kreditindən ilk istifadə tarixindən sonrakı 40 gün ərzində borc məbləği tam olaraq ödənilməzsə 40-cı gün əməliyyat gününün sonunda qalıq borc məbləğinə intervala uyğun olaraq yenidən komissiya hesablanır (hər interval üzrə ilk 5 AZN-ə qədər borc məbləği hesablanma zamanı yeni intervaldan istifadə kimi nəzərə alınmır) və borc gecikmiş hesab olunur, növbəti komissiya hesablanma tarixləri müvafiq tarixdən sonrakı hər 30-cü gün müəyyən olunur (yuxarı intervalın komissiyası əsas götürülür) və müvafiq komissiya 6 dəfə hesablanılır. "
    },
    {
      "id": 9,
      "question": "Avans kreditində hər hansı əlavə şərtlər var?",
      "answer": "Müraciət edən müştərinin məlumatları ilk öncə AKB və MKR sisteminə göndərilir. Digər şərtlər isə bankın daxili qaydalarına uyğun tənzimlənir."
    },
    {
      "id": 10,
      "question": "Avans krediti götürmək üçün hansı sənədlər tələb olunur?",
      "answer": "Avans krediti götürmək üçün əlavə hər hansı sənəd tələb olunmur."
    },

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


    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar />
      <>
        <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
          <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
            <div className="flex flex-col w-full ">
              <div className="flex gap-2 my-3">
                <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/">Ana Səhifə</Link>
                <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Avans</Link>
              </div>
              <div className="flex flex-col justify-between w-full bg-[linear-gradient(98.65deg,#7D0018_0%,#CA154A_100%)] rounded-[10px] relative overflow-hidden sm:flex-col lg:flex-row">
                <div className="flex flex-col  justify-center px-4 pb-0 pt-12   gap-10 w-full sm:w-full lg:py-12 lg:px-18 lg:w-[70%]">
                  <h2 className='text-[30px] font-semibold text-white leading-10  lg:text-[32px] '>Təcili pula ehtiyacınız varsa, rahatlıqla Avans götürün!</h2>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col ">
                      <span className='text-[18px] text-white font-semibold'>7%</span>
                      <p className='text-[14px] font-normal text-white'>Komissiya</p>
                    </div>

                    <div className="flex flex-col ">
                      <span className='text-[18px] text-white font-semibold'>400 AZN</span>
                      <p className='text-[14px] font-normal text-white'>Maksimum məbləğ</p>
                    </div>

                    <div className="flex flex-col ">
                      <span className='text-[18px] text-white font-semibold'>35 ay</span>
                      <p className='text-[14px] font-normal text-white'>Müddət</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-10 w-full sm:w-full lg:w-[50%] lg:m-0 lg:pt-12 lg:px-2.5 lg:justify-center">
                  <img src="https://birbank.az/file/avans_9054345e8d.svg" className='w-90 object-cover flex' alt="BirPay" />
                </div>
              </div>
              <div className="flex flex-col gap-6 my-10">
                <h2 className='text-[30px] font-semibold text-[#333333] leading-10 lg:text-[32px]' >Avans krediti</h2>
                <p className='text-[16px] text-[#222222] font-normal leading-5'>Təcili pul lazım olduqda maaş və ya təqaüd kartı ilə avans əldə edə bilərsiniz. Bu Kapital Bankdan əmək haqqı və ya təqaüd alanlara xüsusi üstünlük qazandıran təklifdir.</p>
              </div>
              <h2 className='text-[30px] font-semibold text-[#333333] leading-10 mb-5 lg:text-[32px]'>Bilmək lazımdır</h2>

            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center bg-[#F9F9FA] mb-20 ">
            {
              faqData.map((item, index) => {
                return (
                  <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]   border-b-[#E9EAEC]">
                    <div key={index} onClick={() => toggleFaq(index)} className=" flex    px-6 py-2.5 items-center justify-between border-b border-b-[#E9EAEC] cursor-pointer">
                      <p className='text-[16px] text-[#222222]  font-normal'>{item.question}</p>
                      <IoIosArrowDown className={`text-[16px]  text-[#222222] transform ${activeIndex === index ? "rotate-180" : ""}`} />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-75" : "max-h-0"
                        }`}
                    >
                      <p className='w-full pt-1 px-6 pb-6 text-[14px] font-normal text-[#222222] bg-[#F9F9FA]'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
      <Footer />
    </div>
  )
}

export default Avans
