import { useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const TransitionAnimation = (props: Props) => {
  return (
    <motion.div
      key={useLocation().key}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      // exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      {props.children}
    </motion.div>
  );
};

export default TransitionAnimation;
