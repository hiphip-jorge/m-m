import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import { getUser } from "./session.server";

import { useThemes } from "./components/hooks/use-themes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import favicon from "./assets/favicon.svg";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import ProgressBar from "./components/progressBar";
import MobileMenu from "./components/mobileMenu";
import { AnimatePresence } from "framer-motion";
import TransitionAnimation from "./components/transitionAnimation";

export type ContextType = {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  theme: { iconColor: string };
  toggleMobileMenu: () => void;
};

const lexendFontURL =
  "https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap";
const playfairUrl =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: favicon },
    { rel: "stylesheet", href: lexendFontURL },
    { rel: "stylesheet", href: playfairUrl },
    { rel: "stylesheet", href: tailwindStylesheetUrl },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "M&M | Photography",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  let { isDarkMode, toggleTheme } = useThemes();
  let theme = { iconColor: isDarkMode ? "#eee" : "#000" };

  let toggleMobileMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-light bg-gradient-dark bg-gradient-to-br bg-no-repeat dark:text-[#eee]">
        <TransitionAnimation>
          {/* <ProgressBar /> */}
          <Navbar
            isOpen={isMenuOpen}
            divider
            darkMode={isDarkMode}
            iconColor={theme.iconColor}
            handleThemeToggle={toggleTheme}
            handleMenuToggle={toggleMobileMenu}
          />
          <Outlet
            context={{ isDarkMode, theme, isMenuOpen, toggleMobileMenu }}
          />
          <Footer isDark={isDarkMode} />
        </TransitionAnimation>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
