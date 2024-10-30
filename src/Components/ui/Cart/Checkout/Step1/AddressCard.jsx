import React, { useState } from 'react'
import { IconX,IconPencil } from '@tabler/icons-react'
import { addresses } from './AddressData'
function AddressCard() {
   const [address,setAddress]=useState(addresses)
   const deleteAddress=(id)=>{
       let afterdelete=address.filter((item)=>item.id !== id)
       setAddress(afterdelete)
   }
  return (
    <>
    {address.map((x)=>{return(
        <div key={x.id} className='p-[24px] flex w-full bg-[#F6F6F6] rounded-[7px]'>
         <div className='flex flex-col gap-[16px] w-full'>
                 <div className='flex sm:gap-[24px] md:gap-[16px] '>
                    <div className='flex gap-[16px]'>
                        <input type='radio' className='w-[24px] h-[24px]'></input>
                        <p>{x.place}</p>
                    </div>
                    <div className='flex items-center justify-center h-fit bg-black text-white text-[12px] font-[400] px-[8px] py-[4px] uppercase rounded-[7px]'>{x.location}</div>
                 </div>   
                 <div className='flex flex-col gap-[8px] pl-[40px]'>
                    <p className='text-[#17183B] text-[16px]  font-[400] leading-[24px]'>{x.address}</p>
                    <p className='text-[#17183B] text-[16px]  font-[400] leading-[24px]'>{x.pincode}</p>
                </div> 
         </div>
         <div className='flex gap-[24px] items-center'>
            <IconPencil color='black'/><IconX onClick={()=>deleteAddress(x.id)}/>
         </div>
    </div>)})}
    </>
   
  )
}

export default AddressCard