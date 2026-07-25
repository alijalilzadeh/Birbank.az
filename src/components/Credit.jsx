import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import { Link } from 'react-router-dom'
import ProductInner from '../assets/Credit/productInner.avif'
import Footer from './Footer'
const Credit = () => {
  const creditData = [
    {
      imgUrl: "https://birbank.az/file/man_t_t_minatli_kredit_ed1e35f074.png",
      title: "Əmanət təminatlı kredit",
      desc: "Əmanət məbləğinin 90%-dək, minimum 500 AZN/USD məbləğində kredit əldə edə bilərsən.",
      link: "Sifariş et",
      slug: null
    },
    {
      imgUrl: "https://birbank.az/file/Avtomobil_krediti_46beea2abe.png",
      title: "Avtomobil krediti",
      desc: "Arzuladığınız avtomobili Kapital Bank-ın təqdim etdiyi avto kredit ilə əldə edin.",
      link: "Sifariş et",
      slug: "/avtomobil-krediti"
    },
    {
      imgUrl: "https://birbank.az/file/Avans_krediti_9ad821658c.png",
      title: "Avans krediti",
      desc: "Təcili pula ehtiyacınız varsa, rahatlıqla Avans götürün!",
      link: "Sifariş et",
      slug: "/avans"
    }
  ]
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <>
        <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC] mb-20">
          <div className="flex flex-col w-[75%]">
            <div className="flex justify-between p-12 w-full bg-[linear-gradient(265deg,_#fff1d3_8.07%,_#f3f4f6_70.76%)] rounded-[20px] relative overflow-hidden mb-20">
              <div className="flex justify-between flex-col w-[50%] gap-10 ">
                <div className="flex flex-col gap-4">
                  <h2 className='text-[40px] font-bold text-[#25282b] leading-10'>İstəyinizə uyğun nağd pul krediti onlayn əldə edin!</h2>
                  <p className='text-[16px] font-normal text-[#25282b] leading-normal'>Kapital Bankın təklif etdiyi kredit çeşidləri ilə ehtiyaclarınızı təxirə salmadan qarşılayın.</p>
                </div>
                <Link to='/kredit-sifarisi' className='inline-flex w-fit py-2 px-8 text-[14px] font-semibold bg-[#ec3342] rounded-4xl text-white' reloadDocument>Sifariş</Link>
              </div>
              <div className="flex items-center justify-center w-[50%]  ">
                <img src={ProductInner} className='w-full object-cover flex ' alt="BirPay" />
              </div>
            </div>

            <div className="grid grid-cols-6 items-center justify-center w-full gap-6 h-full ">
              {
                creditData.map((item, id) => (
                  <div className="col-span-2 row-span-2 flex flex-col gap-3 rounded-[20px] h-full overflow-hidden bg-[linear-gradient(to_bottom,_#fff1d3_0%,_#f3f4f6_100%)]">
                    <img src={item.imgUrl} className='object-cover items-center justify-center' />
                    <div className="flex flex-col gap-6 p-6">
                      <div className="flex flex-col justify-between gap-2">
                        <h2 className='text-[28px] text-[#25282b] font-bold'>{item.title}</h2>
                        <p className='text-[16px] text-[#52575c] font-medium'>{item.desc}</p>
                      </div>

                      <Link to={item?.slug} className='inline-flex w-fit py-2 px-8 text-[14px] font-semibold bg-[#ec3342] rounded-4xl text-white' reloadDocument>{item.link}</Link>
                    </div>
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

export default Credit
