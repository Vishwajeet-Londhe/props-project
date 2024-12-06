import React from 'react'

function Card({data,handleClick}) {

  const {image,SongName,ArtistName,added} = data;

  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative mt-10'>
      <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className=''>
        <h3 className='text-xl font-semibold'>{SongName}</h3>
        <h6 className='text-sm'>{ArtistName}</h6>
      </div>
      <button onClick={handleClick} className= {`px-4 py-3 ${added === false ? "bg-orange-600" : "bg-teal-700"} absolute bottom-0 whitespace-nowrap left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full`}>{added === false ? "Add to Favourite" : "Added"}</button>
    </div>
  )
}

export default Card
