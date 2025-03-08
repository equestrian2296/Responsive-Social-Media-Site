import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => handleThemeChange("light")}
        className={`p-2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
          theme === "light" ? "bg-yellow-300" : "bg-gray-700"
        }`}
      >
        {theme === "light" ? (
          <span className="text-lg text-gray-800">🌙</span>
        ) : (
          <span className="text-lg text-yellow-500">☀️</span>
        )}
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className={`p-2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-700"
        }`}
      >
        <span className="text-lg text-white">🌑</span>
      </button>
      <button
        onClick={() => handleThemeChange("love")}
        className={`p-2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
          theme === "love" ? "bg-pink-300" : "bg-gray-700"
        }`}
      >
        <span className="text-lg text-red-500">💖</span>
      </button>
      <button
        onClick={() => handleThemeChange("chill")}
        className={`p-2 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
          theme === "chill" ? "bg-blue-300" : "bg-gray-700"
        }`}
      >
        <span className="text-lg text-blue-500">❄️</span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
