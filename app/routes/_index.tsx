import { useOutletContext } from "@remix-run/react";
import { type ContextType } from "~/root";

import SortBy from "~/components/sortBy";
import photo1 from "../photos/01.jpg";
import photo2 from "../photos/02.jpg";
import photo3 from "../photos/03.jpg";
import photo4 from "../photos/04.jpg";
import photo5 from "../photos/05.jpg";
import photo6 from "../photos/06.jpg";
import photo7 from "../photos/07.jpg";
import photo8 from "../photos/08.jpg";
import photo9 from "../photos/09.jpg";

const imgs = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
];

export default function Index() {
  let { isDarkMode, theme, isMenuOpen, toggleMobileMenu } =
    useOutletContext<ContextType>();

  return (
    <div>
      <SortBy />
      <main className="mx-auto mb-8 w-fit">
        <ul className="grid grid-cols-2 grid-rows-masonry gap-3">
          {imgs.map((img, idx) => {
            return (
              <li key={idx} className="max-w-[150px]">
                <img src={img} alt="" className="rounded-md shadow-lg" />
              </li>
            );
          })}
        </ul>
      </main>

      {/* <HeroSection isDarkMode={isDarkMode} isMenuOpen={isMenuOpen} />
      <MobileMenuButton
        handleMenuToggle={toggleMobileMenu}
        isMenuOpen={isMenuOpen}
      >
        <AboutSection />
        <TestimonialsSection isDarkMode={isDarkMode} />
        <Portfoliosection isDarkMode={isDarkMode} theme={theme} />
      </MobileMenuButton> */}
    </div>
  );
}
