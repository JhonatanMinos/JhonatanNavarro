import { projectsData } from "../../util/proyects"; // asegúrate que el archivo se llame igual

export const ProjectsSection = () => {
  return (
    <section className="mt-8">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white ml-2">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-6">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech.split(":")[0]} {/* solo muestra el nombre */}
                  </span>
                ))}
              </div>

              <button
                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline"
                onClick={() => console.log("View details:", project.title)} // aquí puedes abrir modal
              >
                View Details{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
