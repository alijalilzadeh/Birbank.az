import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import DesignedLinks from './DesignedLinks'
import DownloadApp from './DownloadApp'
import CalculateBenefit from './CalculateBenefit'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <DesignedLinks />
      <DownloadApp />
      <CalculateBenefit />
      <Footer />

    </>
  )
}

export default Home
