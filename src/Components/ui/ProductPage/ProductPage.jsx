import React from 'react'
import Topbar from './Topbar'
import Products from './Products'
import Filiter from './Filiter/Filiter'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import FiliterMobile from './Filiter/ForSmallDevice/FiliterMobile'
function ProductPage() {
  const [filter,setFilter] = useState(false) 
  return (
    <>
    <Topbar filter={ filter } setFilter={ setFilter }/>
    <div className='flex gap-[32px] sm:px-[20px] md:px-[40px]  xl:px-[160px] pb-[56px] pt-[24px] w-full '>
       <Filiter/>
       {filter && createPortal(<FiliterMobile  filter={ filter } setFilter={ setFilter }/>,document.body)}
       <Products/>
    </div>
    </>
  )
}

export default ProductPage