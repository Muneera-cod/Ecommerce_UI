import React from 'react'
import { IconSearch } from '@tabler/icons-react'
function BuildInToggle({ toggle }) {
  return (
    <div className={` flex flex-col gap-[16px] ${toggle === 'build in memory' ? '':'hidden flex flex-col gap-[16px]'}`}>
    <div className='w-full h-[56px] px-[16px] bg-[#F5F5F5]  gap-[8px] py-[8px] flex items-center rounded-[8px] '>
    <IconSearch color='#656565' size={15} stroke={3}/><input className='text-#656565  bg-[#F5F5F5]' placeholder='Search'></input>
    </div>
    <div className='flex flex-col gap-[8px] '>
        <div className='flex gap-[8px]  items-center'>
            <input type='checkbox' className='w-4 h-4 checkbox'></input>
            <label className='text-black text-[15px] font-[500] leading-[24px]'>16GB <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>62</span></label>
        </div>
        <div className='flex gap-[8px] items-center'>
            <input type='checkbox' className='w-4 h-4 checkbox'></input>
            <label className='text-black text-[15px] font-[500] leading-[24px]'>32GB <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>123</span></label>
        </div>
        <div className='flex gap-[8px] items-center'>
            <input type='checkbox' className='w-4 h-4 checkbox'></input>
            <label className='text-black text-[15px] font-[500] leading-[24px]'>64GB <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>68</span></label>
        </div>
        <div className='flex gap-[8px] items-center'>
            <input type='checkbox' className='w-4 h-4 checkbox'></input>
            <label className='text-black text-[15px] font-[500] leading-[24px]'>128GB <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>50</span></label>
        </div>
        <div className='flex gap-[8px] items-center'>
            <input type='checkbox' className='w-4 h-4 checkbox'></input>
            <label className='text-black text-[15px] font-[500] leading-[24px]'>256GB  <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>24</span></label>
        </div>
        <div className='flex gap-[8px] items-center'>
            <input type='checkbox' className='w-4 h-4 checkbox'></input>
            <label className='text-black text-[15px] font-[500] leading-[24px]'>512GB  <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>8</span></label>
        </div>
      
        
    </div>
</div>
  )
}

export default BuildInToggle