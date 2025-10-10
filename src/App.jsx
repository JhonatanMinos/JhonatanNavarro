import "./App.css";
import { useEffect, useState } from "react";
import { HeroPresentation } from "./components/Hero/HeroPresentation";
import { MiTimeLine } from "./components/timeLine/MyTimeLine";
import { ProjectsSection } from "./components/Projects/projectsSection";
import { BsFillBriefcaseFill } from "react-icons/bs";
import InputEmail from "./components/Email/InputEmail.jsx";
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleThemeChange = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="h-auto bg-white dark:bg-gray-800 flex justify-between">
      <div className="container mx-auto lg:w-1/2 sm:w-3/4 px-4">
        <HeroPresentation theme={theme} handleThemeChange={handleThemeChange} />
        <div className="flex items-center  mt-8">
          <BsFillBriefcaseFill className="w-12 h-12 text-gray-800 dark:text-white" />
          <h2 className="text-3xl font-bold mb-0 ml-2 text-gray-800 dark:text-white">
            Experience
          </h2>
        </div>
        <div className="mt-8">
          <MiTimeLine />
        </div>
        <div className="flex items-center mt-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              My story as a developer
            </h2>
            <p className="text-gray-800 dark:text-white">
              As a Web Developer with 3 years of hands-on experience, I build
              dynamic and scalable applications using PHP, HTML, CSS, and
              JavaScript. Over the last year, I’ve deepened my expertise in
              React.js and Laravel, delivering solutions that improve efficiency
              and user experience. I’m driven by continuous learning and
              motivated to join teams that value innovation, collaboration, and
              growth.{" "}
            </p>
          </div>
        </div>
        <ProjectsSection />
        <InputEmail />
      </div>
    </div>
  );
}

export default App;
