/* Dependencies */
import React from "react";
import { ActiveSectionProvider } from "@/contexts/ActiveSectionContext";

/* Pages */
import HomePage from "@/pages/HomePage";

/* Stylesheets */
import "@/styles/_reset.css";
import "@/styles/_variables.css";
import "@/styles/_global.css";

export default function App() {
  return (
    <ActiveSectionProvider>
      <HomePage />
    </ActiveSectionProvider>
  );
}
