import React from 'react'
import Cards from './Cards'

function RelatedProducts() {
  return (
    <div className='flex flex-col sm:px-[20px] md:px-[40px]  xl:px-[160px]  sm:py-[40px] lg:py-[80px] gap-[32px]  w-full'>
        <p className='text-[24px] font-[500] leading-[32px]'>Related Products</p>
        <div className='grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-[16px]  w-full place-content-center  w-full'>
          <Cards/>
        </div>
    </div>
  )
}

export default RelatedProducts