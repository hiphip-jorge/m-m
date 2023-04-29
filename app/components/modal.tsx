import { motion } from "framer-motion";
import Backdrop from "./backdrop";

type Props = {
  handleClose: () => void;
  selectedPhoto: string;
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const Modal = (props: Props) => {
  return (
    <Backdrop onClick={props.handleClose}>
      <motion.div
        // onClick={(e) => e.stopPropagation()}
        className="w-full"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img src={props.selectedPhoto} alt={props.selectedPhoto} />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
