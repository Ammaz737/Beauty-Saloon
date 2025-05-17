
import Banner from "@/components/Hero";
import Slider from "@/components/service";
import Testimonial from "@/components/Testimonial";
import Cards from "@/components/bridals";
import Pin from "@/components/map";
import Brands from "@/components/brands";

import {FeaturesSectionDemo} from "@/components/feature";
import Experts from "@/components/experts";


export default function Home() {
  return (
    
         <>

         <Banner />
         <Slider />
         <Testimonial />
         <Experts />
          <Cards />
          <FeaturesSectionDemo />
          <Pin />
          <Brands/>
          
         </>
  );
}
