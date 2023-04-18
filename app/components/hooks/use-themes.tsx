import { useEffect, useState } from "react";

export let useThemes = () => {
  let [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let userTheme = localStorage.getItem("theme");
    // checks if system theme is dark
    let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // checks if preset settings
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      return;
    }
  }, []);

  let toggleTheme = () => {
    setIsDarkMode((prev) => {
      // sets the theme to the opposite of the current theme
      let isDark = !prev;
      // check if toggling to dark mode
      if (isDark) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
      return !prev;
    });
  };

  return { isDarkMode, toggleTheme };
};
