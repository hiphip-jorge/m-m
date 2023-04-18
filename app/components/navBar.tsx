import { close_icon, moon_icon, sun_icon } from "~/utils.svg";
import MobileMenu from "./mobileMenu";

type Props = {
  className?: string;
  darkMode?: boolean;
  divider?: boolean;
  iconColor?: string;
  handleToggle?: () => void;
  onClick?: () => void;
  open?: boolean;
};

const Navbar = (props: Props) => {
  let className =
    "flex h-16 items-center justify-between p-3 font-lexend text-[2rem] font-bold text-[#000] dark:text-[#eee]";

  if (props.open) {
    return (
      <MobileMenu isDarkMode={props.darkMode || false}>
        <nav className={className}>
          <button className="h-8 w-8" onClick={props.onClick}>
            {close_icon(props.iconColor)}
          </button>
          <span>M&M</span>
          <button className="h-8 w-8" onClick={props.handleToggle}>
            {props.darkMode
              ? moon_icon(props.iconColor)
              : sun_icon(props.iconColor)}
          </button>
        </nav>
      </MobileMenu>
    );
  }

  return (
    <nav className={className + " nav-bar_line"}>
      <button className="h-8 w-8" onClick={props.onClick}>
        <span className="menu-bars w-full text-2xl leading-6">&</span>
      </button>
      <span>M&M</span>
      <button className="h-8 w-8" onClick={props.handleToggle}>
        {props.darkMode
          ? moon_icon(props.iconColor)
          : sun_icon(props.iconColor)}
      </button>
    </nav>
  );
};

export default Navbar;
