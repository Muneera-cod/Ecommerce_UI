import React from 'react'
import { IconStarFilled,IconChevronDown } from '@tabler/icons-react'
import { userComments } from './DataCommentSection'
function CommentSection() {
  return (
    <div className='flex flex-col gap-[24px] items-center self-stretch'>
        {/* user 1 */}
        {userComments.map((x)=>{return(
        <div key={x.id} className='flex flex self-stretch gap-[19px] py-[24px] pl-[16px] pr-[28px] bg-[#FAFAFA] rounded-[10px]'>
            <img src={x.profilepic} className='w-[56px] h-[56px] rounded-[56px] flex-none'></img>
            <div className='flex flex-col gap-[8px] w-full flex-1'>
                <div className='flex justify-between  w-full '>
                    
                        <p className='text-[17px] font-[700] leading-[24px]'>{x.name}</p>
                    
                    <div className='flex items-start '>
                       <p className='text-[14px] font-[500] leading-[16px] opacity-20 '>{x.date}</p>
                    </div> 
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center self-stretch'>
                        <IconStarFilled color='#FFB547' className='w-[24px] h-[24px]'/>
                        <IconStarFilled color='#FFB547' className='w-[24px] h-[24px]'/>
                        <IconStarFilled color='#FFB547' className='w-[24px] h-[24px]'/>
                        <IconStarFilled color='#FFB547' className='w-[24px] h-[24px]'/>
                        <IconStarFilled color='#6C6C6C' className='w-[24px] h-[24px]'/>
                    </div>
                    <p className='text-[#7E7E7E] text-[15px] font-[500] leading-[24px]'>{x.comment}</p>
                </div>
                <div className='flex flex-wrap gap-[8px] w-full '>
                {x.productImg.map((y)=>{
                    return(
                      <img  key={y.id} src={y.img}></img>
                )})}
                </div>
            </div>
        </div>)})}
        
   
        <div className=' flex justify-center items-center'>
               <button className='flex justify-center items-center px-[56px] py-[12px] gap-[8px] rounded-[8px] border-[1px] border-[#545454]'>
                  <p className='text-[14px] font-[500] leading-[24px]'>View More</p>
                  <IconChevronDown/>
               </button>
        </div>
    </div>
  )
}

export default CommentSection