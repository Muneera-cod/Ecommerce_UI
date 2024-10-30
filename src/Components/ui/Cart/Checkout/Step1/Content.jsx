import React, { useState } from 'react'
import AddressCard from './AddressCard'
import { useNavigate } from 'react-router-dom'
function Content() {
    const navigate=useNavigate()
  return (
    <div className='py-[48px] flex flex-col gap-[64px]'>
        <div className='flex flex-col gap-[32px]'>
            <p className='text-[20px] font-[600] leading-[24px]'>Select Address</p>
            <div className='flex flex-col gap-[48px]'>
                <div className='flex flex-col gap-[24px] '>
                   <AddressCard/>
                </div>
                <div className='flex flex-col gap-[8px] items-center'>
                    <div className='w-full flex items-center  justify-center '>
                      <hr className='h-4 text-blue-200 w-1/2 mt-[10px]'></hr>
                      <div className='bg-black text-white w-[24px] h-[24px] rounded-full flex items-center justify-center'>+</div><hr></hr> 

                      <hr className='h-4 text-blue-200 w-1/2 mt-[10px]'></hr>
                    </div>
                    <p className='text-[14px] font-[600] leading-[16px] tracking-[0.1px]'>Add New Address</p>
                    {/* <hr className='outline-dashed '></hr> */}
                </div>
            </div>
        </div>
        <div className='flex items-center sm:justify-between md:justify-end gap-[24px]'>
            <button className='sm:px-[50px] md:px-[70px] lg:px-[86px] py-[24px] rounded-[8px] border-[1px] border-black sm:w-1/2 md:w-1/4' onClick={()=>navigate('cart')}>Back</button>
            <button className='sm:px-[50px] md:px-[70px] lg:px-[86px] py-[24px] rounded-[8px] border-[1px] border-black  text-white bg-black sm:w-1/2 md:w-1/4' onClick={()=>navigate('step2')}>Next</button>
        </div>
    </div>
  )
}

export default Content