import React from 'react'
import Link from 'next/link'
import { links } from './Mylinks'

const NavLinks = () => {
    
  return (
      <>
          {links.map((link) => (
              <div key={link.id}>
                  <div className='px-3 text-left md:cursor-pointer group'>
                      <h2 className="py-7">{link.name}</h2>
                      {link.submenu && (
                          <div>
                              <div className='absolute top-16 hidden group-hover:md:block hover:md:block'>
                                  <div>
                                      <div className='py-3'>
                                          <div className='w-4 h-4 mt-1 left-3 rotate-45 absolute bg-white'></div>
                                      </div>
                                  </div>
                                  <div className='bg-white p-3.5 grid gap-5 px-20 grid-cols-3'>
                                      {link.sublinks.map((mysublinks) => (
                                          <div key={link.id}>
                                              <h2 className='text-[22px] font-bold uppercase'>{ mysublinks.Head}</h2>
                                              {mysublinks.sublink.map(slink => (
                                                  <li key={link.id} className='text-md text-gray-600 my-2.5'>
                                                      <Link href={slink.link}
                                                      className='hover:text-purple-400'
                                                      >{slink.name}</Link>
                                                  </li>
                                              ))}
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>
                  {/* mobile menu */}
                  <div>
                      {link.sublinks.map((slinks) => (
                          <div>
                              <div>
                                  <h1 className='py-4 pl-7 font-semibold md:pr-0 pr-5'>{slinks.Head}</h1>
                                  <div>
                                      {slinks.sublink.map((slink) => (
                                          <li className='py-3 pl-14'>
                                              <Link href={slink.link}>{ slink.name}</Link>
                                          </li>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
            </div>
        ))}
      </>
  )
}

export default NavLinks