import Link from 'next/link';
import React from 'react'
import Navlinks from "./navlink"
import Button from "../Button"

const navbar = () => {
  return (
      <nav className="bg-white">
          <div className="flex items-center font-medium justify-around h-20">
                <div className="text-[20px] font-bold font-[Quicksand]">Logo Here</div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-[quicksand] font-bold">
                    <li>
                          <Link href="/" className="py-7 px-3 inline-block">
                              Home
                          </Link>
                    </li>
                    <Navlinks/>
              </ul>
              <div className="md:block hidden">
                  <Button></Button>
              </div>
          </div>
    </nav>
  )
}

export default navbar;