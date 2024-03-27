import React from 'react'
import Link from 'next/link'

function Horse() {
  return (
    <div>
          <h1 className='lg:text-[45px] text-[#2471A3] font-bold lg:pl-10  sm:pl pl-10  pt-10 sm:text text-[30px]'>Horse Dietary</h1>
        <div className='grid lg:grid-cols-2 gap-10 mt-10 flex-wrap lg:px-8 sm:px px-8 sm:grid grid-cols-1  '>
        <Link href={'/blog'}>
        <div>
         <img className='lg:max-w-[705px] max-w-full' src="Arabian1.jpg" alt="" />
            <p  className='text-[25px] pt-5'>Can Eat Alfalfa Sprouts</p>
          </div>
        </Link>

         <div className='inline-grid lg:grid-cols-2 gap-2 sm:grid grid-cols-1 '>
        <Link href={'/blog'}>
            <div>
            <img src="Arabian2.jpg" alt="" />
            <p  className='text-[15x] pt-2'>Can Eat Alfalfa Sprouts</p>
          </div>
        </Link>

          <div>
            <img  src="Arabian10.jpg" alt="" />
            <p  className='text-[20px] pt-2'>Can Eat Alfalfa Sprouts</p>
          </div>

          <div>
            <img src="Arabian4.jpg" alt="" />
            <p  className='text-[15px] pt-2' >Can Eat Alfalfa Sprouts</p>
          </div>
          <div>
            <img className='' src="Arabian11.jpg" alt="" />
            <p className='text-[15px] pt-2'>Can Eat Alfalfa Sprouts</p>
          </div>

          </div>
        </div> 

    </div>
  )
}

export default Horse