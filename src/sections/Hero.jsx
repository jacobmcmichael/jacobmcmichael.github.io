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
          <ul className="contact__links">
            <li>
              <a
                href="mailto:jacobmcmichael@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                jacobmcmichael<wbr></wbr>
                <span>
                  @gmail.com
                  <ArrowUpRight />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jacobmcmichael/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/<wbr></wbr>
                <span>
                  jacobmcmichael
                  <ArrowUpRight />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jacobmcmichael"
                target="_blank"
                rel="noreferrer"
              >
                github.com/<wbr></wbr>
                <span>
                  jacobmcmichael
                  <ArrowUpRight />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <p className="bottom__message constrain">
          Nice to meet you! I'm Jake, a Frontend Developer with experience in
          e-commerce, web development, and scalable applications.
        </p>
      </div>
    </>
  );
}
