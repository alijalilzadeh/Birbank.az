import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import FAQContent from './FAQContent'
import Footer from './Footer'
const FAQ = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar/>
      <FAQContent/>
      <Footer/>
      
    </div>
  )
}

export default FAQ
