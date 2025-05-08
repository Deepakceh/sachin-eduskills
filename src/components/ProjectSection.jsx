// app/projects/page.tsx

'use client';

import Image from "next/image";

const projects = [
  {
    name: "UPSDM",
    description: "Uttar Pradesh Skill Development Mission focused on empowering youth through job-oriented training.",
    image: "/assets/images/upsdm.jpeg", 
    color: "bg-blue-100",
  },
  {
    name: "PMKVY",
    description: "Skill certification and training scheme by the Government of India for boosting employability.",
    image: "/assets/images/pmkvy.png",
    color: "bg-green-100",
  },
  {
    name: "RSLDC",
    description: "Rajasthan's state mission providing training and livelihood programs for sustainable employment.",
    image: "/assets/images/rsldc.png",
    color: "bg-purple-100",
  },
  {
    name: "UPNULM",
    description: "Uttar Pradesh National Urban Livelihood Mission offering training for urban poor youth.",
    image: "/assets/images/nulm.jpeg",
    color: "bg-pink-100",
  },
];

export default function ProjectSection() {
  return (
    <div id="projects" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Key Projects</h2>

      <div className="relative pl-6">
        {projects.map((project, index) => (
          <div key={index} className="mb-12 relative group">
            {/* Circular Image */}
            <div className={`absolute -left-6 top-1.5 z-10 rounded-full p-1 ${project.color} shadow-md`}>
              <div className="rounded-full overflow-hidden w-12 h-12">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Card */}
            <div className="bg-white shadow-md rounded-xl p-6 pl-14 relative transition-transform group-hover:scale-[1.01]">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
