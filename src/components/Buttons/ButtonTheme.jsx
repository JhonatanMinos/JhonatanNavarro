import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ButtonTheme = ({ theme, onClick }) => {
  return (
    <button
      className="bg-transparent text-dark dark:text-white font-bold py-2 px-4 rounded float-left mt-4"
      onClick={onClick}
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ButtonTheme;
