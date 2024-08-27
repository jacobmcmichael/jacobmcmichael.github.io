/* Dependencies */
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

/* Components */
import { Menu, Cross, House, Folder, Person, Chat } from "@/components/Icons";

/* Stylesheets */
import "@/styles/navbar.css";

export default function Navbar({ activeSection, setActiveSection }) {
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

  const listItems = [
    { icon: <House />, id: "Hero" },
    { icon: <Folder />, id: "Projects" },
    { icon: <Person />, id: "About" },
    { icon: <Chat />, id: "Contact" },
  ];

  const listRefs = useRef([]);
  const [highlightRef, animate] = useAnimate();
  const [isOpen, setIsOpen] = useState(false);

  const renderMenuIcon = () => {
    return isOpen ? <Cross /> : <Menu />;
  };

  const handleSelection = (element) => {
    const sectionId = element.getAttribute("data-id");
    const sectionElement = document.getElementById(sectionId);

    animate(
      highlightRef.current,
      { top: element.offsetTop },
      { type: "spring", bounce: 0.35 }
    );

    // TODO: Find a way to make this smooth scrolling w/o interfering with inView()
    if (sectionElement) {
      sectionElement.scrollIntoView({
        block: "start", // Align to the start of the section
      });
    }

    // Updates activeSection in parent
    setActiveSection(sectionId);
  };

  useEffect(() => {
    listRefs.current.forEach((ref) => {
      if (ref.getAttribute("data-id") === activeSection) {
        handleSelection(ref);
      }
    });
    console.log(activeSection)
  }, [activeSection]);

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
        {listItems.map((item, index) => (
          <motion.li
            key={index}
            data-id={item.id}
            variants={itemVariant}
            onClick={(event) => handleSelection(event.currentTarget)}
            ref={(el) => (listRefs.current[index] = el)}
          >
            {item.icon}
          </motion.li>
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
