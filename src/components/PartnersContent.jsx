import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PartnerData from '../APIDatas/partnersData.json'
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
const PartnersContent = () => {
  const [partners, setPartners] = useState(
    PartnerData.pageProps.initialState.partners.partnersData
  );

  const filteredPartnerData =
    PartnerData.pageProps.initialState.partners.filters;

  const partnersCategories =
    PartnerData.pageProps.initialState.partners.filters.categories;

  const partnersİnstallments =
    PartnerData.pageProps.initialState.partners.filters.installments;

  const partnersBNPL =
    PartnerData.pageProps.initialState.partners.filters.bnpl_options;

  const partnersCashbackes =
    PartnerData.pageProps.initialState.partners.filters.cashbackes;


  const [slice, setSlice] = useState(9);

  const [selected, setSelected] = useState(false);

  const [selectedInstallments, setSelectedInstallments] = useState([]);
  const [selectedBNPL, setSelectedBNPL] = useState([]);
  const [selectedCashbackes, setSelectedCashbackes] = useState([]);

  const [inputVal, setInputVal] = useState("");

  const [categoryFilter, setCategoryFilter] = useState(null);

  const [sortCategory, setSortCategory] = useState("Çeşidlə");

  const [sortBenefits, setSortBenefits] = useState([]);

  const [responsiveFilter, setResponsiveFilter] = useState(false)

  const [responsiveCategory, setResponsiveCategory] = useState(false)

  const [selectedResponsiveCategory, setSelectedResponsiveCategory] = useState('Kateqoriyalar')

  // API-dən gələn partners üzərində search və category filter
  const filteredCategory = partners
    .filter((item) =>
      item.attributes.name
        .toLowerCase()
        .includes(inputVal.toLowerCase())
    )
    .filter((item) =>
      categoryFilter === null
        ? true
        : item.attributes.categories.data.some(
          (category) =>
            category.attributes.categoryName === categoryFilter
        )
    )
    ;


  const [totalPartners, setTotalPartners] = useState(partners.length);

  useEffect(() => {
    setTotalPartners(filteredCategory.length);
  }, [filteredCategory]);// her defe filter olunanda ve ya olunmayanda arrayin olcusun qaytarir
  return (
    <>
      <Helmet>
        <title>Birbank | Partnyorlar</title>
        <meta
          name="description"
          content="Ana səhifənin təsviri"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC] ">
        <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%] h-full gap-6 relative items-center justify-center">
          <div className="flex flex-col w-full h-full">
            <h2 className='text-[24px] font-bold text-[#25282b] '>Partnyorlar</h2>
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Partnyorlar</Link>
            </div>
          </div>
          <div className="flex items-start justify-center gap-5  w-full mb-20">
            {
              responsiveFilter && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden"></div>
              )
            }
            <div className=" flex-col gap-6 justify-center hidden sm:hidden md:hidden lg:w-[25%] lg:flex">
              <div className="flex flex-col gap-2 p-6 border border-[#f3f3f5] rounded-xl py-10  shadow-[0_6px_20px_0_rgba(19,22,60,0.06)]">
                <h2 className='font-semibold text-[#222222] text-[24px]'>Kateqoriyalar</h2>
                <div className="flex flex-col max-h-43 overflow-y-auto">
                  <span onClick={() => {
                    if (item.label === categoryFilter) {
                      setCategoryFilter(null)
                    }

                  }} className={`font-normal text-[14px] py-2.5 border-b border-[#f3f3f5] cursor-pointer ${categoryFilter === null ? "text-[#ef3242]" : "text-black"}`}>Bütün kateqoriyalar</span>
                  {
                    partnersCategories.map((item, id) => (
                      <span onClick={() => {
                        if (item.label === categoryFilter) {
                          setCategoryFilter(null)
                        }
                        else {
                          setCategoryFilter(item.label)
                        }
                      }} className={` ${item.label === categoryFilter ? "text-[#ef3242]" : "text-black"} font-normal text-[14px] py-2.5 border-b border-[#f3f3f5] cursor-pointer`}>{item.label}</span>
                    ))
                  }
                </div>
              </div>
              <div className="flex flex-col gap-2 p-6 border border-[#f3f3f5] rounded-xl   shadow-[0_6px_20px_0_rgba(19,22,60,0.06)]">
                <h2 className='font-semibold text-[#222222] text-[24px]'>Üstünlüklər</h2>
                <div className="flex flex-col gap-5 border-b border-[#f3f3f5] py-4 px-2">
                  <div className="flex gap-2 items-center ">
                    <img src="https://birbank.az/file/Frame_2085662747_0868a51412.svg" />
                    <p className='font-normal text-[16px] text-[#222222]'>Taksit sayı, <span className='text-[#6b7280] font-medium text-[16px]'> ay</span></p>
                  </div>
                  <div className="flex items-center  w-full flex-wrap gap-2">
                    <span
                      onClick={() => {
                        if (selectedInstallments.length === partnersİnstallments.length) {
                          setSelectedInstallments([]);
                        } else {
                          setSelectedInstallments(
                            partnersİnstallments.map((item) => item.label)
                          );
                        }
                      }}
                      className={`rounded-xl py-px px-2.5 ${selectedInstallments.length === partnersİnstallments.length
                        ? "text-white bg-[#ec3342]"
                        : "bg-[#F3F3F5] text-[#797F8C]"
                        } inline-flex w-fit items-center justify-center font-normal text-[14px] cursor-pointer`}
                    >
                      Hamısını seç
                    </span>

                    {
                      partnersİnstallments.map((item, id) => (
                        <span
                          key={id}
                          onClick={() => {
                            setSelectedInstallments((prev) =>
                              prev.includes(item.label)
                                ? prev.filter((value) => value !== item.label)
                                : [...prev, item.label]
                            );
                          }}
                          className={`rounded-xl py-px px-2.5 ${selectedInstallments.includes(item.label)
                            ? "text-white bg-[#ec3342]"
                            : "bg-[#F3F3F5] text-[#797F8C]"
                            } inline-flex w-10 items-center justify-center font-normal text-[14px] cursor-pointer`}
                        >
                          {item.label}
                        </span>
                      ))
                    }
                  </div>
                </div>

                <div className="flex flex-col gap-5 border-b border-[#f3f3f5] py-4 px-2">
                  <div className="flex gap-2 items-center ">
                    <img src="https://birbank.az/file/Frame_2085662748_947972af85.svg" />
                    <p className='font-normal text-[16px] text-[#222222]'>Böl-ödə, <span className='text-[#6b7280] font-medium text-[16px]'> ay</span></p>
                  </div>
                  <div className="flex items-center  w-full flex-wrap gap-2">
                    <span
                      onClick={() => {
                        if (selectedBNPL.length === partnersBNPL.length) {
                          setSelectedBNPL([]);
                        } else {
                          setSelectedBNPL(
                            partnersBNPL.map((item) => item.label)
                          );
                        }
                      }}
                      className={`rounded-xl py-px px-2.5 ${selectedBNPL.length === partnersBNPL.length
                        ? "text-white bg-[#ec3342]"
                        : "bg-[#F3F3F5] text-[#797F8C]"
                        } inline-flex w-fit items-center justify-center font-normal text-[14px] cursor-pointer`}
                    >
                      Hamısını seç
                    </span>

                    {
                      partnersBNPL.map((item, id) => (
                        <span
                          key={id}
                          onClick={() => {
                            setSelectedBNPL((prev) =>
                              prev.includes(item.label)
                                ? prev.filter((value) => value !== item.label)
                                : [...prev, item.label]
                            );
                          }}
                          className={`rounded-xl py-px px-2.5 ${selectedBNPL.includes(item.label)
                            ? "text-white bg-[#ec3342]"
                            : "bg-[#F3F3F5] text-[#797F8C]"
                            } inline-flex w-10 items-center justify-center font-normal text-[14px] cursor-pointer`}
                        >
                          {item.label}
                        </span>
                      ))
                    }
                  </div>
                </div>

                <div className="flex flex-col gap-5 border-b border-[#f3f3f5] py-4 px-2">
                  <div className="flex gap-2 items-center ">
                    <img src="https://birbank.az/file/Frame_2085662745_9a25432f87.svg" />
                    <p className='font-normal text-[16px] text-[#222222]'>Bonus, <span className='text-[#6b7280] font-medium text-[16px]'>%</span></p>
                  </div>
                  <div className="flex items-center  w-full flex-wrap gap-2">
                    <span
                      onClick={() => {
                        if (selectedBNPL.length === partnersBNPL.length) {
                          setSelectedCashbackes([]);
                        } else {
                          setSelectedCashbackes(
                            partnersBNPL.map((item) => item.label)
                          );
                        }
                      }}
                      className={`rounded-xl py-px px-2.5 ${selectedCashbackes.length === partnersCashbackes.length
                        ? "text-white bg-[#ec3342]"
                        : "bg-[#F3F3F5] text-[#797F8C]"
                        } inline-flex w-fit items-center justify-center font-normal text-[14px] cursor-pointer`}
                    >
                      Hamısını seç
                    </span>

                    {
                      partnersCashbackes.map((item, id) => (
                        <span
                          key={id}
                          onClick={() => {
                            setSelectedCashbackes((prev) =>
                              prev.includes(item.label)
                                ? prev.filter((value) => value !== item.label)
                                : [...prev, item.label]
                            );
                          }}
                          className={`rounded-xl py-px px-2.5 ${selectedCashbackes.includes(item.label)
                            ? "text-white bg-[#ec3342]"
                            : "bg-[#F3F3F5] text-[#797F8C]"
                            } inline-flex w-10 items-center justify-center font-normal text-[14px] cursor-pointer`}
                        >
                          {item.label}
                        </span>
                      ))
                    }
                  </div>
                </div>
                <span onClick={() => { setSelectedInstallments([]); setSelectedBNPL([]); setSelectedCashbackes([f]) }} className='flex items-center justify-center px-4 py-3 rounded-xl bg-[#F3F3F5] text-[14px] font-medium text-[#6b7280] cursor-pointer transition duration-200 hover:bg-[#6B7280] hover:text-white mt-4'>Sıfırla</span>
              </div>
            </div>
            <div className="flex flex-col  justify-center gap-4 w-full sm:w-full md:w-full lg:w-[80%] h-fit relative ">
              <div className="flex items-start justify-between w-full gap-4">
                <div className="flex flex-1  p-4 rounded-[10px] border border-[#d4d6db] gap-4 cursor-default">
                  <CiSearch className="text-[24px]" />
                  <input onChange={(e) => setInputVal(e.target.value)}
                    type="text"
                    placeholder="Axtar"
                    className="w-full outline-none "
                  />
                </div>

                <div className="hidden flex-col gap-2 sm:hidden md:hidden lg:flex lg:w-[30%] relative">
                  <div onClick={() => setSelected(!selected)} className="flex items-center justify-between p-4 border border-[#e1e5e9] rounded-lg  text-[#333333] text-[14px] font-normal cursor-pointer hover:border-[#d4d6db] ">
                    <option selected >{sortCategory}</option>
                    <MdOutlineKeyboardArrowDown size={22} className={`text-[#666666] transition transform duration-250 ${selected ? "rotate-180" : ""}`} />
                  </div>
                  {
                    selected && (
                      <div className="absolute top-full left-0 mt-2 inline-flex flex-col z-50 bg-white border border-[#e1e5e9] rounded-lg text-[#333333] text-[14px] font-normal cursor-pointer  w-full transition duration-250  hover:shadow-[0_4px_12px_0_rgba(19,22,60,0.06)] ">
                        {
                          filteredPartnerData.sorts.map((item, id) => (
                            <option onClick={() => { setSortCategory(item.label); setSelected(!selected) }} className={`px-4 py-3 transition duration-200  ${sortCategory === item.label ? "text-[#ef3342]" : "text-[#333333] hover:text-[#ef3342]"}  text-[14px] font-normal `}>{item.label}</option>
                          ))
                        }
                      </div>
                    )
                  }
                </div>
              </div>
              <p onClick={() => setTotalPartners(filteredCategory.length)} className='text-[#222222] font-normal text-[14px] flex items-start '>{totalPartners} {PartnerData.pageProps.messages.partners.partnerFound}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center  gap-4 w-full my-5">
                {
                  filteredCategory.slice(0, slice)
                    .map((item, id) => (
                      <div key={id} className="flex flex-col  p-6 gap-4 border border-[#f3f3f5] rounded-xl cursor-pointer w-full h-79 transition duration-300 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)]">
                        <div className="flex items-start justify-between w-full">
                          <div key={id} className="flex flex-col gap-4">
                            <img src={item.attributes?.image?.data?.attributes?.url} className='w-15 h-15 object-cover' />
                            <h2 className='text-[18px] font-medium text-[#25282b]'>{item.attributes.name}</h2>
                          </div>
                          <img src={`${item.attributes.birbonusPaymentMethod.data.attributes.birbonusPaymentMethod === "DEFAULT" ? "https://birbank.az/file/Barcode_1_38a2fa819c.svg" : "https://birbank.az/file/Barcode_522f5ced1a.svg"}`} />
                        </div>
                        <div className="flex gap-2 items-center w-[75%]">
                          <img src="https://birbank.az/file/Frame_2085662747_0868a51412.svg" />
                          <div className="flex gap-1 text-[#25282b] font-normal text-[14px] w-full flex-wrap items-center  ">
                            {
                              item.attributes.installments.data.map((inst, id) => (
                                <p className='leading-1' >{inst.attributes.duration}</p>
                              ))
                            }
                            <p>komissiyasız</p>
                          </div>
                        </div>
                        {
                          item.attributes.birbonus != null ?
                            (
                              <div className="flex gap-2 items-center w-[75%]">
                                <img src="https://birbank.az/file/Frame_2085662745_9a25432f87.svg" />
                                <div className="flex gap-1 text-[#25282b] font-normal text-[14px] w-full flex-wrap items-center  ">
                                  <p className='leading-1' >{item.attributes.birbonus}%</p>
                                  <p>bonus</p>
                                </div>
                              </div>
                            ) : (
                              <></>
                            )

                        }
                      </div>
                    ))
                }

              </div>
              <div className="flex items-center justify-center w-full">

                <span onClick={() => {
                  if (slice < partners.length) {
                    setSlice(slice + 9)
                  }

                }} className={`w-66 px-9 py-4 rounded-xl cursor-pointer ${slice === partners.length || slice === 0 ? "hidden" : "flex"} flex items-center justify-center text-center border border-[#e7e8ea] font-normal text-[16px] text-[#222222] transition duration-250 hover:shadow-[0_6px_20px_0_rgba(19,22,60,0.06)]`}>Daha çox</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full fixed overflow-x-hidden  bottom-5  z-40 sm:flex md:flex lg:hidden ">
            <div onClick={() => setResponsiveFilter(true)} className={`${responsiveFilter ? "hidden" : "flex"}  items-center shadow-[0_4px_14px_rgba(220,53,69,0.6)] justify-center w-[95%] gap-2 rounded-xl bg-[#ef3e42] px-5 py-3 cursor-pointer lg:hidden`}>
              <FaFilter className='text-white' />
              <span className='text-[16px] font-medium text-white'>Filterlər</span>
            </div>
          </div>
          <div className={`${responsiveFilter ? "flex" : "hidden"}  flex-col items-center    w-full   fixed inset-x-0 bottom-0 h-[80vh] z-50 lg:hidden`}>
            <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center  w-full max-h-full bg-white gap-3  pb-2 pt-5 rounded-t-2xl overflow-y-auto ">
              <div className="flex flex-col gap-2 w-full  px-4 relative ">
                <div onClick={() => { setResponsiveCategory(!responsiveCategory); setSelected(false) }} className="flex items-center w-full justify-between px-3.5 py-3 border border-[#e1e5e9] rounded-lg  text-[#333333] text-[14px] font-normal cursor-pointer hover:border-[#d4d6db] ">
                  <option selected >{selectedResponsiveCategory}</option>
                </div>
                {
                  responsiveCategory && (
                    <div className="absolute top-full left-0 mt-2  inline-flex flex-col z-50 bg-white border border-[#d4d6db] rounded-lg text-[#333333] text-[14px] font-normal cursor-pointer  w-full transition duration-250  hover:shadow-[0_4px_12px_0_rgba(19,22,60,0.06)] overflow-y-auto ">
                      {
                        partnersCategories.map((item, id) => (
                          <option onClick={() => { setSelectedResponsiveCategory(item.label); setResponsiveCategory(!responsiveCategory) }} className={`px-3.5 py-3 transition duration-200  ${selectedResponsiveCategory === item.label ? "text-[#ef3342]" : "text-[#333333] hover:text-[#ef3342]"}  text-[14px] font-normal `}>{item.label}</option>
                        ))
                      }
                    </div>
                  )
                }
              </div>

              <div className="flex flex-col gap-2 w-full relative  px-4">
                <div onClick={() => { setSelected(!selected); setResponsiveCategory(false) }} className="flex items-center w-full justify-between px-3.5 py-3 border border-[#e1e5e9] rounded-lg  text-[#333333] text-[14px] font-normal cursor-pointer hover:border-[#d4d6db] ">
                  <option selected >{sortCategory}</option>
                </div>
                {
                  selected && (
                    <div className="absolute top-full left-0 mt-2  inline-flex flex-col z-50 bg-white border border-[#d4d6db] rounded-lg text-[#333333] text-[14px] font-normal cursor-pointer  w-full transition duration-250  hover:shadow-[0_4px_12px_0_rgba(19,22,60,0.06)] ">
                      {
                        filteredPartnerData.sorts.map((item, id) => (
                          <option onClick={() => { setSortCategory(item.label); setSelected(!selected) }} className={`px-4 py-3 transition duration-200  ${sortCategory === item.label ? "text-[#ef3342]" : "text-[#333333] hover:text-[#ef3342]"}  text-[14px] font-normal `}>{item.label}</option>
                        ))
                      }
                    </div>
                  )
                }
              </div>
              <div className="flex flex-col gap-2 self-start  px-4">
                <h2 className='font-medium text-[#222222] text-[16px]'>Üstünlüklər</h2>
                <div className="flex flex-col gap-5 border-b border-[#f3f3f5] py-4">
                  <div className="flex gap-2 items-center ">
                    <img src="https://birbank.az/file/Frame_2085662747_0868a51412.svg" />
                    <p className='font-normal text-[16px] text-[#222222]'>Taksit sayı, <span className='text-[#6b7280] font-medium text-[16px]'> ay</span></p>
                  </div>
                  <div className="flex items-center flex-wrap w-full  gap-2">
                    <span
                      onClick={() => {
                        if (selectedInstallments.length === partnersİnstallments.length) {
                          setSelectedInstallments([]);
                        } else {
                          setSelectedInstallments(
                            partnersİnstallments.map((item) => item.label)
                          );
                        }
                      }}
                      className={`rounded-xl py-1 px-2.5 ${selectedInstallments.length === partnersİnstallments.length
                        ? "text-white bg-[#ec3342]"
                        : "bg-[#F3F3F5] text-[#797F8C]"
                        } inline-flex w-fit items-center justify-center font-normal text-[13px] cursor-pointer`}
                    >
                      Hamısını seç
                    </span>

                    {
                      partnersİnstallments.map((item, id) => (
                        <span
                          key={id}
                          onClick={() => {
                            setSelectedInstallments((prev) =>
                              prev.includes(item.label)
                                ? prev.filter((value) => value !== item.label)
                                : [...prev, item.label]
                            );
                          }}
                          className={`rounded-xl py-1 px-2.5 ${selectedInstallments.includes(item.label)
                            ? "text-white bg-[#ec3342]"
                            : "bg-[#F3F3F5] text-[#797F8C]"
                            } inline-flex w-10 items-center justify-center font-medium text-[13px] cursor-pointer`}
                        >
                          {item.label}
                        </span>
                      ))
                    }
                  </div>
                </div>

                <div className="flex flex-col gap-5 border-b border-[#f3f3f5] py-4">
                  <div className="flex gap-2 items-center ">
                    <img src="https://birbank.az/file/Frame_2085662748_947972af85.svg" />
                    <p className='font-normal text-[16px] text-[#222222]'>Böl-ödə, <span className='text-[#6b7280] font-medium text-[16px]'> ay</span></p>
                  </div>
                  <div className="flex items-center  w-full flex-wrap gap-2">
                    <span
                      onClick={() => {
                        if (selectedBNPL.length === partnersBNPL.length) {
                          setSelectedBNPL([]);
                        } else {
                          setSelectedBNPL(
                            partnersBNPL.map((item) => item.label)
                          );
                        }
                      }}
                      className={`rounded-xl py-1 px-2.5 ${selectedBNPL.length === partnersBNPL.length
                        ? "text-white bg-[#ec3342]"
                        : "bg-[#F3F3F5] text-[#797F8C]"
                        } inline-flex w-fit items-center justify-center font-medium text-[13px] cursor-pointer`}
                    >
                      Hamısını seç
                    </span>

                    {
                      partnersBNPL.map((item, id) => (
                        <span
                          key={id}
                          onClick={() => {
                            setSelectedBNPL((prev) =>
                              prev.includes(item.label)
                                ? prev.filter((value) => value !== item.label)
                                : [...prev, item.label]
                            );
                          }}
                          className={`rounded-xl py-1 px-2.5 ${selectedBNPL.includes(item.label)
                            ? "text-white bg-[#ec3342]"
                            : "bg-[#F3F3F5] text-[#797F8C]"
                            } inline-flex w-10 items-center justify-center font-medium text-[13px] cursor-pointer`}
                        >
                          {item.label}
                        </span>
                      ))
                    }
                  </div>
                </div>

                <div className="flex flex-col gap-5 border-b border-[#f3f3f5] py-4">
                  <div className="flex gap-2 items-center ">
                    <img src="https://birbank.az/file/Frame_2085662745_9a25432f87.svg" />
                    <p className='font-normal text-[16px] text-[#222222]'>Bonus, <span className='text-[#6b7280] font-medium text-[16px]'>%</span></p>
                  </div>
                  <div className="flex items-center  w-full flex-wrap gap-2">
                    <span
                      onClick={() => {
                        if (selectedBNPL.length === partnersBNPL.length) {
                          setSelectedCashbackes([]);
                        } else {
                          setSelectedCashbackes(
                            partnersBNPL.map((item) => item.label)
                          );
                        }
                      }}
                      className={`rounded-xl py-1 px-2.5 ${selectedCashbackes.length === partnersCashbackes.length
                        ? "text-white bg-[#ec3342]"
                        : "bg-[#F3F3F5] text-[#797F8C]"
                        } inline-flex w-fit items-center justify-center font-normal text-[13px] cursor-pointer`}
                    >
                      Hamısını seç
                    </span>

                    {
                      partnersCashbackes.map((item, id) => (
                        <span
                          key={id}
                          onClick={() => {
                            setSelectedCashbackes((prev) =>
                              prev.includes(item.label)
                                ? prev.filter((value) => value !== item.label)
                                : [...prev, item.label]
                            );
                          }}
                          className={`rounded-xl py-1 px-2.5 ${selectedCashbackes.includes(item.label)
                            ? "text-white bg-[#ec3342]"
                            : "bg-[#F3F3F5] text-[#797F8C]"
                            } inline-flex w-10 items-center justify-center font-normal text-[13px] cursor-pointer`}
                        >
                          {item.label}
                        </span>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full items-center justify bg-white rounded-t-2xl px-4 pt-3 pb-4 shadow-[0_-4px_10px_0_rgba(0,0,0,0.102)]">
                <span onClick={() => setResponsiveFilter(false)} className='flex items-center justify-center w-full px-4 py-3 rounded-xl bg-[#ef3342] text-[15px] font-medium text-white cursor-pointer '>Bağla</span>
                <span onClick={() => { setSelectedInstallments([]); setSelectedBNPL([]); setSelectedCashbackes([]) }} className='flex items-center justify-center w-full px-4 py-3 rounded-xl bg-[#F3F3F5] text-[15px] font-medium text-[#6b7280] cursor-pointer transition duration-200 hover:bg-[#6B7280] hover:text-white'>Sıfırla</span>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PartnersContent
