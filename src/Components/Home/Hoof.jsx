import React from 'react'
import { VscArrowRight } from "react-icons/vsc"

function Hoof() {
  return (
    <div>
            <div className='bg-[#E67E22]  '>
      <div className='flex justify-between px-10 mt-[70px] flex-wrap p-6'>
      <div>
       <h2 className='text-[30px] font-bold text-white pt-8 '>Get More Tips on Horse Health & Wellness</h2>
       <p className='text-[20px] text-white pt-12 '>Receive Horse health tips and insights in your inbox for giving your Horse the best Horse care possible.</p>
       <div className='flex items-center border-[1px] max-w-[350px]  px-5 border-white justify-around py-2 mt-5 rounded-[40px]'>
        <button className='text-[20px] text-white'>join our Horse</button>
        <div className='text-[30px] text-white'><VscArrowRight /></div>
       </div>
       </div>
       <img className='sm:mt mt-5 md:m m-auto' src="horse14 (2).png" alt="" />
       </div>
      
    </div>
    </div>
  )
}

export default Hoof