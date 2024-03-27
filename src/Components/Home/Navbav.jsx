import React from 'react'
import { FaBars } from "react-icons/fa6"

function Navbav() {
  return (
   <div>
    <div className='Xl:flex  justify-between  p-[5px] px-5  items-center lg:flex hidden '>
      <img className='max-w-[200px]' src="Groovy1.png" alt="" />
     <div className='flex  gap-10 text-[18px] text-white -bottom-full '>
     <ul class=" navbar-nav flex items-center gap-[40px]  ">
      <li class="nav-item ">
      <a class="nav-link" href="about">Dietary</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="heath">Health</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Grooming</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="puppies">Puppies</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="blog">Blogs</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="about">About Us</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
    </ul>
     </div>
    </div>

    <div className='flex items-center p-5 justify-between px-10 lg:hidden'>
    <img className='w-[100px]' src="Groovy1.png" alt="" />
     <FaBars  /> </div>
   </div>
    
  )
}

export default Navbav