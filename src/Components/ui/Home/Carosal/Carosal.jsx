import React from 'react'
import {IconChevronLeft ,IconChevronRight} from '@tabler/icons-react'
import { carosalData } from './Data'
import { useNavigate } from 'react-router-dom'

function Carosal(props) {

console.log(props.home)
const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center sm:px-[20px] md:px-[40px]  xl:px-[160px] py-[80px] gap-[32px] bg-[#FAFAFA] '>
        <div className='flex items-center justify-between w-full'>
            <p className='sm:text-[18px] md:text-[24px] font-[500] leading-[32px] tracking-[.015em]'>Browse By Category</p>
            <div className='flex'>
                <IconChevronLeft className='sm:w-[20px] md:w-[30px] sm:h-[20px] md:h-[30px]'/><IconChevronRight className='sm:w-[20px] md:w-[30px] sm:h-[20px] md:h-[30px]'/> 
            </div>
        </div>
        <div className=' w-full grid sm:grid-cols-2 xl:grid-cols-5  sm:gap-[16px] md:gap-[32px]'>
           {carosalData.map((x)=>{
            return(
           <div  key={x.id} className='flex flex-col items-center  gap-[8px]  bg-secondaryClr rounded-[15px]' 
           onClick={()=>{
            navigate(x.link) ;
            // navigate('productPage')
            props.setHome(x.usestateValue);
            }}>
            <div className='md:px-[52px] py-[24px]'>{x.icon}</div>
             <p className='sm:text-[14px] md:text-[16px] font-[500] leading-[24px]  pb-[24px]'>{x.title}</p>
           </div>)})}
        </div>
    </div>
  )
}

export default Carosal