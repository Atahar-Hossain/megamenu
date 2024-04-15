import React from 'react'

const navlink = () => {
    const links = [
        { name: 'Men' , key:1},
        { name: 'Women' ,key:1},
        {name:"Kid's",key:1}
    ]
  return (
      <>
          {
              links.map(link =>  (
                  <div>
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