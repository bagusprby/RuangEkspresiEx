import React from 'react';

export default function Showcase() {
  return (
    <section className="px-8 md:px-16 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-3">
        Showcase <span className="text-blue-600">Student Projects</span>
      </h2>
      <p className="text-center text-gray-600 text-sm mb-12">
        Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
      </p>

      <div className="bg-gray-50 p-10 rounded-2xl shadow-md grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-medium">
            UI/UX Design
          </span>

          <h3 className="text-2xl font-bold mt-4">Creative Portfolio Platform</h3>

          <p className="text-gray-600 text-sm mt-3">
            Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas
          </p>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">Tim Pembuat :</h4>

            {/* Team List */}
            <ul className="space-y-3">
              {[
                { name: 'Marcus Schmidt', role: 'Frontend Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
                { name: 'Emma Rousseau', role: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
                { name: 'Lucas Müller', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' }
              ].map((member, i) => (
                <li key={i} className="flex items-center gap-3">
                  <img
                    src={member.image}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out transform">
            Live Demo
          </button>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
            alt="project preview"
            className="rounded-2xl shadow-lg"
          /> 
        </div>

      </div>
    </section>
  );
}