import { useEffect, useState } from "react";
import CircleArrowBtn from "~/components/circleArrowBtn";
import MobileMenu from "~/components/mobileMenu";
import NavBar from "~/components/navBar";
import PhotoStack from "~/components/photoStack";
import AboutMe from "~/sections/aboutMe";
import PortfolioPreview from "~/sections/portfolioPreview";
import Testimonials from "~/sections/testimonials";

import {
  close_icon,
  gallery_icon,
  moon_icon,
  sun_icon,
} from "~/utils.svg";

export default function Index() {
  let [isDarkMode, setIsDarkMode] = useState(false);
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  let theme = { iconColor: isDarkMode ? "#eee" : "#000" };

  useEffect(() => {
    let userTheme = localStorage.getItem("theme");
    let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // checks if preset settings
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      return;
    }
  }, []);

  let toggleMode = () => {
    setIsDarkMode((prev) => {
      let nowDark = !prev;
      if (nowDark) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
      return !prev;
    });
  };

  return (
    <div className="bg-white dark:bg-[#222] dark:text-[#eee]">
      <header>
        <NavBar divider>
          <button
            className="flex h-8 w-8"
            onClick={() => {
              document.querySelector("body")?.classList.add("overflow-hidden");
              setIsMenuOpen(true);
            }}
          >
            <span className="menu-bars w-full text-2xl leading-6">&</span>
          </button>
          <span>M&M</span>
          <button className="h-8 w-8" onClick={toggleMode}>
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
              <button className="h-8 w-8" onClick={toggleMode}>
                {isDarkMode
                  ? moon_icon(theme.iconColor)
                  : sun_icon(theme.iconColor)}
              </button>{" "}
            </NavBar>
          </MobileMenu>
        )}
      </header>
      <main className="min-h-screen sm:flex sm:items-center sm:justify-center">
        <section className="section-container flex h-[calc(100vh-64px)] flex-col items-center justify-around">
          {!isMenuOpen && <PhotoStack />}
          <div className="mt-4 flex flex-col gap-3">
            <h1>Mission Statement</h1>
            <h2>Sub Statement</h2>
          </div>
          <button className="flex items-center gap-3 self-end">
            <span className="text-button">portfolio</span>
            <CircleArrowBtn isDarkMode={isDarkMode} style="outline" animate />
          </button>
        </section>
        <AboutMe>
          <div className="z-10 ">
            <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">Hi,</h1>
            <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">
              I'm Jane
            </h1>
            <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">Doe</h1>
          </div>
          <div className="h-[275px] w-[200px]">
            <span className="absolute right-0 flex h-[400px] w-[306px] -translate-y-44 items-center justify-center bg-black text-white">
              Photo
            </span>
          </div>
          <div></div>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            ullam nemo, laborum ea hic voluptatem libero optio! laborum ea hic
            voluptatem libero optio!
          </p>
        </AboutMe>
        <PortfolioPreview>
          <h1>Explore My Work</h1>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <button className="flex gap-2 self-end ">
            <span className="text-[2rem] leading-[2rem] underline">
              portfolio
            </span>
            {gallery_icon(theme.iconColor)}
          </button>
          <figure>
            <span className="absolute left-0 right-0 flex h-[535px] items-center justify-center bg-black text-white">
              Photo
            </span>
          </figure>
        </PortfolioPreview>
        <Testimonials>
          <h1 className="text-center">Testimonials</h1>
        </Testimonials>
      </main>
    </div>
  );
}
