import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import CurrencyRateSection from './CurrencyRateSection'
import Footer from './Footer'
import BlogsContent from './BlogsContent'
const Blogs = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <SecondaryNavbar />
      <BlogsContent/>
       <Footer/> 
    </div>
  )
}

export default Blogs
