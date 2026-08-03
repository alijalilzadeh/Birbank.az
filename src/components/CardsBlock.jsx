import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import newsData from '../ApIDatas/newsData.json'
import { GiConfirmed } from "react-icons/gi";
import NewCardBanner from '../assets/Cards/new_cards_banner.png'
import BirBankStar from '../assets/Cards/birbank-star.avif'
import BirbankCashback from '../assets/Cards/Birbank-cashback.avif'
import BirbankPlatinumMiles from '../assets/Cards/Birbank-platinum-miles.avif'
import BirbankPlatinum from '../assets/Cards/Birbank-platinum.avif'
import BirbankMiles from '../assets/Cards/Birbank-miles.avif'
import BirbankTelebePlus from '../assets/Cards/Telebe-plus.avif'
import BirbankaPremiumCashback from '../assets/Cards/Birbank-premium-cashback.avif'
import BirbankVisaInfiniteMiles from '../assets/Cards/Birbank-visa-infinite-miles.avif'
import BirbankMastercardWorldEliteMiles from '../assets/Cards/Mastercard-world-elite-miles.avif'
import BirbankTehsilPlus from '../assets/Cards/Tehsil-plus.avif'
import SafetyRulesImg from '../assets/Cards/Safety-rules.avif'
import KartEmeliyyat from '../assets/Cards/kartlar-uzre-emeliyyat.avif'
import KartinEynilesdirilmesi from '../assets/Cards/kartin-eynilesdirilmesi.svg'
import BirBankVector from '../assets/Cards/birbank-vector.svg'
import BirBankNewIcon from '../assets/Cards/birbank-new-icon.svg'
import { IoIosArrowDown } from "react-icons/io";
import { Helmet } from 'react-helmet-async';
const CardsBlock = () => {
  const faqData = [
    {
      "id": 1,
      "question": "Hansı Birbank kartı mənə daha uyğundur?",
      "answer": "Seçim edərkən xərcləmə vərdişlərinizi nəzərə almağınız tövsiyə olunur. Gündəlik alış-verişlərdən keşbek qazanmaq və ƏDV-ni 2 qat geri almaq istəyirsinizsə Birbank Cashback və ya Star, səyahət etməyi sevirsinizsə və mil toplamaq istəyirsinizsə Birbank Miles kartları tam sizə görədir. Daha yüksək limitlər, VIP imtiyazlar və biznes-zallara (lounge) giriş üçün isə Premium kartlarımızı nəzərdən keçirə bilərsiniz."
    },
    {
      "id": 2,
      "question": "Kart sifarişi üçün banka gəlməliyəm?",
      "answer": "Xeyr, vaxtınıza qənaət edin! Birbank kartını birbaşa bu səhifədən və ya mobil tətbiqimizdən onlayn sifariş edə bilərsiniz. Kartınız hazır olduqda kuryerimiz onu ünvanınıza tamamilə pulsuz çatdıracaq."
    },
    {
      "id": 3,
      "question": "Müraciətim nə vaxt təsdiqlənəcək?",
      "answer": "Debet kart müraciətləri dərhal, kredit xətti olan kartlar (taksit kartları) üzrə müraciətlər isə daxili qiymətləndirmədən asılı olaraq adətən bir neçə dəqiqə ərzində təsdiqlənir. Nəticə barədə sizə dərhal SMS və ya tətbiq vasitəsilə bildiriş göndəriləcək."
    },
    {
      "id": 4,
      "question": "Kartı rəqəmsal cüzdanlara (Apple Pay/Google Pay) əlavə edə bilərəm?",
      "answer": "Bəli! Birbank kartınızı Apple Pay və ya Google Pay-ə əlavə edərək ödənişlərinizi smartfon və ya smart saatınızla təmassız şəkildə edə bilərsiniz. Həmçinin Birbank tətbiqi ilə QR-ödəniş edərək 2 qat ƏDV geri qazanmaq imkanından da yararlana bilərsiniz."
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
      <Helmet>
        <title>Online kart sifarişi, debet və kredit kart | Birbank</title>
        <meta
          name="description"
          content="Ana səhifənin təsviri"
        />
      </Helmet>
      <div className={`flex  items-center justify-center w-full  selection:bg-[#B3D4FC] mb-24`}>
        <div className="flex flex-col w-[95%] sm:w-[65%] md:w-[95%] lg:w-[75%]">
          <div className="flex flex-col w-full">
            <h2 className='my-3 text-[24px] font-bold text-[#25282b]'>{newsData.pageProps.messages.breadcrumbs.title}</h2>
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/">Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/cards/all">Kartlar</Link>
            </div>
            <div style={{ backgroundImage: `url(${NewCardBanner})` }} className={`flex flex-col-reverse sm:flex-col md:flex-row rounded-xl w-full overflow-hidden  bg-cover bg-center relative`}>
              <div className="flex flex-col items-start gap-2 p-4 sm:p-4  md:px-11.25 md:py-12 w-full sm:w-full sm:items-start sm:gap-2  md:w-[65%] md:gap-4 ">
                <h2 className='text-[42px] text-white font-[650]'>Birbank Star</h2>
                <p className='text-white hidden  text-[16px] font-medium sm:hidden md:flex'>30 000 ₼-dək kredit xətti olan bu kartda sadəlikdən rahatlığa, keşbeklərdən QR ödənişlərdə 2 qat ƏDV-yə qədər nə istəsən, var. Üstəlik…</p>
                <div className="flex flex-col text-start items-start  sm:flex-col sm:items-start sm:text-start sm:gap-2 md:items-start md:flex-col lg:flex-row lg:w-full  lg:justify-between ">
                  <div className="flex flex-col gap2">
                    <span className='text-white text-[20px] font-medium'>Çətin hesablamalar</span>
                    <span className='text-white text-[16px] font-light'>Yoxdur</span>
                  </div>

                  <div className="flex flex-col gap2">
                    <span className='text-white text-[20px] font-medium'>İllik faiz</span>
                    <span className='text-white text-[16px] font-light'>Yoxdur</span>
                  </div>

                  <div className="flex flex-col gap2">
                    <span className='text-white text-[20px] font-medium'>Alış-verişdə komissiya</span>
                    <span className='text-white text-[16px] font-light'>Yoxdur</span>
                  </div>
                </div>
                <Link className="inline-flex w-fit bg-white px-7.5 py-3.25 rounded-[22px] gap-2 items-center hover:bg-[#BC0C19] group mt-2">
                  <GiConfirmed className="text-[12px] text-[#EC3342] group-hover:text-white transition" />
                  <span className="text-[14px] font-normal text-[#EC3342] group-hover:text-white transition">
                    Sifariş et
                  </span>
                </Link>
              </div>
              <div className="flex flex-col-reverse gap-3 mt-2  items-center justify-center sm:flex-col-reverse sm:gap-3 sm:mt-2 lg:mt-0  lg:flex-row">
                <img src={BirBankStar} className='w-50.25 ' />
                <img src={BirBankVector} className='w-35 absolute right-0 bottom-0' />
                <img src='https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/tag_e45a3f5226.svg' className=' w-19.25 lg:absolute top-7.5 right-7.5 bottom-0' />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 sm:gap-6 lg:gap-8 items-center justify-center w-full my-15">
              <div className="  rounded-[10px] bg-[#F9F9FA] relative  flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 py-7.5">
                <div className="flex flex-col gap-3 items-center justify-center z-2">
                  <img src={BirbankCashback} className='w-37.75 ' />
                  <h2 className='text-[24px] self-start text-left  font-bold text-[#2E3131]'>Birbank Cashback</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-normal'>QR ödənişlərdə 2 qat ƏDV, partnyorlardan bonus, şəxsi vəsaitdən pulsuz köçürmə, taksit...</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-medium items-center inline-flex  w-fit justify-center bg-[#EE334B] px-5 py-1.5 transition duration-100 hover:bg-[#BC0C19]'>Sifariş et</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-26.25' />
              </div>
              <div className="  rounded-[10px] bg-[#F9F9FA]  flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 py-7.5 relative">
                <div className="flex flex-col gap-3 items-center justify-center z-2">
                  <img src={BirbankPlatinum} className='w-37.75 ' />
                  <h2 className='text-[24px] self-start text-left  font-bold text-[#2E3131]'>Birbank Platinum</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-normal'>Premium üstünlükərlə yanaşı, daim bonus qazanmaq imkanı bu kartda səni gözləyir.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-medium items-center inline-flex  w-fit justify-center bg-[#EE334B] px-5 py-1.5 transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-26.25' />
              </div>
              <div className="rounded-[10px] bg-[#F9F9FA]  flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 py-7.5 relative">
                <div className="flex flex-col gap-3 items-center justify-center z-2">
                  <img src={BirbankPlatinumMiles} className='w-37.75 ' />
                  <h2 className='text-[24px] self-start text-left  font-bold text-[#2E3131]'>Birbank Platinum Miles</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-normal'>Bu kartla həm bol-bol millər, həm də premium üstünlükər qazanacaqsan.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-medium items-center inline-flex  w-fit justify-center bg-[#EE334B] px-5 py-1.5 transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-26.25' />
              </div>
              <div className="rounded-[10px] bg-[#F9F9FA]  flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 py-7.5 relative">
                <div className="flex flex-col gap-3 items-center justify-center z-2">
                  <img src={BirbankMiles} className='w-37.75 ' />
                  <h2 className='text-[24px] self-start text-left  font-bold text-[#2E3131]'>Birbank Miles</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-normal'>Sizi buludların üzərinə qaldıran kart. Birbank Miles kartıyla əməliyyatlar edin, qazandığınız milləri istənilən aviabiletə dəyişin.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-medium items-center inline-flex  w-fit justify-center bg-[#EE334B] px-5 py-1.5 transition duration-100 hover:bg-[#BC0C19]'>Sifariş et</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-26.25' />
              </div>
              <div className="rounded-[10px] bg-[#F9F9FA]  flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 py-7.5 relative h-full ">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-3.5">
                  <img src={BirbankTelebePlus} className='w-37.75 ' />
                  <h2 className='text-[24px] self-start text-left  font-bold text-[#2E3131]'>TələbəPlus</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-normal'>Tələbələrə özəl üstünlüklər bir arada!</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-medium items-center inline-flex  w-fit justify-center bg-[#EE334B] px-5 py-1.5 transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-26.25' />
              </div>
              <div className=" rounded-[10px] bg-[#F9F9FA] flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 py-7.5 relative h-full">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-3.5">
                  <img src={BirbankMastercardWorldEliteMiles} className='w-37.75 ' />
                  <h2 className='text-[24px] self-start text-left  font-bold text-[#2E3131]'>Mastercard World Elite Miles</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-normal'>Dünyanın hər yerində tanınma, imtiyazlar və elit üstünlüklərə malik kart növü.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-medium items-center inline-flex  w-fit justify-center bg-[#EE334B] px-5 py-1.5 transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-26.25' />
              </div>
              <div className=" rounded-[10px] bg-[#F9F9FA]  flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 py-7.5 relative h-full">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-3.5">
                  <img src={BirbankVisaInfiniteMiles} className='w-37.75 ' />
                  <h2 className='text-[24px] self-start text-left  font-bold text-[#2E3131]'>Birbank Visa Infinite Miles</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-normal'>Visa kartlarının bütün imkanlarını özündə birləşdirən Visa Infinite kartı VIP statusa malikdir.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-medium items-center inline-flex  w-fit justify-center bg-[#EE334B] px-5 py-1.5 transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-26.25' />
              </div>
              <div className="rounded-[10px] bg-[#F9F9FA] flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 py-7.5 relative h-full ">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-3.5">
                  <img src={BirbankTehsilPlus} className='w-37.75 ' />
                  <h2 className='text-[24px] self-start text-left  font-bold text-[#2E3131]'>TəhsilPlus</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-normal'>Gələcəyi inşa edən müəllimlər üçün çoxfunksiyalı kart</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-medium items-center inline-flex  w-fit justify-center bg-[#EE334B] px-5 py-1.5 transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-26.25' />
              </div>
              <div className=" rounded-[10px] bg-[#F9F9FA]  flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 py-7.5 relative h-full overflow-hidden ">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-3.5">
                  <img src={BirbankaPremiumCashback} className='w-37.75 ' />
                  <h2 className='text-[24px] self-start text-left  font-bold text-[#2E3131]'>Birbank Premium Cashback</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-normal'>Visa kartlarının bütün imkanlarını özündə birləşdirən Birbank Premium Cashback debet kartı VIP statusa malikdir.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-medium items-center inline-flex  w-fit justify-center bg-[#EE334B] px-5 py-1.5 transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-26.25 overflow-hidden' />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-7 justify-between my-5 sm:flex-col md:flex-row ">
            <div className="flex flex-col items-start md:items-center justify-between gap-5 w-full rounded-md px-5 py-6.25 bg-[#F9F9FA] h-full">
              <div className="flex items-start md:items-center gap-6 ">
                <img src={SafetyRulesImg} className='w-12 ' />
                <h2 className='text-[#222222] font-semibold text-[20px] max-w-[13ch] wrap-break-word'>Təhlükəsizlik qaydaları</h2>
              </div>
              <Link className='px-6.25 py-1.75 rounded-md text-[12px] border border-[#777A7D] text-[#2e3131] font-semibold transition duration-100 hover:bg-[#25282B] hover:text-white self-end'>Ətraflı</Link>
            </div>

            <div className="flex flex-col items-start md:items-center justify-between gap-5 w-full rounded-md px-5 py-6.25 bg-[#F9F9FA] h-full">
              <div className="flex items-start md:items-center  gap-6 ">
                <img src={KartEmeliyyat} className='w-12 ' />
                <h2 className='text-[#222222] font-semibold text-[20px] max-w-[13ch] wrap-break-word'>Kartlar üzrə xidmətlər</h2>
              </div>
              <Link className='px-6.25 py-1.75 rounded-md text-[12px] border border-[#777A7D] text-[#2e3131] font-semibold transition duration-100 hover:bg-[#25282B] hover:text-white self-end'>Ətraflı</Link>
            </div>

            <div className="flex flex-col items-start md:items-center justify-between gap-5 w-full rounded-md px-5 py-6.25 bg-[#F9F9FA] h-full">
              <div className="flex items-start md:items-center gap-6 ">
                <img src={KartinEynilesdirilmesi} className='w-12 ' />
                <h2 className='text-[#222222] font-semibold text-[20px]'>Birbank kartlarının eyniləşdirilməsi</h2>
              </div>
              <Link className='px-6.25 py-1.75 rounded-md text-[12px] border border-[#777A7D] text-[#2e3131] font-semibold transition duration-100 hover:bg-[#25282B] hover:text-white self-end'>Ətraflı</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 w-full mt-12 lg:mb-8 items-center justify-center">
            <h2 className='text-left self-start text-[30px] text-[#222222] font-semibold'>Tez-tez verilən suallar</h2>
            <div className="flex flex-col w-full sm:w-full  md:w-[80%]">
              {
                faqData.map((item, index) => {
                  return (
                    <div className="flex flex-col   border-b-[#E9EAEC]">
                      <div key={index} onClick={() => toggleFaq(index)} className=" flex  px-3 py-4 items-center justify-between border-b border-b-[#E9EAEC] cursor-pointer">
                        <p className='text-[16px] text-[#222222]  font-normal'>{item.question}</p>
                        <IoIosArrowDown className={`text-[16px]  text-[#222222] transform ${activeIndex === index ? "rotate-180" : ""}`} />
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-75" : "max-h-0"
                          }`}
                      >
                        <p className='w-full pt-px px-6 pb-6 text-[16px] font-light text-[#222222] bg-[#F3F3F5]'>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsBlock
