"use client";

export default function Home() {
  const whatsappLink = "https://wa.me/917015505745";

  return (
    <main className="bg-[#eef2f7] text-[#0f172a]">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 md:px-20 py-4 bg-[#eef2f7]/80 backdrop-blur-md sticky top-0 z-20 border-b border-[#e5e7eb]">
        <h1 className="font-bold text-lg">Flovia Properties</h1>
        <a
          href={whatsappLink}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Contact
        </a>
      </header>

      {/* HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="/images/imageHero.jpg"
            className="w-full h-full object-cover"
            alt="Property"
          />
          <div className="absolute inset-0 bg-[#0f172a]/50"></div>
        </div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#f9fafb] mb-6">
            Premium Plots in Karnal
          </h1>
          <p className="text-lg md:text-xl text-[#e5e7eb] mb-8">
            Best investment opportunity
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={whatsappLink}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              WhatsApp
            </a>
            <a
              href="tel:+917015505745"
              className="bg-[#cbd5e1] hover:bg-[#94a3b8] px-6 py-3 rounded-xl font-semibold"
            >
              Call
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="py-20 px-6 md:px-20 bg-[#f8fafc]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Available Plots
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["100 sq yd", "150 sq yd", "200 sq yd"].map((size) => (
            <div
              key={size}
              className="bg-[#ffffff] border border-[#e2e8f0] shadow-md rounded-2xl shadow-sm p-8 text-center border border-[#e5e7eb]"
            >
              <h3 className="text-xl font-semibold mb-3">{size}</h3>
              <p className="text-gray-500 mb-4">Prime location plots</p>
              <p className="font-semibold text-blue-600">Price on call</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#eef2f7]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Project Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10">
          {[
            "/images/image1.webp",
            "/images/image2.jpg",
            "/images/image3.jpeg",
            "/images/image4.webp",
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Property ${i}`}
                className="w-full h-[260px] md:h-[380px] object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 px-6 md:px-20 bg-[#f8fafc]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get Price Details
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Enquiry submitted!");
          }}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-3 rounded-xl border border-[#d1d5db]"
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            className="w-full p-3 rounded-xl border border-[#d1d5db]"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-xl border border-[#d1d5db]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
          >
            Get Price Details
          </button>
        </form>
      </section>

      {/* TRUST */}
      <section className="py-16 px-6 md:px-20 bg-[#e2e8f0]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-8">
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-500">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Verified</h3>
            <p className="text-gray-500">Properties</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Easy</h3>
            <p className="text-gray-500">Site Visits</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#cbd5f5] mt-0">
        <div className="max-w-6xl mx-auto px-6 md:px-20 py-10 grid md:grid-cols-3 gap-8 text-sm">

          <div>
            <h3 className="font-semibold mb-3 text-lg">Flovia</h3>
            <p className="text-gray-600">
              Premium real estate opportunities with trusted developers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-gray-600">+91 99999 99999</p>
            <p className="text-gray-600">info@flovia.com</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Location</h3>
            <p className="text-gray-600">Karnal, Haryana</p>
          </div>

        </div>

        <div className="text-center text-xs text-gray-500 pb-6">
          © 2026 Flovia. All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg font-semibold"
      >
        WhatsApp
      </a>

    </main>
  );
}