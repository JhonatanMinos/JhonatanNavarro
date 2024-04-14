import { useState } from "react";
import { MdEmail } from "react-icons/md";

const InputEmail = () => {
  const [email, setEmail] = useState("jhonatanmanm@gmail.com");

  const copyEmailToClipboard = () => {
    const inputElement = document.createElement("input");
    inputElement.value = email;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    document.body.removeChild(inputElement);
  };

  return (
    <div className="mt-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
        Email
      </h2>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MdEmail className="w-5 h-5 text-gray-800 dark:text-white" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          disabled
          value={email}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={copyEmailToClipboard}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default InputEmail;
