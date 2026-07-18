import React, { useState } from 'react'
import newsData from '../ApIDatas/newsData.json'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";

const Services = () => {

  const flags = {
    USD: "https://flagcdn.com/w40/us.png",
    EUR: "https://flagcdn.com/w40/eu.png",
    GBP: "https://flagcdn.com/w40/gb.png",
    RUB: "https://flagcdn.com/w40/ru.png",
  };

  const [buyStatus, setBuyStatus] = useState("buy");

  const today = new Date();
  const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  const raw = newsData?.pageProps?.data;
  const targetCurrencies = ["USD", "EUR", "GBP", "RUB"];

  const grouped = {};

  raw.forEach(item => {
    const code = item.currency.code;

    if (!targetCurrencies.includes(code)) return;

    if (!grouped[code]) {
      grouped[code] = { code };
    }

    if (item.type === "CENTRAL_BANK") {
      grouped[code].centralBuy = item.buy;
      grouped[code].centralSell = item.sell;
    }

    if (item.type === "CASH") {
      grouped[code].cashBuy = item.buy;
      grouped[code].cashSell = item.sell;
    }

    if (item.type === "NON_CASH") {
      grouped[code].nonCashBuy = item.buy;
      grouped[code].nonCashSell = item.sell;
    }
  });

  const result = targetCurrencies.map(code => grouped[code]);

  return (
    <div className="flex items-center justify-center w-full my-24ection:bg-[#B3D4FC]">
      <div className="flex flex-col gap-2 w-[75%]">

        <h2 className='text-[#25282b] font-semibold text-[30px]'>
          {newsData.pageProps.messages.home.exchangeRate.services}
        </h2>

        <div className="flex items-center gap-8 justify-between w-full">

          <div className="flex flex-col gap-4 w-[50%] rounded-xl bg-[#F9F9FA] p-6">

            <h2 className='text-[24px] text-[#222222] font-medium'>
              {newsData.pageProps.messages.home.exchangeRateTable.exchangeRates}
            </h2>

            <div className="flex items-center">
              <button
                onClick={() => setBuyStatus("buy")}
                className={`rounded-md px-6 cursor-pointer text-[14px] py-2 ${buyStatus === "buy"
                    ? "bg-[#25282B] text-white"
                    : "bg-[#FFFFFF] text-[#9496AC]"
                  }`}
              >
                {newsData.pageProps.messages.home.exchangeRateTable.buy}
              </button>

              <button
                onClick={() => setBuyStatus("sell")}
                className={`rounded-md px-6 cursor-pointer text-[14px] py-2 ${buyStatus === "sell"
                    ? "bg-[#25282B] text-white"
                    : "bg-[#FFFFFF] text-[#9496AC]"
                  }`}
              >
                {newsData.pageProps.messages.home.exchangeRateTable.sell}
              </button>
            </div>

            <div className="flex items-center gap-2 justify-between">
              <div className='flex flex-col gap-6'>
                <h2 className='text-[16px] font-semibold'>Valyuta</h2>

                {result.map((item, i) => (
                  <p key={i} className='flex gap-2 items-center'>
                    <img src={flags[item.code]} className='w-8' />
                    <span className='text-[18px]'>{item.code}</span>
                  </p>
                ))}
              </div>

              <div className='flex flex-col gap-6'>
                <h2 className='text-[16px] font-semibold'>Mərkəzi Bank</h2>

                {result.map((item, i) => (
                  <span key={i}>
                    {buyStatus === "buy" ? item.centralBuy : item.centralSell}
                  </span>
                ))}
              </div>

              <div className='flex flex-col gap-6'>
                <h2 className='text-[16px] font-semibold'>Nağd</h2>

                {result.map((item, i) => (
                  <span key={i}>
                    {buyStatus === "buy" ? item.cashBuy : item.cashSell}
                  </span>
                ))}
              </div>

              <div className='flex flex-col gap-6'>
                <h2 className='text-[16px] font-semibold'>Nağdsız</h2>

                {result.map((item, i) => (
                  <span key={i}>
                    {buyStatus === "buy" ? item.nonCashBuy : item.nonCashSell}
                  </span>
                ))}
              </div>

            </div>

            <div className="flex items-center justify-between my-1.5">
              <p className='text-[#80858A] text-[14px]'>
                Kurslar bu tarixə təyin edilmişdir: {formattedDate}
              </p>

              <Link to="/currency-rates" className='flex items-center gap-1' reloadDocument>
                <span className='text-[#ED3342] text-[14px]'>
                  Bütün məzənnələr
                </span>
                <GoArrowRight className='text-[#ED3342]' />
              </Link>
            </div>

          </div>
          <div className="grid grid-cols-3 grid-rows-6 gap-4 w-[50%]">
            {newsData?.pageProps?.initialState?.home?.services?.map((item, index) => (
              <Link
                to={item.link.href}
                key={index}
                className="group overflow-hidden relative col-span-3 row-span-2 flex items-center justify-between bg-[#F3F3F5] rounded-xl px-5.75 py-4"
              >
                <div className="flex flex-col gap-2 w-[50%]">
                  <h2 className='text-[24px]'>{item.title}</h2>
                  <p className='text-[14px]'>{item.description}</p>
                </div>

                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  className='absolute bottom-0 right-5 w-60 transition group-hover:scale-[1.05]'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services