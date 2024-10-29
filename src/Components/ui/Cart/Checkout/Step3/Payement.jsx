import React, { useState } from 'react'
import atmcard from '../../../../../assets/Images/Image 65.png'
import { useNavigate } from 'react-router-dom'
function Payement() {
    const[tab,setTab]=useState(0)
  const handleTab=(curtab)=>{
     setTab(curtab)
  }
  const navigate=useNavigate()

  return (
    <div className='flex flex-col gap-[48px] w-full sm:basis-full lg:basis-1/2'>
    <div className='flex flex-col gap-[40px]'>
         <div className='flex flex-col gap-[24px]'>
             <p className='text-[20px] font-[700] leading-[16px] tracking-[0.6px]'>Payment</p>
             <div className='flex gap-[56px] text-[14px] font-[500] leading-[16px] tracking-[0.42px]'>
                <p onClick={()=> handleTab(1)} className={`text-[#717171]  ${tab !== 1?' ':'border-b-[3px] border-black text-black'}`}>Credit Card</p>
                <p onClick={()=> handleTab(2)} className={`text-[#717171]  ${tab !== 2?' ':'border-b-[3px] border-black text-black'}`}>PayPal</p>
                <p onClick={()=> handleTab(3)} className={`text-[#717171]  ${tab !== 3?' ':'border-b-[3px] border-black text-black'}`}>PayPal Credit</p>
             </div>
         </div>
         <div>
             <img src={atmcard} className='w-[337px] h-[190px]'></img>
         </div>
         <div className='flex flex-col gap-[16px] '>
           <div className='flex  p-[16px] items-center rounded-[7px] border-[0.5px] border-[#9F9F9F] '>
               <input type='text' className='w-full' placeholder='Cardholder Name'></input>
            </div> 
            <div className='flex  p-[16px] items-center rounded-[7px] border-[0.5px] border-[#9F9F9F]   '>
               <input type='text' className='w-full' placeholder='Card Number'></input>
            </div> 
            <div className='flex gap-[16px] '>
                 <div className='flex  p-[16px] items-center rounded-[7px] border-[0.5px] border-[#9F9F9F] w-1/2'>
                     <input type='text'  className='w-full' placeholder='Card Number'></input>
                 </div> 
                 <div className='flex  p-[16px] items-center rounded-[7px] border-[0.5px] border-[#9F9F9F] w-1/2'>
                     <input type='text'  className='w-full' placeholder='Card Number'></input>
                 </div> 
             </div>   
         </div>
    </div>
    <div className='flex gap-[8px]'>
       <input type='checkbox'/>
       <p className='text-[15px] font-[500] leading-[24px] '>Same as billing address</p>
    </div>
    <div className='flex gap-[23px] w-full'>
        <button className='w-1/2 py-[24px]  flex items-center justify-center text-[16px] font-[500] leading-[16px] border-[1px] border-black rounded-[6px]' onClick={()=>navigate('step2')}>Back</button>
        <button className='w-1/2  py-[24px] flex items-center justify-center text-[16px] font-[500] leading-[16px] border-[1px] border-black bg-black text-white rounded-[6px]'>Pay</button>

    </div>
 </div>
  )
}

export default Payement