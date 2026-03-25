import React from "react";

export default function ProjectCard({ title, description }) {
  return (
    <div
      className="group bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg 
      transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col gap-8 px-10  "
    >
      <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-500">
        {title}
      </h3>

      <p className="text-gray-600">{description}</p>

      <div className="mt-4 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}
