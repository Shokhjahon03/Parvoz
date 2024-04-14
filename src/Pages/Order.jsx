import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import axios from 'axios';
import { Toast } from "flowbite-react";

const Order = () => {
  let [val,setVal]=useState({IlovaType:'',IlovaName:'',IlovaYonalishi:'',IlovaKuchi:'',time:0})
  let [openToast,setOpenToast]=useState(false)
  let func=(e)=>{
    
      if (val.IlovaKuchi!=='' && val.IlovaName!=='' && val.IlovaType!=='' && val.IlovaYonalishi!=='' && val.time!=='') {
        axios.post('https://65fa8d763909a9a65b1aac72.mockapi.io/port',val)
      // console.log(val);
      setVal({IlovaType:'',IlovaName:'',IlovaYonalishi:'',IlovaKuchi:'',time:0})
      setOpenToast(true)
      }
    
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
     <div className='parallax2 w-full pt-[100px] text-white'>
      <div className="container">
          <form onSubmit={(e)=> e.preventDefault()} className='w-full flex flex-col justify-between p-10 gap-y-[100px]'>
              <div className='flex flex-col items-start gap-y-7 w-full p-7 rounded-md  text-white'  
              data-aos="fade-right" 
              data-aos-duration="1500">
                   <p>1-qadam</p>
                  <div className='w-full flex flex-col gap-y-[30px] justify-between md:flex-row'>
                    <div className='flex flex-col items-start gap-y-7'>
                    <p>Qanday web ilova yaratmoqchisiz <i className='bx bxs-pencil'></i></p>
                    <select value={val.IlovaType} required onChange={(e)=>setVal({IlovaType:e.target.value,IlovaName:val.IlovaName,IlovaYonalishi:val.IlovaYonalishi,IlovaKuchi:val.IlovaKuchi,time:val.time})} className=' rounded-md border-inherit text-gray-700' name="" id="">
                      <option value="">Tanlang</option>
                      <option value="staik">Statik</option>
                      <option value="dinamik">Dinamik</option>
                    </select>
                    </div>

                    <div className='flex flex-col items-start gap-y-7'>
                        <p>Web ilovangiz nomi <i className='bx bxs-pencil'></i></p>
                        <label for="myInput" className="label rounded-md">
                      <span className="label-title">web ilova nomi</span>
                      {/* <input onChange={(e)=>setVal({IlovaType:val.IlovaType,IlovaName:e.target.value,IlovaYonalishi:val.IlovaYonalishi,IlovaKuchi:val.IlovaKuchi,time:val.time})} id="myInput" className="input rounded-md" name="text" placeholder="Type..." type="text"/> */}
                      <input value={val.IlovaName} onChange={(e)=>setVal({IlovaType:val.IlovaType,IlovaName:e.target.value,IlovaYonalishi:val.IlovaYonalishi,IlovaKuchi:val.IlovaKuchi,time:val.time})} type="text" placeholder='Name' required className='text-gray-800 rounded-lg outline-none' />
                    </label>
                  </div>

                  <div className='flex flex-col items-start gap-y-7'>
                  <p>Web ilovangiz qanday yo'nalishda <i className='bx bxs-pencil'></i></p>
                  <select value={val.IlovaYonalishi} onChange={(e)=>setVal({IlovaType:val.IlovaType,IlovaName:val.IlovaName,IlovaYonalishi:e.target.value,IlovaKuchi:val.IlovaKuchi,time:val.time})} className=' rounded-md border-inherit text-gray-700' name="" id="">
                      <option value="">Tanlang</option>
                      <option value="biznes">Biznes</option>
                      <option value="shop">Onlayn do'kon</option>
                      {/* <option value="admin">Mavjud ilova uchun boshqaruv paneli</option> */}
                      <option value="sport">Sport</option>
                      <option value="tibbiyot">Tibbiyot</option>
                      <option value="talim">Ta'lim</option>
                    </select>
                  </div>

                  </div>
              </div>
              <div className='flex flex-col items-start gap-y-7 w-full p-7 rounded-md'  
              data-aos="fade-left" 
              data-aos-duration="2000">
                <p>2-qadam</p>
               <div className='w-full flex flex-col gap-y-[30px] justify-between md:flex-row'>
               <div className='flex flex-col items-start gap-y-7'>
                    <p>Web ilovangiz holatini tanlang <i className='bx bxs-pencil'></i></p>
                    <select value={val.IlovaKuchi} onChange={(e)=>setVal({IlovaType:val.IlovaType,IlovaName:val.IlovaName,IlovaYonalishi:val.IlovaYonalishi,IlovaKuchi:e.target.value,time:val.time})} className=' rounded-md border-inherit text-gray-700' name="" id="">
                      <option value="">Tanlang</option>
                      <option value="staik">Qidiruv tizimi uchun </option>
                      <option value="dinamik">Tez ishlashi keraik</option>
                    </select>
                    </div>

                    <div className='flex flex-col items-start gap-y-7'>
                        <p>Web ilovangiz qancha vaqtda tayyor bo'lishi kerak <i className='bx bxs-pencil'></i></p>
                   <input value={val.time} onChange={(e)=>setVal({IlovaType:val.IlovaType,IlovaName:val.IlovaName,IlovaYonalishi:val.IlovaYonalishi,IlovaKuchi:val.IlovaKuchi,time:e.target.value})} type="number" placeholder='Time' required className='text-gray-800 rounded-lg outline-none' />
                  </div>

                  <div>
                    <p className='mb-[25px]'>Buyurtmani tasdiqlash <i className='bx bx-check' ></i></p>
                    <button onClick={()=>func()} className="continue-application">
                      <div>
                          <div className="pencil"></div>
                          <div className="folder">
                              <div className="top">
                                  <svg viewBox="0 0 24 27">
                                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                                  </svg>
                              </div>
                              <div className="paper"></div>
                          </div>
                      </div>
                      Tasdiqlah
                  </button>
                  </div>

               </div>
              </div>
          </form>
      </div>
      </div>
      <Toast className={openToast? 'fixed top-[100px] right-0':'hidden'}>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
      <i className='bx bx-check-double'></i>
      </div>
      <div className="ml-3 text-sm font-normal">Ajoyib so'rovingiz qabul qilindi</div>
      <Toast.Toggle />
    </Toast>
    </>
  )
}

export default Order
