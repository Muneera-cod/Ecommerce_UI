import React, { useState } from 'react'
import Navbar from '../Navbar'
import Banner from './Banners/Banner'
import SmallBanner from './Banners/SmallBanner'
import Carosal from './Carosal/Carosal'
import Products from './Products/Products.jsx'
import Banner2 from './Banners/SecondBanners/Banner2.jsx'
import Discount from './DiscountProducts/Discount.jsx'
import ButtonBanner from './Banners/ButtonBanner.jsx'

function Home({home,setHome}) {
  
  return (
    < >
       
        <Banner/>
        <SmallBanner/>
        <Carosal home={home} setHome={setHome}/>
        <Products/>
        <Banner2/>
        <Discount/>
        <ButtonBanner/>
       
    </>
  
  )
}

export default Home