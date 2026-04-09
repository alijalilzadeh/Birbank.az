import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import DesignedLinks from './DesignedLinks'
import DownloadApp from './DownloadApp'
import CalculateBenefit from './CalculateBenefit'

const Home = () => {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <DesignedLinks />
      <DownloadApp />
      <CalculateBenefit />
    </>
  )
}

export default Home
