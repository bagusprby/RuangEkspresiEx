export default function JadwalProgram() {
  return (
    <section className="px-8 md:px-16 py-16">
      <h2 className="text-2xl font-bold text-center">
        Jadwal & <span className="text-blue-600">Program Kegiatan</span>
      </h2>

      <div className="bg-white shadow-lg rounded-xl p-8 mt-10">
        <h3 className="font-bold text-center mb-6">Setiap Sabtu</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-green-100">
            <h4 className="font-bold">Sesi Pagi</h4>
            <p className="text-sm mt-2">09.00 - 12.00 WIB</p>
          </div>

          <div className="p-6 rounded-xl bg-yellow-100">
            <h4 className="font-bold">Sesi Sore</h4>
            <p className="text-sm mt-2">16.00 - 19.00 WIB</p>
          </div>
        </div>
      </div>
      
      {/* FITUR PROGRAM */}
      <div className="grid md:grid-cols-4 gap-6 mt-14">
        {/* Career Talks */}
        <div className="bg-yellow-100 border border-yellow-300 p-6 rounded-xl shadow-lg">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="font-bold text-lg">Career Talks</h3>
          <p className="text-sm text-gray-600 mt-2">
            Sesi sharing dari praktisi industri dan alumni sukses
          </p>
        </div>

        {/* Extra Classes */}
        <div className="bg-green-100 border border-green-300 p-6 rounded-xl shadow-lg">
          <div className="text-3xl mb-3">📘</div>
          <h3 className="font-bold text-lg">Extra Classes</h3>
          <p className="text-sm text-gray-600 mt-2">
            Kelas tambahan skill development dan workshop teknis
          </p>
        </div>

        {/* Project Work */}
        <div className="bg-blue-100 border border-blue-300 p-6 rounded-xl shadow-lg">
          <div className="text-3xl mb-3">💻</div>
          <h3 className="font-bold text-lg">Project Work</h3>
          <p className="text-sm text-gray-600 mt-2">
            Mengerjakan project nyata dengan bimbingan mentor
          </p>
        </div>

        {/* Mentoring */}
        <div className="bg-pink-100 border border-pink-300 p-6 rounded-xl shadow-lg">
          <div className="text-3xl mb-3">👥</div>
          <h3 className="font-bold text-lg">Mentoring</h3>
          <p className="text-sm text-gray-600 mt-2">
            Sesi konsultasi personal dengan mentor berpengalaman
          </p>
        </div>
      </div>
    </section>
  );
}
