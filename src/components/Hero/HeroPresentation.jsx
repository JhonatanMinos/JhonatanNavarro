import imgJ from "../../assets/jhonatan.png";
import { RiFileUserFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";

const HeroPresentation = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <img
        src={imgJ}
        alt="Jhonatan"
        className="w-52 h-52 rounded-full object-cover border-4 border-gray-800 dark:border-gray-200 mb-4 md:mr-4 md:mb-0"
      />
      <div className="text-center md:text-left text-gray-800 dark:text-white">
        <h2 className="text-4xl font-bold">Jhonatan Navarro</h2>
        <p className="text-lg">
          I'm a full stack developer with 2 years of experience.
        </p>
        <div className="flex justify-center md:justify-start mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
            <span className="mr-2">
              <RiFileUserFill />
            </span>
            cv
          </button>
          <a
            href="https://github.com/JhonatanMinos"
            target="_blank"
            className="bg-gray-700 hover:bg-gray-900  dark:hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-lg flex items-center ml-4"
          >
            <PiGithubLogoFill className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPresentation;
