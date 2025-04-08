// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="dark-light-btn">
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;