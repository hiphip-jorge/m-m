import { useState } from "react";
import CircleArrowBtn from "~/components/circleArrowBtn";
import MobileMenu from "~/components/mobileMenu";
import NavBar from "~/components/navBar";
import PhotoStack from "~/components/photoStack";
import AboutMe from "~/components/sections/aboutMe";
import PortfolioPreview from "~/components/sections/portfolioPreview";
import Testimonials from "~/components/sections/testimonials";
import { useThemes } from "~/components/hooks/use-themes";

import { gallery_icon } from "~/utils.svg";

export default function Index() {
  let { isDarkMode, toggleTheme } = useThemes();
  let theme = { iconColor: isDarkMode ? "#eee" : "#000" };
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  let toggleMobileMenu = () => {
    if (isMenuOpen) {
      document.querySelector("body")?.classList.remove("overflow-hidden");
      setIsMenuOpen(false);
    } else {
      document.querySelector("body")?.classList.add("overflow-hidden");
      setIsMenuOpen(true);
    }
  };

  if (isMenuOpen) {
    return (
      <MobileMenu isDarkMode={isDarkMode}>
        <NavBar
          darkMode={isDarkMode}
          iconColor={theme.iconColor}
          handleToggle={toggleTheme}
          onClick={toggleMobileMenu}
        />
      </MobileMenu>
    );
  }

  return (
    <div className="bg-white dark:bg-[#222] dark:text-[#eee]">
      <NavBar
        open
        divider
        darkMode={isDarkMode}
        iconColor={theme.iconColor}
        handleToggle={toggleTheme}
        onClick={toggleMobileMenu}
      />
      <main className="min-h-screen sm:flex sm:items-center sm:justify-center">
        <section className="section-container flex h-[calc(100vh-64px)] flex-col items-center justify-around">
          {!isMenuOpen && <PhotoStack />}
          <div className="mt-4 flex flex-col gap-3">
            <h1 className="font-bold">Experience Photography</h1>
            <h2>The little things give light to the perfect moment.</h2>
          </div>
          <button className="flex items-center gap-3 self-end">
            <span className="text-button">portfolio</span>
            <CircleArrowBtn
              isDarkMode={isDarkMode}
              className="h-12 w-12"
              style="outline"
              animate
            />
          </button>
        </section>
        <AboutMe>
          <div className="flex h-[350px] whitespace-nowrap">
            <div className="section-header z-10 h-fit">
              <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">Hi,</h1>
              <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">
                I'm Tia
              </h1>
              <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">Trini</h1>
            </div>

            <div className="">
              <span className="absolute right-0 flex h-[350px] w-[306px] items-center justify-center bg-black text-white">
                Photo
              </span>
            </div>
          </div>
          <article>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              ullam nemo, laborum ea hic voluptatem libero optio! laborum ea hic
              voluptatem libero optio!
            </p>
          </article>
        </AboutMe>
        <Testimonials isDarkMode={isDarkMode}>
          <h1 className="section-header">Testimonials</h1>
        </Testimonials>
        <PortfolioPreview>
          <div className="flex h-1/2 flex-col justify-between gap-4 px-16 pt-12">
            <h1 className="section-header">Explore My Work</h1>
            <article className="mb-10 flex h-4/5 flex-col justify-between gap-8">
              <p className="text-xl">
                I take pride in my work and love showing it off. Take your time
                while you look through my photos and spot the extra care I give
                each one.
              </p>
              <button className="self-end border-[3.5px] border-black dark:border-[#eee]">
                <div
                  className={`flex h-full w-full gap-2 p-3 button-fill--${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  <span
                    id={`portfolio--${isDarkMode ? "dark" : "light"}`}
                    className="text-[2rem] leading-[2rem] duration-300 ease-in-out"
                  >
                    portfolio
                  </span>
                  {gallery_icon(theme.iconColor)}
                </div>
              </button>
            </article>
          </div>
          <img className=" h-80 w-full bg-black" src="" alt="" />
        </PortfolioPreview>
      </main>
    </div>
  );
}
