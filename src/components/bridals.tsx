import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const cards = [
  {
    src: "/sarah2.jpg",
    title: "Stunning Views",
    category: "Nature",
    content: <p>Beautiful landscapes and scenic views from mountains.</p>,
  },
  {
    src: "/sar.jpg",
    title: "City Lights",
    category: "Urban",
    content: <p>City skyline during night with all its vibrant lights.</p>,
  },
  {
    src: "/gr.jpg",
    title: "City Lights",
    category: "Urban",
    content: <p>City skyline during night with all its vibrant lights.</p>,
  },
  {
    src: "/brid.jpg",
    title: "City Lights",
    category: "Urban",
    content: <p>City skyline during night with all its vibrant lights.</p>,
  },
  {
    src: "/ds.jpg",
    title: "City Lights",
    category: "Urban",
    content: <p>City skyline during night with all its vibrant lights.</p>,
  },
];

export default function Cards() {
  const cardItems = cards.map((card, index) => (
    <Card key={index} card={card} index={index} layout />
  ));

  return (
    <>
    <div className="-mt-30">
      <h1 className="text-3xl font-bold text-center -mt-9 lg:text-5xl md:text-4xl sm:text-2xl ">Our Bridals</h1>
    <h2 className="text-center mt-3 font-serif text-2xl text-green-400">Bridals Collection</h2>
    <main className="min-h-screen bg-white dark:bg-black">
      <Carousel items={cardItems} />
    </main>
    </div>
    </>
  );
}
