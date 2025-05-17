import { AnimatedTooltip } from "@/components/ui/animated-tooltip";


const teamMembers = [
  {
    id: 1,
    name: "George",
    designation: "Hair Stylist",
    image: "/Expert1.jpg",
  },
  {
    id: 2,
    name: "Sam",
    designation: "Makeup Artist",
    image: "/Experts2.jpg",
  },
  {
    id: 3,
    name: "Alex Smith",
    designation: "Nail Technician",
    image: "/Experts3 .jpg",
  },
  {
    id: 4,
    name: "George",
    designation: "Hair Stylist",
    image: "/Expert1.jpg",
  },
  {
    id: 5,
    name: "Sam",
    designation: "Makeup Artist",
    image: "/Experts2.jpg",
  },
  {
    id: 6,
    name: "Alex Smith",
    designation: "Nail Technician",
    image: "/Experts3 .jpg",
  },
];



export default function Experts() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 -mt-60">
      <h1 className="text-4xl font-bold mb-4">Meet Our Experts</h1>
      <p className="text-green-400 mb-8 text-center text-lg max-w-md">
        Our professional beauty team is here to give you the best service.
      </p>
      <div className="flex gap-6">
        <AnimatedTooltip items={teamMembers} />
      </div>
    </main>
  );
}
