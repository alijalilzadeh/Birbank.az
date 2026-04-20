import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import CurrencyRateSection from './CurrencyRateSection'
import Footer from './Footer'
import newsData from '../NewsData/newsData.json'

const CurrencyRates = () => {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <CurrencyRateSection />
    </>
  )
}

export default CurrencyRates
