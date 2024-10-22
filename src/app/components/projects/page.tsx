import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
    <section className='mt-60'>
      <h1 className='text-white text-4xl text-center mt-10 animate-bounce duration-500'><span>My</span> Pro<span>je</span>cts</h1>
      <div className='text-white justify-items-center mt-40 grid grid-cols-2 md:grid-cols-3 text-center'>
      
       <div className="items-center justify-center p-4">
      <Image
        src="/Countdown.png" alt="Countdown" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500 "/>
        <a href="https://countdown-timer-using-next-js.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Count Down Timer</h3></a>
       </div> 

       <div className=" items-center justify-center p-4">
      <Image 
        src="/resumebuilder.webp" alt="resumebuilder" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500 "/>
        <a href="https://milestones-1-weld.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Interactive Resume Builder</h3></a>
       </div>

       <div className=" items-center justify-center p-4">
      <Image
        src="/word-counter.jpg" alt="Word Counter" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://github.com/Hamza2171002/cli-word-counter" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Word Counter</h3></a>
      </div>

        <div className=" items-center justify-center p-4">
      <Image
        src="/Admission-form.jpg" alt="Admission form" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://admission-form-create-with-html.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Admission Form</h3></a>
      </div> 

      <div className=" items-center justify-center p-4">
      <Image
        src="/quiz.jpg" alt="Quiz system" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://github.com/Hamza2171002/Quiz-Project" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Quiz system</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/coin-toss.png" alt="coin toss" width={300} height={300}  className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://coin-toss-game-bay.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Coin Toss Game</h3></a>
      </div> 

      <div className=" items-center justify-center p-4">
      <Image
        src="/adventureGame.jpg" alt="adventure game" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://github.com/Hamza2171002/Adventure-Game" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Adventure Game</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/student-management.webp" alt="student management system" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://github.com/Hamza2171002/Student-Management-System" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Student Management System</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/currency_converter.jpg" alt="currency convertor" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://currency-converter-by-html-css.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Currency Convertor</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/To-Do_List_App.webp" alt="todo app" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://to-do-list-using-react-4orw.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>To-Do List App</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/Atm-Machine.jpg" alt="atm machine" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://github.com/Hamza2171002/ATM-Machine-using-TypeScript" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>ATM Machine</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/number-gussing.jpg" alt="number guessing game" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://github.com/Hamza2171002/cli-number-guessing-game" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Number Guessing Game</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/calculator.jpg" alt="calculator" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-green-300 hover:scale-105 duration-500"/>
        <a href="https://simple-calculator-using-html-and-css.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Calculator</h3></a>
      </div>
      
      </div>
      
        </section>
    </div>
  )
}

export default Project