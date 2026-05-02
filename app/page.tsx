"use client";

export default function Home() {
  const phone = "919999999999";
  const whatsappLink = `https://wa.me/${phone}`;

  return (
    <main className="bg-[#f5f7fa] text-[#1f2937]">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="/images/imageHero.jpg"
            className="w-full h-full object-cover"
            alt="Property"
          />
          <div className="absolute inset-0 bg-[#0f172a]/60"></div>
        </div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#f9fafb] mb-4">
            Premium Plots in Karnal
          </h1>
          <p className="text-lg md:text-xl text-[#e5e7eb] mb-6">
            Best investment opportunity
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={whatsappLink}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              WhatsApp
            </a>
            <a
              href={`tel:+${phone}`}
              className="bg-[#e5e7eb] hover:bg-[#d1d5db] px-6 py-3 rounded-xl font-semibold transition"
            >
              Call
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Available Plots
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["100 sq yd", "150 sq yd", "200 sq yd"].map((size) => (
            <div
              key={size}
              className="bg-[#f9fafb] rounded-2xl shadow-sm p-6 text-center border border-[#e5e7eb]"
            >
              <h3 className="text-xl font-semibold mb-2">{size}</h3>
              <p className="text-gray-500 mb-3">Prime location plots</p>
              <p className="font-semibold text-blue-600">Price on call</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Project Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            "/images/image1.webp",
            "/images/image2.jpg",
            "/images/image3.jpeg",
            "/images/image4.webp",
          ].map((src, i) => (
            <div key={i} className="overflow-hidden">
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
      <section className="py-16 px-6 md:px-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Enquire Now
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Enquiry submitted!");
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-3 rounded-xl border border-[#d1d5db] focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            className="w-full p-3 rounded-xl border border-[#d1d5db] focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-xl border border-[#d1d5db] focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* TRUST */}
      <section className="py-16 px-6 md:px-20 bg-[#eef2f7]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-6">
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

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold"
      >
        WhatsApp
      </a>

    </main>
  );
}