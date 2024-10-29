import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderSummary() {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col sm:px-[16px] lg:px-[42px] xl:px-[64px] py-[56px] gap-[40px] rounded-[10px] border-[0.5px] border-[#EBEBEB]  basis-1/2'>
        {/* Heading */}
        <p className='text-[20px] font-[700] leading-[16px] text-[#111] '>Order Summary</p>
        {/* Contents */}
        <div className='flex flex-col  gap-[48px] self-stretch '>
            {/* Block */}
            <div className='flex flex-col gap-[24px]'>
                {/* Fields */}
                <div className='flex flex-col gap-[24px]'>
                  <div className='flex flex-col gap-[8px]'>
                      <p className='text-[14px] font-[500] leading-[16px] text-[#545454]'>Discount code / Promo code</p>
                      <div className='flex py-[16px] pl-[16px] items-center rounded-[7px] border-[0.5px] border-[#9F9F9F]'><input type='text' className='' placeholder='Code'></input></div>
                  </div>
                  <div className='flex flex-col gap-[8px]'>
                      <p className='text-[14px] font-[500] leading-[16px] text-[#545454]'>Your bonus card number</p>
                      <div className='flex  p-[16px] items-center rounded-[7px] border-[0.5px] border-[#9F9F9F]'>
                        <input type='text' className='flex-1' placeholder='Enter Card Number'></input>
                        <button className='text-[12px] font-[500] leading-[16px] p-[8px] rounded-[6px] border-[1px] border-black'>Apply</button>
                     </div>
                  </div>
                </div>
                {/* Prices */}
                <div className='flex flex-col gap-[16px]'>
                    <div className='flex'>
                        <p className='text-[16px] font-[500] leading-[24px] tracking-[0.48px] flex-1'>Subtotal</p>
                        <p className='text-[16px] font-[500] leading-[32px] tracking-[0.48px]'>$2347</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[#545454] text-[16px] font-[500] leading-[24px] tracking-[0.48px] flex-1'>Estimated Tax</p>
                        <p className='text-[16px] font-[500] leading-[32px] tracking-[0.48px]'>$50</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[#545454] text-[16px] font-[500] leading-[24px] tracking-[0.48px] flex-1'>Estimated shipping & Handling</p>
                        <p className='text-[16px] font-[500] leading-[32px] tracking-[0.48px]'>$29</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[16px] font-[500] leading-[24px] tracking-[0.48px] flex-1'>Total</p>
                        <p className='text-[16px] font-[500] leading-[32px] tracking-[0.48px]'>$2426</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>navigate('step1')} className='bg-black rounded-[6px] py-[16px] px-[56px] text-white text-[16px] font-[500] leading-[24px]'>Checkout</button>
        </div>
    </div>
  )
}

export default OrderSummary