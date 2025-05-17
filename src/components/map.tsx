"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export default function Pin() {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-white mt-6 sm:mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
            Follow the Map <br /> & Visit Our <span className="text-green-400">Location</span>
          </h1>
        </div>


        
        <div className="md:w-1/2 flex justify-center md:justify-end bg-black ">
          <PinContainer
            title="Mantasha Beauty Parlor"
            href="https://www.google.com/maps/place/MANTASHA+Beauty+Parlor+%26+Training+Center/"
            className="sm:w-[250px] lg:w-[400px] h-[350px] bg-black"
            containerClassName="w-[400px] h-[300px]"
          >
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.7435129206756!2d69.00507327403726!3d25.513599218815123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394eaff2143f19cb%3A0xbb3cbcb9947207aa!2sMANTASHA%20Beauty%20Parlor%20%26%20Training%20Center!5e0!3m2!1sen!2sfr!4v1747133814602!5m2!1sen!2sfr"
              width="280"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="sm:w-[200px] lg:w-[400px] h-[320px]"
            ></iframe>
            <h1 className="text-lg font-bold text-green-400 mt-3">Beauty Saloon</h1>
            
          </PinContainer>
        </div>
        
      </div>
    </div>
  );
}
