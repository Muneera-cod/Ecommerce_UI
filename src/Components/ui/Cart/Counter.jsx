import React, { useState } from 'react'
import {IconMinus,IconPlus} from '@tabler/icons-react'
function Counter() {
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div className='flex gap-[8px] items-center '>
        <div className='w-[24px] h-[24px] ' onClick={()=>decrement()}>
            <IconMinus/>
        </div>
        <div className=' flex px-[16px] border-[0.5px] border-[#D9D9D9] rounded-[4px] py-[8px] w-[24px] h-[24px] items-center justify-center '>
             {count}
        </div>
        <div className='w-[24px] h-[24px] ' onClick={()=>increment()}>
           <IconPlus/>
        </div>

    </div>
  )
}

export default Counter