import { close_icon, moon_icon, sun_icon } from "~/utils.svg";
import Logo from "./logo";

type Props = {
  darkMode?: boolean;
  divider?: boolean;
  iconColor?: string;
  handleThemeToggle?: () => void;
  handleMenuToggle?: () => void;
  isOpen?: boolean;
};

const Navbar = (props: Props) => {
  let className = "navbar";

  let openMenuButton = (
    <button className="h-8 w-8 md:hidden" onClick={props.handleMenuToggle}>
      <span className="menu-bars w-full text-2xl leading-6">&</span>
    </button>
  );

  let closedMenuButton = (
    <button className="h-8 w-8" onClick={props.handleMenuToggle}>
      {close_icon(props.iconColor)}
    </button>
  );

  return (
    <nav className={className + (props.divider ? " nav-bar_line" : "")}>
      {props.isOpen ? closedMenuButton : openMenuButton}
      <Logo onClick={props.isOpen ? props.handleMenuToggle : () => null} />
      <button className="h-8 w-8" onClick={props.handleThemeToggle}>
        {props.darkMode
          ? moon_icon(props.iconColor)
          : sun_icon(props.iconColor)}
      </button>
    </nav>
  );
};

export default Navbar;
