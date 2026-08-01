import React from 'react'
import CreditGuy from '../assets/Credit/Credit_guy.png'
import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
const getCreditContent = () => {
  const [prefix, setPrefix] = useState('055');
  const [phoneNumber, setPhoneNumber] = useState('392 49 31');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const prefixes = ['010', '050', '051', '055', '060'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const faqData = [
    {
      "id": 1,
      "question": "Nağd pul krediti üçün maksimal kredit məbləği nə qədərdir, hansı müddətə verilə bilər?",
      "answer": "Maksimal kredit məbləği 50.000 AZN-dək təyin edilmişdir. Kreditin müddəti isə 59 ayadək ola bilər. Bu kredit növü şəxsi ehtiyacları qarşılamaq üçün nəzərdə tutulmuşdur və büdcəyə uyğun şəkildə hissə-hissə ödəniş imkanı yaradır. İllik faiz dərəcəsi isə minimum 10.9%-dən başlayır."
    },
    {
      "id": 2,
      "question": "Nağd pul krediti almaq üçün minimal və maksimal yaş həddi hansılardır?",
      "answer": "Kredit almaq üçün minimal yaş həddi 18-dir. Maksimal yaş həddi isə kreditin son ödəniş tarixinədək 70 yaşı keçməməlidir. Yəni kredit götürən şəxsin yaşı kreditin bütün müddəti ərzində 70-dən çox olmamalıdır. Bu qayda həm gənclərin, həm də yaşlıların kredit almaq imkanlarını tənzimləmək üçün müəyyən edilmişdir. Bu yaş hədləri hər bir müraciət edən şəxs üçün məcburi şərtdir. "
    },
    {
      "id": 3,
      "question": "Nağd pul krediti almaq üçün hansı sənədlər tələb olunur?",
      "answer": "Bu krediti almaq üçün əsasən şəxsiyyəti təsdiq edən sənəd tələb olunur. Rəsmi gəliri olan şəxslər üçün gəliri təsdiq edən sənədlərin təqdim edilməsi də zəruri ola bilər. Bununla yanaşı, xüsusi hallarda zamin tələb edilə bilər. Kredit üçün müraciət prosesini sürətləndirmək üçün bütün lazımi sənədlərin tam və düzgün təqdim edilməsi vacibdir."
    },
    {
      "id": 4,
      "question": "Başqa bankda kredit borcu olan şəxslər də nağd pul krediti əldə edə bilərmi?",
      "answer": "Bəli, başqa bankda kredit borcu olan şəxslər də kredit əldə edə bilərlər. Kredit verilməsi üçün əsas şərtlərdən biri rəsmi gəlirin mövcud olmasıdır. Digər bankda kredit borcunun olması müraciətinin qəbul edilməsinə maneə yaratmır. Lakin kreditin verilməsi zamanı ümumi maliyyə vəziyyəti və ödəmə qabiliyyəti nəzərə alınacaqdır. Buna görə də təqdim edilən məlumatların dəqiq və düzgün olması vacibdir."
    },
    {
      "id": 5,
      "question": "Nağd pul krediti üçün zamin tələb edilir mi?",
      "answer": "Ümumi qaydada zamin tələb edilmir. Lakin xüsusi hallarda zamin tələb oluna bilər. Bu hallar əsasən müştərinin maliyyə göstəricilərindən, gəlir səviyyəsindən və kreditin məbləğindən asılı olaraq dəyişə bilər. Kredit müraciəti zamanı bank tərəfindən təqdim edilən şərtlərə uyğun olaraq zamin tələbi barədə məlumat verilir. Müştərilər müraciət etdikləri zaman bu detallar barədə daha dəqiq məlumat ala bilərlər."
    },
    {
      "id": 6,
      "question": "Nağd pul kreditini onlayn şəkildə necə əldə etmək olar?",
      "answer": "Bu krediti onlayn şəkildə əldə etmək üçün müştərilər Birbank-ın rəsmi saytına və ya tətbiqinə daxil olmalıdırlar. Onlayn müraciət prosesi sadə və sürətlidir. Müştəri öz mobil nömrəsini daxil edərək müraciət prosesinə başlayır və tələb olunan məlumatları düzgün şəkildə təqdim edir. Müraciət etdikdən sonra kreditin təsdiqi və rəsmiləşdirilməsi barədə məlumat əldə edilir. Onlayn kredit müraciəti ilə bağlı istənilən vaxt müraciət etmək mümkündür ki, bu da prosesi daha rahat və əlçatan edir."
    },
    {
      "id": 7,
      "question": "Nağd pul krediti üzrə maksimal effektiv faiz dərəcəsi (FİFD) nə qədər ola bilər?",
      "answer": "Maksimal effektiv faiz dərəcəsi (FİFD) 43.84%-ə qədər ola bilər. Effektiv faiz dərəcəsi kreditin ümumi dəyərini göstərir və illik faiz dərəcəsi, komissiya xərcləri və digər mümkün xərcləri də nəzərə alır. Müştərilər kredit müraciəti etməzdən əvvəl təqdim olunan faiz dərəcələrini və kredit şərtlərini diqqətlə nəzərdən keçirməli və öz ödəmə qabiliyyətlərinə uyğun seçim etməlidirlər."
    },
    {
      "id": 8,
      "question": "Nağd pul krediti üzrə aylıq ödənişləri necə hesablaya bilərəm?",
      "answer": "Aylıq ödənişləri hesablamaq üçün Birbank-ın rəsmi saytında və ya tətbiqində yerləşdirilmiş kredit kalkulyatorundan istifadə edə bilərsən. Aylıq ödənişlər kreditin məbləği, müddəti və tətbiq olunan illik faiz dərəcəsinə əsasən müəyyən edilir. Kredit kalkulyatoruna müvafiq məlumatları daxil etdikdən sonra aylıq ödəniş məbləği avtomatik olaraq hesablanır. Bundan əlavə, kredit üzrə ödəniş cədvəli də əldə edilə bilər ki, bu da hər ay nə qədər ödəniş etməli olduğunu dəqiq göstərir."
    },
    {
      "id": 9,
      "question": "Nağd pul krediti üçün müraciət nəticələri hansı müddət ərzində bildirilir?",
      "answer": "Müraciət etdikdən sonra nəticələr adətən qısa müddət ərzində müştəriyə bildirilir. Onlayn müraciət zamanı proses daha sürətli olur və müraciətin təsdiqi barədə məlumat dərhal və ya bir neçə dəqiqə ərzində təqdim edilə bilər. Lakin bəzi hallarda müraciətin qiymətləndirilməsi daha çox vaxt tələb edə bilər. Müraciət prosesinin nəticəsi barədə bildiriş müştərinin qeyd etdiyi əlaqə vasitələri ilə (məsələn, SMS və ya elektron poçt) göndərilir."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null);
  const cat = [
    { desc: "Tez-tez verilən suallar" },
    { desc: "Şərtlər" },
    { desc: "Əlavə məlumatlar" }
  ]
  const descData = [
    {
      category: 'Şərtlər',
      p : [
        { desc: '- Krediti Kapital Bank və ya digər bankdan əmək haqqı/təqaüd alan şəxslər əldə edə bilər' },
        { desc: '- Minimal yaş 18 olmalıdır, maksimal yaş isə kreditin son ödəniş tarixinədək 70 yaşı keçməməlidir' },
        { desc: '- Son iş yerində staj minimum 3 ay olmalıdır. Təqaüdçü müştərilər üzrə staj tələbi mövcud deyil' },
        { desc: '- Xüsusi hallarda zamin tələb edilə bilər' },
        { desc: '- Digər banklarda krediti olanlara da kredit verilə bilər' },
        { desc: '- Rəsmi gəliri olan şəxslər' },
        { desc: '- FİFD: min. 10.9%-maks. 43.84% (6 ay-59 ay)' },
        { desc: '- Nağd kredit üzrə ödənişlər gün ərzində saat 19:00-dək edildikdə həmin gün ödənilmiş hesab olunur. Qeyd edilən vaxtdan sonra həyata keçirilən ödənişlər isə növbəti iş günü icra edilmiş sayılır (müqavilədə və ya bank tərəfindən digər qayda nəzərdə tutulmamışdırsa).' },
        { desc: '- Bank müştəriyə həmin kredit üzrə onunla bağlı risklərə təminat verilməsini nəzərdə tutan borcalanın həyatının ölüm halından və əmək qabiliyyətinin itirilməsi hallarından sığorta müqaviləsinin bağlanmasını təklif edir.' },
      ]
    },
    {
      category: 'Əlavə məlumatlar',
      p : [
        { desc: '- Nağd pul krediti, gündəlik və ya gözlənilməz maliyyə ehtiyaclarını qarşılamaq üçün çevik və etibarlı bir həll təqdim edir. Müxtəlif kredit məbləği və geri ödəniş müddəti seçimləri ilə bu məhsul büdcənə uyğun planlı maliyyə idarəsi imkanı yaradır. Kreditə müraciət prosesi sadə və sürətli olmaqla yanaşı, rəsmi gəliri olan şəxslər üçün əlverişli şərtlərlə təqdim olunur. Təqaüdçülərdən zamin və ya iş stajı tələbi qoyulmadan kredit verilməsi isə bu məhsulu daha da əlçatan edir. Əgər sən də maliyyə ehtiyaclarını rahatlıqla qarşılamaq və ödəmə prosesini öz imkanlarınıza uyğun şəkildə həyata keçirmək istəyirsənsə, Birbank tətbiqindən və ya sənə ən yaxın Birbank filialından faydalana bilərsiniz.' },
      ]
    }
  ]
  const [category, setCategory] = useState('Tez-tez verilən suallar');
  const filteredData =  descData.find((it) => it.category === category)
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
      <div className="flex items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col items-center justify-center w-[95%] sm:w-[95%] lg:w-[75%]">
          <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col w-full">
            <div className="flex flex-col-reverse bg-[#F9F9FA]  w-full relative sm:flex-row sm:px-10 sm:py-12.5 ">
              <div className="flex flex-col px-2 py-4  gap-7 w-full sm:w-[50%] sm:p-0 md:w-[50%] lg:w-[70%] ">
                <p className='flex text-[36px] font-semibold text-[#222222]'>
                  <span className='text-[36px] font-semibold text-[#CE0F1D] mr-2'>Nağd</span>
                  pul krediti
                </p>
                <p className='text-[16px] font-light text-[#25282b]'>Nağd pul krediti şəxsi ehtiyaclarınızı qarşılayaraq büdcənizə uyğun hissə-hissə ödəmə şansı tanıyan nağd pul kreditidir.</p>
                <div className="flex items-center  gap-5">
                  <div className="flex flex-col gap-1">
                    <h2 className='text-[16px] font-bold text-[#25282b]'>50 000 AZN-dək</h2>
                    <p className='text-[16px] font-normal text-[#25282b]'>Kredit məbləği</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className='text-[16px] font-bold text-[#25282b]'>59 ayadək</h2>
                    <p className='text-[16px] font-normal text-[#25282b]'>Kredit məbləği</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className='text-[16px] font-bold text-[#25282b]'>10.9%-dən</h2>
                    <p className='text-[16px] font-normal text-[#25282b]'> İllik faiz dərəcəsi</p>
                  </div>
                </div>
              </div>
              <img src={CreditGuy} className=' bottom-0 right-0 object-contain w-104 self-center my-10 sm:absolute sm:m-0 sm:w-93 sm:self-auto md:w-82 lg:w-101 ' />
            </div>
            <div className="flex items-center justify-center flex-col w-full gap-5 bg-[#E7E8EA] pt-8.75 pb-10">
              <p className='w-[60%] lg:w-[50%] text-center text-[28px] text-[#25282b] font-bold'>Krediti <span className='text-[#CE0F1D]'>onlayn</span> dərhal əldə et!</p>
              <div className="flex flex-col items-center justify-center ">
                <div className="relative w-85">
                  <div className="relative bg-white border  border-transparent rounded-xl px-3 pt-5 pb-2 flex items-center shadow-sm">
                    <label className="absolute top-1.5 left-3 text-xs text-[#4b5b7c] font-medium">
                      Mobil nömrə
                    </label>

                    <div ref={dropdownRef} className="relative flex items-center h-full">
                      <div
                        className="flex items-center cursor-pointer text-lg font-medium text-gray-800 mr-2"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>{prefix}</span>
                        <svg
                          className={`w-4 h-4 ml-1 text-gray-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                      </div>

                      {isDropdownOpen && (
                        <div className="absolute top-10 -left-2.5 w-24 bg-white border border-gray-200 rounded-lg shadow-xl z-20 py-2">
                          {prefixes.map((p) => (
                            <div
                              key={p}
                              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center text-lg text-gray-800 transition-colors"
                              onClick={() => {
                                setPrefix(p);
                                setIsDropdownOpen(false);
                              }}
                            >
                              {p}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      type="text"
                      className="bg-transparent    outline-none text-lg font-medium text-gray-800 w-full"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="XXX XX XX"
                    />
                  </div>

                  <button className="mt-4 w-full cursor-pointer transition duration-100 bg-[#ec3342] hover:bg-[#BE0E1B] text-white text-lg font-semibold py-3.5 rounded-xl shadow-md ">
                    Davam et
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-12 justify-center item-start gap-0 w-full">
            <h2 className='text-[30px] font-semibold text-[#25282b]'>Bilmək faydalıdır</h2>
            <div className="inline-flex item-start w-full whitespace-nowrap hide-scrollbar my-10 overflow-x-auto md:justify-center md:w-fit md:overflow-x-hidden  ">
              {
                cat.map((item, id) => (
                  <p key={id} onClick={() => setCategory(item.desc)} className={`px-5 py-2.5  text-[16px] transition duration-100 font-medium ${item.desc === category ? "bg-[#EC3342] text-white" : "bg-white text-[#9498ac] hover:bg-[#D4D6DB] hover:text-black"}  cursor-pointer rounded-lg`}>{item.desc}</p>
                ))
              }
            </div>
            {
              category === 'Tez-tez verilən suallar' ? (

                faqData.map((item, index) => (
                  <div key={index} className="flex flex-col w-full items-center justify-center ">

                    <div
                      onClick={() => toggleFaq(index)}
                      className="group flex border-b border-[#E9EAEC] w-full px-3 py-4 items-center hover:border-none justify-between cursor-pointer"
                    >
                      <p className='text-[16px] text-[#25282b] w-[90%]  font-normal transition duration-50 group-hover:text-[#A296AC] group-hover:border-none'>
                        {item.question}
                      </p>

                      <IoIosArrowDown
                        className={`text-[16px] text-[#222222] transform ${activeIndex === index ? "rotate-180" : ""
                          }`}
                      />
                    </div>

                    <div
                      className={`overflow-hidden flex items-center justify-center transition-all duration-300 ${activeIndex === index ? "max-h-75" : "max-h-0"
                        }`}
                    >
                      <p className='w-full  px-4 py-5 text-[16px] font-extralight text-[#222222] bg-[#F3F3F5]'>
                        {item.answer}
                      </p>
                    </div>

                  </div>
                ))
              ) : (
                <div className="flex flex-col items-start w-full gap-6">
                  {

                    filteredData.p.map((item,id)=> (
                      <p className='text-[16px] font-light text-[#25282b]' key={id}>{item.desc}</p>
                    ))
                    
                  }
                </div>
              )

            }
          </div>
        </div>
      </div>
    </>
  )
}

export default getCreditContent
