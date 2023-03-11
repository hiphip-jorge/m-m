type Props = {
  children: React.ReactNode;
};

const NavBar = (props: Props) => {
  return (
    <div className="nav-bar_line flex h-24 items-center justify-between p-3 font-lexend text-[2rem] font-bold text-[#000] dark:text-[#eee] sticky">
      {props.children}
    </div>
  );
};

export default NavBar;
