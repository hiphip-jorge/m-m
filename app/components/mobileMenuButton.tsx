import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  children?: React.ReactNode;
  isMenuOpen?: boolean;
  handleMenuToggle?: () => void;
};

const MobileMenuButton = (props: Props) => {
  let [isScrolling, setIsScrolling] = useState(false);
  let [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolling(true);
      setY(window.scrollY);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setIsScrolling(true);
      });
  }, []);

  if (props.isMenuOpen) {
    return null;
  }

  if (isScrolling) {
    setTimeout(() => {
      setIsScrolling(false);
    }, 4000);
  }

  return (
    <>
      <motion.button
        className={`sticky top-12 left-4 z-50 h-16 w-16 rounded-sm bg-white p-4 shadow-2xl shadow-black dark:bg-[#222] ${
          y < 635 ? "opacity-0" : "opacity-100"
        }`}
        onClick={props.handleMenuToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -100 }}
        animate={isScrolling ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
      >
        <span className="menu-bars w-full text-2xl leading-6">&</span>
      </motion.button>
      {props.children}
    </>
  );
};

export default MobileMenuButton;
