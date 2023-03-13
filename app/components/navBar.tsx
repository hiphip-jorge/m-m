type Props = {
  children: React.ReactNode;
  divider?: boolean;
};

const NavBar = (props: Props) => {
  let className =
    "flex h-16 items-center justify-between p-3 font-lexend text-[2rem] font-bold text-[#000] dark:text-[#eee]";
  className = props.divider ? "nav-bar_line " + className : className;

  return <nav className={className}>{props.children}</nav>;
};

export default NavBar;
