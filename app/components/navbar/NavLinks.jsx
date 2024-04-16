import React from 'react'
import Link from 'next/link'
const NavLinks = () => {
    const links = [
        {
            name: "Men", id: 1, submenu: true, sublinks: [
                {
                    Head: "TopWear",
                    sublink: [
                        {name:"T-Shirt", link:"/", id:1.1},
                        {name:"Casual Shirts", link:"/", id:1.2},
                        {name:"Formal Shirts", link:"/", id:1.3},
                        {name:"Regular Fit", link:"/", id:1.4},
                    ]
            }
        ] },
        { name: "Women", id: 2 },
        { name: "Kid's", id: 3 }]
  return (
      <>
          {links.map((link) => (
              <div key={link.id}>
                  <div className='px-3 text-left md:cursor-pointer'>
                      <h2 className="py-7">{link.name}</h2>
                      {link.submenu && (
                          <div>
                              <div className='absolute top-20'>
                                  <div>
                                      <div className='py-3'>
                                          <div className='w-4 h-4 mt-1 left-3 rotate-45 absolute bg-white'></div>
                                      </div>
                                  </div>
                                  <div className='bg-white p-3.5'>
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
            </div>
        ))}
      </>
  )
}

export default NavLinks