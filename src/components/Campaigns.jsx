import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import CampaignsContent from './CampaignsContent'
import Footer from './Footer'

const Campaigns = () => {
  return (
    <div className='w-full min-h-sreen overflow-x-hidden'>
      <Navbar/>
      <SecondaryNavbar/>
      <CampaignsContent/>
      <Footer />
    </div>
  )
}

export default Campaigns
