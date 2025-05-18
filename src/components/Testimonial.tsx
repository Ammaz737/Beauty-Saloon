import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black font-semibold mt-10">
        <h1 className="text-3xl hover:underline-offset-4 lg:text-5xl md:text-4xl sm:text-2xl sm:-mb-25">Testimonials</h1>
        <main className="min-h-screen p-8 w-full object-cover lg:mt-10 sm:mt[-30] ">
      {/* Other content */}
      <AnimatedTestimonials 
        testimonials={[
          {
            name: "Sarah khan",
            designation: "Pakistani Actress",
            quote: "Bohat zabardast service thi, highly recommend karta hoon.",
            src: "ds.jpg",
          },
          {
            name: "Sarah khan",
            designation: "Pakistani Actress",
            quote: "Bohat zabardast service thi, highly recommend karta hoon.",
            src: "da.jpg",
          },
          {
            name: "Sarah khan",
            designation: "Pakistani Actress",
            quote: "Staff friendly tha aur salon bohat clean tha.",
            src: "/db.jpg",
          },
          {
            name: "Sarah khan",
            designation: "Pakistani Actress",
            quote: "Staff friendly tha aur salon bohat clean tha.",
            src: "/df.jpg",
          },
        ]}
      />
    </main>
    </div>
  );
}
