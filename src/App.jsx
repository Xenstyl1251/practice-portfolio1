import { useState } from "react";
import Button from "./components/Button";
import ProfilePic from "./components/ProfilePic";
import Skills from "./components/Skills";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function App() {
  const [theme, setTheme] = useState("dark");
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div
      className={`${theme} dark:bg-black h-screen flex flex-col items-center justify-center gap-10 p-10`}
    >
      {/* Theme Toggle Button */}
      <button
        className="absolute top-10 right-10 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        {theme === "dark" ? (
          <SunIcon className="w-6 h-6 text-yellow-400 transition-all duration-500 rotate-0 dark:rotate-180" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-900 transition-all duration-500 rotate-0 dark:rotate-180" />
        )}
      </button>

      <div
        className={`flex flex-col items-center gap-10 transition-all duration-300 ${
          showSkills ? "blur-sm" : ""
        } /* ✅ Blur applied when showSkills is true */`}
      >
        <ProfilePic />

        {/* Name & Title */}
        <div className="text-center">
          <div className="uppercase text-5xl text-black dark:text-white font-bold mb-3">
            Paul Justine
          </div>
          <div className="uppercase text-lg dark:text-gray-400">
            Frontend Engineer
          </div>
        </div>

        {/* Description */}
        <div className="text-center text-lg w-150 dark:text-gray-400">
          A Frontend Engineer specializing in React. I build responsive,
          intuitive, and visually appealing web applications with clean,
          maintainable code. Passionate about solving complex problems, I create
          functional, user-friendly websites that are polished, modern, and
          engaging.
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 items-center">
          <div className="uppercase font-semibold dark:text-gray-400">
            more about me
          </div>

          <div className="flex gap-4">
            <Button title="Skills" onClick={() => setShowSkills(true)} />

            <Button
              title="Socials"
              onClick={() => {
                window.open("https://linktr.ee/Paul.dev", "_blank");
              }}
            />
          </div>
        </div>
      </div>

      {/* --------------------------- */}
      {/* Skills Modal */}
      {/* --------------------------- */}
      {showSkills && <Skills onClose={() => setShowSkills(false)} />}
    </div>
  );
}

export default App;
