import React from 'react'
import {IconDeviceTabletFilled,IconCpu,IconCpu2,IconCameraFilled,IconCameraRotate,IconBatteryVertical3,IconTruckDelivery ,IconBuildingStore,IconRosetteDiscountCheck} from '@tabler/icons-react'
import iphone14promaxDeepPurple from '../../../../assets/Images/Iphone 14 pro.png'
import frontImg from '../../../../assets/Images/image 61.png'
import backImg from '../../../../assets/Images/image 62.png'
import sideImg from '../../../../assets/Images/image 63.png'
import { useNavigate } from 'react-router-dom'
function ProductPart() {
   const navigate=useNavigate()
  return (
    <div className='flex sm:flex-col lg:flex-row sm:px-[20px] md:px-[40px]  xl:px-[160px]  sm:gap-[37px] lg:gap-[48px] sm:py-[37px] lg:py-[112px] '>
          <div className='basis-1/2 flex sm:flex-col-reverse lg:flex-row sm:gap-[30.63px] lg:gap-[48px]  items-center'>
            <div className='flex sm:flex-row lg:flex-col sm:gap-[15.31px] lg:gap-[24px]'>
                <img src={iphone14promaxDeepPurple} width={'74.882px'} height={'93px'}  className='object-contain sm:max-h-[66.34px] md:max-h-[93px]'></img>
                <img src={frontImg} width={'74.882px'} height={'93px'}  className='object-contain max-w-[74.882px] sm:max-h-[66.34px] md:max-h-[93px]'></img>
                <img src={backImg} width={'74.882px'} height={'93px'}  className='object-contain max-w-[74.882px] sm:max-h-[66.34px] md:max-h-[93px]' ></img>
                <img src={sideImg} width={'74.882px'} height={'93px'}  className='object-contain max-w-[74.882px] sm:max-h-[66.34px] md:max-h-[93px]'></img>
             </div>
             <img src={iphone14promaxDeepPurple} width={'413.118px'} height={'516px'} className='object-contain '></img>  
          </div>
          <div className='basis-1/2 flex flex-col gap-[32px]'>
              <div className='flex flex-col gap-[16px] self-stretch '>
                  <div className='flex flex-col gap-[24px] self-stretch'>
                    <p className=' text-[40px] font-[700] leading-[40px]'>Apple iPhone 14 Pro Max</p>
                    <div className='flex items-center gap-[16px] self-stretch'>
                       <p className='text-[32px] font-[500] leading-[40px] tracking-[0.96px]'>$1399</p>
                       <p className='text-[#A0A0A0] text-[24px] font-[400] leading-[32px] tracking-[0.72px] line-through'>$1499</p>
                     </div>
                  </div>
                  <div className='flex flex-col gap-[24px] self-stretch'>
                      <div className='flex items-center  gap-[24px] self-stretch'>
                         <p className=' sm:text-[15px] md:text-[24px] font-[400] leading-[24px]'>Select color :</p>
                         <div className='flex gap-[8px] items-center self-stretch'>
                            <div className='w-[32px] h-[32px] bg-black rounded-full'></div>
                            <div className='w-[32px] h-[32px] bg-[#781DBC] rounded-full'></div>
                            <div className='w-[32px] h-[32px] bg-[#E10000] rounded-full'></div>
                            <div className='w-[32px] h-[32px] bg-[#E1B000] rounded-full'></div>
                            <div className='w-[32px] h-[32px] bg-[#E8E8E8] rounded-full'></div>
                         </div>
                      </div>
                      <div className='flex  items-center  sm:gap-[8px] md:gap-[16px]  flex-wrap self-stretch'>
                           <div className='px-[24px] py-[16px] items-center justify-center text-[#D5D5D5] text-[14px] font-[500] leading-[16px] border-[1px] border-[#D5D5D5] rounded-[8px]'>128GB</div>
                           <div className='px-[24px] py-[16px] items-center justify-center text-[#D5D5D5] text-[14px] font-[500] leading-[16px] border-[1px] border-[#D5D5D5] rounded-[8px]'>256GB</div>
                           <div className='px-[24px] py-[16px] items-center justify-center text-[#D5D5D5] text-[14px] font-[500] leading-[16px] border-[1px] border-[#D5D5D5] rounded-[8px]'>512GB</div>
                           <div className='px-[24px] py-[16px] items-center justify-center text-[#D5D5D5] text-[14px] font-[500] leading-[16px] border-[1px] border-[#D5D5D5] rounded-[8px]'>1TB</div>
                      </div>
                      <div className='grid sm:grid-cols-2 lg:grid-cols-3  sm:gap-[8px] md:gap-[16px]  '>
                          <div className='min-w-[160px] flex px-[8px] py-[16px] gap-[8px] items-center bg-[#F4F4F4] rounded-[7px]'>
                             <IconDeviceTabletFilled className='text-[#4E4E4E]'/>
                             <p className='text-[#A7A7A7] text-[14px] font-[400] leading-[16px]  '>Screen size<span className='text-[#4E4E4E] font-[500] block'>6.7"</span></p>
                          </div>
                          <div className='min-w-[160px] flex px-[8px] py-[16px] gap-[8px] items-center bg-[#F4F4F4] rounded-[7px] '>
                             <IconCpu className='text-[#4E4E4E]'/>
                             <p className='text-[#A7A7A7] text-[14px] font-[400] leading-[16px] '>CPU<span className='text-[#4E4E4E] font-[500] block'>Apple A16 Bionic</span></p>
                          </div>
                          <div className='min-w-[160px] flex px-[8px] py-[16px] gap-[8px] items-center bg-[#F4F4F4] rounded-[7px]'>
                             <IconCpu2 className='text-[#4E4E4E]'/>
                             <p className='text-[#A7A7A7] text-[14px] font-[400] leading-[16px]  '>Number of Cores<span className='text-[#4E4E4E] font-[500] block'>6</span></p>
                          </div>
                          <div className='min-w-[160px] flex px-[8px] py-[16px] gap-[8px] items-center bg-[#F4F4F4] rounded-[7px] '>
                             <IconCameraFilled className='text-[#4E4E4E]'/>
                             <p className='text-[#A7A7A7] text-[14px] font-[400] leading-[16px] '>Main camera<span className='text-[#4E4E4E] font-[500] block'>48-12 -12 MP</span></p>
                          </div>
                          <div className='min-w-[160px] flex px-[8px] py-[16px] gap-[8px] items-center bg-[#F4F4F4] rounded-[7px] '>
                             <IconCameraRotate className='text-[#4E4E4E]'/>
                             <p className='text-[#A7A7A7] text-[14px] font-[400] leading-[16px] '>Front-camera<span className='text-[#4E4E4E] font-[500] block'>12 MP</span></p>
                          </div>
                          <div className='min-w-[160px] flex px-[8px] py-[16px] gap-[8px] items-center bg-[#F4F4F4] rounded-[7px] '>
                             <IconBatteryVertical3 className='text-[#4E4E4E]'/>
                             <p className='text-[#A7A7A7] text-[14px] font-[400] leading-[16px] '>Battery capacity<span className='text-[#4E4E4E] font-[500] block'>4323 mAh</span></p>
                          </div>
                      </div>
                      <p className='text-[#6C6C6C] text-[14px] font-[400] leading-[24px]  tracking-[0.42px] text-justify'>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright 
                        lightusing the new systemwith two cameras <a className='underline text-[#2C2C2C]'>more...</a></p>
                  </div>
              </div>
               <div className='flex sm:flex-col md:flex-row gap-[16px] '>
                 <button className='flex  items-center justify-center md:w-1/2 h-full px-[50px] py-[16px] text-black text-[16px] font-[500] leading-[24px] border-[1px] border-black  rounded-[6px] bg-white'>Add to Wishlist</button> 
                 <button onClick={()=>navigate('cart')} className='flex  items-center justify-center md:w-1/2 h-full px-[56px] py-[16px] text-white text-[16px] font-[400] leading-[24px] rounded-[6px] bg-black' >
                     Add to Card
                 </button>
              </div>
              <div className='flex gap-[32px] '>
                 <div className='w-1/3 h-full flex sm:flex-col md:flex-row gap-[16px] items-center justify-center'>
                   <div className=' flex p-[16px] bg-[#F6F6F6] text-[#797979] rounded-[11px] items-center justify-center'><IconTruckDelivery/></div>
                   <div className='text-[#717171] sm:text-[13px] md:text-[14px] font-[400] leading-[24px] sm:text-center md:text-left'>Free Delivery<span className='text-black font-[500] block'>1-2 day</span></div>
                 </div>
                 <div className='w-1/3 h-full flex sm:flex-col md:flex-row gap-[16px] items-center justify-center'>
                   <div className=' flex p-[16px] bg-[#F6F6F6] text-[#797979] rounded-[11px] items-center justify-center'><IconBuildingStore/></div>
                   <div className='text-[#717171] sm:text-[13px] md:text-[14px] font-[400] leading-[24px] sm:text-center md:text-left'>In Stock<span className='text-black font-[500] block'>Today</span></div>
                 </div>
                 <div className='w-1/3 h-full flex sm:flex-col md:flex-row  gap-[16px]  items-center justify-center'>
                   <div className='flex p-[16px] bg-[#F6F6F6] text-[#797979] rounded-[11px] items-center justify-center'><IconRosetteDiscountCheck/></div>
                   <div className='text-[#717171] sm:text-[13px] md:text-[14px] font-[400] leading-[24px] sm:text-center md:text-left'>Guaranteed<span className='text-black font-[500] block'>1 year</span></div>
                 </div>
              </div>
          </div>
     </div>
  )
}

export default ProductPart