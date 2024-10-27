import React from 'react'
import CardProductPage from './CardProductPage'
import SelectByRating from './SelectByRating'
import {IconChevronLeft ,IconChevronRight} from '@tabler/icons-react'
function Products() {
 
  return (
    <div className='flex flex-col gap-[40px]  w-full'>
      <div className='flex flex-col gap-[24px] w-full'>
        <div className='flex items-center justify-between '>
           <div className='text-[#6C6C6C] text-[16px] font-[500] leading-[16px] tracking-[.48px] sm:hidden lg:block'>Selected Products: <span className='text-black text-[20px] tracking-[.06px]'>85</span></div>
           <div className='text-[#6C6C6C] text-[16px] font-[500] leading-[16px] tracking-[.48px] lg:hidden'>Products Result : <span className='text-black text-[20px] tracking-[.06px]'>85</span></div>

           <div className=' px-[16px] py-[8px] border-[0.5px] border-[#D4D4D4] rounded-[8px] sm:hidden lg:block min-w-[220px] max-w-[256px]'>
             <SelectByRating/>
           </div>
        </div>
        <div className='grid sm:grid-cols-2  xl:grid-cols-3 gap-[16px]  w-full place-content-center'>
            <CardProductPage/>
        </div>
      </div>  
      <div className='flex items-center justify-center gap-[16px]'>
         <div className='w-[24px] h-[24px] items-center justify-center rounded-[5px]'>
           <IconChevronLeft/>
         </div>
         <div className='flex w-[24px] h-[24px] items-center justify-center bg-black text-white rounded-[5px]'>
            <p>1</p>
         </div>
         <div className='flex w-[24px] h-[24px] items-center justify-center bg-cardBg rounded-[5px]'>
            <p>2</p>
         </div>........
         <div className='flex w-[24px] h-[24px] items-center justify-center bg-cardBg rounded-[5px]'>
            <p>12</p>
         </div>
         <div className='flex w-[24px] h-[24px] items-center justify-center  rounded-[5px]'>
           <IconChevronRight className='h-fit' />
         </div>
      </div>
    </div>
  )
}

export default Products