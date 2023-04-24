import { AnimatePresence } from "framer-motion";
import { close_icon, moon_icon, sun_icon } from "~/utils.svg";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";

type Props = {
  className?: string;
  darkMode?: boolean;
  divider?: boolean;
  iconColor?: string;
  handleThemeToggle?: () => void;
  handleMenuToggle?: () => void;
  open?: boolean;
};

const Navbar = (props: Props) => {
  let className =
    "flex h-16 items-center justify-between p-3 font-lexend text-[2rem] font-bold text-[#000] dark:text-[#eee]";

  let openMenuNav = (
    <MobileMenu
      isDarkMode={props.darkMode || false}
      handleMenuToggle={props.handleMenuToggle}
    >
      <nav className={className}>
        <button className="h-8 w-8" onClick={props.handleMenuToggle}>
          {close_icon(props.iconColor)}
        </button>
        <Logo onClick={props.handleMenuToggle} />
        <button className="h-8 w-8" onClick={props.handleThemeToggle}>
          {props.darkMode
            ? moon_icon(props.iconColor)
            : sun_icon(props.iconColor)}
        </button>
      </nav>
    </MobileMenu>
  );

  let closedMenuNav = (
    <nav className={className + " nav-bar_line"}>
      <button className="h-8 w-8" onClick={props.handleMenuToggle}>
        <span className="menu-bars w-full text-2xl leading-6">&</span>
      </button>
      <Logo />
      <button className="h-8 w-8" onClick={props.handleThemeToggle}>
        {props.darkMode
          ? moon_icon(props.iconColor)
          : sun_icon(props.iconColor)}
      </button>
    </nav>
  );

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {props.open ? openMenuNav : closedMenuNav}
    </AnimatePresence>
  );
};

export default Navbar;
