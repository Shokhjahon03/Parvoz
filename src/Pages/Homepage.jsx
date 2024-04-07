import React from 'react'
import { ReactTyped } from "react-typed";
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
                  <ReactTyped className='text-white text-[30px]' strings={["Check out the full app to get to know us <i class='bx bx-down-arrow-alt text-red-500'></i>"]} typeSpeed={50} />
                  </div>
            </div>
          </div>
      </div> 
      <main className=' relative'>
        <section className='www w-full h-dvh'>
                    <div className="container">
                      <div className='w-full'>

                      </div>
                    </div>
        </section>
        <section className='h-dvh'>
        <div className='parallax h-full'>

</div>
        </section>
      </main>
      
    </>
  )
}

export default Homepage
