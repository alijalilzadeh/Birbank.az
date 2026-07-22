import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import faqBanner from '../assets/FAQ/faqBanner.svg'
import { IoIosArrowDown } from "react-icons/io";

const FAQContent = () => {
  const faqData = [
    {
      category: "3D Secure",
      description: [
        {
          id: 1,
          question: "'3D Secure' xidmətinin aktivləşdirilməsi",
          answer: "1. Əsas səhifədən kartı seçin..."
        },
        {
          id: 2,
          question: "'3D Secure' xidmətinin blokdan çıxarılması",
          answer: "1. Əsas səhifədən bloklanmış kartı seçin..."
        },
        {
          id: 3,
          question: "'3D Secure' xidmətinə bağlı nömrənin dəyişdirilməsi",
          answer: "1. Əsas səhifədən müvafiq kartı seçin. 2. Açılan səhifədə '3D Secure' bölməsini seçin."
        }
      ],
    },
    {
      category: "Kart üzrə əməliyyatlar",
      description:
        [
          {
            id: 4,
            question: "Karta qoşulmuş sevisləri necə silim?",
            answer: "1. Əsas səhifədən istədiyiniz kartı seçin. 2. Açılan səhifəni yuxarı sürüşdürün. 3. \"Karta qoşulmuş sevislər\" bölməsini seçin. 4. Burada karta qoşulmuş sevisləri aktiv və deaktiv edə bilərsiniz."
          },
          {
            id: 5,
            question: "Kartı blokdan necə çıxartmaq olar?",
            answer: "1. Əsas səhifədən blokda olan kartı seçin. 2. \"Blokdan çıxar\" düyməsini klikləyin. 3. Məlumatlarla tanış olun və \"Blokdan çıxar\" düyməsini klikləyin. 4. Hazırdır!"
          },
          {
            id: 6,
            question: "Kartın PİN-kodunu necə dəyişmək olar?",
            answer: "1. Əsas səhifədən PİN-kodunu dəyişmək istədiyiniz kartı seçin. 2. Açılan səhifəni yuxarı sürüşdürün. 3. \"PİN-kodu dəyiş\" seçin. 4. Yeni PİN-kodu təyin edin. 5. Yeni PİN-kodu təkrar daxil edin. 6. Hazırdır!"
          },
          {
            id: 7,
            question: "Kartın rekvizitlərini hardan əldə edə bilərəm?",
            answer: "1. Əsas səhifədən rekvizitlərini əldə etmək istədyiniz kartı seçin. 2. Açılan səhifəni yuxarı sürüşdürün. 3. \"Rekvizitlər\" bölməsini seçin. 4. Hazırdır! Kartın rekvizitlərini buradan əldə və paylaşa bilərsiniz."
          },
          {
            id: 8,
            question: "Xərclər üzrə limitlər necə dəyişdirilir?",
            answer: "1. Əsas səhifədən xərclər limitini dəyişdirmək istədiyiniz kartı seçin. 2. Açılan səhifəni yuxarı sürüşdürün. 3. \"Xərclər üzrə limit\" bölməsini seçin. 4. Detalları istəyinizə uyğun qeyd edin və \"Təsdiq et\" düyməsini klikləyin. 5. Hazırdır!"
          },
          {
            id: 9,
            question: "Pin-kod cəhdlərinin sıfırlanması",
            answer: "1. Əsas səhifədən PİN-kod cəhdlərini sıfırlamaq istədiyniz kartı seçin. 2. Açılan səhifəni yuxarı sürüşdürün. 3. \"PİN cəhdlərini sıfırla\" seçin. 4. Məlumatlarla tanış olun və \"Sıfırla\" düyməsini klikləyin. 5. Hazırdır!"
          }
        ]
    }
    ,
    {
      category: "Köçürmələr",
      description: [
        {
          id: 10,
          question: "Dosta köçürməni necə edə bilərəm?",
          answer: "Dostunuza köçürmə etməniz üçün “Ödəmələr və köçürmələr” menyusundan “Köçürmələr” menyusuna daxil olun, “Dosta köçürmə” başlığına klikləyin, Əlavə et hissəsindən köçürmə etmək istədiyiniz dostunuzu, məbləği seçin, təsdiqləyin."
        },
        {
          id: 11,
          question: "Dostdan necə pul istəyə bilərəm?",
          answer: "Dostunuza pul sorğusu göndərmək üçün “Ödəmələr və köçürmələr” menyusundan “Köçürmələr” menyusuna daxil olun, “Dostlardan pul sorğusu” başlığına klikləyin, Əlavə et hissəsindən Sorğunu alacaq şəxsi, kartı, məbləği qeyd edin, təsdiqləyin."
        }
      ]

    },
    {
      category: "Qeydiyyat",
      description: [
        {
          id: 12,
          question: "Kartla qeydiyyat necə aparılır?",
          answer: "1. Birbank tətbiqinə daxil olun və \"Qeydiyyat\" bölməsini seçin. 2. Məlumatları daxil edin və \"Davam et\" düyməsini klikləyin. 3. Qeyd etdiyiniz nömrəyə göndərdiyimiz 4 rəqəmli kodu daxil edin. 4. Ən azı 8 simvoldan ibarət şifrə təyin edin və \"Davam et\" düyməsini klikləyin. 5. Yeni giriş kodu təyin edin. 6. Tətbiqə üztanıma ilə daxil olmaq üçün \"Face ID ilə tətbiqə giriş\" düyməsinə klikləyin. 7. Üztanıma prosesi bitəndən sonra \"Davam et\" düyməsini klikləyin. 8. Hazırdır!"
        },
        {
          id: 13,
          question: "Necə qeydiyyatdan keçə bilərəm?",
          answer: "Kapital Banka məxsus kartınız varsa «Kart üzrə qeydiyyat» bölməsinə daxil olub, kart nömrəsini, PİN kod və qeydiyyatdan keçmək istədiyiniz mobil nömrəni qeyd edərək, qeydiyyatdan keçə bilərsiniz. Əgər, kartınız yoxdursa, «Mobil nömrə ilə qeydiyyat» bölməsindən, mobil nömrə, fərdi identifikasiya nömrənizi (FİN) və doğum tarixinizi qeyd edərək qeydiyyatdan keçə bilərsiniz. Eyni zamanda filiallarımıza yaxınlaşaraq qeydiyyatdan keçə bilərsiniz."
        }
      ]
    },
    {
      category: "Texniki nazaslıq",
      description: [
        {
          id: 14,
          question: "Şifrəmi unutmuşamsa nə edim?",
          answer: "1. Birbank tətbiqinə daxil olun və \"Qeydiyyat\" bölməsini seçin. 2. Məlumatları daxil edin və \"Davam et\" düyməsini klikləyin. 3. Qeyd etdiyiniz nömrəyə göndərdiyimiz 4 rəqəmli kodu daxil edin. 4. Ən azı 8 simvoldan ibarət şifrə təyin edin və \"Davam et\" düyməsini klikləyin. 5. Yeni giriş kodu təyin edin. 6. Tətbiqə üztanıma ilə daxil olmaq üçün \"Face ID ilə tətbiqə giriş\" düyməsinə klikləyin. 7. Üztanıma prosesi bitəndən sonra \"Davam et\" düyməsini klikləyin. 8. Hazırdır!"
        },
        {
          id: 15,
          question: "Şifrəni dəfələrlə yazıram, ancaq daxil ola bilmirəm",
          answer: "Kapital Banka məxsus kartınız varsa «Kart üzrə qeydiyyat» bölməsinə daxil olub, kart nömrəsini, PİN kod və qeydiyyatdan keçmək istədiyiniz mobil nömrəni qeyd edərək, qeydiyyatdan keçə bilərsiniz. Əgər, kartınız yoxdursa, «Mobil nömrə ilə qeydiyyat» bölməsindən, mobil nömrə, fərdi identifikasiya nömrənizi (FİN) və doğum tarixinizi qeyd edərək qeydiyyatdan keçə bilərsiniz. Eyni zamanda filiallarımıza yaxınlaşaraq qeydiyyatdan keçə bilərsiniz."
        }
      ]
    }
  ];
  const [selectedFaq, setSelectedFaq] = useState("3D Secure")

  const [activeIndex, setActiveIndex] = useState(null);

  const filteredDescription =
    faqData.filter((filtered, i) => filtered.category === selectedFaq);

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
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[75%] h-full">
          <div className="flex flex-col w-full h-full">
            <h2 className='text-[24px] font-bold text-[#25282b] my-4'>Tez tez verilən suallar</h2>
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Tez tez verilən suallar</Link>
            </div>
          </div>
          <div className="flex justify-between w-full bg-[linear-gradient(98.65deg,rgb(236,50,66)_0%,rgb(153,0,0)_100%)] rounded-xl relative overflow-hidden h-full py-16">
            <div className="flex flex-col w-[70%] gap-4 py-12 px-18 h-full">
              <h2 className='text-[32px] font-semibold text-white leading-10'>Tez tez verilən suallar</h2>
              <p className='text-[16px] font-normal text-white'>Optimal Kasko, Gəlirli Həyat, İşsizlik sığortası və Fərdi qəza sığortası məhsulları ilə vəsaitlərinizi, avtomobillərinizi təminat altına alın.</p>

            </div>
            <div className="flex items-center justify-center w-[50%] py-12 px-2.5 ">
              <img src={faqBanner} className=' object-cover flex w-100 absolute bottom-0 right-10 ' alt="BirPay" />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center w-full my-15">
            <div className="flex items-center justify-center bg-[#F3F3F5] rounded-lg  overflow-hidden">
              {
                faqData.map((item, id) => (
                  <span onClick={() => setSelectedFaq(item.category)} key={id} className={`cursor-pointer p-2 ${selectedFaq === item.category ? "text-white bg-[#25282B] rounded-lg" : "text-[#9496AC]   bg-[#F3F3F5]"}  inline-flex w-fit text-[16px] px-3 `}> {item.category}</span>
                ))
              }
            </div>
            <div className="flex flex-col w-full items-center justify-center">
              {
                filteredDescription.map((item, index) => (
                  <div key={index} className="flex flex-col w-full items-center justify-center ">
                    {item.description.map((fil, index) => (
                      <>                      
                      <div onClick={() => toggleFaq(index)} className="flex border-b-2 border-[#E9EAEC] w-full px-3 py-4 justify-between cursor-pointer">

                        <p className='text-[16px] text-[#222222]  font-normal w-full'>
                          {fil.question}
                        </p>

                        <IoIosArrowDown className={`text-[16px] text-[#222222] transition duration-100 transform ${activeIndex === index ? "rotate-180" : ""}`} />
                      </div>

                        <div className={`overflow-hidden w-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? "max-h-75" : "max-h-0"}`} >
                          <p className='w-full px-8 py-10 text-[16px] font-extralight text-[#222222] bg-[#F3F3F5]'>
                            {fil.answer}
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQContent
