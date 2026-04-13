import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import newsData from '../NewsData/newsData.json'
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
      <div className={`flex items-center justify-center w-full  selection:bg-[#B3D4FC] mb-[96px]`}>
        <div className="flex flex-col w-[75%]">
          <div className="flex flex-col w-full">
            <h2 className='my-[12px] text-[24px] font-[700] text-[#25282b]'>{newsData.pageProps.messages.breadcrumbs.title}</h2>
            <div className="flex gap-2 my-[12px]">
              <Link className='text-[14px] p-[15px] text-[#6D7478]' to="/">Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-[15px] pl-0' to="/cards/all">Kartlar</Link>
            </div>
            <div style={{ backgroundImage: `url(${NewCardBanner})` }} className={`flex rounded-[12px] w-full overflow-hidden  bg-cover bg-center relative`}>
              <div className="flex flex-col gap-5 px-[45px] py-[48px] w-[65%]">
                <h2 className='text-[42px] text-white font-[650]'>Birbank Star</h2>
                <p className='text-white text-[16px] font-[500]'>30 000 ₼-dək kredit xətti olan bu kartda sadəlikdən rahatlığa, keşbeklərdən QR ödənişlərdə 2 qat ƏDV-yə qədər nə istəsən, var. Üstəlik…</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap2">
                    <span className='text-white text-[20px] font-[500]'>Çətin hesablamalar</span>
                    <span className='text-white text-[16px] font-[300]'>Yoxdur</span>
                  </div>

                  <div className="flex flex-col gap2">
                    <span className='text-white text-[20px] font-[500]'>İllik faiz</span>
                    <span className='text-white text-[16px] font-[300]'>Yoxdur</span>
                  </div>

                  <div className="flex flex-col gap2">
                    <span className='text-white text-[20px] font-[500]'>Alış-verişdə komissiya</span>
                    <span className='text-white text-[16px] font-[300]'>Yoxdur</span>
                  </div>
                </div>
                <Link className="inline-flex w-fit bg-white px-[30px] py-[13px] rounded-[22px] gap-2 items-center hover:bg-[#BC0C19] group">
                  <GiConfirmed className="text-[12px] text-[#EC3342] group-hover:text-white transition" />
                  <span className="text-[14px] font-[400] text-[#EC3342] group-hover:text-white transition">
                    Sifariş et
                  </span>
                </Link>
              </div>
              <div className="flex items-center">
                <img src={BirBankStar} className='w-[201px] ' />
                <img src={BirBankVector} className='w-[140px] absolute right-0 bottom-0' />
                <img src='https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/tag_e45a3f5226.svg' className='w-[77px] absolute top-[30px] right-[30px] bottom-0' />
              </div>
            </div>

            <div className="grid grid-cols-6  gap-8 items-center justify-center w-full my-[60px]">
              <div className="col-span-2 rounded-[10px] bg-[#F9F9FA] relative row-span-5 flex flex-col gap-8 px-[20px] py-[30px]">
                <div className="flex flex-col gap-3 items-center justify-center z-2">
                  <img src={BirbankCashback} className='w-[151px] ' />
                  <h2 className='text-[24px] self-start text-left  font-[700] text-[#2E3131]'>Birbank Cashback</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-[400]'>QR ödənişlərdə 2 qat ƏDV, partnyorlardan bonus, şəxsi vəsaitdən pulsuz köçürmə, taksit...</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-[500] items-center inline-flex  w-fit justify-center bg-[#EE334B] px-[20px] py-[6px] transition duration-100 hover:bg-[#BC0C19]'>Sifariş et</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-[105px]' />
              </div>
              <div className="col-span-2 rounded-[10px] bg-[#F9F9FA] row-span-5 col-start-3 flex flex-col gap-8 px-[20px] py-[30px] relative">
                <div className="flex flex-col gap-3 items-center justify-center z-2">
                  <img src={BirbankPlatinum} className='w-[151px] ' />
                  <h2 className='text-[24px] self-start text-left  font-[700] text-[#2E3131]'>Birbank Platinum</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-[400]'>Premium üstünlükərlə yanaşı, daim bonus qazanmaq imkanı bu kartda səni gözləyir.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-[500] items-center inline-flex  w-fit justify-center bg-[#EE334B] px-[20px] py-[6px] transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-[105px]' />
              </div>
              <div className="col-span-2 rounded-[10px] bg-[#F9F9FA] row-span-5 col-start-5 flex flex-col gap-8 px-[20px] py-[30px] relative">
                <div className="flex flex-col gap-3 items-center justify-center z-2">
                  <img src={BirbankPlatinumMiles} className='w-[151px] ' />
                  <h2 className='text-[24px] self-start text-left  font-[700] text-[#2E3131]'>Birbank Platinum Miles</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-[400]'>Bu kartla həm bol-bol millər, həm də premium üstünlükər qazanacaqsan.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-[500] items-center inline-flex  w-fit justify-center bg-[#EE334B] px-[20px] py-[6px] transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-[105px]' />
              </div>
              <div className="col-span-2 rounded-[10px] bg-[#F9F9FA] row-span-4 row-start-6 flex flex-col gap-8 px-[20px] py-[30px] relative">
                <div className="flex flex-col gap-3 items-center justify-center z-2">
                  <img src={BirbankMiles} className='w-[151px] ' />
                  <h2 className='text-[24px] self-start text-left  font-[700] text-[#2E3131]'>Birbank Miles</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-[400]'>Sizi buludların üzərinə qaldıran kart. Birbank Miles kartıyla əməliyyatlar edin, qazandığınız milləri istənilən aviabiletə dəyişin.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-[500] items-center inline-flex  w-fit justify-center bg-[#EE334B] px-[20px] py-[6px] transition duration-100 hover:bg-[#BC0C19]'>Sifariş et</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-[105px]' />
              </div>
              <div className="col-span-2 rounded-[10px] bg-[#F9F9FA] row-span-4 col-start-3 row-start-6 flex flex-col gap-8 px-[20px] py-[30px] relative h-full ">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-[14px]">
                  <img src={BirbankTelebePlus} className='w-[151px] ' />
                  <h2 className='text-[24px] self-start text-left  font-[700] text-[#2E3131]'>TələbəPlus</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-[400]'>Tələbələrə özəl üstünlüklər bir arada!</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-[500] items-center inline-flex  w-fit justify-center bg-[#EE334B] px-[20px] py-[6px] transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="	https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-[105px]' />
              </div>
              <div className="col-span-2 rounded-[10px] bg-[#F9F9FA] row-span-3 col-start-3 row-start-10 flex flex-col gap-8 px-[20px] py-[30px] relative h-full">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-[14px]">
                  <img src={BirbankMastercardWorldEliteMiles} className='w-[151px] ' />
                  <h2 className='text-[24px] self-start text-left  font-[700] text-[#2E3131]'>Mastercard World Elite Miles</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-[400]'>Dünyanın hər yerində tanınma, imtiyazlar və elit üstünlüklərə malik kart növü.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-[500] items-center inline-flex  w-fit justify-center bg-[#EE334B] px-[20px] py-[6px] transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-[105px]' />
              </div>
              <div className="col-span-2 rounded-[10px] bg-[#F9F9FA] row-span-3 col-start-1 row-start-10 flex flex-col gap-8 px-[20px] py-[30px] relative h-full">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-[14px]">
                  <img src={BirbankVisaInfiniteMiles} className='w-[151px] ' />
                  <h2 className='text-[24px] self-start text-left  font-[700] text-[#2E3131]'>Birbank Visa Infinite Miles</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-[400]'>Visa kartlarının bütün imkanlarını özündə birləşdirən Visa Infinite kartı VIP statusa malikdir.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-[500] items-center inline-flex  w-fit justify-center bg-[#EE334B] px-[20px] py-[6px] transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-[105px]' />
              </div>
              <div className="col-span-2 rounded-[10px] bg-[#F9F9FA] row-span-3 col-start-5 row-start-10 flex flex-col gap-8 px-[20px] py-[30px] relative h-full ">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-[14px]">
                  <img src={BirbankTehsilPlus} className='w-[151px] ' />
                  <h2 className='text-[24px] self-start text-left  font-[700] text-[#2E3131]'>TəhsilPlus</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-[400]'>Gələcəyi inşa edən müəllimlər üçün çoxfunksiyalı kart</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-[500] items-center inline-flex  w-fit justify-center bg-[#EE334B] px-[20px] py-[6px] transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-[105px]' />
              </div>
              <div className="col-span-2 rounded-[10px] bg-[#F9F9FA] row-span-4 col-start-5 row-start-6 flex flex-col gap-8 px-[20px] py-[30px] relative h-full overflow-hidden ">
                <div className="flex flex-col gap-3 items-center justify-center z-2 mb-[14px]">
                  <img src={BirbankaPremiumCashback} className='w-[151px] ' />
                  <h2 className='text-[24px] self-start text-left  font-[700] text-[#2E3131]'>Birbank Premium Cashback</h2>
                </div>
                <div className="flex flex-col gap-4  z-2">
                  <span className='text-[14px] text-[#52575c] font-[400]'>Visa kartlarının bütün imkanlarını özündə birləşdirən Birbank Premium Cashback debet kartı VIP statusa malikdir.</span>
                  <Link className='text-white rounded-[20px] text-[16px] font-[500] items-center inline-flex  w-fit justify-center bg-[#EE334B] px-[20px] py-[6px] transition duration-100 hover:bg-[#BC0C19]'>Ətraflı</Link>
                </div>
                <img src="https://strapi-aws-s3-images-bucket-kb.s3.eu-central-1.amazonaws.com/pale_1de5f64fe8.svg" className='absolute right-0 bottom-0 z-1 w-[105px] overflow-hidden' />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-7 justify-between my-[20px]">
            <div className="flex flex-col items-center justify-between gap-5 w-full rounded-[6px] px-[20px] py-[25px] bg-[#F9F9FA] h-full">
              <div className="flex items-center gap-6 ">
                <img src={SafetyRulesImg} className='w-[48px] ' />
                <h2 className='text-[#222222] font-[600] text-[20px] max-w-[13ch] break-words'>Təhlükəsizlik qaydaları</h2>
              </div>
              <Link className='px-[25px] py-[7px] rounded-[6px] text-[12px] border-1 border-[#777A7D] text-[#2e3131] font-[600] transition duration-100 hover:bg-[#25282B] hover:text-white self-end'>Ətraflı</Link>
            </div>

            <div className="flex flex-col items-center justify-between gap-5 w-full rounded-[6px] px-[20px] py-[25px] bg-[#F9F9FA] h-full">
              <div className="flex items-center  gap-6 ">
                <img src={KartEmeliyyat} className='w-[48px] ' />
                <h2 className='text-[#222222] font-[600] text-[20px] max-w-[13ch] break-words'>Kartlar üzrə xidmətlər</h2>
              </div>
              <Link className='px-[25px] py-[7px] rounded-[6px] text-[12px] border-1 border-[#777A7D] text-[#2e3131] font-[600] transition duration-100 hover:bg-[#25282B] hover:text-white self-end'>Ətraflı</Link>
            </div>

            <div className="flex flex-col items-center justify-between gap-5 w-full rounded-[6px] px-[20px] py-[25px] bg-[#F9F9FA] h-full">
              <div className="flex items-center gap-6 ">
                <img src={KartinEynilesdirilmesi} className='w-[48px] ' />
                <h2 className='text-[#222222] font-[600] text-[20px]'>Birbank kartlarının eyniləşdirilməsi</h2>
              </div>
              <Link className='px-[25px] py-[7px] rounded-[6px] text-[12px] border-1 border-[#777A7D] text-[#2e3131] font-[600] transition duration-100 hover:bg-[#25282B] hover:text-white self-end'>Ətraflı</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full mt-[48px] mb-[32px] w-full items-center justify-center">
            <h2 className='text-left self-start text-[30px] text-[#222222] font-[600]'>Tez-tez verilən suallar</h2>
            <div className="flex flex-col  w-[80%]">
              {
                faqData.map((item, index) => {
                  return (
                    <div className="flex flex-col   border-b-[#E9EAEC]">
                      <div key={index} onClick={() => toggleFaq(index)} className=" flex  px-[12px] py-[16px] items-center justify-between border-b-1 border-b-[#E9EAEC] cursor-pointer">
                        <p className='text-[16px] text-[#222222]  font-[400]'>{item.question}</p>
                        <IoIosArrowDown className={`text-[16px]  text-[#222222] transform ${activeIndex === index ? "rotate-180" : ""}`} />
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[300px]" : "max-h-0"
                          }`}
                      >
                        <p className='w-full pt-[4px] px-[24px] pb-[24px] text-[16px] font-[300] text-[#222222] bg-[#F3F3F5]'>
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
