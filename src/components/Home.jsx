import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import DesignedLinks from './DesignedLinks'
import DownloadApp from './DownloadApp'
import CalculateBenefit from './CalculateBenefit1'
import Footer from './Footer'
import LinkToCards from './LinkToCards'
import HomeNews from './HomeNews'
import Services from './Services'
import LayoutLink from './LayoutLink'

const Home = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
        <Navbar />
        <SecondaryNavbar />
        <DesignedLinks />
        <DownloadApp />
        <CalculateBenefit />
        <LinkToCards />
        <LayoutLink />
        <HomeNews />
        <Services />
        <Footer />
    </div>
  )
}

export default Home
