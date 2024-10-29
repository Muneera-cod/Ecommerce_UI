import React from 'react'
import { useNavigate } from 'react-router-dom'
function Content() {
    const navigate=useNavigate()
  return (
  <div className='py-[48px] flex flex-col gap-[64px]'>
    <div className='flex flex-col gap-[32px]'>
        <p className='text-[20px] font-[600] leading-[24px]'>Shipment Method</p>
        <div className='flex flex-col gap-[16px]'>
           <div className='flex items-center justify-between p-[24px] rounded-[11px] border-[1px] border-[#D1D1D8]'>
                <div className='flex sm:flex-col md:flex-row  gap-[16px]'>
                  <input type='radio' className='w-[24px] h-[24px]'/>
                  <div className='flex gap-[16px] '>
                    <p className='text-[16px] font-[500] leading-[24px] tracking-[0.1px]'>Free</p>
                    <p className='text-[16px] font-[400] leading-[24px] '>Regulary shipment</p>
                  </div>
                </div>
                <p className='text-[16px] font-[500] leading-[24px] tracking-[0.1px]'>17 Oct, 2023</p>
           </div>
           <div className='flex items-center justify-between p-[24px] rounded-[11px] border-[1px] border-[#D1D1D8] text-[#A2A3B1]'>
               <div className='flex sm:flex-col md:flex-row gap-[16px] '>
                  <input type='radio' className='w-[24px] h-[24px]'/>
                  <div className='flex gap-[16px] '>
                    <p className='text-[16px] font-[500] leading-[24px] tracking-[0.1px]'>$8.50</p>
                    <p className='text-[16px] font-[400] leading-[24px] '>Get your delivery as soon as possible</p>
                  </div>
               </div>
                <p className='text-[16px] font-[500] leading-[24px] tracking-[0.1px]'>17 Oct, 2023</p>
           </div>
           <div className='flex items-center justify-between p-[24px] rounded-[11px] border-[1px] border-[#D1D1D8]  text-[#A2A3B1]'>
               <div className='flex sm:flex-col md:flex-row  gap-[16px]'>
                  <input type='radio' className='w-[24px] h-[24px]'/>
                  <div className='flex gap-[16px] '>
                    <p className='text-[16px] font-[500] leading-[24px] tracking-[0.1px]'>Schedule</p>
                    <p className='text-[16px] font-[400] leading-[24px] '>Pick a date when you want to get your delivery</p>
                  </div>
               </div>
                <select className='text-[16px] font-[500] leading-[24px] tracking-[0.1px]'>
                    <option value="Select Date">Select Date</option></select>
           </div>
        </div>
    </div>
    <div className='flex items-center sm:justify-between md:justify-end gap-[24px]'>
            <button className='sm:px-[50px] md:px-[70px] lg:px-[86px] py-[24px] rounded-[8px] border-[1px] border-black sm:w-1/2 md:w-1/4' onClick={()=>navigate('step1')}>Back</button>
            <button className='sm:px-[50px] md:px-[70px] lg:px-[86px] py-[24px] rounded-[8px] border-[1px] border-black  text-white bg-black sm:w-1/2 md:w-1/4' onClick={()=>navigate('step3')}>Next</button>
     </div>
</div>
  )
}

export default Content