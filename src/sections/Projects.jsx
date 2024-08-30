/* Dependencies */
import React from "react";
import { ArrowRight } from "@/components/Icons";

/* Stylesheets */
import "@/styles/projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects__header">
        <h2 className="header__title h4 title">Projects</h2>
        <a className="header__link link--with-icon">
          <span>More</span>
          <ArrowRight />
        </a>
      </div>
      <div className="projects__description"></div>
      <div className="projects__layout"></div>
    </>
  );
}
