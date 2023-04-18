import CircleArrowBtn from "~/components/circleArrowBtn";
import PhotoStack from "~/components/photoStack";
import AboutMe from "~/components/sections/about-section";
import PortfolioPreview from "~/components/sections/portfolioPreview";
import Testimonials from "~/components/sections/testimonials";

import { gallery_icon } from "~/utils.svg";
import { useOutletContext } from "@remix-run/react";
import { ContextType } from "~/root";
import HeroSection from "~/components/sections/hero-section";

export default function Index() {
  let { isDarkMode, theme, isMenuOpen } = useOutletContext<ContextType>();

  return (
    <main className="min-h-screen sm:flex sm:items-center sm:justify-center">
      <HeroSection isDarkMode={isDarkMode} isMenuOpen={isMenuOpen} />
      <AboutMe>
        <div className="flex h-[350px] whitespace-nowrap">
          <div className="section-header z-10 h-fit">
            <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">Hi,</h1>
            <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">I'm Tia</h1>
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
  );
}
