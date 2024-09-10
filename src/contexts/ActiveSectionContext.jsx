/* Dependencies */
import React, { createContext, useContext, useState, useCallback } from "react";

const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Hero");

  const updateActiveSection = useCallback((section) => {
    setActiveSection(section);
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, updateActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  // If context is not available, provide a default fallback
  if (!context) {
    console.warn("useActiveSection is being used outside of an ActiveSectionProvider.");
    return {
      activeSection: "Hero", // Default fallback value
      updateActiveSection: () => {}, // No-op function
    };
  }
  
  return context;
};