import { useOutletContext } from "@remix-run/react";
import { ContextType } from "~/root";

import HeroSection from "~/components/sections/hero-section";
import AboutSection from "~/components/sections/about-section";
import TestimonialsSection from "~/components/sections/testimonials-section";
import Portfoliosection from "~/components/sections/portfolio-section";

export default function Index() {
  let { isDarkMode, theme, isMenuOpen } = useOutletContext<ContextType>();

  return (
    <main className="min-h-screen sm:flex sm:items-center sm:justify-center">
      <HeroSection isDarkMode={isDarkMode} isMenuOpen={isMenuOpen} />
      <AboutSection />
      <TestimonialsSection isDarkMode={isDarkMode} />
      <Portfoliosection isDarkMode={isDarkMode} theme={theme} />
    </main>
  );
}
