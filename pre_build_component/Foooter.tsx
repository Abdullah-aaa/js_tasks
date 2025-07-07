import React from 'react'

export default function Footer() {
  return (
    <div  className='flex justify-between space-x-5 pb-9 p-9 shadow-xl'>
        <div  className=''>
          <img src='logo.jpg' alt='logo' className=' h-24 '/>
           </div>
           <div  className='space-x-5 justify-evenly'>
          
          <a href="#" className=' font-bold ml-4'>Contacts</a>

          <a href="#" className=' font-bold mr-4'>About Us</a>
           </div>
        </div>
  )
}
