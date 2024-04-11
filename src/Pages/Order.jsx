import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Order = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
     <div className='parallax2 w-full pt-[100px] text-white'>
      <div className="container">
          <div className='w-full flex flex-col justify-between p-10 gap-y-[100px]'>
              <div className='flex flex-col items-start gap-y-7 w-full p-7 rounded-md border-4 text-white'  
              data-aos="fade-right" 
              data-aos-duration="1500">
                   <p>1-qadam</p>
                  <div className='w-full flex flex-col gap-y-[30px] justify-between'>
                    <div className='flex flex-col items-start gap-y-7'>
                    <p>Qanday web ilova yaratmoqchisiz <i className='bx bxs-pencil'></i></p>
                    <select className=' rounded-md border-inherit text-gray-700' name="" id="">
                      {/* <option value="">Web ilova turini tanlang</option> */}
                      <option value="staik">Statik</option>
                      <option value="dinamik">Dinamik</option>
                    </select>
                    </div>

                    <div className='flex flex-col items-start gap-y-7'>
                        <p>Web ilovangiz nomi <i className='bx bxs-pencil'></i></p>
                        <label for="myInput" className="label rounded-md">
                      <span className="label-title">web ilova nomi</span>
                      <input id="myInput" className="input rounded-md" name="text" placeholder="Type..." type="text"/>
                    </label>
                  </div>

                  <div className='flex flex-col items-start gap-y-7'>
                  <p>Web ilovangiz qanday yo'nalishda <i className='bx bxs-pencil'></i></p>
                  <select className=' rounded-md border-inherit text-gray-700' name="" id="">
                      {/* <option value="">Web ilova turini tanlang</option> */}
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
              <div className='flex flex-col items-start gap-y-7 w-full p-7 rounded-md border-4'  
              data-aos="fade-left" 
              data-aos-duration="2000">
                <p>2-qadam</p>
               <div className='w-full flex flex-col gap-y-[30px] justify-between'>
               <div className='flex flex-col items-start gap-y-7'>
                    <p>Web ilovangiz holatini tanlang <i className='bx bxs-pencil'></i></p>
                    <select className=' rounded-md border-inherit text-gray-700' name="" id="">
                      <option value="staik">Qidiruv tizimi uchun </option>
                      <option value="dinamik">Tez ishlashi keraik</option>
                    </select>
                    </div>

                    <div className='flex flex-col items-start gap-y-7'>
                        <p>Web ilovangiz qancha vaqtda tayyor bo'lishi kerak <i className='bx bxs-pencil'></i></p>
                        <label for="myInput" className="label rounded-md">
                      <span className="label-title text-red-600">minimal 10 kun !</span>
                      <input id="myInput" className="input rounded-md" name="text" placeholder="Vaqt chegarasi..." type="text"/>
                    </label>
                  </div>

                  <div>
                    <p className='mb-[25px]'>Buyurtmani tasdiqlash <i className='bx bx-check' ></i></p>
                    <button className="continue-application">
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
          </div>
      </div>
      </div>
    </>
  )
}

export default Order
