import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './Pages/Homepage'
import Order from './Pages/Order'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  let torfs=JSON.parse(localStorage.getItem('torf')) ? false : true
  let [torf,setTorf]=useState(true)
  let func=()=>{
    setTimeout(()=>{
      setTorf(false)
      localStorage.setItem('torf',JSON.stringify(torf))
    },3000)
  }
  useEffect(() => {
    if (torfs) {
      func()
    }
    AOS.init();
  }, [torf])

  return (
   <>
    {
      torfs ?<div className=' w-full h-dvh fixed bg-slate-700 text-white top-0 left-0 flex flex-col items-center justify-center text-[50px]'>
      <p data-aos="fade-up-right" data-aos-duration='3000'>Salom Qadirli Mijoz <i className='bx bx-smile' ></i></p>
      <p  data-aos="fade-up-left" data-aos-duration='3000'>Ilovamizga xush kelibsiz</p>
 </div>:<BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/order' element={<Order/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    }
   
   </>
  )
}

export default App
