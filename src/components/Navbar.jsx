/* Dependencies */
import React, { useState, useEffect } from "react";

/* Components */
import Button from "@/components/Button";

/* Stylesheets */
import "@/styles/navbar.css";

const Navbar = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Select all sections when the component mounts
    const sectionElements = Array.from(
      document.querySelectorAll("main > section")
    );
    setSections(sectionElements);
  }, []);

  return (
    <nav id="Navbar">
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            {/* Assuming each section has an id */}
            <Button
              type="plain"
              text={section.getAttribute("data-title") || section.id}
              scrollTo={index === 0 ? 0 : `#${section.id}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
