/* Dependencies */
import React from "react";
import Button from "@/components/Button";
import { ArrowDown } from "@/components/Icons";

/* Stylesheets */
import "@/styles/hero.css";

export default function Hero() {
  return (
    <>
      <h1 className="hero__title title">
        Frontend&<br></br>E-Commerce
      </h1>
      <Button
        customClass={"hero__button"}
        type={"primary"}
        text={"See My Work"}
        icon={<ArrowDown />}
      />
      <div className="hero__intro">
        <div className="intro__contact">
          <h2 className="h5 title">Let's Talk</h2>
          <a href="mailto:jacobmcmichael@gmail.com" target="_blank">jacobmcmichael<span>@gmail.com</span></a>
        </div>
        <p className="intro__message">
          Nice to meet you! I'm Jake, a Frontend Developer with experience in
          e-commerce, web development, and scalable applications.
        </p>
      </div>
    </>
  );
}
