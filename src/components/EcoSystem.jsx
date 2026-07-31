import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import EcoSystemContent from './EcoSystemContent'
import Footer from './Footer'

const EcoSystem = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar />
      <EcoSystemContent/>
      <Footer/>
    </div>
  )
}

export default EcoSystem
