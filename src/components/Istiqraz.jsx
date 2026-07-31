import React from 'react'
import Navbar from './Navbar'
import IstiqrazPage from './IstiqrazPage'
import SecondaryNavbar from './SecondaryNavbar'
import Footer from './Footer'
const Istiqraz = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar />
      <IstiqrazPage />
      <Footer />
    </div>
  )
}

export default Istiqraz
