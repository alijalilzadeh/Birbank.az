import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import Footer from './Footer'
import PartnersContent from './PartnersContent'
const Partners = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden '>
      <Navbar />
      <SecondaryNavbar />
      <PartnersContent />
       <Footer /> 
    </div>
  )
}

export default Partners
