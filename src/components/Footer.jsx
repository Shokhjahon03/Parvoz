import React, { useEffect, useState } from 'react' 
import logo from '../assets/logo.jpg'
import { Link} from 'react-router-dom';
import axios, { Axios } from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  let [likes,setLikes]=useState(0)
  let func=async()=>{
    let x=await axios.get('https://65fa8d763909a9a65b1aac72.mockapi.io/likes')
    let y=await x.data
    setLikes(...y)
  }

  let Func_p=()=>{
    let b={like:likes.like+1,dislike:likes.dislike}
    axios.put('https://65fa8d763909a9a65b1aac72.mockapi.io/likes/1',b)
    console.log(likes);
  }

  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(()=>{
        func()
  },[])
  return (
    <footer className='w-full min-h-dvh bg-black text-white pt-[70px]'>
                           <div className="container h-full">
                            <div className='w-full h-full items-center flex flex-col md:flex-row '>
                             <div className='w-full h-full flex flex-col gap-5'>
                             <div className='flex items-center relative'>
                                  <img src={logo} className='w-[40px] relative' alt="alt" />
                                  <div className='bg-teal-500 w-[20px] top-0 absolute  h-[20px] rounded-full flex items-center justify-center'><p className='text-center text-[10px]'>PC</p></div>
                                </div>
                                <div className='flex flex-col'>
                                  <Link to={'/'}>Home</Link>
                                  <Link to={'/'}>Aboute US</Link>
                                  <Link to={'/order'} className='text-green-500'>Create Site</Link>
                                  <Link>Aboute App</Link>
                                </div>
                                <div className=' rounded-lg bg-slate-100 w-[200px] p-3 text-black mb-[25px] md:mb-0'>
                                          <p className='text-black'>Did you like our app?</p>
                                          <span className='w-full block border border-black'></span>
                                          <div className='mt-[10px] flex gap-x-2'>
                                            <button onClick={()=>Func_p()} className='flex items-center p-1 w-[50px] justify-center rounded-lg hover:bg-green-400'><i className='pl-1 bx bxs-like text-gray-600' ></i></button>
                                            <button className='flex items-center p-1 w-[50px] justify-center rounded-lg hover:bg-red-400'><i className='bx bxs-dislike text-gray-600'></i></button>
                                          </div>
                                      </div>

                                      <div className='flex flex-col gap-5'>
                                        <Link data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='max-w-[400px] flex pl-5 pr-5 items-center justify-between rounded-e-full rounded-s-full h-[60px] bg-blue-500'>
                                        <i className='bx bxl-telegram text-[39px]'></i>
                                        <p>Telegram orqali bog'lanish</p>
                                        </Link>
                                        <Link data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='max-w-[400px] flex pl-5 pr-5 items-center justify-between rounded-e-full rounded-s-full h-[60px] bg-blue-500'>
                                        <i className='bx bxs-envelope text-[39px]'></i>
                                        <p>Email orqali bog'lanish</p>
                                        </Link>
                                        <Link data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='max-w-[400px] flex pl-5 pr-5 items-center justify-between rounded-e-full rounded-s-full h-[60px] bg-blue-500'>
                                        <i className='bx bxs-phone text-[39px]'></i>
                                        <p>Telefon orqali bog'lanish</p>
                                        </Link>
                                        <Link data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='max-w-[400px] flex pl-5 pr-5 items-center justify-between rounded-e-full rounded-s-full h-[60px] bg-blue-500'>
                                        <i className='bx bxl-linkedin-square text-[39px]' ></i>
                                        <p>Linkiden orqali bog'lanish</p>
                                        </Link>
                                      </div>
                             </div>
                             <div className="e-card playing ">
                              <div className="image"></div>
                              <div className="wave"></div>
                              <div className="wave"></div>
                              <div className="wave"></div>
                                  <div className="infotop">
                              Parvoz Company
                            <div className="name"><i className='bx text-[20px] bx-badge-check'></i></div>
                            {/* <img src={logo} className='' alt="" /> */}
                              </div>
                            </div>
                            </div>
                           </div>
                           <div className='border-t mt-[20px] h-[60px] flex justify-center items-center'>
                              <p>@ 2024/04/01</p>
                           </div>
                      </footer>
  )
}

export default Footer
