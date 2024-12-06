import React from 'react'
import colorlaga from "./style.module.css";
function Navbar({data}) {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
      <h3 className={colorlaga.a}>Orange</h3>
      <div className='flex p-2 px-2 bg-orange-600 text-white rounded-md text-sm gap-3'>
        <h3>Favourites</h3>
        <h4>{data.filter(item=>item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar
