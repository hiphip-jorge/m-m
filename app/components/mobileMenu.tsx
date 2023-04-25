import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import React from "react";
import Socials from "./socials";

type Props = {
  children?: React.ReactNode;
  isDarkMode: boolean;
  handleMenuToggle?: () => void;
};

const MobileMenu = (props: Props) => {
  return (
    <motion.aside
      className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#222]"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.1 }}
    >
      {props.children}
      <div className="flex h-[calc(100vh-64px)]  flex-col justify-between">
        <main className="p-12 text-[2rem] text-black dark:text-[#eee]">
          <ul className="flex flex-col gap-6">
            <li>
              <button onClick={props.handleMenuToggle}>
                <NavLink to="/about">About Me</NavLink>
              </button>
            </li>
            <li>
              <button onClick={props.handleMenuToggle}>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </button>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </main>
        <footer className="self-center p-10 pb-32">
          <Socials isDark={props.isDarkMode} />
          <button
            className="section-header mt-8 w-full bg-[#222] p-2 text-center text-2xl text-[#eee] shadow-lg dark:bg-[#eee] dark:text-[#222]"
            onClick={props.handleMenuToggle}
          >
            Close
          </button>
        </footer>
      </div>
    </motion.aside>
  );
};

export default MobileMenu;
