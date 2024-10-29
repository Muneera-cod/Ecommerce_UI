import React, { useEffect, useState } from 'react'
import { IconX } from '@tabler/icons-react'
import { cartproducts } from './Data'
import Counter from './Counter'
import OrderSummary from './OrderSummary'


import { Outlet } from 'react-router-dom'
function Cart() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
    
   const[products,setProducts]=useState(cartproducts)
    const deleteCartProduct=(id)=>{
       let products= cartproducts.filter((items)=>items.id !== id)
         console.log('as')
         console.log( products)
         setProducts(products)
       
    }
   
    console.log(cartproducts)
  return (
    <><div className='flex sm:flex-col lg:flex-row sm:gap-[40px] md:gap-[48px] sm:px-[20px] md:px-[40px]  xl:px-[160px]  sm:py-[40px] md:py-[80px] lg: py-[112px]'>
         <div className='flex flex-col gap-[40px] basis-1/2'>
             <p className='text-[24px] font-[600] leading-[24px]'>Shopping Cart</p>
             {products.map((x)=>{
                return(
             <div key={x.id} className='flex pt-[16px] pb-[32px] gap-[15px] border-b-[0.5px] border-[#A3A3A3]  w-full'>
                  <div className=' flex items-center justify-center flex-none'><img src={x.img} width={'90px'} height={'90px'}></img></div>
                  <div className='flex sm:flex-col md:flex-row   w-full flex-initial'>
                      <div className='flex flex-col min-w-[106px]  max-w-[200px] gap-[8px] flex-1'>
                          <p className='text-[16px] font-[500] leading-[24px]'>{x.product}</p>
                          <p className='text-[14px] font-[400] leading-[24px]'>{x.productId}</p>
                      </div>
                      <div className='flex gap-[24px] items-center flex-1'>
                          <Counter/>
                          <p className='text-[20px] font-[500] leading-[32px] tracking-[0.6px]'>{x.price}</p>
                          <div className='w-[24px] h-[24px]' onClick={()=>deleteCartProduct(x.id)}>
                            <IconX/>
                          </div>
                      </div>
                  </div>
             </div>)})}
         </div>
         <OrderSummary/>
       
    </div>
  {/* <Outlet/> */}

    {/* {(location.pathname === '/cart/step1') && <Outlet/>} */}
     </>
  )
}

export default Cart