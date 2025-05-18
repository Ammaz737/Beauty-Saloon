'use client';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const projects = [
  {
    title: "Radiance Ritual – $20",
    description:
      "Enjoy a premium facial that deeply hydrates, smooths, and brightens your skin. Walk out with a fresh, radiant glow that lasts.",
    link: "",
  },
  {
    title: "Luxe Hair Revival – $30",
    description:
      "Nourish your hair with protein therapy, a stylish cut, and a flawless finish. Flat 30% off for a limited time only.",
    link: "",
  },
  {
    title: "Henna Elegance – $15",
    description:
      "Delicate and detailed henna for hands and feet. Ideal for weddings, events, or simply a touch of tradition.",
    link: "",
  },
  {
    title: "Royal Duo Glow – $25",
    description:
      "A pampering combo of facial and manicure designed to refresh your skin and hands with elegance and care.",
    link: "",
  },
  {
    title: "Serenity Escape – $40",
    description:
      "Relax with our 60-minute full-body therapy. Detoxify, refresh, and let go of stress in pure calming bliss.",
    link: "",
  },
  {
    title: "Bridal Luxe Signature – $100",
    description:
      "Glow on your big day with flawless makeup, stunning hair, and perfect dupatta styling. Advance booking required.",
    link: "",
  },
];

export default function PricingPackages() {
  return (
    <div className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
      <h1 className='text-center font-semibold text-3xl'>Our Packages</h1>
      <p className='text-center text-xl mt-3 text-green-400'>Choose the perfect package that suits your beauty needs.</p>
      <TracingBeam>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </TracingBeam>
    </div>
  );
}