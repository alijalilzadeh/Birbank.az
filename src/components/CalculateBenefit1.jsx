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
      <div className="flex items-center justify-center w-full my-6 selection:bg-[#B3D4FC]">
        <div className="flex flex-col gap-8 w-full sm:w-[75%] md:w-[95%] lg:w-[75%]">
          <div className="flex flex-col items-start  justify-between p-4 gap-2 sm:flex-col md:flex-row  sm:items-start sm:gap-5 lg:items-center lg:p-0 w-full">
            <h2 className=' text-[30px] text-[#222222] font-semibold'>Faydasını hesabla</h2>
            <div className="inline-flex w-fit  bg-[#F3F3F5] items-center justify-center overflow-hidden rounded-lg sm:overflow-x-hidden">
              {
                calc.map((item) => (
                  <span onClick={() => setCalculation(item.p)} className={`text-[14px] sm:text-[14px] md:text-[16px]  ${item.p === calculation ? "text-white  bg-[#25282B] " : "bg-[#F3F3F5] text-[#9498ac]"} cursor-pointer  font-normal rounded-lg p-3 sm:px-6 sm:py-3`}>{item.p}</span>

                ))
              }
            </div>
          </div>
          <div className="flex flex-col items-start justify-between px-4  py-8 gap-7 rounded-[10px] sm:px-4 sm:flex-col md:px-25.25 md:flex-row lg:px-42.5  bg-[#F3F3F5] w-full">
            {
              calculation === 'Nağd kredit' ? (
                <>
                  <div className="flex flex-col gap-5 justify-center w-full sm:w-full sm:gap-5 lg:w-[50%] lg:gap-6">

                    <h2 className='text-[24px] text-[#25282B] font-[550]'>Nağd krediti hesabla</h2>
                    <div className="flex flex-col gap-6 w-full ">
                      <div className="flex flex-col  rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-3 pt-2 pb-px'>Məbləğ</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-3  pb-1.5'>{amountNagd}</span>
                        <input type="range" min={300} max={30000} value={amountNagd} onChange={(e) => setAmountNagd(e.target.value)} />
                      </div>

                      <div className="flex flex-col   rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-3 pt-2 pb-px'>Faiz</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-3  pb-1.5'>{percentNagd}</span>
                        <input type="range" min={11} max={20} value={percentNagd} onChange={(e) => setpercentNagdNagd(e.target.value)} />
                      </div>

                      <div className="flex flex-col   rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-3 pt-2 pb-px'>Müddət (Ay)</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-3  pb-1.5'>{timeNagd}</span>
                        <input type="range" min={3} max={59} value={timeNagd} onChange={(e) => setTimeNagd(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-10 rounded-[10px] bg-white w-full sm:w-full lg:w-[50%] ">
                    <div className="flex items-center gap-8 border-b border-b-[#e6e6ed] pb-4">
                      <div className="flex bg-[#F3F3F5] rounded-full w-13.75 p-0.75">
                        <img src={CashPaymentImg} className='w-full object-fit' />
                      </div>
                      <div className="flex flex-col ">
                        <span className='text-[24px] text-[#25282B] font-bold'>{monthlyPayment} ₼</span>
                        <span className='text-[14px] text-[#25282B] font-semibold'>Aylıq ödəniş</span>
                      </div>
                    </div>
                    <p className=' flex gap-1.5 '>
                      <IoInformationCircleOutline className='text-[16px] text-[#9496AC]' />
                      <span className='text-[12px] text-[#9496AC]'>
                        Müştərilərimizə asanlıqla əldə edə biləcəkləri taksit kartı təklif edirik.
                      </span>
                    </p>
                    <Link to="*" className='rounded-[10px] bg-[#EC3342] text-[16px] font-normal text-white text-center py-3.75'>Sifariş et</Link>
                  </div>
                </>) : (
                <>
                  <div className="flex flex-col gap-5 justify-center w-full sm:w-full sm:gap-5 lg:w-[50%] lg:gap-6">

                    <h2 className='text-[24px] text-[#25282B] font-[550]'>Birbank kartı</h2>
                    <div className="flex items-center gap-4">
                      <span onClick={() => setCashWithDrawal('Nağdlaşdırma')} className={`py-1.5 px-4 rounded-md text-[14px] font-normal ${cashWithDrawal === 'Nağdlaşdırma' ? "text-[#ec3342]  border-[#ec3342]  " : " text-[#caccd1] border-[#caccd1]"}  bg-white border cursor-pointer`}>Nağdlaşdırma</span>
                      <span onClick={() => setCashWithDrawal('Taksit')} className={`py-1.5 px-4 rounded-md text-[14px] font-normal  ${cashWithDrawal === 'Taksit' ? "text-[#ec3342]  border-[#ec3342]  " : " text-[#caccd1] border-[#caccd1]"} bg-white border  cursor-pointer`}>Taksit</span>
                    </div>
                    <div className="flex flex-col gap-6 w-full ">
                      <div className="flex flex-col  rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-3 pt-2 pb-px'>Məbləğ</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-3  pb-1.5'>{amountCard}</span>
                        <input step={100} type="range" min={500} max={10000} value={amountCard} onChange={(e) => setAmountCard(e.target.value)} />
                      </div>

                      <div className="flex flex-col   rounded-t-[10px] rounded-b-[5px] bg-white">
                        <span className='text-[12px] font-semibold text-[#9496AC] pl-3 pt-2 pb-px'>Müddət (Ay)</span>
                        <span className='text-[16px] text-[#222222] font-normal pl-3  pb-1.5'>{timeCard}</span>
                        <input type="range" min={3} max={24} value={timeCard} onChange={(e) => setTimeCard(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-10 rounded-[10px] bg-white w-full sm:w-full lg:w-[50%] ">
                    <div className="flex items-center gap-8 pb-4">
                      <div className="flex bg-[#F3F3F5] rounded-full w-13.75 p-0.75">
                        <img src="https://birbank.az/file/birbank_rate_5ca0ab621b.svg" className='w-full object-fit' />
                      </div>
                      <div className="flex flex-col ">
                        <span className='text-[24px] text-[#25282B] font-bold'>{percentCard} %</span>
                        <span className='text-[14px] text-[#25282B] font-semibold'>Faiz dərəcəsi</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 border-b border-b-[#e6e6ed] pb-4">
                      <div className="flex bg-[#F3F3F5] rounded-full w-13.75 p-0.75">
                        <img src={CashPaymentImg} className='w-full object-fit' />
                      </div>
                      <div className="flex flex-col ">
                        <span className='text-[24px] text-[#25282B] font-bold'>{monthlyPaymentCard} ₼</span>
                        <span className='text-[14px] text-[#25282B] font-semibold'>Aylıq ödəniş</span>
                      </div>
                    </div>
                    <p className=' flex gap-1.5 '>
                      <IoInformationCircleOutline className='text-[16px] text-[#9496AC]' />
                      <span className='text-[12px] text-[#9496AC]'>
                        Müştərilərimizə asanlıqla əldə edə biləcəkləri taksit kartı təklif edirik.
                      </span>
                    </p>
                    <Link to="*" className='rounded-[10px] bg-[#EC3342] text-[16px] font-normal text-white text-center py-3.75'>Sifariş et</Link>
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
