import React,{ useState } from 'react'
import Home from '../ui/Home/Home'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Home/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ProductDetailsPage from '../ui/SingleProductPage/ProductDetailsPage'
function Main() {
  const[home,setHome]=useState(0)
  console.log(home)
  return (
    <div className='font-[Inter]'>
       <Navbar home={home} setHome={setHome}/>
      {home === 0 && <Home home={home} setHome={setHome} />}
      { home === 1 && <Outlet context={{ home, setHome }}/>}
      { home === 2 && <ProductDetailsPage home={home} setHome={setHome}/>}
      <Footer/>
    </div>
    
  )
}

export default Main