'use client'

import React from 'react'

const text = "Same Day Consultations & Fittings Available"

const Headers = () => {
  return (
    <div className="flex justify-center items-center h-14 bg-black px-2 sm:px-4">
      <div className="font-sans font-semibold text-xs sm:text-sm md:text-base lg:text-xl text-white flex flex-wrap justify-center">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              animation: 'fadeIn 0.05s ease forwards',
              animationDelay: `${index * 0.03}s`,
              opacity: 0,
              display: 'inline-block',
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Headers
