import React from 'react'

function ButtonBanner() {
  return (
    <div className='bannerBottomBg flex flex-col items-center justify-center gap-[40px] min-h-[448px]'>
        {/* <img src={AirPod} width={'100px'} className='absolute left-0 bottom-100 transform -rotate-45 '></img>
        <img src={camera} width={'100px'} className='absolute bottom-100 right-0  transform -rotate-45 '></img>
        <img src={smartwatch} width={'100px'} className='absolute bottom-100 right-10  transform -rotate-180 '></img> */}

        <div className='flex flex-col w-full  items-center justify-center text-center'>
            <p className='text-white text-[72px] font-[100] leading-[72px] '>Big Summer <span className='font-[700] sm:block lg:inline text-center'>Sale</span></p>
           <p className='text-[#787878] text-[16px] font-[400] leading-[32px]'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        </div>
        <button className='text-white border-2 border-white px-[56px] py-[16px] items-center justify-center rounded-[6px]'>Shop Now</button>
    </div>
  )
}

export default ButtonBanner