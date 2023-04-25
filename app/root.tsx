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
import { AnimatePresence, motion } from "framer-motion";

export type ContextType = {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  theme: { iconColor: string };
  toggleMobileMenu: () => void;
};

const lexendFontURL =
  "https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: favicon },
    { rel: "stylesheet", href: lexendFontURL },
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
    if (isMenuOpen) {
      document.querySelector("body")?.classList.remove("overflow-hidden");
      setIsMenuOpen(false);
    } else {
      document.querySelector("body")?.classList.add("overflow-hidden");
      setIsMenuOpen(true);
    }
  };

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-light bg-gradient-dark bg-gradient-to-br bg-no-repeat dark:text-[#eee]">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Navbar
              open={isMenuOpen}
              divider
              darkMode={isDarkMode}
              iconColor={theme.iconColor}
              handleThemeToggle={toggleTheme}
              handleMenuToggle={toggleMobileMenu}
            />
            <ProgressBar />
            <Outlet
              context={{ isDarkMode, theme, isMenuOpen, toggleMobileMenu }}
            />
            <Footer isDark={isDarkMode} />
          </motion.div>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
