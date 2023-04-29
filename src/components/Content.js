import { motion } from "framer-motion";
import { SLIDE } from "./animations/framer-animations";

export const Content = ({ children, style }) => {
  return (
    <motion.div
      className="content"
      variants={SLIDE}
      transition={SLIDE.transition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={style}
    >
      {children}
    </motion.div>
  );
};
