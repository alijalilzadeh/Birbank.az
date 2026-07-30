import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import expiredCampaign from '../APIDatas/expiredCampaign.json'
import activeCampaign from '../APIDatas/activeCampaigns.json'
import partnerData from '../APIDatas/partnersData.json'
import { FaCalendarAlt } from "react-icons/fa";
const CampaignsContent = () => {
  const [dateStatus, setDateStatus] = useState(true)
  const campaignsGroup = dateStatus ? activeCampaign.pageProps.initialState.campaigns.campaignsGroup : expiredCampaign.pageProps.initialState.campaigns.campaignsGroup
  const campaignsData = dateStatus ? activeCampaign.pageProps.initialState.campaigns.campaignsData : expiredCampaign.pageProps.initialState.campaigns.campaignsData
  const [campaignType, setCampaignType] = useState(null)
  const [filterOrder, setFilterOrder] = useState(null)

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full selection:bg-[#B3D4FC]">
        <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[95%] lg:w-[75%] h-full gap-6">
          <div className="flex flex-col w-full h-full">
            <h2 className='text-[24px] font-bold text-[#25282b] '>Ən yeni kampaniyalar</h2>
            <div className="flex gap-2 my-3">
              <Link className='text-[14px] p-3.75 text-[#6D7478]' to="/" reloadDocument>Ana Səhifə</Link>
              <Link className=' text-[#25282b] text-[14px] p-3.75 pl-0' to="/ninja">Kampaniyalar</Link>
            </div>
          </div>
          <div className="flex flex-col  overflow-x-auto gap-4  sm:flex-col md:flex-row sm:gap-5 sm:overflow-x-auto md:gap-5 lg:gap-0 lg:overflow-x-hidden  items-center justify-between w-full">
            <div className="flex items-center  self-start text-center  sm:self-start md:self-center lg:self-center justify-center rounded-md bg-[#e7e8ea] ">
              {

                campaignsGroup.map((item, id) => (
                  <span key={id} onClick={() => {
                    if (campaignType === item.attributes.name) {
                      setCampaignType(null);
                      setFilterOrder(null);
                    } else {
                      setCampaignType(item.attributes.name);
                      setFilterOrder(item.attributes.order);
                    }
                  }}  className={`px-5 py-2.5 font-bold text-[14px] ${campaignType === item.attributes.name ? "bg-[#52575c] text-white" : "text-[#25282b] bg-[#e7e8ea] hover:bg-[#CACCD0] "} rounded-md cursor-pointer transition duration-300 `}>
                    {item.attributes.name}
                  </span>
                ))
              }

            </div>
            <div className={`inline-flex items-center w-18 self-start sm:self-start md:self-center lg:self-center justify-between rounded-2xl  p-0.75  gap-2 cursor-pointer ${dateStatus ? " bg-[#BC0C19]" : "bg-[#A0A4A8]"}`}>
              <span onClick={() => setDateStatus(!dateStatus)} className={`rounded-full w-5 h-5 bg-white transform transition duration-300 ${dateStatus ? "translate-x-11 bg-[#BC0C19]" : "translate-0"}`}></span>
              <span className={`font-normal text-[12px] text-white pr-1 transform transition duration-300 ${dateStatus ? "-translate-x-7" : "translate-0"}`}>{dateStatus ? "Aktiv" : "Bitmiş"}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mb-30">
            {
              [...campaignsData]
                .sort((a, b) =>
                  new Date(b.attributes.endDate) - new Date(a.attributes.endDate)
                ).filter((item) => filterOrder === null ? item : item.attributes.order === filterOrder)
                .map((item, id) => (
                  <div key={id} className="w-full max-w-90 p-4 bg-[#F9F9FA] flex flex-col gap-3 cursor-pointer">
                    <img src={item.attributes.image.data.attributes.url} className='w-full h-auto object-cover rounded-lg' />
                    <h2 className='text-[16px] font-bold text-[#1b1c1d] align-start'>{item.attributes.title}</h2>
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className='text-[#25282b] w-3' />
                      <span className='font-medium text-[14px] text-[#25282b]'>{item.attributes.endDate.split("T")[0]}</span>
                    </div>
                  </div>

                ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CampaignsContent
