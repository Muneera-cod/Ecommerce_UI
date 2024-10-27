import React from 'react'
import iphon from '../../../../assets/Images/Iphone.png'
function Banner() {
  return (
    <div className='flex sm:flex-col lg:flex-row sm:px-[20px] lg:px-[80px] xl:px-[160px] sm:pt-[88px] lg:pt-[0] items-center justify-between bannerBg text-white'>
       <div className='min-w-[400px] flex flex-col gap-[24px] sm:items-center md:items-start justifiy-center sm:text-center md:text-left'>
          <p className='text-[25px] font-[600] leading-[32px] opacity-40'>Pro.Beyond.</p>
          <p className='sm:text-[72px] md:text-[84px] lg:text-[96px] font-[100] leading-[72px] tracking-[-0.06px]'>IPhone 14 <span className='font-[600] sm:block xl:inline'>Pro</span></p>
          <p className='text-[18px] font-[500] leading-[24px] text-secondaryTxt sm:px-[20px] md:px-0'>Created to change everything for the better. For everyone</p>
          <button className='py-[16px] px-[56px] flex items-center justify-between border-2 border-white text-[16px] font-[500] leading-[24px]  rounded-[8px] w-fit'>Shop now</button>
       </div>
       <div>
        <img src={iphon}></img>
       </div>
    </div>
  )
}

export default Banner