import { useOutletContext } from "@remix-run/react";
import { type ContextType } from "~/root";

import HeroSection from "~/components/sections/hero-section";
import AboutSection from "~/components/sections/about-section";
import TestimonialsSection from "~/components/sections/testimonials-section";
import Portfoliosection from "~/components/sections/portfolio-section";
import MobileMenuButton from "~/components/mobileMenuButton";

export default function Index() {
  let { isDarkMode, theme, isMenuOpen, toggleMobileMenu } =
    useOutletContext<ContextType>();

  return (
    <main className="min-h-screen sm:flex sm:items-center sm:justify-center">
      <HeroSection isDarkMode={isDarkMode} isMenuOpen={isMenuOpen} />
      <MobileMenuButton
        handleMenuToggle={toggleMobileMenu}
        isMenuOpen={isMenuOpen}
      >
        <AboutSection />
        <TestimonialsSection isDarkMode={isDarkMode} />
        <Portfoliosection isDarkMode={isDarkMode} theme={theme} />
      </MobileMenuButton>
    </main>
  );
}
