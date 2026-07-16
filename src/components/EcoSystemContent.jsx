import React from 'react'
import { Link } from 'react-router-dom'
import BirPay from '../assets/EcoSystem/BirPay.png'
import { BsCameraVideoFill } from 'react-icons/bs'
import BirBankMainScreen from '../assets/EcoSystem/BirBankMainScreen.svg'
import BirBankBiznes from '../assets/EcoSystem/BirBankBiznes.svg'
import BirBankInvest from '../assets/EcoSystem/BirBankInvest.svg'
import BirMarket from '../assets/EcoSystem/BirMarket.svg'
import M10 from '../assets/EcoSystem/M10.svg'
import Trendyol from '../assets/EcoSystem/Trendyol.svg'
import BakiKart from '../assets/EcoSystem/BakiKart.svg'

const EcoSystemContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[75%]">
          <div className="flex flex-col w-full">
            <div className="flex gap-2 my-[12px]">
              <Link className='text-[14px] p-[15px] text-[#6D7478]' to="/">Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-[15px] pl-0' to="/ninja">Investorlar</Link>
            </div>
          </div>
          <div className="flex justify-between w-full bg-[linear-gradient(98.65deg,_rgb(236,50,66)_0%,_rgb(153,0,0)_100%)] rounded-[10px] relative overflow-hidden">
            <div className="flex flex-col w-[70%] gap-4 py-[48px] px-[72px]">
              <h2 className='text-[32px] font-[600] text-white leading-10'>Qafqazın ilk tam inteqrasiyalı rəqəmsal platforması</h2>
              <p className='text-[16px] font-[400] text-white'>Bir ekosistemi regionun rəqəmsal gələcəyini formalaşdıraraq milyonlarla insanı, biznesi və innovasiyanı bir çətir altında birləşdirir.</p>
              <Link className='group px-[64px] py-[18px] inline-flex gap-2 w-fit items-center justify-center bg-white rounded-[10px]'>
                <BsCameraVideoFill className='group-hover:text-red-600' />
                <span className='text-[16px] font-[400] text-black group-hover:text-red-600 transition duration-200'>Ekosistem videosunu izlə</span>
              </Link>
            </div>
            <div className="flex items-center justify-center w-[50%] py-[48px] px-[10px] ">
              <img src={BirPay} className='w-[414px] object-cover flex absolute bottom-0 right-10 h-full' alt="BirPay" />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h2 className='mt-[48px] mb-[30px] text-[30px] font-[600] text-[#222222]'>Əsas nəticələrimiz!</h2>
            <div className="flex items-center w-full justify-between py-[56px] px-[24px] bg-[#25282B] rounded-[16px]">
              <div className="flex flex-col">
                <h2 className='text-white text-[56px] font-[700]'>4.5mln</h2>
                <p className='text-[#9095a0] text-[18px] font-[600]'>Ümumi istifadəçi sayı</p>
              </div>

              <div className="flex flex-col">
                <h2 className='text-white text-[56px] font-[700]'>8.2mlrd</h2>
                <p className='text-[#9095a0] text-[18px] font-[600]'>Ümumi istifadəçi sayı</p>
              </div>

              <div className="flex flex-col">
                <h2 className='text-white text-[56px] font-[700]'>7500+</h2>
                <p className='text-[#9095a0] text-[18px] font-[600]'>Əməkdaş sayı</p>
              </div>

              <div className="flex flex-col">
                <h2 className='text-white text-[56px] font-[700]'>42%</h2>
                <p className='text-[#9095a0] text-[18px] font-[600] whitespace-normal'>Nağdsız əməliyyatların həcmi</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <h2 className='mt-[48px] mb-[30px] text-[30px] font-[600] text-[#222222]'>Brendlərimiz</h2>

            <div className="grid grid-cols-4 grid-rows-6 gap-6 items-center justify-center">
              <div className="flex col-span-2 row-span-2 gap-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden h-full">
                <div className="flex flex-col gap-1 w-[60%] p-[24px] pl-[24px] pr-[16px]">
                  <p className='text-[32px] text-[#25282b] font-[600]'>Birbank</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Azərbaycanın ilk rəqəmsal bankı və bazar lideri. Kapital Bank-ın internet bankçılıq məhsulu – Birbank hər kəs üçün bank əməliyyatlarını əlçatan edir.</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>34.1%</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>İstehlak kreditlərində bazar payı</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>#1</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Ölkənin ilk rəqəmsal bankı</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>3.5 mln</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Birbank sayı</p>
                </div>
                <img src={BirBankMainScreen} className='object-contain absolute bottom-0 right-0' alt="Birbank Main Screen" />
              </div>

              <div className="flex col-span-2 row-span-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden cursor-pointer h-full">
                <div className="flex flex-col gap-1 w-[60%] p-[24px] pl-[24px] pr-[16px] ">
                  <p className='text-[32px] text-[#25282b] font-[600]'>Birbank Biznes</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Kiçik və orta sahibkarların bütün maliyyə işlərini bir tətbiqdə toplayan etibarlı biznes tərəfdaşı.</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>106 406</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Mikro biznes müştərilərinin sayı</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>16 716</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Kiçik və orta biznes müştərilərinin sayı</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>95.4%</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Rəqəmsal məhsullardan istifadə edir</p>
                </div>
                <img src={BirBankBiznes} className='absolute bottom-0 right-0' alt="Birbank Biznes" />
              </div>

              <div className="flex col-span-2 row-span-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden cursor-pointer h-full">
                <div className="flex flex-col gap-1 w-[60%] p-[24px] pl-[24px] pr-[16px] ">
                  <p className='text-[32px] text-[#25282b] font-[600]'>Birbank Invest</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Dünyanın ən böyük şirkətlərinə sürətli və təhlükəsiz şəkildə investisiya etmək imkanı yaradan platforma.</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>13 120</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Potensial investorların sayı</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>11 000+</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Şirkətə investisiya imkanı</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>$1</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Minimal investisiya məbləği</p>
                </div>
                <img src={BirBankInvest} className='absolute bottom-0 right-0' alt="Birbank Invest" />
              </div>
              <div className="flex col-span-2 row-span-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden cursor-pointer h-full">
                <div className="flex flex-col gap-1 w-[60%] p-[24px] pl-[24px] pr-[16px] ">
                  <p className='text-[32px] text-[#25282b] font-[600]'>Birmarket</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Gündəlik alış-verişlərin cəmi bir kliklə həyata keçirildiyi marketpleys.</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>2737</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Satıcı sayı</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>300 000+</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Alıcı sayı</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>73%</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Keçən ilə nisbətdə satışların artımı</p>
                </div>
                <img src={BirMarket} className='absolute bottom-0 right-0' alt="Birmarket" />
              </div>
              <div className="flex col-start-2  col-span-2 row-span-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden cursor-pointer h-full">
                <div className="flex flex-col gap-1 w-[60%] p-[24px] pl-[24px] pr-[16px] ">
                  <p className='text-[32px] text-[#25282b] font-[600]'>m10</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Azərbaycanın ən çox istifadə olunan təhlükəsiz e-pulqabı sistemi.</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>829 000</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Satıcı sayı</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>#1</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>E-pulqabı seqmentində ölkə üzrə lider</p>

                  <p className='text-[24px] text-[#212426] font-[600]'>47.5 mln</p>
                  <p className='text-[16px] text-[#212426] font-[400]'>Cari il üzrə əməliyyat sayı</p>
                </div>
                <img src={M10} className='absolute bottom-0 right-0' alt="Birmarket" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className='mt-[48px] mb-[30px] text-[30px] font-[600] text-[#222222]'>Birgə layihələrimiz</h2>

            <div className="grid grid-cols-6 grid-rows-6 gap-4">
              <div className="flex items-center justify-between col-span-3 row-span-6 w-full">
                <div className="flex flex-col items-center">

                </div>
              </div>
              <div className="col-span-3 row-span-6 col-start-4">2</div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default EcoSystemContent;