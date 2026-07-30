import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import Footer from './Footer'
import NewsBlock from './NewsBlock'
const News = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar />
      <NewsBlock />
      <Footer />
    </div>
  )
}

export default News
