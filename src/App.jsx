import "./App.css";
import { useEffect, useState } from "react";
import ButtonTheme from "./components/Buttons/ButtonTheme.jsx";
import HeroPresentation from "./components/Hero/HeroPresentation.jsx";
import MiTimeLine from "./components/timeLine/MyTimeLine.jsx";
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
        <div className="flex justify-end">
          <ButtonTheme theme={theme} onClick={handleThemeChange} />
        </div>
        <HeroPresentation />

        <div className="flex items-center  mt-8">
          <BsFillBriefcaseFill className="w-12 h-12 text-gray-800 dark:text-white" />
          <h2 className="text-3xl font-bold mb-0 ml-2 text-gray-800 dark:text-white">
            Experience
          </h2>
        </div>
        <div className="mt-8">
          <MiTimeLine />
        </div>
        <div className="mt-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              About me
            </h2>
            <p className="text-gray-800 dark:text-white">
              I am a full stack developer with 2 years of experience. I am
              passionate about technology and I love to learn new things.
            </p>
          </div>
        </div>
        <InputEmail />
      </div>
    </div>
  );
}

export default App;
