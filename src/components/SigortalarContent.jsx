import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import InsuranceImg from '../assets/Sigortalar/insurances_banner.png'
import OptimalKasko from '../assets/Sigortalar/OptimalKasko.png'
import Phising from '../assets/Sigortalar/Phising.png'
import CreditCardInsurance from '../assets/Sigortalar/CreditCardInsurance.png'
import Unemployment from '../assets/Sigortalar/Unemployment.png'
import DebetCardInsurance from '../assets/Sigortalar/DebetCardInsurance.png'
import xBox from '../assets/Sigortalar/100xBox.png'
import SchoolInsurance from '../assets/Sigortalar/SchoolInsurance.png'
import CrashInsurance from '../assets/Sigortalar/CrashInsurance.png'
import CreditLifeInsurance from '../assets/Sigortalar/CreditLifeInsurance.png'
import { HiMiniArrowLongRight } from "react-icons/hi2";

const SigortalarContent = () => {
  const faqData = [
    {
      "id": 1,
      "question": "Birbank vasitəsilə sığorta almağın hansı üstünlükləri var?",
      "answer": "Birbank ilə sığorta məhsullarını növbə gözləmədən, cəmi bir neçə dəqiqəyə onlayn əldə edə bilərsiniz. Əsas üstünlüyümüz ödənişlərin rahatlığıdır: Birbank kartları ilə sığorta haqqını hissə-hissə (taksitlə) ödəyə və ya ödənişlərinizdən keşbek/Umico bonusları qazana bilərsiniz."
    },
    {
      "id": 2,
      "question": "Sığorta şəhadətnaməsini (polisi) necə əldə edə bilərəm?",
      "answer": "Tətbiqdə və ya saytda “Sığortalar” bölməsinə daxil olub sizə uyğun məhsulu seçirsiniz. Məlumatları doldurub ödənişi tamamladıqdan sonra sığorta polisləri anında elektron formada rəsmiləşdirilir. Heç bir yerə getməyə və ya kağız sənədə ehtiyac yoxdur."
    },
    {
      "id": 3,
      "question": "Aldığım sığorta polisinə haradan baxa bilərəm?",
      "answer": "Rəsmiləşdirdiyiniz bütün aktiv polislər Birbank-dakı şəxsi kabinetinizdə ('ə'Sığortalarım' alt bölməsində) saxlanılır. İstənilən vaxt sənədinizə baxa, onu PDF formatında yükləyə və ya kiməsə göndərə bilərsiniz."
    },
    {
      "id": 4,
      "question": "Sığorta haqqını hissə-hissə (taksitlə) ödəmək mümkündür?",
      "answer": "Bəli, Birbank-ın təqdim etdiyi ən böyük rahatlıqlardan biri budur. Seçilmiş sığorta məhsulları üzrə ödənişi Birbank taksit kartları (məsələn, Birbank Cashback) ilə faizsiz hissələrə bölərək ödəyə bilərsiniz. "
    },
    {
      "id": 5,
      "question": "Sığorta müddətimin bitdiyini necə biləcəyəm?",
      "answer": "Sığorta müddətiniz bitməmişdən öncə Birbank sizə bu barədə tətbiqdaxili bildiriş (push notification) və ya SMS vasitəsilə xatırlatma göndərir. Beləliklə, sığortanızı vaxtında yeniləyərək fasiləsiz qorunma təmin edirsiniz."
    },
    {
      "id": 6,
      "question": "Səyahət sığortası viza müraciəti üçün keçərlidirmi?",
      "answer": "Bəli, Birbank vasitəsilə əldə etdiyiniz səyahət sığortası bütün səfirliklərdə və viza mərkəzlərində qəbul olunur. Elektron polisi çap edərək sənədlərinizə əlavə edə bilərsiniz."
    },
    {
      "id": 7,
      "question": "Sığorta hadisəsi baş verdikdə nə etməliyəm?",
      "answer": "- Sığorta hadisəsi zamanı dərhal sığorta şəhadətnamənizdə (polisdə) qeyd olunan sığorta şirkətinin qaynar xəttinə zəng etməlisiniz. Şirkətin əlaqə nömrələri həm sənədinizdə, həm də Birbank-dakı müvafiq məhsul səhifəsində qeyd olunub."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null);
  const [status, setStatus] = useState(true);

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
            <h2 className='text-[24px] font-bold text-[#25282b] my-4'>Sığorta yoxla və online sığorta əldə et | Birbank</h2>
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>              
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Sığortalar</Link>
            </div>
          </div>
          <div className="flex justify-between w-full bg-[linear-gradient(98.65deg,rgb(236,50,66)_0%,rgb(153,0,0)_100%)] rounded-xl relative overflow-hidden h-full py-16">
            <div className="flex flex-col w-[70%] gap-4 py-12 px-18 h-full">
              <h2 className='text-[32px] font-semibold text-white leading-10'>Sığortalar</h2>
              <p className='text-[16px] font-normal text-white'>Optimal Kasko, Gəlirli Həyat, İşsizlik sığortası və Fərdi qəza sığortası məhsulları ilə vəsaitlərinizi, avtomobillərinizi təminat altına alın.</p>

            </div>
            <div className="flex items-center justify-center w-[50%] py-12 px-2.5 ">
              <img src={InsuranceImg} className='w-auto object-contain flex absolute bottom-0 right-10 h-full' alt="BirPay" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[75%] my-10">

          <div className="grid grid-cols-6  gap-6 h-full w-full ">
            <div className="col-span-3 row-span-3 flex justify-between rounded-xl bg-[#F9F9FA] px-6 pt-6 pb-9 w-full relative h-full">
              <div className="flex flex-col gap-8 justify-between w-[50%]">
                <div className="flex flex-col w-full">
                  <h2 className='text-[24px] text-[#222222] font-medium mb-4 leading-7'>Optimal kasko</h2>
                  <p className='text-[14px] font-light text-[#222222]'>Optimal Kasko sığortası PAŞA Sığorta şirkətinin Kapital Bank müştəriləri üçün təqdim etdiyi sığorta məhsuludur.</p>
                </div>
                <Link className="flex gap-1 items-center ">
                  <span className='text-[#ec3342] font-medium text-[16px]'>Daha ətraflı</span>
                  <HiMiniArrowLongRight className='text-red-600 flex items-center justify-center align-center' />
                </Link>
              </div>
              <img src={OptimalKasko} className='object-contain absolute bottom-0 right-5 w-60 ' />
            </div>

            <div className="col-span-3 row-span-3 col-start-4 flex justify-between rounded-xl bg-[#F9F9FA] px-6 pt-6 pb-9 w-full relative h-full">
              <div className="flex flex-col gap-8 justify-between w-[55%]">
                <div className="flex flex-col w-full">
                  <h2 className='text-[24px] text-[#222222] font-medium mb-4 leading-7'>Phishing-skimming (dələduzluq)</h2>
                  <p className='text-[14px] font-light text-[#222222]'>Fişinq dedikdə hakerin kart sahiblərini müxtəlif yollarla (elektron poçt və ya SMS göndərməklə)</p>
                </div>
                <Link className="flex gap-1 items-center ">
                  <span className='text-[#ec3342] font-medium text-[16px]'>Daha ətraflı</span>
                  <HiMiniArrowLongRight className='text-red-600 flex items-center justify-center align-center' />
                </Link>
              </div>
              <img src={Phising} className='object-contain absolute bottom-0 right-5 w-60 ' />
            </div>

            <div className="col-span-3 row-span-3 row-start-4 flex justify-between rounded-xl bg-[#F9F9FA] px-6 pt-6 pb-9 w-full relative h-full">
              <div className="flex flex-col gap-8 justify-between w-[55%]">
                <div className="flex flex-col w-full">
                  <h2 className='text-[24px] text-[#222222] font-medium mb-4 leading-7'>Kredit kartların fiziki zədələnmədən sığortası</h2>
                  <p className='text-[14px] font-light text-[#222222]'>Kart fiziki zədələndiyi və ya itirildiyi hallarda, müştərinin istəyinə əsasən Bank tərəfindən yenisi ilə ödənişsiz əsasda əvəz edilir.</p>
                </div>
                <Link className="flex gap-1 items-center ">
                  <span className='text-[#ec3342] font-medium text-[16px]'>Daha ətraflı</span>
                  <HiMiniArrowLongRight className='text-red-600 flex items-center justify-center align-center' />
                </Link>
              </div>
              <img src={CreditCardInsurance} className='object-contain absolute bottom-0 right-5 w-60 ' />
            </div>

            <div className="col-span-3 row-span-3 col-start-4 row-start-4 flex justify-between rounded-xl bg-[#F9F9FA] px-6 pt-6 pb-9 w-full relative h-full">
              <div className="flex flex-col gap-8 justify-between w-[55%]">
                <div className="flex flex-col w-full">
                  <h2 className='text-[24px] text-[#222222] font-medium mb-4 leading-7'>İşsizlik sığortası (Unemployment)</h2>
                  <p className='text-[14px] font-light text-[#222222]'>Gündəlik Tələbat krediti və taksit kartı sahiblərinin müraciət edə biləcəyi İşsizlik sığortası</p>
                </div>
                <Link className="flex gap-1 items-center ">
                  <span className='text-[#ec3342] font-medium text-[16px]'>Daha ətraflı</span>
                  <HiMiniArrowLongRight className='text-red-600 flex items-center justify-center align-center' />
                </Link>
              </div>
              <img src={Unemployment} className='object-contain absolute bottom-0 right-5 w-60 ' />
            </div>
            <div className="col-span-3 row-span-3 row-start-7  flex justify-between rounded-xl bg-[#F9F9FA] px-6 pt-6 pb-9 w-full relative h-full">
              <div className="flex flex-col gap-8 justify-between w-[55%]">
                <div className="flex flex-col w-full">
                  <h2 className='text-[24px] text-[#222222] font-medium mb-4 leading-7'>Debet kartların fiziki zədələnmədən sığortası</h2>
                  <p className='text-[14px] font-light text-[#222222]'>Kart fiziki zədələndiyi və ya itirildiyi hallarda, müştərinin istəyinə əsasən Bank tərəfindən yenisi ilə ödənişsiz əsasda əvəz edilir.</p>
                </div>
                <Link className="flex gap-1 items-center ">
                  <span className='text-[#ec3342] font-medium text-[16px]'>Daha ətraflı</span>
                  <HiMiniArrowLongRight className='text-red-600 flex items-center justify-center align-center' />
                </Link>
              </div>
              <img src={DebetCardInsurance} className='object-contain absolute bottom-0 right-5 w-60 ' />
            </div>
            <div className="col-span-3 row-span-3 col-start-4 row-start-7 flex justify-between rounded-xl bg-[#F9F9FA] px-6 pt-6 pb-9 w-full relative h-full">
              <div className="flex flex-col gap-8 justify-between w-[55%]">
                <div className="flex flex-col w-full">
                  <h2 className='text-[24px] text-[#222222] font-medium mb-4 leading-7'>100-qat həyat sığortası (BOX)</h2>
                  <p className='text-[14px] font-light text-[#222222]'>100-qat həyat sığortası əldə edərək bədbəxt hadisə və ya xəstəlik nəticəsində orqanizmin funksiyalarının pozulması halında ortaya çıxa</p>
                </div>
                <Link className="flex gap-1 items-center ">
                  <span className='text-[#ec3342] font-medium text-[16px]'>Daha ətraflı</span>
                  <HiMiniArrowLongRight className='text-red-600 flex items-center justify-center align-center' />
                </Link>
              </div>
              <img src={xBox} className='object-contain absolute bottom-0 right-5 w-60 ' />
            </div>
            <div className="col-span-3 row-span-3 row-start-10 flex justify-between rounded-xl bg-[#F9F9FA] px-6 pt-6 pb-9 w-full relative h-full">
              <div className="flex flex-col gap-8 justify-between w-[55%]">
                <div className="flex flex-col w-full">
                  <h2 className='text-[24px] text-[#222222] font-medium mb-4 leading-7'>Məktəbli sığortası</h2>
                  <p className='text-[14px] font-light text-[#222222]'>Bu sığorta ölkə daxilində və ya təhsil üçün ölkə xaricində olan övladlarınızın müxtəlif qəza hadisələri zamanı ilkin tibbi</p>
                </div>
                <Link className="flex gap-1 items-center ">
                  <span className='text-[#ec3342] font-medium text-[16px]'>Daha ətraflı</span>
                  <HiMiniArrowLongRight className='text-red-600 flex items-center justify-center align-center' />
                </Link>
              </div>
              <img src={SchoolInsurance} className='object-contain absolute bottom-0 right-5 w-60 ' />
            </div>
            <div className="col-span-3 row-span-3 col-start-4 row-start-10  flex justify-between rounded-xl bg-[#F9F9FA] px-6 pt-6 pb-9 w-full relative h-full">
              <div className="flex flex-col gap-8 justify-between w-[55%]">
                <div className="flex flex-col w-full">
                  <h2 className='text-[24px] text-[#222222] font-medium mb-4 leading-7'>Fərdi qəza sığortası</h2>
                  <p className='text-[14px] font-light text-[#222222]'>Kapital əmanəti üzrə rəsmiləşdirilən Fərdi qəza sığortası ilə bədbəxt hadisə nəticəsində yaranacaq risklərə qarşı sığortalanın.</p>
                </div>
                <Link className="flex gap-1 items-center ">
                  <span className='text-[#ec3342] font-medium text-[16px]'>Daha ətraflı</span>
                  <HiMiniArrowLongRight className='text-red-600 flex items-center justify-center align-center' />
                </Link>
              </div>
              <img src={CrashInsurance} className='object-contain absolute bottom-0 right-5 w-60 ' />
            </div>
            <div className="col-span-3 row-span-3   flex justify-between rounded-xl bg-[#F9F9FA] px-6 pt-6 pb-9 w-full relative h-full">
              <div className="flex flex-col gap-8 justify-between w-[55%]">
                <div className="flex flex-col w-full">
                  <h2 className='text-[24px] text-[#222222] font-medium mb-4 leading-7'>Kredit Həyat Sığortası</h2>
                  <p className='text-[14px] font-light text-[#222222]'>Kredit götürən şəxsi ölüm və əlillik kimi risklərdən sığortalayır.</p>
                </div>
                <Link className="flex gap-1 items-center ">
                  <span className='text-[#ec3342] font-medium text-[16px]'>Daha ətraflı</span>
                  <HiMiniArrowLongRight className='text-red-600 flex items-center justify-center align-center' />
                </Link>
              </div>
              <img src={CreditLifeInsurance} className='object-contain absolute bottom-0 right-5 w-60 ' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SigortalarContent
