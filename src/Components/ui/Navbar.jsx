import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { IconSearch,IconHeart ,IconShoppingCart
,IconUser,IconMenu2} from '@tabler/icons-react'
import MobileNav from './MobileNav'
import logo from '../../assets/Images/Logo.png'
import { useNavigate } from 'react-router-dom'
function Navbar(props) {
  const navigate=useNavigate()
  const[menu,setMenu]=useState(false)
  console.log(props.home)
  return (
    <header className='sm:px-[40px]  xl:px-[160px] sm:py-[22px] lg:py-[16px] flex gap-[10px] border-[1px] border-#B5B5B5  flex items-center justify-between ' >
      <img src={logo}></img>
      <div className='w-[372px] h-[56px] p-[16px] bg-[#F5F5F5]   gap-[8px] sm:hidden lg:flex items-center rounded-[8px] '>
       <IconSearch color='#656565' size={15} stroke={3}/><input className='text-#656565  bg-[#F5F5F5]' placeholder='Search'></input>
      </div>
      <div className='sm:hidden lg:flex  gap-[52px]  font-[main] text-[16px] font-[500]'>
        <p className=' hover:opacity-20' onClick={()=>{
          navigate('/')
          props.setHome(0)
          }}>Home</p>
        <p className=' hover:opacity-20'>About</p>
        <p className=' hover:opacity-20'>Contact Us</p>
        <p className=' hover:opacity-20'>Blog</p>
      </div>
      <div className='flex gap-[24px]  sm:hidden lg:flex'>
        <IconHeart/>
        <IconShoppingCart/>
        <IconUser/>
      </div>
      <IconMenu2 className='lg:hidden' onClick={()=>{setMenu(!menu)}}/>
        {menu && createPortal(<MobileNav/>,document.body)}
    </header>
  )
}

export default Navbar