import { TracingBeam } from '@/components/ui/tracing-beam'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="px-4 sm:px-6 py-10 sm:py-14 max-w-7xl mx-auto">
      <TracingBeam>
        <div className="space-y-24">

          {/* Who We Are */}
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">Who We Are</h2>
              <p className="text-white text-base sm:text-lg">
                At <strong>Glow & Grace Beauty Salon</strong>, we believe that beauty is confidence. Our expert stylists, makeup artists, and skincare professionals provide top-notch services tailored to your needs.
              </p>
              <p className="mt-4 text-white text-base sm:text-lg">
                Whether it's a relaxing facial or a stunning bridal makeover, we’re here to make you feel radiant and refreshed.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                src="/saloon1.jpg"
                alt="Our Beauty Team"
                width={600}
                height={400}
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
          </section>

          {/* Services */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">What We Offer</h2>
              <ul className="list-disc list-inside text-white text-base sm:text-lg space-y-2">
                <li>Hair Styling & Coloring</li>
                <li>Bridal & Party Makeup</li>
                <li>Manicure & Pedicure</li>
                <li>Skin Treatments & Facials</li>
                <li>Waxing & Threading</li>
                <li>Hair Spa & Scalp Therapy</li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                src="/db.jpg"
                alt="Beauty Services"
                width={200}
                height={200}
                className="rounded-xl shadow-md w-full h-120 "
              />
            </div>
          </section>

          {/* Our Mission */}
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">Our Mission</h2>
              <p className="text-white text-base sm:text-lg">
                Our mission is to create a safe, relaxing, and empowering environment where women feel truly beautiful. We focus on quality, hygiene, and satisfaction.
              </p>
              <p className="mt-4 text-white text-base sm:text-lg">
                At Glow & Grace, beauty is not just a service — it's an experience.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <Image
                src="/spa.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
          </section>

      

        </div>
      </TracingBeam>
    </div>
  )
}
