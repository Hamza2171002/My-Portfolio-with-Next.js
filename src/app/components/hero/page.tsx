"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import profilepic from "../../../../public/myPic.png"

const Hero = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-around h-screen mb-40 sm:mt-20">
          <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:ml-10 text-center lg:text-left'>
            <h1 className='text-white text-2xl pt-20 sm:pt-36'>Hello,</h1>
            <h1 className='text-white text-4xl sm:text-5xl font-bold'>I&apos;m Muammad<span>Hamza</span></h1>
            <div className='font-bold text-white text-xl sm:text-2xl mt-4 '><Typewriter
            options={{
            strings: ["FrontEnd Web Developer"],
            autoStart: true,
            loop: true,
            }} /> </div>

            <p className='text-white text-sm sm:text-base mt-4 max-w-md'>I am committed to mastering the world&apos;s New Technologies , Cloud Computing and Artificial Intelligence.
            My goal is to innovate and contribute to the future of technology...</p>
            <div className=' sm:flex  w-[300px] sm:w-[500px] gap-6'>
            <div className='md:hidden text-[24px]'></div>
                  <a href="https://github.com/Hamza2171002" target='_blank' className='flex bg-transparent text-white items-center justify-center w-40 rounded-lg border-2 outline-none py-2 mt-14 font-semibold hover:bg-white hover:text-black hover:scale-90 duration-500 outline'>
                  GitHub</a>
                  
                  <div className='md:hidden text-[24px]'></div>
                  <a href="https://www.linkedin.com/in/muhammad-hamza-03b7bb2b4/" target='_blank' className='flex bg-transparent text-white items-center justify-center w-40 rounded-lg border-2 outline-none py-2 mt-14 font-semibold hover:bg-white hover:text-black hover:scale-90 duration-500 outline'>
                  LinkedIn</a>
                  
            </div> 
          </div>
        
        
        <div>
          <Image src={profilepic} alt="My Profile Picture" width={300} height={300} className='w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-lg shadow-green-600'/>
        </div>
      </section>
    </div>
  )
}

export default Hero