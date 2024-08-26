/* Dependencies */
import React from "react";

/* Layouts */
import Header from "@/components/Header";
import Home from "@/layouts/Home";
import Hero from "@/sections/Hero";

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
  return (
    <main>
      <Header />

      <Home>
        <Hero />
      </Home>
    </main>
  );
}
