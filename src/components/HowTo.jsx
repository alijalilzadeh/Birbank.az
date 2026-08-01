import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import HowToPage from './HowToPage'
import Footer from './Footer'

const HowTo = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar />
      <HowToPage />
      <Footer />
    </div>
  )
}

export default HowTo
