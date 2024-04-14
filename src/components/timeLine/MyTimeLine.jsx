import { FaCalendarAlt } from "react-icons/fa";

const MiTimeLine = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-600">
          <FaCalendarAlt />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            2021
          </span>
          <span className="text-blue-500 dark:text-blue-400">Scholarship</span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          September 2021
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          I entered a government program where they placed me in a company where
          I optmized, redesigned web pages with CSS and Boostrap.
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-600">
          <FaCalendarAlt />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            2022
          </span>
          <span className="text-blue-500 dark:text-blue-400">
            Project Manager In Alen Intelligent
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          April 2022
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Here raise requirements, create projects with react js on the front,
          laravel for backend, maintain it in PHP and JS with Bootstrap
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-600">
          <FaCalendarAlt />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            2023
          </span>
          <span className="text-blue-500 dark:text-blue-400">
            Developer Web in MDC dental
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          September 2023
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          I am updating existing apps to new technologies such as Laravel and
          React
        </p>
      </li>
    </ol>
  );
};

export default MiTimeLine;
