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

export default function HomePage() {
  const headerRef = useRef(null);

  const { activeSection, updateActiveSection } = useActiveSection();
  const sectionRefs = useRef({
    Hero: null,
    Projects: null,
    About: null,
    Contact: null,
  });

  useEffect(() => {
    // Function to update header height
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const currentHeight = headerRef.current.offsetHeight;
        document.body.style.setProperty(
          "--header-height",
          `${currentHeight}px`
        );
      }
    };

    // Initial header height calculation
    updateHeaderHeight();

    // Add event listener on window resize
    window.addEventListener("resize", updateHeaderHeight);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const visibilityMap = new Map(); // To store the visibility ratio of each section
    let isAtBottom = false; // Track if the user is at the bottom

    const observer = new IntersectionObserver(
      (entries) => {
        if (isAtBottom) return; // Do not update from observer if at bottom

        entries.forEach((entry) => {
          const { target, intersectionRatio } = entry;

          // Update the visibility map with the current intersection ratio
          visibilityMap.set(target, intersectionRatio);

          // Find the section with the maximum visible ratio
          const [mostVisibleSection] = Array.from(
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

    // Capture current reference to avoid potential stale values in cleanup function
    const currentSectionRefs = { ...sectionRefs.current }; // Create a shallow copy of the current sectionRefs

    // Observe each section
    Object.values(currentSectionRefs).forEach((section) => {
      if (section) observer.observe(section);
    });

    // Function to check if the user has scrolled to the bottom
    const handleScroll = () => {
      const contactSection = document.getElementById("Contact");
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - contactSection.offsetHeight;

      console.log(isBottom, activeSection);

      if (isBottom) {
        isAtBottom = true;
        if (activeSection !== "Contact") {
          updateActiveSection("Contact");
        }
      } else {
        // If scrolling away from the bottom, reset the isAtBottom flag
        if (isAtBottom) {
          isAtBottom = false; // Reset the flag
          visibilityMap.clear(); // Clear visibility map to force a fresh observer calculation
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the observer and scroll event listener on component unmount
      Object.values(currentSectionRefs).forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, updateActiveSection]);

  return (
    <>
      <header id="Header" className="themed" ref={headerRef}>
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
