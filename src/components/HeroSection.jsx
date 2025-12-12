export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-8 md:px-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-snug">
          RUANG EKSPRESI : Wadah kreatif & Kompetitif Mahasiswa
        </h1>

        <div className="flex flex-wrap mt-6 gap-3 text-sm font-medium">
          <span className="bg-yellow-200 px-4 py-1 rounded-full">Ideation</span>
          <span className="bg-green-200 px-4 py-1 rounded-full">Creation</span>
          <span className="bg-blue-200 px-4 py-1 rounded-full">Collaboration</span>
          <span className="bg-pink-200 px-4 py-1 rounded-full">Guidance & Support</span>
        </div>
      </div>

      <div className="flex justify-end">
        <img
          src=".\src\assets\meeting.svg"
          alt="team"
          className="rounded-xl w-64 md:w-80 object-cover"
        />
      </div>
    </section>
  );
}
