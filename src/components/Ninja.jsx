import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import Footer from './Footer'
import NinjaComponents from './NinjaComponents'
const Ninja = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar />
      <NinjaComponents />
      <Footer />
    </div>
  )
}

export default Ninja
