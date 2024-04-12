import { Tooltip } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo2.jpg'
import { ReactTyped } from "react-typed";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let [openSaidBar,setOpenSaidBar]=useState(false)
let navg=useNavigate()
  return (
    <nav className='w-full h-[60px]  fixed top-0 left-0 z-10 bg-black'>
      <div className="container">
        <div className="navbar w-full flex items-center justify-between h-[60px]">
        <button onClick={()=>setOpenSaidBar(!openSaidBar)}><i className='bx bxs-hand text-white md:hidden'></i></button>
           <div className='flex justify-around items-center gap-2'>
              {/* <i className='bx bxs-plane-alt text-white text-[30px]'></i> */}
              <img src={logo} className='w-[40px] h-[40px] rounded-full' alt="alt" />
              <Link className='text-white'>Parvoz Company</Link>
           </div>
           <ul className='hidden md:flex text-white w-[400px] items-center justify-between'>
              <div className='flex items-center gap-x-2'>
              <Link to={'/'} className='hover:text-green-200'>Home</Link>
                {/* <i className='bx bx-home-alt text-[20px]'></i> */}
              </div>
              <div className='flex items-center gap-x-2'>
              <Link className='hover:text-green-200'>About Us</Link>
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
                <button onClick={()=>navg('/order')} className='btn'> 
                  click me
                  </button>
                
              </div>
              </>}>
              <div className='flex items-center gap-x-2'>
              <Link className='hover:text-green-200'>Placing An Order</Link>
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
      <div className={openSaidBar? 'md:hidden flex flex-col items-center pb-3 gap-[200px] text-white absolute top-[60px] left-0 bg-black w-full':'hidden'}>
            <div className='flex w-full flex-col items-center mt-[25px]'>
            <ul className='flex flex-col items-center mb-[25px]'>  
                <Link>Home</Link>
                <Link>Aboute Us</Link>
            </ul>
              <div className='flex flex-col items-center'>
                  <p className='mb-[15px]'>Contact</p>
                  <div className='flex gap-[15px]'>
                  <Link to={'https://t.me/developer_shohjahon_003'}><i className='bx bxl-telegram'></i></Link>
                  <Link to={'/'}><i className='bx bxl-linkedin-square'></i></Link>
                  <Tooltip content={<><a href="tel:998949876525">+998949876525</a></>}>
                  <Link><i className='bx bx-phone'></i></Link>
                  </Tooltip>
                  <Link><i className='bx bxs-envelope'></i></Link>
                  </div>
              </div>
            </div>
            <Link className='flex items-center gap-1'>
            <i className='bx bx-cog'></i>
            <span className='block h-[30px] border w-0'></span>
              <p>Create Web Site</p>
              <div>
              <p></p>
              <p></p>
            </div>
            </Link>
      </div>
    </nav>
  )
}

export default Navbar
