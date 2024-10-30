import React from 'react'
import macbookpro from '../../../../assets/Images/Macbook 1.png'
import playStation from '../../../../assets/Images/PlayStation.png'
import AirPod from '../../../../assets/Images/Headphone.png'
import AirPod1 from '../../../../assets/Images/AirpodApple.png'
import playStation1 from '../../../../assets/Images/PlayStation (2).png'
 import AppleVissionPro from '../../../../assets/Images/Graphite (1).png'
import AppleVissionPro1 from '../../../../assets/Images/ApplevissionPro.png'
function SmallBanner() {
  return (
    <div className='flex sm:flex-col lg:flex-row '>
        <div className='basis-1/2  flex flex-col  items-stretch'>
           <div className='flex sm:flex-col lg:flex-row sm:px-[16px] lg:px-[0] sm:py-[40px] lg:py-[0] gap-[24px] items-center justify-center items-stretch h-full w-full'>
                <div className=' basis-1/2 flex items-center items-start sm:justify-center xl:justify-start'>
                 <img src={playStation} className='sm:block xl:hidden w-[200px] h-[200px]' ></img>
                 <img src={playStation1} className='sm:hidden xl:block w-[200px] h-[200px]' ></img>

                </div>
                <div className=' basis-1/2  flex flex-col sm:items-center lg:items-start justify-center  sm:p-[24px] lg:p-[48px] gap-[16px] sm:text-center lg:text-left'>
                    <p className='sm:text-[34px] lg:text-[49px] font-[500] leading-[40px]'>Playstation 5</p>
                    <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]  line-clamp-3'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                </div>
           </div>
           <div className='flex  sm:flex-col xl:flex-row items-stretch h-full w-full'>
               <div className='flex-1 flex bg-secondaryClr sm:flex-col lg:flex-row sm:px-[16px] lg:px-[0] sm:py-[40px] lg:py-[0] gap-[24px] items-center '>
                  <div lassName=' basis-1/2 flex items-center justify-center '>
                  <img src={AirPod} className='sm:block xl:hidden max-w-[192px] h-[200px] overflow-hidden' ></img>
                  <img src={AirPod1} className='sm:hidden xl:block max-w-[192px] h-[200px] overflow-hidden' ></img>

                  </div>
                  <div className='basis-1/2 flex flex-col sm:items-center lg:items-start justify-center sm:p-[24px] lg:p-[48px] sm:text-center lg:text-left'>
                    <p className='sm:text-[34px] lg:text-[29px] font-[500] leading-[40px] '>Apple AirPods Max</p>
                    <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px] line-clamp-3'>An immersive way to experience entertainment</p>
                  </div>
               </div>
               <div className='flex-auto flex bg-[#353535] sm:flex-col lg:flex-row sm:px-[16px] lg:px-[0] sm:py-[40px] lg:py-[0] gap-[24px]  items-center '>
                  <img src={AppleVissionPro} className='sm:block xl:hidden w-[325.867px] h-[192.445px]'></img>
                  <img src={AppleVissionPro1} className='sm:hidden xl:block '></img>

                  <div className='flex flex-col sm:items-center lg:items-start justify-center sm:text-center lg:text-left sm:pl-[24px] lg:pl-[48px] sm:pr-[24px] lg:pr-[48px] items-center'>
                    <p className='sm:text-[34px] lg:text-[29px] font-[500] leading-[40px]'>Apple 
                    Vision Pro</p>
                    <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px] line-clamp-3'>An immersive way to experience entertainment</p>
                  </div>
               </div>          
             </div>
        </div>
        <div className='basis-1/2 bg-secondaryClr flex py-[44px] sm:pr-[56px] lg:pr-[0] pl-[56px] justify-between items-center sm:flex-col-reverse  lg:flex-row overflow-hidden'>
           <div className='flex flex-col  sm:items-center lg:items-start gap-[16px] grow shrink-0 basis-0 sm:text-center lg:text-left'>
             <p className='sm:text-[34px] lg:text-[64px] font-[100] leading-[56px]'>Macbook <span className='font-[500] lg:block'>Air</span></p>
             <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
             Shop Now</p>
             <button className='py-[16px] px-[56px] flex items-center justify-center border-2 border-black text-[16px] font-[500] leading-[24px]  rounded-[8px] w-fit'>Shop Now</button>
           </div>
           <img src={macbookpro}></img>
        </div>
    </div>
  )
}

export default SmallBanner