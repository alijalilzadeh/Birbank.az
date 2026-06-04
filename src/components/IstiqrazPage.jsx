import React from 'react'
import IstiqrazAZN from '../assets/Istiqraz/istiqraz_azn.svg'
import IstiqrazUSD from '../assets/Istiqraz/istiqraz_usd.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import EmissiyaPDF from '../assets/Istiqraz/emissiya_prospekti.pdf'
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import bondSafety from '../assets/Istiqraz/safeIstiqraz.svg';
import bondNoTax from '../assets/Istiqraz/bond_no_tax.svg';
import bondLiquidity from '../assets/Istiqraz/bond_liquidity.svg';
import bondProfitable from '../assets/Istiqraz/bond_profitable.svg';
import bondAdditionalCost from '../assets/Istiqraz/bond_additional_costs.svg';
const IstiqrazPage = () => {
  const [grayBtn, setGrayBtn] = useState("Transh")


  const [currency, setCurrency] = useState("AZN");
  const [buttonStatus, setButtonStatus] = useState(false);
  const [purchaseVolume, setPurchaseVolume] = useState(100);

  const interestRate = 11;
  const days = 360;

  const bondCount = Math.floor(purchaseVolume / 100);

  const profit = ((purchaseVolume * interestRate) / 100).toFixed(2);

  const faqData = [
    {
      "id": 1,
      "question": "İstiqraz nədir?",
      "answer": "İstiqrazlar — Investora əvvəlcədən müəyyən edilmiş tarixlərdə faiz gəlirini və istiqraz müddətinin sonunda əsas məbləği almaq hüququ verən qiymətli kağızdır."
    },
    {
      "id": 2,
      "question": "Tranş nədir?",
      "answer": "İstiqrazların ümumi həcmi böyük olduqda onların satışı hissəli şəkildə həyata keçirilə bilər. Bu halda, tam həcmdən satışa çıxarılan hissələrə “tranş” deyilir. Məsələn: Kapital Bank istiqrazlarının ümumi həcmi 100 mln manat təşkil edir. Bank bu həcmi bazara tranşlar şəklində, yəni hissə-hissə satışa çıxaracaq. Hər bir tranşın satış tarixi və şərtləri barədə məlumatlar buraxılışdan öncə kütləvi informasiya vasitələri ilə açıqlanır. "
    },
    {
      "id": 3,
      "question": "İstiqrazların tədavül müddəti nədir?",
      "answer": "İstiqrazların bazara satışa çıxarıldığı ilk gündən buraxılışın bitmə tarixinə kimi olan zaman aralığına “tədavül müddəti” deyilir. Bir buraxılış daxilində nə zaman satılmasından asılı olmayaraq, bütün istiqrazların bitmə tarixləri eyni olur. Kapital Bank istiqrazlarının tədavül müddəti 1 ildir (360 gün). Məsələn: Tutaq ki, bankımız 30 may 2024-cü ildə 1 il müddətinə müəyyən sayda istiqraz buraxıb. Siz isə bu tranşda buraxılmış istiqrazları oktyabrda almısınız. Bu halda istiqrazlar növbəti ilin oktyabrına kimi deyil, tranşın bitmə tarixinə, yəni 30 may 2025-ci ilə qədər gəlir gətirəcək"
    },
    {
      "id": 4,
      "question": "İstiqrazların dəyərinin 11%-i qədər gəlir qazanacağam?",
      "answer": "İstiqrazlarımız tədavül müddəti boyunca 11% gəlir qazandırır. Siz istiqrazları aldığınız tarixdən tranşın bitmə tarixinə qədər bu faiz dərəcəsi ilə gəlir əldə edəcəksiniz. Məsələn: Tutaq ki, 1 il müddətinə olan buraxılışdan 1200 AZN dəyərində istiqraz almaq istəyirsiniz. Əgər istiqrazı buraxıldığı ay alsanız, siz hər ay 11 manat gəlir əldə edəcəksiniz. Yəni 12 ayın sonunda 1200 manata görə 132 AZN sizin olacaq. Əgər istiqrazı buraxıldığı ayda deyil, növbəti aylardan birində alsanız, onda geriyə qalan aylara uyğun gəlir əldə edəcəksiniz. Yəni istiqrazı buraxıldığı vaxtdan 5 ay sonra almısınızsa, geri qalan 7 ay ərzində 1200 manat dəyərində istiqrazla ümumilikdə 77 AZN qazancaqsınız. "
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
            <div className="flex gap-2 items-center">
              <Link to='/' className='text-[14px] text-[#6d7478] font-[400] p-[15px]'>Ana Səhifə</Link>
              <Link to='/istiqraz' className='text-[14px] text-[#25282b] font-[400] py-[15px]'>İstiqraz</Link>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center self-end">
                <p onClick={() => setCurrency("AZN")} className={`text-[16px] font-[400] px-[16px] py-[4px] ${currency === "AZN" ? " text-white bg-[#EC3342]" : " text-[#9496AC] bg-[#F3F3F5]"} rounded-[6px] cursor-pointer`}>AZN</p>
                <p onClick={() => setCurrency("USD")} className={`text-[16px] font-[400] px-[16px] py-[4px] ${currency === "USD" ? " text-white bg-[#EC3342]" : "text-[#9496AC] bg-[#F3F3F5]"} rounded-[6px] cursor-pointer`}>USD</p>
              </div>
              <div className="flex items-center justify-between w-full h-full relative rounded-[10px] bg-[linear-gradient(98.65deg,_rgb(236,50,66)_0%,_rgb(153,0,0)_100%)]">
                <div className="flex flex-col gap-3 px-[72px] py-[96px] w-[60%] h-full">
                  <h2 className='text-[32px] text-white font-[600]'>Kapital Bank istiqrazları</h2>
                  <p className='text-[16px] text-white font-[400]'>
                    {
                      currency === "AZN" ? "Yüksək gəlirli və etibarlı, eyni zamanda aşağı riskli istiqrazlarımıza yatırım etməklə daha çox gəlir əldə edə bilərsiniz. İstiqrazların ümumi həcmi 50 milyon AZN olmaqla iki tranş şəklində (hissə-hissə) buraxılacaq."
                        : "Güvənli şəkildə sabit gəlir əldə etmək istəyirsənsə, 25 milyon ABŞ dolları həcmində buraxılacaq yeni istiqrazlarımız sənin üçün ideal seçimdir. İllik 7% gəlirlilik təklif edən istiqrazlarla maliyyə portfelini gücləndirə bilərsən. İndi müraciət et, yüksək gəlir imkanını qaçırma!"
                    }
                  </p>
                  <div className="flex items-center gap-12  w-full">
                    <div className="flex flex-col gap-2">
                      <p className='text-[18px] text-white font-[600]'>
                        {currency === "AZN" ? "50 000 000 AZN" : "25 000 000 USD"}
                      </p>
                      <p className='text-[14px] text-white font-[400]'>Buraxılış məbləği</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className='text-[18px] text-white font-[600]'>
                        {currency === "AZN" ? "11%" : "7%"}
                      </p>
                      <p className='text-[14px] text-white font-[400]'>İllik gəlir</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className='text-[18px] text-white font-[600]'>100                         {currency === "AZN" ? "AZN" : "USD"}
                      </p>
                      <p className='text-[14px] text-white font-[400]'>Bir istiqrazın dəyəri</p>
                    </div>
                  </div>
                </div>
                <img src={`${currency === "AZN" ? IstiqrazAZN : IstiqrazUSD}`} className='absolute bottom-0 right-[40px] w-[400px] h-[300px] object-contain ' />
                <div className="styles_banner-info-image-neon__dQrtF"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <h2 className='text-[30px] text-[#222222] font-[600]'>Gəliri hesabla</h2>
            <div className="flex flex-col items-start justify-center  gap-8 p-[40px] rounded-[10px] bg-[#F9F9FA]">
              <div className="flex items-center gap-4">
                <p className='text-[16px] font-[400] text-[#222222]'>Alış</p>
                <div className={`flex relative w-[64px] h-[32px] cursor-pointer rounded-[20px] items-center px-[4px] bg-[#EC3342] `}>
                  <div onClick={() => setButtonStatus(!buttonStatus)} className={`flex w-[24px]  h-[24px] rounded-full bg-white transform transition duration-300 ${buttonStatus ? "translate-x-[30px]" : "translate-0"}`}></div>
                </div>
                <p className='text-[16px] font-[400] text-[#222222]'>Satış</p>
              </div>
              <div className="flex items-center justify-center w-full gap-8">
                <div className="flex flex-col gap-5 w-[50%]">
                  <div className="flex flex-col border-1 border-[#dbdee3]  rounded-t-[10px] rounded-b-[5px] bg-white w-full">
                    <span className='text-[12px] font-semibold text-[#9496AC] pl-[12px] pt-[8px] pb-[4px]'>Alış həcmi</span>
                    <span className='text-[16px] text-[#222222] font-normal pl-[12px]  pb-[6px]'>{purchaseVolume}</span>
                    <input type="range" min={100} max={500000} value={purchaseVolume} onChange={(e) => setPurchaseVolume(e.target.value)} />
                  </div>
                </div>
                <div className=" flex flex-col items-center justify-center bg-white rounded-[10px] p-[24px] w-[50%] gap-4">
                  <div className="flex flex-col items-center justify-center gap-0">
                    <p className='text-[18px] font-[600] text-[#25282b]'>Xalis gəlir</p>
                    <p className='text-[42px] font-[600] text-[#EC3342] '>{profit}₼</p>
                  </div>
                  <div className="flex items-center justify-center  gap-4">
                    <div className="flex items-center justify-center flex-col gap-0">
                      <p className='text-[12px] font-[600] text-[#25282b] text-center'>İstiqrazların müddətinin bitməsinə qalan gün sayı*</p>
                      <p className='text-[32px] font-[600] text-[#EC3342] '>{days}</p>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-0">
                      <p className='text-[12px] font-[600] text-[#25282b] text-center'>Əldə edəcəyiniz istiqraz sayı</p>
                      <p className='text-[32px] font-[600] text-[#EC3342] '>{bondCount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h2 className='text-[30px] text-[#222222] font-[600] mt-[48px] mb-[32px]'>Bilmək lazımdır</h2>
            <div className=' flex flex-col  justify-center bg-[#F9F9FA] p-[24px] gap-6'>
              <div className='flex items-center justify-center'>
                <p onClick={() => setGrayBtn("Transh")} className={`text-[16px] w-[280px] text-center cursor-pointer ${grayBtn === "Transh" ? "text-white bg-[#52575C] " : " text-[#25282b] bg-[#e7e8ea] transition duration-100 hover:bg-[#A0A4A8]"}  font-[700] px-[12px] py-[6px] rounded-[5px] `}>
                  1-ci tranş
                </p>
                <p onClick={() => setGrayBtn("FAQ")} className={`text-[16px] w-[280px] text-center cursor-pointer ${grayBtn === "FAQ" ? "text-white bg-[#52575C]" : " text-[#25282b] bg-[#e7e8ea] transition duration-100 hover:bg-[#A0A4A8]"} font-[700] px-[12px] py-[6px] rounded-[5px] `}>FAQ</p>
              </div>
              <div >

                {grayBtn === "Transh" ? (
                  <div className="flex items-start justify-center flex-col gap-1">
                    <p className='text-[16px] text-[#222222] font-[400]'>Buraxılış tarixi: 23.05.2025</p>
                    <p className='text-[16px] text-[#222222] font-[400]'>Bitmə tarixi: 23.05.2026</p>
                    <p className='mb-[15px] text-[16px] text-[#222222] font-[400]'>İllik gəlir: 11%</p>

                    <p className='text-[16px] text-[#222222] font-[400]'>Buraxılış həcmi: 30 000 000 AZN</p>
                    <p className='text-[16px] text-[#222222] font-[400]'>Faizlərin ödənilməsi: aylıq</p>
                    <p className='text-[16px] text-[#222222] font-[400]'>İSİN: AZ2016005152</p>
                    <p className='text-[16px] text-[#222222] font-[400]'>Say: 300,000 ədəd</p>

                    <a download href={EmissiyaPDF} className='flex mt-[3px] gap-1 justify-center'>
                      <IoDocumentTextOutline className='text-[16px] text-[#EC3342]' />
                      <p className='text-[12px] text-[#52575c] font-[400]'>
                        Emissiya Prospekti - AZ2008005152
                      </p>
                    </a>
                  </div>
                ) : (
                  faqData.map((item, index) => (
                    <div key={index} className="flex flex-col w-full items-center justify-center ">

                      <div
                        onClick={() => toggleFaq(index)}
                        className="flex border-b border-[#E9EAEC] w-[60%] px-[12px] py-[16px] items-center justify-between cursor-pointer"
                      >
                        <p className='text-[16px] text-[#222222] text-center font-[400]'>
                          {item.question}
                        </p>

                        <IoIosArrowDown
                          className={`text-[16px] text-[#222222] transform ${activeIndex === index ? "rotate-180" : ""
                            }`}
                        />
                      </div>

                      <div
                        className={`overflow-hidden flex items-center justify-center transition-all duration-300 ${activeIndex === index ? "max-h-[300px]" : "max-h-0"
                          }`}
                      >
                        <p className='w-[60%] px-[32px] py-[40px] text-[16px] font-[200] text-[#222222] bg-[#F3F3F5]'>
                          {item.answer}
                        </p>
                      </div>

                    </div>
                  ))
                )}
              </div>

            </div>
          </div>
          <div className="flex items-center justify-center w-full mb-[100px] mt-[60px]">

            <div className="grid grid-cols-6 items-center justify-center grid-rows-6 gap-6">
              <div className="flex flex-col items-center justify-center col-span-2 row-span-3 gap-1">
                <img src={bondSafety} className='w-[80px]' />
                <h2 className='text-[24px] font-[600] text-[#222222]'>Güvənlidir</h2>
                <p className='text-[16px] text-center text-[#25282b] font-[400]'>İstiqrazların arxasında bankımız dayanır.</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 col-span-2 row-span-3 col-start-3">
                <img src={bondNoTax} className='w-[80px]' />
                <h2 className='text-[24px] font-[600] text-[#222222]'>Vergi yoxdur</h2>
                <p className='text-[16px] text-center text-[#25282b] font-[400]'>İstiqrazlardan qazanacağınız gəlirə görə vergi ödəməyəcəksiniz.</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 col-span-2 row-span-3 col-start-5">
                <img src={bondLiquidity} className='w-[80px]' />
                <h2 className='text-[24px] font-[600] text-[#222222]'>Likvidlik yüksəkdir</h2>
                <p className='text-[16px] text-center text-[#25282b] font-[400]'>İstiqrazları rahatlıqla alıb-sata bilərsiniz.</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 col-span-2 row-span-3 row-start-4">
                <img src={bondProfitable} className='w-[80px]' />
                <h2 className='text-[24px] font-[600] text-[#222222]'>Gəlirlidir</h2>
                <p className='text-[16px] text-center text-[#25282b] font-[400]'>İllik faiz dərəcəsinə əsasən sabit olaraq yüksək qazanc əldə edəcəksiniz.</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 col-span-2 row-span-3 col-start-3 row-start-4"><img src={bondAdditionalCost} className='w-[80px]' />
                <h2 className='text-[24px] font-[600] text-[#222222]'>Əlavə xərclər yoxdur</h2>
                <p className='text-[16px] text-center text-[#25282b] font-[400]'>İstiqrazlarımızı filiallarımızda alarkən və satarkən yaranan bütün xərclər bankımız tərəfindən qarşılanır.</p>
              </div>
            </div>

          </div>
        
        </div>
      </div>
    </>
  )
}

export default IstiqrazPage
