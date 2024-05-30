import React, { useEffect, useState } from 'react';
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div onClick={toggleTheme} className="text-xl cursor-pointer p-2 hover:bg-[#37393b90] dark:hover:bg-[#e5e7e9e4] rounded-full">
      {isDarkMode ? <BsMoonStarsFill /> : <LuSun />}
    </div>
  );
};

export default ThemeToggle;
