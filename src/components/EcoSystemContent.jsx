import React from 'react'
import { Link } from 'react-router-dom'
import BirPay from '../assets/EcoSystem/BirPay.png'
import { BsCameraVideoFill } from 'react-icons/bs'
import { LuMailOpen } from "react-icons/lu";
import BirBankMainScreen from '../assets/EcoSystem/BirBankMainScreen.svg'
import BirBankBiznes from '../assets/EcoSystem/BirBankBiznes.svg'
import BirBankInvest from '../assets/EcoSystem/BirBankInvest.svg'
import BirMarket from '../assets/EcoSystem/BirMarket.svg'
import M10 from '../assets/EcoSystem/M10.svg'
import Trendyol from '../assets/EcoSystem/Trendyol.svg'
import BakiKart from '../assets/EcoSystem/BakiKart.svg'
import BirBonus from '../assets/EcoSystem/BirBonus.svg'
import BirID from '../assets/EcoSystem/BirId.svg'
import BirPaySVG from '../assets/EcoSystem/BirPay.svg'

const EcoSystemContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[75%]">
          <div className="flex flex-col w-full">
            <h2 className='text-[24px] font-bold text-[#25282b] '>Ekosistem</h2>

            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/">Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Investorlar</Link>
            </div>
          </div>
          <div className="flex justify-between w-full bg-[linear-gradient(98.65deg,rgb(236,50,66)_0%,rgb(153,0,0)_100%)] rounded-[10px] relative overflow-hidden">
            <div className="flex flex-col w-[70%] gap-4 py-12 px-18">
              <h2 className='text-[32px] font-semibold text-white leading-10'>Qafqazın ilk tam inteqrasiyalı rəqəmsal platforması</h2>
              <p className='text-[16px] font-normal text-white'>Bir ekosistemi regionun rəqəmsal gələcəyini formalaşdıraraq milyonlarla insanı, biznesi və innovasiyanı bir çətir altında birləşdirir.</p>
              <Link className='group px-16 py-4.5 inline-flex gap-2 w-fit items-center justify-center bg-white rounded-[10px]'>
                <BsCameraVideoFill className='group-hover:text-red-600  transition duration-200' />
                <span className='text-[16px] font-normal text-black group-hover:text-red-600 transition duration-200'>Ekosistem videosunu izlə</span>
              </Link>
            </div>
            <div className="flex items-center justify-center w-[50%] py-12 px-2.5 ">
              <img src={BirPay} className='w-103.5 object-cover flex absolute bottom-0 right-10 h-full' alt="BirPay" />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h2 className='mt-12 mb-7.5 text-[30px] font-semibold text-[#222222]'>Əsas nəticələrimiz!</h2>
            <div className="flex items-center w-full justify-between py-14 px-6 bg-[#25282B] rounded-2xl">
              <div className="flex flex-col">
                <h2 className='text-white text-[56px] font-bold'>4.5mln</h2>
                <p className='text-[#9095a0] text-[18px] font-semibold'>Ümumi istifadəçi sayı</p>
              </div>

              <div className="flex flex-col">
                <h2 className='text-white text-[56px] font-bold'>8.2mlrd</h2>
                <p className='text-[#9095a0] text-[18px] font-semibold'>Ümumi istifadəçi sayı</p>
              </div>

              <div className="flex flex-col">
                <h2 className='text-white text-[56px] font-bold'>7500+</h2>
                <p className='text-[#9095a0] text-[18px] font-semibold'>Əməkdaş sayı</p>
              </div>

              <div className="flex flex-col">
                <h2 className='text-white text-[56px] font-bold'>42%</h2>
                <p className='text-[#9095a0] text-[18px] font-semibold whitespace-normal'>Nağdsız əməliyyatların həcmi</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <h2 className='mt-12 mb-7.5 text-[30px] font-semibold text-[#222222]'>Brendlərimiz</h2>

            <div className="grid grid-cols-4 grid-rows-6 gap-6 items-center justify-center">
              <div className="flex col-span-2 row-span-2 gap-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden h-full">
                <div className="flex flex-col gap-1 w-[60%] p-6 pl-6 pr-4">
                  <p className='text-[32px] text-[#25282b] font-semibold'>Birbank</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Azərbaycanın ilk rəqəmsal bankı və bazar lideri. Kapital Bank-ın internet bankçılıq məhsulu – Birbank hər kəs üçün bank əməliyyatlarını əlçatan edir.</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>34.1%</p>
                  <p className='text-[16px] text-[#212426] font-normal'>İstehlak kreditlərində bazar payı</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>#1</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Ölkənin ilk rəqəmsal bankı</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>3.5 mln</p>
                  <p className='text-[16px] text-[#212426] font-normal]'>Birbank sayı</p>
                </div>
                <img src={BirBankMainScreen} className='object-contain absolute bottom-0 right-0' alt="Birbank Main Screen" />
              </div>

              <div className="flex col-span-2 row-span-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden cursor-pointer h-full">
                <div className="flex flex-col gap-1 w-[60%] p-6 pl-6 pr-4 ">
                  <p className='text-[32px] text-[#25282b] font-semibold'>Birbank Biznes</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Kiçik və orta sahibkarların bütün maliyyə işlərini bir tətbiqdə toplayan etibarlı biznes tərəfdaşı.</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>106 406</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Mikro biznes müştərilərinin sayı</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>16 716</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Kiçik və orta biznes müştərilərinin sayı</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>95.4%</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Rəqəmsal məhsullardan istifadə edir</p>
                </div>
                <img src={BirBankBiznes} className='absolute bottom-0 right-0' alt="Birbank Biznes" />
              </div>

              <div className="flex col-span-2 row-span-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden cursor-pointer h-full">
                <div className="flex flex-col gap-1 w-[60%] p-6 pl-6 pr-4 ">
                  <p className='text-[32px] text-[#25282b] font-semibold'>Birbank Invest</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Dünyanın ən böyük şirkətlərinə sürətli və təhlükəsiz şəkildə investisiya etmək imkanı yaradan platforma.</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>13 120</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Potensial investorların sayı</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>11 000+</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Şirkətə investisiya imkanı</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>$1</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Minimal investisiya məbləği</p>
                </div>
                <img src={BirBankInvest} className='absolute bottom-0 right-0' alt="Birbank Invest" />
              </div>
              <div className="flex col-span-2 row-span-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden cursor-pointer h-full">
                <div className="flex flex-col gap-1 w-[60%] p-6 pl-6 pr-4 ">
                  <p className='text-[32px] text-[#25282b] font-semibold'>Birmarket</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Gündəlik alış-verişlərin cəmi bir kliklə həyata keçirildiyi marketpleys.</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>2737</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Satıcı sayı</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>300 000+</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Alıcı sayı</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>73%</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Keçən ilə nisbətdə satışların artımı</p>
                </div>
                <img src={BirMarket} className='absolute bottom-0 right-0' alt="Birmarket" />
              </div>
              <div className="flex col-start-2  col-span-2 row-span-2 bg-[#F3F3F5] rounded-[10px] w-full relative overflow-hidden cursor-pointer h-full">
                <div className="flex flex-col gap-1 w-[60%] p-6 pl-6 pr-4 ">
                  <p className='text-[32px] text-[#25282b] font-semibold'>m10</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Azərbaycanın ən çox istifadə olunan təhlükəsiz e-pulqabı sistemi.</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>829 000</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Satıcı sayı</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>#1</p>
                  <p className='text-[16px] text-[#212426] font-normal'>E-pulqabı seqmentində ölkə üzrə lider</p>

                  <p className='text-[24px] text-[#212426] font-semibold'>47.5 mln</p>
                  <p className='text-[16px] text-[#212426] font-normal'>Cari il üzrə əməliyyat sayı</p>
                </div>
                <img src={M10} className='absolute bottom-0 right-0' alt="Birmarket" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className='mt-12 mb-7.5 text-[30px] font-semibold text-[#222222]'>Birgə layihələrimiz</h2>

            <div className="grid grid-cols-6 grid-rows-6 gap-6 h-full">
              <div className="flex items-center justify-between col-span-3 row-span-6 w-full bg-[#FDF0F1] rounded-[10px] relative h-full">
                <div className="flex flex-col pl-6 py-6 pr-4 w-[60%]">
                  <h2 className='text-[#25282b] text-[32px] font-semibold'>Trendyol</h2>
                  <p className='text-[#212426] text-[14px] font-normal my-2'>Birgə əməkdaşlığımız nəticəsində ölkəmizin hər yanına birbaşa çatdırılma həyata keçirən dünyanın ən böyük e-ticarət platformalarından biri</p>
                  <ul className='font-semibold pl-4 text-[#212426] text-[16px] gap-1 list-disc leading-5'>
                    <li className='mb-1'>400 000 – İstifadəçi sayı</li>
                    <li className='mb-1'>“İndi al, sonra ödə” – Ekosistem istifadəçiləri üçün kredit xətti</li>
                    <li>Bonus qazanmaq və xərcləmə fürsəti</li>
                  </ul>
                </div>
                <img src={Trendyol} className='object-contain flex absolute bottom-0 right-0' />
              </div>
              <div className="col-span-3 row-span-6 col-start-4 h-full">
                <div className="flex items-center justify-between col-span-3 row-span-6 w-full bg-[#FDF0F1] rounded-[10px] relative h-full">
                  <div className="flex flex-col pl-6 py-6 pr-4 w-[60%]">
                    <h2 className='text-[#25282b] text-[32px] font-semibold'>BakıKart</h2>
                    <p className='text-[#212426] text-[14px] font-normal my-2'>Metro və avtobus kimi əsas ictimai nəqliyyat vasitələri üçün nağdsız ödəniş üsulu.</p>
                    <ul className='font-semibold pl-4 text-[#212426] text-[16px] gap-1 list-disc leading-5'>
                      <li className='mb-1'>22% – Ekosistemin QR ilə əməliyyatlarında payı</li>
                      <li className='mb-1'>#1 – İctimai nəqliyyatda ödənişlər üzrə lider</li>
                      <li>Bonusla ödəmə imkanı</li>
                    </ul>
                  </div>
                  <img src={BakiKart} className='object-contain flex absolute bottom-0 right-0' />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className='mt-12 mb-7.5 text-[30px] font-semibold text-[#222222]'>Məhsullarımız</h2>

            <div className="grid grid-cols-6 grid-rows-6 gap-4 items-center justify-center  h-full">
              <div className="col-span-2 row-span-6 flex flex-col justify-between relative w-full  h-full border border-[#F3F3F5] rounded-xl cursor-pointer transition duration-450 hover:shadow-[-2px_2px_17px_0px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col gap-2 px-4 py-6  h-full">
                  <h2 className='text-[#25282b] text-[32px] font-semibold'>Bir Bonus</h2>
                  <p className='text-[#212426] text-[14px] font-normal'>Minlərlə partnyorda, yüzlərlə təklifdə, onlarla kateqoriyada bonus qazanmağa və xərcləməyə şərait yaradan loyallıq proqramı</p>
                </div>
                <div className="flex items-center justify-center">
                  <img src={BirBonus} className='object-contain  items-center justify-center flex w-[85%]' />
                </div>
              </div>
              <div className="col-span-2 row-span-6 col-start-3  h-full">
                <div className="col-span-2 row-span-6 flex flex-col justify-between relative w-full  h-full border border-[#F3F3F5] rounded-xl cursor-pointer transition duration-450 hover:shadow-[-2px_2px_17px_0px_rgba(0,0,0,0.1)]">
                  <div className="flex flex-col gap-2 px-4 py-6">
                    <h2 className='text-[#25282b] text-[32px] font-semibold'>Bir ID</h2>
                    <p className='text-[#212426] text-[14px] font-normal'>Ekosistem daxilindəki bütün xidmətlər üçün vahid giriş üsulu</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={BirID} className='object-contain  items-center justify-center flex w-[85%]' />
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-6 col-start-5  h-full">
                <div className="col-span-2 row-span-6 flex flex-col justify-between relative w-full h-full border border-[#F3F3F5] rounded-xl cursor-pointer transition duration-450 hover:shadow-[-2px_2px_17px_0px_rgba(0,0,0,0.1)]">
                  <div className="flex flex-col gap-2 px-4 py-6">
                    <h2 className='text-[#25282b] text-[32px] font-semibold'>Bir Pay</h2>
                    <p className='text-[#212426] text-[14px] font-normal'>İstifadəçilərimiz və biznes partnyorlarımız üçün müasir ödəniş platforması</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={BirPaySVG} className='object-contain  items-center justify-center flex w-[85%]' />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="flex items-center w-full justify-center my-20 h-full">
            <div className="flex flex-col gap-5 w-full rounded-2xl items-center justify-center p-10 bg-[#25282B] h-full">
              <h2 className='text-[32px] text-white font-semibold'>Bir-in bir parçası ol!</h2>
              <p className='text-white text-[20px] font-normal'>Maliyyə göstəriciləri, strateji tərəfdaşlıqlar və ya investisiya imkanları üçün əlaqə saxla.</p>
              <Link className='flex items-center justify-center gap-2 px-7 py-4 bg-white rounded-xl'>
                <LuMailOpen />
                <span className='text-red-600'>bir@bir.az</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EcoSystemContent;