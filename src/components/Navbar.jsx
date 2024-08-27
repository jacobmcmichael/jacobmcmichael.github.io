/* Dependencies */
import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";

/* Components */
import { Menu, Cross, House, Folder, Person, Chat } from "@/components/Icons";

/* Stylesheets */
import "@/styles/navbar.css";

export default function Navbar() {
  const listVariant = {
    open: {
      pointerEvents: "auto",
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      pointerEvents: "none",
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const [highlightRef, animate] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);

  const icons = [<House />, <Folder />, <Person />, <Chat />];

  const handleSelection = (event) => {
    animate(
      highlightRef.current,
      { top: event.currentTarget.offsetTop },
      { type: "spring", bounce: 0.35 }
    );
  };

  const renderMenuIcon = () => {
    return isOpen ? <Cross /> : <Menu />;
  };

  return (
    <motion.nav
      id="Navbar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.button
        className="menu-toggle"
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        aria-label="Toggle Menu"
      >
        {renderMenuIcon()}
      </motion.button>

      <motion.ul variants={listVariant}>
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            <motion.li
              variants={itemVariant}
              onClick={(event) => handleSelection(event)}
            >
              {icon}
            </motion.li>
          </React.Fragment>
        ))}

        <motion.div
          className="highlight"
          ref={highlightRef}
          initial={{ top: 0, opacity: 0 }}
          variants={itemVariant}
        ></motion.div>
      </motion.ul>
    </motion.nav>
  );
}
