import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import Footer from './Footer';
const MuddetsizDeposit = () => {
  const category = [
    {
      type: 'Şərtlər'
    },
    {
      type: 'Necə etməli'
    },
    {
      type: 'Tez-tez verilən suallar'
    }
  ]
  const howToDoData = [
    {
      imgUrl: 'https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/menu_dc64ca7d70.svg',
      desc: 'Kapital Bank-ın ödəniş terminalında “Bank xidmətini seçin” menyusu seçilir'
    },
    {
      imgUrl: 'https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/increase_bb9997fd10.svg',
      desc: 'Bank xidmətlərindən “Əmanətin artırılması” xidməti seçilir'
    },
    {
      imgUrl: 'https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/cif_40963969d8.svg',
      desc: 'Ödəyənin FİN kodu və əmanətin CİF-i daxil edilir'
    },
    {
      imgUrl: 'https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/number_5fa7b46c72.svg',
      desc: 'Əmanəti artırmaq istədiyiniz müvafiq müqavilə nömrəsi seçilir'
    },
    {
      imgUrl: 'https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/check_ae01a23fc1.svg',
      desc: 'Məlumatların doğruluğu yoxlanılır'
    },
    {
      imgUrl: 'https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pay_38449e36fd.svg',
      desc: 'Vəsait terminala daxil edilir və ödəniş təsdiq edilir'
    }
  ]

  const FAQdata = [
    {
      id: 1,
      question: "Müddətsiz depozit nədir?",
      answer: "Müddətsiz depozit – müştərinin vəsaitini banka müəyyən bir müddət öhdəliyi olmadan yerləşdirməsinə imkan verən depozit məhsuludur. Bu tip depozit hesablarında müştəri vəsaitini istədiyi zaman çıxara bilər və bu müddət ərzində hesabda saxlanılan məbləğə uyğun olaraq faiz gəliri əldə edir. Bu depozitlər, xüsusilə vəsaitə tez-tez ehtiyacı ola biləcək şəxslər üçün uyğundur, çünki həm likvidlik təmin edir, həm də gəlir imkanı yaradır. Əlavə olaraq, bu məhsulda faiz gəliri hesabdan vəsait çıxarılan zaman ödənilir və əmanətçilər üçün minimum məbləğ və valyuta seçimi kimi əsas şərtlər mövcuddur."
    },
    {
      id: 2,
      question: "Müddətsiz depozitlə müddətli depozit arasındakı fərq nədir?",
      answer: "Müddətsiz depozitlə müddətli depozit arasındakı əsas fərq vəsaitin bankda qalma müddəti və bu müddət ərzində çıxarılma imkanları ilə bağlıdır. Müddətli depozitdə müştəri vəsaiti əvvəlcədən razılaşdırılmış müddət ərzində bankda saxlamalıdır və bu müddət bitmədən pul çıxarılarsa, faiz gəliri itirilə bilər. Müddətsiz depozitdə isə belə bir məhdudiyyət yoxdur – müştəri istədiyi vaxt vəsaitini çıxara bilər və bu zamanadək hesablanmış faiz gəlirini də əldə edir. Digər fərq isə faiz dərəcələrindədir, adətən müddətli depozitlərdə faiz daha yüksək olur, çünki bank vəsaitin daha uzun müddət qalacağını bilir və buna uyğun gəlir təklif edir. Müddətsiz depozit isə daha çox sərbəstlik və çeviklik axtaran istifadəçilər üçün nəzərdə tutulub"
    },
    {
      id: 3,
      question: "Müddətsiz depozit üçün minimum məbləğ nə qədərdir?",
      answer: "Birbank-ın bu məhsulu üçün minimum yerləşdirilə bilən məbləğ 100 AZN və ya 100 USD-dir. Bu məbləğ depozit hesabının açılması və aktivləşdirilməsi üçün tələb olunan ən aşağı vəsaitdir. Əlavə olaraq, depozit məbləğini artırmaq və ya azaltmaq mümkündür, lakin hesabda saxlanılan məbləğ heç vaxt 100 AZN/USD-dən aşağı olmamalıdır. Bu şərt depozit hesabının aktiv və faiz gəliri əldə etməyə davam etməsi üçün vacibdir.​"
    },
    {
      id: 4,
      question: "Müddətsiz depozitə hansı valyutalarda vəsait yerləşdirmək olar?",
      answer: "Birbank-ın müddətsiz depozit hesabları hazırda yalnız Azərbaycan manatı (AZN) və ABŞ dolları (USD) valyutalarında açılır. Bu valyutalar üzrə minimum yerləşdirilə bilən məbləğ 100 AZN və ya 100 USD-dir. Hər iki valyuta üçün faiz dərəcələri fərqlidir: AZN üzrə illik 1%, USD üzrə isə 0.01% təşkil edir. Hazırda digər valyutalarda (məsələn, EUR, GBP və s.) depozit hesabı açmaq imkanı mövcud deyil."
    },
    {
      id: 5,
      question: "Faizlər necə hesablanır və nə zaman ödənilir?",
      answer: "Birbank-ın bu məhsulunda faizlər, depozit hesabında saxlanılan məbləğə və valyutaya əsasən illik olaraq hesablanır. Əgər depozit hesabı 30 təqvim günündən az müddətə açılıbsa, bu müddət ərzində hesabdan vəsait çıxarıldıqda faiz ödənilmir. Əks halda, depozit hesabı 30 gündən çox müddətə açılıbsa, vəsait çıxarıldıqda həmin müddət ərzində hesablanmış faiz gəliri ödənilir. Bu sistem müştərilərə vəsaitlərini istədikləri zaman çıxarmaq imkanı verərkən, uzunmüddətli saxlamaları halında faiz gəliri əldə etmələrini təmin edir."
    },
    {
      id: 6,
      question: "Faiz gəlirlərindən vergi tutulurmu?",
      answer: "Bəli, Azərbaycanda fiziki şəxslərin banklarda yerləşdirdiyi depozitlər üzrə əldə etdiyi faiz gəlirləri müəyyən hallarda gəlir vergisinə cəlb olunur. 2023-cü il fevralın 1-dən etibarən, əgər bir bankda milli valyutada olan depozit üzrə aylıq faiz gəliri 200 manatdan çoxdursa, bu məbləğin 200 manatdan artıq hissəsindən 10% dərəcə ilə vergi tutulur. Əgər aylıq faiz gəliri 200 manatdan azdırsa, bu halda faiz gəliri vergidən azaddır. Bundan əlavə, əgər fiziki şəxs milli valyutada olan depozitini 18 ay və ya daha uzun müddətə yerləşdirərsə və bu müddət ərzində vəsaiti çıxarmazsa, həmin depozit üzrə əldə olunan faiz gəliri 3 il müddətinə gəlir vergisindən azad edilir."
    },
    {
      id: 7,
      question: "Müddətsiz depozitlər sığortalanırmı?",
      answer: "Bəli, Azərbaycanda fəaliyyət göstərən bankların, o cümlədən Birbank-ın müddətsiz depozitləri Əmanətlərin Sığortalanması Fondu tərəfindən müəyyən şərtlər daxilində sığortalanır. Hazırda milli valyutada yerləşdirilən depozitlər üçün sığorta limiti 100,000 AZN-dir. Bu o deməkdir ki, əgər bankda hər hansı fors-major hal (məsələn, lisenziyanın ləğvi) baş verərsə, müştərinin 100,000 AZN-ə qədər olan əmanəti dövlət tərəfindən qorunur və geri ödənilir. Valyuta ilə yerləşdirilən depozitlər isə hazırda sığorta çərçivəsinə daxil deyil. Əmanətçilər daha ətraflı məlumat üçün Əmanətlərin Sığortalanması Fondu və ya Birbank-ın rəsmi saytına müraciət edə bilərlər."
    },
    {
      id: 8,
      question: "Depozit hesabı üçün komissiya tutulurmu?",
      answer: "Birbank-ın müddətsiz depozit hesabının açılması və idarə olunması üçün xüsusi bir komissiya haqqı tətbiq olunmur. Bu, müştərilərə əlavə xərclər olmadan depozit hesabı açmaq və idarə etmək imkanı verir. Lakin bəzi əlavə xidmətlər və əməliyyatlar üçün komissiya haqları tətbiq oluna bilər. Ətraflı məlumat üçün Birbank-ın rəsmi tariflər səhifəsinə baxa bilərsən."
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
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Müddətsiz depozit! Banka pul qoy və istədəyin zaman götür
        </title>
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
                <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Depozitlər   »</Link>
                <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/depozit-seyfleri" reloadDocument>Müddətsiz depozit</Link>

              </div>
            </div>
            <div className="flex flex-col justify-between w-full bg-[linear-gradient(98.65deg,rgb(236,50,66)_0%,rgb(153,0,0)_100%)] rounded-[10px] relative overflow-hidden lg:flex-row">
              <div className="flex flex-col w-full gap-5 px-4 pt-12 lg:py-12 lg:px-18 lg:w-[70%]">
                <h2 className='text-[30px] font-semibold text-white leading-10 lg:text-[32px]'>Müddətsiz depozit</h2>
                <p className='text-[16px] text-white font-normal '>Depozitinizin müddəti barədə qərar verməkdə çətinlik çəkirsinizsə, müddətsiz depozit hesabından faydalanın. Beləcə, depozitinizi faiz gəlirləri ilə birlikdə istədiyiniz zaman çıxara bilərsiniz.</p>
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>100 AZN/USD-dan</span>
                    <p className='text-[14px] font-normal text-white'>Depozitin məbləği</p>
                  </div>

                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>12 ay</span>
                    <p className='text-[14px] font-normal text-white'>Depozitin müddəti</p>
                  </div>

                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>AZN - 1%, USD - 0.01%</span>
                    <p className='text-[14px] font-normal text-white'>İllik faiz dərəcəsi</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-10  lg:w-[50%] lg:m-0">
                <img src="https://birbank.az/file/upon_request_ffb0a1999b.png" className='w-80 object-cover flex self-end' alt="BirPay" />
              </div>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <div className="flex items-start w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
              <h2 className='text-[24px] font-semibold mt-12 mb-7.5 text-[#333333] leading-10 md:text-[30px]'>Bilmək faydalıdır</h2>
            </div>
            <div className="flex flex-col w-full gap-5 items-center justify-center p-4 sm:p-4 md:p-6 mb-20 bg-[#F9F9FA]">
              <div className="inline-flex items-center justify-center w-fit ">
                {
                  category.map((item, id) => (
                    <span onClick={() => setSelectedCategory(item.type)} className={`cursor-pointer py-2 ${selectedCategory === item.type ? "text-white bg-[#25282B] rounded-lg" : "text-[#9496AC]   bg-white"}  inline-flex w-fit text-[14px] px-4 font-normal md:text-[16px]`}>{item.type}</span>
                  ))
                }
              </div>
              {
                selectedCategory === 'Şərtlər' && (
                  <>
                    <div className="flex flex-col items-center justify-center gap-1 w-full sm:w-[75%] md:w-full lg:w-[75%]">
                      <div className="flex flex-col gap-4 w-full items-center justify-center">
                        <div className={`flex w-full justify-start rounded-sm`}>
                          <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light text-start'>Depozit müddəti - Minimum 12 ay (avtomatik uzadılır)</span>
                          <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light text-start'>Faiz ödənişi - Əmanət məbləği çıxarıldığı zaman</span>
                        </div>

                        <div className={`flex w-full justify-start rounded-sm `}>
                          <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light text-start'>Açılma müddəti 30 təqvim gününə qədər olan müqavilələr üzrə faiz ödənilmir</span>
                          <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light text-start'>Vergi Məcəlləsinin 102.1.22-ci maddəsinə əsasən 2023-cü ilin fevral ayının 1-dən etibarən Fiziki şəxslər üzrə depozit faizlərindən 10% vergi tutulacaqdır.</span>
                        </div>

                        <div className={`flex w-full justify-start rounded-sm`}>
                          <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light text-start'>Depozit məbləği - Minimum 100 AZN/USD</span>
                          <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light text-start'></span>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start w-full mt-6 pl-4">
                        <img src='https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/info_55069574d6.svg' className=' w-5' />
                        <p className='text-[12px] font-light text-[#25282b] leading-4'>Bank depozitləri nağd pulunuzu idarə etməkdə ən yaxşı vasitədir. Bu məhsul pulunuzu faiz risklərindən qoruyaraq etibarlı şəkildə dəyər əldə etmənizə imkan yaradır. Depozit hesabı, investisiya qoyma yolunuzda ilk addım sayılır. Müddətsiz depozit məhsulu köməyi ilə siz pulunuzu vaxt məhdudiyyəti olmadan depozit hesablarına yatıra bilərsiniz. Depozitlər üçün minimal olaraq 12 ay təyin edilən müddət, vaxt bitimində avtomatik olaraq uzadılır. Müddət bitdikdən sonra ertəsi gün əmanətçi depozitin qaytarılmasını tələb etmədiyi təqdirdə həmin dövrdəki tarif və şərtlərdə eyni depozit şərtləri mövcud olduğu halda həmin şərtlərlə, digər bütün hallarda isə Bankın müəyyən etdiyi şərtlərlə uzadılır. Müddətsiz depozitlər üçün tətbiq edilən minimal məbləğ 100 AZN/USD olaraq müəyyən edilir. AZN və USD olmaqla iki valyutada yerləşdirilə bilən depozitlər üçün müəyyən olunan faizlər valyutaya uyğun olaraq fərqlilik göstərir. Depozitlər üçün müəyyən edilən faiz gəlirlərinin ödənişi depozit çıxarılanda edilir. Banka yerləşdirilən depozit məbləği asanlıqla artıra və ya azalda bilərsiniz. Uğurlu pul idarəsi üçün müddətsiz depozitin sahib olduğu üstünlüklərdən yararlanmaq üçün sizə ən yaxın Kapital Bank filialına müraciət etməyiniz kifayətdir.</p>
                      </div>
                      <div className="flex gap-3 items-start w-full my-6 pl-4">
                        <FaRegFilePdf className='text-[#ec3342] text-[13px]' />
                        <p className='text-[12px] font-light text-[#80858a] leading-4 transition duration-100 cursor-pointer hover:text-[#ED4048]'>Əmanətin sığortalanması şərtləri</p>
                      </div>
                    </div>
                  </>
                )
              }

              {
                selectedCategory === 'Necə etməli' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-6 w-full sm:w-[75%] md:w-full lg:w-[75%]">
                    {
                      howToDoData.map((item, id) => (
                        <div key={id} className="flex flex-col gap-4 p-6 rounded-xl bg-white items-center justify-center w-full">
                          <img src={item.imgUrl} />
                          <div className="flex gap-4 items-start justify-center">
                            <h2 className='flex self-center font-medium text-[#ec3342] text-[30px]' >{id + 1}</h2>
                            <p className='text-[16px] font-medium text-[#25282b] text-center '>{item.desc}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
              }
              {
                selectedCategory === 'Tez-tez verilən suallar' && (
                  <div className="flex flex-col w-full items-center justify-center">
                    {FAQdata.map((fil, faqIndex) => (
                      <div key={faqIndex} className="w-[95%] sm:w-[80%] lg:w-[60%]">

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
                )
              }
            </div>
          </div>
        </div>
      </>
      <Footer />
    </div>
  )
}

export default MuddetsizDeposit
