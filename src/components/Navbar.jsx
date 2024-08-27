/* Dependencies */
import React, { useRef, useState } from "react";
import { motion, animate } from "framer-motion";

/* Components */
import { Menu, Cross, House, Folder, Person, Chat } from "@/components/Icons";

/* Stylesheets */
import "@/styles/navbar.css";

export default function Navbar() {
  const listVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
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

  const highlightRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const icons = [<House />, <Folder />, <Person />, <Chat />];

  const handleSelection = (event) => {
    animate(
      highlightRef.current,
      { top: event.currentTarget.offsetTop },
      { type: "spring", bounce: 0.35 }
    );
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
      >
        {isOpen ? <Cross /> : <Menu />}
      </motion.button>

      <motion.ul variants={listVariants}>
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            <motion.li
              variants={itemVariants}
              onClick={(event) => handleSelection(event)}
            >
              {icon}
            </motion.li>
          </React.Fragment>
        ))}

        <motion.div
          className="highlight"
          ref={highlightRef}
          initial={{ top: 0 }}
        ></motion.div>
      </motion.ul>
    </motion.nav>
  );
}
