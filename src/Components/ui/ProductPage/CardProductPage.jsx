import React from 'react'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { useState } from 'react'
import { productsData } from './DataCards'
function CardProductPage() {
    const[like,setLike]=useState(false)
  const[color,setColor]=useState(false)
  const handleLike=(id)=>{
     setLike(id)
     setColor(!color) 
  }
  return (
    <>
    {productsData.map((x)=>{
        return(
    <div key={x.id} className='flex flex-col sm:px-[12px] lg:px-[16px] py-[24px] gap-[16px] bg-cardBg justify-between rounded-[8px]'>
      <div className='flex  justify-end w-full h-32px '>   
         <IconHeart className='text-secondaryTxt' onClick={()=>handleLike(x.id)}></IconHeart>
      </div>  
      <div className='flex w-full  justify-center'>
          <img src={x.img} width={'160px'} height={'160px'} className='object-contain '></img>
     </div>
     <div className='flex flex-col  min-w-full gap-[24px]  justify-between '>
            <div className='flex flex-col gap-[16px]   justify-between items-center '>
              <p className='text-[16px] font-[500] leading-[24px] line-clamp-2 text-center'>{x.product}</p>
              <p className='text-[24px] font-[600] leading-[24px] tracking-[0.072px]'>{x.price}</p>
            </div>
            <button className=' flex itms-center justify-center sm:px-[30px] lg:px-[64px] py-[12px] gap-[8px] rounded-[8px] bg-black text-white h-fit'>Buy Now</button>
     </div>
    </div>)
    })}
    </> 
  )
}

export default CardProductPage