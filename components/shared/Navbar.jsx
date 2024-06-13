"use client"
import React, { useState } from 'react'
import { FaBars, FaCross, FaTimes } from "react-icons/fa";


const links=[
    {
        name:'Home',
        link:'/'
    },
    {
        name:'what we offer',
        link:'/what-we-offer'
    },
    {
        name:'Our Story',
        link:'/our-story'
    },
    {
        name:'Inspiration',
        link:'/inspiration'
    },
    {
        name:'Contact',
        link:'/contact'
    },

]


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' flex justify-between items-center w-full bg-hite border-b border-gray-200 z-40 lg:border-0'>
        <span className='px-5 lg:px-0 w-40 lg:w-20 h-20 flex lg:hidden'><img src="./ShiledDMC_Logo-02.png" alt="" className=' w-full h-full' /></span>
        <span className='px-5 lg:px-0 w-40 lg:w-20 h-20 hidden lg:flex'><img src="./ShiledDMC_Logo-04.png" alt="" className=' w-full h-full' /></span>
        <div  className='px-5 lg:px-0'>
            {
                isOpen?(
                    <button onClick={() =>setIsOpen(false)} className='text-sm text-black bg-white px-4 py-4  lg:hidden rounded-full'><FaTimes /></button>
                ):(
                    <button onClick={() => setIsOpen(true)} className='text-sm text-black bg-white px-4 py-4  lg:hidden rounded-full'><FaBars /></button>
                )
            }
        </div>
        <ul className={` lg:flex lg:items-center lg:justify-between z-[1] lg:z-auto absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto ${isOpen?'top-20 lg:top-auto opacity-100':' -top-96 opacity-0'} lg:my-0 transition-all ease-in-out duration-500 lg:opacity-100`}>
            {
                links.map(link=>{
                    return(
                        <li className='mt-5 md:mt-0 mr-5 lg:mr-10 pl-5 lg:pl-0 text-gray-500 text-sm'>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    )
                })
            }
            <li className=' mt-5 md:mt-0 mr-10 text-gray-500 pl-5 lg:pl-0 mb-5 md:mb-0'><button className=' text-sm text-white bg-primary px-5 py-2 rounded'>CONTACT</button></li>
        </ul>
    </div>
  )
}

export default Navbar