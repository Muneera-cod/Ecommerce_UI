import React, { useState } from 'react'
import CardProducts from './CardProducts'

function Products() {
  const[tab,setTab]=useState(0)
  const handleTab=(curtab)=>{
     setTab(curtab)
  }
  
console.log(tab)
  return (
    <div className=' flex flex-col sm:pl-[20px] md:px-[40px]  lg:px-[80px] xl:px-[160px] py-[56px] gap-[32px] items-center '>
        <div className='flex sm:gap-0 sm:justify-around md:justify-start md:gap-[32px] w-full  text-[#8B8B8B] '>
            <p onClick={()=> handleTab(1)} className={`sm:text-[15px] md:text-[18px] min-w-fit font-[500] leading-[32px] borderbottomGray  ${tab !== 1?' ':'sm:text-[16px] md:text-[18px] font-[500] leading-[32px] borderbottomBlack text-black'}`}>New Arrival</p>
            <p onClick={()=> handleTab(2)} className={`sm:text-[15px] md:text-[18px]  min-w-fit  font-[500] leading-[32px] borderbottomGray  ${tab !== 2?' ':'sm:text-[16px] md:text-[18px] font-[500] leading-[32px] borderbottomBlack text-black'}`}>Bestseller</p>
            <p onClick={()=> handleTab(3)} className={`sm:text-[15px] md:text-[18px]  min-w-fit  font-[500] leading-[32px] borderbottomGray  ${tab !== 3?' ':'sm:text-[16px] md:text-[18px] font-[500] leading-[32px] borderbottomBlack text-black'}`}>Featured Products</p>
        </div>
        <div className=' grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-[16px]  w-full place-content-center sm:pr-[20px] md:pr-[0]'>
           <CardProducts/>
        </div>
    </div>
  )
}

export default Products