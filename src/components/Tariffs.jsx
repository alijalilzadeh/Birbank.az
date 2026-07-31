import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import Footer from './Footer'
import TariffsContent from './TariffsContent'

const Tariffs = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar/>
      <SecondaryNavbar/>
      <TariffsContent/>
       <Footer/> 
    </div>
  )
}

export default Tariffs
