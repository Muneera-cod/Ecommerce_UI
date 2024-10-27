import React from 'react'
import {IconChevronLeft ,IconChevronRight} from '@tabler/icons-react'
import ButtonFilter from './Filiter/ForSmallDevice/ButtonFilter'
import SelectByRating from './SelectByRating'

function Topbar(props) {
  console.log(props.filter)
  return (
    <>
    <div className='sm:hidden lg:flex gap-[16px] sm:px-[20px] md:px-[40px]  xl:px-[160px] py-[40px] items-center '>
        <p className='text-[16px] font-[500] leading-[16px] '>Home</p>
        <IconChevronRight></IconChevronRight>
        <p className='text-[16px] font-[500] leading-[16px] '>Category</p>
        <IconChevronRight/>
        <p className='text-[16px] font-[500] leading-[16px] '>Smartphone</p>
    </div>
    <div className='flex justify-between items-center lg:hidden sm:px-[20px] md:px-[40px] gap-[10px]  py-[40px]  '>
     <ButtonFilter props={props}/>
      <div className='flex items-center justify-between p-[16px] border-[0.5px] border-[#D4D4D4] rounded-[8px] sm:w-2/4 md:w-1/4'>
        <SelectByRating/>
      </div>
    </div>
    </>
  )
}

export default Topbar