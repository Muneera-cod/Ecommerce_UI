import React,{ useState } from 'react'
import Home from '../ui/Home/Home'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Cart from './../ui/Cart/Cart'
import ProductDetailsPage from '../ui/SingleProductPage/ProductDetailsPage'
import StepOne from '../ui/Cart/Checkout/Step1/StepOne'
import StepTwo from '../ui/Cart/Checkout/Step2/StepTwo'
import StepThree from '../ui/Cart/Checkout/Step3/StepThree'
function Main() {
  const location = useLocation();
  console.log(location.pathname)
  const[home,setHome]=useState(0)
  console.log(home)
  return (
    <div className='font-[Inter]'>
       <Navbar home={home} setHome={setHome}/>
       {/* {(location.pathname === '/' || home === 0) && <Home home={home} setHome={setHome} />}
      {(location.pathname === '/productPage' || home === 1) && <Outlet context={{ home, setHome }}/>}
      {(location.pathname === '/productPage/ProductDetails' && home === 2) && <ProductDetailsPage home={home} setHome={setHome}/>} */}

      {(location.pathname === '/') && <Home home={home} setHome={setHome} />}
      {(location.pathname === '/productPage') && <Outlet context={{ home, setHome }}/>}
      {(location.pathname === '/productPage/ProductDetails') && <ProductDetailsPage home={home} setHome={setHome}/>}
      {(location.pathname === '/cart') && <Cart home={home} setHome={setHome}/>}
      {(location.pathname === '/step1') && <StepOne home={home} setHome={setHome}/>}
      {(location.pathname === '/step2') && <StepTwo home={home} setHome={setHome}/>}
      {(location.pathname === '/step3') && <StepThree home={home} setHome={setHome}/>}


      <Footer/>
    </div>
    
  )
}

export default Main