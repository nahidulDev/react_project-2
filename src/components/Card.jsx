import React from 'react'
import card from '../assets/icon.svg'

const Card = ( { description, text,className}) => {
  return (
   <>
 <section className='py-[10px]'>
   <div className="max-w-container m-auto ">
   <div data-aos="fade-down" data-aos-delay="300" className='  bg-gray-800 shadow-blue-500/50 w-[424px] h-[583px]   rounded-2xl'>
    <picture>
    <img  data-aos="fade-up" data-aos-delay="300" className=' m-auto pt-12' src= {card} alt="" />
    </picture>
    <h1 className='text-center pt-6 text-3xl font-bold'>{description}</h1>
    <p className='text-center p-6 capitalize text-sky-600'>dummDolor aliquyam labore sanctus justo eos, sanctus et amet lorem aliquyam ea justo at, sanctus et amet lorem aliquyam ea justo at, sanctus et amet lorem aliquyam ea justo at, sanctus et amet lorem aliquyam ea justo at, .</p>
     <ul className='list-disc pl-12 leading-loose  text-red-600'>
     <li>Cooperate Goods</li>
     <li>Shipment</li>
     <li>Accessibility</li>
     </ul>
     <div className='w-60 bg-red-400 m-auto mt-4'>
     <h2 className={`text-center px-5 py-1  text-2xl rounded-lg border-2 border-red-700 ${className}`}><a href="#">{text}</a></h2>
     </div>
   </div>
   </div>
 </section>
   </>
  )
}

export default Card;