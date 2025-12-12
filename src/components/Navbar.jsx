import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow-sm bg-white fixed top-0 z-50">
      <Link to="/" className="font-bold text-blue-600 text-xl hover:scale-110 transition duration-300 transform">Ruang Ekspresi</Link>

      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600 hover:scale-110 transition duration-300 transform">Home</Link>
        <Link to="/about" className="hover:text-blue-600 hover:scale-110 transition duration-300 transform">About</Link>
        <Link to="/program" className="hover:text-blue-600 hover:scale-110 transition duration-300 transform">Program</Link>
        <Link to="/testimonials" className="hover:text-blue-600 hover:scale-110 transition duration-300 transform">Testimonials</Link>
        <Link to="/contact" className="hover:text-blue-600 hover:scale-110 transition duration-300 transform">Contact</Link>
      </div>
    </nav>
  );
}
