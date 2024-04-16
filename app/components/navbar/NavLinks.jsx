import React from 'react'

const NavLinks = () => {
    const links=[{name:"Men", id:1},{name:"Women", id:2}, {name: "Kid's", id:3}]
  return (
      <>
          {links.map((link) => (
              <div key={link.id}>
                  <div className='px-3 text-left md:cursor-pointer'>
                      <h2 className="py-7">{ link.name}</h2>
                  </div>
            </div>
        ))}
      </>
  )
}

export default NavLinks