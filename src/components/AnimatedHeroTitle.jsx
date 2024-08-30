/* Dependencies */
import React from "react";
import { motion } from "framer-motion";

const AnimatedHeroTitle = () => {
  const entranceAnimation = {
    initial: { display: "inline-block", opacity: 0, y: "100%" },
    animate: {
      opacity: 1,
      y: "0%",
      transition: {
        ease: "easeOut",
        type: "spring",
        bounce: 0.5,
        duration: 0.6,
      },
    },
  };

  const frontendAnimation = {
    initial: { display: "inline-block", opacity: 0, y: "100%" },
    animate: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.8,
        ease: "easeOut",
        type: "spring",
        bounce: 0.5,
        duration: 1.2,
      },
    },
  };

  const parentAnimation = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2,
      },
    },
  };

  return (
    <motion.div initial="initial" animate="animate">
      {/* Frontend Text Animation */}
      <span className="title__inner title__inner--thin">
        <motion.span variants={frontendAnimation} initial="initial" animate="animate">
          Frontend
        </motion.span>
      </span>
      <span className="title__inner">&</span>
      <wbr></wbr>

      {/* E-Commerce Text Animation */}
      <motion.div variants={parentAnimation} initial="initial" animate="animate">
        <span className="title__inner title__inner--thick">
          {"E-Commerce".split("").map((char, index) => (
            <motion.span key={index} variants={entranceAnimation} whileHover={{ y: -20 }}>
              {char}
            </motion.span>
          ))}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeroTitle;
