import React from 'react'
import Topbar from './Topbar'
import Products from './Products'
import Filiter from './Filiter/Filiter'
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react'
import { createPortal } from 'react-dom'
import FiliterMobile from './Filiter/ForSmallDevice/FiliterMobile'
function ProductPage() {
  const { home, setHome } = useOutletContext();
  const [filter,setFilter] = useState(false) 
  console.log(home)
  return (
    <>
    <Topbar filter={ filter } setFilter={ setFilter }  home={ home } setHome={ setHome }/>
    <div className='flex gap-[32px] sm:px-[20px] md:px-[40px]  xl:px-[160px] pb-[56px] pt-[24px] w-full '>
       <Filiter/>
       {filter && createPortal(<FiliterMobile  filter={ filter } setFilter={ setFilter }/>,document.body)}
       <Products home={ home } setHome={ setHome }/>
    </div>
    </>
  )
}

export default ProductPage