import React, { useState } from 'react'
import { FaToggleOff, FaToggleOn, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import './Navbar.css'

const NavBar = () => {
    const [open,setOpen] = useState(false)
  return (
    <div className='relative nav'>
        <div
      className={`flex items-center justify-between text-white bg-slate-900 px-2 md:px-8 shadow-xl mb-2 md:py-5 py-2"
      }`}
    >
      <div className="">
        <a
          href='#Home'
          className="normal-case text-xl md:text-3xl font-mono flex items-center"
        >
          {/* <img
            className="text-primary w-7 md:w-10 rounded-sm"
            src={logo}
            alt=""
          /> */}
          <p>
            Code<span className=" text-orange-600">Lab</span>
          </p>
        </a>
      </div>
      <div onBlur={()=>setOpen(false)} className="flex gap-4 lg:gap-6 pr-5 text-md">
        <div 
          className={` z-10 w-full bg-slate-900 flex flex-col items-center md:flex-row gap-4 lg:gap-6 absolute md:static transition-all ease-in-out left-0 ${
            open ? "top-12 " : "top-[-150px]"
          }`}
        >
          <a
            onClick={() => setOpen(false)}
            className="hover:text-orange-600"
            href='#projects'
          >
            Home
          </a>
          <a
            href='#'
            onClick={() => setOpen(false)}
            className="hover:text-orange-600"
            to="/faq"
          >
            Projects
          </a>
          <a
            onClick={() => setOpen(false)}
            className="hover:text-orange-600"
            to="/blog"
          >
            Contact
          </a>
        </div>
        {open ? (
          <ImCross
            onClick={() => setOpen(!open)}
            className="h-4 w-4 md:hidden"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setOpen(!open)}
            className="h-6 w-6 md:hidden"
          />
        )}
        
      </div>
    </div>
    </div>
  )
}

export default NavBar