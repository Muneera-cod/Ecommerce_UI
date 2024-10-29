import React from 'react'
import Info from './Info'
import SocialIcon from './SocialIcon'
function Footer() {
  return (
    <div className='flex flex-col sm:px-[20px] md:px-[40px]  xl:px-[160px] sm:py-[50px] lg:py-[104px] gap-[32px] bg-black text-white'>
        <Info></Info>
        <SocialIcon/>
    </div>
  )
}

export default Footer