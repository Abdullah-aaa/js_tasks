// putting navbar in layout.tsx page to show it on every page

import React from 'react'
import Image from 'next/image'
export default function Navbar() {
  return (
    //main div
    <nav className=' border-y-4 sticky'>
      {/*this contain nav bars and child div with images and brand name */}
      <div className=" bg-slate-900 flex text-white flex-wrap pb-1 shadow-xl justify-between">
        <div className='flex-col ml-9'>
    <img src="/logo.jpg" height="80px" width="80px" className='pb-3 pt-7 rounded-xl ' />
    <p className='mt-0  text-lg'><b>Bismillah cloths</b></p>
    </div>

    <div className='pt-28 justify-around'>
    <a href='#' className='mx-14 p-2 hover:font-bold hover:bg-slate-800 text-lg rounded-md'>Male</a>
    <a href='#' className='mx-14 p-2 hover:font-bold  hover:bg-slate-800 text-lg rounded-md'>Female</a>
    <a href='#' className='mx-14 p-2 hover:font-bold hover:bg-slate-800 text-lg rounded-md'>Kids</a>
    <a href='#' className='mx-14 p-2 hover:font-bold hover:bg-slate-800 text-lg rounded-md'>All Products </a>
    </div>
    <div className=' pt-20'>
    <input type='text' className=' p-1 flex-grow border-white border-4 border-solid ' placeholder='what your looking for?'/>
    <button className=' bg-blue-500 p-2 rounded-md text-gray-50 border-solid border-white border-2' >Enter</button>
    </div>
    </div>
    
    </nav>
  )
}
