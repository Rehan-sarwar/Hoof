import React from 'react'
import Link from 'next/link'

function Button() {
  return (
    <div className='px-[30px] mt-[50px] p-12  '>
    <div className='border-[3px] rounded-[20px] border-gray-200 py-[10px] '>
   <p className='p-[15px] text-[40px] '>People Also Ask..</p>
   <div className=' main-div flex  py-2 flex-wrap  justify-between gap-20 px-8'>
  <Link href={'/blog'}>
  <div>
   <p>Horse Diet</p>
   <h1>Can eat meat</h1>
   </div>
   </Link>
   <Link href={'/blog'}>
   <div className='Eat px-5 '>
   <p>Horse gromming</p>
  <h1>Can Eat Meat</h1>
   </div>
   </Link>
   <Link href={'/blog'}>
   <div className='Eat px-5 '>
   <p>Horse gromming</p>
  <h1>Can Eat Meat</h1>
   </div>
   </Link>
   <Link href={'/blog'}>
   <div className='Eat px-5'>
   <p>Horse gromming</p>
  <h1>Can Eat Meat</h1>
   </div>
   </Link>
   <Link href={'/blog'}>
   <div className='Eat px-5 py-1'>
   <p>Horse gromming</p>
  <h1>Can Eat Meat</h1>
   </div>
   </Link>
   </div>
    </div>
  </div>
  )
}

export default Button