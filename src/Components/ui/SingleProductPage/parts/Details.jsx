import React from 'react'

function Details() {
  return (
    <div  className='flex items-center justify-center sm:px-[20px] md:px-[40px] xl:px-[160px] sm:gap-[37px] lg:gap-[48px] sm:py-[40px] lg:py-[80px] bg-[#FAFAFA]'>
        <div className='flex flex-col sm:px-[24px] md:px-[40px] py-[48px] gap-[32px] bg-white '>
            <div className=''>
                <p className='text-[24px] font-[500] leading-[32px]'>Details</p>
            </div>
            <div>
                <p className='text-[#9D9D9D] text-[14px] font-[500] leading-[24px] text-justify'>Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
            </div>
            <div className='flex flex-col gap-[40px]'>
                 <div className='flex flex-col gap-[16px]'>
                    <p className='text-[20px] font-[500] leading-[24px]'>Screen</p>
                    <div className='flex flex-col gap-[24px]'>
                        <div className='flex justify-between items-end pb-[8px] border-b-[0.5px] border-[#CDCDCD]'>
                            <p className='text-[16px] font-[400] leading-[24px]'>Screen diagonal</p>
                            <p className='text-[15px] font-[400] leading-[24px]'>6.7"</p>
                        </div>
                        <div className='flex justify-between items-end pb-[8px] border-b-[0.5px] border-[#CDCDCD]'>
                            <p className='text-[16px] font-[400] leading-[24px]'>The screen resolution</p>
                            <p className='text-[15px] font-[400] leading-[24px]'>2796x1290</p>
                        </div>
                        <div className='flex justify-between items-end pb-[8px] border-b-[0.5px] border-[#CDCDCD]'>
                            <p className='text-[16px] font-[400] leading-[24px]'>The screen refresh rate</p>
                            <p className='text-[15px] font-[400] leading-[24px]'>120 Hz</p>
                        </div>
                        <div className='flex justify-between items-end pb-[8px] border-b-[0.5px] border-[#CDCDCD]'>
                            <p className='text-[16px] font-[400] leading-[24px]'>The pixel density</p>
                            <p className='text-[15px] font-[400] leading-[24px]'>460 ppi</p>
                        </div>
                        <div className='flex justify-between items-end pb-[8px] border-b-[0.5px] border-[#CDCDCD]'>
                            <p className='text-[16px] font-[400] leading-[24px]'>Screen type</p>
                            <p className='text-[15px] font-[400] leading-[24px]'>OLED</p>
                        </div>
                        <div className='flex justify-between items-end pb-[8px] border-b-[0.5px] border-[#CDCDCD]'>
                            <p className='text-[16px] font-[400] leading-[24px]'>Additionally</p>
                            <p className='text-[15px] font-[400] leading-[24px]'>6.7"</p>
                        </div>
                    </div>
                 </div>
            </div>
            <div>
               <button></button>
            </div>
        </div>
    </div>
  )
}

export default Details