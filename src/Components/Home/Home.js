import React from 'react'
import resume from '../../assets/resume/Tasnim Bahar Samir.Resume.pdf'

const Home = () => {
  return (
    <div className='text-white home relative h-screen flex items-center justify-center'>
        <div>
        <h1 className='text-6xl'>Hi, <br /> I'm Tasnim Bahar Sameer</h1>
        <p className='text-xl mt-2'>Mern Stack Web Developer</p>
        
        <div className='flex gap-4 mt-3'>
        <a href={resume} download className='px-3 py-1 rounded-sm border-2 border-white hover:text-black hover:bg-white'>Download Resume</a>
        <a href='#contact' className='px-3 py-1 rounded-sm border-2 border-white'>Get in touch</a>
        </div>
        </div>
    </div>
  )
}

export default Home