import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import GetCreditContent from './GetCreditContent'
import Footer from './Footer'

const getCredit = () => {
  return (
    <>
      <Navbar/>
      <SecondaryNavbar />
      <GetCreditContent />
      <Footer />
    </>
  )
}

export default getCredit
