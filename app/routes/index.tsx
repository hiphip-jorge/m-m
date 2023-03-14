import { useEffect, useState } from "react";
import CircleArrowBtn from "~/components/circleArrowBtn";
import MobileMenu from "~/components/mobileMenu";
import NavBar from "~/components/navBar";
import PhotoStack from "~/components/photoStack";

import { close_icon, menu_icon, moon_icon, sun_icon } from "~/utils.svg";

export default function Index() {
  let [isDarkMode, setIsDarkMode] = useState(false);
  let [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <NavBar divider>
          <button
            onClick={() => {
              document.querySelector("body")?.classList.add("overflow-hidden");
              setIsMenuOpen(true);
            }}
          >
            {menu_icon(theme.iconColor)}
          </button>
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
        {isMenuOpen && (
          <MobileMenu isDarkMode={isDarkMode}>
            <NavBar>
              <button
                onClick={() => {
                  document
                    .querySelector("body")
                    ?.classList.remove("overflow-hidden");
                  setIsMenuOpen(false);
                }}
              >
                {close_icon(theme.iconColor)}
              </button>
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
              </button>{" "}
            </NavBar>
          </MobileMenu>
        )}
      </header>
      <main className="min-h-screen sm:flex sm:items-center sm:justify-center">
        <section className="section-container flex h-[calc(100vh-64px)] flex-col items-center justify-between">
          {!isMenuOpen && <PhotoStack />}
          <div className="flex flex-col gap-3">
            <h1>Mission Statement</h1>
            <h2>Sub Statement</h2>
          </div>
          <button className="flex items-center gap-3 self-end">
            <span className="text-button self-start">view portfolio</span>
            <CircleArrowBtn isDarkMode={isDarkMode} style="outline" />
          </button>
        </section>
      </main>
    </div>
  );
}
