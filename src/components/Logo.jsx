import React from 'react'
const Logo = ({src,number, pra}) => {
  return (
    <>
    <section className='py-4'>
    <div  className="max-w-container m-auto">
      <div data-aos="fade-down" data-aos-delay="300">
      <picture>
      <img data-aos="fade-up" data-aos-delay="300" className='m-auto h-8' src={src} alt="" />
      </picture>
      <h2 data-aos="fade-down" data-aos-delay="300" className='text-red-600 font-bold text-3xl pt-4 text-center'>{number}</h2>
      <p data-aos="fade-up" data-aos-delay="200" className=' text-[#464558] text-center pt-3 text-xl'>{pra}</p>
      </div>
      </div>
    </section>
    </>
  )
}

export default Logo;