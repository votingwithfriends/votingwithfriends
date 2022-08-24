import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  const variants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.8,
      },
    },
    hidden: { opacity: 0, x: -15 },
  };

  return (
    <motion.article variants={variants} initial="hidden" animate="show">
      <section className="mx-auto w-full max-w-screen-xl p-6">
        {children}
      </section>
    </motion.article>
  );
};

export default MotionWrapper;
