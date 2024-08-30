/* Dependencies */
import React from "react";
import { motion } from "framer-motion";

/* Components */
import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import Button from "@/components/Button";
import { ArrowDown, ArrowUpRight } from "@/components/Icons";

/* Data */
import links from "@/data/hero.json";

/* Stylesheets */
import "@/styles/hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero__top">
        <h1 className="top__title title">
          <AnimatedHeroTitle />
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
            {links.map((link, index) => (
              <li key={index}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.displayText}
                  <wbr></wbr>
                  <span>
                    {link.spanText}
                    <ArrowUpRight />
                  </span>
                </motion.a>
              </li>
            ))}
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
