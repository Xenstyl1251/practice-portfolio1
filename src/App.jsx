import { useState, useEffect } from "react";
import Button from "./components/Button";
import ProfilePic from "./components/ProfilePic";
import Skills from "./components/Skills";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Work from "./components/ProjectCard";
import { scroller } from "react-scroll";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [theme, setTheme] = useState("dark");
  const [showSkills, setShowSkills] = useState(false);

  // ✅ Handle Tailwind dark mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="dark:bg-black min-h-screen flex flex-col items-center justify-start gap-10 px-10 pt-24 pb-10 scroll-smooth">
      {/* ---------------------------- */}
      {/* Navbar */}
      {/* ---------------------------- */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white px-10 py-4 flex justify-between items-center shadow-md z-50">
        <h1 className="text-xl font-bold">pjdev</h1>

        <ul className="flex gap-6 mr-16">
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("home", {
                  duration: 800,
                  smooth: true,
                  offset: -96, // adjusts for fixed navbar
                })
              }
              className="hover:text-blue-400 active:scale-95 transition-all duration-150"
            >
              home
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("work", {
                  duration: 800,
                  smooth: true,
                  offset: -96, // adjusts for fixed navbar
                })
              }
              className="hover:text-blue-400 active:scale-95 transition-all duration-150"
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                scroller.scrollTo("home", {
                  duration: 800,
                  smooth: true,
                  offset: -96, // adjusts for fixed navbar
                })
              }
              className="hover:text-blue-400 active:scale-95 transition-all duration-150"
            >
              contact
            </button>
          </li>
        </ul>
      </nav>

      {/* ---------------------------- */}
      {/* Dark Mode Toggle Button */}
      {/* ---------------------------- */}
      <button
        className="fixed top-4 right-6 z-[60] p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <SunIcon className="w-6 h-6 text-yellow-400 transition-all duration-500 rotate-0 dark:rotate-180" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-900 transition-all duration-500 rotate-0 dark:rotate-180" />
        )}
      </button>

      {/* ---------------------------- */}
      {/* Main Content */}
      {/* ---------------------------- */}
      <div
        id="home"
        className={`flex flex-col items-center gap-10 transition-all duration-300 ${
          showSkills ? "blur-sm" : ""
        }`}
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
              onClick={() =>
                window.open("https://linktr.ee/Paul.dev", "_blank")
              }
            />
          </div>
        </div>
      </div>

      {/* --------------------------- */}
      {/* Skills Modal */}
      {/* --------------------------- */}
      {showSkills && <Skills onClose={() => setShowSkills(false)} />}

      {/* Work Section */}
      <div id="work">
        <ProjectCard
          id="work"
          title="Project 1"
          description="Short description of Project 1"
        />

        <ProjectCard
          title="Project 2"
          description="Short description of Project 2"
        />

        <ProjectCard
          title="Project 3"
          description="Short description of Project 3"
        />
      </div>
    </div>
  );
}

export default App;
