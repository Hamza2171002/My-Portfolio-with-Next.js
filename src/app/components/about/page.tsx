import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <div>
      <section className='mt-[400px] sm:mt-72'>
        <h1 className="text-4xl text-white text-center mb-10"><span>AB</span>OUT</h1>
        <p className='text-white text-xl text-center px-20 font-serif'>I am passionate about pursuing a career in <span>Cloud Computing and <br/>Artificial intelligence (AI)</span> technologies. I have a strong foundation in <span>HTML, CSS, JavaScript, Typescript, Tailwind CSS, NodeJs, React</span> and <span>NetxJs</span> and I&apos;m continuously expanding my knowledge and skills in these areas.I am Enthusiastic about <span>Cloud Engineering & GenAI </span> exploring and mastering various cloud services and solutions..</p>
        <div className='text-white flex flex-col sm:flex-row sm:justify-around text-center mt-10'>
          <article>
          <h5><span>Full Name</span></h5>
          <p>Muhammad Hamza</p>
          </article>
          <article>
          <h5><span>Email</span></h5>
          <p>muhammadhamza9191@gmail.com</p>
          </article>
          <article>
          <h5><span>GitHub</span></h5>
          <Link href="https://github.com/Hamza2171002" target='_blank'>https://github.com/Hamza2171002</Link>
          </article>
          <article>
          <h5><span>Phone</span></h5>
          <p>0300-0036488</p>
          </article>
        </div>
      </section>
      
    </div>
  )
}

export default About