import React from 'react'
// import { datas } from './Data'
import headphone from '../../../../../assets/Images/image 39.png'
import watch from '../../../../../assets/Images/image 12.png'
import Ipad from '../../../../../assets/Images/image 64.png'
import Samsung from '../../../../../assets/Images/image 41.png'
import Macbook from '../../../../../assets/Images/Macbook 1.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Banner2() {
  
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <Carousel responsive={responsive} className=' '>
       <div className='flex flex-col items-center lg:w-full px-[32px] py-[56px]  '>
             <div>
                 <img src={Ipad}></img>
             </div>
             <div className='flex flex-col items-center gap-[16px] self-stretch'>
                <p className='text-[33px] font-[300] leading-[48px]'>Popular Products</p>
                <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
             <button className=' flex px-[56px] py-[16px] gap-[8px] rounded-[6px] border-2 border-black h-fit'>Shop Now</button>
           </div>
       </div>
       <div   className='flex flex-col items-center px-[32px] py-[56px] bg-[#F9F9F9] w-full '>
            <div>
                 <img src={Ipad}></img>
             </div>
             <div className='flex flex-col items-center gap-[16px] self-stretch'>
                <p className='text-[33px] font-[300] leading-[48px]'>Ipad Pro</p>
                <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className=' flex px-[56px] py-[16px] gap-[8px] rounded-[6px] border-2 border-black h-fit'>Shop Now</button>
             </div>
       </div>
       <div className='flex flex-col items-center px-[32px] py-[56px] bg-[#EAEAEA] w-full '>
             <div>
                 <img src={Samsung}></img>
             </div>
             <div className='flex flex-col items-center gap-[16px] self-stretch'>
                <p className='text-[33px] font-[300] leading-[48px]'>Samsung Galaxy</p>
                <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className=' flex px-[56px] py-[16px] gap-[8px] rounded-[6px] border-2 border-black h-fit'>Shop Now</button>
            </div>
         </div>
         <div className='flex flex-col items-center px-[32px] py-[56px] bg-[#2C2C2C] w-full'>
             <div>
                 <img src={Macbook} height={'50%'}></img>
             </div>
             <div className='flex flex-col items-center gap-[16px] self-stretch'>
                <p className='text-[33px] font-[300] leading-[48px]'>Macbook Pro</p>
                <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className=' flex px-[56px] py-[16px] gap-[8px] rounded-[6px] border-2 border-black h-fit'>Shop Now</button>
             </div>
        </div>
</Carousel>
    // <div className='flex  flex-row items-start self-stretch overflow-hidden'>
      
    //     <div   className='flex flex-col items-center lg:w-full px-[32px] py-[56px]  min-h-[628px] '>
    //         <div>
    //             <img src={Ipad}></img>
    //         </div>
    //         <div className='flex flex-col items-center gap-[16px] self-stretch'>
    //            <p className='text-[33px] font-[300] leading-[48px]'>Popular Products</p>
    //            <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
    //            <button className=' flex px-[56px] py-[16px] gap-[8px] rounded-[6px] border-2 border-black h-fit'>Shop Now</button>
    //         </div>
    //     </div>
    //     <div   className='flex flex-col items-center px-[32px] py-[56px] bg-[#F9F9F9] w-full min-h-[628px]'>
    //         <div>
    //             <img src={Ipad}></img>
    //         </div>
    //         <div className='flex flex-col items-center gap-[16px] self-stretch'>
    //            <p className='text-[33px] font-[300] leading-[48px]'>Ipad Pro</p>
    //            <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
    //            <button className=' flex px-[56px] py-[16px] gap-[8px] rounded-[6px] border-2 border-black h-fit'>Shop Now</button>
    //         </div>
    //     </div>
    //     <div className='flex flex-col items-center px-[32px] py-[56px] bg-[#EAEAEA] w-full min-h-[627px]'>
    //         <div>
    //             <img src={Samsung}></img>
    //         </div>
    //         <div className='flex flex-col items-center gap-[16px] self-stretch'>
    //            <p className='text-[33px] font-[300] leading-[48px]'>Samsung Galaxy</p>
    //            <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
    //            <button className=' flex px-[56px] py-[16px] gap-[8px] rounded-[6px] border-2 border-black h-fit'>Shop Now</button>
    //         </div>
    //     </div>
    //     <div className='flex flex-col items-center px-[32px] py-[56px] bg-[#2C2C2C] w-full min-h-[627px]'>
    //         <div>
    //             <img src={Macbook}></img>
    //         </div>
    //         <div className='flex flex-col items-center gap-[16px] self-stretch'>
    //            <p className='text-[33px] font-[300] leading-[48px]'>Macbook Pro</p>
    //            <p className='text-secondaryTxt text-[14px] font-[500] leading-[24px]'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
    //            <button className=' flex px-[56px] py-[16px] gap-[8px] rounded-[6px] border-2 border-black h-fit'>Shop Now</button>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Banner2