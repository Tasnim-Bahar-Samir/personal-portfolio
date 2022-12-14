import React from 'react'
import resume from '../../assets/resume/Tasnim Bahar Samir.Resume.pdf'
import NavBar from '../Navbar/NavBar'
import Typewriter from 'typewriter-effect';
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai';
const Home = () => {
  return (
    <div className='h-full'>
    <div className='text-white home relative  banner flex items-center justify-center p-4'>
        <div>
          <h5 className='text-2xl my-2'>Hi There,</h5>
        <h1 className='text-5xl'>I'm <span className='text-orange-600 font-bold'>Tasnim Bahar Samir</span></h1>
        {/* <p className='text-2xl mt-2 font-semibold'>Mern Stack Web Developer</p> */}
        <div className='my-10'>
          <span className='text-2xl text-orange-600 font-semibold'><Typewriter
            options={{
              strings: [
                "I'm Web Developer.",
                "I'm ReactJs Developer.",
                "I'm Mern Stack Developer."
              ],
              autoStart: true,
              loop: true,
            }}
          /></span>
        </div>
        
        <div className='flex gap-4 mt-3'>
        <a href={resume} download className='px-3 py-1 rounded-sm border-2 border-white hover:text-black hover:bg-white'>Download Resume</a>
        <a href='#contact' className='px-3 button py-1 rounded-sm bg-orange-600 border-white'>Get in touch</a>
        </div>
        </div>
      <div className=' hidden absolute left-14 bottom-40 md:flex flex-col items-center gap-5 transition-all social-icons text-orange-500'>
      <a className='text-2xl hover:text-orange-600' href="https://github.com/Tasnim-Bahar-Samir" target='_blank'><BsGithub/></a>
        <a className='text-2xl hover:text-orange-600' href="https://www.linkedin.com/in/tasnim-bahar-sameer/" target='_blank'><BsLinkedin/></a>
        <a href='https://www.facebook.com/profile.php?id=100045078463296' target='_blank' className='text-2xl hover:text-orange-600'><BsFacebook/></a>
    </div>

    <div className='hidden md:block absolute right-14 bottom-44 text-orange-500 cursor-pointer'>
      <a href='#contact' className='flex text-sm rotate-90 items-center'>Scroll Down <AiOutlineArrowRight className='ml-3'/></a>
    </div>
    </div>
    
    </div>
  )
}

export default Home