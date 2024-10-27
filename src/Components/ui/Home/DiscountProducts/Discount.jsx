import React from 'react'
import Product from './Product'

function Discount() {
  return (
    <div  className='flex flex-col sm:px-[20px] md:px-[40px] lg:px-[80px] xl:px-[160px] py-[56px] gap-[32px]'>
        <div>
            <p className='text-[24px] font-[500] leading-[32px]'>Discounts up to -50%</p>
        </div>
        <div className='grid sm:grid-cols-2  xl:grid-cols-4 gap-[16px]  w-full place-content-center'>
        <Product/>
        </div>
    </div>
  )
}

export default Discount