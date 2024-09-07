/* Dependencies */
import React from "react";
import { motion } from "framer-motion";

/* Stylesheets */
import "@/styles/marquee.css";

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10, // Duration of one complete loop
          ease: "linear",
        },
      },
    },
  };

  const indicatorVariants = {
    animate: {
      opacity: [1, 0, 1],
      transition: {
        opacity: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2, // Duration of one complete loop
          ease: "linear",
        },
      },
    },
  };

  const marqueeItems = [
    {
      text: "Open to Work",
      description: "Remote / Hybrid / On-Site",
    },
    {
      text: "Open to Work",
      description: "Remote / Hybrid / On-Site",
    },
    {
      text: "Open to Work",
      description: "Remote / Hybrid / On-Site",
    },
  ];

  return (
    <div className="component--marquee themed">
      <span className="title h2 visually-hidden">Hello there :)</span>

      <div className="marquee__text-wrapper">
        {marqueeItems.map((item, index) => (
          <motion.h2
            key={index}
            className="title h2"
            variants={marqueeVariants}
            animate="animate"
          >
            <motion.div
              className="indicator"
              variants={indicatorVariants}
            ></motion.div>
            <motion.a
              className="title h2 highlight"
              href="https://www.linkedin.com/in/jacobmcmichael/"
              target="_blank"
            >
              {item.text}
            </motion.a>{" "}
            <motion.div
              className="indicator"
              variants={indicatorVariants}
            ></motion.div>{" "}
            <span>{item.description}</span>
          </motion.h2>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
