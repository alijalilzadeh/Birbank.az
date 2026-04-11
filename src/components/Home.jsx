import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import DesignedLinks from './DesignedLinks'
import DownloadApp from './DownloadApp'
import CalculateBenefit from './CalculateBenefit'
import Footer from './Footer'
import LinkToCards from './LinkToCards'
import Credits from './Credits'
import HomeNews from './HomeNews'
import Services from './Services'

const Home = () => {
  return (
    <>
        <Navbar />
        <SecondaryNavbar />
        <DesignedLinks />
        <DownloadApp />
        <CalculateBenefit />
        <LinkToCards />
        <Credits />
        <HomeNews />
        <Services />
        <Footer />
    </>
  )
}

export default Home
