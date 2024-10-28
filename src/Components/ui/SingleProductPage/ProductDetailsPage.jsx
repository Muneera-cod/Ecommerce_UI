import React from 'react'
import {IconChevronRight} from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import ProductPart from './parts/ProductPart'
import Details from './parts/Details'

function ProductDetailsPage() {
    const navigate=useNavigate()

  return (
    <>

     {/* Top Part */}
     <div className='sm:hidden lg:flex gap-[16px] sm:px-[20px] md:px-[40px]  xl:px-[160px] py-[40px] items-center '>
            <p className='text-[16px] font-[500] leading-[16px]' onClick={()=>{
            navigate('/')
            setHome(0)
            }}
            >Home</p>
            <IconChevronRight/>
            <p className='text-[16px] font-[500] leading-[16px] '>Category</p>
            <IconChevronRight/>
            <p className='text-[16px] font-[500] leading-[16px] '>Smartphone</p>
            <IconChevronRight/>
            <p className='text-[16px] font-[500] leading-[16px] '>Apple</p>
            <IconChevronRight/>
            <p className='text-[16px] font-[500] leading-[16px] '>Iphone Pro Max</p>
     </div>

      {/* Product Part */}
     <ProductPart/>
     <Details/>
  </>
  )
}

export default ProductDetailsPage