/* Dependencies */
import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

/* Components */
import { House, Folder, Person, Mailbox } from "@/components/Icons";

/* Stylesheets */
import "@/styles/navbar.css";

export default function Navbar({ activeSection, setActiveSection }) {
  const delay = 0.2;

  const listRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightRef, animate] = useAnimate();

  // Variants
  const hamburgerVariant = {
    open: {
      y: 0,
      rotate: "var(--rotation)",
      opacity: "var(--opacity)",
      transition: {
        y: { duration: delay, ease: "easeInOut" },
        opacity: { duration: 0, ease: "easeInOut", delay: delay },
        rotate: { duration: delay, ease: "easeInOut", delay: delay },
      },
    },
    closed: {
      y: "var(--y)",
      rotate: 0,
      opacity: 1,
      transition: {
        rotate: { duration: delay, ease: "easeInOut" },
        opacity: { duration: 0, ease: "easeInOut", delay: delay },
        y: { duration: delay, ease: "easeInOut", delay: delay },
      },
    },
  };

  let listVariant = {
    open: {
      opacity: 1,
      pointerEvents: "auto",
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      pointerEvents: "none",
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  let itemVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  // Update variants based on window width
  if (windowWidth >= 768) {
    listVariant = {
      open: { opacity: 1 },
      closed: { opacity: 1 },
    };
    itemVariant = {};
  }

  // Handle selection
  const handleSelection = useCallback(
    (element) => {
      const sectionId = element.getAttribute("data-id");

      if (windowWidth >= 768) {
        animate(
          highlightRef.current,
          {
            top: element.offsetTop,
            left: element.offsetLeft,
            width: element.offsetWidth,
            height: element.offsetHeight,
          },
          { type: "spring", bounce: 0.25 }
        );
      } else {
        animate(
          highlightRef.current,
          {
            top: element.offsetTop,
            left: "unset",
            width: element.offsetWidth,
            height: element.offsetHeight,
          },
          { type: "spring", bounce: 0.25 }
        );
      }

      setActiveSection(sectionId);
    },
    [windowWidth, animate, setActiveSection, highlightRef]
  );

  // Update the state on window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Highlight the active section
  useEffect(() => {
    if (windowWidth >= 768) {
      setIsOpen(true);
    }

    listRefs.current.forEach((ref) => {
      ref.classList.remove("list-item--active");

      if (ref.getAttribute("data-id") === activeSection) {
        ref.classList.add("list-item--active");
        handleSelection(ref); // Using memoized function
      }
    });
  }, [activeSection, windowWidth, isOpen, handleSelection]); // Added handleSelection here

  useEffect(() => {
    if (windowWidth < 768) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  const listItems = [
    { icon: <House />, id: "Hero" },
    { icon: <Folder />, id: "Projects" },
    { icon: <Person />, id: "About" },
    { icon: <Mailbox />, id: "Contact" },
  ];

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
        <motion.div
          className="line"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerVariant}
        />
        <motion.div
          className="line"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerVariant}
        />
        <motion.div
          className="line"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={hamburgerVariant}
        />
      </motion.button>

      <motion.ul animate={isOpen ? "open" : "closed"} variants={listVariant}>
        <li
          style={{ visibility: "hidden", pointerEvents: "none" }}
          className="list-item list-item--spacer"
        >
          <House />
        </li>

        {listItems.map((item, index) => (
          <motion.li
            key={index}
            className="list-item"
            data-id={item.id}
            variants={itemVariant}
            onClick={(event) => handleSelection(event.currentTarget)}
            ref={(el) => (listRefs.current[index] = el)}
          >
            {item.icon}
            <span className="subtitle h6">{item.id}</span>
          </motion.li>
        ))}

        <motion.li
          className="list-item list-item--highlight"
          ref={highlightRef}
          variants={itemVariant}
        >
          <House />
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
