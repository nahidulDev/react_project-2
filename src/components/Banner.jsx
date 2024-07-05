import React from 'react'
import banner from '../assets/banner.svg'
const Banner = () => {
  return (
   <section className='py-[170px]'>
     <div className="max-w-container m-auto">
          <div className="flex ">
               <div className='w-[35%] self-center '>
               <h1 data-aos="fade-down" data-aos-delay="300" className='text-[49px] font-normal'>A trusted provider of <span className='font-extrabold'>courier services.</span></h1>
               <p data-aos="fade-up" data-aos-delay="300" className='mt-4 w-[330px]'>We deliver your products safely to your home in a reasonable time.</p>
               <button data-aos="fade-left" data-aos-delay="500" className='bg-red-600 text-center my-4 p-2 w-[150px] text-xl rounded-md text-white' > Get Steart </button>
               </div>
                <div className='w-[65%]'>
                <picture>
                <img data-aos="fade-down" data-aos-delay="300" className='w-full' src={banner} alt="" />
                </picture>
               </div>
          </div>
          
         <div >
         <h1 data-aos="fade-down" data-aos-delay="300" className='text-[30px] pt-20 text-red-600 font-bold uppercase text-center '> Servises</h1>
         <h2 data-aos="fade-up" data-aos-delay="300" className='text-[30px] text-center font-bold'>Our services for you</h2>
         </div>
     </div>
   </section>
  );
}

export default Banner