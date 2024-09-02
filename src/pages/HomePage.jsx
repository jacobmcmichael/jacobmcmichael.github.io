/* Dependencies */
import React, { useRef, useEffect } from "react";

/* Contexts || Hooks */
import { useActiveSection } from "@/contexts/ActiveSectionContext";

/* Components */
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";

/* Sections */
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

/* Stylesheets */
import "@/styles/index.css";

export function Head() {
  return (
    <>
      <title>Jacob McMichael</title>
      {`TODO: Update Meta info`}
      <meta
        name="description"
        content="Welcome to the home page of My Awesome SPA"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=Unbounded:wght@200..900&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

export default function HomePage() {
  const { activeSection, updateActiveSection } = useActiveSection();
  const sectionRefs = useRef({
    Hero: null,
    Projects: null,
    About: null,
    Contact: null,
  });

  useEffect(() => {
    const visibilityMap = new Map(); // To store the visibility ratio of each section

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;

          // Update the visibility map with the current intersection ratio
          visibilityMap.set(target, intersectionRatio);

          // Find the section with the maximum visible ratio
          const [mostVisibleSection, maxRatio] = Array.from(
            visibilityMap.entries()
          ).reduce(
            (acc, [section, ratio]) => {
              if (ratio > acc[1]) return [section, ratio];
              return acc;
            },
            [null, 0]
          );

          // Check if the most visible section has changed
          if (mostVisibleSection && mostVisibleSection.id !== activeSection) {
            updateActiveSection(mostVisibleSection.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px", // Intersection area focusing on the middle part of the screen
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Observes at every 1% visibility
      }
    );

    // Observe each section
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // Clean up the observer on component unmount
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [activeSection, updateActiveSection]);

  return (
    <>
      <header id="Header" className="themed">
        <div className="header__inner">
          <Logo />
          <div className="header__actions">
            <ThemeToggle />
            <Navbar />
          </div>
        </div>
      </header>

      <main>
        <section id="Hero" ref={(el) => (sectionRefs.current.Hero = el)}>
          <Hero />
        </section>
        <section
          id="Projects"
          ref={(el) => (sectionRefs.current.Projects = el)}
        >
          <Projects />
        </section>
        <section id="About" ref={(el) => (sectionRefs.current.About = el)}>
          <About />
        </section>
        <section id="Contact" ref={(el) => (sectionRefs.current.Contact = el)}>
          <Contact />
        </section>
      </main>
    </>
  );
}
