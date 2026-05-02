'use client'

import { useSearchParams } from 'next/navigation'

export default function PageContent() {
  const params = useSearchParams()

  const name = params.get('name') ?? 'Flovia Properties'
  const location = params.get('location') ?? 'Karnal'
  const phone = '919999999999'

  const whatsappLink = `https://wa.me/${phone}?text=Hi, I am interested in plots in ${location}`

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A]">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            className="w-full h-full object-cover"
            alt="Property"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Premium Plots in {location}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            High return investment opportunities with trusted developers
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href={whatsappLink} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold">
              WhatsApp Now
            </a>
            <a href={`tel:+${phone}`} className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Available Plots in {location}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {['100 sq yd', '150 sq yd', '200 sq yd'].map((size) => (
            <div key={size} className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{size}</h3>
              <p className="text-gray-500 mb-3">Prime location plots</p>
              <p className="font-semibold text-blue-600">Price on call</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Project Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/images/image1.webp",
            "/images/image2.jpg",
            "/images/image3.jpeg",
            "/images/image4.webp"
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Property ${i}`}
                className="w-full h-full aspect-[4/3] object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Get More Details
        </h2>

        <form
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault()
            alert('Demo form submitted')
          }}
          className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm space-y-4"
        >
          <input className="w-full border p-3 rounded-lg" placeholder="Your Name" />
          <input className="w-full border p-3 rounded-lg" placeholder="Phone Number" />
          <textarea className="w-full border p-3 rounded-lg" placeholder="Message" />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
            Submit
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] text-white text-center py-6">
        <p>© {name} - All Rights Reserved</p>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={whatsappLink}
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        Chat
      </a>
    </div>
  )
}