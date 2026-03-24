import React from "react";

export default function Work() {
  return (
    <div>
      <section className="min-h-screen flex flex-col items-center justify-center text-gray-900">
        <h2 className="text-4xl font-bold mb-10 text-white">WORK</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {/* Card */}
          <div
            className="group bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg 
transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-500">
              Project 1
            </h3>

            <p className="text-gray-600">Short description of Project 1.</p>

            {/* Optional hover line */}
            <div className="mt-4 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Card */}
          <div
            className="group bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg 
transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-500">
              Project 2
            </h3>

            <p className="text-gray-600">Short description of Project 2.</p>

            <div className="mt-4 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Card */}
          <div
            className="group bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg 
transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-500">
              Project 3
            </h3>

            <p className="text-gray-600">Short description of Project 3.</p>

            <div className="mt-4 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
