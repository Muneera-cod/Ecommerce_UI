import React ,{ useState }from 'react'
import { IconHeart, IconHeartFilled } from '@tabler/icons-react'
import { discountproducts } from './Data'
function Product() {
    const[like,setLike]=useState(false)
    const[color,setColor]=useState(false)
    const handleLike=(id)=>{
       setLike(id)
       setColor(!color) 
    }
   
    return (
      <>
      {discountproducts.map((x)=>{
          return(
      <div  key={x.id} className='flex flex-col sm:px-[12px] lg:px-[16px] py-[24px] gap-[16px] bg-[#F6F6F6] justify-between rounded-[8px] bg-secondaryClr'>
          <div className='flex  justify-end w-full h-32px '>
            { (color && like === x.id) ? <IconHeartFilled  color={'red'} onClick={()=>handleLike(x.id)}></IconHeartFilled>:<IconHeart className='text-secondaryTxt' onClick={()=>handleLike(x.id)}></IconHeart>}</div>
          <div className='flex w-full  justify-center'>
            <img src={x.img} width={'160px'} height={'160px'} className='object-contain '></img>
          </div>
          <div className='flex flex-col  min-w-full gap-[24px]  justify-between'>
              <div className='flex flex-col gap-[16px]  justify-between items-center'>
                <p className='text-[16px] font-[500] leading-[24px] line-clamp-3 text-center'>{x.product}</p>
                <p className='text-[24px] font-[600] leading-[24px] tracking-[0.072px]'>{x.price}</p>
              </div>
              <button className=' flex items-center justify-center sm:px-[30px] lg:px-[64px] py-[12px] gap-[8px] rounded-[8px] bg-black text-white h-fit'>Buy Now</button>
          </div>
      </div>)})}</>
  )
}

export default Product