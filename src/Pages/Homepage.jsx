import React from 'react'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { Tooltip } from 'flowbite-react'
import logo from '../assets/logo.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
     <div className="hero relative w-full h-dvh">
         <div className="container h-full">
            <div className="headers h-full w-full flex justify-center items-center">
                  <div className='flex flex-col items-center gap-y-5'>
                    <h1 className='text-white lg:text-[80px] text-center text-[50px]'>Parvoz Company</h1>
                    <p className='text-white text-center'>This company can create simple and complex web applications for you</p>
                    <Link to={'/order'}><button className='btn'> 
                      <p>Create With Us</p>
                  </button></Link>
                  <ReactTyped className='text-white lg:text-[30px]' strings={["Check out the full app to get to know us <i class='bx bx-down-arrow-alt text-blue-400'></i>"]} typeSpeed={50} />
                  </div>
            </div>
          </div>
      </div> 
      <main className=' relative'>
        <section className='www w-full h-dvh'>
                    <div className="container">
                    <div className='w-full  h-dvh flex flex-col  lg:mt-0 justify-center items-center'>
                                <div className='work p-3 flex flex-col gap-y-3 text-white rounded-xl text-[10px] lg:text-[20px]'>
                                    <i className='bx bx-info-circle text-blue-400'></i>
                                    <p>- Bizning Kompaniya siz uchun harqanday sohaga mos <br /> statik va dinamik bo'lgan web ilovalarni ishlab chiqadi <br />va uni sizga taqdim etadi.</p>
                                    <p>-Biz sizning hohishingizga ko'ra web ilovalarni <br /> ishlab chiqamiz</p>
                                    <p>-Biz ilovalarimizning tezligiga, ishonchliligiga,<br /> moslashuvchanligiga hamda qidiruv tizimida <br /> faol bo'lishiga javob beramiz </p>
                                    <p>-Agarda biz haqimizda to'liqroq ma'lumotga <br /> ega bo'lishni istasangiz biz bilan bog'laning</p>
                                    <div className='w-full flex gap-9'>
                                      <Tooltip content="Telegram orqali bog'lanish">
                                        <Link to={'https://t.me/developer_shohjahon_003'}><i className='bx bxl-telegram hover:underline text-[20px]'></i></Link>
                                      </Tooltip>
                                      <Tooltip content="Qo'ng'iroq qilish">
                                        <Link to={'tel:+998949876525'}><i className='bx bx-phone hover:underline text-[20px]' ></i></Link>
                                      </Tooltip>
                                      <Tooltip content="Linkedin orqali bog'lanish">
                                        <Link><i className='bx bxl-linkedin hover:underline text-[20px]' ></i></Link>
                                      </Tooltip>
                                      <Tooltip content="Email orqali bog'lanish">
                                        <Link><i className='bx bx-envelope hover:underline text-[20px]' ></i></Link>
                                      </Tooltip>
                                    </div>
                                </div>
                        </div>
                    </div>
        </section>
        <section className='h-dvh '>
              <div className='parallax h-full flex items-center'>
                      <div className='w-full sss p-6'>
                        <div className='container'>
                            <div className='w-full flex flex-col flex-wrap justify-center gap-y-5'>
                              <p className='text-center text-white uppercase text-[15px]'>Bizning jamoa azolari</p>
                                <div className='w-full flex flex-wrap justify-center gap-10'>
                                  <div data-aos="fade-up" data-aos-duration='2000' className='w-[300px] rounded-md flex flex-col gap-y-2 lg:gap-y-3'>
                                  <img className=' rounded-md h-[100px] lg:h-[200px]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--mgVodcWf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pp4ll13f5onw4gqj8ggl.jpg" alt="alt" />
                                  <p className='text-white'>Front-End Developers {"</>"}</p>
                                  <Link className='text-white'>Ular haqida <i className='bx bxs-hand-right'></i></Link>
                                  </div>
                                  <div data-aos="fade-up" data-aos-duration='2000' className='w-[300px] rounded-md flex flex-col gap-y-2 lg:gap-y-3'>
                                  <img className=' rounded-md h-[100px] lg:h-[200px]' src="https://t4.ftcdn.net/jpg/02/99/62/11/360_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E.jpg" alt="alt" />
                                  <p className='text-white'>Back-End Developers {"</>"}</p>
                                  <Link className='text-white'>Ular haqida <i className='bx bxs-hand-right'></i></Link>
                                  </div>
                                  <div data-aos="fade-up" data-aos-duration='2000' className='w-[300px] rounded-md flex flex-col gap-y-2 lg:gap-y-3'>
                                  <img className=' rounded-md h-[100px] lg:h-[200px]' src="https://blog.indepthresearch.org/wp-content/uploads/2023/10/Figma0.jpg" alt="alt" />
                                  <p className='text-white'>Designeres {"</>"}</p>
                                  <Link className='text-white'>Ular haqida <i className='bx bxs-hand-right'></i></Link>
                                  </div>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
        </section>
                     
      </main>
      
    </>
  )
}

export default Homepage
