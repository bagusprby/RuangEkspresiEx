import { useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Ade Pratama",
      comment:
        "Ruang Ekspresi memberikan kesempatan emas untuk mengembangkan skill dan portfolio saya. Mentor-mentornya sangat supportif!",
      rating: 5,
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      comment:
        "Program ini benar-benar mengubah cara saya melihat karir. Career talks dari para profesional sangat inspiratif dan praktis.",
      rating: 5,
    },
    {
      id: 3,
      name: "Budi Santoso",
      comment:
        "Kolaborasi dengan teman-teman di project work membuat saya belajar lebih cepat. Atmosfernya sangat kolaboratif dan fun!",
      rating: 5,
    },
    {
      id: 4,
      name: "Maya Wijaya",
      comment:
        "Extra classes yang diadakan sangat helpful untuk skill development. Instrukturnya berpengalaman dan mudah dipahami.",
      rating: 5,
    },
    {
      id: 5,
      name: "Rinto Harahap",
      comment:
        "Mentoring session membantu saya memecahkan masalah teknis yang selama ini saya hadapi. Terima kasih atas bimbingannya!",
      rating: 5,
    },
    {
      id: 6,
      name: "Dina Kusuma",
      comment:
        "Ruang Ekspresi adalah tempat yang tepat untuk mengasah kreativitas dan kompetensi. Highly recommended untuk semua mahasiswa!",
      rating: 5,
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    comment: "",
    rating: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTestimonial.name || !newTestimonial.comment) return;

    setTestimonials([
      {
        id: testimonials.length + 1,
        ...newTestimonial,
      },
      ...testimonials,
    ]);

    setNewTestimonial({
      name: "",
      comment: "",
      rating: 5,
    });
  };

  return (
    <div className="pt-28 px-8 md:px-16 pb-20">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Testimonials</h1>

      {/* TESTIMONIAL LIST */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <h3 className="font-bold text-lg ml-4">{testimonial.name}</h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {testimonial.comment}
            </p>

            <div className="flex gap-1 mt-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ⭐
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT FORM WITH PADDING */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10 mt-12 md:mt-16">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Tambahkan Testimonial
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* NAME */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Nama
            </label>
            <input
              type="text"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Masukkan nama kamu"
              value={newTestimonial.name}
              onChange={(e) =>
                setNewTestimonial({
                  ...newTestimonial,
                  name: e.target.value,
                })
              }
            />
          </div>

          {/* RATING */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <select
              className="border rounded-lg px-4 py-2 hover:cursor-pointer focus:ring-2 focus:ring-blue-400 outline-none"
              value={newTestimonial.rating}
              onChange={(e) =>
                setNewTestimonial({
                  ...newTestimonial,
                  rating: Number(e.target.value),
                })
              }
            >
              {[1, 2, 3, 4, 5].map((r) => (
                <option key={r} value={r}>
                  {r} ⭐
                </option>
              ))}
            </select>
          </div>

          {/* COMMENT */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Komentar
            </label>
            <textarea
              rows="3"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Tulis testimonial kamu..."
              value={newTestimonial.comment}
              onChange={(e) =>
                setNewTestimonial({
                  ...newTestimonial,
                  comment: e.target.value,
                })
              }
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:cursor-pointer text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit Testimonial
          </button>
        </form>
      </div>
    </div>
  );
}
