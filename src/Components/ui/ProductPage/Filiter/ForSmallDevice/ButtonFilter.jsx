import React from 'react'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'
function ButtonFilter(props) {
  return (
    <button onClick={()=>props.props.setFilter(true)} className='flex items-center justify-between p-[16px] border-[0.5px] border-[#D4D4D4] rounded-[8px] sm:w-2/4 md:w-1/4'>
    <p className='text-[15px] font-[400] leading-[16px] -tracking-[0.072px]'>Filters</p>
    <IconAdjustmentsHorizontal className='h-fit'/>
    </button>
  )
}

export default ButtonFilter

