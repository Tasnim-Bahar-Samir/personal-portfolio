import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nfcpj2h', 'template_o8jmm9l', form.current, 'ZUW9TzzxieswQrWmB')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Message sent succesfully")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contact' className='relative mx-10'>
       <h1 className='text-5xl text-center text-white font-semibold mt-10 mb-5'>Stay In Touch</h1>
       <form ref={form} onSubmit={sendEmail} className='p-5 md:p-10 rounded-lg bg-slate-800 my-4 text-white'>
        <div className='md:flex gap-2'>
        <input type="text" name='user_name' className='w-full p-2 rounded-lg bg-transparent basis-1/2 border' placeholder='Your Name' required/>
        <input type="text" name='user_email' className='w-full p-2 rounded-lg bg-transparent basis-1/2 border' placeholder='Your Email'required/>
        </div>
        <textarea  className='w-full p-5 rounded-lg bg-transparent basis-1/2 border mt-5' name="message" id="" cols="30" rows="10" placeholder='Message'required></textarea>
        <button type='submit' className='w-full text-black py-2 rounded-md bg-white '>Send Message</button>
       </form>
    </div>
  )
}

export default Contact