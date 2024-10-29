import React from 'react'
import { IconBrandInstagram ,IconBrandFacebookFilled,IconBrandTiktokFilled,IconBrandTwitterFilled} from '@tabler/icons-react'

function SocialIcon() {
  return (
    <div className='flex sm:justify-center lg:justify-start gap-[24px] text-white'>
        <IconBrandTwitterFilled/>
        <IconBrandFacebookFilled/>
        <IconBrandTiktokFilled/>
        <IconBrandInstagram/>
    </div>
  )
}

export default SocialIcon