import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from 'next/image'


export default function Slider() {
  return (
    <>
   <div className='flex items-center justify-center mt-5'>
  <h1 className='text-center font-semibold lg:text-4xl text-2xl md:text-3xl sm:text-xl'>
    Explore Our Services Quality
    <span className='block mt-4 text-3xl font-normal text-green-400 lg:text-4xl md:text-3xl sm:text-xl'>
      An Unparalled Salon Experience
    </span>
  </h1>
</div>


  <div className="text-bold text-3xl mt-5 sm:h-auto bg-black">
  <Carousel className="m-4">
    <CarouselContent>
      {["/rt.jpg", "/gr.jpg", "/c.jpg"].map((src, index) => (
        <CarouselItem
          key={index}
          className="md:basis-1/2 lg:basis-1/3  flex justify-center items-center"
        >
          <div className="w-[700px] h-[400px]  overflow-hidden">
            <Image
              src={src}
              alt={`Image ${index}`}
              width={700}
              height={400}
              className="rounded-3xl w-full h-full "
            />
            
          </div>
          
        </CarouselItem>
        
      ))}
    </CarouselContent>
    
  </Carousel>
</div>

    </>
  )
}