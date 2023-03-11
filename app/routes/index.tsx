import { useEffect, useState } from "react";
import CircleArrowBtn from "~/components/circleArrowBtn";
import NavBar from "~/components/navBar";

import { menu_icon, moon_icon, sun_icon } from "~/utils.svg";

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
    <div className="bg-white dark:bg-[#222] dark:text-[#eee]">
      <header>
        <NavBar>
          {" "}
          <button>{menu_icon(theme.iconColor)}</button>
          <span>M&M</span>
          <button
            className="h-8 w-8"
            onClick={() => {
              setIsDarkMode((prev) => !prev);
            }}
          >
            {isDarkMode
              ? moon_icon(theme.iconColor)
              : sun_icon(theme.iconColor)}
          </button>
        </NavBar>
      </header>
      <main className="min-h-screen sm:flex sm:items-center sm:justify-center">
        <section className="section-container flex h-[calc(100vh-96px)] flex-col items-center justify-between">
          <div className="flex h-[380px] w-[320px] items-center justify-center bg-[#eee] dark:text-black">
            <h2>Cover Photos</h2>
          </div>
          <div className="flex flex-col gap-3">
            <h1>Mission Statement</h1>
            <h2>Sub Statement</h2>
          </div>
          <button className="flex items-center gap-3 self-end">
            <span className="text-button self-end">portfolio</span>
            <CircleArrowBtn isDarkMode={isDarkMode} style="outline" />
          </button>
        </section>
      </main>
    </div>
  );
}
