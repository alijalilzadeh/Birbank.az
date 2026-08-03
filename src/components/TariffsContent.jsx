import React from 'react'
import { Link } from 'react-router-dom'
import TarifBanner from '../assets/Tariffs/tariffs_banner.png'
import { useState } from 'react'
import { LiaFileDownloadSolid } from "react-icons/lia";
import { Helmet } from 'react-helmet-async';
const TariffsContent = () => {
  const [tariffStatus, setTariffStatus] = useState("tarif");
  return (
    <>
      <Helmet>
        <title>Tariflər | Birbank</title>
        <meta
          name="description"
          content="Ana səhifənin təsviri"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[95%]  lg:w-[75%] h-full">
          <div className="flex flex-col w-full h-full">
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Tariflər</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full bg-[linear-gradient(98.65deg,rgb(236,50,66)_0%,rgb(153,0,0)_100%)] rounded-xl relative overflow-hidden h-full lg:py-16 sm:flex-col lg:flex-row">
            <div className="flex flex-col w-full h-full gap-4 px-4 pt-12 sm:px-4 sm:pt-12 lg:py-12 lg:px-18 lg:w-[70%]">
              <h2 className='text-[32px] font-semibold text-white leading-10'>Tariflər</h2>
            </div>
            <div className="flex items-end justify-end w-full  sm:w-full lg:w-[50%] lg:py-12 lg:px-2.5 ">
              <img src={TarifBanner} className='w-65 object-contain self-end  lg:absolute bottom-0 right-10 h-70' alt="BirPay" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-full my-20 ">
          <div className="flex items-center justify-center">
            <span onClick={() => setTariffStatus("tarif")} className={`rounded-lg infline-flex w-fit px-5 py-2 ${tariffStatus === "tarif" ? " bg-[#EC3342] text-white" : "bg-[#F3F3F5] text-[#9496AC]"} font-normal cursor-pointer text-[14px] sm:text-[14px] md:text-[16px]`}>Tariflər</span>
            <span onClick={() => setTariffStatus("melumat")} className={`rounded-lg infline-flex w-fit px-5 py-2 ${tariffStatus === "tarif" ? " bg-[#F3F3F5] text-[#9496AC]" : "bg-[#EC3342] text-white"} font-normal cursor-pointer text-[14px] sm:text-[14px] md:text-[16px]`}>Məlumat</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-7 w-full sm:w-[75%] md:w-[95%] lg:w-[75%] items-center justify-center">
            {tariffStatus === "tarif" ?
              (
                <>
                  <Link to='https://birbank.az/file/download_194_2246487a7c.xlsx' className=" flex items-center justify-between p-6 rounded-xl bg-[#F3F3F5] w-full">
                    <p className='text-[16px] text-[#252525] font-medium'>Fiziki şəxslər üzrə tariflər</p>
                    <LiaFileDownloadSolid className='text-[#EC3342] text-[28px]' />
                  </Link>

                  <Link to='https://birbank.az/file/download_197_5079ed4923.xlsx' className=" flex items-center justify-between p-6 rounded-xl bg-[#F3F3F5] w-full">
                    <p className='text-[16px] text-[#252525] font-medium'>Birbank mobil tətbiqi üzrə tariflər</p>
                    <LiaFileDownloadSolid className='text-[#EC3342] text-[28px]' />
                  </Link>

                  <Link to='https://birbank.az/file/download_209_9370f0eb93.xlsx' className=" flex items-center justify-between p-6 rounded-xl bg-[#F3F3F5] w-full">
                    <p className='text-[16px] text-[#252525] font-medium'>Ödəniş kartları üzrə tariflər</p>
                    <LiaFileDownloadSolid className='text-[#EC3342] text-[28px]' />
                  </Link>

                  <Link to='https://birbank.az/file/elave_sertler_8d1790783e.pdf' className=" flex items-center justify-between p-6 rounded-xl bg-[#F3F3F5] w-full" reloadDocument>
                    <p className='text-[16px] text-[#252525] font-medium'>Kartdan tutulan vergilər</p>
                    <LiaFileDownloadSolid className='text-[#EC3342] text-[28px]' />
                  </Link>

                  <Link to='https://birbank.az/file/Hueququ_s_xsl_r_v_f_rdi_sahibkarlar_uezr_tarifl_r_az_49d56b4fe3.pdf' className=" flex items-center justify-between p-6 rounded-xl bg-[#F3F3F5] w-full" reloadDocument>
                    <p className='text-[16px] text-[#252525] font-medium'>Hüquqi şəxslər və fərdi sahibkarlar üzrə tariflər</p>
                    <LiaFileDownloadSolid className='text-[#EC3342] text-[28px]' />
                  </Link>

                  <Link to='https://birbank.az/file/Microsoft_Word_standart_sertler_TC_11_noyabr_2016_a50e42a99f.pdf' className=" flex items-center justify-between p-6 rounded-xl bg-[#F3F3F5] w-full" reloadDocument>
                    <p className='text-[16px] text-[#252525] font-medium'>Standart şərtlər</p>
                    <LiaFileDownloadSolid className='text-[#EC3342] text-[28px]' />
                  </Link>

                  <Link to='https://birbank.az/file/elave_sertler_8d1790783e.pdf' className=" flex items-center justify-between p-6 rounded-xl bg-[#F3F3F5] w-full" reloadDocument>
                    <p className='text-[16px] text-[#252525] font-medium'>Əlavə şərtlər</p>
                    <LiaFileDownloadSolid className='text-[#EC3342] text-[28px]' />
                  </Link>
                </>
              ) : (
                <>
                  <Link to='https://birbank.az/file/az_sheet_20250707104137_1_a271f48a15.xlsx' className="col-span-3 row-span-2 flex items-center justify-between p-6 rounded-xl bg-[#F3F3F5] w-full" reloadDocument>
                    <p className='text-[16px] text-[#252525] font-medium'>Ödəniş sərancamının icrası üzrə məlumatlandırma forması</p>
                    <LiaFileDownloadSolid className='text-[#EC3342] text-[28px]' />
                  </Link>

                  <Link to='https://birbank.az/file/az_sheet_20250707104155_256e30575f.xlsx' className="col-span-3 row-span-2 flex items-center justify-between p-6 rounded-xl bg-[#F3F3F5] w-full" reloadDocument>
                    <p className='text-[16px] text-[#252525] font-medium'>Ödəniş hesabının açılması üzrə məlumatlandırma forması</p>
                    <LiaFileDownloadSolid className='text-[#EC3342] text-[28px]' />
                  </Link>
                </>

              )}

          </div>
        </div>
      </div>
    </>
  )
}

export default TariffsContent
