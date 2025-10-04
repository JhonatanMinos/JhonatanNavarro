import { FaCalendarAlt } from "react-icons/fa";

export const MiTimeLine = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="mb-10 ml-6 p-6 rounded-lg shadow-xl">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-600">
          <FaCalendarAlt />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            2021
          </span>
          <span className="text-blue-500 dark:text-blue-400">Scholarship</span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
          September 2021
        </time>
        <p className="text-base font-normal text-gray-700 dark:text-gray-200">
          I entered a government program where they placed me in a company where
          I optmized, redesigned web pages with CSS and Boostrap.
        </p>
      </li>
      <li className="mb-10 ml-6 p-6 rounded-lg shadow-xl">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-600">
          <FaCalendarAlt />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            2022
          </span>
          <span className="text-blue-500 dark:text-blue-400">
            Developer web jr In Alen Intelligent
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
          April 2022
        </time>
        <p className="text-base font-normal text-gray-700 dark:text-gray-200">
          <ul className="list-disc space-y-2">
            <li>
              <p>
                <strong>Order Flow System:</strong>
                Built an internal web application that digitized the sales
                process from vendor input to invoice generation, reducing manual
                errors and speeding up billing.
              </p>
            </li>
            <li>
              <p>
                <strong>System Modernization:</strong>
                Migrated several company tools to React.js, improving UI/UX and
                code maintainability.
              </p>
            </li>
            <li>
              <p>
                <strong>Google Cloud Admin:</strong>
                Managed cloud-hosted databases and enterprise websites,
                optimizing availability and scalability
              </p>
            </li>
          </ul>
        </p>
      </li>
      <li className="mb-10 ml-6 p-6 rounded-lg shadow-xl">
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
        <time className="block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
          September 2023
        </time>
        <p className="text-base font-normal text-gray-700 dark:text-gray-200">
          <ul className="list-disc space-y-2">
            <li>
              Designed and delivered an internal API integrated with Active
              Directory and SAP, enabling secure authentication and data
              synchronization across multiple applications.
            </li>
            <li>
              Developed three enterprise systems:
              <ul className="list-disc space-y-2">
                <li>
                  <strong>Payments Application:</strong> Streamlined vendor
                  payment approvals and tracking.
                </li>
                <li>
                  <strong>RSA System:</strong> Centralized RSA workflows,
                  improving compliance and reporting.
                </li>
                <li>
                  <strong>Raw Material Requests:</strong>Digitalized inventory
                  requests, reducing processing time and manual paperwork.
                </li>
              </ul>
            </li>
            <li>
              Migrated and modernized applications to Laravel 12 (Inertia.js)
              and React.js, increasing maintainability and user experience.
            </li>
            <li>
              Improved database performance in SQL Server and MySQL, ensuring
              stability for high-volume transactions.
            </li>
          </ul>
        </p>
      </li>
    </ol>
  );
};
