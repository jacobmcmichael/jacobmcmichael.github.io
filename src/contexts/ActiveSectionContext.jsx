/* Dependencies */
import React, { createContext, useContext, useState, useCallback } from "react";

const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("");

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
  if (!context) {
    throw new Error("useActiveSection must be used within an ActiveSectionProvider");
  }
  return context;
};