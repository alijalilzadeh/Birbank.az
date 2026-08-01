import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import Footer from './Footer'
import SigortalarContent from './SigortalarContent'

const Sigortlara = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar/>
      <SecondaryNavbar/>
      <SigortalarContent/>
       <Footer/> 
    </div>
  )
}

export default Sigortlara
