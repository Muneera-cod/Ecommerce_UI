import React,{ useEffect } from 'react'
import Top from '../Top'
import Content from './Content'
function StepThree() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className='flex flex-col sm:px-[20px] md:px-[40px]  xl:px-[160px]'>
        <Top/>
        <Content/>
    </div>
  )
}

export default StepThree