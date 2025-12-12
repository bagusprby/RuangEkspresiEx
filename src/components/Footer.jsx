export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-8 md:px-16 py-12 mt-16">
      <div className="grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="font-bold text-lg">Ruang Ekspresi</h3>
          <p className="text-sm mt-3 leading-relaxed">
            Wadah kreatif dan kompetitif bagi mahasiswa untuk berkembang.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Program</li>
            <li>Projects</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Contact</h4>
          <p className="text-sm">email@example.com</p>
          <p className="text-sm mt-2">0812-3456-7890</p>
        </div>

      </div>

      <p className="text-center text-xs mt-10 opacity-80">
        © 2025 Ruang Ekspresi
      </p>
    </footer>
  );
}
