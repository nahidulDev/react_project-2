import React from 'react'

const Navbar = () => {
  return (
    <nav data-aos="fade down" data-aos-delay="300" className="bg-navBackground shadow-navShadow ">
        <div className="max-w-container  m-auto">
          <div>
            <div className="   xl:flex justify-center items-center">
              <div className=" xl:flex w-1/2  items-center  ">
                <picture className="">
                  <img src="src/images/Frame 3.png" alt="logo" />
                </picture>
                <h3 className="text-red-700 text-xl font-semibold">QuariBox</h3>
              </div>
              <ul className="flex w-1/2 gap-[40px] p-4 text-lg">
                <li>
                  <a className='text-red-500' href="#">Home</a>
                </li>
                <li>
                  <a className='text-blue-800 ' href="#">Services</a>
                </li>
                <li>
                  <a className='text-blue-800' href="#">About us </a>
                </li>
                <li>
                  <a className='text-blue-800'  href="#">Whast's new</a>
                </li>
                <li>
                  <a className='border-solid p-2 bg-red-200 rounded-lg text-red-500 font-semibold' href="#">Contract Us </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar