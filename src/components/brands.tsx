import React from 'react'

export default function Brands() {
  return (
    <div className='mt-30 px-4'>
      <h1 className='text-4xl sm:text-6xl font-bold text-center'>Products</h1>
      <p className='text-center text-green-400 text-xl sm:text-3xl mt-3'>
        Reliable Recommended Products
      </p>

      <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-10'>
        {["MAC", "Dior", "REVLON", "OLAY", "AVEDA"].map((brand, index) => (
          <h1
            key={index}
            className='min-w-[80px] w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center rounded-full border-4 border-white text-white text-sm sm:text-lg font-semibold shadow-lg animate-brand'
          >
            {brand}
          </h1>
        ))}
      </div>
    </div>
  )
}
