import React from 'react'
import { IconStarFilled } from '@tabler/icons-react'
import { Progress } from '@mantine/core';
import '@mantine/core/styles.css';
import CommentSection from './CommentSection';
function Reviews() {
  return (
    <div className='flex flex-col sm:px-[20px] md:px-[40px]  xl:px-[160px]  sm:py-[40px] lg:py-[88px] gap-[32px]'>
       <div className='flex flex-col  gap-[48px]'>
          <p className='text-[24px] font-[500] leading-[32px]'>Reviews</p>
          <div className='flex  sm:flex-col md:flex-row gap-[60px]  items-center content-center self-stretch min-w-full '>
              <div className='flex sm:flex-row lg:flex-col  items-center  justify-center gap-[16px] p-[32px] bg-[#FAFAFA] sm:w-full lg:w-fit'>
                 <div className='flex flex-col gap-[16px] '>
                     <p className='text-[56px] font-[500] leading-[56px] text-center'>4.8</p>
                     <p className='text-[15px] font-[500] leading-[16px] text-center opacity-30'>of 125 reviews</p>
                 </div>
                 <div className='flex items-center justify-between self-stretch'>
                     <IconStarFilled color='#FFB547'/>
                     <IconStarFilled color='#FFB547'/>
                     <IconStarFilled color='#FFB547'/>
                     <IconStarFilled color='#FFB547'/>
                     <IconStarFilled color='#6C6C6C'/>
                 </div>
              </div>
              <div className='flex flex-col gap-[24px] sm:w-full md:w-full'>
                  <div className='flex gap-[16px] items-center w-full'>
                     <p className='text-[18px] font-[500] leading-[16px] w-[150px]'>Excellent</p>
                     <Progress color="#FFB547" radius="xl" size="sm" value={100} className='w-full  lg:h-[5px]' /> 
                  </div>
                  <div className='flex gap-[16px] items-center' >
                     <p className='text-[18px] font-[500] leading-[16px] w-[150px]'>Good</p>
                     <Progress color="#FFB547" radius="xl" size="sm" value={80} className='w-full  lg:h-[5px]' /> 
                  </div>
                  <div className='flex gap-[16px] items-center'>
                     <p className='text-[18px] font-[500] leading-[16px] w-[150px]'>Average</p>
                     <Progress color="#FFB547" radius="xl" size="sm" value={60} className='w-full  lg:h-[5px]' /> 
                  </div>
                  <div className='flex gap-[16px] items-center'>
                     <p className='text-[18px] font-[500] leading-[16px] w-[150px]'>Below Average</p>
                     <Progress color="#FFB547" radius="xl" size="sm" value={20} className='w-full  lg:h-[5px]' /> 
                  </div>
                  <div className='flex gap-[16px] items-center'>
                     <p className='text-[18px] font-[500] leading-[16px] w-[150px]'>Poor</p>
                     <Progress color="#FFB547" radius="xl" size="sm" value={10} className='w-full  lg:h-[5px]' /> 
                  </div>
              </div>
              
          </div>
          <input type='text' className='flex items-center self-stretch rounded-[7px] border-[0.5px] border-[#CECECE] px-[16px] py-[24px] w-full ' placeholder='Leave a comment'>
                  
          </input>
       </div>
       <CommentSection/>
    </div>
  )
}

export default Reviews