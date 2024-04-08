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
                    <h1 className='text-white text-[80px]'>Parvoz Company</h1>
                    <p className='text-white'>This company can create simple and complex web applications for you</p>
                    {/* <button className='btns'>
                        <span class="circle1"></span>
                        <span class="circle2"></span>
                        <span class="circle3"></span>
                        <span class="circle4"></span>
                        <span class="circle5"></span>
                        <span class="text">Create With Us</span>L
                    </button> */}
                    <button className='btn'> 
                      <p>Create With Us</p>
                  </button>
                  <ReactTyped className='text-white text-[30px]' strings={["Check out the full app to get to know us <i class='bx bx-down-arrow-alt text-blue-400'></i>"]} typeSpeed={50} />
                  </div>
            </div>
          </div>
      </div> 
      <main className=' relative'>
        <section className='www w-full h-dvh'>
                    <div className="container">
                    <div className='w-full  h-dvh flex flex-col justify-center items-center'>
                                <div className='work p-3 flex flex-col gap-y-3 text-white rounded-xl'>
                                    <i className='bx bx-info-circle text-blue-400'></i>
                                    <p>- Bizning Kompaniya siz uchun harqanday sohaga mos <br /> statik va dinamik bo'lgan web ilovalarni ishlab chiqadi <br />va uni sizga taqdim etadi.</p>
                                    <p>-Biz sizning hohishingizga ko'ra web ilovalarni <br /> ishlab chiqamiz</p>
                                    <p>-Biz ilovalarimizning tezligiga, ishonchliligiga,<br /> moslashuvchanligiga hamda qidiruv tizimida <br /> faol bo'lishiga javob beramiz </p>
                                    <p>-Agarda biz haqimizda to'liqroq ma'lumotga <br /> ega bo'lishni istasangiz biz bilan bog'laning</p>
                                    <div className='w-full flex gap-9'>
                                      <Tooltip content="Telegram orqali bog'lanish">
                                        <Link><i className='bx bxl-telegram hover:underline text-[20px]'></i></Link>
                                      </Tooltip>
                                      <Tooltip content="Qo'ng'iroq qilish">
                                        <Link><i className='bx bx-phone hover:underline text-[20px]' ></i></Link>
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
                              <p className='text-center text-white uppercase'>Bizning jamoa azolari</p>
                                <div className='w-full flex flex-wrap justify-center gap-10'>
                                  <div data-aos="fade-up" data-aos-duration='2000' className='w-[300px] rounded-md flex flex-col gap-y-3'>
                                  <img className=' rounded-md h-[200px]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--mgVodcWf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pp4ll13f5onw4gqj8ggl.jpg" alt="alt" />
                                  <p className='text-white'>Front-End Developers {"</>"}</p>
                                  <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Learn More</span>
                                  </button>
                                  </div>
                                  <div data-aos="fade-up" data-aos-duration='2000' className='w-[300px] rounded-md flex flex-col gap-y-3'>
                                  <img className=' rounded-md h-[200px]' src="https://t4.ftcdn.net/jpg/02/99/62/11/360_F_299621124_vutDKbNwRJG6poJRQQIMYfsc4tJCTO5E.jpg" alt="alt" />
                                  <p className='text-white'>Back-End Developers {"</>"}</p>
                                  <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Learn More</span>
                                  </button>
                                  </div>
                                  <div data-aos="fade-up" data-aos-duration='2000' className='w-[300px] rounded-md flex flex-col gap-y-3'>
                                  <img className=' rounded-md h-[200px]' src="https://blog.indepthresearch.org/wp-content/uploads/2023/10/Figma0.jpg" alt="alt" />
                                  <p className='text-white'>Designeres {"</>"}</p>
                                  <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Learn More</span>
                                  </button>
                                  </div>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
        </section>
                      <footer className='w-full h-[400px] bg-black text-white'>
                            <div className="container h-full">
                              <div className='w-full h-full flex justify-between p-5'>
                                  <div className='text-white flex items-center'>
                                    <img src={logo} className='w-[100px] h-[100px]' alt="alt" />
                                    <p>Parvoz Company</p>
                                  </div>
                                  <div className='h-full flex flex-col justify-around'>
                                    <div className='w-[200px] flex justify-around'>
                                        <Link>Home</Link>
                                        <Link>Aboute Us</Link>
                                        {/* <Link>Home</Link> */}
                                    </div>
                                    <Link class="card p-4">
                                      <p>Web Ilova buyurtma <br /> berish</p>
                                      <i className='bx bxs-cog text-[45px] mt-[20px]' ></i>
                                    </Link>
                                  </div>
                                  <div className='h-full flex flex-col justify-around'>
                                      <div className=' rounded-lg bg-slate-100 w-[200px] p-3 text-black'>
                                          <p className='text-black'>Did you like our app?</p>
                                          <span className='w-full block border border-black'></span>
                                          <div className='mt-[10px] flex gap-x-2'>
                                            <button className='flex items-center p-1 w-[50px] justify-center rounded-lg hover:bg-green-400'><i className='pl-1 bx bxs-like text-gray-600' ></i></button>
                                            <button className='flex items-center p-1 w-[50px] justify-center rounded-lg hover:bg-red-400'><i className='bx bxs-dislike text-gray-600'></i></button>
                                          </div>
                                      </div>
                                      <div>

                                      </div>
                                  </div>
                              </div>
                            </div>
                      </footer>
      </main>
      
    </>
  )
}

export default Homepage
