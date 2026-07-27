import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CashPaymentImg from '../assets/nagd-kredit-odenis.svg'
import { IoInformationCircleOutline } from "react-icons/io5";
import '../index.css'
import '../input.css'
import { useState, useMemo } from 'react';

const CalculateBenefit = () => {
  //Nagd kredit kalkulyatoru
  const [cashWithDrawal, setCashWithDrawal] = useState('Nağdlaşdırma')
  const [amountNagd, setAmountNagd] = useState(10000);
  const [percentNagd, setpercentNagdNagd] = useState(11);
  const [timeNagd, setTimeNagd] = useState(3);



  const [resultPaymentNagd, setResultPaymentNagd] = useState(101.84);

  const monthlyPayment = useMemo(() => {
    const P = Number(amountNagd);
    const annualRate = Number(percentNagd);
    const n = Number(timeNagd);

    const r = annualRate / 100 / 12;

    if (r === 0) return P / n;

    const payment =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    return payment.toFixed(2);
  }, [amountNagd, percentNagd, timeNagd]);
  const [calculation, setCalculation] = useState('Nağd kredit');
  const calc = [
    {
      p: 'Nağd kredit'
    },
    {
      p: 'Birbank kartı'
    },
    {
      p: 'Depozit'
    }
  ]

  //Birbank kart kalkulyatoru
  const [amountCard, setAmountCard] = useState(1000)
  const [percentCard, setPercentCard] = useState(25)
  useEffect(() => {
    setPercentCard(cashWithDrawal === 'Nağdlaşdırma' ? 25 : 0)
  }, [cashWithDrawal])
  const [timeCard, setTimeCard] = useState(6)

  const monthlyPaymentCard = useMemo(() => {
    if (percentCard === 0) {
      return Math.round(amountCard / timeCard);
    }

    const monthlyRate = percentCard / 100 / 12;

    const payment =
      amountCard *
      (monthlyRate * Math.pow(1 + monthlyRate, timeCard)) /
      (Math.pow(1 + monthlyRate, timeCard) - 1);

    return (payment.toFixed(2));
  }, [amountCard, percentCard, timeCard]);


  return (
    <>
      <div className="flex items-center justify-center w-full my-[24px] selection:bg-[#B3D4FC]">
        <div className="flex flex-col gap-[32px] w-[75%]">
          <div className="flex items-center justify-between w-full">
            <h2 className='text-[30px] text-[#222222] font-[550]'>Faydasını hesabla</h2>
            <div className="inline-flex w-fit  bg-[#F3F3F5] items-center justify-center overflow-hidden rounded-lg">
              {
                calc.map((item) => (
                  <span onClick={() => setCalculation(item.p)} className={`text-[16px] px-6 py-3 ${item.p === calculation ? "text-white  bg-[#25282B] " : "bg-[#F3F3F5] text-[#9498ac]"} cursor-pointer  font-normal rounded-lg`}>{item.p}</span>

                ))
              }
            </div>
          </div>
          <div className="flex items-start justify-between gap-7 rounded-[10px] px-[170px] py-[32px] bg-[#F3F3F5] w-full">
            {
              calculation === 'Nağd kredit' ? (
                <>
                  <div className="flex flex-col gap-6 justify-center w-[50%]">

                    <h2 className='text-[24px] text-[#25282B] font-[550]'>Nağd krediti hesabla</h2>
                    <div className="flex flex-col gap-6 w-full ">
                      <div className="flex flex-col  rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-[12px] pt-[8px] pb-[4px]'>Məbləğ</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-[12px]  pb-[6px]'>{amountNagd}</span>
                        <input type="range" min={300} max={30000} value={amountNagd} onChange={(e) => setAmountNagd(e.target.value)} />
                      </div>

                      <div className="flex flex-col   rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-[12px] pt-[8px] pb-[4px]'>Faiz</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-[12px]  pb-[6px]'>{percentNagd}</span>
                        <input type="range" min={11} max={20} value={percentNagd} onChange={(e) => setpercentNagdNagd(e.target.value)} />
                      </div>

                      <div className="flex flex-col   rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-[12px] pt-[8px] pb-[4px]'>Müddət (Ay)</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-[12px]  pb-[6px]'>{timeNagd}</span>
                        <input type="range" min={3} max={59} value={timeNagd} onChange={(e) => setTimeNagd(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-[40px] rounded-[10px] bg-white w-[50%] ">
                    <div className="flex items-center gap-8 border-b-1 border-b-[#e6e6ed] pb-[16px]">
                      <div className="flex bg-[#F3F3F5] rounded-full w-[55px] p-[3px]">
                        <img src={CashPaymentImg} className='w-full object-fit' />
                      </div>
                      <div className="flex flex-col ">
                        <span className='text-[24px] text-[#25282B] font-bold'>{monthlyPayment} ₼</span>
                        <span className='text-[14px] text-[#25282B] font-semibold'>Aylıq ödəniş</span>
                      </div>
                    </div>
                    <p className=' flex gap-[6px] '>
                      <IoInformationCircleOutline className='text-[16px] text-[#9496AC]' />
                      <span className='text-[12px] text-[#9496AC]'>
                        Müştərilərimizə asanlıqla əldə edə biləcəkləri taksit kartı təklif edirik.
                      </span>
                    </p>
                    <Link to="*" className='rounded-[10px] bg-[#EC3342] text-[16px] font-normal text-white text-center py-[15px]'>Sifariş et</Link>
                  </div>
                </>) : (
                <>
                  <div className="flex flex-col gap-6 justify-center w-[50%]">

                    <h2 className='text-[24px] text-[#25282B] font-[550]'>Birbank kartı</h2>
                    <div className="flex items-center gap-4">
                      <span onClick={() => setCashWithDrawal('Nağdlaşdırma')} className={`py-1.5 px-4 rounded-md text-[14px] font-normal ${cashWithDrawal === 'Nağdlaşdırma' ? "text-[#ec3342]  border-[#ec3342]  " : " text-[#caccd1] border-[#caccd1]"}  bg-white border cursor-pointer`}>Nağdlaşdırma</span>
                      <span onClick={() => setCashWithDrawal('Taksit')} className={`py-1.5 px-4 rounded-md text-[14px] font-normal  ${cashWithDrawal === 'Taksit' ? "text-[#ec3342]  border-[#ec3342]  " : " text-[#caccd1] border-[#caccd1]"} bg-white border  cursor-pointer`}>Taksit</span>
                    </div>
                    <div className="flex flex-col gap-6 w-full ">
                      <div className="flex flex-col  rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-[12px] pt-[8px] pb-[4px]'>Məbləğ</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-[12px]  pb-[6px]'>{amountCard}</span>
                        <input step={100} type="range" min={500} max={10000} value={amountCard} onChange={(e) => setAmountCard(e.target.value)} />
                      </div>

                      <div className="flex flex-col   rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-[12px] pt-[8px] pb-[4px]'>Müddət (Ay)</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-[12px]  pb-[6px]'>{timeCard}</span>
                        <input type="range" min={3} max={24} value={timeCard} onChange={(e) => setTimeCard(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-[40px] rounded-[10px] bg-white w-[50%] ">
                    <div className="flex items-center gap-8 pb-[16px]">
                      <div className="flex bg-[#F3F3F5] rounded-full w-[55px] p-[3px]">
                        <img src="https://birbank.az/file/birbank_rate_5ca0ab621b.svg" className='w-full object-fit' />
                      </div>
                      <div className="flex flex-col ">
                        <span className='text-[24px] text-[#25282B] font-bold'>{percentCard} %</span>
                        <span className='text-[14px] text-[#25282B] font-semibold'>Faiz dərəcəsi</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 border-b-1 border-b-[#e6e6ed] pb-[16px]">
                      <div className="flex bg-[#F3F3F5] rounded-full w-[55px] p-[3px]">
                        <img src={CashPaymentImg} className='w-full object-fit' />
                      </div>
                      <div className="flex flex-col ">
                        <span className='text-[24px] text-[#25282B] font-bold'>{monthlyPaymentCard} ₼</span>
                        <span className='text-[14px] text-[#25282B] font-semibold'>Aylıq ödəniş</span>
                      </div>
                    </div>
                    <p className=' flex gap-[6px] '>
                      <IoInformationCircleOutline className='text-[16px] text-[#9496AC]' />
                      <span className='text-[12px] text-[#9496AC]'>
                        Müştərilərimizə asanlıqla əldə edə biləcəkləri taksit kartı təklif edirik.
                      </span>
                    </p>
                    <Link to="*" className='rounded-[10px] bg-[#EC3342] text-[16px] font-normal text-white text-center py-[15px]'>Sifariş et</Link>
                  </div>
                </>

              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CalculateBenefit
