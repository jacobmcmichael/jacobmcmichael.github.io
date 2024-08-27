/* Dependencies */
import React from "react";

/* Components */
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";

/* Stylesheets */
import "@/styles/header.css";

export default function Header() {
  return (
    <section id="Header">
      <Logo />
      <Navbar />
    </section>
  );
}
