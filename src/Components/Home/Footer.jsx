import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { SiPicartodottv } from "react-icons/si"
import { VscArrowRight } from "react-icons/vsc"

function Footer() {
  return (
    <div>
     <div className='bg-[#2E4053]'>
       <div><img className='max-w-[350px] p-[40px]' src="Groovy1.png" alt="" />
       <div className='flex items-center justify-between Xl:px-14 flex-wrap sm:px px-8'>
       <div className='flex gap-8 justify-between px-12 '>
        <div className='text-[40px] '><a href=""><FaFacebook /></a></div>
        <div className='text-[40px]'><a href=""><BsInstagram /></a></div>
        <div className='text-[40px]'><a href=""><SiPicartodottv /></a></div>
       </div>
       <div className='flex items-center border-[1px] max-w-[400px] gap-3  px-5 border-white justify-around py-2 mt-5 rounded-[40px]'>
       <button className='text-[20px] text-white'>join our Horse</button>
        <div className='text-[30px] text-white'><VscArrowRight /></div>
        </div>
       </div>
       <div className='flex items-center justify-between xl:px-16 sm:px px-4  mt-12 flex-wrap'>
       <p className='text-[15px]  text-white'>© 2024 Horse, All Rights Reserved.</p>
       <div className='flex gap-5 text-white text-[15px] sm:pt pt-4 '>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href="">Disclaimer</a>
       </div>
       </div>
       
       </div>
      </div>
    </div>
  )
}

export default Footer