import React, { useState } from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import '../input.css'
import '../index.css'
import { IoInformationCircleSharp } from "react-icons/io5";
import { useEffect } from 'react'


const CarCredit = () => {
  const [ilkinOdenis, setIlkinOdenis] = useState(10);
  const [carPrice, setCarPrice] = useState(0);
  const [creditTime, setCreditTime] = useState(12);

  const [minIlkinOdenis, setMinIlkinOdenis] = useState(0);
  const [ayliqKreditOdenis, setAyliqKreditOdenis] = useState(0);
  const [illikFaizDerece, setIllikFaizDerece] = useState(12);
  const [creditAmount, setCreditAmount] = useState(0);
  const [comission, setComission] = useState(0);

  useEffect(() => {
    // 1. İlkin ödəniş
    const initialPayment =
      (carPrice * ilkinOdenis) / 100;

    // 2. Kredit məbləği
    const amount =
      carPrice - initialPayment;

    // 3. Komissiya
    const commission =
      (carPrice * 0.5) / 100;

    // 4. Aylıq ödəniş
    const monthlyRate =
      illikFaizDerece / 100 / 12;

    const monthlyPayment =
      amount *
      (
        monthlyRate *
        Math.pow(1 + monthlyRate, creditTime)
      ) /
      (
        Math.pow(1 + monthlyRate, creditTime) - 1
      );

    setMinIlkinOdenis(initialPayment);
    setCreditAmount(amount);
    setComission(commission);
    setAyliqKreditOdenis(monthlyPayment);

  }, [
    carPrice,
    ilkinOdenis,
    creditTime,
    illikFaizDerece
  ]);

  const CarCreditInfo = [
    {
      category: "Tələb olunan sənədlər",
      description: [
        {
          id: 1,
          desc: "Şəxsiyyəti təsdiq edən sənəd ",
        },
        {
          id: 2,
          desc: "Gəliri təsdiq edən rəsmi sənəd (iş yeridən arayış, elektron arayış, əmək haqqı hesabından çıxarış)  ",
        },
        {
          id: 3,
          desc: "Yaş həddi min. 20 yaş maks. 70 yaş ( kredit öhdəliyinin sonuncu ödəniş tarixinə maks. 70 yaş olmalıdır) ",
        }
      ],
    },
    {
      category: "Əlavə şərtlər",
      description:
        [
          {
            id: 4,
            desc: "Borcalanın qeydiyyatı Azərbaycan Respublikasında olmalıdır. ",
          },
          {
            id: 5,
            desc: "Kreditləşməyən avtomobillər- Daxili, Rusiya və İran istehaslı olan avtomobillər. ",
          },
          {
            id: 6,
            desc: "Avtomobilin alış nöqtəsi- Avtomobil salonları. ",
          },
          {
            id: 7,
            desc: "Avtomobilin istehsal tarixi beş ildən çox olmamalıdır. ",
          },
          {
            id: 8,
            desc: "Elektrik mühərrikli avtomobil nəqliyyatı vasitələri üzrə ilkin ödəniş ",
          },
          {
            id: 9,
            desc: "a) 3 (üç) il və ya ondan az olduqda – min. 10% ",
          },
          {
            id: 10,
            desc: "b) 3 (üç) ildən çox olduqda – min. 40% ",
          },
          {
            id: 11,
            desc: "Hibrid mühərrikli avtomobil nəqliyyatı vasitələri üzrə ilkin ödəniş ",
          },
          {
            id: 12,
            desc: "a) 1 (bir) il və ya ondan az olduqda – min. 20% ",
          },
          {
            id: 13,
            desc: "b) 1 (bir) ildən çox və 3 (üç) il və ya ondan az olduqda – min. 40% ",
          },
          {
            id: 14,
            desc: "c) 3 (üç) ildən çox olduqda – min. 50% ",
          },
          {
            id: 15,
            desc: "Digər avtomobil nəqliyyatı vasitələri üzrə ",
          },
          {
            id: 16,
            desc: "a) 1 (bir) il və ya ondan az olduqda – min. 40%,",
          },
          {
            id: 17,
            desc: "b) 1 (bir) ildən çox və 3 (üç) il və ya ondan az olduqda – min. 50% ",
          },
          {
            id: 18,
            desc: "c) 3 (üç) ildən çox olduqda – min. 60% FİFD: Min. 15.5%–Maks. 20.5%",
          },
        ]
    }
    ,
    {
      category: "Partnyorlar",
      description: [
        {
          id: 19,
          desc: "Şkoda (Skaz Autohouse) | Ünvan: Bakı şəhəri, Babək pr., 74 | Tel: *5544 ",
        },
        {
          id: 20,
          desc: "Changan (Azərbaycan Avtomobil) | Ünvan: Bakı şəhəri, Babək pr., 74 | Tel: *5544 ",
        },
        {
          id: 21,
          desc: "Mercedes (Autostar Kaukasus Qmbh Azərbaycan) | Ünvan: Bakı şəhəri, Babək pr. 1145 | Tel: 976 ",
        },
        {
          id: 22,
          desc: "Toyota (Toyota-Bakı Mərkəzi MMC) | Ünvan: Bakı şəhəri, Xətai rayonu, F. Bayramov küçəsi ev 26",
        }
      ]

    }
  ];
  const [selectedFaq, setSelectedFaq] = useState("Tələb olunan sənədlər")
  const filteredDescription =
    CarCreditInfo.find((filtered, i) => filtered.category === selectedFaq);
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <>
        <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC] mb-20">
          <div className="flex flex-col w-[75%] h-full">
            <div className="flex flex-col w-full h-full">
              <h2 className='text-[24px] font-bold text-[#25282b] my-4'>Avtomobil krediti</h2>
              <div className="flex gap-2 my-3">
                <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
                <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Avtomobil krediti</Link>
              </div>
            </div>
            <div className="flex justify-between w-full bg-[linear-gradient(98.65deg,rgb(236,50,66)_0%,rgb(153,0,0)_100%)] rounded-xl relative overflow-hidden h-full py-10">
              <div className="flex flex-col w-[70%] gap-4 py-12 px-18 h-full">
                <h2 className='text-[32px] font-semibold text-white leading-10'>Avtomobil krediti</h2>
                <p className='text-[16px] font-normal text-white'>Arzuladığınız avtomobili Kapital Bank-ın təqdim etdiyi avto kredit ilə əldə edin.</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <span className='font-semibold text-[18px] text-white'>10%-dən</span>
                      <span className='font-normal text-[14px] text-white'>İlkin ödəniş</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className='font-semibold text-[18px] text-white'>min. 12 ay - maks. 59 ay</span>
                      <span className='font-normal text-[14px] text-white'>Kreditin müddəti</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className='font-semibold text-[18px] text-white'>12%-dən</span>
                      <span className='font-normal text-[14px] text-white'>İllik faiz</span>
                    </div>
                  </div>
                  <div className="flex items-center  gap-20">
                    <div className="flex flex-col ">
                      <span className='font-semibold text-[18px] text-white'>Annuitet</span>
                      <span className='font-normal text-[14px] text-white'>Ödəniş növü</span>

                    </div>
                    <div className="flex flex-col ">
                      <span className='font-semibold text-[18px] text-white'>min. 5 000 AZN – mаks. 200 000 AZN</span>
                      <span className='font-normal text-[14px] text-white'>Kreditin məbləği</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[50%] py-12 px-2.5 ">
                <img src="https://birbank.az/file/avto_credit_7b67f1429b.svg" className='w-110 object-contain flex absolute bottom-0 right-10 h-full' alt="BirPay" />
              </div>
            </div>
            <div className="flex flex-col  w-full">
              <h2 className='text-[30px] text-[#222222] font-semibold my-10'>Avtomobil kalkulyator</h2>
              <div className="flex items-center justify-between rounded-xl bg-[#F9F9FA] w-full gap-4 p-10 h-full">
                <div className="flex flex-col gap-9 w-[40%] h-full">
                  <select name="type" id="type" className='bg-white rounded-[10px] border  border-[#e5e5e9] px-2 py-4 focus:outline-none cursor-pointer text-[#333333] font-normal text-[14px]'>
                    <option className='text-[#333333] font-normal text-[14px]' selected value="Elektrik">Elektrik</option>
                    <option className='text-[#333333] font-normal text-[14px]' value="Hibrid">Hibrid</option>
                    <option className='text-[#333333] font-normal text-[14px]' value="Diger">Digər</option>
                  </select>
                  <select name="year" id="year" className='bg-white rounded-[10px] border  border-[#e5e5e9] px-2 py-4 focus:outline-none cursor-pointer text-[#333333] font-normal text-[14px]'>
                    <option className='text-[#333333] font-normal text-[14px]' value="2019">2019</option>
                    <option className='text-[#333333] font-normal text-[14px]' value="2020">2020</option>
                    <option className='text-[#333333] font-normal text-[14px]' value="2021">2021</option>
                    <option className='text-[#333333] font-normal text-[14px]' value="2022">2022</option>
                    <option className='text-[#333333] font-normal text-[14px]' value="2023">2023</option>
                    <option className='text-[#333333] font-normal text-[14px]' selected value="2024">2024</option>
                  </select>
                  <div className="flex flex-col  rounded-t-[10px] rounded-b-[5px] bg-white border border-[#e5e5e9]">
                    <span className='text-[12px] font-medium text-[#9496AC] pl-3 pt-2 pb-1]'>İlkin ödəniş faizi</span>
                    <span className='text-[16px] text-[#222222] font-normal pl-3  pb-1.5'>{ilkinOdenis}</span>
                    <input type="range" min={10} max={100} value={ilkinOdenis} className='w-full ' onChange={(e) => setIlkinOdenis(e.target.value)} />
                  </div>

                  <div className="flex flex-col  rounded-t-[10px] rounded-b-[5px] bg-white border border-[#e5e5e9]">
                    <span className='text-[12px] font-medium text-[#9496AC] pl-3 pt-2 pb-1]'>Avtomobilin qiyməti</span>
                    <span className='text-[16px] text-[#222222] font-normal pl-3  pb-1.5'>{carPrice}</span>
                    <input type="range" min={0} max={500000} value={carPrice} className='w-full ' onChange={(e) => { setCarPrice(e.target.value); }} />
                  </div>

                  <div className="flex flex-col  rounded-t-[10px] rounded-b-[5px] bg-white border border-[#e5e5e9]">
                    <span className='text-[12px] font-medium text-[#9496AC] pl-3 pt-2 pb-1]'>Kreditin müddəti</span>
                    <span className='text-[16px] text-[#222222] font-normal pl-3  pb-1.5'>{creditTime}</span>
                    <input type="range" min={12} max={59} value={creditTime} className='w-full ' onChange={(e) => setCreditTime(e.target.value)} />
                  </div>

                  <div className="flex gap-1.25 items-center">
                    <IoInformationCircleSharp className='text-[14px] text-[#52575c]' />
                    <span className='font-normal text-[12px] text-[#52575c]'>Ümumi kredit öhdəliyindən asılı olaraq illik faiz dərəcəsi fərqli ola bilər.</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-white py-6 px-10 w-[50%] h-full">
                  <div className="flex flex-col items-center justify-center">
                    <h2 className='font-semibold text-[16px] text-[#222222]'>Minimal ilkin ödəniş</h2>
                    <span className='text-[32px] text-[#ec3342] font-semibold'>{Math.round(minIlkinOdenis)} ₼</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <h2 className='font-semibold text-[16px] text-[#222222]'>Aylıq kredit ödənişi</h2>
                    <span className='text-[32px] text-[#ec3342] font-semibold'>{Math.round(ayliqKreditOdenis)} ₼</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <h2 className='font-semibold text-[16px] text-[#222222]'>İllik faiz dərəcəsi</h2>
                    <span className='text-[32px] text-[#ec3342] font-semibold'>{Math.round(illikFaizDerece)} %</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <h2 className='font-semibold text-[16px] text-[#222222]'>Kredit məbləği</h2>
                    <span className='text-[32px] text-[#ec3342] font-semibold'>{Math.round(creditAmount)} ₼</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <h2 className='font-semibold text-[16px] text-[#222222]'>Komissiya (0.5%)</h2>
                    <span className='text-[32px] text-[#ec3342] font-semibold'>{Math.round(comission)} ₼</span>
                  </div>
                </div>
              </div>
            </div>
            <h2 className='text-[30px] text-[#222222] font-semibold my-10 text-start flex items-start'>Məlumatlar</h2>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center w-full my-15 bg-[#F9F9FA] py-6">
            <div className="inline-flex w-fit items-center justify-center bg-[#F3F3F5] rounded-[5px]  overflow-hidden">
              {
                CarCreditInfo.map((item, id) => (
                  <span onClick={() => setSelectedFaq(item.category)} key={id} className={`cursor-pointer p-2 ${selectedFaq === item.category ? "text-white bg-[#52575C] rounded-[5px]" : "text-black   bg-[#F3F3F5] hover:bg-[#A0A4A8] rounded-[5px]"} transition duration-200 text-[16px] px-5 font-semibold `}> {item.category}</span>
                ))
              }
            </div>
            <div className="flex flex-col w-[75%] items-center justify-center gap-1 my-3">
              {
                filteredDescription?.description?.map((item, index) => (
                  <div key={index} className="flex flex-col w-full items-center justify-center ">
                    <p className='text-[16px] text-[#222222]  font-normal w-full items-center justify-center '>
                      {item.desc}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default CarCredit
