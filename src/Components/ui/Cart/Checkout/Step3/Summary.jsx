import React from 'react'
import IphoneDeepPurple from '../../../../../assets/Images/Iphone 14 pro.png'
import smartwatch from '../../../../../assets/Images/image 12.png'
import Headphone from '../../../../../assets/Images/Headphone.png'
function Summary() {
    const data=[
        {
            id:1,
            img: IphoneDeepPurple,
            product:'Apple iPhone 14 Pro Max 128Gb',
            price:'$1399'
        },
        {
            id:2,
            img: smartwatch,
            product:'Apple Watch Series 9 GPS 41mm',
            price:'$399'
        },
        {
            id:3,
            img: Headphone,
            product:'AirPods Max Silver',
            price:'$549'
        }
    ]
  return (
    <div className=' sm:hidden lg:flex flex-col gap-[24px] basis-1/2 border-[1px] border-[#EBEBEB] py-[32px] px-[24px] flex-1'>
           <p className='text-[20px] font-[500] leading-[16px] tracking-[0.6px]'>Summary</p>
           {data.map((item)=>{return(
           <div key={item.id} className='flex items-center rounded-[13px] bg-[#F6F6F6] py-[16px] pl-[16px] gap-[16px] w-full'>
               <div className='flex gap-[16px] flex-1 items-center'>
                    <img src={item.img} className='w-[40px] h-[40px]'></img>
                    <p className='text-[16px] font-[500] leading-[24px]'>{item.product}</p>
               </div>
               <p className='text-[16px] font-[700] leading-[24px] pr-[24px]'>{item.price}</p>
           </div>
        )})}
           <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[16px]'>
                    <div className='flex flex-col gap-[8px]'>
                         <p className='text-[#545454] text-[14px] font-[500] leading-[16px]'>Address</p>
                         <p className='py-[12px] text-black text-[16px] font-[400] leading-[24px]'>1131 Dusty Townline, Jacksonville, TX 40322</p>
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                         <p className='text-[#545454] text-[14px] font-[500] leading-[16px]'>Shipment method</p>
                         <p className=' text-black text-[16px] font-[400] leading-[24px]'>Free</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[16px]'>
                    <div className='flex'>
                        <p className='text-[16px] font-[500] leading-[24px] tracking-[0.48px] flex-1'>Subtotal</p>
                        <p className='text-[16px] font-[500] leading-[32px] tracking-[0.48px]'>$2347</p>
                    </div>
                    <div className='flex flex-col  gap-[8px]'>
                    <div className='flex'>
                        <p className='text-[#545454] text-[16px] font-[500] leading-[24px] tracking-[0.48px] flex-1'>Estimated Tax</p>
                        <p className='text-[16px] font-[500] leading-[32px] tracking-[0.48px]'>$50</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[#545454] text-[16px] font-[500] leading-[24px] tracking-[0.48px] flex-1'>Estimated shipping & Handling</p>
                        <p className='text-[16px] font-[500] leading-[32px] tracking-[0.48px]'>$29</p>
                    </div>
                    </div>
                    <div className='flex'>
                        <p className='text-[16px] font-[500] leading-[24px] tracking-[0.48px] flex-1'>Total</p>
                        <p className='text-[16px] font-[500] leading-[32px] tracking-[0.48px]'>$2426</p>
                    </div>
                </div>
           </div>
        </div>
  )
}

export default Summary