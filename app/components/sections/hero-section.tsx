import React from "react";
import CircleArrowBtn from "../circleArrowBtn";
import PhotoStack from "../photoStack";

type Props = {
  isDarkMode: boolean;
  isMenuOpen: boolean;
};

const HeroSection = ({ isDarkMode, isMenuOpen }: Props) => {
  return (
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
        //   animate
        />
      </button>
    </section>
  );
};

export default HeroSection;
