import React from 'react'

const Homepage = () => {
  return (
    <>
     <div className="hero w-full h-dvh">
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
                        <span class="text">Create With Us</span>
                    </button> */}
                    <button className='btn'> 
                      <p>Create With Us</p>
                  </button>
                  </div>
            </div>
          </div>
      </div> 
    </>
  )
}

export default Homepage
