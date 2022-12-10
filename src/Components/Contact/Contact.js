import React from 'react'

const Contact = () => {
  return (
    <div className='relative mx-10'>
       <h1 className='text-5xl text-center text-white font-semibold mt-10 mb-5'>Stay In Touch</h1>
       <form className='p-10 rounded-lg bg-slate-800 my-4'>
        <div className='flex gap-2'>
        <input type="text" className='w-full p-2 rounded-lg bg-transparent basis-1/2 border' placeholder='Your Name'/>
        <input type="text" className='w-full p-2 rounded-lg bg-transparent basis-1/2 border' placeholder='Your Email'/>
        </div>
        <textarea className='w-full p-5 rounded-lg bg-transparent basis-1/2 border mt-5' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='w-full py-2 rounded-md bg-white '>Send Message</button>
       </form>
    </div>
  )
}

export default Contact