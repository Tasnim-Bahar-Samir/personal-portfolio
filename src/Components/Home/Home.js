import React from 'react'
import resume from '../../assets/resume/Tasnim Bahar Samir.Resume.pdf'
import NavBar from '../Navbar/NavBar'

const Home = () => {
  return (
    <div className='banner'>
    <NavBar/>
    <div className='text-white home relative h-full flex items-center justify-center p-4'>
        <div>
        <h1 className='text-6xl'>Hi, <br /> I'm <span className='main-color font-bold'>Tasnim Bahar Samir</span></h1>
        <p className='text-2xl mt-2 font-semibold'>Mern Stack Web Developer</p>
        
        <div className='flex gap-4 mt-3'>
        <a href={resume} download className='px-3 py-1 rounded-sm border-2 border-white hover:text-black hover:bg-white'>Download Resume</a>
        <a href='#contact' className='px-3 button py-1 rounded-sm border-2 border-white'>Get in touch</a>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Home