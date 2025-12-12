export default function EmpatPilar() {
  const pilar = [
    {
      title: "Ideation",
      color: "bg-yellow-100",
      desc: "Mengembangkan ide kreatif melalui workshop & brainstorming."
    },
    {
      title: "Creation",
      color: "bg-green-100",
      desc: "Mewujudkan ide menjadi karya nyata."
    },
    {
      title: "Collaboration",
      color: "bg-blue-100",
      desc: "Kolaborasi dalam tim multidisiplin."
    },
    {
      title: "Guidance & Support",
      color: "bg-pink-100",
      desc: "Akses mentor & sumber belajar."
    }
  ];

  return (
    <section className="px-8 md:px-16 py-16">
      <h2 className="text-2xl font-bold text-center">
        Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
      </h2>

      <div className="mt-10 grid md:grid-cols-4 gap-6">
        {pilar.map((p, i) => (
          <div key={i} className={`p-6 rounded-xl shadow-sm ${p.color}`}>
            <h3 className="font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
