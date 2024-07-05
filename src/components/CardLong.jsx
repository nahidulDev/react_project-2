import React from 'react'
import Star from "../assets/rating stars.png"
import Img from "../assets/Avatar.png"
const CardLong = () => {
  return (
    <>
    <div className=' bg-slate-50 w-[850px] h-[400px] m-auto p-5 rounded-lg mb-20'>
    <h1 data-aos="fade-down" data-aos-delay="300" className='w-[300px] h-[30px] text-red-600 font-bold text-3xl font-dm p-5 '>Fantastic service!</h1>
    <p data-aos="fade-up" data-aos-delay="300" className='w-[810px] h-[125px] p-6 pt-4 text-[#9291A1] font-dm text-lg'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
    <div className='flex justify-between  mt-32'>
       <div>
     <picture className='mt-10'>  
    <img src={Star} alt=" No Picture" />
    </picture>
      </div>
      <div className='flex gap-x-2  '>
      <div>
      <h5 className='text-gray-700 font-bold text-lg'>Yves Tanguy</h5>
      <h6 className='text-gray-500  text-lg'>Chief Executive, DLF</h6>
      </div>
      <div>
      <picture>
      <img src={Img} alt="" />
      </picture>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default CardLong;