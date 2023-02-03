import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const animations = {
  initial: {
    opacity: 0,
    y: -720,
    scale: 0.05,
    transition: {
      type: "spring",
      duration: 0.67,
      delay: 0.05,
      ease: [0.79, 0.14, 0.15, 0.86],
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.67,
      delay: 0.075,
      ease: [0.79, 0.14, 0.15, 0.86],
    },
  },
  exit: {
    opacity: 0,
    y: 220,
    scale: 2.85,
    transition: {
      type: "spring",
      duration: 0.333,
      delay: 0,
      ease: [0.79, 0.14, 0.15, 0.86],
    },
  },
};

const AnimatedPage = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-x-hidden mb-auto min-h-[calc(100vh-180px)]"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
