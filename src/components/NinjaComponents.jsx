import React, { useState } from 'react'
import newsData from '../ApIDatas/newsData.json'
import { Link } from 'react-router-dom'
import ninjaCardImg from '../assets/Ninja/ninjaCard.png'
import { CgAsterisk } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
const NinjaComponents = () => {

  const faqData = [
    {
      "id": 1,
      "question": "Ninja təklifi nədir?",
      "answer": "Bu, Birbank taksit kartları ilə etdiyiniz birdəfəlik ödənişlərin (POS-terminal ilə və ya onlayn), eləcə də nağdlaşdırdığınız və köçürdüyünüz məbləğlərin müəyyən komissiya qarşılığındahissələrə bölünməsi üçün edilən təklifdir."
    },
    {
      "id": 2,
      "question": "Ninja təklifi hansı kartlarla aparılan əməliyyatlara aiddir?",
      "answer": "Təklif yalnız Birbank taksit kartlarına şamil olunur."
    },
    {
      "id": 3,
      "question": "Ninja təklifi müştəriyə hansı şəkildə göndərilir?",
      "answer": "- Əgər siz aktiv Birbank tətbiqi istifadəçisinizsə, Ninja təklifini fərqli seçimlər şəklində Birbank tətbiqində olan 'Daha çox' bölməsində 'Ninja'ya klikləyərək görə biləcəksiniz;"
    },
    {
      "id": 4,
      "question": "Hansı hallarda Birbank tətbiqində Ninja təklifindən yararlanmaq olmur?",
      "answer": "- Taksitlə ödəniş etmisinizsə; "
    },
    {
      "id": 5,
      "question": "Hansı əməliyyatlara Ninja təklifi düşür?",
      "answer": "Birbank taksit kartları ilə birdəfəlik ödədiyiniz, nağdlaşdırdığınız və köçürdüyünüz məbləğləri Ninja ilə aylara bölə bilərsiniz."
    },
    {
      "id": 6,
      "question": "Ninja təklifindən nə zaman yararlana bilərəm?",
      "answer": "Ninja təklifi ödəniş, nağdlaşdırma və ya köçürmə etdiyiniz andan etibarən 24 saat ərzində keçərli olur. Bu müddət başa çatdıqdan sonra, təəssüf ki, təklifdən yararlana bilməyəcəksiniz."
    },
    {
      "id": 7,
      "question": "Ninja təklifindən yararlanmaq üçün nə etməliyəm?",
      "answer": "- Əgər Birbank tətbiqi istifadəçisisinizsə, xərclədiyiniz məbləği tətbiq daxilində Ninja ilə bölə bilərsiniz."
    },
    {
      "id": 8,
      "question": "Ninja təklifindən yararlanmaq üçün balansımda nə qədər məbləğ olmalıdır?",
      "answer": "- Xərclədiyiniz pulu aylara bölə bilməyiniz üçün balansınızda ən azı müvafiq komissiya qədər məbləğ olmalıdır. Balansınızda yetərli məbləğ olmasa, bununla bağlı bildiriş alacaqsınız;  "
    },
    {
      "id": 9,
      "question": "Kart balansımda kredit limiti ilə yanaşı, şəxsi vəsaitim də varsa, Ninja təklifindən yararlana bilərəm?",
      "answer": "Kartınızda həm kredit limiti, həm də şəxsi vəsaitiniz varsa, birdəfəlik ödədiyiniz, nağdlaşdırdığınız və ya köçürdüyünüz məbləğ öncə şəxsi vəsaitinizdən, qalan hissə isə kredit limitinizdən çıxılır və sizə Ninja təklifi göndərilir. Ninja təklifindən yararlanacağınız halda isə məbləğin tam hissəsi kredit limitindən çıxılır və digər hissə şəxsi vəsait balansınıza geri qayıdır.  "
    },
    {
      "id": 10,
      "question": "Hansı ticarət və xidmət sahələri üzrə ödəniş etsəm, Ninja təklifindən yararlana bilməyəcəm?",
      "answer": "Bunlara aşağıdakı MCC-lər üzrə fəaliyyət göstərən ticarət və xidmət sahələri aiddir: 6532, 6536, 6533."
    },
    {
      "id": 11,
      "question": "'Nağdlaşdırma' dedikdə hansı əməliyyatlar nəzərdə tutulur?",
      "answer": "Bankomat və ya QR kod vasitəsilə kartdan pul çıxarırsınızsa, bu — nağdlaşdırmadır."
    },
    {
      "id": 12,
      "question": "'Köçürmə' dedikdə hansı əməliyyatlar nəzərdə tutulur?",
      "answer": "Kartınızdan digər kartlara pul göndərirsinizsə, başqa tətbiqlərin və elektron pulqabıların balansını artırırsınızsa, bu — köçürmədir."
    },
    {
      "id": 13,
      "question": "Karta mədaxil etdiyim məbləği Ninja ilə aylara bölə bilərəm?",
      "answer": "Xeyr, siz yalnız kartın kredit limitindən xərclədiyiniz məbləği Ninja ilə aylara bölə bilərsiniz. "
    }, {
      "id": 14,
      "question": "MCC nədir?",
      "answer": "Bu, ticarət və ya xidmət obyektinin fəaliyyət növünü göstərən koddur."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null);
  const [status, setStatus] = useState(true);

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
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[75%]">
          <div className="flex flex-col w-full">
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>              
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Ninja təklifi</Link>
            </div>
          </div>
          <div className="flex  justify-between  w-full bg-[linear-gradient(98.65deg,#7D0018_0%,#CA154A_100%)] rounded-[10px]">
            <div className="flex w-[60%] items-center py-12 px-18">
              <h2 className='text-[32px] font-semibold text-white'>Ninja təklifi ilə xərcləri hissələrə bölüb, ödəyin!</h2>
            </div>
            <div className="flex items-center justify-center w-[50%] py-12 px-2.5 ">
              <img src={ninjaCardImg} className='w-86.5 object-cover flex' />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full ">
          <div className="flex  justify-center w-[40%]">
            <h2 className='text-[30px] font-semibold text-[#222222] mt-12 mb-7.5'>Bilmək lazımdır</h2>
          </div>
          <div className="flex flex-col items-center justify-center w-full bg-[#F9F9FA] py-6 mb-10" >
            <div className="flex items-center justify-center">
              <span onClick={() => setStatus(true)} className={`inline-flex items-center justify-center ${status ? " text-white  bg-[#52575c]" : " text-black bg-[#e7e8ea]"}  font-bold text-[16px] cursor-pointer rounded-[5px] py-px px-1.5 w-70.5 h-10`}>Haqqında</span>
              <span onClick={() => setStatus(false)} className={`inline-flex items-center justify-center cursor-pointer ${status ? " text-black bg-[#e7e8ea]" : "  text-white  bg-[#52575c]"}   font-bold text-[16px]  rounded-[5px] py-px px-1.5 w-70.5 h-10 transition duration-200 hover:bg-[#A0A4A8]`}>FAQ</span>
            </div>
            <div className='w-[70%]'>
              {status ? (
                <>
                  <div className="flex flex-col gap-2 my-10 justify-center w-full">
                    <p className='text-[16px] text-[#222222] font-normal'>Ninja təklifi nədir?</p>
                    <p className='text-[16px] text-[#222222] font-normal'>Bu, Birbank taksit kartları ilə etdiyiniz birdəfəlik ödənişlərin (POS-terminal ilə və ya onlayn), eləcə də nağdlaşdırdığınız və köçürdüyünüz məbləğlərin müəyyən komissiya qarşılığında hissələrə bölünməsi üçün gələn təklifdir.</p>
                    <p className='text-[16px] text-[#222222] font-normal'>Ninja təklifindən necə yararlanmaq olar?</p>
                    <p className='text-[16px] text-[#222222] font-bold'>Birbank tətbiqi vasitəsilə:</p>
                    <p className='text-[16px] text-[#222222] font-normal'> <span className='font-bold'>- Tətbiqin bildirişi ilə — </span>taksit kartı ilə ən azı 20 AZN məbləğində birdəfəlik ödəniş, nağdlaşdırma və ya köçürmə etdikdən sonra sizə Birbank tətbiqindən Ninja təklifi ilə bağlı bildiriş göndərilir. Birbank tətbiqiniz varsa və ya son 60 gündə ən azı bir dəfə tətbiqə daxil olmusunuzsa, tətbiqdən Ninja təklifi ilə bağlı bildiriş alırsınız. Bildirişdəki linkə keçdikdə “Ninja” səhifəsi açılacaq və siz burada məbləği aylara bölə biləcəksiniz;</p>
                    <p className='text-[16px] text-[#222222] font-normal'><span className='font-bold'> - “Daha çox” bölməsində olan “Ninja” səhifəsində —</span> bu səhifəyə daxil olaraq Ninja təklifindən yararlana biləcəyiniz əməliyyatların siyahısı, eləcə də daha öncə yararlandığınız Ninja təkliflərinin tarixçəsini görə bilərsiniz;</p>
                    <p className='text-[16px] text-[#222222] font-normal'> <span className='font-bold'>- Tətbiqdəki əməliyyat qəbzlərindən — </span> qəbzin aşağısında yerləşən "Məbləği Ninja ilə böl" düyməsi vasitəsilə həmin ödəniş üçün Ninja təklifindən yararlanmaq mümkündür.</p>
                    <p className='text-[16px] text-[#222222] font-normal'>Hansı hallarda Ninja təklifi alacam?</p>
                    <p className='text-[16px] text-[#222222] font-normal'>Birbank taksit kartı ilə birdəfəlik ödəniş, nağdlaşdırma və ya köçürmə etdikdə Ninja təklifi alacaqsınız.</p>
                    <p className='text-[16px] text-[#222222] font-normal'>Ninja təklifi nə qədər müddət aktiv qalır?</p>
                    <p className='text-[16px] text-[#222222] font-normal'>Ninja təklifi birdəfəlik ödəniş, nağdlaşdırma və ya köçürmə etdiyiniz andan etibarən 24 saat ərzində keçərli olur.</p>
                    <p className='text-[16px] text-[#222222] font-normal'>Hansı hallarda Ninja təklifi göndərilmir?</p>
                    <p className='text-[16px] text-[#222222] font-normal'> - Ödənişləriniz bu MCC kodları* üzrə olduqda: 6532, 6536, 6533</p>
                    <p className='text-[16px] text-[#222222] font-normal'>- Ödənişləriniz bu MCC kodları* üzrə olduqda: 6532, 6536, 6533</p>
                    <p className='flex gap-1'> <CgAsterisk className='text-red-600' />
                      <span className='text-[16px] text-[#222222] font-normal'> MCC kodu — ticarət nöqtəsinin fəaliyyət növünü göstərən koddur.</span></p>
                  </div>
                  <div className="flex flex-col w-full items-center justify-center ">

                    <div className="flex items-center w-full justify-between mb-5">
                      <p className='text-[#ec3342] font-semibold text-[16px] pl-6'>Müddət</p>
                      <p className='text-[#ec3342] font-semibold text-[16px]'>ATM Nağdlaşdırma</p>
                      <p className='text-[#ec3342] font-semibold text-[16px]'>Kartdan karta köçürmə</p>
                      <p className='text-[#ec3342] font-semibold text-[16px]'>Alış-Veriş</p>
                    </div>

                    <div className="flex items-center  w-full justify-between bg-white rounded-sm">
                      <p className='text-[#25282b] font-light text-[16px] pl-6 py-2.5'>3 ay</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>	8.0%</p>
                      <p className='text-[#25282b] font-light text-[16px]  p-2.5'>8.0%</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>6.0%</p>
                    </div>

                    <div className="flex items-center  w-full justify-between bg-[#F9F9FA] rounded-sm">
                      <p className='text-[#25282b] font-light text-[16px] pl-6 py-2.5'>6 ay</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>	12.5%</p>
                      <p className='text-[#25282b] font-light text-[16px]  p-2.5'>12.5%</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>10.0%</p>
                    </div>

                    <div className="flex items-center  w-full justify-between bg-white rounded-sm">
                      <p className='text-[#25282b] font-light text-[16px] pl-6 py-2.5'>12 ay</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>	19.5%</p>
                      <p className='text-[#25282b] font-light text-[16px]  p-2.5'>19.5%</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>17.0%</p>
                    </div>

                    <div className="flex items-center  w-full justify-between bg-[#F9F9FA] rounded-sm">
                      <p className='text-[#25282b] font-light text-[16px] pl-6 py-2.5'>18 ay</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>	26.0%</p>
                      <p className='text-[#25282b] font-light text-[16px]  p-2.5'>26.0%</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>24.0%</p>
                    </div>

                    <div className="flex items-center  w-full justify-between bg-white rounded-sm">
                      <p className='text-[#25282b] font-light text-[16px] pl-6 py-2.5'>22 ay</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>	30.0%</p>
                      <p className='text-[#25282b] font-light text-[16px]  p-2.5'>30.0%</p>
                      <p className='text-[#25282b] font-light text-[16px] p-2.5'>28.0%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pl-4 my-5">
                    <IoInformationCircleOutline className='text-[17px] text-red-600' />
                    <span className='text-[12px] text-[#25282b] font-light flex items-center justify-center'>Kampaniya müddətləri ərzində standart Ninja təklifləri Bank tərəfindən təklif edilməyə bilər.</span>
                  </div>
                </>
              ) : (
                faqData.map((item, index) => {
                  return (
                    <div className="flex flex-col w-full   border-b-[#E9EAEC]">
                      <div key={index} onClick={() => toggleFaq(index)} className=" flex  px-3 py-4 items-center justify-between border-b border-b-[#E9EAEC] cursor-pointer">
                        <p className='text-[16px] text-[#222222]  font-normal'>{item.question}</p>
                        <IoIosArrowDown className={`text-[16px]  text-[#222222] transform ${activeIndex === index ? "rotate-180" : ""}`} />
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-75" : "max-h-0"
                          }`}
                      >
                        <p className='w-full pt-1 px-6 pb-6 text-[16px] font-light text-[#222222] bg-[#F3F3F5]'>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )
                })
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default NinjaComponents
