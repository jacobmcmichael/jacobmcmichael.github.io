/* Dependencies */
import React from "react";

/* Components */
import { ArrowUpRight } from "@/components/Icons";

/* Stylesheets */
import "@/styles/contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact__inner">
        <h2 className="title h1">Let's Talk!</h2>

        <a
          className="button button--primary"
          href="mailto:jacobmcmichael@gmail.com"
          target="blank"
          rel="noopener noreferrer"
        >
          Get in Touch
          <ArrowUpRight />
        </a>
      </div>
    </>
  );
}
