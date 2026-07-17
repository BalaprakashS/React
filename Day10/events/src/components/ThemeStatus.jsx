import { useState } from "react";

const ThemeStatus = () => {

  const [theme, setTheme] = useState("Light Mode");

  return (
    <div
      className={`p-6 rounded-xl shadow text-center ${
        theme === "Light Mode"
          ? "bg-white text-black"
          : "bg-gray-900 text-white"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">
        Task 4 - Theme Status
      </h2>

      <h1 className="text-4xl font-bold mb-5">
        {theme}
      </h1>

      <button
        onClick={() =>
          setTheme(theme === "Light Mode" ? "Dark Mode" : "Light Mode")
        }
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeStatus;