import React from 'react'
import Logo from '../../../assets/Images/WhiteLogo.png'
function Info() {
    const footernavData=[
        { title:'Services',navItems:[
        {
           nav:'Bonus program'
        },
        {
            nav:'Gift cards'
        },
        {
            nav:'Credit and payment'
        },
        {
            nav:'Service contracts'
        },
        {
            nav:'Non-cash account'
        },
        {
            nav:'Payment'
        }]
    },
    { title:'Assistance to the buyer',navItems:[
        {
           nav:'Find an order'
        },
        {
            nav:'Terms of delivery'
        },
        {
            nav:'Exchange and return of goods'
        },
        {
            nav:'Guarantee'
        },
        {
            nav:'Frequently asked questions'
        },
        {
            nav:'Terms of use of the site'
        }]
    }
    ]
  return (
    <div className='flex sm:flex-col lg:flex-row justify-between sm:items-center lg:items-start content-start self-stretch gap-[32px]'>
        <div className='flex flex-col gap-[24px] sm:items-center lg:items-start'>
            <img src={Logo} width={'65.4px'} height={'22.872px'}></img>
            <p className='text-[#CFCFCF] text-[14px] font-[500] leading-[23.87px] text-footerSecondarytxt'>We are a residential interior design firm located in<br></br> Portland. Our boutique-studio offers more than</p>
        </div>
        <nav className='flex sm:flex-col lg:flex-row justify-between sm:items-center lg:items-start gap-[32px]'>
            {footernavData.map((x)=>{
                return(
            <div key={x.title} className='flex flex-col sm:items-center lg:items-start  gap-[8px] w-[295.5px]'>
                <p className='text-[16px] font-[600] leading-[16px]'>{x.title}</p>
                {x.navItems.map((y,index)=>{
                return( <p key={index} className='text-[14px] font-[400] leading-[32px] text-footerSecondarytxt'>{y.nav}</p>
            )})}
            </div>)})}
            
        </nav>
    </div>
  )
}

export default Info