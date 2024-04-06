import { Tooltip } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='w-full h-[60px]  fixed top-0 left-0'>
      <div className="container">
        <div className="navbar w-full flex items-center justify-between h-[60px]">
           <div className='flex justify-around items-center gap-2'>
              {/* <i className='bx bxs-plane-alt text-white text-[30px]'></i> */}
              <img src={logo} className='w-[40px] h-[40px] rounded-full' alt="alt" />
              <Link className='text-white'>Parvoz Company</Link>
           </div>
           <ul className='flex text-white w-[400px] items-center justify-between'>
              <div className='flex items-center gap-x-2'>
              <Link className='hover:text-green-600'>Home</Link>
                {/* <i className='bx bx-home-alt text-[20px]'></i> */}
              </div>
              <div className='flex items-center gap-x-2'>
              <Link className='hover:text-green-600'>About Us</Link>
              {/* <i className='bx bx-chevron-right text-[25px]'></i> */}
              </div>
              <Tooltip content={<>
              <div>
                <p className='mb-[20px]'>
                Siz bu yerga o'z sytingizni buyurtma berishingiz mumkin
                </p>
                <p className='mb-[20px]'>
                  Tayyormisiz ? 
                </p>
                <p className='mb-[20px]'>
                  Agar javobingiz HA bo'lsa tugmani bosing !
                </p>
                <button className='btn'> 
                  click me
                  </button>
                
              </div>
              </>}>
              <div className='flex items-center gap-x-2'>
              <Link className='hover:text-green-600'>Placing An Order</Link>
              <i className='bx bx-chevron-right text-[25px]'></i>
              </div>
              </Tooltip>
           </ul>
           <Tooltip className='' content={<>
           <div className='flex h-[20px] gap-2 items-end'>
            <p>This is a beta version of the site</p>
            <i className='bx bxs-circle text-green-500' ></i>
           </div>
           </>}>
           <button className='text-green-400 border pl-2 pr-2 rounded-md border-green-300'>
            beta
           </button>
           </Tooltip>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
