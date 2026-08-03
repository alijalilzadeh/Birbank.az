import { useState } from 'react'
import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";
const DepozitSeyfleri = () => {
  const category = [
    {
      type: 'Tariflər'
    },
    {
      type: 'Xidmət şəbəkəsi'
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
      question: "Depozit seyf qutularını neçə aylıq icarəyə götürmək olar?",
      answer: "Depozit seyfləri minimum 3 aylıq müddətə icarəyə təklif olunur. Müştəri istəyinə əsasən bu müddət uzadıla bilər. Uzunmüddətli icarələrdə daha sərfəli tariflərdən yararlanmaq da mümkündür. Əgər dəyərli əşyalarını uzun müddət təhlükəsiz şəraitdə saxlamaq istəyirsənsə, depozit seyf qutularını illik icarə ilə də əldə edə bilərsən."
    },
    {
      id: 2,
      question: "Seyf qutularının ölçülərinə və qiymətlərinə görə fərqlər nələrdir?",
      answer: "Depozit seyfləri müxtəlif ölçülərdə təqdim olunur və hər ölçü üçün fərqli aylıq xidmət haqqı tətbiq edilir. Kiçik ölçülü seyflər üçün qiymətlər 30 AZN-dən başlayır, daha iri ölçülü seyf qutularında isə bu məbləğ 75 AZN-ə qədər yüksələ bilir. Ölçü seçimi edərkən saxlayacağın əşyaların həcm və miqdarını nəzərə almağın tövsiyə olunur. Qiymətlər və ölçülər haqqında ətraflı məlumat əldə etmək üçün rəsmi səhifəyə baxa bilərsən."
    },
    {
      id: 3,
      question: "Depozit seyf qutusunu icarəyə götürmək üçün hansı sənədlər tələb olunur?",
      answer: "Depozit seyflərindən istifadə etmək üçün şəxsiyyət vəsiqəsi təqdim olunması kifayətdir. Əlavə olaraq, müqavilə imzalanarkən istifadə qaydaları və öhdəliklər barədə müştəriyə məlumat verilir. Qanuni nümayəndə və ya etibarnamə ilə müraciət ediləcəksə, müvafiq sənədlər də tələb oluna bilər."
    },
    {
      id: 4,
      question: "Seyf qutusunu neçə nəfər birgə istifadə edə bilər?",
      answer: "Depozit seyflərinin birgə istifadəsi mümkündür. Müştərinin rəsmi icazəsi ilə bir və ya bir neçə əlavə şəxs seyf qutusuna çıxış hüququ əldə edə bilər. Bu şəxslər də müqavilədə qeyd olunur və onların da şəxsiyyət sənədləri təqdim edilməlidir. Bu imkan ailə üzvləri və ya iş ortaqları üçün rahat və çevik həll təqdim edir."
    },
    {
      id: 5,
      question: "Depozit seyf qutusu üçün təhlükəsizlik tədbirləri nələrdir?",
      answer: "Depozit seyfləri yüksək təhlükəsizlik standartlarına uyğun şəkildə qorunur. Seyf qutuları xüsusi mühafizə zonasında yerləşir və video müşahidə sistemləri, fiziki mühafizə xidməti və daxili giriş nəzarəti ilə daim nəzarətdə saxlanılır. Hər müştəri yalnız öz seyfinə çıxış imkanı əldə edir və bu proses ciddi identifikasiya prosedurları ilə təmin edilir."
    }
  ]
  const tarifData = {
    title1: 'Ölçüsü (hündürlüyü - eni - uzunluğu)',
    title2: '	Aylıq xidmət haqqı',
    type: 'Tariflər',
    td: [
      {
        size: '10sm x 40sm x 45sm',
        price: '30 AZN'
      },
      {
        size: '10sm x 40sm x 45sm',
        price: '40 AZN'
      },
      {
        size: '10sm x 40sm x 45sm',
        price: '40 AZN'
      },
      {
        size: '10sm x 40sm x 45sm',
        price: '45 AZN'
      },
      {
        size: '10sm x 40sm x 45sm',
        price: '45 AZN'
      },
      {
        size: '10sm x 40sm x 45sm',
        price: '55 AZN'
      },
      {
        size: '10sm x 40sm x 45sm',
        price: '60 AZN'
      },
      {
        size: '10sm x 40sm x 45sm',
        price: '60 AZN'
      },
      {
        size: '10sm x 40sm x 45sm',
        price: '75 AZN'
      }
    ]
  }
  const serviceLocation = {
    title1: 'Filial Adı',
    title2: 'Ünvan',
    type: 'Xidmət şəbəkəsi',
    td: [
      {
        name: 'Mərkəz filialı',
        location: 'Bakı şəhəri, Nəsimi rayonu, Bülbül prospekti 60G'
      },
      {
        name: 'Səbail filialı',
        location: 'Səbail rayonu, Zərifə Əliyeva pr. 63'
      },
      {
        name: 'Gənclik filialı',
        location: 'Nərimanov rayonu, Həsən Əliyev küçəsi, 889-cu məhəllə, ev 82'
      },
      {
        name: 'Gəncə filialı',
        location: 'Gəncə şəhəri, Cavadxan küçəsi 24'
      }
    ]
  }
  const [selectedCategory, setSelectedCategory] = useState('Tariflər')
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
     <Helmet>
        <title>Depozit seyfləri xidmətimizlə əşyalarınızı qoruyun və gəlirləri hesablayın</title>
        <meta
          name="description"
          content="Ana səhifənin təsviri"
        />
      </Helmet>
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar />
      <>
        <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
          <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
            <div className="flex flex-col w-full">
              <div className="flex gap-2 my-3">
                <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə   »</Link>
                <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Depozitlər   »</Link>
                <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/depozit-seyfleri" reloadDocument>Depozit seyfləri</Link>
                  
              </div>
            </div>
            <div className="flex flex-col justify-between w-full bg-[linear-gradient(98.65deg,rgb(236,50,66)_0%,rgb(153,0,0)_100%)] rounded-[10px] relative overflow-hidden lg:flex-row">
              <div className="flex flex-col w-full gap-5 px-4 pt-12 lg:py-12 lg:px-18 lg:w-[70%]">
                <h2 className='text-[30px] font-semibold text-white leading-10 lg:text-[32px]'>Depozit seyfləri</h2>
                <p className='text-[16px] text-white font-normal '>Zinət əşyalarınızı, qiymətli kağızlarınızı, pulunuzu qorumaq və təhlükəsizliyini təmin etmək üçün depozit seyf qutularından yararlanın. Dəyərli əşyalarınızı əlverişli şəkildə qoruyun.</p>
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>3 aydan başlayaraq</span>
                    <p className='text-[14px] font-normal text-white'>İcarə müddəti</p>
                  </div>

                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>Seyf qutudan birgə istifadə imkanı</span>
                    <p className='text-[14px] font-normal text-white'>Təhlükəsiz istifadə</p>
                  </div>

                  <div className="flex flex-col ">
                    <span className='text-[18px] text-white font-semibold'>Aşağı qiymətlər, təhlükəsizlik, məxfilik</span>
                    <p className='text-[14px] font-normal text-white'>Əlavə üstünlüklər</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-10  lg:w-[50%] lg:m-0">
                <img src="https://birbank.az/file/deposit_safes_banner_img_57f038949c_0607ec1fcb.avif" className='w-80 object-cover flex self-end' alt="BirPay" />
              </div>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <div className="flex items-start w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%]">
              <h2 className='text-[24px] font-semibold mt-12 mb-7.5 text-[#333333] leading-10 md:text-[30px]'>Bilmək faydalıdır</h2>
            </div>
            <div className="flex flex-col w-full gap-5 items-center justify-center p-4 sm:p-4 md:p-6 mb-20 bg-[#F9F9FA]">
              <div className="inline-flex items-center  w-full whitespace-nowrap  hide-scrollbar overflow-x-auto sm:justify-center md:w-fit md:overflow-x-hidden">
                {
                  category.map((item, id) => (
                    <span onClick={() => setSelectedCategory(item.type)} className={`cursor-pointer py-2 ${selectedCategory === item.type ? "text-white bg-[#25282B] rounded-lg" : "text-[#9496AC]   bg-white"}  inline-flex w-fit text-[14px] px-4 font-normal md:text-[16px]`}>{item.type}</span>
                  ))
                }
              </div>
              {
                selectedCategory === 'Tariflər' && (
                  <>
                    <div className="flex flex-col items-center justify-center gap-1 w-full sm:w-[75%] md:w-full lg:w-[75%]">
                      <div className="flex flex-col w-full items-center justify-center">
                        <div className="flex w-full justify-start">
                          <span className='w-[50%] text-[#ec3342] text-[16px] font-semibold py-2.5 pl-4 sm:pl-4 sm:py-2.5 md:py-3 md:pl-6'>{tarifData.title1}</span>
                          <span className='w-[50%] text-[#ec3342] text-[16px] font-semibold  py-2.5 pl-4 sm:pl-4 sm:py-2.5 md:py-3 md:pl-6'>{tarifData.title2}</span>
                        </div>
                        {
                          tarifData.td.map((item, id) => (
                            <div className={`flex w-full justify-start rounded-sm ${(id) % 2 === 0 ? "bg-white" : ""}`}>
                              <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light py-2.5 pl-4 sm:pl-4 sm:py-2.5 md:py-3 md:pl-6'>{item.size}</span>
                              <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light py-2.5 pl-4 sm:pl-4 sm:py-2.5 md:py-3 md:pl-6'>{item.price}</span>
                            </div>
                          ))
                        }
                      </div>
                      <div className="flex gap-3 items-start w-full my-6 pl-4">
                        <img src='https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/info_55069574d6.svg' className=' w-5' />
                        <p className='text-[12px] font-light text-[#25282b] leading-4'>Depozit qutuları zərgərlik məmulatlarının təhlükəsiz saxlanması üçün ən optimal həll yoludur. Əşyalarınızı Kapital Bank-ın əmanət qutularında 3 ay və daha çox müddətə saxlaya bilərsiniz. Məzmunun təhlükəsizliyini təmin edən seyf qutularının qiymətləri ölçüsündən asılı olaraq dəyişə bilər. Bankın təklif etdiyi əmanət qutularının sərfəli qiyməti hər kəsə onları icarəyə götürməyə imkan verir. Yüksək təhlükəsizlik siqnalları, videokameralar və kilidlər, qızıl zinət əşyaları, istiqrazlar və ya digər qiymətli əşyalar üçün etibarlı qorunma təmin edir.</p>
                      </div>
                    </div>
                  </>
                )
              }
              {
                selectedCategory === 'Xidmət şəbəkəsi' && (
                  <>
                    <div className="flex flex-col items-center justify-center gap-1 w-full sm:w-[75%] md:w-full lg:w-[75%]">
                      <div className="flex flex-col w-full items-center justify-center">
                        <div className="flex w-full justify-start">
                          <span className='w-[50%] text-[#ec3342] text-[16px] font-semibold  py-2.5 pl-4 sm:pl-4 sm:py-2.5 md:py-3 md:pl-6'>{serviceLocation.title1}</span>
                          <span className='w-[50%] text-[#ec3342] text-[16px] font-semibold  py-2.5 pl-4 sm:pl-4 sm:py-2.5 md:py-3 md:pl-6'>{serviceLocation.title2}</span>
                        </div>
                        {
                          serviceLocation.td.map((item, id) => (
                            <div className={`flex w-full justify-start rounded-sm ${(id) % 2 === 0 ? "bg-white" : ""}`}>
                              <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light py-2.5 pl-4 sm:pl-4 sm:py-2.5 md:py-3 md:pl-6'>{item.name}</span>
                              <span className='w-[50%] text-[#25282b] text-[12px] md:text-[16px] font-light py-2.5 pl-4 sm:pl-4 sm:py-2.5 md:py-3 md:pl-6'>{item.location}</span>
                            </div>
                          ))
                        }
                      </div>
                      <div className="flex gap-3 items-start w-full my-6 pl-4">
                        <img src='https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/info_55069574d6.svg' className=' w-5' />
                        <p className='text-[12px] font-light text-[#25282b] leading-4'>Depozit qutuları zərgərlik məmulatlarının təhlükəsiz saxlanması üçün ən optimal həll yoludur. Əşyalarınızı Kapital Bank-ın əmanət qutularında 3 ay və daha çox müddətə saxlaya bilərsiniz. Məzmunun təhlükəsizliyini təmin edən seyf qutularının qiymətləri ölçüsündən asılı olaraq dəyişə bilər. Bankın təklif etdiyi əmanət qutularının sərfəli qiyməti hər kəsə onları icarəyə götürməyə imkan verir. Yüksək təhlükəsizlik siqnalları, videokameralar və kilidlər, qızıl zinət əşyaları, istiqrazlar və ya digər qiymətli əşyalar üçün etibarlı qorunma təmin edir.</p>
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
                      <div key={faqIndex} className=" lg:w-[80%]">

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
                )
              }
            </div>
          </div>
        </div>
      </>
      <Footer />
    </div>
    </>
  )
}

export default DepozitSeyfleri
