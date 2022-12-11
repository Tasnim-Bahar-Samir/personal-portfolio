import React from 'react'
import me from '../../assets/me/Untitled design (1).png'

const About = () => {
  return (
    <div className='text-white mx-10 '>
        <h1 className='text-4xl text-white my-3 text-center'>About Me</h1>
        <div className=' flex justify-between items-center'>
        <div className='w-2/3'>
            <p className='text-xl text-gray-200'>Hello, <span className='text-orange-600 font-semibold'>I am Tasnim Bahar Samir </span> from Dhaka, Bangladesh. <br /> I'm a passionate Web Developer. I would like to bring your attention to my strengths for the job role. I am well-versed in Html, CSS, JavaScript, React, and Firebase(Authentication). I also have good knowledge of Back-End technologies like Node, Express, and MongoDB.I am always ready to learn new technologies. <br />
            Currently looking for a job as a Web Developer. For any kind of queries feel free to contact me.
            <div className='mt-5'>
            <a href='#contact' className='border-2 border-orange-600 rounded-md px-3 py-2 '>Stay In Touch</a>
            </div>
            </p>
        </div>
        <div className='imgContainer'>
            <div className='imgCard'>
                <img className='' src={me} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default About