import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

import "./Header.css";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-container">
      <button
        className="dark-mode-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FiMoon size={18} /> : <FiSun size={18} />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
