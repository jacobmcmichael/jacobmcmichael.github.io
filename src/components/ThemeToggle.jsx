/* Dependencies */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Components */
import { AnimatedSun, AnimatedMoon } from "@/components/Icons";

const ThemeToggle = ({ activeTheme, setActiveTheme }) => {
  const moonVariant = {
    dark: {
      position: "absolute",
      y: "150%",
      opacity: 0,
      filter: "blur(2px)",
    },
    light: {
      position: "absolute",
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 24,
      },
    },
  };

  const sunVariant = {
    light: {
      position: "absolute",
      y: "150%",
      opacity: 0,
      filter: "blur(2px)",
    },
    dark: {
      position: "absolute",
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 24,
      },
    },
  };

  const handleChangeTheme = () => {
    setActiveTheme(activeTheme === "dark" ? "light" : "dark");
  };

  return (
    <AnimatePresence>
      <button
        className="button--switch component--theme-toggle"
        onClick={handleChangeTheme}
      >
        <motion.div
          initial={false}
          animate={activeTheme === "light" ? "light" : "dark"}
          variants={sunVariant}
        >
          <AnimatedSun />
        </motion.div>
        <motion.div
          initial={false}
          animate={activeTheme === "dark" ? "dark" : "light"}
          variants={moonVariant}
        >
          <AnimatedMoon />
        </motion.div>
      </button>
    </AnimatePresence>
  );
};

export default ThemeToggle;
