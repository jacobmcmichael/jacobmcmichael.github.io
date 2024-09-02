/* Dependencies */
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/* Components */
import { House, Folder, Person, Chat } from "@/components/Icons";

/* Stylesheets */
import "@/styles/navbar.css";

const Navbar = () => {
  const linksRef = useRef([]);

  // Define the sections statically
  const sections = [
    { id: "Hero", title: "Home", icon: <House /> },
    { id: "Projects", title: "Projects", icon: <Folder /> },
    { id: "About", title: "About", icon: <Person /> },
    { id: "Contact", title: "Contact", icon: <Chat /> },
  ];

  // State to control indicator position, width, height, and y translate
  const [indicatorStyles, setIndicatorStyles] = useState({
    width: 0,
    height: 0,
    left: 0,
    y: 0,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle link click
  const handleLinkClick = (index, id) => {
    if (!linksRef.current[index]) return;

    // Remove active class from all links
    linksRef.current.forEach((link) => link.classList.remove("link--active"));

    // Add active class to the clicked link
    linksRef.current[index].classList.add("link--active");

    // Update the indicator position, width, height, and y-translate
    const width = linksRef.current[index].offsetWidth;
    const height = linksRef.current[index].offsetHeight;
    const left = linksRef.current[index].offsetLeft;
    const y = 0; // Default Y translation for non-active

    // Update the indicator styles using state
    setIndicatorStyles({ width, height, left, y });

    // Set the active index
    setActiveIndex(index);

    if (id) {
      let section = document.getElementById(id);
      if (section) {
        document.querySelectorAll("main > section")[0] === section
          ? window.scrollTo({ top: 0 })
          : section.scrollIntoView();
      }
    }
  };

  useEffect(() => {
    // Handle window resize to update the indicator position
    const handleResize = () => {
      const activeIndex = linksRef.current.findIndex((link) =>
        link.classList.contains("link--active")
      );
      handleLinkClick(activeIndex !== -1 ? activeIndex : 0);
    };

    window.addEventListener("resize", handleResize);

    // Set the first link as active on mount
    handleLinkClick(0);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar__wrapper">
      <nav id="Navbar">
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <motion.button
                ref={(el) => (linksRef.current[index] = el)}
                className={`button button--plain ${
                  index === activeIndex ? "link--active" : ""
                }`}
                onClick={() => handleLinkClick(index, section.id)}
                initial={{ scale: index === activeIndex ? 1.15 : 1 }}
                animate={{ scale: index === activeIndex ? 1.15 : 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 24 }}
              >
                <span>{section.title}</span>
                {section.icon}
              </motion.button>
            </li>
          ))}

          <motion.div
            className="indicator"
            initial={{ width: "var(--size)", height: "var(--size)" }}
            animate={{
              width: indicatorStyles.width,
              height: indicatorStyles.height,
              left: indicatorStyles.left,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            style={{
              position: "absolute",
              width: `${indicatorStyles.width}px`,
              height: `${indicatorStyles.height}px`,
              left: `${indicatorStyles.left}px`,
            }}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
