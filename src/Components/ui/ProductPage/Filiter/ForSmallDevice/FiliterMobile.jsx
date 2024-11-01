import React ,{ useState }from 'react'
import {IconChevronDown,IconChevronUp,IconChevronLeft } from '@tabler/icons-react'
import PriceToggle from '../TogglesFiliter/PriceToggle'
import BrandToggle from '../TogglesFiliter/BrandToggle'
import BuildInToggle from '../TogglesFiliter/BuildInToggle'
function FiliterMobile(props) {
        const[toggle,setToggle]=useState('')
        const handleToggle=(str)=>{
          toggle === str ? setToggle(''):setToggle(str) 
        }
  return (
    <div className='lg:hidden flex flex-col px-[20px] min-w-screen min-h-screen bg-white absolute top-[69.6px] left-0 right-0'>
        <div className='flex py-[31px] gap-[16px] items-center '>
          <IconChevronLeft onClick={()=>props.setFilter(false)}/>
           <p className='text-[24px] font-[500] leading-[32px] tracking-[.015em]'>Filters</p>
        </div>
        <div className='sm:flex lg:hidden flex-col  gap-[24px] '>  
            <div className='flex flex-col gap-[24px] '>
                    <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[232px]'  onClick={()=>handleToggle('price')}>
                        <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Price</p>
                        { toggle === 'price'? <IconChevronDown/>:
                        <IconChevronUp/> } 
                    </div>
                    <PriceToggle toggle={toggle}/>
            </div>  
            <div className='flex flex-col  gap-[24px]' >
                    <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[232px]' onClick={()=>handleToggle('brand')}>
                        <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Brand</p>
                        { toggle === 'brand'? <IconChevronDown/>:
                                <IconChevronUp/> } 
                    </div>
                    <BrandToggle toggle={ toggle }/>

            </div> 
            <div className='flex flex-col  gap-[24px]'>
                    <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[232px]' onClick={()=>handleToggle('build in memory')}>
                        <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Built-in memory</p>
                        { toggle === 'build in memory'? <IconChevronDown/>:
                                        <IconChevronUp/> }
                    </div>
                    <BuildInToggle toggle={ toggle }/>
            </div>   
            <div className='flex flex-col  gap-[24px]'>
                    <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[232px]'>
                    <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Screen type</p>
                    <IconChevronUp/>
                    </div>
            </div>  
            <div className='flex flex-col gap-[24px]'>
                    <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[232px]'>
                    <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Screen diagonal</p>
                    <IconChevronUp/>
                    </div>
            </div>  
            <div className='flex flex-col  gap-[24px]'>
                    <div className='flex justify-between py-[12px] border-b-[0.5px] border-[#B5B5B5] h-fit min-w-[232px]'>
                    <p className='text-[18px] font-[500] leading-[24px] tracking-[.03375em]'>Protection class</p>
                    <IconChevronUp/>
                    </div>
            </div>  
              
        </div>     
    </div>
  )
}

export default FiliterMobile