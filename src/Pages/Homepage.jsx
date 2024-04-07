import React from 'react'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { Tooltip } from 'flowbite-react'
const Homepage = () => {
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
        <section className='h-dvh'>
              <div className='parallax h-full'>
                      <div className='container '>
                      
                      </div>
                </div>
        </section>
      </main>
      
    </>
  )
}

export default Homepage
