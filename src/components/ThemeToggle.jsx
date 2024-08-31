import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

/* Components */
import { AnimatedSun, AnimatedMoon } from "@/components/Icons";

const ThemeToggle = () => {
  const moonVariant = {
    show: {
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
    hide: {
      position: "absolute",
      y: "150%",
      opacity: 0,
      filter: "blur(2px)",
    },
  };

  const sunVariant = {
    show: {
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
    hide: {
      position: "absolute",
      y: "150%",
      opacity: 0,
      filter: "blur(2px)",
    },
  };

  // Set the current theme without triggering re-render
  const currentTheme = useRef(null);

  // Use Framer Motion's useAnimation hook to control animations manually
  const sunControls = useAnimation();
  const moonControls = useAnimation();

  const handleChangeTheme = () => {
    // Toggle theme value
    currentTheme.current = currentTheme.current === "dark" ? "light" : "dark";

    // Update the body attribute for the theme
    document.body.setAttribute("data-theme", currentTheme.current);

    // Trigger the animations manually
    if (currentTheme.current === "light") {
      sunControls.start("show");
      moonControls.start("hide");
    } else {
      sunControls.start("hide");
      moonControls.start("show");
    }
  };

  useEffect(() => {
    // Initialize theme from body attribute or default to dark
    let theme = document.body.getAttribute("data-theme") || "dark";
    currentTheme.current = theme;

    // Set initial animation states based on the theme
    if (currentTheme.current === "dark") {
      sunControls.start("hide");
      moonControls.start("show");
    } else {
      sunControls.start("show");
      moonControls.start("hide");
    }
  }, []);

  return (
    <button
      className="button--switch button--neumorphic component--theme-toggle"
      onClick={handleChangeTheme}
    >
      <motion.div initial={false} animate={sunControls} variants={sunVariant}>
        <AnimatedSun />
      </motion.div>
      <motion.div initial={false} animate={moonControls} variants={moonVariant}>
        <AnimatedMoon />
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
