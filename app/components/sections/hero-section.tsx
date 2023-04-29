import { Link } from "@remix-run/react";
import CircleArrowBtn from "../circleArrowBtn";
import PhotoStack from "../photoStack";

type Props = {
  isDarkMode: boolean;
  isMenuOpen: boolean;
};

function HeroSection({ isDarkMode, isMenuOpen }: Props) {
  return (
    <section className="section-container hero">
      {!isMenuOpen && <PhotoStack />}
      <div className="mt-4 flex flex-col gap-3">
        <h1 className="font-bold">Experience Photography</h1>
        <h2>The little things give light to the perfect moment.</h2>
      </div>
      <Link className="flex items-center gap-3 self-end" to="/portfolio">
        <span className="text-button">portfolio</span>
        <CircleArrowBtn
          isDarkMode={isDarkMode}
          className="h-12 w-12"
          circleStyle="outline"
        />
      </Link>
    </section>
  );
}

export default HeroSection;
