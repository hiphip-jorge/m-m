import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  children?: React.ReactNode;
  isMenuOpen?: boolean;
  handleMenuToggle?: () => void;
};

const MobileMenuButton = (props: Props) => {
  let [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolling(true);
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
        className="mobileMenuButton"
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
