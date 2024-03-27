import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <div>
      <div className='bg-[#E67E22] flex justify-between  items-center mt-[20px] lg:px-[50px] flex-wrap p-12 pt-12 w-full sm:px px-5 '>
         <div>
          <h1 className=' heading1  lg:text-[70px] sm:text text-[40px] '>Peace in the Presence of Horses</h1>
          <p className=' lg:max-w-[640px] text-white text-[20px] pt-12  '>
            HorseHaven - Your Ultimate Equine Companion Guide. Delve into a treasure trove of horse-related wisdom on breeds, nutrition, wellness, and grooming. Roam a realm where thundering hooves intersect with expert advice. Unleash the finest for your majestic companion with HorseHaven - Your definitive destination for all things horse!</p>
            <Link  href={'/blog'}>
              <div>
                <button className=' butten border-[0px] bg-slate-400 text-[20px]   rounded-[50px] hover:bg-white  text-slate-700  px-20 mt-14  py-2'>Start</button>
              </div>
            </Link>
            </div>
            <div className='sm:mt mt-[30px]'>
            <img className='w-[400px]' src="horse.png" alt="" />
            </div>
        </div> 
    </div>
  )
}

export default Hero