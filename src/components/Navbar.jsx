/* Dependencies */
import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

/* Contexts */
import { useActiveSection } from "@/contexts/ActiveSectionContext";

/* Components */
import ThemeToggle from "@/components/ThemeToggle";
import { House, Folder, Person, Chat } from "@/components/Icons";

/* Stylesheets */
import "@/styles/navbar.css";

const Navbar = React.memo(() => {
  // Define the sections statically
  const sections = [
    { id: "Hero", title: "Home", icon: <House /> },
    { id: "Projects", title: "Projects", icon: <Folder /> },
    { id: "About", title: "About", icon: <Person /> },
    { id: "Contact", title: "Contact", icon: <Chat /> },
  ];

  // Context to get the active section and update function
  const { activeSection, updateActiveSection } = useActiveSection();

  // State to control indicator position, width, height, and y translate
  const [indicatorStyles, setIndicatorStyles] = useState({
    width: 0,
    height: 0,
    left: 0,
    y: 0,
  });

  const sectionsRef = useRef([]);
  const linksRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false); // State to manage manual scroll

  // Function to handle link click
  const handleLinkClick = useCallback(
    (index, id) => {
      if (!linksRef.current[index]) return;

      // Disable observer updates during manual scroll
      setIsManualScroll(true);

      // Update the active section in context
      updateActiveSection(id);

      // Update the indicator position, width, height, and y-translate
      const width = linksRef.current[index].offsetWidth;
      const height = linksRef.current[index].offsetHeight;
      const left = linksRef.current[index].offsetLeft;
      const y = 0; // Default Y translation for non-active

      // Update the indicator styles using state
      setIndicatorStyles({ width, height, left, y });

      // Set the active index
      setActiveIndex(index);

      // Scroll to the section
      if (id) {
        let section = document.getElementById(id);
        if (section) {
          document.querySelectorAll("main > section")[0] === section
            ? window.scrollTo({ top: 0 })
            : section.scrollIntoView({ behavior: "smooth" });
        }
      }

      // Re-enable observer updates after a delay (when the scroll is complete)
      setTimeout(() => setIsManualScroll(false), 500); // Adjust the delay based on scroll duration
    },
    [updateActiveSection] // Dependency on updateActiveSection
  );

  useEffect(() => {
    let sectionElements = document.querySelectorAll("main > section");
    if (sectionElements)
      Array.from(sectionElements).forEach((section) =>
        sectionsRef.current.push(section)
      );

    // Update the indicator styles based on the "Hero" button's position on initial mount
    if (linksRef.current[0]) {
      const width = linksRef.current[0].offsetWidth;
      const height = linksRef.current[0].offsetHeight;
      const left = linksRef.current[0].offsetLeft;

      setIndicatorStyles({ width, height, left, y: 0 });
    }

    // Handle window resize to update the indicator position
    const handleResize = () => {
      const activeIndex = linksRef.current.findIndex((link) =>
        link.classList.contains("link--active")
      );
      handleLinkClick(activeIndex !== -1 ? activeIndex : 0);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleLinkClick]);

  // Effect to update navbar when activeSection changes
  useEffect(() => {
    if (isManualScroll) return; // Skip observer updates during manual scroll

    const newIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    if (newIndex !== -1 && newIndex !== activeIndex) {
      // Update the active index and indicator position
      const width = linksRef.current[newIndex].offsetWidth;
      const height = linksRef.current[newIndex].offsetHeight;
      const left = linksRef.current[newIndex].offsetLeft;
      setIndicatorStyles({ width, height, left, y: 0 });
      setActiveIndex(newIndex);
    }
  }, [activeSection, isManualScroll, handleLinkClick]); // Depend on activeSection and isManualScroll

  return (
    <div className="navbar__wrapper">
      <nav id="Navbar">
        <ul className="themed">
          {sections.map((section, index) => (
            <li key={index}>
              <button
                ref={(el) => (linksRef.current[index] = el)}
                className={`button button--plain ${
                  index === activeIndex ? "link--active" : ""
                }`}
                onClick={() => handleLinkClick(index, section.id)}
              >
                <span className="title h6">{section.title}</span>
                <motion.div
                  className="link__icon"
                  initial={{ scale: index === activeIndex ? 1.15 : 1 }}
                  animate={{ scale: index === activeIndex ? 1.15 : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 24 }}
                >
                  {section.icon}
                </motion.div>
              </button>
            </li>
          ))}

          <motion.div
            className="indicator themed"
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
});

export default Navbar;
