import React from 'react'

const Home = () => {
  return (
    <div className='text-white home relative h-screen flex items-center justify-center'>
        <div>
        <h1 className='text-6xl'>Hi, <br /> I'm Tasnim Bahar Sameer</h1>
        <p className='text-xl mt-2'>Mern Stack Web Developer</p>
        
        <div className='flex gap-4 mt-3'>
        <button className='px-3 py-1 rounded-sm border-2 border-white hover:text-black hover:bg-white'>Resume</button>
        <button className='px-3 py-1 rounded-sm border-2 border-white'>Get in touch</button>
        </div>
        </div>
    </div>
  )
}

export default Home