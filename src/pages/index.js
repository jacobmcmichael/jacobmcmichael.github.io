/* Dependencies */
import React, { useRef, useState, useEffect } from "react";

/* Layouts */
import HomeLayout from "@/layouts/HomeLayout";

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
  const sections = [
    { id: "Hero", component: <Hero /> },
    { id: "Projects", component: <Projects /> },
    { id: "About", component: <About /> },
    { id: "Contact", component: <Contact /> },
  ];

  const sectionsRefs = useRef([]);
  const [activeTheme, setActiveTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    document.body.setAttribute("data-theme", activeTheme);

    const observerCallback = (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => ({
          id: entry.target.id,
          intersectionRatio: entry.intersectionRatio,
        }));

      if (visibleSections.length) {
        const mostVisibleSection = visibleSections.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );

        // Only update if the most visible section has changed
        if (mostVisibleSection.id !== activeSection) {
          setActiveSection(mostVisibleSection.id);
        }
      }
    };

    const observerOptions = {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sectionsRefs.current.forEach((ref) => ref && observer.observe(ref));

    // Cleanup function to remove all observers
    return () => observer.disconnect();
  }, [activeTheme, activeSection]);

  return (
    <>
      <div id="Hero" className="visually-hidden"></div>

      <header id="Header" className="themed">
        <div className="header__inner">
          <Logo />
          <div className="header__actions">
            <ThemeToggle
              activeTheme={activeTheme}
              setActiveTheme={setActiveTheme}
            />
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        </div>
      </header>

      <main>
        <HomeLayout>
          {sections.map((section, index) => (
            <section
              key={index}
              id={section.id}
              className={section.id === activeSection ? "section--active" : ""}
              ref={(el) => (sectionsRefs.current[index] = el)}
            >
              {section.component}
            </section>
          ))}
        </HomeLayout>
      </main>
    </>
  );
}
