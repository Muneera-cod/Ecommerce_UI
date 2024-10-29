import React from 'react'

import Payement from './Payement'
import Summary from './Summary'

function Content() {
   
  return (
    <div className='flex pt-[24px] pb-[72px] gap-[96px]'>
       
          <Summary/>
          
          <Payement/>
    </div>
  )
}

export default Content