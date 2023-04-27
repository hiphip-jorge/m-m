import { NavLink } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import Socials from "./socials";

type Props = {
  isDarkMode?: boolean;
  iconColor?: string;
  handleThemeToggle?: () => void;
  handleMenuToggle?: () => void;
};

const MobileMenu = (props: Props) => {
  return (
    <motion.div
      key={Math.random().toString()}
      className="absolute top-0 bottom-0 z-50 h-full w-full overflow-hidden bg-white dark:bg-[#222]"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <Navbar
        darkMode={props.isDarkMode}
        handleThemeToggle={props.handleThemeToggle}
        handleMenuToggle={props.handleMenuToggle}
        iconColor={props.iconColor}
        isOpen={true}
      />
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
            className="section-header mt-8 w-full rounded-sm bg-[#222] p-2 text-center text-2xl text-[#eee] shadow-lg dark:bg-[#eee] dark:text-[#222]"
            onClick={props.handleMenuToggle}
          >
            Close
          </button>
        </footer>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
