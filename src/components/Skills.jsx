import { useState } from "react";

export default function Skills({ onClose }) {
  const skills = [
    { title: "HTML", percent: 95 },
    { title: "CSS", percent: 95 },
    { title: "Tailwind CSS", percent: 90 },
    { title: "JavaScript", percent: 89 },
    { title: "React", percent: 89 },
    { title: "React Native", percent: 75 },
    { title: "Laravel", percent: 75 },
  ];

  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const radius = 120;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose} // close modal when clicking outside
    >
      <section
        className="relative p-6 space-y-6 bg-gray-800 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-100 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Skill Buttons */}
        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill) => (
            <button
              key={skill.title}
              onClick={() => setCurrentSkill(skill)}
              className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700 ${
                currentSkill.title === skill.title
                  ? "font-bold ring-2 ring-gray-100"
                  : ""
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>

        {/* Circle Progress */}
        <div className="flex items-center justify-center relative">
          <svg className="transform -rotate-90 w-72 h-72">
            <circle
              cx="145"
              cy="145"
              r={radius}
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              className="text-gray-700"
            />

            <circle
              cx="145"
              cy="145"
              r={radius}
              stroke="currentColor"
              strokeWidth="30"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (currentSkill.percent / 100) * circumference
              }
              className="text-blue-500"
            />
          </svg>

          <span className="absolute text-5xl">{currentSkill.percent}%</span>
        </div>
      </section>
    </div>
  );
}
