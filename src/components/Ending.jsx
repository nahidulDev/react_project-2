import React from 'react'
import Logo3 from "../assets/Frame 3.png"
import List from './List'
const Ending = () => {
  return (
   <>
   <footer className='w-full h-[700px] bg-[#222132]'>
  
   <div className='flex gap-x-60'>
    <div data-aos="fade-left" data-aos-delay="300">
    <h1 className='text-5xl text-white mt-20 ml-40 font-bold font-serif'>Get an update every week </h1>
    <p className='w-[530px] h-[30px] ml-40 mt-5 text-xl text-[#D2C6C6]'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
    </div>
    <div>
    <h1 data-aos="fade-down" data-aos-delay="300" className='w-[312px]h-[23px] text-3xl text-red-600 font-bold mt-20 ml-10'>SUBSCRIBE TO NEWSLETTER</h1>
  <div className='flex'>
    <form data-aos="fade-down" data-aos-delay="300">
    <input type='email' name='email'placeholder='Enter Your Email' className='w-[386px] h-[50px] p-5 text-[#7B7A8B] text-xl rounded-xl mt-6 ml-10 border-blue-500 border-none '/>
    <button className='w-[130px] h-[50px] bg-red-600  items-center rounded-xl ml-4 mt-6'>Suscribes</button>
    </form>
  </div>
    </div>
   </div>
     <div data-aos="fade-down" data-aos-delay="500" className='w-full h-[335px] bg-[#2F2E41] mt-20 mb-10 flex gap-x-96 '> 
     <div>
     <div className='flex pt-20 pl-40 items-center'>
     <picture>
     <img src={Logo3} alt="" />
     </picture>
     <h2 className='w-[113px]h-[31px] text-white text-3xl  '>Quriarbox</h2>
     </div>
     <h4 className='w-[300px] h-[44px] text-xl  ml-40 text-[#9291A1] '>The most trusted Courier company in your area.</h4>

     </div>
     <div className='flex gap-x-40 mt-20'>
     <List heading={"Other Links"} listname1={"Blogs"} listname2={"Movers website"} listname3={"Traffic Update"}/>
     <List heading={"Corporate goods"} listname1={"Artworks"} listname2={"Movers website"} listname3={"Contact US"}/>
     <List heading={"About Us"} listname1={"Documents"} listname2={"Movers website"} listname3={"Get Update"}/>
     </div>
     </div>
        <div className='flex justify-around m'>
     <h3 className='text-[#DBDBE9] font-bold text-xl'>All rights Reserved © Your Company, 2021</h3>
     <h3 className='text-[#DBDBE9] font-bold text-xl'>Made with heart by <span className=' text-xlfont-bold text-red-700'>ThemeWagon</span></h3>
     </div>
   </footer>
   </>
  )
}

export default Ending