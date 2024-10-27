import React from 'react'
import { IconSearch } from '@tabler/icons-react'
function MobileNav() {
  return (
       <div className='lg:hidden rounded-[6px] fixed top-[78px] sm:right-[25px] md:right-[50%] sm:left-[15px] md:left-[50%] bg-white min-w-[49%] min-h-[50vh] flex flex-col justify-between  p-4 gap-[60px] '>
        <ul className='w-full'>
            <li className='rounded-[6px] px-12 py-6 hover:bg-gray-100'>Home</li>
            <li className=' rounded-[6px] px-12 py-6  hover:bg-gray-100'>About</li>
            <li className='rounded-[6px] px-12 py-6  hover:bg-gray-100'>Contact Us</li>
            <li className='rounded-[6px] px-12 py-6  hover:bg-gray-100'>Blog</li>
        </ul>
        <div className='w-full h-[56px] p-[16px] bg-[#F5F5F5]   gap-[8px] flex items-center rounded-[8px] '>
        <IconSearch color='#656565' size={15} stroke={3}/><input className='text-#656565  bg-[#F5F5F5]' placeholder='Search'></input>
       </div>
       </div>
        
  )
}

export default MobileNav