import React, { useState } from 'react'
import { IconChevronUp,IconChevronDown} from '@tabler/icons-react'
import BrandToggle from './TogglesFiliter/BrandToggle'
import BuildInToggle from './TogglesFiliter/BuildInToggle'
function Filiter() {
    const[toggle,setToggle]=useState('')
    const handleBrand=()=>{
      toggle === 'brand'?setToggle(''):setToggle('brand') 
    }
    const handleBuilInMemory=()=>{
        toggle === 'build in memory'?setToggle(''):setToggle('build in memory') 
      }
    
  return (

    <div className=' flex-col gap-[24px] sm:hidden lg:flex '>
        <div className='flex flex-col  gap-[16px]' onClick={()=>handleBrand()}>
                <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[275px]'>
                    <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Brand</p>
                    { toggle === 'brand'? <IconChevronDown/>:
                    <IconChevronUp/> }    
                </div>  
              { toggle === 'brand'?<BrandToggle/>:null}
        </div>
        <div className='flex flex-col gap-[16px]'>
                <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[275px]'>
                <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Battery capacity</p>
                <IconChevronUp/>
                </div>
        </div>  
        <div className='flex flex-col gap-[16px]'>
                <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[275px]'>
                <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Screen type</p>
                <IconChevronUp/>
                </div>
        </div>  
        <div className='flex flex-col gap-[16px]'>
                <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[275px]'>
                <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Screen diagonal</p>
                <IconChevronUp/>
                </div>
        </div>  
        <div className='flex flex-col  gap-[16px]'>
                <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[275px]'>
                <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Protection class</p>
                <IconChevronUp/>
                </div>
        </div>  
        <div className='flex flex-col gap-[16px]'>
                <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[275px]' onClick={()=>handleBuilInMemory()}>
                        <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Built-in memory</p>
                        { toggle === 'build in memory'? <IconChevronDown/>:
                                                <IconChevronUp/> }
                </div>
                { toggle === 'build in memory'?<BuildInToggle/>:null}
        </div>        
    </div>    
  )
}

export default Filiter