import React from 'react'
import { IconSearch } from '@tabler/icons-react'
function PriceToggle() {
  return (
    <div className='flex flex-col gap-[16px]'>
       <div className='flex flex-col gap-[8px]'>
          <div className='flex justify-between'>
              <p className='text-[#A7A7A7] text-[14px] font-[400] leading-[24px] -tracking-[0.07px]'>From</p>
              <p className='text-[#A7A7A7] text-[14px] font-[400] leading-[24px] -tracking-[0.07px]'>To</p>
          </div>
          
          <div className='flex justify-between'>
            <div className='py-[8px] pl-[8px] pr-[64px] rounded-[3px] border-[0.5px] border-[#9F9F9F]'>
              <p className='text-[14px] font-[400] leading-[24px] -tracking-[0.07px]'>1299</p>
              
            </div>
            <div className='flex items-center justify-center '> 
              <hr className='border-[2px] border-[#E7E7E7]  rounded-[3px] w-4 text-[#E7E7E7]'></hr>
            </div>
            <div className='py-[8px] pl-[8px] pr-[64px] rounded-[3px] border-[0.5px] border-[#9F9F9F]'>
              <p className='text-[14px] font-[400] leading-[24px] -tracking-[0.07px]'>1299</p>
              
            </div>
          </div>
        </div>
        <div className='py-[20px]  border-[0.5px] border-[#9F9F9F] '>
            
        </div>
    </div>
  )
}

export default PriceToggle