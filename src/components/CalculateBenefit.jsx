import React from 'react'
import { Link } from 'react-router-dom'
import CashPaymentImg from '../assets/nagd-kredit-odenis.svg'
import { IoInformationCircleOutline } from "react-icons/io5";
import '../index.css'
import '../input.css'
import { useState,useMemo } from 'react';

const CalculateBenefit = () => {
  const [amount, setAmount] = useState(300);
  const [percent, setPercent] = useState(11);
  const [time, setTime] = useState(3);

  const [resultPayment,setResultPayment] = useState(101.84);

    const monthlyPayment = useMemo(() => {
    const P = Number(amount);
    const annualRate = Number(percent);
    const n = Number(time);

    const r = annualRate / 100 / 12;

    if (r === 0) return P / n;

    const payment =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    return payment.toFixed(2);
  }, [amount, percent, time]);
  return (
    <>
      <div className="flex items-center justify-center w-full mt-[24px]">
        <div className="flex flex-col gap-[32px] w-[75%]">
          <div className="flex items-center justify-between w-full">
            <h2 className='text-[30px] text-[#222222] font-[550]'>Faydasını hesabla</h2>
            <div className="flex items-center justify-center">
              <Link className='text-[16px] px-[24px] py-[12px] text-white font-normal bg-[#25282B] rounded-[8px]'>Nağd kredit</Link>
              <Link className='text-[16px] px-[24px] py-[12px] text-[#9496AC] font-normal bg-[#F3F3F5] rounded-[8px]'>Birbank kartı</Link>
              <Link className='text-[16px] px-[24px] py-[12px] text-[#9496AC] font-normal bg-[#F3F3F5] rounded-[8px]'>Depozit</Link>
            </div>
          </div>
          <div className="flex items-center justify-between gap-7 rounded-[10px] px-[170px] py-[32px] bg-[#F3F3F5] w-full">
            <div className="flex flex-col gap-6 justify-center w-[50%]">
              <h2 className='text-[24px] text-[#25282B] font-[550]'>Nağd krediti hesabla</h2>
              <div className="flex flex-col gap-6 w-full ">
                <div className="flex flex-col  rounded-t-[10px] rounded-b-[5px] bg-white">
                  <span className='text-[12px] font-semibold text-[#9496AC] pl-[12px] pt-[8px] pb-[4px]'>Məbləğ</span>
                  <span className='text-[16px] text-[#222222] font-normal pl-[12px]  pb-[6px]'>{amount}</span>
                  <input type="range" min={300} max={30000} value={amount}  onChange={(e) => setAmount(e.target.value)}/>
                </div>

                <div className="flex flex-col   rounded-t-[10px] rounded-b-[5px] bg-white">
                  <span className='text-[12px] font-semibold text-[#9496AC] pl-[12px] pt-[8px] pb-[4px]'>Faiz</span>
                  <span className='text-[16px] text-[#222222] font-normal pl-[12px]  pb-[6px]'>{percent}</span>
                  <input type="range" min={11} max={20} value={percent} onChange={(e) => setPercent(e.target.value)} />
                </div>

                <div className="flex flex-col   rounded-t-[10px] rounded-b-[5px] bg-white">
                  <span className='text-[12px] font-semibold text-[#9496AC] pl-[12px] pt-[8px] pb-[4px]'>Müddət (Ay)</span>
                  <span className='text-[16px] text-[#222222] font-normal pl-[12px]  pb-[6px]'>{time}</span>
                  <input type="range" min={3} max={59} value={time} onChange={(e) => setTime(e.target.value)} />
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
                <IoInformationCircleOutline  className='text-[16px] text-[#9496AC]'/>
                <span className='text-[12px] text-[#9496AC]'>
                  Müştərilərimizə asanlıqla əldə edə biləcəkləri taksit kartı təklif edirik.
                </span>
              </p>
              <Link to="*" className='rounded-[10px] bg-[#EC3342] text-[16px] font-normal text-white text-center py-[15px]'>Sifariş et</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalculateBenefit
