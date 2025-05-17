import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative h-130 flex items-center justify-center overflow-hidden rounded-3xl m-6  '>
      <Image 
        src="/saloon.jpg"
        alt="A beautiful saloon"
        width={500}
        height={500}
        className='w-full h-130 object-cover'
      />

      <div className='absolute bg-black/50 inset-0 flex items-center justify-center'>
        <h1 className=' text-white text-center text-6xl sm:text-3xl font-bold'>
        Beauty Club <span className='flex justify-bottom items-bottom text-3xl mt-5 '>Hair Extension & Colour Specialists</span>
      </h1>
      </div>
     
    </div>
  )
}

export default Banner
