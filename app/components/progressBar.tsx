import { motion, useScroll, useSpring } from "framer-motion";

type Props = {};

const ProgressBar = (props: Props) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="progress-bar z-50" style={{ scaleX }} />;
};

export default ProgressBar;
