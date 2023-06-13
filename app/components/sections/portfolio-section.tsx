import { gallery_icon } from "~/utils.svg";
import photo3 from "~/photos/03.jpg";
import { Link } from "@remix-run/react";

type Props = {
  isDarkMode: boolean;
  theme: { iconColor: string };
};

const PortfolioSection = ({ isDarkMode, theme }: Props) => {
  return (
    <section id="portfolioPreview" className="flex flex-col justify-between">
      <div className="flex h-1/2 flex-col justify-between gap-4 px-16 pt-12">
        <h1 className="section-header">Explore My Work</h1>
        <article className="mb-10 flex h-4/5 flex-col justify-between gap-8">
          <p className="text-xl">
            I take pride in my work and love showing it off. Take your time
            while you look through my photos and spot the extra care I give each
            one.
          </p>
          <Link
            to="./portfolio"
            className="self-end border-[3.5px] border-black dark:border-[#eee]"
          >
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
          </Link>
        </article>
      </div>
      <img className="w-full bg-black" loading="lazy" src={photo3} alt="" />
    </section>
  );
};

export default PortfolioSection;
