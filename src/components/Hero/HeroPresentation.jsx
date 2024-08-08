/* eslint-disable react/prop-types */
import imgJ from "../../assets/jhonatan.png";
import { RiFileUserFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import ButtonTheme from "../Buttons/ButtonTheme";
import { useState, useEffect } from "react";

export const HeroPresentation = ({ theme, handleThemeChange }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div>
        <div
          className={`fixed top-0 left-0 w-full bg-gray-800 dark:bg-gray-900 text-white py-2 px-4 flex justify-between items-center transition-opacity duration-600 ease-in-out ${
            showScroll ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center">
            <img
              src={imgJ}
              alt="Jhonatan"
              className="w-10 h-10 bg-gray-800 dark:bg-transparent rounded-full object-cover border-2 border-gray-800 dark:border-gray-200"
            />
            <span className="ml-2 text-lg font-bold">Jhonatan Minos</span>
          </div>
          <ButtonTheme theme={theme} onClick={handleThemeChange} />
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            showScroll ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex justify-end">
            <ButtonTheme theme={theme} onClick={handleThemeChange} />
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={imgJ}
              alt="Jhonatan"
              className="w-52 h-52 bg-gray-800 dark:bg-transparent rounded-full object-cover border-4 border-gray-800 dark:border-gray-200 mb-4 md:mr-4 md:mb-0"
            />
            <div className="text-center md:text-left text-gray-800 dark:text-white">
              <h2 className="text-4xl font-bold">Jhonatan Navarro</h2>
              <p className="text-lg">
                I'm a full stack developer with 2 years of experience.
              </p>
              <div className="flex justify-center md:justify-start mt-4">
                <a
                  href="JhonatanNavarro/public/JhonatanNavarro.pdf"
                  download={"JhonatanNavarro.pdf"}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
                >
                  <span className="mr-2">
                    <RiFileUserFill />
                  </span>
                  CV
                </a>
                <a
                  href="https://github.com/JhonatanMinos"
                  target="_blank"
                  className="bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-lg flex items-center ml-4"
                >
                  <PiGithubLogoFill className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
