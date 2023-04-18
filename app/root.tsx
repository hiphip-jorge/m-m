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
import Navbar from "./components/sections/navbar";

import favicon from "./assets/favicon.svg";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export type ContextType = {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  theme: { iconColor: string };
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
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-[#222] dark:text-[#eee]">
        <Navbar
          open={isMenuOpen}
          divider
          darkMode={isDarkMode}
          iconColor={theme.iconColor}
          handleToggle={toggleTheme}
          onClick={toggleMobileMenu}
        />
        <Outlet context={{ isDarkMode, theme, isMenuOpen }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
