import EmpatPilar from '../components/EmpatPilar';

export default function About() {
  return (
    <div className="pt-28 px-8 md:px-16">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">About</h1>
      <p className="text-gray-600 leading-relaxed">
        Ruang Ekspresi adalah wadah kreatif untuk mahasiswa mengembangkan ide, kolaborasi, dan project.
      </p>
      
      <EmpatPilar />
    </div>
  );
}
