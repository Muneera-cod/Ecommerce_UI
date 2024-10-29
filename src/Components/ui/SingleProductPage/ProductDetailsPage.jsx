import React from 'react'
import {IconChevronRight} from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import ProductPart from './parts/ProductPart'
import Details from './parts/Details'
import Reviews from './parts/Review/Reviews'
import CommentSection from './parts/Review/CommentSection'
import RelatedProducts from './parts/RelatedProducts/RelatedProducts'

function ProductDetailsPage({ home , setHome }) {
    const navigate=useNavigate()

  return (
    <>

     {/* Top Part */}
     <div className='sm:hidden lg:flex gap-[16px] sm:px-[20px] md:px-[40px]  xl:px-[160px] py-[40px] items-center '>
            <p className='text-[16px] font-[500] leading-[16px]' onClick={()=>{
            navigate('/')
           
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
     <Reviews/>
     <RelatedProducts/>
  </>
  )
}

export default ProductDetailsPage