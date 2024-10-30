import React from 'react'
import { useLocation } from 'react-router-dom';
import { IconMapPinFilled,IconShoppingCartCheck,IconCreditCardPay } from '@tabler/icons-react'
function Top() {
    const location = useLocation();

  return (
    <div className='flex  justify-between gap-[60px] py-[72px] w-full overflow-hidden'>
        <div className={`flex gap-[8px] items-center text-[#B2B2B2]  min-w-1/2 ${(location.pathname !== '/step1')?'':'flex gap-[8px] items-center text-black min-w-1/2'}`}>
            <IconMapPinFilled className='w-[24px] h-[24px]'/>
           <p className='text-[14px] font-[500] leading-[16px] tracking-[0.57px]'>Step 1<span className=' block text-[19px] leading-[24px] tracking-[0.42px]'>Address</span></p>
        </div>
        <div className={`flex gap-[8px] items-center text-[#B2B2B2]  min-w-1/2 ${(location.pathname !== '/step2')?'':'flex gap-[8px] items-center text-black min-w-1/2'}`}>
            <IconShoppingCartCheck className='w-[24px] h-[24px]'/>
           <p className='text-[14px] font-[500] leading-[16px] tracking-[0.57px]'>Step 2<span className=' block text-[19px] leading-[24px] tracking-[0.42px]'>Shipping</span></p>
        </div>
        <div className={`flex gap-[8px] items-center text-[#B2B2B2]  min-w-1/2 ${(location.pathname !== '/step3')?'':'flex gap-[8px] items-center text-black min-w-1/2'}`}>
            <IconCreditCardPay className='w-[24px] h-[24px]' />
           <p className='text-[14px] font-[500] leading-[16px] tracking-[0.57px]'>Step 3<span className=' block text-[19px] leading-[24px] tracking-[0.42px]'>Payment</span></p>
        </div>   
    </div>
  )
}

export default Top