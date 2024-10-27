import React from 'react'
import { IconSearch } from '@tabler/icons-react'
function BrandToggle() {
  return (
    <div className='flex flex-col gap-[16px]'>
                    <div className='w-full h-[56px] px-[16px] bg-[#F5F5F5]  gap-[8px] py-[8px] flex items-center rounded-[8px] '>
                    <IconSearch color='#656565' size={15} stroke={3}/><input className='text-#656565  bg-[#F5F5F5]' placeholder='Search'></input>
                    </div>
                    <div className='flex flex-col gap-[8px] '>
                        <div className='flex gap-[8px]  items-center'>
                            <input type='checkbox' className='w-4 h-4 checkbox'></input>
                            <label className='text-black text-[15px] font-[500] leading-[24px]'>Apple <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>110</span></label>
                        </div>
                        <div className='flex gap-[8px] items-center'>
                            <input type='checkbox' className='w-4 h-4 checkbox'></input>
                            <label className='text-black text-[15px] font-[500] leading-[24px]'>Samsung <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>125</span></label>
                        </div>
                        <div className='flex gap-[8px] items-center'>
                            <input type='checkbox' className='w-4 h-4 checkbox'></input>
                            <label className='text-black text-[15px] font-[500] leading-[24px]'>Xiaomi <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>68</span></label>
                        </div>
                        <div className='flex gap-[8px] items-center'>
                            <input type='checkbox' className='w-4 h-4 checkbox'></input>
                            <label className='text-black text-[15px] font-[500] leading-[24px]'>Poco <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>44</span></label>
                        </div>
                        <div className='flex gap-[8px] items-center'>
                            <input type='checkbox' className='w-4 h-4 checkbox'></input>
                            <label className='text-black text-[15px] font-[500] leading-[24px]'>OPPO <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>36</span></label>
                        </div>
                        <div className='flex gap-[8px] items-center'>
                            <input type='checkbox' className='w-4 h-4 checkbox'></input>
                            <label className='text-black text-[15px] font-[500] leading-[24px]'>Motorola <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>34</span></label>
                        </div>
                        <div className='flex gap-[8px] items-center'>
                            <input type='checkbox' className='w-4 h-4 checkbox'></input>
                            <label className='text-black text-[15px] font-[500] leading-[24px]'>Realme <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>35</span></label>
                        </div>
                        <div className='flex gap-[8px] items-center'>
                            <input type='checkbox' className='w-4 h-4 checkbox'></input>
                            <label className='text-black text-[15px] font-[500] leading-[24px]'>Nokia <span className='text-black text-[12px] font-[400] leading-[24px] text-[#929292]'>22</span></label>
                        </div>
                    </div>
                </div>
  )
}

export default BrandToggle