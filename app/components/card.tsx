import { motion } from "framer-motion";

type Props = {
  backgroundImage?: string;
  className: string;
  label?: string;
  animation?: {
    initial: any;
    whileInView: any;
    exit: any;
    viewport: any;
    transition: any;
  };
};

const Card = ({ className, backgroundImage, animation, label }: Props) => {
  return (
    <motion.div
      className={className + " relative"}
      style={{
        backgroundImage: backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      initial={animation?.initial}
      whileInView={animation?.whileInView}
      exit={animation?.exit}
      viewport={animation?.viewport}
      transition={animation?.transition}
    >
      {/* add span to bottom right of container using tailwind */}
      {label && (
        <motion.span
          className="card-label"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
};

export default Card;
