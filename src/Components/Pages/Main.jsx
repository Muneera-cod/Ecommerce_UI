import React,{ useState } from 'react'
import Home from '../ui/Home/Home'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Home/Footer/Footer'
import ProductPage from '../ui/ProductPage/ProductPage'
function Main() {
  const[home,setHome]=useState(0)
  console.log(home)
  return (
    <div className='font-[Inter]'>
       <Navbar home={home} setHome={setHome}/>
      {home === 0 && <Home home={home} setHome={setHome} />}
      { home===1 && <ProductPage/>}
      <Footer/>
    </div>
    
  )
}

export default Main