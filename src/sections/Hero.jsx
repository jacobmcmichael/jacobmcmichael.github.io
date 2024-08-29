/* Dependencies */
import React from "react";
import Button from "@/components/Button";
import { ArrowDown, ArrowUpRight } from "@/components/Icons";

/* Stylesheets */
import "@/styles/hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero__top">
        <h1 className="top__title title">
          Frontend&<br></br>E-Commerce
        </h1>
        <Button
          customClass={"top__button"}
          type={"primary"}
          text={"See My Work"}
          icon={<ArrowDown />}
        />
      </div>
      <div className="hero__bottom">
        <div className="bottom__contact">
          <h2 className="h5 title">Let's Talk</h2>
          <a href="mailto:jacobmcmichael@gmail.com" target="_blank">
            jacobmcmichael<wbr></wbr>
            <span>
              @gmail.com
              <ArrowUpRight />
            </span>
          </a>
        </div>
        <p className="bottom__message">
          Nice to meet you! I'm Jake, a Frontend Developer with experience in
          e-commerce, web development, and scalable applications.
        </p>
      </div>
    </>
  );
}
