import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import CurrencyRateSection from './CurrencyRateSection'
import Footer from './Footer'
import PulKocurmeleriPage from './PulKocurmeleriPage'
const PulKocurmeleri = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar />
      <PulKocurmeleriPage />
      <Footer />
    </div>
  )
}

export default PulKocurmeleri
