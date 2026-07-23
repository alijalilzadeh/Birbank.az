import React, { useState } from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { IoIosArrowDown } from "react-icons/io";

const YigimHesabi = () => {
  const [selectedCategory, setSelectedCategory] = useState('FAQ')

  const category = [
    {
      type: 'FAQ'
    },
    {
      type: 'Yığım hesabı nədir'
    },
    {
      type: 'Necə etməli'
    }
  ]

  const descrData = [
    {
      type: 'FAQ',
      desc: [
        {
          id: 1,
          question: "Yığım hesabı nədir?",
          answer: "Yığım hesabı əsnek və istifadəsi rahat olan bir əmanət növüdür.Bu hesab sayəsində istədiyin vaxt, istədiyin qədər vəsait əlavə edə bilər, yığımını mərhələli şəkildə artırmaq imkanına malik olursan. Əmanət yerləşdirildiyi andan etibarən hər gün faiz qazandırır və bu faizlər balansına əlavə olunur. Əlavə olaraq, hesabdakı vəsaiti istənilən zaman, yığılmış faiz gəlirləri ilə birlikdə heç bir itki olmadan çıxarmaq mümkündür."
        },
        {
          id: 2,
          question: "Yığım hesabı şərtləri və faiz hesablanması necədir?",
          answer: "Yığım hesabının şərtləri çox çevikdir: hesabı minimum məbləğ olmadan aça bilər və istənilən vaxt vəsait əlavə edib çıxara bilərsiniz. Faizlər AZN üzrə illik 7%, USD üzrə isə 2.5% təşkil edir. Faiz gündəlik hesablanaraq balansınıza əlavə olunur, buna görə də qazancınız tədricən artan şəkildə yığılır.İş günü hesabına daxil olan vəsait üzrə faizlər növbəti gündən hesablanmağa başlayır. Qeyri-iş günü daxil olan vəsait isə növbəti iş günü banka daxil olmuş hesab edilir və faizlər onun da növbəti günündən hesablanmağa başlayır. Faizlərin hesablanması gündəlik aparılır."
        },
        {
          id: 3,
          question: "Minimum nə qədər əmanət yatırmaq lazımdır?",
          answer: "Yığım hesabına minimum əmanət tələbi yoxdur, yəni hesabı 0 AZN/USD balansla belə aça bilərsiniz. Daha sonra istədiyiniz zaman, istədiyiniz məbləğdə vəsait əlavə edə bilərsiniz. Bu çevik mexanizm hesabı həm yeni başlayanlar, həm də kiçik məbləqlərlə yığmağa üstünlük verənlər üçün əlçatan edir."
        },
        {
          id: 4,
          question: "Yığım hesabını necə aça bilərəm?",
          answer: "Yığım hesabını açmağın iki əsas yolu var: Birbank mobil tətbiqi və Birbank filialları. Ən rahat üsul mobil tətbiqdir: Birbank-a daxil olub “Əmanətlər” bölməsi → “Əmanət yerləşdirin” → “Yığım hesabı” → “Yığım hesabı aç” menyusunu seçirsiniz, AZN və ya USD valyutasını müəyyən edir, şərtlərlə tanış olub təsdiqləyirsiniz, hesab dərhal açılır və siz istənilən anda kartınızdan, hesabınızdan və ya terminal vasitəsilə bu hesaba vəsait köçürə bilərsiniz. Filialda açmaq üçün isə şəxsiyyət vəsiqənizlə ən yaxın Birbank filialına müraciət edir, məsləhətçi vasitəsilə yığım hesabı üzrə ərizəni rəsmiləşdirirsiniz; hesab açıldıqdan sonra kassadan və ya digər hesablarınızdan bu hesaba vəsait yerləşdirə bilərsiniz. Hər iki halda minimum məbləğ tələbi yoxdur, yəni hesabı 0 AZN/USD balansla belə açıb, sonradan imkan olduqca vəsait əlavə etməklə yığım etməyə başlaya bilərsiniz."
        },
        {
          id: 5,
          question: "Hesabıma pulu necə əlavə edə bilərəm?",
          answer: "Yığım hesabına vəsait əlavə etmək çox rahatdır. Bunu Birbank tətbiqi, ödəniş terminalları və ya filial kassaları vasitəsilə edə bilərsiniz. Birbank tətbiqində “Hesablar” bölməsinə daxil olub yığım hesabını seçərək “Hesabı artır” əməliyyatı ilə vəsaiti kartınızdan və ya digər hesablarınızdan köçürə bilərsiniz. Minimum məbləğ tələbi olmadığı üçün istənilən vaxt istədiyiniz məbləği hesaba əlavə edə bilərsiniz."
        },
        {
          id: 6,
          question: "Hesabımda müvəqqəti azalma olduqda əvvəlki yüksək balans üzrə topladığım faizlərə təsir olurmu?",
          answer: "Xeyr, hesabınızda müvəqqəti azalma olduqda əvvəlki yüksək balans üzrə topladığınız faizlərə heç bir təsir göstərilmir. Artıq hesablanmış və balansınıza əlavə olunmuş faizlər silinmir və geri alınmır. Sadəcə bundan sonra faizlər gündəlik olaraq yeni, azalmış balans əsasında hesablanır. Yəni əvvəlki dövrdə qazandığınız faizlər tam şəkildə qorunub saxlanılır, yalnız gələcək faiz məbləği mövcud qalığa uyğun olaraq dəyişir."
        },
        {
          id: 7,
          question: "Pulu çıxardıqda qazandığım gəlirlər sıfırlanırmı?",
          answer: "Xeyr, yığım hesabından pul çıxardıqda qazandığınız gəlirlər sıfırlanmır. Bu hesabın əsas üstünlüklərindən biri də odur ki, vəsaiti istənilən vaxt çıxara bilərsiniz və artıq hesablanmış faizlər silinmir. Çıxardığınız məbləğ sadəcə balansı azaldır, bundan sonra faiz gəliri mövcud qalan məbləğin üzərindən gündəlik hesablanaraq davam edir."
        },
        {
          id: 8,
          question: "Yaş məhdudiyyəti varmı?",
          answer: "Bəli, yığım hesabı açmaq üçün yaş məhdudiyyəti var. Hesab yalnız 18 yaşdan yuxarı olan şəxslər tərəfindən açıla bilər, çünki bank xidmətlərindən istifadə və müqavilə bağlamaq üçün hüquqi fəaliyyət qabiliyyəti tələb olunur. Yetkinlik yaşına çatmayanlar isə yalnız valideyn və ya qanuni qəyyum vasitəsilə digər bank məhsullarından yararlana bilirlər."
        },
        {
          id: 9,
          question: "Yığım hesabının valyutasını dəyişmək mümkündürmü?",
          answer: "Xeyr, mövcud yığım hesabının valyutasını sonradan dəyişmək mümkün deyil. Hesab açılarkən seçilən valyuta, AZN və ya USD, həmin hesab üçün sabit olaraq qalır. Əgər fərqli valyutada yığım etmək istəyirsinizsə, sadəcə olaraq yeni bir Yığım Hesabı açmalı və vəsaiti uyğun valyutada həmin hesaba yerləşdirməlisiniz."
        },
        {
          id: 10,
          question: "Yığım hesabına bağlı ayrıca kart təqdim olunurmu?",
          answer: "Xeyr, yığım hesabına bağlı ayrıca kart təqdim olunmur. Bu hesab klassik hesab-kart məhsulu deyil, çevik əmanət forması kimi fəaliyyət göstərir. Hesaba vəsait əlavə etmək və ya çıxarmaq üçün Birbank tətbiqi, hesablararası köçürmə, filial və ya terminallardan istifadə edilir. Əgər kart vasitəsilə əməliyyat aparmaq istəyirsinizsə, mövcud debet və ya kredit kartlarınızı istifadə edərək Yığım Hesabına köçürmə edə bilərsiniz."
        },
      ]
    },
    {
      type: 'Yığım hesabı nədir',
      desc: [
        {

        }
      ]
    }
  ]
  const filteredDescData = descrData.filter((item) => item.type === selectedCategory)
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
      <Navbar />
      <SecondaryNavbar />
      <>
        <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
          <div className="flex flex-col w-[75%]">
            <div className="flex flex-col w-full">

              <div className="flex gap-2 my-3">
                <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/">Ana Səhifə</Link>
                <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">
                  Yığım hesabı</Link>
              </div>
            </div>
            <div className="flex justify-between w-full bg-linear-to-r from-[#EC3242] to-[#EC3242] rounded-[10px] relative overflow-hidden">
              <div className="flex flex-col w-[70%] gap-10 py-12 px-18">
                <h2 className='text-[32px] font-semibold text-white leading-10'>Pulunu Birbank-la yığ, istəyəndə götür və faiz gəlirlərini itirmə!</h2>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>0 AZN/USD-dan</span>
                    <p className='text-[14px] font-normal text-white'>Minimum məbləğ</p>
                  </div>

                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>Sərbəst</span>
                    <p className='text-[14px] font-normal text-white'>Müddət</p>
                  </div>

                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>AZN - 7%, USD - 2.5%</span>
                    <p className='text-[14px] font-normal text-white'>Faiz dərəcəsi(illik)</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[50%] py-12 px-2.5 ">
                <img src="https://birbank.az/file/thumbnail_saving_account_banner_img_9ecbe94e68_97fdca7d6f.webp" className='w-60 object-cover flex ' alt="BirPay" />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center w-full my-15">
              <h2 className='text-[#222222] font-semibold mx-53.5 text-center mb-8 text-[42px] leading-12'>YIĞIM HESABINI İNDİ AÇ, QAZANMAĞA BAŞLA!</h2>
              <div className="flex items-center  w-full bg-[#F9F9FA] gap-12 rounded-lg pt-12">
                <div className="flex items-center justify-center w-[50%] ">
                  <img src="https://birbank.az/file/saving_az_8471a2bfb9.png" className='flex w-60 object-cover' />
                </div>
                <div className="flex items-center justify-center bg-white p-8">
                  <img src="https://birbank.az/file/yigim_hesab_qr_kod_6b9875820e.jpg" className='flex object-cover w-60' />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <div className="flex items-start w-[75%]">
              <h2 className='text-[32px] font-semibold text-[#333333] leading-10'>Bilmək faydalıdır</h2>
            </div>
            <div className="flex flex-col w-full gap-10 items-center justify-center p-6 mb-20 bg-[#F9F9FA]">
              <div className="inline-flex items-center justify-center w-fit">
                {
                  category.map((item, id) => (
                    <span onClick={() => setSelectedCategory(item.type)} className={`cursor-pointer py-2 ${selectedCategory === item.type ? "text-white bg-[#25282B] rounded-lg" : "text-[#9496AC]   bg-white"}  inline-flex w-fit text-[16px] px-4 font-normal`}>{item.type}</span>
                  ))
                }
              </div>
              <div className="flex flex-col w-full items-center justify-center">
                {
                  filteredDescData.map((item, index) => (
                    <div key={index} className="w-[75%]">

                      {selectedCategory === "Yığım hesabı nədir" ? (

                        <div className="flex flex-col gap-2">
                          <h2 className="text-[24px] font-bold text-[#222222]">
                            Yığım hesabı çevik və rahat əmanət məhsuludur.
                          </h2>

                          <p className="text-[16px] text-[#222222] font-normal">
                            Bu hesab vasitəsilə istədiyin məbləğdə vəsaiti istədiyin vaxt
                            yerləşdirə bilərsən. Əmanətin yerləşdirdiyin tarixdən etibarən
                            gündəlik faiz qazandırır. Vəsaitləri istənilən vaxt faiz gəlirləri
                            itirmədən çıxarmaq mümkündür.
                          </p>
                        </div>

                      ) : (

                        <div className="flex flex-col w-full items-center justify-center">

                          {item.desc.map((fil, faqIndex) => (
                            <div key={faqIndex} className="w-[80%]">

                              <div
                                onClick={() => toggleFaq(faqIndex)}
                                className="flex border-b-2 border-[#E9EAEC] w-full px-3 py-4 justify-between cursor-pointer"
                              >
                                <p className="text-[16px] text-[#222222] font-normal w-full">
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

                      )}

                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default YigimHesabi
