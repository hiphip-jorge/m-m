import { close_icon } from "~/utils.svg";

type Props = {
  children?: React.ReactNode;
  isMenuOpen?: boolean;
  handleMenuToggle?: () => void;
};

const MobileMenuButton = (props: Props) => {
  if (props.isMenuOpen) {
    return null;
  }

  return (
    <>
      <button
        className="sticky top-12 left-4 z-50 h-16 w-16 rounded-sm bg-[#eee] p-4 shadow-2xl shadow-black dark:bg-[#222]"
        onClick={props.handleMenuToggle}
      >
        <span className="menu-bars w-full text-2xl leading-6">&</span>
      </button>
      {props.children}
    </>
  );
};

export default MobileMenuButton;