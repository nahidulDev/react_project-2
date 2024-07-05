import React from 'react'

import Icon2 from "../assets/icon6.png"
import Icon3 from "../assets/icon7.png"
import { FaFacebookSquare, FaInstagram,FaTwitter } from "react-icons/fa";

const MapPic = () => {
  return (
<>
   <div className='flex  gap-x-10   pl-80 mt-16 mb-20 '>
   <div>
   <iframe data-aos="fade-left" data-aos-delay="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.
   83187894154!2d90.33728812288355!3d23.780975728197344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1720033250867!5m2!1sen!2sbd
   " width="600" height="450"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
   <div data-aos="fade-right" data-aos-delay="300" className='bg-slate-100 w-[536px] h-[428px]'>
   <div className='flex mt-20 ml-20 gap-x-5'>
   <picture className=''>
   <img   src={Icon3} alt="" />
   </picture>
     <h4 className='text-lg text-gray-700  '>2277 Lorem Ave, San Diego, CA 22553</h4>
   </div>
   <div className='flex  ml-20 gap-x-5'>
   <picture className='mt-5'>
   <img src={Icon2} alt="" />
   </picture>
   <h4 className='text-lg text-gray-700 w-56 mt-4'>  Monday - Friday: 10 am - 10pm
                    Sunday: 11 am - 9pm</h4>
   </div>
   <div className='flex  ml-20 gap-x-5'>
   <picture className='mt-4'>
   <img src={Icon3} alt="" />
   </picture>
   <h4 className='text-lg text-gray-700 mt-4'>info@quriarbox.com</h4>
   </div>
   <div className='flex w-[114px]h-[28px] gap-5 ml-36 text-3xl text-red-600 mt-10'>
   <FaFacebookSquare data-aos="fade-left" data-aos-delay="300" className='text-gray-800' />
   <FaInstagram  data-aos="fade-right" data-aos-delay="300" className='text-yellow-900'/>
   <FaTwitter data-aos="fade-down" data-aos-delay="300" />
   </div>
   </div>
   </div>
</>
  )
}

export default MapPic