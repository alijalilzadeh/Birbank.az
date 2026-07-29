import React from 'react'
import Navbar from './Navbar'
import SecondaryNavbar from './SecondaryNavbar'
import CardsBlock from './CardsBlock'
import Footer from './Footer'

const Cards = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
     <Navbar />
     <SecondaryNavbar />
     <CardsBlock />
     <Footer />
    </div>
  )
}

export default Cards
