"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLinks from './NavLinks'
import Button from '../Button'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaWindowClose } from "react-icons/fa";



const navbar = () => {
  const[open, setOpen]= useState(false)
  return (
    <nav className='bg-white'>
      <div className='flex items-center font-bold justify-around font-[quicksand]'>
        <div className='z-50 md:w-auto w-full p-5 flex justify-between cursor-pointer'>
          <p>Logo Here</p>
          <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
            {open?<FaWindowClose/>:<TfiMenuAlt/>}
          </div>
        </div>
        
        <ul className='md:flex hidden items-center gap-8'>
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">Home</Link>
          </li>
          <NavLinks/>
        </ul>
        <div className='md:block hidden'>
          <Button></Button>
        </div>
        {/* mobile menu */}
        <ul className={`
        md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-5 duration-500 ${open?'left-0':'bottom-[-100%]'}
        `}>
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">Home</Link>
          </li>
          <NavLinks />
          <div className='md:hidden py-5'>
            <Button></Button>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default navbar