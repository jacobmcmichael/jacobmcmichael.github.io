/* Dependencies */
import React from "react";

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

  return (
    <>
      <div id="Hero" className="visually-hidden"></div>

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
        <HomeLayout>
          {sections.map((section, index) => (
            <section
              key={index}
              id={section.id}
            >
              {section.component}
            </section>
          ))}
        </HomeLayout>
      </main>
    </>
  );
}
