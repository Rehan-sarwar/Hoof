import React from 'react'
import Link from 'next/link'

var cards = [
    {image:'Arabian4.jpg', para:'Can Eat Meat'},

    {image:'Arabian4.jpg', para:'Can Eat Meat'},
   
    {image:'Arabian4.jpg',  para:'Can Eat Meat'},
   
    {image:'Arabian4.jpg', para:'Can Eat Meati'},   
    
    {image:'Arabian4.jpg', para:'Can Eat Meat'},

    {image:'Arabian4.jpg', para:'Can Eat meat'},

    {image:'Arabian4.jpg', para:'Can Eat Meat'},

    {image:'Arabian4.jpg', para:'Can Eat meat'},

    {image:'Arabian4.jpg', para:'Can Eat meat'},

  ]
  
function Expert() {
  return (
    <div>
         <h1 className='lg:text-[45px] text-[#2471A3] font-bold lg:pl-9  sm:pl pl-10  pt-10 sm:text text-[30px]' >Horse Heath </h1>
   <div className="grid lg:grid-cols-3 px-8 gap-4 sm:grid grid-cols-1 mt-10">
    {cards.map((card,index)=>{
          return(
        <Link href={'/heath'}>
            <div key={index} className="max-w-full">
            <img src= {card.image} alt="" />
            <p>{card.para}</p>
        </div>
         </Link>
           )
          })}  
    </div>
    </div>
  )
}

export default Expert