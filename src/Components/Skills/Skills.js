import React from 'react'
import reactLogo from '../../assets/skills/react1.png'
import mongodbLogo from '../../assets/skills/mongodb.png'
import nodeLogo from '../../assets/skills/node.png'
import htmlLogo from '../../assets/skills/html-1.svg'
import cssLogo from '../../assets/skills/CSS3_logo.svg.png'
import javaScriptLogo from '../../assets/skills/Js.png'
import bootstrapLogo from '../../assets/skills/bootstrap-logo.svg'
import tailwindLogo from '../../assets/skills/tailwind.png'
const skills = [
    {
        _id: 1,
        name:'HTML',
        img: htmlLogo
    },
    {
        _id: 2,
        name:'CSS',
        img: cssLogo
    },
    {
        _id: 3,
        name:'JavaScript',
        img: javaScriptLogo
    },
    {
        _id: 4,
        name:'React Js',
        img: reactLogo
    },
    {
        _id: 5,
        name:'Node Js',
        img: nodeLogo
    },
    {
        _id: 6,
        name:'MongoDB',
        img: mongodbLogo
    },
    {
        _id: 7,
        name:'Bootstrap',
        img: bootstrapLogo
    },
    {
        _id: 8,
        name:'Tailwind',
        img: tailwindLogo
    },
    
]

const Skills = () => {
  return (
    <div className='text-white md:mx-10 mx-4 mb-14'>
        <h1 className='text-4xl text-center my-5 mt-14 '>Skills</h1>
        <div className='grid grid-cols-4 md:gap-8 gap-2'>
            {
                skills.map(skill => <div className='bg-slate-800 text-white p-3 rounded-md text-center'>
                    <img src={skill.img} className = 'md:w-24 md:h-24 w-16 h-16 mx-auto' alt="" />
                    <h5 className='md:text-lg text-[12px] font-semibold mt-2'>{skill.name}</h5>
                </div> )
            }
        </div>
    </div>

  )
}

export default Skills