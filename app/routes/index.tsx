import { useEffect, useState } from "react";
import NavBar from "~/components/navBar";

import { menu_icon, sun_icon } from "~/utils.svg";

export default function Index() {
  let [isDarkMode, setIsDarkMode] = useState(false);

  let theme = isDarkMode ? { iconColor: "#eee" } : { iconColor: "#000" };

  useEffect(() => {
    let userTheme = localStorage.getItem("theme");
    let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // checks preset settings
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
    }

    // if dark mode and not in local storage
    if (isDarkMode && userTheme !== "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }

    // if not dark mode and light not in local storage
    if (!isDarkMode && userTheme !== "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="bg-white dark:bg-[#222]">
      <header>
        <NavBar>
          {" "}
          <button>{menu_icon(theme.iconColor)}</button>
          <span>M&M</span>
          <button
            className="w-8"
            onClick={() => {
              setIsDarkMode((prev) => !prev);
            }}
          >
            {sun_icon(theme.iconColor)}
          </button>
        </NavBar>
      </header>
      <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center h-[5000px]"></main>
    </div>
  );
}
