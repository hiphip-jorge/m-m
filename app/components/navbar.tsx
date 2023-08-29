import { close_icon, moon_icon, quote_icon, sun_icon } from "~/utils.svg";
import Logo from "./logo";
import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";

type Props = {
  darkMode?: boolean;
  divider?: boolean;
  iconColor?: string;
  handleThemeToggle?: () => void;
  handleMenuToggle?: () => void;
  isOpen?: boolean;
};

const Navbar = (props: Props) => {
  let openMenuButton = (
    <motion.button
      className="h-8 w-8 md:hidden"
      onClick={props.handleMenuToggle}
      whileTap={{ scale: 0.9 }}
    >
      <span className="menu-bars w-full text-2xl leading-6">M</span>
    </motion.button>
  );

  let closedMenuButton = (
    <motion.button
      className="h-8 w-8"
      onClick={props.handleMenuToggle}
      whileTap={{ scale: 0.9 }}
    >
      {close_icon(props.iconColor)}
    </motion.button>
  );

  return (
    <nav className="navbar">
      <span className="font-playfair text-3xl">MM</span>
      <ul className="flex gap-3">
        <NavLink
          className="flex h-12 w-12 items-center justify-center rounded-md bg-[#eee] text-xl"
          to="/about"
        >
          Me
        </NavLink>
        <NavLink
          to="/testimonials"
          className="flex h-12 w-12 items-center justify-center rounded-md bg-[#eee]"
        >
          {/* {quote_icon("#222")} */}
          ""
        </NavLink>

        <NavLink
          to="/"
          className={
            "flex h-12 w-12 items-center justify-center gap-[0.2rem] rounded-md bg-[#eee] px-2 py-1"
          }
        >
          {gallery_icon}
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

const gallery_icon = (
  <>
    <ul className="mt-1 flex  flex-col items-center justify-center gap-[0.2rem]">
      <li className="h-4 w-3 rounded-sm bg-[#222]"></li>
      <li className="h-4 w-3 rounded-sm bg-[#222]"></li>
    </ul>
    <ul className="flex flex-col items-start justify-center gap-[0.2rem]">
      <li className="h-4 w-3 rounded-sm bg-[#222]"></li>
      <li className="h-4 w-3 rounded-sm bg-[#222]"></li>
    </ul>
  </>
);
