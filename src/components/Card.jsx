import React from 'react'

function Card() {
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md'>
      <div className='w-20 h-20 bg-orange-600 rounded-md'></div>
      <div className=''>
        <h3 className='text-xl font-semibold'>Song Name</h3>
        <h6 className='text-sm'>Artist Name</h6>
      </div>
    </div>
  )
}

export default Card
