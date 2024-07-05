import React from 'react'
import Sub from "../assets/subbanner.png"
import { FiSend } from "react-icons/fi";
const SubBanner = () => {
  return (
   <>
     <div className='w-[800px] h-[478px] m-auto flex gap-x-6 '>
      <div>
      <picture className='pt-10'>
      <img data-aos="fade-left" data-aos-delay="300" src={Sub} alt="" />
      </picture>
      <h2 data-aos="fade-down" data-aos-delay="300" className='w-[259px] h-[30px] text-red-600 text-xl font-bold ml-2'>REQUEST A CALLBACK</h2>
      <h1 data-aos="fade-up" data-aos-delay="300" className='w-[412px] h-[86px] text-gray-900 text-4xl font-bold'>We will contact in the shortest time.</h1>
      <h3 data-aos="fade-down" data-aos-delay="300" className='w-[352px]h-[30px] text-gray-500  text-lg'>Monday to Friday, 9am-5pm.</h3>
      </div>
      <div>
       <form data-aos="fade-right" data-aos-delay="300"  className='pt-10'>
     
       <input data-aos="fade-right" data-aos-delay="300" type='text' name='name'placeholder='Name' className='w-[350px] h-[50px] p-5 text-gray-500 text-xl rounded-xl border-green-500'/><br></br>
       <input data-aos="fade-left" data-aos-delay="300" type='email' name='email'placeholder='Email' className='w-[350px] h-[50px] p-5 text-gray-500 text-xl rounded-xl mt-6 '/><br></br>
       <textarea data-aos="fade-up" data-aos-delay="500"  className='w-[350px] h-[100px] p-5 text-gray-500 text-xl rounded-xl mt-6'> Massages</textarea><br></br>
      <button className='w-[350px] h-[60px]  bg-red-600 text-yellow-200 text-xl font-bold rounded-xl flex justify-center  items-center pl-6 mt-6 gap-x-2'> Send Message <FiSend  className="  " /> </button>

       </form>
      </div>
     </div>
   </>
  )
}

export default SubBanner;