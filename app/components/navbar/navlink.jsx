import React from 'react'

const navlink = () => {
    const links = [
        { name: 'Men' , id:1},
        { name: 'Women',id:1},
        {name:"Kid's",id:1}
    ]
  return (
      <>
          {
              links.map(link  =>  (
                  <div key={link.key}>
                      <div>
                          <h1 className="cursor-pointer">{ link.name}</h1>
                      </div>
                  </div>
              ))
          }
      </>
  )
}

export default navlink