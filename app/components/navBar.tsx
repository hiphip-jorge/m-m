import { close_icon, moon_icon, sun_icon } from "~/utils.svg";

type Props = {
  className?: string;
  darkMode?: boolean;
  divider?: boolean;
  iconColor?: string;
  handleToggle?: () => void;
  onClick?: () => void;
  open?: boolean;
};

const NavBar = (props: Props) => {
  let className =
    "flex h-16 items-center justify-between p-3 font-lexend text-[2rem] font-bold text-[#000] dark:text-[#eee]";
  className = props.divider ? "nav-bar_line " + className : className;

  return (
    <nav className={className}>
      <button className="h-8 w-8" onClick={props.onClick}>
        {props.open ? (
          <span className="menu-bars w-full text-2xl leading-6">&</span>
        ) : (
          close_icon(props.iconColor)
        )}
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

export default NavBar;
