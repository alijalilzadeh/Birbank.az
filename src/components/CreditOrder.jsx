import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import GetCreditContent from './GetCreditContent'
import Footer from './Footer'

const getCredit = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar/>
      <SecondaryNavbar />
      <GetCreditContent />
      <Footer />
    </div>
  )
}

export default getCredit;
